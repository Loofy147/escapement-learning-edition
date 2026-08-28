# Escapement

## A Practitioner’s Guide to the Mechanics, Craft, and Measured Standards of Horology

### Hicham Bedrani

---

## Copyright and Reader’s Note

Copyright © 2026 Hicham Bedrani. All rights reserved.

This book is an educational work for readers interested in mechanical horology. It is not a substitute for supervised training, manufacturer service documentation, or qualified professional judgment. Movement-specific procedures, standards, certification programs, and training pathways should be checked against current primary documentation before being used in practice.

## Dedication

For the people who keep small machines honest.

## Contents

**Part I — Foundations: Why Timekeeping Is Hard**

1. Equal Seconds: Physics Meets the Bench
2. The Longitude Problem

**Part II — Mechanics: How a Movement Works**

3. Energy In, Work Out: Mainspring, Barrel, and Train
4. The Oscillator: Balance, Hairspring, Isochronism, and Positions
5. The Escapement: Dosing Energy and Keeping Order
6. Complications as Engineering Problems

**Part III — Materials & Precision Science**

7. Metals and Alloys in the Movement in the Movement in the Movement
8. Hairsprings: Evolution, Geometry, and Control
9. Jewels, Friction, and Energy
10. Thermal Compensation, Temperature Testing, and Magnetic Resistance; Silicon and Non‑Ferrous Components

**Part IV — The Standards That Prove It**

11. Chronometer Is Not Chronograph
12. ISO 3159 and the COSC Regime
13. Beyond COSC: First-Party and Composite Regimes
14. COSC Excellence Chronometer: From Movement to Finished Watch
15. Observatory Trials: The Ancestry of Modern Testing

**Part V — Practice: At the Bench**

16. Tools and Workspace
17. Service Cycles
18. Timing and Regulation in Practice
19. Restoration Ethics
20. Getting Into the Trade

**Part VI — Context & Future**

21. Mechanical, Quartz, and Atomic
22. The Independent Watchmaking Movement
23. Where the Standards Go Next

Conclusion — The Discipline of a Number

**Back Matter**

Working Glossary
Appendix A — Standards at a Glance
Bibliography and Reference Notes
Editorial and Publication Note
Index

## How to Use This Book

This is a practitioner-oriented technical guide for readers of mechanical horology. It is not an accredited training course, a caliber-specific service manual, or a complete professional reference. Read it in sequence and revisit it by subject. Part I establishes why timekeeping is a difficult physical problem. Part II follows energy through the movement and ends at the escapement. Part III explains why material and surface decisions alter behavior. Part IV examines the standards that convert claims into test results. Part V moves to the bench, where diagnosis and documentation matter as much as manipulation. Part VI places mechanical horology beside other timekeeping systems and asks what a future standard should measure.

The recurring question is simple: **what problem is being solved, under what conditions, and how do we know?**

## Introduction — A Number Is a Promise

The word “accurate” is easy to say because it appears to describe a quality without requiring a method. A watch is accurate. A movement is precise. A chronometer is superior. Such statements may be true, but they are incomplete until the reader knows the reference, the interval, the conditions, and the tolerance.

Mechanical horology is valuable because it makes that incompleteness visible. A watch contains a spring whose torque changes as it unwinds, wheels that transmit energy through tiny bearings, an escapement that alternately locks and releases the train, and an oscillator whose period is altered by position, temperature, magnetism, friction, and shock. The achievement is not that the machine is unaffected by these forces. The achievement is that designers and practitioners learn how to reduce, compensate, observe, and describe them.

The history of the craft follows the same movement. The longitude problem forced clockmakers to prove performance at sea. Observatory trials formalized comparison. Standards bodies defined procedures that could be repeated by an independent laboratory. Modern programs add finished-watch testing, magnetic exposure, power-reserve checks, and conditions closer to wear. Each development narrows the distance between a claim and evidence.

This book is written for readers who want more than the vocabulary of admiration. It is for students learning why a balance behaves differently in different positions, watchmakers deciding whether a rate problem is really a torque problem, restorers documenting what has been changed, and serious readers who want to understand what a certificate proves without asking it to prove more than it can.

A mechanical watch is not an atomic reference. It does not need to be. Its particular dignity is that it remains an imperfect physical system whose performance can still be made legible. The practitioner’s discipline is to turn that legibility into better work.


# Part I — Foundations: Why Timekeeping Is Hard

A watchmaker who treats “keeping time” as a single number will spend a career chasing ghosts. A movement is a machine that converts stored energy into equal beats, and then into equal seconds, across temperatures, positions, states of wind, and shocks. Equal beats are not guaranteed. Nor are equal seconds. The difficulty is physical, not merely historical, and it is solved—not in the abstract—but by design choices proved in trial.

This part opens with two chapters. Chapter 1 looks at the physical problem: how a mechanical oscillator makes (or fails to make) equal seconds, and what that means at the bench. Chapter 2 shows why society learned to demand proof: navigation, the longitude prizes, and Harrison’s sea-clocks. The thesis is simple: accuracy only matters when it is demonstrated against a defined test. In the workshop we inherit that standard—whether we are validating a ship’s chronometer, a pocket watch, or a wristwatch under a modern chronometer certification regime [1][2][5].


## Chapter 1 — Equal Seconds: Physics Meets the Bench

Everyone who listens to a watch hears regularity and wants to believe it equates to accuracy. It does not. Regularity to the ear is not a measurement; it is a seduction. The job of the horologist is to create an oscillator that returns to time after each disturbance, keeping the same interval despite changes in drive, posture, and climate. This is why the craft concentrates on the balance-spring and escapement, on pivots and oil, and on thermal and positional behavior—because these are where equal seconds are either secured or thrown away [6][7][8].

### A brief prelude: from foliot to pendulum to balance-spring

Early portable timekeepers with verge and foliot regulators were noisy accountants of unequal time. The foliot’s period changed with the width of swing and with drive, which varied wildly as the mainspring ran down [8]. A pendulum transformed the situation on land. Christiaan Huygens formalized the idea that a pendulum could regulate a clock so that successive swings were nearly equal, making the seconds useful for astronomy and civil time [8]. In watches, the decisive step was coupling a balance to a spiral spring. The balance-spring system created a restorative couple proportional (ideally) to displacement. In practice, it brought repeatability into a portable oscillator and made the pursuit of isochronism the watchmaker’s central problem [6][7][8].

The literature is clear about the practical implications: use the regulator and escapement to force the oscillator to high, clean, and appropriately limited amplitude; minimize friction and asymmetry in the train; and protect the frequency-determining elements from temperature and position [6][7].

### Terms that must not be confused

At the bench we keep five related but distinct ideas separate:

- Accuracy: closeness of the indicated time to a reference (UTC, a time signal).
- Rate: the daily gain or loss relative to a reference, expressed as seconds/day.
- Precision (repeatability): stability of the rate under the same conditions.
- Amplitude: the angular excursion of the balance in degrees per beat.
- Positional behavior: change of rate and amplitude with orientation.

These interact, but they are not the same. A movement can be precise (repeatable) and yet inaccurate (consistently +20 s/d). It can be briefly accurate in one position and poor across positions. It can show healthy amplitude with oil fresh, and lose both amplitude and precision when oil migrates.

Table: Terms at the bench

| Concept             | What it describes                                  | How you see it on the bench                           | What you can change first                              |
|---------------------|-----------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| Accuracy            | Closeness to reference time                         | Cumulative time error over hours/days                  | Set rate, define use-case, verify in trial             |
| Rate                | Gain/loss per day under stated conditions           | Timing machine trace, time-signal comparisons          | Regulate, alter mean-time screws, adjust hairspring    |
| Precision           | Repeatability of rate                               | Low scatter over repeated runs                         | Reduce friction, stabilize amplitude, improve poise    |
| Amplitude           | Angular swing of balance                            | A measured or inferred angular swing; interpret against caliber, escapement, lift-angle setting, winding state, position, and instrument method | Power delivery, oil, endshake, banking/escapement      |
| Positional behavior | Rate change with orientation                        | Differences among dial up/down, pendant up/left/right | Poise, pivots, jewels, guard pin/roller jewel geometry |

References: technique and definitions in practice [6][7][8]. Do not substitute folklore for measurement.

### Why equal seconds are hard

The oscillator’s period ideally depends only on its geometry and elasticity. In reality, it is hostage to every force in the movement:

- Drive variation. The mainspring torque curve is not flat. Without compensation (fusee, stopwork, maintaining power, or clever escapement geometry), amplitude falls as the spring relaxes, and many escapements show amplitude-dependent rate error (isochronism error) [6][7].
- Friction. Pivots, pallets, and gear teeth dissipate energy; oil changes viscosity with age and temperature; capillary migration alters distribution at jewels; all of this shifts impulse timing and amplitude [6][7][8].
- Geometry. Banking, draw, drop, and guard clearances determine when and how the balance receives impulse and unlocks the escapement. Microns matter [6][7].
- Temperature. Balance inertia and spring elasticity both vary with temperature. Thermal expansion increases balance radius (raising inertia), while spring modulus typically softens with heat. Unless compensated, the rate drifts with temperature [6][8].
- Position and shocks. Gravity biases the pivots and balance in each orientation; poise errors and pivot wear become rate errors. Shocks disturb amplitude and can cause unlocks unless safety action is correct [6][7].

The lever escapement, the workhorse of portable horology, adds its own signature. Its impulse depends on lock and draw angles, pallet and escape-tooth finish, and the exact moment of unlocking relative to the balance’s turning point. A lever watch can be very precise but still struggle with isochronism unless amplitude and lubrication are stabilized [6][7].

### Isochronism: the practical heart of the craft

Isochronism is the property that the period remains the same at different amplitudes. Real balance-spring systems are only approximately isochronous. They drift with amplitude due to:

- Finite thickness and nonlinearity of the spring.
- Changes in effective length from regulator pins or stud geometry.
- Escapement action adding or subtracting impulse at unfavorable phases [6][7].

Work at the bench attacks this from three sides:

1. Stabilize amplitude. Provide consistent impulse: clean train, correct endshake, true and poise wheels, adjust banking, polish pallet and escape faces, set correct oiling. Keep amplitude in the designed band for that caliber [6][7].

2. Linearize the oscillator. Center and flatness of the spring, correct collet pinning, regular terminal curve or overcoil suited to the layout, regulator pin clearance that does not saw the spring, and mean-time adjustment that does not distort the terminal curve [6][7][8].

3. Reduce amplitude dependence in the escapement. Set minimal safe lock, correct draw, equal drops, secure safety action. A sloppy lever amplifies isochronism error; a crisp one can hide it [6][7].

### Temperature: a recurring adversary

Even if you never touch a bimetallic balance, temperature remains your concern. Cold oil thickens; hot oil thins and migrates. Brass and steel expand differently; endshake, side shake, and clearances change in ways you can both feel and measure. The balance’s inertia and the spring’s modulus move in opposite directions with temperature; their combined effect is your temperature error curve. In antique work, compensation balances and blued steel springs were the answer; in modern work, alloys and monometallic balances shift the problem but do not erase it [6][8]. The point for this chapter is not the catalog of solutions; it is the principle: define your thermal exposure and prove the rate across it.

### What proof looks like at the bench

Before any public test existed, good workshops had their own “proving ground.” The practice endures:

- Define the trial. How long, in which positions, at what temperatures. Write it down. If you use a timing machine, specify the parameters (lift angle, sample length).
- Record target and results. “+8 s/d dial up, +10 s/d pendant up; amplitude 280–290°, beat error 0.1 ms.”
- Decide acceptance. Are you seeking minimum positional spread? A specific mean rate? Resistance to amplitude loss? You cannot improve what you do not define.

Modern chronometer testing makes this explicit. Independent certification bodies evaluate movements under a published standard with defined conditions and acceptance criteria [1][2][5]. We will return to that in Chapter 2. For now, adopt the habit: make your test explicit, then use data to change the machine.

### What to carry to the bench

- Notebook with a printed template for trials: positions, temperatures, amplitudes, rates.
- Thin marking pen and a loupe with scale to check spring centering and terminal curves.
- Timing machine settings sheet for the calibers you service (lift angle, test positions).
- Pegwood and pith for pallet and escape tooth cleanliness checks.
- A small temperature log or IR thermometer to note ambient during tests.
- Poising tool and balance calipers for positional work.


## Chapter 2 — The Longitude Problem: Accuracy Only When Proved

Navigation forced the world to define what “good timekeeping” meant. On land, a pendulum clock changed astronomy and commerce. At sea, the pendulum was useless, and the ocean exposed the lack of any shared definition of accuracy. The result was disaster, law, and—eventually—new machines that had to prove themselves not in a workshop, but on a ship.

### The need: find your longitude

Latitude (north–south position) could be found by the Sun’s altitude at noon or the Pole Star at night. Longitude (east–west position) required you to know the time difference between local noon and a reference meridian. A reliable portable timekeeper set to a known reference could, in principle, give longitude from the time difference. But this was not the only serious route: astronomical methods such as lunar-distance observations remained important alternatives. The sea punished every defect in a watch, exposing the practical trade-off between portable timekeeping and astronomical observation [4][8].

### The warning: Scilly, 1707

In October 1707, a British fleet under Admiral Sir Cloudesley Shovell approached the English Channel after operations near Gibraltar. The navigators could not fix their longitude reliably. In fog and darkness the fleet misjudged its position and struck the rocks of the Isles of Scilly. Four ships were lost, with great loss of life, and the event focused attention on the problem that mariners could not consistently determine their east–west position [4]. The disaster helped to turn a technical complaint into a national priority.

### The response: the Longitude Act, 1714

Parliament’s 1714 Act established monetary rewards to encourage a practical solution. It formed a Board to judge proposals and set accuracy thresholds to be demonstrated at sea before payments would be made [4]. The principle was radical for craft: build your device, then prove it by a defined trial. The terms set out routes, durations, and tolerances to be checked under observation [4]. To the working horologist, this was the birth of “acceptance testing.”

### John Harrison’s sea clocks H1–H4

John Harrison was a cabinetmaker and self-taught mechanic who approached the problem through wood and metal, springs and balances, with a practical mechanic’s belief that faults could be engineered out rather than merely tolerated. The Royal Museums Greenwich account traces his machines and their proving [4]:

- H1. A large, complex, gimballed timekeeper with paired balances and novel anti-friction and compensation ideas; it was trialed at sea to Lisbon [4].
- H2. A development of H1 that Harrison did not submit to a sea trial after identifying a flaw [4].
- H3. A further development addressing temperature compensation and oscillator behavior; Harrison continued work on it for years rather than treating it as the final solution [4].
- H4. A smaller, watch-like timekeeper with a balance and spring. Its Jamaica trial in 1761, followed by later trials and examination, became the most famous stage in Harrison’s pursuit of the Longitude reward [4].

Here, the workshop meets the sea. Harrison chased the same failure modes we do: drive variability, friction, thermal drift, and positional error. He engineered redundancy into power delivery, employed compensation for temperature, and sought to isolate the oscillator from the ship’s violence. The technical narrative is familiar, but the standard changed: the workshop’s opinion no longer mattered; the Board’s trial did.

### The Jamaica trial of H4

H4 was dispatched on the 1761 voyage to Jamaica. Its performance demonstrated the feasibility of using a portable timekeeper for longitude under the relevant trial conditions, but the result did not end the controversy over the reward. Further testing followed, including the Barbados trial of 1763–1764, Board consideration in 1765, and Royal Observatory testing beginning in 1766 [4]. The important historical point is not a single triumphant voyage but a sequence of increasingly demanding trials.

### Dispute and resolution

No human system changes without resistance. Harrison’s claim to the highest reward became mired in disputes about the sufficiency of a single voyage, the need to disclose methods, and whether other trials should be required. The process became protracted. The Greenwich account describes a lengthy argument with the Board, during which Harrison completed further work and eventually received significant payments, albeit after much contention [4]. The takeaway is institutional, not biographical: once a community defines proof by trial, it must also define how many trials, under what observation, and at what level of disclosure. The profession has lived with this ever since.

### What Harrison’s work still teaches the bench

- Trials must reflect use. H4 was not proven on a leveled stand; it was proven on a moving ship, over time, against astronomical observations [4]. Your bench trials should mimic the watch’s life: carried, rested, temperature-shifted, not simply “timed once, dial up.”
- Accuracy claims must cite a test. Harrison’s claim referenced the Act. Today, a claim of “chronometer” implies conformity with a published standard and certification by an independent body [1][2][5].
- Mechanisms must address known physics. H1–H3 attacked drive variation and friction with devices such as remontoire and anti-friction rollers; H3 and H4 grappled with temperature compensation. The problems have not changed; your levers are cleaner and your alloys kinder, but the physics is the same [4][6][8].

