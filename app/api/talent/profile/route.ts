export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await prisma.talentProfile.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    console.error("[TALENT_PROFILE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
