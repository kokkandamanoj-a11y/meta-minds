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

    const [profile, learningProgress, assessments] = await Promise.all([
      prisma.talentProfile.findUnique({
        where: { userId: session.user.id }
      }),
      prisma.learningProgress.findMany({
        where: { userId: session.user.id },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.assessment.findMany({
        where: { userId: session.user.id },
        orderBy: { updatedAt: 'desc' }
      })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        talentProfile: profile,
        learningProgress,
        assessments
      }
    });
  } catch (error) {
    console.error("[TALENT_DASHBOARD_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