### From longitude to laboratory: defined trials today

Once the craft accepted trial as arbiter, formal testing evolved. Wristwatches posed an additional challenge: they live on the body, move through daily positions, and experience different thermal gradients than marine chronometers. Modern practice responds in two ways:

- Internal workshop trials. Good workshops define their own acceptance windows for amplitude, beat error, mean rate, and positional spread. They specify a regime: e.g., 24–72 hours of observation in five positions, with temperature noted, and resting periods that emulate wear. This is not folklore; it is bench discipline grounded in practical literature [6][7][8].
- Independent certification. Organizations exist to test movements to a published standard, under defined conditions and observation, and to issue certification when performance meets those criteria. The Contrôle Officiel Suisse des Chronomètres (COSC) is the most visible body for Swiss wristwatches. It describes its certifications publicly and operates under the framework provided for wrist-chronometers by ISO 3159 [1][2][5]. COSC also publicizes a program called “Excellence Chronometer Certified” for an extended certification offer [3]. The point is not a brand story, but the structure: external lab, published protocol, recorded results, certificate or no certificate.

For practitioners, the lesson from both Harrison and modern laboratories is identical: accuracy, precision, and positional performance only mean anything when stated with the trial that produced them. “+4 s/d” is a number; “+4 s/d, averaged across five positions at room temperature over a 10-day protocol per ISO 3159, certified by an independent lab” is a statement you can test and reproduce [1][2][5].

### Rate, amplitude, positions: why the trial must say which

In Chapter 1 we separated accuracy, rate, precision, amplitude, and positional behavior. The trial must declare which of these it is measuring and how. Two examples:

- A sea trial of a chronometer measured accuracy over weeks, integrating all error sources—drive, temperature, position, and motion—into a single outcome: landfall error. It was a test of accuracy in use [4].
- A laboratory test for a wrist-chronometer sets positions, temperatures, and durations. It measures rate under these conditions, looks for repeatability, and infers accuracy in use from the trial’s design and the stability of results [1][2][5].

Both are honest if they are explicit. Both are useless if they are not.

### How to translate standards into shop practice

You do not need a laboratory to think like one. The following approach works at any bench:

1. Declare conditions. Choose positions (e.g., DU, DD, PU, PL, PR), temperatures (e.g., ~8 °C, ~23 °C, ~38 °C), and durations. Record the mainspring state when you start each run.

2. Measure amplitude and rate together. Many errors only present when amplitude is below a threshold or when positional spread increases at low amplitude. Track amplitude decay with time since full wind. Track rate shifts alongside [6][7].

3. Separate mean rate from spread. Decide whether you want to center a rate (accuracy) or reduce spread (precision/positional behavior) first. In most movements, reduce spread first—through poise, pivots, and escapement geometry—then set mean rate with the regulator or mean-time screws [6][7].

4. Track repeatability. Repeat parts of the trial on consecutive days. Repeatability is the workshop’s measure of precision.

5. Compare to your acceptance. If you work to a chronometer-like internal standard, write it down with its window and conditions. When a client asks whether their watch is “accurate,” answer: “Under our defined test, it performed within X.” If they request certification, reference the external lab and standard [1][2][5].

### A word about words

- Rate is a number under circumstances.
- Precision is the scatter of those numbers when you repeat the same circumstances.
- Accuracy is the closeness of the indicated time to a reference over a period, and it is only meaningful with the trial attached.
- Amplitude is an important diagnostic and operating variable; too little or too much can move an escapement or oscillator outside its intended operating range, depending on the design.
- Positional behavior is a design and finishing report card; it tells you what gravity and geometry do to your oscillator.

Say what you measure. Then make the machine better.

### What to carry to the bench

- A standard “shop chronometer sheet” with your internal protocol: positions, temperatures, durations, acceptance windows.
- A printed copy or summary notes of the public certification pathways you reference (e.g., COSC and ISO 3159 framework) for client discussions [1][2][5].
- Simple thermal sources: a cool pack and a safe gentle heat source for controlled, modest temperature shifts (with care).
- Stable time reference access for spot checks (radio/time signal receiver or trusted network source).
- Pencil, ruler, and graph paper or a spreadsheet template to visualize amplitude and rate versus hours since wind.



# Part II — Mechanics: How a Movement Works

Mechanical timekeepers work because they ration stored energy into equal time-slices. The mainspring holds potential energy; the going train transmits it; the escapement doses it; the balance-and-hairspring oscillator turns that dosing into uniform beats; and everything else—calendar, chronograph, or tourbillon—must live off the same supply without disturbing it more than the oscillator can tolerate. This part traces that energy from barrel to balance, then treats complications as engineering problems that modify the energy path and impose additional constraints. The emphasis is on mechanical clarity, measurable outcomes at the bench, and the difference between accuracy (agreement with a reference), precision or repeatability (consistency of rate), rate (gain/loss per unit time), amplitude (swing of the balance), and positional behavior (how rate and amplitude change by orientation).

Chapters 3–6 proceed from storehouse to metronome to escapement to complications, with practical sidebars and bench lists to keep you anchored in real parts and real faults.

---

## Chapter 3 — Energy In, Work Out: Mainspring, Barrel, and Train

### 3.1 The mainspring’s job

A watch needs torque—rotational force—over hours or days. The mainspring is a spiral spring that stores energy when wound and releases it as torque at the barrel arbor or rim. The job is not only to store energy but to release it in a way the oscillator can tolerate. The oscillator wants a near-constant impulse; the spring naturally supplies a decaying torque as it unwinds. Much of mainspring and barrel design is the art of making this mismatch acceptable in practice [6][7].

The most bench-relevant properties of a mainspring are:

- Section and material (strength, elastic limit, set behavior)
- Length and thickness (torque and reserve)
- Lubrication and surface treatment (stick–slip at barrel wall)
- Attachment (arbor hook, outer bridle or tongue)
- For automatic watches, a slipping bridle that allows “infinite” wind without breaking the spring or stalling the train [7]

A stronger spring increases available torque and can lift amplitude, but at a price: heavier drive loads the train and escapement, increasing friction and wear. Excess torque that the balance cannot turn into useful amplitude turns into heat and accelerated degradation at the escapement. George Daniels stresses proportion: select spring strength for the balance’s inertia and escapement efficiency, not for marketing reserve alone [6].

### 3.2 Power reserve and the torque curve

Power reserve is the run time on one wind from fully wound to the lower limit at which the watch can no longer maintain serviceable amplitude. It is not a mystical property; it is the result of the spring’s stored energy and the movement’s consumption.

Two curves matter:

- Torque vs. state of wind: typically highest at full wind, decaying with unwind.
- Efficiency vs. torque: escapements and trains often run more cleanly in a band—not at the top or bottom of the torque curve.

Classical remedies to the spring’s non-constant torque include:

- Limiting the working arc to a flatter region of the curve via stopworks (e.g., Geneva stop) in hand-wound movements [7][8].
- Using an automatic bridle to hold the spring near a steady region by continuous top-up in self-winders [7].
- Designing the oscillator for good isochronism at realistic amplitude and at both high and low torque (terminal curves, free-sprung balances) [6].

The power-reserve indicator is a transmission problem: measure the relative rotation between barrel and arbor and display it. Differential gears or friction cones tied to the barrel lid are common solutions, each adding small friction and possible failure modes if poorly executed [6][7].

### 3.3 The barrel: where energy meets the train

The barrel is both container and first gear. In most wristwatches, the lid carries teeth (“barrel wheel”) that drive the center wheel pinion; in some layouts the arbor carries the first driven wheel. The barrel must:

- Restrain the spring (bridle adhesion in autos; secure outer hook in manuals)
- Present concentric rotation (true barrel, roundness of lid and drum)
- Maintain correct endshake and side-shake at its pivots
- Distribute load across its teeth without point contact

The two contact interfaces that most often degrade your amplitude are:

- Spring to barrel wall (adhesion, stick–slip): requires correct barrel wall finish and thin, uniform grease—modern greases are designed to give controlled slip in automatics [7].
- Barrel arbor bush and cap jewels: contamination here a) saps torque, b) creates noisy variation of rate as torque fluctuates with friction, and c) accelerates wear. Check for ovalled holes or grooved arbors.

Do not assume an automatic barrel’s slipping bridle masks poor barrel lubrication. If the bridle grabs too well, you stress the train at full wind; if it grabs too little, you lose usable reserve to uncontrolled slipping.

Multiple-barrel architectures can be used to reshape available torque, extend reserve, or supply particular loads. The resulting torque profile depends on spring characteristics and the gearing arrangement. At the bench, evaluate the actual movement’s amplitude margin, rate behavior, and reserve rather than assuming a universal series-versus-parallel outcome.

### 3.4 Tooth forms, depthing, and train efficiency

The going train converts slow barrel rotation to the fast motion needed at the escapement and, separately, to the dial. Ratio arithmetic is simple; the difficult part is preserving torque through minimum loss. Efficiency is won or lost at:

- Tooth form and finish (sliding friction, pitch error)
- Correct depthing (pinion in the wheel—neither too shallow nor too deep)
- Endshake and side-shake (too tight binds; too loose misaligns and pounds)
- Jeweling and pivot finish (polish, cylindricity)
- Lubrication regime (proper oil type and minimal quantity—excess invites drag and migration) [6][7][8]

Two practical diagnostics:
- Let the train run “free” without escapement. The train should spin down smoothly and for a credible span when given a slight nudge from a small preload on the barrel. Steps, rebounds, or sudden arrests indicate specific pair problems (look at the center to third and third to fourth meshes first).
- Observe tooth contact under 10–20×. Poorly cut or worn teeth will show hard points. A pinion leaf that has become hooked will pull the wheel tooth; expect rate instability.

Train architecture affects how seconds are displayed. Small seconds use the fourth wheel’s arbor on the dial side. Center seconds require an additional gearing step (a drive to a sweep seconds pinion or a rearranged train). Each adds load and backlash. For a center seconds retrofitted to a small seconds caliber, expect loss of amplitude and hand “stutter” unless the drive is well stabilized.

### 3.5 Counting by fives: dial train and motion works

The motion works steal a little torque to carry hour and minute hands. The canonical reduction from center minute (one turn/hour) to hour hand (one turn/12 hours) is robust but introduces two friction couplings: the cannon pinion and the setting clutch. If the cannon pinion is too tight, you drain torque and can stumble during calendar jumps; too loose and the hands slip. Adjust with sensitivity: the correct feel is firm rotation without jerks when turned directly, even when the train is lightly preloaded.

Calendar drives compound the problem by taking power at or near midnight. See Chapter 6 for approaches to timing and spreading this load.

### 3.6 Putting numbers into behavior

It is tempting to treat “power reserve” and “torque” as trophies. The bench reality is simpler:

- Your balance only needs enough impulse to sustain amplitude in all tested positions over the intended reserve window, with acceptable changes of rate and precision. Past that, extra torque is waste.
- The steadier the torque that reaches the escapement over the active reserve window, the better your chances of stable rate and amplitude. That steadiness can come from stopworks, automatic topping-up, low train loss, and good isochronism practices in the oscillator [6][7].

Chronometer certification bodies test rate and positional behavior over days and temperatures to standardized criteria based on ISO 3159; they do not certify “power reserve” by itself [1][2][5]. In other words: fix the flow, not the number on the mainspring packet.

### 3.7 Bench checks and failure modes

Common issues encountered after mainspring or barrel work:

- Low amplitude immediately after service can be caused by barrel-wall lubrication, barrel-arbor friction, spring characteristics, train losses, or escapement loading; use the symptom to prioritize checks rather than as a diagnosis.
- Good amplitude with poor repeatability can point toward intermittent friction or load variation in the barrel, train, motion works, or escapement; isolate variables before concluding the cause.
- Short reserve can result from spring set, premature bridle slip, excess downstream drag, or other movement-specific faults; verify against the actual caliber’s expected power path.

Organize your diagnosis from source outward: barrel first, then center to third, then third to fourth, escapement last. Do not mask a noisy energy supply by over-regulating the balance.

#### What to carry to the bench

- Mainspring winders sized to the family
- Let-down keys with secure grip
- Barrel closing press and arbors
- Barrel wall grease and a fine oiler for controlled films
- Pivot gauges and a jeweling microscope
- Train depthing tool and truing calipers
- Timing machine capable of recording amplitude and beat error
- Thin permanent marker to note barrel lid orientation

---

## Chapter 4 — The Oscillator: Balance, Hairspring, Isochronism, and Positions

The oscillator converts intermittent impulses from the escapement into uniform timekeeping beats. Everything that touches it is either a help or a hindrance.

### 4.1 Balance wheel and hairspring: the tuned system

The balance-and-hairspring form a harmonic oscillator where the balance’s inertia and the spring’s restoring force set the natural frequency. Adjusting either changes the beat rate. Practically:

- Inertia is set by the balance’s mass distribution. Adjustable-inertia balances use screws or movable weights to vary radius (hence inertia) with minimal change to spring condition [6][7].
- The spring’s effective length sets rate for index-regulated balances; curb pins move the active length. Free-sprung designs regulate by inertia only; the spring is shaped and pinned to its terminal curve and left undisturbed [6].

A flat spiral spring is economical of height but can be sensitive to vertical motion and regulator interaction. A properly formed terminal curve or Breguet overcoil is intended to improve the concentric development of the spring. Its effect on positional and isochronal behavior depends on the complete oscillator and escapement design [6][7]. The execution of the terminal curve, not the name, does the work.

### 4.2 Definitions that belong at the bench

- Accuracy: closeness of the watch’s displayed time to a reference time.
- Rate: the average daily gain or loss over an interval (e.g., seconds/day).
- Precision or repeatability: consistency of rate between measurements or positions.
- Amplitude: angular swing of the balance (degrees) measured at the impulse jewel.
- Positional behavior: change of rate and amplitude as the watch’s orientation changes.

A watch may be imprecise (scattered rates) but accidentally accurate at one setting if errors cross-cancel. Certification processes assess both accuracy and precision across positions and temperatures according to standards (ISO 3159 for wrist-chronometers), with criteria for average daily rate and permissible variations [1][2][5].

### 4.3 Isochronism: why the oscillator’s behavior mustn’t depend on lift

> “Isochronism is the condition in which the period of oscillation is independent of amplitude within a useful range.” — after Daniels [6]

Real balances are not perfectly isochronous. Three families of departures matter in wristwatches:

- Geometric: non-concentric spring breathing, curb-pin friction in indexed regulators, and terminal-curve faults cause amplitude-dependent rate shifts [6][7].
- Elastic: the spring’s material and cross-section yield small changes in restoring force with stress; better alloys mitigate this.
- Interactional: escapement impulse and draw, oil state, and banking condition couple amplitude with rate.

Bench-visible symptoms:
- Rate differs between full wind and low wind despite similar positions.
- Big amplitude changes cause rate to lead or lag systematically (isochronal error).
- Trace on the timing machine shows “smile” or “frown” across amplitude sweeps.

Mitigations:
- Free-sprung regulation removes or reduces dependence on curb-pin adjustment, eliminating one source of regulator interaction. Overall isochronism remains dependent on spring geometry, oscillator design, escapement behavior, amplitude, and adjustment [6][7].
- Overcoil or carefully formed terminal curves keep the spring breathing concentrically [6][7].
- Set pallet lubrication and draw to provide consistent, gentle impulse without excessive sliding.
- Match spring strength to escapement energy: too-stiff springs produce low amplitudes where escapement non-idealities dominate; too-weak springs swing wide and run into banking changes.

Temperature compensation is largely a solved materials problem in modern alloys; avoid introducing new problems by distorting terminal curves or clamping stud carriers off-center during service.

### 4.4 Beat rate and lift: how fast and how far

Beat rate (e.g., 18,000, 21,600, 28,800 vph) is a system trade-off involving oscillator design, escapement event frequency, disturbance response, power consumption, lubrication, wear, and robustness. No single beat-rate value is universally superior. The balance, train, and escapement must be designed as a coherent system; retrofitting a different rate without the corresponding engineering changes is unsound [6][7].

Lift angle is the escapement’s geometric property defining the angular portion of the balance’s swing during which the pallet and escape wheel are in contact. Timing machines need the correct lift angle to compute amplitude from beat period. Use the maker’s data or measure; do not assume.

Amplitude is a health indicator, not a virtue by itself. For a given escapement, there is a practical window of amplitude in which impulse and locking are correct. Too low and the watch is sensitive to disturbances; too high and you flirt with knocking and draw-related rate instabilities. Read amplitude alongside positional rate and scatter; do not chase a number detached from performance.

