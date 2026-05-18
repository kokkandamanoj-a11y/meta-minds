import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Sparkles, BookOpen, Target, Zap } from "lucide-react";
import { AnimatedStats } from "@/components/AnimatedStats";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Meta Minds
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#assessments" className="hover:text-foreground transition-colors">Assessments</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex rounded-full px-6">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="rounded-full px-6 shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 opacity-50 blur-[120px] rounded-full pointer-events-none dark:bg-primary/10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 opacity-50 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container px-4 md:px-8 relative z-10 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 hover:bg-primary/10 transition-colors cursor-pointer">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Elevating technical talent globally</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mb-6 text-balance leading-tight">
            Master the future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient-x">
              Meta Minds
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
            Unlock personalized learning paths, real-world assessments, and AI-driven insights to accelerate your career growth and build world-class skills.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-xl shadow-primary/25 group">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
            <Link href="#programs" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full hover:bg-muted/50 border-border/50">
                Explore Curriculum
              </Button>
            </Link>
          </div>

          {/* Animated Stats Section */}
          <AnimatedStats />

          {/* Feature Highlights beneath Hero */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl border-t border-border/40 pt-12">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="p-3 bg-secondary/50 rounded-2xl text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Targeted Assessments</h3>
              <p className="text-sm text-muted-foreground leading-snug">Evaluate your proficiency and find skill gaps instantly.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="p-3 bg-secondary/50 rounded-2xl text-purple-500">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Adaptive Learning</h3>
              <p className="text-sm text-muted-foreground leading-snug">Content dynamically adjusts to your pace and performance.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="p-3 bg-secondary/50 rounded-2xl text-blue-500">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Industry Curriculums</h3>
              <p className="text-sm text-muted-foreground leading-snug">Syllabi crafted alongside top engineering leaders.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
