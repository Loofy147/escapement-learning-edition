import type { LearningEvent } from "./learningState";
export type ConceptLearningDelta = { conceptId:string; pre:number|null; post:number|null; delayed:number|null; postDelta:number|null; delayedDelta:number|null };
export function buildTemporalLearningReport(events:LearningEvent[]):ConceptLearningDelta[]{
  const byConcept:Record<string,{pre?:number;post?:number;delayed?:number}>={};
  for(const event of events.filter((e):e is Extract<LearningEvent,{kind:"assessment"}=>e.kind==="assessment")){
    for(const [conceptId,score] of Object.entries(event.conceptScores??{})){ const v=byConcept[conceptId]??={}; v[event.stage]=score; }
  }
  return Object.entries(byConcept).map(([conceptId,v])=>({conceptId,pre:v.pre??null,post:v.post??null,delayed:v.delayed??null,postDelta:v.pre===undefined||v.post===undefined?null:v.post-v.pre,delayedDelta:v.pre===undefined||v.delayed===undefined?null:v.delayed-v.pre}));
}
export function misconceptionTrend(events:LearningEvent[]){
  const stages=["pre","post","delayed"] as const; const totals:Record<string,{pre:number;post:number;delayed:number}>={};
  for(const event of events.filter((e):e is Extract<LearningEvent,{kind:"assessment"}=>e.kind==="assessment")){
    for(const [conceptId,count] of Object.entries(event.misconceptionCounts??{})){ const v=totals[conceptId]??={pre:0,post:0,delayed:0}; v[event.stage]+=count; }
  }
  return Object.entries(totals).map(([conceptId,v])=>({conceptId,...v,postDelta:v.post-v.pre,delayedDelta:v.delayed-v.pre}));
}
