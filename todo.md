# Project TODO

- [x] Establish the premium calm editorial visual system with responsive breakpoints
- [x] Create clear entry points for book, roadmap, chapter library, concept explorer, glossary, references, and progress
- [x] Model the complete canonical book with 23 chapters and hierarchical sections
- [x] Build the accessible chapter reader with reading position and previous/next navigation
- [x] Add chapter guidance: objectives, prerequisites, effort, key ideas, explanations, mistakes, summary, reflection, and next step
- [x] Build high-value interactive lessons: prediction, sequencing/classification, multiple-choice, and parameter experiment
- [x] Implement correctness states, explanations, misconception-aware feedback, hints, retry, and source links
- [x] Separate book content, concepts, learning activities, validation rules, feedback, and relationships in data structures
- [x] Add linear journey and non-linear concept navigation with search and concept map
- [x] Add glossary and references discovery
- [x] Add lightweight learner progress tracking and recommended next step
- [x] Add responsive mobile, tablet, and desktop behavior
- [x] Add semantic HTML, keyboard support, visible focus states, sufficient contrast, and reduced-motion behavior
- [x] Add vitest coverage for content modeling, validation logic, search, and progress behavior
- [x] Run typecheck, tests, and visual verification before delivery

- [x] Model subsection hierarchy from the canonical Markdown and expose section anchors in the reader
- [x] Persist true in-chapter reading position and restore it on return
- [x] Add chapter-specific contextual explanations and explicit next-step recommendations
- [x] Implement a real classification activity and a parameter-manipulation experiment
- [x] Expose richer validation states and link feedback to exact source passages
- [x] Refactor activities, validation rules, feedback, and relationships into separate models
- [x] Add Vitest coverage for progress persistence and recommendation behavior

- [x] Add chapter-specific explanation and next-step data per chapter
- [x] Replace placeholder experiment logic with modeled parameter-driven output and feedback
- [x] Surface misconception state in the UI and link feedback to exact reader section anchors
- [x] Add tests for persisted reading position, mastery transitions, and next-step recommendation

- [x] Author unique explanation and next-step content for every chapter
- [x] Drive experiment grading and feedback from the parameter result model
- [x] Render a distinct misconception state and deep-link feedback to exact section anchors with verified restore
- [x] Add tests for reading-position persistence and mastery transitions after grading

- [x] Drive experiment feedback text directly from the parameter-result model and remove fallback grading
- [x] Store exact section anchors in feedback records and verify deep-link restoration
- [x] Add UI-flow tests for reading-position restore and post-grading progress transitions

- [x] Add a test that resolves an exercise to its exact reader section anchor
- [x] Add learner-state flow tests for reading-position restore, attempt count, mastery, and misconception feedback
