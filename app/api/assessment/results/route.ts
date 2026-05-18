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

    const assessments = await prisma.assessment.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return NextResponse.json({ success: true, data: assessments });
  } catch (error) {
    console.error("[ASSESSMENT_RESULTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