### 4.5 Positional behavior: gravity and real life

Wristwatches experience five to six standard testing positions; pocket watches are tested differently. Positional rate differences arise mainly from:

- Poise errors in the balance (static or dynamic)
- Pivot and jewel condition (polish, shape, endstone clearance)
- Hairspring centering and trueness (in and out of flat)
- Regulator asymmetry (index systems)
- Escapement geometry (tilt, guard clearance)

Practical steps:
- Poise the balance statically, then confirm dynamically on the timing machine by rotating the watch through 360°. A well-poised balance reduces orientation-dependent torque imbalance at the staff [6][7].
- True the hairspring flat and centered. A spring whose collet is off-center drives the balance’s center of mass away from the staff, magnifying gravitational effects.
- Set endshake correctly at balance and escapement. Too little creates binding in verticals; too much lets the roller and guard interact inconsistently under shock.
- Record rates and amplitudes across positions at two states of wind. Compare both the accuracy (average) and precision (scatter). Certification programs such as COSC assess averages and variations over multiple positions and days based on ISO 3159 methods [1][2][5].

Historically, the quest to reduce positional error produced marine chronometers on gimbals with detent escapements and temperature-compensated balances. John Harrison’s timekeepers solved the longitude problem at sea not by wishful thinking but by designing for stable rate over conditions that mattered to navigation [4]. Wristwatches cannot be gimballed; we solve the problem by poise, spring geometry, and escapement consistency.

### 4.6 Regulation systems and their compromises

Index-regulated balances are adjusted by moving curb pins to change effective spring length. The pins must be close but not pinching; friction here adds isochronal error, especially at small amplitudes [7][8]. Free-sprung balances eliminate curb pins; rate is set by moving mass at the rim. They demand cleaner execution of spring geometry but reward it with reduced interactions and, often, better precision [6].

Table: Regulation methods and bench implications

- Index regulator
  - Pros: Quick adjustment, wide range
  - Cons: Curb-pin friction; interacts with isochronism; sensitive to mishandling
  - Bench: Verify pin parallelism and gap; avoid bending spring between pins

- Free-sprung adjustable inertia
  - Pros: Reduced isochronal error; robust once set
  - Cons: Slower to adjust; requires precise spring forming
  - Bench: Balance on a tack during weight moves; re-check poise after large moves [6][7]

### 4.7 Standards, certification, and what they actually say

ISO 3159 specifies performance requirements and test methods for wrist-chronometers with sprung balance oscillators [5]. COSC applies these principles in certification programs for different categories of watches. Their published materials emphasize that the tests evaluate average daily rate, variation of rate, and positional behavior over days and at different temperatures, not one-off snapshots [1][2]. A watch can be precise (consistent rates) but inaccurate (consistently fast or slow) or the reverse; certification frameworks assess both dimensions and define criteria for passing [1][2][5].

If you aim for certification-level performance in the workshop, structure your testing similarly: multiple positions, multiple days, and controlled temperatures. Do not infer certification compliance from a single full-wind dial-up check.

#### What to carry to the bench

- Balance tack and protected movement holders for positional tests
- Poising tool and leveled surface
- Hairspring truing tweezers and collet keys
- Index regulator gauges and stud carrier tools
- Timing machine with positional programs and temperature notes
- Fine pegwood and lint-free paper for palette and roller cleaning
- Loupe (10×) and microscope (20–40×) for spring and pivot inspection

---

## Chapter 5 — The Escapement: Dosing Energy and Keeping Order

The escapement sits between energy and oscillator. It meters torque into impulses, locks the train between impulses, and provides safety against runaway. Families of escapements differ in how they deliver impulse (sliding or direct), how they lock (recoil or dead), and how detached they are from the oscillator.

### 5.1 Families and first principles

Escapements can be compared along several independent dimensions: whether the locking action permits recoil or is deadbeat; whether the oscillator is detached from the train between impulses; and whether impulse is predominantly sliding or direct. These dimensions should not be treated as synonyms.

- Recoil escapements permit some backward motion of the train during locking.
- Deadbeat escapements use a locking geometry that avoids recoil during the locked interval.
- Detached escapements isolate the oscillator from the driving train except during the intended unlocking and impulse events.

The Swiss lever is detached and predominantly uses sliding impulse. The traditional spring detent is detached and uses direct impulse. Verge escapements are recoil and non-detached. These categories describe different properties and should be kept separate [6][7][8].

Marine chronometers historically used detent escapements for their high efficiency and low disturbance; pocket and wristwatches overwhelmingly use the detached lever for safety under shock and robust self-starting [4][6][7].

### 5.2 The Swiss lever escapement: the workhorse

The Swiss lever escapement has three essential functions:

- Lock: the escape wheel tooth lands on a locking face of the pallet stone. Slight draw angles pull the pallet toward the banking to maintain safe lock.
- Impulse: as the balance swings, the roller jewel enters the fork; the fork rotates the pallet, and the escape wheel tooth slides along the impulse face, delivering energy through sliding contact.
- Safety: guard pin and safety roller prevent accidental unlocking during the return, avoiding “overbanking” [6][7][8].

Bench-critical points:

- Locking: “run to drop” must be secure but minimal—excess lock wastes energy and can cause variable rate as the impulse starts from different places.
- Draw: provides safety but adds friction; set evenly on both pallets. Too much draw forces and sticks; too little flirts with flutter.
- Endshake: at pallet and escape wheel must allow free action in vertical positions without rebound.
- Pallet stone setting: impulse and locking angles determine both safety and efficiency. Tiny adjustments matter; work under magnification and record baseline settings.
- Lubrication: micro-films at precise locations on pallet impulse faces; dry or near-dry lock faces in many practices for stability. Excess oil migrates to the roller and destroys consistency. Follow established watchmaking practice for the caliber and oil family [6][7].

Beat error in a lever escapement expresses asymmetry in the timing of the oscillator’s two directional events relative to the escapement’s unlocking and impulse geometry. Collet, roller, stud, fork, and escapement geometry can all contribute. The appropriate correction is movement-specific; correct the relevant geometry before using rate adjustment to mask the error.

### 5.3 English lever versus Swiss lever (and why you rarely see the former)

The English lever is a historical lever-escapement form whose construction and impulse geometry differ from the later Swiss lever. English and Swiss forms should not be ranked by a single universal efficiency or robustness claim; their practical behavior depends on the specific construction, adjustment, materials, and conditions. The Swiss lever became dominant in commercial wristwatches because it offered a strong combination of manufacturability, robustness, and service practicality [6][8].

### 5.4 The detent escapement: efficiency with fragility

The spring detent (chronometer) escapement provides a single impulse per oscillation, directly from the escape wheel tooth to a jewel on the balance (direct or near-direct impulse), with almost no sliding friction. The detent—a thin spring with a locking jewel—holds the escape wheel at rest until the unlocking roller on the balance briefly flexes the detent, allowing a tooth to escape and deliver impulse. Between impulses, the train is truly detached [6][8].

Merits and costs:

- Direct impulse can give very high efficiency relative to sliding-impulse designs in suitable constructions, with low friction at the impulse interface. The practical result depends on the specific detent design and adjustment [6][8].
- Poor shock safety: a jar can bounce the escape wheel past the detent or let the balance unlock outside intent, causing tripping or “galloping.” Self-starting is unreliable.
- Demands immaculate geometry and pivot condition; small burrs or oil migration can stop it [6][8].

This is why detents belong in marine chronometers and carefully worn pocket watches, not most wristwatches. They remain instructive: they show just how much of the lever escapement’s “personality” comes from sliding friction and safety furniture.

### 5.5 The co-axial concept: double impulse to tame sliding

George Daniels devised the co-axial escapement as a way to reduce the lever escapement’s sliding friction during impulse by splitting the impulse into two components delivered by co-axial wheels and modified pallets. In essence:

- One impulse is delivered to the balance in one direction via an outer co-axial wheel and pallet, largely as a pushing action with less sliding.
- The opposite impulse is delivered via an inner co-axial wheel and a separate pallet.
- Locking and safety are arranged so that the escapement remains detached between impulses, but the geometry reduces the area and severity of lubricated sliding contact compared to the Swiss lever [6].

Purposes and consequences:

- Reducing sliding impulse friction aims to reduce sensitivity to changes in sliding-contact lubrication; the degree of benefit depends on the implementation and service regime.
- The geometry is more complex; tolerances and endshakes are tight, and lift angles differ from the Swiss lever. Misadjustment can quickly erode the intended advantages.
- Daniels’ design emphasized reduced sliding friction, but practical implementations can still specify lubrication for particular contacts. Follow the manufacturer’s service documentation for the specific co-axial construction rather than applying a universal “dry escapement” rule [6].

Treat co-axial escapements as their own species. Do not apply lever “rules of thumb” to stone settings or lubrication locations. Follow source geometry and document every move.

### 5.6 Escapement diagnostics at the timing machine

- Low amplitude with clean traces in one or two positions: suspect excess lock or draw asymmetry; look at pallets and escape wheel endshake.
- Scatter that increases as amplitude rises: consider knocking (overbanking) or lubricant migration on the roller table; verify safety action.
- Flutter: too little draw or fork-to-roller clearance issues; verify endstone settings and guard pin clearance.

Escapement faults often masquerade as “regulation problems.” If rate changes when amplitude changes, find the escapement or oscillator cause; do not spin the regulator and hope.

### 5.7 Comparing escapements

A compact comparison to frame expectations at the bench:

| Escapement | Impulse type | Efficiency (qualitative) | Shock behavior | Lubrication sensitivity | Bench takeaways |
|------------|--------------|--------------------------|----------------|-------------------------|-----------------|
| Swiss lever | Sliding along plane pallets | Good; robust | Good (guard and draw) | High at pallet faces | Precise stone settings; micro-oils; safety geometry checks [6][7][8] |
| English lever | Line contact; equal impulse | Good if clean | Moderate | High; intolerant of dirt | Rare in wristwatches; historical interest [6][8] |
| Detent | Direct, minimal sliding | Very high | Poor | Low at escapement; high everywhere else | Not for shocks; immaculate geometry [6][8] |
| Co-axial | Split, reduced sliding | High in theory and practice when well set | Good (lever-like safety) | Lower at impulse; specific | Follow Daniels’ geometry; do not generalize [6] |

#### What to carry to the bench

- High-magnification microscope (≥40×) with coaxial lighting for pallet/escape inspection
- Pallet warmer or controlled plate for oiling consistency
- Fine broaches and stone-setting shellac tools (where applicable)
- Roller table gauges and guard pin adjusters
- Special oilers for ultra-thin films; epilame for stone faces as specified
- Reference geometry notes for the specific escapement (lift angles, draw, drop targets)

---

## Chapter 6 — Complications as Engineering Problems: Calendars, Chronographs, Tourbillons

Complications are mechanisms that consume energy and impose timing events on the base movement. Treat them primarily as loads, constraints, and sources of disturbance. The goal is to deliver their functions while preserving the oscillator’s amplitude, the escapement’s safety, and the watch’s accuracy and precision.

### 6.1 Energy budgets and timing windows

Every complication answers three questions:

- From where do I take torque?
- When and how do I take it?
- How do I ensure I never take more than the base can spare?

Instantaneous events (calendar jumps, chronograph starts, minute recorder clicks) concentrate power draw. Spreading or staging these loads often improves rate stability. A sound base caliber with margin is a prerequisite; adding complications to a marginal movement yields visible amplitude dips and rate changes.

A certification mindset helps here: if accuracy and precision across positions and days are your targets (as in ISO 3159-based criteria used by COSC [1][2][5]), then any complication must be engineered so its operation does not push the watch outside those targets.

### 6.2 Calendars: counting days without punishing the train

Basic date mechanisms use a 24-hour wheel finger to advance a date ring with 31 steps. Two broad families:

- Semi-instantaneous: the date advances over a window (minutes to hours) around midnight. Load is lower, spread in time. Visual change is gradual.
- Instantaneous (jump): energy is stored over hours in a spring or cam and released near midnight to make a quick jump. Load is concentrated at release and during storage as the spring is charged.

Engineering choices:

- Drive location: many take from the motion works (cannon pinion or hour wheel). The friction couple must be set to avoid slippage during charging or hand-setting.
- Safety: quick-set controls that disengage the date during the danger zone (“no-set period”) prevent bent teeth and broken fingers. Modern designs incorporate safety clutches; older designs rely on instructions. At the bench, if you cannot verify positive disengagement, educate the owner and mark the service notes clearly [7][8].
- Month logic: annual and perpetual calendars encode month lengths on cams or program wheels. An annual calendar “knows” 30 vs. 31-day months and needs correction once at February’s end; a perpetual calendar encodes the leap-year cycle too. These add gears, clicks, jumper springs, and storage springs—each a source of loss and adjustment. Daniels’ descriptions of calendar works remind us to tune jumper forces so that they hold firmly but do not excessively load the driving wheel [6].

Practical checks:

- Monitor amplitude before, during, and after the change period. If the jump drops amplitude conspicuously or causes a rate “blip,” suspect over-strong jump springs, rough cam faces, or excessive friction in the date ring bearings.
- Verify date concentricity and ring side-shake. A rubbing ring is a hidden drain.
- Set cannon pinion torque with calendric load in mind. A pinion too tight may tick along in timekeeping but stall at the change.

### 6.3 Chronographs: coupling without chaos

Chronographs impose intermittent, operator-triggered loads. They must engage smoothly, run without robbing amplitude unduly, and reset accurately.

Two principal coupling types:

- Horizontal (lateral) clutch: a driving wheel slides into mesh with the chronograph seconds wheel. Advantages: compact, visible, elegant; costs: meshing under load can cause start “jump,” and drag from continuous mesh elements can drain amplitude if not minimized [6][7].
- Vertical clutch: friction surfaces engage axially, coupling without gear-tooth entry. Advantages: near-zero start jump, lower running drag; costs: complexity, need for controlled friction and lubrication (or deliberately dry friction pair), potential for “stiction” leading to creep when stopped if friction is mis-set [6][7].

Control systems:

- Column wheel: gated control with smooth action and clear phases; costlier to manufacture.
- Cam/lever: stamped/levers actuate functions; robust and economical when well designed.

Engineering concerns:

- Heart cams and reset hammers: reset must be crisp without throwing the train. Excess hammer force hammers bearings and wastes energy; too little and hands don’t zero.
- Minute recorder indexing: snail or star with jumper spring. Jumper force must hold against shock without adding big friction at each step.
- Driving minute counter: whether driven by the chronograph seconds wheel (with intermediate indexing) or directly from the fourth wheel affects energy path and load. Optimize bearings and tooth form accordingly.

Bench tests:

- Record amplitude with chronograph off, running, and at reset. Note the delta in multiple positions. Healthy designs show modest drops; large drops or scattered rate during timing indicate friction points or over-strong springs.
- Observe start behavior under magnification. Lateral clutches that enter too hard show hand jump; relieve with proper depthing and light chamfers on entry teeth.
- Test for “creep” in vertical clutches when stopped—if the chronograph seconds hand drifts, adjust drag and inspect friction surfaces.

Chronographs tend to magnify the sins of the base. Clean power trains, balanced oscillators, and correct oil regimes are non-negotiable.

### 6.4 Tourbillons: averaging a problem that might not be yours

A tourbillon rotates the escapement and balance in a cage, aiming to average out positional errors over the cage’s period. In stationary positions (pocket watches at rest), this averaging can reduce positional rate errors stemming from gravity-related poise and spring asymmetries. In a wristwatch that changes position frequently and unpredictably, the benefit is less clear. The tourbillon imposes:

- Additional bearings, gearing, and inertia (cage, pinions), which consume torque.
- Tight poise and endshake requirements for the cage to avoid adding new positional errors.
- Constraints on regulator access and spring forming due to compact geometry.

From an engineering standpoint, a tourbillon is a dial-side complication that consumes power to buy potential improvements in precision by averaging. It is not a magic source of accuracy; setting, spring geometry, and escapement execution still rule. Historically, precision-winning tourbillons were tailored to specific positions and use cases; modern wristwatch tourbillons must succeed under motion or accept that their value is elsewhere. Historical literature contains both positive and negative assessments of tourbillons. Treat modern performance claims as design- and use-case-dependent, and verify them with measurements under realistic wearing patterns.

Bench approach:

- Treat the cage as a wheel train: true and poise it meticulously; any eccentricity prints directly as rate modulation.
- Oil with reduced loads in mind: extra bearings demand disciplined oiling.
- Test rate modulation over the cage period. Look for periodic rate signatures that hint at cage poise or gear errors.

