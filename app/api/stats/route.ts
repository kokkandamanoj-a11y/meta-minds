import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 1. Total users
    const totalUsers = await prisma.user.count();
    
    // 2. Startups
    // Note: A 'Startup' model doesn't exist in the current Prisma schema,
    // so we're returning a placeholder 0. Once you add a Startup model,
    // you can update this to: await prisma.startup.count()
    const startups = 0; 
    
    // 3. Completed projects
    // Note: A 'Project' model doesn't exist yet, so we're using completed 
    // assessments as a placeholder for completed projects.
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
