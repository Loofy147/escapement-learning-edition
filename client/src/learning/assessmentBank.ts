export type AssessmentStage = "pre" | "post" | "delayed";
export type AssessmentItem = { id:string; conceptId:string; misconceptionId:string; prompt:string; options:string[]; correctOption:number; };
export const assessmentItems: AssessmentItem[] = [
  { id:"ass-rate", conceptId:"rate", misconceptionId:"M-PRECISION-001", prompt:"Which observation best separates accuracy from repeatability?", options:["Repeated readings cluster tightly around +3 s/d.","A single reading is near zero.","The dial has a readable scale."], correctOption:0 },
  { id:"ass-position", conceptId:"position", misconceptionId:"M-POSITION-001", prompt:"A watch differs by several seconds per day between orientations. What should you treat as evidence first?", options:["The positional spread itself.","Only the average rate.","The case color."], correctOption:0 },
  { id:"ass-amplitude", conceptId:"amplitude", misconceptionId:"M-AMPLITUDE-001", prompt:"A falling amplitude with correct locking most directly suggests investigating:", options:["Energy delivery and losses.","Only the regulator.","The printed dial."], correctOption:0 },
  { id:"ass-escape", conceptId:"escapement", misconceptionId:"M-ESCAPEMENT-001", prompt:"What is the useful mental model of an escapement?", options:["A timed energy gate linking train and oscillator.","A continuous gear mesh.","A display-only mechanism."], correctOption:0 },
  { id:"ass-chrono", conceptId:"chronometer", misconceptionId:"M-CHRONOMETER-001", prompt:"A chronometer designation primarily communicates:", options:["Tested timekeeping performance under a defined regime.","The presence of a stopwatch.","A guarantee of identical daily wear."], correctOption:0 },
  { id:"ass-cosc", conceptId:"COSC", misconceptionId:"M-COSC-001", prompt:"Why does certification scope matter?", options:["Because the object and conditions tested define what the result supports.","Because all tests are interchangeable.","Because the largest number is always strongest."], correctOption:0 },
];
export function gradeAssessmentItem(item:AssessmentItem, answer:number|null){ return {correct:answer===item.correctOption,conceptId:item.conceptId,misconceptionId:item.misconceptionId}; }
export function summarizeAssessment(items:AssessmentItem[], answers:Record<string,number|null>){
  const totals:Record<string,{correct:number;total:number;misconceptions:number}>={};
  for(const item of items){ const e=totals[item.conceptId]??={correct:0,total:0,misconceptions:0}; e.total++; if(answers[item.id]===item.correctOption)e.correct++; else e.misconceptions++; }
  const conceptScores=Object.fromEntries(Object.entries(totals).map(([id,v])=>[id,v.total?v.correct/v.total:0]));
  const misconceptionCounts=Object.fromEntries(Object.entries(totals).map(([id,v])=>[id,v.misconceptions]));
  const total=Object.values(totals).reduce((n,v)=>n+v.total,0); const correct=Object.values(totals).reduce((n,v)=>n+v.correct,0);
  return {score:total?correct/total:0,conceptScores,misconceptionCounts};
}