### 6.5 Other practical complications as loads

- Power-reserve indicators: differentials or friction clutches add drag. Tune spring tensions so indication works at low energy cost.
- Moon-phases and day/night: light loads, but poor tolerances can rub dials and bridges. Rubbing is torque.
- Striking and alarms (if encountered): intermittent heavy loads; ensure the going train is isolated during strike or that the barrel is partitioned. Poor partitioning prints as rate disturbance when the strike is wound or operates (general practice; check specific designs) [6][7][8].

### 6.6 Designing for certification-level behavior

If your target is performance aligned with wrist-chronometer standards (ISO 3159) and certification (e.g., COSC categories based on that standard) [1][2][5], design or service with the following:

- Reserve margin: ensure the complication’s worst-case load does not push amplitude below the oscillator’s isochronous band in any tested position.
- Temporal spreading: prefer mechanisms that store and release energy with moderated peaks.
- Safety and user error: build in clutches and detents that prevent damage during setting; instructions are not a substitute for safety cams and lift-outs [7][8].
- Verification: test across positions, over days, and across the event windows (midnight for calendars, start/stop/resets for chronographs). Certification is a process over time, not a one-shot reading [1][2][5].

#### What to carry to the bench

- Motion-works holders and hand-extraction tools that do not stress jumpers or cams
- Force gauges or calibrated torque feels for cannon pinion and clutch adjustments
- Polygon viewers or microscopes for tooth and cam face assessment
- Specialized lubricants for clutches and jumpers; epilame for pawls and clicks as specified
- Dial protectors and precise hand pushers to avoid twisting arbors
- Chronograph depthing gauges and vertical clutch friction test fixtures (maker-supplied where available)

---


# Part III — Materials & Precision Science

Mechanisms keep time; materials let them. In this part we look at metals, alloys, and engineered components through the lens that matters at the bench: what they do to rate, amplitude, positional behavior, and the difference between accuracy (closeness to the time reference) and precision (repeatability). We will ground the discussion in long-practiced methods and test regimes. Where formal standards are relevant, we will point you to them; where shop practice dominates, we will say so.

> Definition (COSC): “The term chronometer is… a precision wristwatch... tested and certified by an Official Swiss Chronometer Testing Institute (COSC).” [1][2]

Practical timekeeping quality is a negotiation among:
- Rate: the change in indicated time per day relative to a reference, positive or negative.
- Precision: how tightly repeated rate measurements cluster under the same conditions.
- Positional behavior: how rates differ among vertical and horizontal positions due to gravity’s influence on the balance, spring, and pivots.
- Amplitude: the balance’s swing in degrees, which co-varies with delivered torque, friction, lubrication, and escapement geometry.
- Accuracy: closeness of the watch’s indicated time to a defined reference over a stated interval and conditions; use the observed rate and accumulated error with the reference and test regime stated.

Materials control stability against temperature and magnetic fields; they set the friction the train can tolerate; and they define how the oscillator’s elastic and inertial properties drift with age. The workshop concern is not catalog names, but the mechanisms: expansion, magnetization, wear, and energy loss.

COSC testing (built on ISO 3159) evaluates uncased movements in multiple positions and temperatures over many days, reporting statistics such as mean daily rate and variation [1][2][5]. Those are material tests as much as mechanical ones.


## Chapter 7 — Metals and Alloys in the Movement

The traditional movement is an alloy catalog in miniature. Brass or nickel silver for plates and bridges; hardened carbon steel for pinions and pivots; copper-beryllium or similar bronze for balances; nickel–iron–chromium for hairsprings; ruby for bearings. Each choice answers the same question: how to preserve amplitude and positional consistency while the watch lives in the world.

### Plates and Bridges: Brass and Nickel Silver

- Brass: Easy to machine and stable in dimension, brass provides a benign substrate for screws, jewel settings, and bearings [6][7]. Its softness is a virtue: it sacrifices itself so steel pivots do not.
- Nickel silver (copper–nickel–zinc): Harder, more corrosion-resistant, and visually neutral, it adds rigidity without magnetism. It threads well and holds jewel seats cleanly [6].

Risks and remedies:
- Thread wear and screw seat elongation are routine. Bushings and stepped screws remain the simplest repair [7].
- Plating (rhodium, nickel) aims at corrosion resistance, not dimensional accuracy. Do not rely on it for bearing surfaces.

### Pinions, Pivots, Arbors: Hardened Steel, Surface Finish, and Magnetization

Hardened carbon steel remains the working standard for pinions and pivots because it takes a polish, holds form at small section, and can be burnished to reduce boundary friction [6][7]. Danse macabre: higher hardness improves wear but increases brittleness; finishing must keep compressive surface states and roundness.

- Polishing can reduce surface asperities; burnishing can improve surface finish and, in appropriate repairs, restore a suitable bearing surface. Either may reduce friction when surface condition is the limiting factor, but the measured effect depends on pivot geometry, bearing condition, lubrication, and load [6][7].
- Magnetization: Steel pivots and pinions can retain magnetism from tools or external fields. While steel’s ferromagnetism hardly affects train torque directly, magnetized pivots accumulate swarf and alter lubrication behavior; magnetized hairsprings are the true rate hazard (Chapter 10).

### Wheels and Plates: Brass and Its Bearings

Cutting quality, tooth rounding, and depthing overshadow alloy choice in their effect on power flow. However, wheels cut in hard brass and finished with well-formed flanks deliver smoother meshing and less pressure-angle error, preserving amplitude especially at low torque (late in the power reserve) [6][7][8]. Poor finish tends to present as a low, rough amplitude in all positions (precision can remain high even when amplitude is low, a frequent diagnostic trap).

### Balances: From Steel to Bronze Alloys

The balance seeks high stiffness per mass, low thermal expansion, and resistance to distortion. Modern solid balances in copper–beryllium or similar bronze alloys achieve low mass with high rigidity and low magnetism compared to historical steel or bi-metallic compensating rings [6]. Their near-constant radius under temperature removes one variable from the rate/temperature problem; the hairspring becomes the principal compensator (Chapter 8).

Timing screws and inertia blocks are for rate trimming and poising, not for routine temperature compensation on a solid balance. Treat the balance as the inertial constant of the oscillator; treat the hairspring as the elastic constant; regulate by changing effective elastic length before changing inertia unless amplitude is excessive or deficient.

### Escapement Components: Steel, Ruby, and the Case for Hardness

Pallets with ruby stones and steel escape wheels remain the practical compromise: hard, polishable steel driving lubricated, hard stones. Geometry is delicate; materials give you the surface integrity that geometry needs [6][7]. Silicon, covered in Chapter 10, changes some of these trade-offs.

### Case Metals and Shields

For magnetism and corrosion the case matters. Soft-iron inner covers create magnetic circuits that shunt fields away from the hairspring; non-magnetic cases (titanium, austenitic stainless) avoid becoming field concentrators. These are engineering choices rather than aesthetic ones. Precise field thresholds belong to standards not included here; judge effectiveness by the watch’s post-exposure rate and amplitude, not by catalog figures.

### A working comparison

| Component | Common material choice | Ferromagnetic? | Bench-relevant reason |
|---|---|---|---|
| Mainplate/bridges | Brass, nickel silver | No | Machinability, thread integrity, stable jewel seats [6][7] |
| Pinions/pivots | Hardened carbon steel | Yes | High polish, wear resistance, controllable heat treatment [6][7] |
| Wheels | Hard brass | No | Form retention, cut quality, weight moderation [6][7][8] |
| Balance | Beryllium bronze or similar | No | Rigidity, low expansion, dimensional stability [6] |
| Hairspring | Nickel–iron–chromium alloy or silicon | Alloy: weakly magnetic to amagnetic depending on composition; silicon: amagnetic | Temperature compensation (alloy), magnetism resistance, elastic stability [6] |
| Jewels | Synthetic ruby | No | Hardness, low friction, oil retention [6][7] |
| Pallet stones | Synthetic ruby | No | Wear, polish, geometry stability [6][7] |
| Escape wheel | Steel, sometimes nickel alloys or silicon | Steel: yes; others: varies | Tooth strength, finish, compatibility with lubrication [6] |

Bench rule: chase amplitude and regularity by controlling surface finish and bearings first; change materials only when you understand which failure mode you are curing.

### What to carry to the bench
- Pivot files and burnishers in graded sizes.
- Jewel micrometers and reamers; Kif/Incabloc tools for endstone service.
- Non-magnetic tweezers for hairspring handling.
- A demagnetizer suitable for small components.
- Screwplate taps and bushing assortment for worn case and plate threads.
- Loupe with high NA for surface finish inspection on pivots and stones.


## Chapter 8 — Hairsprings: Evolution, Geometry, and Control

If the balance is the flywheel, the hairspring is the law. Mechanical timekeeping is the art of keeping the elastic constant and the inertial constant from wandering. Materials, heat treatment, and terminal geometry bind that art.

### From Tempered Steel to Self-Compensating Alloys

- Tempered blued steel: Early hairsprings were spring steel, hardened and tempered. Strength was high; corrosion and magnetization were endemic; the elastic modulus drifted with temperature, producing a pronounced rate error [6][7][8]. Temperature compensation was delegated to bi-metallic balances (Chapter 10), a second-order fix that worked but demanded vigilant regulation [4][6].
- Elinvar and successors: Nickel–iron–chromium alloys developed for a lower temperature coefficient of elastic modulus reduced one major source of rate drift. They enabled more practical use of solid balances, although the complete temperature behavior of a watch still depends on the balance, spring, escapement, lubrication, and other components [6].

Practical interpretation: self-compensating alloys remove the need for cuts in the balance, but they do not abolish temperature effects on oil viscosity or torque. If amplitude collapses when chilled or heated, blame lubrication before geometry.

### Flat vs Overcoil and the Terminal Curve Problem

Isochronism is as much geometry as metallurgy. A spring breathing concentrically keeps the regulator’s effective length constant through the swing and keeps the balance staff centered under gravity. That improves positional precision.

- Flat spiral: Compact, practical under low height constraints. If the outer coil is unshaped, the center of mass migrates during oscillation and breathing is non-concentric, breeding positional differences and beat changes [6].
- Breguet overcoil: The outer terminal rises, crosses, and returns to the collet side in a larger arc, restoring concentric breathing and reducing rate differences between horizontal and vertical positions at a given amplitude [6]. It complicates assembly and raises the spring’s center of gravity, with consequences for shock behavior.
- Phillips and Grossmann terminal curves: Shaped flats that improve concentricity without height penalty. Subtlety matters; mis-shape can be as bad as no shape. Daniels provides working geometries and the logic behind them [6].

Table: terminal choices in practice

| Terminal | Height impact | Concentricity | Typical positional behavior |
|---|---|---|---|
| Unshaped flat | Minimal | Poor | Larger spread, especially crown up/down vs dial up |
| Shaped flat (Phillips/Grossmann) | Minimal | Good if executed well | Reduced spread; sensitive to slight mishaping |
| Breguet overcoil | Increased | Very good when properly formed | May reduce certain positional and isochronal errors; outcome depends on the complete oscillator |

Bench rule: do not compensate a bad terminal with regulator pin abuse. Shape first, regulate second.

### Studding, Collets, and Regulators

Each interface between spring and watch is an opportunity for rate drift.

- Collet friction and orientation: The spring must leave the collet tangentially without twist. If the collet creeps, beat error and positional rate skew will follow. Shellac isn’t a collet adhesive for hairsprings; it is for stones. Use the correct friction fit and staking tooling [6][7].
- Studding: The stud location and the pinning angle set the neutral line of the spring. Deviations show as asymmetry: the rate in one vertical will diverge from its opposite because gravity couples differently into the spring [6].
- Regulator pins: Close, parallel pins with minimal clearance and a polished interior surface keep rate adjustment linear. Crooked or flared pins change effective length differently depending on amplitude, confusing diagnosis [7].

### Mean-Time Adjustment vs Inertia Change

- Mean-time screws and inertia blocks on a solid balance are for setting rate without touching the spring. They change the balance’s moment of inertia; the rate sensitivity is significant and must be used symmetrically to avoid poise errors [6].
- Regulator movement changes the active length of the spring. It is the first resort provided terminal geometry is sound.
- Do not mix methods casually. If you are trimming both spring length and inertia during the same regulation sequence, you conceal the source of precision or inaccuracy loss.

### Isochronism, Amplitude, and Power Spread

A watch with excellent precision but poor accuracy in wear often has an isochronism problem: the rate differs systematically between high and low amplitude. Causes include:
- Terminal geometry not keeping the active length constant with amplitude excursions.
- Escapement impulse angle or draw adding torque-dependent phase shifts.
- Lubrication differences that change friction at higher speeds.

Diagnosis: measure rate at high amplitude (full wind) and low amplitude (late in power reserve) in the same position. The spread is the isochronism error. Correction lives at the spring and escapement, not at the hands. Daniels treats terminal design for isochronism explicitly [6].

### What certification tests force you to see

COSC and ISO 3159 force temperature and positional thinking [1][2][5]:
- Positions: Multiple positions expose gravity’s hand on the spring and balance. Vertical rates reveal terminal and poise issues; horizontal rates reveal escapement and endshake friction asymmetries.
- Temperatures: Tests at three temperatures probe both the spring’s modulus drift and oil viscosity changes; residual temperature coefficient shows as parallel rate shifts across positions.

Treat those statistics as evidence about the combined system rather than as a direct material assay. A common temperature-related shift across positions can implicate the oscillator’s temperature coefficient; orientation-dependent changes can implicate interactions among spring geometry, friction, endshake, and escapement behavior. Use additional inspection and controlled tests before assigning a material cause.

### What to carry to the bench
- Hairspring collet and stud stakes, fine broaches, and studding blocks.
- Terminal curve templates or gauges; soft-jaw tweezers with safe radii.
- A timing machine that logs amplitude and rate across at least five positions.
- A reliable mainspring winder and fresh mainsprings for controlled isochronism checks.
- Micron paper or pegwood and alcohol for regulator pin finishing and cleaning.
- A small platen heater and cool pack for informal temperature checks (see Chapter 10).


## Chapter 9 — Jewels, Friction, and Energy

Friction converts amplitude into heat; jewels ration the loss. The goal is not zero friction—that is unattainable in boundary-lubricated point contacts—but predictable, low, and stable friction. Jewels also locate the train accurately under shock and gravity.

### Why Ruby?

Synthetic ruby (aluminum oxide doped with chromium) provides:
- High hardness and polishability.
- Corrosion resistance and low adhesion to oils.
- Elastic stability under load at the small contact areas found in pivot bearings [6][7].

Sapphire and spinel have similar virtues. The choices you will see and service are rubies. Do not overthink the color; do overthink the seat geometry and polish.

### Hole Jewels and Cap Jewels

- Hole jewels locate the pivot radially. Their bore finish and oil sink geometry govern drag and oil film stability [7].
- Cap jewels (endstones) limit axial displacement and provide a polished bearing surface for the pivot end. Their role and loading differ by orientation; in horizontal positions the pivot end can bear on the cap jewel, while in vertical positions the pivot commonly loads the wall of the hole jewel [6][7].

Endshake (axial) and side shake (radial) must be tuned together. Too little endshake binds the train in verticals; too much endshake lets the escape wheel climb the pallet prematurely under shock. Side shake too tight leads to oil starvation and galling; too loose presents as erratic amplitude and accidental depthing changes.

### Oiling Practice and Boundary Films

The pivot–jewel contact operates in boundary and mixed lubrication. Oil viscosity and wetting at the jewel walls must keep an oil wedge under the point load without throwing oil off at high amplitude. Use the smallest oil quantity that supports the load. Over-oiling of cap jewels migrates oil to the shoulder, drawing dirt and shifting the center of friction outward where leverage increases loss.

Practical checkpoints:
- The oil circle on a cap jewel should be centered and sized to the pivot’s cone of motion. If it walks, the surface is not clean or the pivot is not square.
- In a fresh service, amplitude rising but rate scatter widening suggests oil misapplication on the escapement stones or escape wheel teeth, not the train.

### Pallet Stones and Escape Wheel Tooth Faces

Lubrication at the impulse face reduces wear and controls friction spikes. The rubies must present correct lock and draw angles and a consistent polish. Shellac integrity is a rate concern: a creeping stone changes drop and lock, dragging amplitude and positional precision down with it [6][7].

- Draw and lock consistency: Unequal draw creates positional asymmetry, often misdiagnosed as spring fault.
- Tooth polish: Roughness increases oil shear, heat, and rate scatter. Inspect under high magnification.

### Jeweling Repairs and Pitfalls

