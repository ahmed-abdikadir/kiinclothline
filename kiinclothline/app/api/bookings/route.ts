import { promises as fs } from "fs";
import path from "path";
import type { NextRequest } from "next/server";
import { FIELDS, validateBooking, type Booking } from "@/app/lib/booking";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "bookings.json");

async function readAll(): Promise<Booking[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const error = validateBooking(input);
  if (error) return Response.json({ error }, { status: 400 });

  const booking = { id: Date.now().toString(36), createdAt: new Date().toISOString() } as Booking;
  for (const f of FIELDS) booking[f] = String(input[f] ?? "").trim().slice(0, 1000);

  await fs.mkdir(DATA_DIR, { recursive: true });
  const all = await readAll();
  all.push(booking);
  await fs.writeFile(FILE, JSON.stringify(all, null, 2));
  return Response.json({ ok: true, id: booking.id }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!key || key !== (process.env.ADMIN_KEY || "kiin-admin")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return Response.json((await readAll()).reverse());
}
