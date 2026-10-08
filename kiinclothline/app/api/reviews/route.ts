import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type Review = {
  id: string;
  name: string;
  rating: number;
  note: string;
  image?: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "reviews.json");
const REVIEW_IMAGES = path.join(process.cwd(), "public", "reviews");
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

async function readAll(): Promise<Review[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Review[];
  } catch {
    return [];
  }
}

function imageExtension(bytes: Buffer) {
  if (bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "jpg";
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return "webp";
  return null;
}

export async function GET() {
  return Response.json((await readAll()).reverse());
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Please submit the review form again." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim().slice(0, 80);
  const note = String(form.get("note") ?? "").trim().slice(0, 1500);
  const rating = Number(form.get("rating"));
  const hasWornSuit = form.get("hasWornSuit") === "on";
  const consent = form.get("consent") === "on";
  const image = form.get("image");

  if (!name || !note || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return Response.json({ error: "Please add your name, a note and a star rating." }, { status: 400 });
  }
  if (!hasWornSuit || !consent) {
    return Response.json({ error: "Please confirm you have worn a Kiin suit and agree to publish your review." }, { status: 400 });
  }

  const id = randomUUID();
  let imagePath: string | undefined;
  if (image instanceof File && image.size > 0) {
    if (image.size > MAX_IMAGE_SIZE) {
      return Response.json({ error: "Please choose an image smaller than 5 MB." }, { status: 400 });
    }
    const bytes = Buffer.from(await image.arrayBuffer());
    const extension = imageExtension(bytes);
    if (!extension) {
      return Response.json({ error: "Please upload a JPG, PNG or WebP image." }, { status: 400 });
    }
    await fs.mkdir(REVIEW_IMAGES, { recursive: true });
    imagePath = `/reviews/${id}.${extension}`;
    await fs.writeFile(path.join(REVIEW_IMAGES, `${id}.${extension}`), bytes, { flag: "wx" });
  }

  const review: Review = { id, name, rating, note, image: imagePath, createdAt: new Date().toISOString() };
  await fs.mkdir(DATA_DIR, { recursive: true });
  const all = await readAll();
  all.push(review);
  await fs.writeFile(FILE, JSON.stringify(all, null, 2));
  return Response.json({ ok: true, review }, { status: 201 });
}