- Replacing a jewel: Size to the pivot and seat to the plate without crushing. The bore must be coaxial with the train line; an off-axis jewel will correct endshake while ruining depthing.
- Burnishing pivots: Do not over-reduce diameter to get a better polish. The increased side shake will force you to a larger jewel or to accept amplitude loss in verticals.
- Shock settings: Incabloc/Kif endstones must return to their exact seat. A canted setting pins the endstone corner against the pivot and fakes a bent staff symptom [7].

### Friction, Rate, and Positional Behavior

- Horizontal vs vertical: In horizontals, the pivot sits on end-oil; in verticals, it leans against the jewel wall. Poor wall polish and incorrect clearances show up only in verticals. If your spread is mostly vertical, think friction first, spring second.
- Precision vs amplitude: You can have low amplitude with excellent precision if the friction is high but consistent. Precision is about repeatability; amplitude is energy. Clarity on this difference guides diagnosis.

### What to carry to the bench
- Endshake gauges, truing calipers, and side-shake measuring pins.
- Jeweling press with centering microscope and a full jewel assortment.
- Oils of appropriate viscosities and clean oilers; a warmed stone plate for cap-jewel inspection.
- Shellac flakes and pallet warmer for stone resets.
- Escape wheel and pallet polishers; high-NA inspection loupe or microscope.
- A demagnetizer; ferrous dust on oil is a diagnostic magnetism clue.


## Chapter 10 — Thermal Compensation, Temperature Testing, and Magnetic Resistance; Silicon and Non‑Ferrous Components

Temperature and magnetism are the two invisible enemies of rate. The first moves the elastic and inertial constants and the lubricant; the second changes the hairspring itself. Materials answer both.

### A brief historical frame: from Harrison to modern alloys

Harrison’s marine timekeepers confronted temperature and motion directly. His use of bimetallic compensation and novel escapements showed that material choice could tame environmental error and make precision portable [4]. The bimetallic compensation balance became the portable watchmaker’s tool for a century; self-compensating hairsprings and solid balances superseded it when metallurgy caught up [6]. The lesson is stable today: compensation at the oscillator is the straightest path to rate stability.

### Thermal behaviors that matter at the bench

- Elastic modulus drift: If the hairspring’s modulus changes with temperature, the balance’s rate will change, even with a solid balance. Self-compensating alloys reduce this effect; they do not annul it entirely [6].
- Balance inertia drift: Dimensional change of the balance with temperature changes its moment of inertia. Solid balances in low-expansion bronze make this small; bi-metallic cuts made it a tool in the past [6].
- Oil viscosity: Temperature changes oil drag. At cold, amplitude falls and unlocking roughness rises; at heat, oil can thin and migrate. Both appear directly in amplitude and indirectly in rate via escapement behavior.
- Mainspring torque: Coiled-steel torque varies with temperature and time since wind. Isochronism tuning (Chapter 8) is the countermeasure.

Practical diagnosis: a temperature-dependent amplitude loss across positions can be a clue to lubrication or other temperature-sensitive losses; a rate shift with relatively little amplitude change can point toward the oscillator’s residual temperature coefficient. These are diagnostic patterns, not standalone diagnoses; verify with controlled measurement.

### Temperature testing and what standards mean for you

COSC testing (built upon ISO 3159) evaluates uncased movements through multiple days in defined positions and at three temperatures [1][2][5]. The reported criteria include:
- Mean daily rate and its variation.
- Largest variation between positions.
- Rate behavior versus temperature [1][2].

Interpretation at the bench:
- Watch how the sign and magnitude of temperature-induced rate shifts compare with positional spreads. If temperature produces a near-parallel shift across positions, the spring dominates the error; if verticals move more, lubrication and endshake in combination with spring effects are at work.
- Test informally with controlled cool and warm exposures, always allowing the watch to thermally equilibrate before measurement. Do not regulate based on transients.

COSC’s Certified Excellence Chronometer program exists as an additional layer of certification for qualifying products [3]. Treat such marks as external attestations; your bench work remains the same: produce stable rate and amplitude under the owner’s conditions of use.

### Compensation strategies you will encounter

- Self-compensating spring with solid balance: The modern norm. Adjust mean rate via regulator or inertia screws; control isochronism via terminal geometry; accept small residual temperature coefficient and verify it through testing [6].
- Bi-metallic cut balance with steel spring: Historical and collectible. The balance provides primary temperature compensation; the spring provides elastic force. Regulation involves both mean-time screws and curb pins; ensure the rim cuts open and close freely with temperature and that the compensation curb pins are set correctly [6][8]. Inclocked watches, capillary action and oil must be watched: if the rim bind points are sticky, compensation will be erratic.

### Magnetism: causes, symptoms, and cures

The hairspring is the magnet’s preferred victim. Magnetization can:
- Increase the watch’s rate by pulling coils together, shortening effective length.
- Make the rate erratic with changing positions due to variable inter-coil stick.
- Leave amplitude little changed, misleading the diagnosis.

Symptoms:
- A sudden large daily gain with relatively preserved amplitude is a diagnostic clue that should prompt a magnetism check; it is not, by itself, proof of a magnetized spring.
- Coils that “breathe” unevenly under the microscope, especially in verticals.
- Ferrous debris accumulation on pivots and stones (secondary effect).

Cures:
- Demagnetization: Use a demagnetizer suitable for small components. Remove the balance complete when possible; slow withdrawal through a reducing field is safer than impulsive demag for delicate springs. Bench practice rules here; follow your device’s protocol.
- Materials: Use non-ferromagnetic alloys for balances and, where available, non-ferrous escapement parts. Self-compensating hairspring alloys are far less susceptible to magnetization than blued steel, but not perfectly immune in all compositions [6][7]. Silicon hairsprings are amagnetic by nature; see below.

Prevention:
- Non-magnetic tweezers and screwdrivers around the balance.
- Keep magnetized case clasps and phone covers away during testing.
- Soft-iron inner cases and shields redirect fields away from the movement.

Note: Specific anti-magnetic field thresholds belong to standards outside our reference packet. Treat manufacturer claims as marketing unless verified in a recognized test regime; judge the watch by its retained precision and amplitude after field exposure.

### Silicon and other non‑ferrous components

Silicon (monocrystalline) and other non-ferrous parts have entered the bench as facts, not fads. Consider them from first principles:

- Material properties that matter include low density, high stiffness, microfabrication precision, and amagnetic behavior. These are design inputs rather than guarantees of system-level performance.
- Escapement parts: silicon components eliminate ferromagnetic steel in the component itself and can alter friction and lubrication requirements depending on the design and surface treatment.
- Hairsprings: silicon hairsprings are intrinsically non-ferromagnetic and can be manufactured in complex geometries. Their actual temperature, positional, and shock performance remains a property of the complete oscillator and must be verified by measurement.

Cautions (practitioner conventions; see Review before publication):
- Shock behavior differs from metal springs; check staff and collet integrity after impact.
- Repair options are constrained; replacement rather than reshaping may be the only viable path.
- Certain coatings and surface states influence oil wetting; adapt escapement lubrication accordingly.

### Practical temperature and magnetism tests

- Temperature (informal screening only): Gentle cool/warm exposure can be used to look for gross thermal effects after adequate equilibration and condensation control. It is not a substitute for a standardized temperature test or certification protocol. Follow the manufacturer’s handling limits and avoid thermal shock.
- Magnetism:
  - Compass or magnet indicator at the bench can show gross magnetization of the case; the timing machine shows the effect where it matters—rate and beat scatter. If the gain is large and immediate, demagnetize before any regulation.

Link to standards:
- The COSC regime forces structured observation of the same effects in controlled positions and temperatures [1][2]. You need not replicate the laboratory to learn from the method.

### Materials, accuracy, and precision—keep the lines straight

- Accuracy (closeness to reference) is the end result after you have chosen how to wear the inevitable errors (position, temperature) into the owner’s conditions of use.
- Precision (repeatability) is the bench’s daily bread: a watch that does the same thing today and tomorrow is controllable, even if it is presently “wrong.” Materials with stable properties—self-compensating hairsprings, hard and smooth jewels, non-oxidizing pivots—buy you precision.
- Rate is your adjustable handle; amplitude is your energy budget; positional behavior is your map of gravity’s interference. Materials inform all three.

### What to carry to the bench
- Demagnetizer and a small compass or magnet indicator.
- Sealable plastic bags, cool packs, and a low-temperature-safe warmer for controlled temperature exposures.
- Non-magnetic tweezers and small screwdrivers.
- Spare balance completes (alloy and silicon spring types where applicable) for swap-diagnosis.
- Endstone cleaning kit and correct oils for temperature extremes expected by the client.
- Timing machine with logs; worksheets that track rate, amplitude, and beat across positions and temperature exposures.


## References

[1] COSC, COSC certifications: https://www.cosc.swiss/cosc-certifications
[2] COSC, FAQ: https://www.cosc.swiss/cosc-faq
[3] COSC, Excellence Chronometer Certified: https://www.cosc.swiss/certified-excellence-chronometer
[4] Royal Museums Greenwich, Longitude found: the story of Harrison's timekeepers: https://www.rmg.co.uk/stories/time/harrisons-clocks-longitude-problem
[5] International Organization for Standardization. ISO 3159:2009, *Timekeeping instruments — Wrist-chronometers with spring-balance oscillator*, Edition 2. ISO currently lists this edition as published/current; the standard is under systematic review as of 2026. Consult the licensed edition for exact clauses and definitions.
[6] George Daniels, Watchmaking, 1981.
[7] Donald de Carle, Practical Watch Repair.
[8] F. J. Britten, The Watch & Clock Maker's Handbook, Dictionary and Guide.
[9] Federal Institute of Metrology (METAS), *METAS-N001*, Requirements for certification of movements and mechanical watches resistant to magnetic fields of 1.5 T (15,000 G).
[10] Federation of the Swiss Watch Industry, COSC Excellence Chronometer announcement, 12 March 2026.
[11] Rolex, current Superlative Chronometer specification, 2026.
[12] Jaeger-LeCoultre, 1000 Hour Control.



# Part IV — The Standards That Prove It

This part is about proof. Not inspiration, not vocabulary—proof that a movement, or a finished watch, behaves within stated bounds when it leaves your hands and later, when it comes back. The craft has always needed such proof. It is how John Harrison turned ideas into longitude, convincing a skeptical Board of Longitude with machines that performed in hostile, changing conditions, not on the bench alone [4]. Wristwatch chronometry is less heroic than running a sea, but it is the same problem on a smaller balance: show that rate, precision, and positional behavior meet agreed limits, and that the result holds when the temperature swings and the watch is oriented any which way.

Standards turn that demand into procedures. Some are public, like ISO 3159 for wrist-chronometers with sprung-balance oscillators [5], and COSC’s 15-day, five-position, three-temperature regime and acceptance range of -4 to +6 seconds per day for its Swiss Chronometer Certification [1][2]. Others are first-party or industry-described, like METAS Master Chronometer, or a brand’s internal “superlative” or “1000-hour” regime. All of them force clarity about what is measured (movement or watch), under what conditions, and against what tolerances.

A chronometer certificate is not an opinion. It is an attestation that rate performance, and the repeatability of that performance, were assessed methodically. Bench practice must mirror the same spirit. You need to be explicit about accuracy (closeness to a reference), precision/repeatability (how tightly the results cluster), rate (seconds/day), amplitude (swing of the balance, a proxy for energy and health), and positional behavior (how rate varies with orientation). If you do not separate these, you will not know whether to adjust a curb pin, a stud, a poise, or your expectations.

The chapters that follow survey the standards that matter and how they intersect with your work. They also draw out the common trap: movement-only success does not guarantee cased-watch success. The case, hands, rotor, dial feet, and all the rest add friction, mass, and magnetism. You must have a method to see the difference, and to prove to yourself—and sometimes to others—that your results are reliable.

## Chapter 11 — Chronometer Is Not Chronograph

The words are often mangled in the showroom, less often at the bench, but it is worth setting the terms plainly because the standards depend on them.

- Chronometer: A timekeeper whose rate performance has been tested against a defined protocol and meets the specified tolerances. In wristwatches, the public reference is ISO 3159, with certification programs such as COSC that apply and publish test criteria and acceptance ranges [1][2][5].
- Chronograph: A mechanism that measures elapsed time, typically by coupling and decoupling a drive to a set of hands. It has nothing to say, by itself, about the rate performance of the timekeeping train. A chronograph can be a chronometer; most are not tested as such. Classical horological authors distinguish the functions clearly and treat them in separate chapters and techniques [6][7][8].

Clarity about measurement

When you say “good timing,” you need at least four numbers and one picture in your head:

- Accuracy: The closeness of indicated time to a defined reference over a stated interval and conditions. An observed rate deviation of +3 s/d is a rate result; whether the watch is accurate depends on the reference, interval, conditions, and acceptance criterion. Accuracy can look good with poor precision if measurements scatter widely around +3.
- Precision/repeatability: How much the rate varies when repeated under similar conditions. A movement that runs +3, +3, +3 is precise. One that runs +6, 0, +7 in the same condition is imprecise. Precision without accuracy is common; the hairspring or regulator can be set to bring the precise rate to zero.
- Rate: Conventionally expressed as seconds per day (s/d). It is the primary figure reported by timing equipment and formal tests.
- Amplitude: The angular swing of the balance in degrees. Amplitude is not a performance criterion in ISO 3159 or COSC acceptance ranges, but it is a diagnostic quantity at the bench: amplitude erosion usually precedes or accompanies poor precision and positional instability [6][7].
- Positional behavior: The change in rate when the watch’s orientation changes. The classical positions (dial up/down, crown up/right/left, crown down) stress different points of friction and gravity-torque effects on the balance and spring. Good positional behavior is evidence about the combined effects of poise, spring geometry, pivots, escapement, and gravity under the tested orientations; it does not by itself prove isochronism or diagnose a single cause.

It helps to maintain a simple mental matrix. If accuracy is off but precision is strong across positions, you regulate. If precision is weak and amplitude is low in some positions, you look for friction, oiling, pivots, poise, or interference. If precision is weak at full wind but improves after 24 hours, the mainspring or barrel may be the culprit. Each metric points to different work.

Why chronometer standards exist

The point of standardization is not to declare one brand superior, but to fix a language by which we can all mean the same thing. ISO 3159 defines test parameters for wrist-chronometers; COSC implements a regime grounded in those definitions and publishes the main contours of its program, including the 15-day duration, five positions, three temperatures, and the -4/+6 s/d acceptance for its wristwatch chronometer certification [1][2][5]. When you read “chronometer” on a dial, you should verify whether it refers to a tested movement under a public regime, an internal test, or simply a historical moniker.

Historical reminder

Marine chronometers solved a navigational crisis by performing at sea across temperatures and shocks. Harrison’s machines established a new standard for proof: public demonstration and independent evaluation over time [4]. That legacy is why modern certification still separates claim from evidence. There is no shortcut.

What to carry to the bench

- Timing machine capable of multi-position capture and interval statistics
- Calibrated time reference (GPS-disciplined clock, network time with known offset)
- Demagnetizer and a small reference magnet
- Simple positional rack or foam blocks to hold watches in repeatable orientations
- Temperature pouches or controlled packs (warm and cool) for qualitative checks
- Loupe and poising tools for balance checks
- Notebook or digital log template with fields for accuracy, precision, amplitude, and positions


## Chapter 12 — ISO 3159 and the COSC Regime

ISO 3159 sets the general framework for wrist-chronometers with sprung-balance oscillators [5]. It is the standard to cite when you want to speak about chronometer evaluation abstractly: object under test, environmental conditions, durations, and the family of statistical measures to be considered. It is not a test lab; it is the rulebook.

COSC—Contrôle Officiel Suisse des Chronomètres—is the well-known Swiss organization that runs tests grounded in this framework. What matters for the bench is what COSC publicly attests about its program. According to COSC, its classic wristwatch chronometer testing:

- Runs for 15 consecutive days [1][2].
- Subjects each movement to five positions and three temperatures [1][2].
- Applies acceptance criteria that include an average daily rate within -4 to +6 seconds per day for wristwatch movements [1][2].
- Concerns movements, not cased watches. COSC’s program evaluates uncased movements supplied by manufacturers for testing [2].

The structure of the evaluation

The regime exercises rate in a matrix of orientation and temperature, over time. In practice, that means the lab will:

- Stabilize the movement in a given position.
- Record daily rates at set intervals.
- Shift positions and apply temperature changes according to the schedule.
- Calculate statistical figures from the measurements and compare them to acceptance ranges.

