export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 1. Total users
    const totalUsers = await prisma.user.count();

    // 2. Startups
    const startups = 0;

    // 3. Completed projects
    const completedProjects = await prisma.assessment.count({
      where: {
        status: "COMPLETED"
      }
    });

    return NextResponse.json({
      totalUsers,
      startups,
      completedProjects
    });
  } catch (error) {
    console.error("[STATS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}