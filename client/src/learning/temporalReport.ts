import type { LearningEvent } from "./learningState";
export type ConceptLearningDelta = { conceptId:string; pre:number|null; post:number|null; delayed:number|null; postDelta:number|null; delayedDelta:number|null };
export function buildTemporalLearningReport(events: LearningEvent[]): ConceptLearningDelta[] {
  const assessmentEvents=events.filter((e): e is Extract<LearningEvent,{kind:"assessment"}> => e.kind==="assessment");
  const stages = ["pre","post","delayed"] as const;
  const byConcept: Record<string, {pre?:number;post?:number;delayed?:number}> = {};
  for(const event of assessmentEvents){
    const breakdown=(event as any).conceptScores as Record<string,number>|undefined;
    if(!breakdown) continue;
    for(const [conceptId,score] of Object.entries(breakdown)){
      const current=byConcept[conceptId]??={};
      current[event.stage]=score;
    }
  }
  return Object.entries(byConcept).map(([conceptId,v])=>({conceptId,pre:v.pre??null,post:v.post??null,delayed:v.delayed??null,postDelta:v.pre===undefined||v.post===undefined?null:v.post-v.pre,delayedDelta:v.pre===undefined||v.delayed===undefined?null:v.delayed-v.pre}));
}
export function misconceptionDelta(events: LearningEvent[], conceptId:string){
  const counts={pre:0,post:0,delayed:0};
  for(const event of events.filter((e): e is Extract<LearningEvent,{kind:"assessment"}> => e.kind==="assessment")){
    const m=(event as any).misconceptionCounts as Record<string,number>|undefined;
    counts[event.stage]+=m?.[conceptId]??0;
  }
  return {conceptId,...counts,postDelta:counts.post-counts.pre,delayedDelta:counts.delayed-counts.pre};
}