In the ISO/COSC vocabulary, the central calculated quantities include a mean daily rate, the variation of rate from day to day, the largest spread among positions, the effect of temperature changes, and the “resumption” or stability of rate after certain transitions [1][2][5]. The exact formulas and bounds live in the standard and the lab’s procedures; the important point at the bench is that certification reflects both accuracy and precision across positions and temperatures, not a single flattering snapshot.

Limitations of movement-only testing

COSC explicitly tests movements, not cased watches [2]. That ensures independence and comparability (the lab is not dealing with a manufacturer’s case tolerances, gaskets, and hands), but it creates a gap you must respect in practice:

- Hands and dial: Installing hands can introduce very small drag or intermittent interference that a bare movement never experienced. A seconds hand that is slightly low can graze an index under shock, pulling amplitude down; a minute hand with a burr can catch on a gear tooth endshake anomaly.
- Calendar works: Calendar switching torque loads around midnight alter rate or amplitude; movement-only tests often run without the additional calendar load of disk friction and dial finger tension.
- Automatic winding train: The rotor’s added mass and friction change balance of the whole. A loose or over-tensioned reversing wheel can add subtle drag that saps amplitude in vertical positions. Movement-only test rigs often exclude the rotor; even when included, the winding system may not be stressed the way it is in a wrist-worn watch.
- Case magnetism: The case, dial, and movement ring can retain magnetism or expose the movement to fields the bare movement did not see. A magnetized screw near the hairspring may have no analogue in a test holder.
- Sealing and lubrication: Gaskets add compression; case clamping can slightly distort mainplates or bridges if tolerances are poor, changing endshake or depthing enough to affect positional rate.
- Shock and wear-in: The first days of cased operation scrub in oils differently than on a sterile bench. COSC’s 15 days are not a substitute for the early-life dynamics of a newly cased watch in service.

None of these points question the value of COSC; they underscore the difference between a movement under controlled lab conditions and the cased watch you deliver. Your job is to close the gap.

Bench replication: interpreting and applying

You may not have a certified lab, but you can run a disciplined in-house regime that respects the same physics:

- Positions: Use at least the five classical orientations. If the watch has a heavy dial or asymmetric case, include the actual wrist-down angle you expect in wear.
- Temperatures: You do not need a climate chamber to see gross thermal behavior. Warm and cool packs used consistently will show whether rate wanders under temperature changes. Do not attempt to assign exact thermal coefficients without proper instrumentation; you are screening, not certifying.
- Time bases: Trust only a calibrated reference. Phone apps are not references unless you confirm their offset and stability against a better source.
- Statistics: Logging is half the work. You need averages, scatter (standard deviation or simple max-min spreads), and deltas between positions to separate accuracy from precision. If your timing machine exports, make a standard spreadsheet and stick to it.

Where ISO 3159 helps is in reminding you to look beyond a single “best case” number. If your watch is +3 s/d dial up and -7 s/d crown down, the average looks flattering but the positional behavior is poor. Users will see that as unpredictability.

Relationship of ISO 3159 to COSC

ISO 3159 is the standard; COSC is an organization implementing a program grounded in that standard and publishing its acceptance range details publicly [1][2][5]. When a manufacturer declares a movement to be a “chronometer” by COSC, you can assume that the movement—uncased—met COSC’s published acceptance range after 15 days in five positions and three temperatures, including an average daily rate between -4 and +6 s/d [1][2]. That is a meaningful claim, but not the end of the watchmaker’s job.

What to carry to the bench

- Movement holders that mimic casing stresses (clamping points, height)
- Hands-fitting tools and a microscope to inspect for hand/collar interference
- A positional testing stand with labeled, repeatable detents for at least five orientations
- Two or three consistent temperature packs and a probe thermometer for logging approximate conditions
- A clean rotor assembly dummy load if you time automatics with and without the rotor
- A demagnetizer and small compass or gauss probe for case component screening
- A logging template (paper or digital) mirroring COSC-like columns: position, temperature, rate, amplitude, beat error, remarks


## Chapter 13 — Beyond COSC: First-Party and Composite Regimes

COSC is not the only game in town. Some programs are jointly operated with public bodies; others are entirely first-party. The distinction to keep in mind at the bench is not the logo on the certificate but the scope of the claim: movement or finished watch; environmental stresses considered; tolerances published.

METAS Master Chronometer (METAS requirements)

METAS is the Swiss Federal Institute of Metrology and certifying body for this program. Its published requirements describe certification of fully mechanical watches covering chronometric performance, water resistance, magnetic-field resistance, and power reserve. The movement must first meet the applicable ISO 3159:2009 chronometer criteria, and the testing laboratory is subject to ISO/IEC 17025 accreditation and METAS oversight.

Key published requirements include:

- The watch is evaluated in its final configuration as offered for sale.
- The program includes exposure to a 1.5 T (15,000 G) magnetic field; the movement and finished watch must meet the program’s non-stopping criteria during the relevant tests.
- Average daily precision is constrained by watch category: 0 to +5 s/day for category 1a, 0 to +6 s/day for category 1b, and 0 to +7 s/day for category 2.
- The declared power reserve is verified, together with positional rate behavior and other published acceptance criteria.

At the bench, the distinction is one of scope: METAS is not merely a movement-rate label. It evaluates the finished watch and combines chronometric, magnetic, water-resistance, and power-reserve requirements. Exact sequences and acceptance calculations belong to the applicable METAS requirements document.
Brand-internal regimes

Manufacturers also operate proprietary quality and certification systems. Their scope should be described separately from ISO standards and third-party certifications.

- Rolex “Superlative Chronometer”: Rolex states that its current certification rests on seven pillars: precision, waterproofness, self-winding, autonomy, resistance to magnetism, reliability, and sustainability. The finished watch has a stated precision range of -2 to +2 seconds/day after casing. The additional magnetism, reliability, and sustainability criteria were added to the earlier four pillars in 2026.
- Jaeger-LeCoultre “1000 Hours Control”: Jaeger-LeCoultre states that every watch is tested for up to six weeks, with checks covering positions, power reserve, temperature, movement, and water resistance. It is a proprietary quality-control program, not an ISO or third-party public standard.
Treat such marks as internal quality systems, not as public, third-party standards. They can be good; they can also be marketing wrappers on competent factory testing. Your job is to translate the claim into bench practice:

- Ask what was tested: movement or cased watch?
- Ask under what conditions: which positions, approximate temperatures, and what states of wind?
- Ask how the rate figure was computed: instantaneous, 24-hour average, or multi-day average?
- Ask what the acceptance intervention is: if a watch fails, what is done—regulation, rework, recasing?

Reasonable expectations at the bench

If a customer brings a cased watch that supposedly meets a cased-watch standard and it runs poorly in a position the program is said to test, suspect assembly issues, magnetism, or wear rather than a systemic misclassification. Likewise, do not be surprised if a movement that aced COSC becomes less predictable once cased. Be structured in your approach:

- Verify that the positional spread in your tests mirrors the manufacturer’s declared or implied test positions.
- If the watch is said to be strongly anti-magnetic, test your bench for stray fields and demagnetize the case and tools before concluding the watch is magnetized.
- Recognize differences in measurement methods. A lab may average multiple 24-hour periods in each position, while you are reading a 30-second snapshot.

Labeling caution

On the dial, “Chronometer” has a public, testable meaning in the Swiss context via COSC, as outlined in Chapter 12 [1][2]. Marks like “Superlative Chronometer” or “1000 Hours” should be taken as brand-specific regimes. Their numerical targets and methods must be verified from primary sources before you cite them.

What to carry to the bench

- A small permanent magnet and gauss meter or compass for screening susceptibility and ambient fields
- Demagnetizer and non-magnetic tweezers
- Torque screwdriver set for consistent caseback closure (to avoid varying stresses during re-tests)
- Full set of case clamps and spacers for secure, stress-free casing during experiments
- A power-reserve timer or disciplined winding protocol to test at “full,” “mid,” and “low” states repeatably
- Clear intake questionnaire for clients noting use patterns and claims (e.g., “Master Chronometer,” “1000 Hours”)


## Chapter 14 — COSC Excellence Chronometer: From Movement to Finished Watch

COSC has described a program intended to evaluate the finished watch as a whole product, distinct from its classic movement-only chronometer certification. Under the “Excellence Chronometer” banner, COSC draws an explicit distinction between:

- Certification of a movement under its classical 15-day, five-position, three-temperature regime with the -4/+6 s/d tolerance for wristwatch movements [1][2]; and
- An evaluation of the finished, cased timepiece under a program that COSC identifies as a separate certification category [3].

The key point, according to COSC’s published material, is scope: Excellence Chronometer is framed as an assessment of the complete watch, while traditional COSC certification focuses on the uncased movement [1][2][3]. This distinction aligns with the longstanding bench reality noted earlier: the case, dial, hands, and winding system can alter the performance picture materially.

What we can say from the public page

COSC’s “Excellence Chronometer Certified” page states that the program exists and is separate from movement certification, and that it is about the finished watch [3]. It positions Excellence Chronometer as an additional, complementary evaluation beyond the traditional movement-only approach. The page underscores that a finished watch can, and in some programs should, be tested as a unit [3].

COSC’s 2026 Excellence Chronometer program adds a finished-watch stage after the traditional movement certification. The Federation of the Swiss Watch Industry describes five additional days of evaluation, including a 24-hour semi-dynamic simulation of average wrist wear, followed by a -2 to +4 seconds/day rate-deviation requirement, a 200-gauss magnetic test, and verification of the declared power reserve. The program was introduced progressively during 2026; verify the latest COSC publication when citing current availability.

Bench implications of finished-watch evaluation

If you prepare watches for any finished-watch certification, your process must broaden beyond movement tuning:

- Case prep: Ensure that case screws, movement rings, and clamps seat without distorting the movement. Dry-fit and torque-match casebacks before final sealing.
- Hands clearance: Measure hand-to-hand and hand-to-dial clearances under a microscope and check for rub through a full 12-hour cycle. A single rub at a calendar cam peak will show up as a transient rate dip.
- Rotor and winding: Confirm free motion of the rotor in all orientations. Listen for intermittent contact and check that reversing wheels are not adding parasitic drag.
- Magnetism: Screen the case, dial, and movement ring before casing. A magnetized dial foot can undermine otherwise excellent anti-magnetism.
- Water-resistance and temperature: If the finished-watch certification includes environmental exposures (to be verified from COSC’s own publication [3]), anticipate the effect of gasket compression changes on endshake and depthing.

Customer communication

When a watch bears both a “chronometer” claim and an “Excellence” claim, explain that the former refers to the movement’s demonstrated performance under COSC’s classic regime [1][2], while the latter—per COSC’s description—addresses the performance of the assembled watch [3]. Set expectations accordingly. If a finished watch fails your bench spot-checks, your diagnosis should prioritize assembly interactions rather than pure escapement tuning.

What to carry to the bench

- Caseback torque tools with calibrated settings
- Micrometer or feeler gauges adapted for hand clearance checks; microscope with oblique lighting
- Rotor endshake gauges and a stethoscope-style listening tube for rotor rub diagnostics
- Anti-magnetic work mat and storage for tested components between demagnetization and casing
- Gasket sizing kit and silicone greases appropriate to the case specification
- A casing “checklist card” that you sign only after completing clearances, magnetism, and torque checks


## Chapter 15 — Observatory Trials: The Ancestry of Modern Testing

Before wrist-chronometer standards were harmonized, national observatories conducted timekeeping competitions and trials that shaped the discipline. The motivator was the same as Harrison’s century earlier: to separate claim from proof in demanding, public conditions [4].

What we can say with confidence

- The lineage of chronometer testing is tied to navigational and scientific needs. Harrison’s timekeepers demonstrated the feasibility of high-precision portable timekeeping under varying conditions, setting a precedent for independent evaluation [4].
- By the late 19th and early 20th centuries, observatories in Europe ran formal timekeeping trials that influenced watchmaking by rewarding performance across defined conditions rather than a single favorable reading. Venue-specific procedures, scoring systems, dates, and participating makers vary by trial and are not summarized here without dedicated archival sourcing.

What mattered in those trials, and still matters

- Duration: Trials ran long enough to expose creeping errors and the effects of wear-in. Modern regimes like COSC’s 15-day program continue that philosophy [1][2].
- Positions and temperature: Variations in orientation and thermal exposure were core to the exercise. ISO 3159 preserves these as essential dimensions in wrist-chronometer testing [5].
- Statistical thinking: Scores combined multiple figures of merit—average daily rate, variation, largest difference—anticipating the multi-parameter acceptance logic found in modern standards.

The practical lesson is not historical romance; it is method. Independent, time-extended, condition-varied evaluation tends to produce repeatable quality because it detects the kinds of problems that a quick check will miss. If you aspire to observatory-grade work at the bench, your discipline must be to test beyond your own convenience.

Bringing observatory discipline to the bench

- Go long: When diagnosing a stubborn case, run your own “mini-trial”: 10–14 days of logging at set positions, changing only one variable at a time. You will see patterns that a one-day check conceals.
- Alternate and recover: Include exercises where you shift positions at known intervals and check “resumption” of the prior rate. This is where pallet oiling, guard pin clearance, and shock control often betray themselves.
- Respect temperature: Even a simple warm/cool cycling over days will expose maverick thermal behavior. Do not attribute such drift to “regulator position” reflexively; think about collet setting, terminal curve shaping, and material choice.
- Blind yourself: Mask the brand and your expectations; log first, interpret later. Observatory juries did not care what crest was on a balance cock; neither should your timing log.

Comparison table: test and certification regimes

The table below summarizes the regimes discussed, emphasizing what is publicly attested in the provided sources and marking review-needed items clearly. Figures not supported by the provided sources are labeled accordingly.

| Program / Standard | Who runs it | Object under test | Duration | Positions | Temperatures | Rate acceptance (avg daily) | Notable other stresses | Notes |
|---|---|---|---|---|---|---|---|---|
| ISO 3159 (wrist-chronometers with sprung balance) [5] | International Organization for Standardization | Defines framework and metrics for wrist-chronometer testing | Not a lab program; specifies methods | Includes multiple positions | Includes multiple temperatures | Standard defines criteria for acceptance; see ISO 3159 [5] | N/A | Cite as the standard; do not invent clauses or figures beyond public abstracts [5] |
| COSC Chronometer (Swiss) [1][2] | COSC | Uncased movement | 15 days | 5 positions | 3 temperatures | -4 to +6 s/d (wristwatch movements) | Statistical criteria applied to rate variation, positional spread, temperature effect; see COSC | Publicly described by COSC; movement-only [1][2] |
| COSC Excellence Chronometer [3] | COSC | Finished, cased watch | Traditional 15-day movement stage plus five additional days for the finished-watch stage | Semi-dynamic finished-watch evaluation includes simulated wear | 200-gauss magnetic check in the finished-watch stage | -2 to +4 s/day in the finished-watch stage | Declared power-reserve verification and additional finished-watch evaluation | Additional COSC certification layer introduced during 2026; verify the current COSC publication for availability and exact submission status. |
| METAS Master Chronometer | METAS with participating manufacturers | Finished, cased watch; movement must also satisfy ISO 3159:2009 criteria | Multi-cycle program; consult METAS-N001 for exact sequence | Six positions are used for instantaneous-rate measurements | 1.5 T / 15,000 G magnetic exposure | 0 to +5, +6, or +7 s/day depending on category | Magnetic non-stop criteria, power reserve, positional behavior, and water-resistance requirements | Third-party metrology certification; consult the applicable current METAS requirements document for exact calculations. |
| Rolex “Superlative Chronometer” | Rolex | Finished watch | Proprietary | Proprietary | Magnetism is one of the current seven pillars | -2 to +2 s/day stated for the finished watch after casing | 2026 adds magnetism, reliability, and sustainability to precision, waterproofness, self-winding, and autonomy | Proprietary manufacturer certification; do not present it as ISO/COSC. |
| Jaeger-LeCoultre “1000 Hours” | Jaeger-LeCoultre | Finished watch | Up to six weeks | Proprietary | Temperature and environmental checks | Proprietary criteria | Checks positions, power reserve, temperature, movement, and water resistance | Proprietary quality-control program; do not reduce it to a single tolerance number. |
| Historical observatory trials | National observatories and testing institutions | Varies by trial | Varies by trial | Multiple | Where specified, multiple | Multi-parameter scoring | Procedures varied by institution and period | General lineage retained; venue-specific claims require dedicated archival sources. |

What to carry to the bench

