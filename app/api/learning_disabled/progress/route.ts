export const runtime = "nodejs";
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

    const progress = await prisma.learningProgress.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return NextResponse.json({ success: true, data: progress });
  } catch (error) {
    console.error("[LEARNING_PROGRESS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
