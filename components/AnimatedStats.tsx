"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { Users, Building2, CheckCircle2 } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Simple counter animation hook
function useCountUp(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  return count;
}

function StatCard({ 
  title, 
  value, 
  icon: Icon 
}: { 
  title: string; 
  value: number; 
  icon: React.ElementType 
}) {
  const displayValue = useCountUp(value);
  
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-secondary/20 rounded-2xl border border-border/40 hover:bg-secondary/30 transition-colors">
      <div className="p-3 bg-primary/10 rounded-xl mb-2 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-4xl font-extrabold text-foreground tracking-tight">
        {displayValue.toLocaleString()}{value > 0 ? '+' : ''}
      </h3>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
    </div>
  );
}

export function AnimatedStats() {
  const { data, error, isLoading } = useSWR('/api/stats', fetcher);

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-20 p-8 text-center bg-destructive/10 text-destructive rounded-2xl border border-destructive/20 text-sm font-medium">
        Failed to load live statistics. Please try again later.
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-44 bg-secondary/20 rounded-2xl border border-border/40 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
      <StatCard title="Active Learners" value={data.totalUsers || 0} icon={Users} />
      <StatCard title="Startups Enrolled" value={data.startups || 0} icon={Building2} />
      <StatCard title="Completed Projects" value={data.completedProjects || 0} icon={CheckCircle2} />
    </div>
  );
}