- A laminated copy of your comparison matrix, with boxes checked for what you actually verified in-house for a given job
- Contact list for local certified labs (magnetism, water resistance) if you need to outsource one step of a claimed regime
- Clear labeling supplies: after a long test series, you will want precise tags for which watch was in which position when
- A “position wheel” cheat card for clients, explaining positional effects and what is and isn’t covered by given certifications
- A bin for “known magnetized” test pieces to check your demagnetizer and handling discipline before touching a client watch


Review before publication

The following claims in this section require practitioner or primary-source verification before final publication. They are included here to orient bench practice and comparisons but are not supported by the provided source packet:

- Any specific numerical tolerances, durations, positions, or test steps for METAS Master Chronometer, including the frequently cited 0/+5 s/d target and resistance to approximately 15,000 gauss. Marked as industry-described; confirm from METAS and manufacturer primary publications.
- Any specific numerical tolerances, durations, or methods for Rolex “Superlative Chronometer,” including the commonly cited -2/+2 s/d claim. Confirm from Rolex primary sources.
- Any specific durations, positions, or conditions for Jaeger-LeCoultre “1000 Hours” testing. Confirm from JLC primary sources.
- Any dates, numerical tolerances, durations, or environmental exposures associated with COSC’s “Excellence Chronometer” beyond the scope distinction between movement certification and finished-watch evaluation stated on COSC’s official page [3]. The “2026” mention requires direct confirmation from COSC.
- Specific venues, procedures, scoring methods, and object-under-test details for historical observatory trials (e.g., Kew, Neuchâtel). Confirm from primary historical documentation or authoritative horological histories [9].
- Any amplitude thresholds or target numbers that might have been implied by general bench discussion; no amplitude numbers are stated in this part, but ensure future drafts avoid unsourced numeric targets.

Supported claims in this section include:

- COSC’s testing framework for wristwatch movements: 15 days, five positions, three temperatures, and the -4/+6 s/d acceptance range for average daily rate [1][2].
- COSC’s movement-only scope for classic certification [2].
- ISO 3159’s role as the standard for wrist-chronometers with sprung-balance oscillators [5].
- COSC’s published distinction between traditional movement certification and the “Excellence Chronometer” program for finished watches [3].
- Harrison’s role and the historical need for independent testing in the development of reliable portable timekeepers [4].

References: [1] COSC, COSC certifications; [2] COSC, FAQ; [3] COSC, Excellence Chronometer Certified; [4] Royal Museums Greenwich, Harrison’s timekeepers; [5] ISO 3159; [6] George Daniels, Watchmaking; [7] Donald de Carle, Practical Watch Repair; [8] F. J. Britten, The Watch & Clock Maker’s Handbook, Dictionary and Guide; [9] Derek Pratt / horological technical literature (for review-needed context).

# Part V — Practice: At the Bench

A movement is not repaired by enthusiasm. It is repaired by observation, cleanliness, controlled force, and a willingness to stop when the evidence is insufficient. The procedures in this part are illustrative practitioner guidance, not universal service specifications; movement-specific tolerances, oils, tools, safety procedures, and adjustment methods must come from the applicable manufacturer documentation and qualified training. The procedures in this part are illustrative practitioner guidance, not universal service specifications; movement-specific tolerances, oils, tools, safety procedures, and adjustment methods must come from the applicable manufacturer documentation and qualified training. The procedures in this part are illustrative practitioner guidance, not universal service specifications; movement-specific tolerances, oils, tools, safety procedures, and adjustment methods must come from the applicable manufacturer documentation and qualified training. The bench is where the abstractions of the previous Parts meet metal that has been worn, magnetized, bent, dried, polished, or altered by another person. The watchmaker’s task is not merely to make the hands move. It is to restore a stable relationship between power, transmission, regulation, and the conditions in which the watch is expected to operate.

## Chapter 16 — Tools and Workspace

A watchmaker’s bench is a small laboratory organized around the prevention of avoidable error. The work is miniature, but the governing habits are large: isolate variables, keep surfaces clean, use the correct instrument, and record what was done. A movement does not know whether a contaminant arrived from a careless finger, a dirty pegwood, or a badly closed oil cup. It only responds to the contaminant.

The core toolset begins with illumination, magnification, and support. A stable bench light should reveal surfaces without creating a glare that hides scratches or oil spread. Magnification may come from a loupe, microscope, or both. The loupe is quick and mobile; the microscope gives a more repeatable view when examining pivots, banking surfaces, jewel holes, and the edge of a pallet stone. Movement holders and case cushions are not accessories. They establish a safe geometry in which the movement can be turned without loading a bridge or dragging a screw across a plate.

Screwdrivers must be sharp, correctly sized, and free of burrs. A blade that is too narrow concentrates force at the edge of a slot. A blade that is too wide can mark the bridge or slip into the plate. Tweezers should be selected for the material and task: fine steel for many metallic components, antimagnetic tools where appropriate, and specialized forms for hairsprings, hands, and delicate springs. The best tweezer is not the most pointed one. It is the one whose points meet predictably and whose operator can feel the part without crushing it.

Other instruments establish a chain of control. A demagnetizer, cleaning equipment, dust blower, pegwood, pithwood, oilers, staking and jeweling tools, files, stones, measuring tools, and a timing instrument each answer a different question. A timing machine does not tell the watchmaker why a watch is gaining. It displays the rate behavior of the oscillator as sampled by the instrument. The cause still has to be found in the movement.

Cleanliness is a design requirement. Dust in a jewel can alter friction; a fiber under a bridge can create vertical pressure; excess lubricant can migrate; and a fingerprint can become a film that changes how a surface wets with oil. Clean hands are not enough. The bench, trays, tools, holders, covers, and air around the work must be managed. Components should have a place before they are removed. Parts trays should distinguish the order of disassembly, not merely provide a container.

A disciplined workspace separates dirty and clean operations. Case work, old lubricant, and abrasive operations should not share the same immediate surface as final assembly. Covers should be used whenever the movement is left unattended. A watchmaker should be able to answer, at any moment, where the pallet fork, escape wheel, balance, and their associated screws are located. Lost time searching for a screw is inconvenient; lost certainty about whether a screw was replaced is a quality problem.

> **Bench principle:** The smaller the part, the larger the consequence of an uncontrolled variable.

### What to carry to the bench

Build the workspace around visibility, repeatability, and contamination control. Choose tools for fit and feedback rather than prestige. Treat every cleaning, lubrication, and storage decision as part of the timing system, because it is part of the timing system.

## Chapter 17 — Service Cycles

A full service is a controlled return from an unknown state to a documented operating state. It is not a ritual performed because a calendar says so. The appropriate interval depends on construction, use, environment, lubrication, sealing, shock exposure, and the owner’s tolerance for risk. Lubricants change with time and temperature; oils can migrate or evaporate; greases can separate; surfaces wear; and contamination can transform a smooth contact into an abrasive one. Daniels and de Carle both treat inspection and cleaning as inseparable from repair because a watchmaker cannot judge a surface that is hidden by old residue.[6] [7]

The process begins before opening the watch. The exterior condition, reported symptoms, winding feel, setting action, hand alignment, calendar behavior, and visible damage should be recorded. The rate should be observed in more than one position if the condition of the movement permits. A photograph of the dial, case, movement, and any existing marks creates a record of identity and protects both the owner and the practitioner.

Disassembly should follow a plan. The watchmaker observes before removing. The direction of a screw, the placement of a spring, the height of a washer, and the relationship between a cock and its endshake are evidence. Parts that look interchangeable may not be interchangeable. A service that begins with indiscriminate dismantling discards information that cannot be recovered later.

Cleaning is not a single event. Components are cleaned according to their materials, geometry, and contamination. A plate with a delicate finish does not receive the same treatment as a steel screw. Jewels and cap jewels require particular care because a component may appear clean while a film remains in the hole or beneath a setting. After cleaning, parts are inspected under magnification. Cleaning without inspection is only movement of dirt from one location to another.

Wear must be distinguished from finish. A polished pivot is not made healthier by being polished again. A worn pivot may require replacement, restoration, or a decision to preserve a compromised original. The correct response depends on function, historical importance, availability of a faithful replacement, and the owner’s agreed objective. A service is an engineering decision conducted inside an ethical agreement.

Reassembly restores relationships. Endshake and side-shake are checked rather than assumed. The train should turn freely before the escapement is installed. The escapement is assessed for lock, draw, impulse, banking, and freedom. The balance is protected from unnecessary handling. Lubrication is applied as a controlled quantity at a defined location, with the understanding that more oil is not more service. Oil that spreads is no longer necessarily where it was intended to work.

The first run after assembly is an observation period. The movement may need time to settle, but settling is not a license to ignore a bad signal. A violent beat, unstable amplitude, intermittent stopping, abnormal noise, or unexplained rate change should send the watchmaker back to diagnosis. Timing is the end of a service process, not a substitute for one.

### What to carry to the bench

A service is complete only when the movement is clean, correctly assembled, appropriately lubricated, functionally checked, and documented. Do not confuse elapsed time with completed work. The watch must leave in a known state, with uncertainties stated plainly.

## Chapter 18 — Timing and Regulation in Practice

A timing machine listens to the escapement and converts its acoustic pattern into an estimate of rate, amplitude, and beat error. The display is powerful because it makes behavior visible, but it is not an oracle. It samples a movement under a particular lift angle, position, winding state, temperature, and level of contact with the instrument. If the instrument is configured incorrectly, a beautiful graph can be a precise description of the wrong thing.

Rate is the daily gain or loss inferred from the observed interval. Amplitude is a measure related to the angular swing of the balance, calculated from the timing pattern and the assumed geometry of the escapement. Beat error expresses asymmetry in the timing of the oscillator’s two directional events relative to the escapement’s unlocking and impulse geometry. Collet, roller, stud, fork, and escapement geometry can all contribute. These values are related but not interchangeable. A watch can show an acceptable average rate while amplitude is falling, or an attractive amplitude while positional differences remain large.

The first measurement should be descriptive, not corrective. Record the position, time since winding, rate, amplitude, beat error, lift angle setting, and any unusual sound or trace. Repeatability matters more than one impressive number. If the movement is tested dial-up, dial-down, crown-up, and crown-down, the pattern of change is more informative than any one result. Position reveals gravity’s influence on the balance, pivots, hairspring, and escapement.

Regulation changes the mean rate. It does not automatically correct amplitude loss, positional error, damaged pivots, poor poising, magnetism, hairspring deformation, or incorrect lubrication. The regulator changes the effective active length of the hairspring in many constructions; micro-adjusters alter the relationship with greater control. The correct choice depends on the movement and the condition of its regulating system. Forcing a regulator to compensate for a mechanical defect produces a number, not a repair.

Beat error deserves similar caution. A small displayed value is desirable because it indicates a more symmetrical relationship between the oscillator and the escapement, but adjustment is not a contest to reach zero at any cost. The balance must remain free, the hairspring must remain centered, and the stud, collet, and regulator must not be damaged. On some movements the correct adjustment is delicate and movement-specific. A beginner should learn the geometry under supervision rather than infer a universal method from a screen.

Bench performance and worn performance are different measurements. On the bench, the watch may remain in a small set of positions, at a steady temperature, with a known winding state. On the wrist, motion changes continuously, the mainspring unwinds, temperature varies, and the watch may spend long periods in one orientation. COSC’s conventional movement-level testing and its newer Excellence program illustrate this distinction: a defined laboratory protocol is not the same as an average week of wear, even when both are useful measurements.[1] [2] [3]

A responsible timing report therefore states conditions. It should not say simply “regulated to zero.” It should say how, where, and for how long the result was observed. The reader should be able to understand the limits of the claim.

### What to carry to the bench

Use the timing machine to ask better questions. Record conditions, read patterns, and correct causes before chasing rates. A measurement without context is a decoration; a measurement with context is evidence.

## Chapter 19 — Restoration Ethics

Restoration begins with a question that is more difficult than “Can it be made to run?” The real question is what the object is being asked to become. A family watch, a historically important movement, a rare dial, and a common worn wristwatch may all need different interventions. Function, originality, safety, legibility, and historical information can point in different directions.

Preservation favors the retention of original material and visible evidence. Restoration favors the return of function or appearance. Conservation may accept that a watch remains imperfect because the imperfection is part of its history. These are not moral rankings. They are different objectives, and the owner should understand which objective has been selected before irreversible work begins.

Documentation is the foundation of consent. Record the condition before cleaning, including scratches, replaced parts, case marks, dial damage, hand condition, movement engravings, and any non-original intervention already present. Photograph hidden surfaces when possible. Note what is proposed, what is prohibited, and what may be deferred. If a replacement part is needed, retain the original whenever practical and identify the replacement in the final record.

A restorer should be cautious with refinishing. A case can be made visually younger by removing material, but the removal may erase tool marks, soften geometry, change proportions, and destroy evidence. A dial can be made cleaner by repainting, but the result may become a modern interpretation rather than a restoration. There are cases where replacement is appropriate, particularly when a component is unsafe or functionally destroyed. The ethical requirement is not to avoid every replacement; it is to make the replacement legible.

Faithful recreation is sometimes more honest than pretending that an old part is untouched. A newly made screw, bridge, or spring can return a watch to service while preserving the original damaged part for study. The recreated component should be documented, and its finish should not be used to manufacture false provenance. Restoration earns trust by distinguishing old, repaired, replaced, and remade.

The final report should be understandable to a future owner or conservator. It should state the work performed, the parts replaced, the parts retained, the lubricants or materials used when relevant, the observed timing condition, and any limitations. A watch’s next service will be better if the next watchmaker is not forced to rediscover the present one’s decisions.

### What to carry to the bench

Agree on the objective before touching the object. Preserve evidence, document intervention, and treat originality as a material fact rather than a marketing adjective. A technically successful restoration that misrepresents what was changed is not a complete success.

## Chapter 20 — Getting Into the Trade

Watchmaking is learned through a mixture of explanation, demonstration, repetition, correction, and responsibility. The apprenticeship model persists because small mechanisms punish vague understanding. A student must learn not only what a part is called, but how it feels when correctly handled, how a damaged surface differs from a dirty one, and how to stop before a mistake becomes irreversible.

Formal schools and professional programs can provide sequence, equipment, supervised practice, and a shared vocabulary. Organizations such as WOSTEP, AWCI, and BHI have played important roles in training, standards, and professional community, but program names, entry requirements, locations, and certification structures change. Those details should be checked directly with the organizations before a student makes a financial or career decision. The durable principle is that competent training includes hands-on work under review, not only reading or video.

Self-study can be valuable when it is bounded by humility. Books, old movements, technical drawings, and controlled exercises teach observation. The limit is feedback. A self-taught worker can repeat an error until it feels normal, especially in hairspring work, polishing, oiling, and adjustment. The safest independent path begins with low-consequence practice, uses inexpensive and non-precious movements, documents every intervention, and seeks qualified review before working for others.

The profession also requires habits beyond manipulation. A watchmaker must communicate estimates without false certainty, explain what a service can and cannot establish, keep customer property secure, and protect confidential information. The craft’s reputation is cumulative. One careless statement about water resistance or one undocumented replacement can create a problem long after the movement has left the bench.

A learner should build a portfolio of evidence rather than a collection of claims. Keep photographs of disassembly and reassembly, timing records, notes on failures, and explanations of why a decision was made. The most persuasive portfolio is not a sequence of perfect outcomes. It shows that the practitioner can observe, diagnose, revise, and describe limitations.

There is no single doorway into the trade. Some enter through school, some through restoration, some through service departments, some through independent making, and some through a second career. The common requirement is patience. Mechanical horology rewards the person who can repeat a small correct action without becoming bored and who can remain curious after the first apparent answer.

### What to carry to the bench

Choose a learning path that supplies feedback, not just information. Practice on appropriate material, keep records, and make safety and honesty part of technical skill. A watchmaker is trusted with objects, time, money, and history; training must address all four.


# Part VI — Context & Future

Mechanical horology is often discussed as if it were in competition with every other way of measuring time. That framing is useful only if it is made honest. Mechanical watches are not the most accurate portable clocks. Quartz oscillators are generally more stable for ordinary timekeeping, and atomic references are more stable still. The continuing importance of mechanical horology lies elsewhere: in visible energy, physical causality, repairable craft, historical continuity, and a form of precision that is never separated from the imperfections it manages.

## Chapter 21 — Mechanical, Quartz, and Atomic

A mechanical watch stores energy in a spring, transmits it through wheels, meters it through an escapement, and regulates it with an oscillator. A quartz watch uses an electrically sustained quartz oscillator and divides its frequency into a display signal. An atomic clock disciplines time against a transition in matter whose frequency is far more stable than the mechanical or quartz systems used in ordinary watches. These are different engineering strategies, not different levels of the same product.

