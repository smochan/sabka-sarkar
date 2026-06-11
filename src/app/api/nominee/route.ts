import { NextResponse } from "next/server";
import { getNominee } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const id = Number(params.get("id"));
  const voter = params.get("voter") ?? "";
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json(
      { success: false, error: "Invalid id." },
      { status: 400 }
    );
  }
  try {
    const data = await getNominee(id, voter);
    if (!data) {
      return NextResponse.json(
        { success: false, error: "Not found." },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not load nominee." },
      { status: 500 }
    );
  }
}
