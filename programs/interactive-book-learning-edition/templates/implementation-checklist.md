# Interactive Book Learning Edition Checklist

## Source integrity

- [ ] Canonical source is versioned and rights-cleared.
- [ ] Every chapter has a stable id, title, summary, objectives, prerequisites, and estimated effort.
- [ ] Every section has a stable anchor.
- [ ] References and glossary terms are linked to source context.

## Learning layer

- [ ] Concepts are independent records.
- [ ] Activities cover at least three reasoning modes.
- [ ] Validation is deterministic and unit-tested.
- [ ] Correct, incomplete, and misconception feedback states are distinct.
- [ ] Every activity has a hint, retry path, explanation, and exact source anchor.

## Progress

- [ ] Anonymous local progress works without login.
- [ ] Authenticated reads and upserts are protected and user-scoped.
- [ ] Local and remote progress merge without destructive overwrite.
- [ ] Attempt counts, mastery, completion, and current position synchronize.
- [ ] The next-step recommendation is deterministic and tested.

## Experience quality

- [ ] Home, reader, roadmap, practice, concepts, glossary, references, and progress have clear entry points.
- [ ] Mobile, tablet, and desktop layouts are reviewed.
- [ ] Keyboard navigation and visible focus states work.
- [ ] Contrast is sufficient and reduced motion is respected.
- [ ] Deep links open the intended mode and section.

## Release

- [ ] `pnpm test` passes.
- [ ] `pnpm check` passes.
- [ ] `pnpm build` passes.
- [ ] Visual screenshots cover core routes and breakpoints.
- [ ] TODO tracker is fully checked before checkpointing.
- [ ] The checkpoint is saved before publishing.
