import { describe, expect, it } from "vitest";
import { concepts, exercises } from "../content/model";
import { activityConceptMap, learningActivitiesFromCatalog } from "./activityConceptMap";

describe("activity concept mapping", () => {
  it("maps every catalog activity explicitly to one or more known concepts", () => {
    const mapped = learningActivitiesFromCatalog(exercises, concepts);
    expect(mapped).toHaveLength(exercises.length);
    expect(mapped.every((activity) => activity.conceptIds.length > 0)).toBe(true);
    expect(mapped.every((activity) => activity.conceptIds.every((id) => concepts.some((concept) => concept.id === id)))).toBe(true);
  });

  it("does not infer concept membership from chapter membership", () => {
    const mapped = learningActivitiesFromCatalog(exercises, concepts);
    const rate = mapped.find((activity) => activity.id === "ex-rate");
    expect(rate?.conceptIds).toEqual(["rate"]);
    expect(rate?.conceptIds).not.toContain("isochronism");
    expect(rate?.conceptIds).not.toContain("position");
  });

  it("keeps the explicit mapping contract visible", () => {
    expect(activityConceptMap["ex-sequence"]).toEqual(["escapement", "impulse"]);
    expect(activityConceptMap["ex-experiment"]).toEqual(["position", "rate", "amplitude"]);
  });

  it("fails loudly when a new activity has no mapping", () => {
    const extended = [...exercises, { ...exercises[0], id: "unmapped-activity" }];
    expect(() => learningActivitiesFromCatalog(extended, concepts)).toThrow(/Missing explicit concept mapping/);
  });
});
