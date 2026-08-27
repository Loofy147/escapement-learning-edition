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

- [x] Add database-backed account progress records scoped to the authenticated user
- [x] Add progress read, upsert, and merge procedures with safe anonymous fallback
- [x] Sync viewed chapters, completed chapters, attempts, mastery, and current position across devices
- [x] Add sign-in and sync status affordances without blocking public reading
- [x] Expand practice with chapter-specific activities across the canonical book
- [x] Add activity metadata, validation rules, feedback, hints, and source anchors for new exercises
- [x] Add reusable content configuration for future books without hardcoding Escapement-specific routes
- [x] Create a reusable implementation program, schemas, prompts, QA gates, and operating procedures for interactive book learning editions
- [x] Add tests for authenticated progress sync, merge behavior, expanded activities, and reusable configuration
- [x] Run typecheck, tests, visual verification, and save a delivery checkpoint

- [x] Sync saved scroll and section position through the authenticated progress snapshot and restore it across devices
- [x] Add validation, feedback, hint, and exact source-anchor records for every new exercise
- [x] Refactor runtime content loading through a reusable book configuration layer
- [x] Add formal JSON schemas and reusable prompt templates to the implementation program
- [x] Add tests for protected progress procedures, new exercises, and reusable package validation
- [x] Save a fresh checkpoint after validating the upgraded feature set

- [x] Restore remote section anchors from the synchronized progress snapshot on another device
- [x] Make the reader’s canonical source and metadata resolve through the reusable book configuration layer
- [x] Add authenticated progress upsert and expanded-activity grading coverage
- [x] Add executable validation coverage for the reusable schema/program package
- [x] Save a fresh checkpoint for the upgraded scope

- [x] Use the synchronized section id for actual anchor scrolling and test cross-device restore
- [x] Move chapter metadata behind the reusable content configuration boundary
- [x] Add authenticated upsert/sync test coverage without destructive fixture data
- [x] Execute the reusable validator against pass and fail fixtures
- [x] Save a new checkpoint for the upgraded scope passes validation

- [x] Test synchronized section-anchor restoration explicitly
- [x] Add authenticated successful progress upsert/sync coverage without destructive fixtures
- [x] Test validator rejection of an invalid package
- [x] Save a fresh checkpoint for the final upgraded scope

- [x] Add an explicit authenticated sync-flow test covering remote read, local merge, and restored synchronized progress
- [x] Save a new webdev checkpoint after the final upgraded-scope validation

- [x] Save a fresh checkpoint after the final upgraded-scope changes, using the validated state

- [x] Add one meaningful, chapter-specific activity for each of the 23 canonical chapters
- [x] Ensure each activity has validation, explanation, hint, misconception feedback, and exact source anchor
- [x] Add progress revision metadata and device/source timestamps for conflict detection
- [x] Implement deterministic merge and conflict classification for remote and local progress
- [x] Add sync status, conflict notice, and keep-local/keep-remote/merge recovery actions
- [x] Preserve public anonymous reading and local fallback while account sync is unavailable
- [x] Add tests for all 23 activities, conflict detection, merge recovery, and sync states
- [x] Run typecheck, tests, visual verification, and save a fresh checkpoint

- [x] Add an aggregate test proving all 23 chapter activities grade correctly and expose feedback/source-link behaviors
- [x] Save a fresh checkpoint after the final activity-expansion and conflict-sync changes

- [x] Assert every activity has a matching feedback record and exact source anchor in aggregate tests
- [x] Save a fresh checkpoint after the final activity and conflict-sync changes

- [x] Save a new checkpoint after the latest validated activity and conflict-sync changes

- [x] Create a new private GitHub repository for the complete learning edition
- [x] Configure the repository remote and commit the current project state
- [x] Push the complete project history to GitHub and verify the remote

- [x] Verify and enforce real-newline canonical chapter parsing
- [x] Isolate answer, feedback, hint, and retry state by activity id
- [x] Replace calculated part labels with canonical chapter-part metadata
- [x] Unify schema, runtime, validator, UI, and tests around one activity algebra including prediction
- [x] Replace sequence click accumulation with reorderable, removable sequence interaction
- [x] Replace classification toggles with explicit item/category choices
- [x] Move book-specific metadata into reusable data/config files and load it through the content boundary
- [x] Record richer learner evidence: misconception, hint use, retries, confidence, and source return
- [x] Add a critical-path browser/E2E test strategy for reader, activity, completion, restore, and sync
- [x] Add GitHub Actions CI for tests, typecheck, build, and package validation
- [x] Run release-hardening validation, visual verification, and save a new checkpoint

- [x] Repair stale answer/setAnswer references after isolating activity state
- [x] Re-run typecheck, tests, build, and visual review after the repair

- [x] Add critical-path browser tests for reader navigation, activity grading, progress persistence, and public sync discovery
- [x] Add GitHub Actions CI for tests, typecheck, build, and reusable package validation
- [x] Repair and verify the E2E selectors and local persistence contract
- [x] Run final release-hardening validation, visual verification, and save a delivery checkpoint

- [x] Commit and push the latest release-hardening updates to the existing private GitHub repository
- [x] Verify the pushed remote and branch state
- [x] Continue with the next practical release improvement after the push
- [x] Fix GitHub Actions pnpm setup conflict and verify the pushed CI run

- [x] Verify feat/learning-intelligence-v1, PR #1, and CI status for commit 2769c5891e22df935f181899492246b9ba803f77
- [x] Define explicit Concept Graph metadata for prerequisites, related concepts, applications, activities, misconceptions, and transfer tasks using only canonical concepts
- [x] Add explicit Misconception IDs and connect them to activity and concept learning state
- [x] Add strict validation and tests for graph references, misconception IDs, and next-best-action inputs
- [x] Run CI-equivalent validation and save a checkpoint for the learning-intelligence foundation

- [x] Verify feat/learning-intelligence-v1, PR #1, and independent CI status for head bc3f25d72c5c0fc2f37e9be8d4606aaea91ed80d
- [x] Build learner-facing Transfer and Spaced Retrieval runtime activities from canonical tasks and scheduler output
- [x] Add Delayed Retrieval flow with persisted due/response state
- [x] Add deterministic pre-assessment and post-assessment comparison without fabricating learner outcomes
- [x] Add regression and browser coverage for the full learning architecture chain and runtime flows
- [x] Run full validation, push the feature branch, verify CI, and save a checkpoint

- [x] Verify deterministically graded transfer runtime from canonical transfer tasks
- [x] Add and run regression/browser coverage for transfer grading with retrieval and assessment flows
- [x] Push the latest temporal-runtime head, verify its Quality gates run, and save a fresh checkpoint
