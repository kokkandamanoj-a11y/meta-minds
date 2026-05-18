import { BrainCircuit, CheckCircle2, FileText, Trophy, TrendingUp, ChevronRight, Lock } from "lucide-react";

export default function DashboardPage() {
  // Mock Data
  const resumeCompletion = 75; // Percentage
  const assessments = [
    { id: 1, title: "Frontend Engineering Core", status: "COMPLETED", score: 92 },
    { id: 2, title: "React Advanced Patterns", status: "IN_PROGRESS", score: null },
    { id: 3, title: "System Design", status: "PENDING", score: null },
  ];
  const learningProgress = [
    { id: 1, course: "Fullstack Next.js", progress: 60 },
    { id: 2, course: "PostgreSQL Mastery", progress: 35 },
    { id: 3, course: "Algorithms & Data Structures", progress: 10 },
  ];
  const userTier = "Pro";
  
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 lg:px-24">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">Here is what's happening with your talent profile today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        
        {/* Tier Card (Spans 1 col) */}
        <div className="col-span-1 rounded-3xl p-6 bg-gradient-to-br from-primary to-purple-600 text-white shadow-xl shadow-primary/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/30 transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
            <Trophy className="w-32 h-32" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md mb-4 border border-white/20">
                Current Tier
              </div>
              <h2 className="text-4xl font-extrabold mb-1 tracking-tight">{userTier}</h2>
              <p className="text-white/80 text-sm font-medium">Top 15% of all talent</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-semibold">Next milestone: Elite</p>
                <p className="text-xs font-bold">65%</p>
              </div>
              <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-[65%] shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Completion */}
        <div className="col-span-1 md:col-span-2 rounded-3xl p-6 md:p-8 bg-secondary/30 border border-border/50 flex flex-col md:flex-row gap-8 items-center hover:bg-secondary/40 transition-colors">
          <div className="relative w-32 h-32 shrink-0 group">
            {/* Circular Progress Mock */}
            <svg className="w-full h-full -rotate-90 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="3"></circle>
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" strokeWidth="3" strokeDasharray="100" strokeDashoffset={100 - resumeCompletion} strokeLinecap="round"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">{resumeCompletion}%</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Resume Completion
            </h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Your profile is missing a few key details. Complete it to stand out to top startups and unlock exclusive elite roles.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold border border-primary/20 transition-colors">
                Add Portfolio Link <span className="opacity-70 ml-1">+10%</span>
              </button>
              <button className="px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold border border-primary/20 transition-colors">
                Add Work History <span className="opacity-70 ml-1">+15%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Assessment Status */}
        <div className="col-span-1 md:col-span-2 rounded-3xl p-6 md:p-8 bg-secondary/20 border border-border/40">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Assessment Status
            </h3>
            <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">View all</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {assessments.map((assessment) => (
              <div key={assessment.id} className="flex flex-col p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/40 transition-all hover:shadow-md cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    assessment.status === 'COMPLETED' ? 'bg-green-500/10 text-green-500' :
                    assessment.status === 'IN_PROGRESS' ? 'bg-primary/10 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {assessment.status === 'COMPLETED' ? <CheckCircle2 className="w-5 h-5" /> : 
                     assessment.status === 'IN_PROGRESS' ? <TrendingUp className="w-5 h-5" /> : 
                     <Lock className="w-5 h-5" />}
                  </div>
                  {assessment.status === 'COMPLETED' && (
                    <span className="text-xs font-bold bg-green-500/10 text-green-500 px-2 py-1 rounded-md">
                      {assessment.score}%
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{assessment.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {assessment.status === 'COMPLETED' ? 'Mastered' : 
                     assessment.status === 'IN_PROGRESS' ? 'Resume assessment' : 'Locked'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div className="col-span-1 rounded-3xl p-6 md:p-8 bg-secondary/20 border border-border/40">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-primary" />
              Learning
            </h3>
          </div>
          <div className="space-y-6">
            {learningProgress.map((course) => (
              <div key={course.id} className="group">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="font-semibold text-sm truncate pr-4 group-hover:text-primary transition-colors">{course.course}</h4>
                  <span className="text-xs font-bold text-primary">{course.progress}%</span>
                </div>
                <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative" style={{ width: `${course.progress}%` }}>
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-all active:scale-[0.98]">
            Explore Courses
          </button>
        </div>

      </div>
    </div>
  );
}
