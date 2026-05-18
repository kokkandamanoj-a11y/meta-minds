import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface AssessmentResult {
  skillId: string;
  score: number;
  passed: boolean;
}

interface OnboardingState {
  selectedSkills: string[];
  resumeUrl: string | null;
  portfolioUrls: string[];
  githubConnected: boolean;
  assessmentResults: AssessmentResult[];
  
  // Actions
  setSelectedSkills: (skills: string[]) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  setResumeUrl: (url: string | null) => void;
  setPortfolioUrls: (urls: string[]) => void;
  addPortfolioUrl: (url: string) => void;
  setGithubConnected: (connected: boolean) => void;
  addAssessmentResult: (result: AssessmentResult) => void;
  resetOnboarding: () => void;
}

const initialState = {
  selectedSkills: [],
  resumeUrl: null,
  portfolioUrls: [],
  githubConnected: false,
  assessmentResults: [],
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setSelectedSkills: (skills) => set({ selectedSkills: skills }),
      
      addSkill: (skill) => set((state) => ({ 
        selectedSkills: [...new Set([...state.selectedSkills, skill])] 
      })),
      
      removeSkill: (skill) => set((state) => ({ 
        selectedSkills: state.selectedSkills.filter((s) => s !== skill) 
      })),
      
      setResumeUrl: (url) => set({ resumeUrl: url }),
      
      setPortfolioUrls: (urls) => set({ portfolioUrls: urls }),
      
      addPortfolioUrl: (url) => set((state) => ({ 
        portfolioUrls: [...new Set([...state.portfolioUrls, url])] 
      })),
      
      setGithubConnected: (connected) => set({ githubConnected: connected }),
      
      addAssessmentResult: (result) => set((state) => ({
        // Replace existing result for the same skill, or add new
        assessmentResults: [
          ...state.assessmentResults.filter(r => r.skillId !== result.skillId), 
          result
        ]
      })),
      
      resetOnboarding: () => set(initialState),
    }),
    {
      name: 'onboarding-storage', // Unique key for localStorage
      storage: createJSONStorage(() => localStorage), // Defaults to localStorage, explicitly defining for clarity
    }
  )
);