Mechanical timekeeping is sensitive to amplitude, position, temperature, magnetism, friction, shock, and manufacturing variation. Quartz removes or reduces several of these sensitivities, though it introduces its own dependencies such as temperature behavior, battery or energy management, and electronic aging. Atomic references are still more stable, but their infrastructure, energy, and purpose are different from the requirements of a wristwatch.

The comparison should not become an apology. Mechanical horology’s value was never simply “most accurate.” Its achievement is that a small, visible, serviceable machine can convert stored energy into a repeated interval with remarkable regularity, despite gravity, friction, changing torque, and the motion of a human body. Certification does not make a mechanical watch equal to an atomic reference. It makes a bounded claim legible: under defined conditions, this object remained within a defined tolerance.

That distinction is why the word “chronometer” matters when it is used correctly. It describes a tested performance category, not an assertion that the watch has escaped physics. A mechanical watch can be chronometer-certified and still gain or lose time in use outside the test conditions. Conversely, a non-certified movement may perform well in one owner’s routine. The certificate adds independent evidence; it does not replace judgment.

### What to carry to the bench

Never defend mechanical timekeeping by denying the performance of quartz or atomic systems. Explain instead what a mechanical watch does, what it cannot do, and how standards make its imperfect precision measurable.

## Chapter 22 — The Independent Watchmaking Movement

Independent watchmaking is less a single style than a working condition. A small maker may design a movement, finish components, assemble watches, and communicate directly with clients. Another may specialize in cases, dials, restoration, or a complication built on an existing ébauche. The common feature is proximity between decisions and consequences. There are fewer organizational layers between the person who chooses a geometry and the person who sees it run.

The independent tradition extends an older craft logic: make fewer objects, make more decisions visible, and accept that the maker’s name is attached to the result. It also exposes constraints that large production can hide. A solo or small-batch maker must manage sourcing, tolerances, serviceability, documentation, customer support, and the economics of low-volume production. Individuality is not a substitute for repeatability.

Independents may use formal certification, private testing, or transparent in-house records. Some pursue external standards because an independent body can strengthen a public claim. Others produce watches whose value lies in finishing, unusual mechanics, or artistic construction rather than a certification label. The honest question is not whether every watch must carry the same badge. It is whether the maker states clearly what was measured, under what conditions, and what remains untested.

The movement also changes the meaning of authorship. A watch may contain outsourced springs, jewels, screws, or a base movement while still reflecting real independent design and finishing. Conversely, a watch may be marketed as independent while relying on opaque industrial supply chains. The practitioner’s eye asks where the meaningful decisions were made and whether the service future has been considered.

Independence is therefore not romantic isolation. It is accountable proximity. The independent maker has an opportunity to publish tolerances, adjustment methods, service guidance, and test results in a way that turns craft into a conversation with the wearer. That opportunity carries a duty not to replace evidence with mystique.

### What to carry to the bench

Judge independence by decisions, documentation, and responsibility rather than by scale alone. Small production can create extraordinary work, but every claim still benefits from measurement and every watch still needs a service future.

## Chapter 23 — Where the Standards Go Next

Standards evolve when the old test remains useful but no longer describes the most important risk. Traditional chronometer testing made position and temperature explicit. Modern testing has added the finished watch, magnetic exposure, power-reserve behavior, and conditions closer to wear. COSC’s 2026 Excellence program is a visible example: after the traditional movement certification stage, finished watches undergo additional evaluation including simulated wear in semi-dynamic positions, a tighter -2/+4 seconds-per-day precision requirement, magnetic-field checks at 200 gauss, and power-reserve verification as described by COSC.[3]

The following are possible future directions proposed by the author; they are not presented as announced policy by standards bodies or manufacturers. The following are possible future directions proposed by the author; they are not presented as announced policy by standards bodies or manufacturers. The following are possible future directions proposed by the author; they are not presented as announced policy by standards bodies or manufacturers. The next generation of standards may become more continuous and more transparent. A watch could be evaluated across a recorded motion profile rather than a small number of static positions. Magnetic exposure might be characterized by field strength, orientation, duration, and rate recovery. Power reserve could be reported not only as elapsed hours but as rate behavior across the discharge curve. Shock testing could distinguish a momentary disturbance from a permanent change in rate.

Data creates an opportunity and a danger. More measurements can reveal more truth, but only if the conditions are defined and the result remains intelligible. A graph with thousands of points is not automatically more useful than a table with five. The practitioner needs to know what was measured, how the instrument was calibrated, what the pass criterion was, and whether the test represents service reality.

A possible future standard could also include maintainability. This is a proposal for discussion, not a current published requirement. A movement that passes a laboratory test but cannot be reasonably serviced, documented, or adjusted creates a different kind of risk. Service access, replacement-part continuity, lubrication guidance, and the availability of technical information could become part of a broader definition of long-term reliability. These are not merely commercial concerns. They determine whether precision survives beyond the first certificate.

The central principle remains unchanged. A standard should not make a claim sound impressive; it should make the claim testable. Harrison’s sea trials, observatory competitions, ISO-based movement testing, magnetic resistance, and semi-dynamic finished-watch evaluation all belong to the same lineage. Each takes a vague word—accurate, reliable, robust—and gives it a procedure.

### What to carry to the bench

Welcome stricter standards when they describe real risks, but ask what each test proves and what it leaves out. The future of chronometry will be strongest when its data becomes more useful without becoming less understandable.

## Conclusion — The Discipline of a Number

A mechanical watch is a negotiation among energy, geometry, friction, temperature, gravity, material, and time. Its performance is never produced by one part alone. The mainspring supplies a changing torque. The train transmits it. The escapement meters it. The balance and hairspring regulate it. The jeweling, surfaces, lubrication, case, and wearing conditions determine how faithfully the design survives contact with the world.

That is why the most valuable word in horology is not “perfect.” It is “measured.” A measured claim can be compared, challenged, improved, and handed to the next practitioner. It allows a student to distinguish a cause from a symptom, a restorer to distinguish original material from replacement, and a wearer to understand what a certificate actually says.

The bench teaches the same lesson as the history. Harrison’s timekeeper mattered because it endured a trial. A chronometer matters because it passes a defined test. A regulation record matters because it states its conditions. A restoration matters because it documents its intervention. In every case, credibility is not a mood. It is a result that another person can examine.

Mechanical horology remains valuable not because it has defeated physics, but because it makes physics visible and gives craft a way to work with it. The escapement is a small machine at the boundary between chaos and regularity. To understand it is to understand both the ambition of precision and the honesty required to claim it.


# Back Matter

## Working Glossary

**Accuracy.** Closeness of an indicated time to a reference time. Accuracy is not the same as repeatability.

**Amplitude.** The angular extent of the balance’s swing, inferred by timing equipment from the escapement’s behavior and the instrument’s assumptions.

**Annual calendar.** A calendar mechanism that accounts for months of different lengths except February; it generally needs correction once each year.

**Antimagnetic.** Designed or constructed to reduce the effect of magnetic fields on operation and rate. The word does not by itself identify a field strength or test protocol.

**Arbor.** A shaft on which a wheel, pinion, barrel, or other component is mounted.

**Balance.** The oscillating wheel that, with its spring, forms the regulating oscillator in a mechanical watch.

**Balance cock.** A bridge or cock that supports one or both balance pivots, depending on construction.

**Balance spring.** The hairspring or spiral spring that supplies the restoring force to the balance.

**Barrel.** The drum and arbor containing the mainspring and delivering power to the train.

**Beat.** One direction of the oscillator’s motion, commonly used in discussions of beat rate and beat error.

**Beat error.** A measure of asymmetry between the two portions of the balance’s oscillation as represented by the escapement’s impulse pattern.

**Beat rate.** The number of oscillatory events per hour, often expressed in vibrations per hour.

**Breguet overcoil.** An elevated terminal curve of a balance spring intended to improve concentric development and reduce certain positional effects.

**Caliber.** A movement design or model designation.

**Center wheel.** The wheel in the going train that commonly carries the minute hand, though layouts vary.

**Chronograph.** A timepiece with a startable, stoppable, and resettable elapsed-time indication. It is not synonymous with chronometer.

**Chronometer.** A high-precision timepiece whose performance has been certified by an authorized or recognized testing body under a defined standard. The exact legal use varies by jurisdiction.

**Co-axial escapement.** An escapement architecture associated with George Daniels and later adopted industrially by Omega, using multiple impulse surfaces arranged to reduce sliding friction at key contacts.

**Complication.** Any mechanism added to the basic display of hours, minutes, and seconds.

**Crown.** The external control used for winding, setting, and sometimes other functions.

**Draw.** The tendency of an escapement’s locking surfaces to keep the pallet against the banking or locking geometry under force.

**Endshake.** Axial freedom of a pivot or arbor between its bearing surfaces.

**Escape wheel.** The toothed wheel that interacts with the pallet fork or equivalent escapement component.

**Escapement.** The mechanism that meters the train’s release of energy and gives impulses to the oscillator.

**Fifth wheel.** A descriptive term for a wheel in a train layout; its exact position depends on the caliber.

**Fusee.** A historically used conical pulley that modifies the transmission of mainspring torque as the spring unwinds.

**Going train.** The sequence of wheels and pinions transmitting power from the barrel toward the escapement.

**Hairspring.** The balance spring of a watch oscillator.

**Isochronism.** The tendency of an oscillator to maintain the same period regardless of amplitude. Real systems approximate it rather than achieve it perfectly.

**Jewel.** A synthetic ruby or other hard bearing material used to reduce friction and wear at selected pivots and contacts.

**Lever escapement.** The dominant modern wristwatch escapement, using a pallet fork and lever to lock and impulse the escape wheel.

**Locking.** The condition in which an escapement tooth is held against a pallet surface and the train is prevented from advancing.

**Mainspring.** The coiled spring that stores energy in a mechanical watch.

**Mean daily rate.** The average measured rate over a specified test period or set of observations.

**Movement.** The complete mechanical mechanism of a watch, usually excluding the case, dial, and hands.

**Oscillator.** A system that repeats a cycle, such as a balance and hairspring.

**Pallet fork.** The lever-shaped escapement component carrying pallet stones and interacting with the escape wheel and impulse pin.

**Perpetual calendar.** A calendar mechanism designed to account for month lengths and leap-year behavior within its programmed limits.

**Pivot.** A reduced cylindrical or conical end of an arbor that runs in a bearing.

**Power reserve.** The expected running duration of a watch from a defined fully wound state until it stops or reaches a specified limit.

**Positional error.** A change in rate or behavior associated with the orientation of the movement.

**Quartz.** A crystalline oscillator used in electronic timekeeping because of its stable resonant frequency.

**Rate.** The speed at which a watch gains or loses time relative to a reference, usually expressed per day.

**Regulator.** A device that alters the effective operating length or balance-spring relationship to change rate.

**Repeater.** A complication that audibly reports time when activated.

**Side-shake.** Lateral freedom of a pivot or arbor within its bearing.

**Stud.** The component securing the outer end of a balance spring.

**Tourbillon.** A rotating carriage carrying the oscillator and escapement, historically intended to average certain positional effects by changing their orientation.

**Train.** A connected series of wheels and pinions transmitting motion or power.

**Vibration.** A half-cycle or other defined oscillatory event, depending on the convention used.

**Winding.** Storing energy in the mainspring through the crown, key, or automatic system.

## Appendix A — Standards at a Glance

The table below is a reader’s orientation, not a substitute for the current governing documents. Private brand programs may change, and certification scope matters as much as the headline number.

| Program | Object commonly tested | Published precision or headline requirement | Conditions emphasized | Important limit or caution |
|---|---|---:|---|---|
| COSC Chronometer | Generally the movement for mechanical watches | -4 to +6 seconds/day | 15 days; five positions; 8°C, 23°C, 38°C; ISO 3159 basis | Movement-level certification does not by itself certify case, water resistance, magnetism, or a particular owner’s wearing result. [1] [2] |
| METAS Master Chronometer | Finished watch, under the program’s defined tests | 0 to +5 seconds/day | Includes magnetic-resistance testing at 15,000 gauss and full-watch evaluation as described by participating brands and METAS materials | Confirm the current METAS documentation and scope for the specific reference before publication or commercial comparison. |
| Rolex Superlative Chronometer | Finished watch under a private brand standard | Commonly published as -2 to +2 seconds/day | Brand-specific testing after casing | Proprietary procedures and current scope should be checked against Rolex’s current technical documentation. |
| JLC 1000 Hours Control | Finished watch and movement through a brand testing program | Brand-defined rather than a single universal public tolerance summary | Extended internal testing, including functions and performance | The program is private; do not reduce it to a single headline number without current documentation. |
| COSC Excellence Chronometer | Finished watch after traditional chronometer certification | -2 to +4 seconds/day after simulated wear | Six semi-dynamic positions over 24 hours; 200-gauss magnetic checks; power-reserve verification; four days or more of additional evaluation | COSC describes this as an additional finished-watch certification built on the 15-day movement test; do not describe it as identical to the historic movement protocol. [3] |

The comparison exposes an important principle. A tighter tolerance is not automatically a complete standard. The object tested, the test duration, the conditions, the measurement method, and the pass/fail rules determine what the result means.

## Bibliography and Reference Notes

[1] COSC. “COSC Certifications.” Official Swiss Chronometer Testing Authority. https://www.cosc.swiss/cosc-certifications

[2] COSC. “FAQ.” Official Swiss Chronometer Testing Authority. https://www.cosc.swiss/cosc-faq

[3] COSC. “Excellence Chronometer Certified.” Official Swiss Chronometer Testing Authority. https://www.cosc.swiss/certified-excellence-chronometer

[4] Royal Museums Greenwich. “Longitude Found: The Story of Harrison’s Timekeepers.” https://www.rmg.co.uk/stories/time/harrisons-clocks-longitude-problem

[5] International Organization for Standardization. ISO 3159, *Timekeeping Instruments — Wrist-chronometers with Spring-balance Oscillator*. Consult the current licensed edition for exact clauses and definitions.

[6] Daniels, George. *Watchmaking*. London: Sotheby’s Publications, 1981.

[7] de Carle, Donald. *Practical Watch Repairing*. Various editions. Consult the edition used for exact pagination and publication data.

[8] Britten, F. J. *The Watch & Clock Maker’s Handbook, Dictionary and Guide*. Various editions.

## Editorial and publication note

This edition is written for public readers while preserving a practitioner’s standard of caution. Standards, brand procedures, training programs, and legal terminology can change. Before commercial release, a qualified horological reviewer should verify every current numerical requirement, inspect the mechanical diagrams, confirm the Harrison chronology against primary historical material, and review the language around certification and regulated terms.

## Index

**accuracy**, definition; Harrison; certification; bench testing

**amplitude**, balance; timing machine; power reserve

**balance**, hairspring; oscillator; poising; positional error; regulation

**beat error**, definition; timing machine; adjustment

**COSC**, baseline certification; Excellence Chronometer; ISO 3159; positions; temperatures; limitations

**chronograph**, definition; complications; distinction from chronometer

**chronometer**, definition; COSC; METAS; observatory trials; public claims

**co-axial escapement**, Daniels; friction; impulse geometry; Omega adoption

**escapement**, detent; lever; verge; cylinder; co-axial; locking; impulse

**fusee**, mainspring torque; historical compensation

**Harrison, John**, H1; H2; H3; H4; Jamaica trial; longitude; prize dispute

**hairspring**, isochronism; materials; thermal compensation; magnetism; regulation

**independent watchmaking**, authorship; testing; serviceability; documentation

**jewels**, bearings; friction; cleaning; lubrication

**longitude**, latitude; Harrison; sea trials; time reference

**magnetism**, silicon; non-ferrous components; METAS; COSC Excellence

**mainspring**, barrel; torque curve; fusee; power reserve

**METAS**, Master Chronometer; 15,000 gauss; full-watch testing; 0/+5 seconds/day

**observatory trials**, history; certification; positional testing

**positional error**, gravity; balance; hairspring; bench reports

**power reserve**, mainspring; service; COSC Excellence

**quartz**, comparison with mechanical; oscillator; accuracy

**regulation**, regulator; beat error; rate; timing machine

**restoration**, originality; documentation; replacement; ethics

**service**, cleaning; inspection; lubrication; wear; documentation

**silicon**, hairspring; magnetism; materials; thermal behavior

**thermal compensation**, temperature; bimetallic balances; COSC

**timing machine**, rate; amplitude; beat error; conditions; limitations

**tourbillon**, positional error; historical purpose; modern interpretation

**train**, barrel; gear ratios; going train; escapement

**watchmaking education**, apprenticeship; WOSTEP; AWCI; BHI; self-study
