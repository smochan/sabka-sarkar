import { NextResponse } from "next/server";
import { getTally } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const voter = new URL(request.url).searchParams.get("voter") ?? "";
  try {
    const data = await getTally(voter);
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not load nominations right now." },
      { status: 500 }
    );
  }
}
