# PA Exam Prep, Self Quiz

An interactive, browser-based self-quiz for a Physician Assistant student, built from course slide decks. No install, no login, works on a phone or laptop.

**Live site:** https://actaylo.github.io/pa-quiz/

## What it does

- Quizzes you on Cardiology material drawn straight from the lecture slides.
- Pick a class, one or more lectures, an optional section, and a question type, then choose how many questions.
- Gives immediate feedback on every answer with an explanation of why, plus the source slide so anything can be checked against the deck.
- Lets you flag a question that looks wrong or irrelevant, then export those flags to send back for correction.

## Question types

- Multiple choice
- True / False
- Select all that apply
- Matching
- Clinical vignettes
- Labeling (type the labels on a diagram; accepts abbreviations like RA/LV and minor typos)

## Current content

Class: **Cardiology**

- **Cardiac Auscultation & Heart Murmurs** (52 questions)
- **Dyslipidemia** (54 questions)

You can study one lecture alone or several together to prep for a test that spans multiple lectures.

## How to send feedback on a question

If a question looks wrong, unclear, or irrelevant:

1. Click **Flag this question**, pick a reason, and add a note (for example, "answer should be mitral stenosis").
2. Keep going. At the end, the results screen shows a **Flagged questions** box.
3. Click **Copy to clipboard** and send that text to whoever maintains the quiz.

Each flag includes the source slide, so corrections are quick.

## For the maintainer

**Files**
- `index.html` , the whole app (HTML, CSS, JS, no frameworks).
- `questions.js` , the question bank. Each question is tagged with class, lecture, section, type, source slide, answer, and explanation.
- `images/` , diagram images used by labeling questions.

**Run locally:** double-click `index.html`. It loads `questions.js` via a script tag, so it works straight from the file system, no server needed.

**Update the live site:** edit the files, then from this folder run

```
git add -A
git commit -m "describe the change"
git push
```

GitHub Pages rebuilds automatically in a minute or two.

## Source materials

The original slide-deck PDFs are course material and are **not** included in this repository (they are excluded via `.gitignore`). Questions reference slides by deck and slide number so they can be verified against the source.
