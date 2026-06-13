import { NextResponse, after } from "next/server";
import { addNominee, createDraft, nomineeHasProfile } from "@/lib/db";
import { nominateSchema } from "@/lib/schema";
import { researchNominee, aiConfigured } from "@/lib/ai";
import { portfolios } from "@/content/cabinet";

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

    // After responding, draft a Wikipedia-grounded profile for admin review.
    // Never blocks the user; never auto-publishes (lands in the review queue).
    if (aiConfigured() && !nominee.isSeed) {
      const portfolio = portfolios.find((p) => p.slug === portfolioSlug);
      after(async () => {
        try {
          if (await nomineeHasProfile(nominee.id)) return;
          const res = await researchNominee({
            name: nominee.name,
            ministry: portfolio?.name ?? portfolioSlug,
            mandate: portfolio?.mandate ?? "",
          });
          if (res) {
            await createDraft({ nomineeId: nominee.id, ...res });
          }
        } catch (err) {
          console.error("nominee research failed:", err);
        }
      });
    }

    return NextResponse.json({ success: true, data: nominee }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not save that nomination." },
      { status: 500 }
    );
  }
}
