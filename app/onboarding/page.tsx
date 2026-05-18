"use client";

import { useState } from "react";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { Button } from "@/components/ui/button";
import { Code2, Database, LayoutTemplate, Server, Cloud, Cpu, ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

const AVAILABLE_SKILLS = [
  { id: "react", name: "React / Next.js", icon: LayoutTemplate, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { id: "node", name: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
  { id: "python", name: "Python", icon: Code2, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { id: "postgres", name: "PostgreSQL", icon: Database, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { id: "aws", name: "AWS Cloud", icon: Cloud, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { id: "sysdesign", name: "System Design", icon: Cpu, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
];

export default function OnboardingSkillsPage() {
  const router = useRouter();
  const { selectedSkills, addSkill, removeSkill } = useOnboardingStore();
  
  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      removeSkill(skillId);
    } else {
      addSkill(skillId);
    }
  };

  const handleContinue = () => {
    router.push("/onboarding/resume");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">What are your superpowers?</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Select the technical skills you want to be assessed on and highlighted in your talent profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AVAILABLE_SKILLS.map((skill) => {
              const isSelected = selectedSkills.includes(skill.id);
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group flex flex-col items-start gap-4 select-none
                    ${isSelected ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10 scale-[1.02]' : 'border-border/60 hover:border-primary/50 hover:bg-secondary/40 hover:shadow-md'}
                  `}
                >
                  <div className={`p-3 rounded-xl ${skill.bg} ${skill.border} border transition-colors group-hover:bg-background`}>
                    <Icon className={`w-7 h-7 ${skill.color}`} />
                  </div>
                  <span className="font-bold text-lg">{skill.name}</span>
                  
                  {isSelected && (
                    <div className="absolute top-5 right-5 bg-primary text-primary-foreground p-1.5 rounded-full shadow-sm animate-in zoom-in duration-200">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sidebar Summary */}
      <div className="w-full md:w-80 lg:w-96 bg-secondary/20 border-l border-border/40 p-8 flex flex-col h-auto md:h-screen sticky top-0 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)]">
        <h3 className="font-extrabold text-2xl mb-8 tracking-tight">Your Profile</h3>
        
        <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Selected Skills</h4>
              <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                {selectedSkills.length} selected
              </span>
            </div>
            
            {selectedSkills.length === 0 ? (
              <div className="text-sm text-muted-foreground font-medium p-5 bg-background rounded-2xl border-2 border-dashed border-border text-center">
                Select at least one skill to continue building your profile.
              </div>
            ) : (
              <ul className="space-y-3">
                {selectedSkills.map(id => {
                  const skill = AVAILABLE_SKILLS.find(s => s.id === id);
                  return skill ? (
                    <li key={id} className="flex items-center gap-4 bg-background p-3.5 rounded-xl border border-border/50 shadow-sm animate-in slide-in-from-left-4 fade-in duration-300">
                      <div className={`p-2 rounded-lg ${skill.bg}`}>
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </li>
                  ) : null;
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 bg-secondary/20">
          <Button 
            size="lg" 
            className="w-full h-14 text-base font-bold rounded-2xl shadow-lg shadow-primary/25 group transition-all"
            disabled={selectedSkills.length === 0}
            onClick={handleContinue}
          >
            Continue
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Button>
          <p className="text-xs text-center text-muted-foreground font-medium mt-5">
            Next step: Resume & Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
