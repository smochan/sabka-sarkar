import { NextResponse } from "next/server";
import { addNominee } from "@/lib/db";
import { nominateSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = nominateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: parsed.error.issues[0]?.message ?? "Invalid input.",
      },
      { status: 422 }
    );
  }

  try {
    const { portfolioSlug, name, note } = parsed.data;
    const nominee = await addNominee(portfolioSlug, name, note ?? "");
    if (!nominee) {
      return NextResponse.json(
        { success: false, error: "Could not save that nomination." },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true, data: nominee }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not save that nomination." },
      { status: 500 }
    );
  }
}
