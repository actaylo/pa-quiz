/*
 * PA Quiz - Question Bank
 * Class: Cardiology  |  Lectures: Cardiac Auscultation & Heart Murmurs, Dyslipidemia
 *
 * Fields: id, type, class, lecture, section, source, question, explanation.
 * Type-specific:
 *   mcq / vignette : options[], answer = correct index
 *   tf             : options ["True","False"], answer = 0 (true) or 1 (false)
 *   multi          : options[], answer = array of correct indices (select all)
 *   matching       : pairs[{left,right}] (app shuffles the right column)
 *   labeling       : image + viewBox + covers[] (white boxes over printed labels)
 *                    + markers[{num, bx/by = bubble, tx/ty = target, label, accept[]}]
 */

const QUESTIONS = [
  {
    "id": "cv-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Anatomy",
    "source": "CV Auscultation, slide 9",
    "question": "Which valve separates the left atrium from the left ventricle?",
    "options": [
      "Tricuspid valve",
      "Mitral valve",
      "Aortic valve",
      "Pulmonic valve"
    ],
    "answer": 1,
    "explanation": "The mitral valve sits between the left atrium and left ventricle. The tricuspid separates the right atrium and right ventricle; the aortic and pulmonic are the semilunar outflow valves."
  },
  {
    "id": "cv-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Physiology",
    "source": "CV Auscultation, slides 12-13",
    "question": "The S1 heart sound is produced by closure of which valves?",
    "options": [
      "Aortic and pulmonic",
      "Mitral and tricuspid",
      "Aortic and mitral",
      "Pulmonic and tricuspid"
    ],
    "answer": 1,
    "explanation": "S1 (\"LUB\") marks the start of systole and is produced as the mitral and tricuspid (AV) valves close. S2 is produced by closure of the aortic and pulmonic (semilunar) valves."
  },
  {
    "id": "cv-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Physiology",
    "source": "CV Auscultation, slides 12-13, 23",
    "question": "The S2 heart sound corresponds to which event?",
    "options": [
      "Opening of the mitral and tricuspid valves",
      "Closure of the mitral and tricuspid valves",
      "Closure of the aortic and pulmonic valves",
      "Atrial contraction"
    ],
    "answer": 2,
    "explanation": "S2 (\"DUB\") occurs at the end of systole / start of diastole as the aortic and pulmonic valves close. Its two components are A2 (aortic, louder) and P2 (pulmonic)."
  },
  {
    "id": "cv-004",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Physiology",
    "source": "CV Auscultation, slide 21",
    "question": "During normal sinus rhythm (< 100 beats/min), diastole is longer than systole.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. At normal rates diastole is the longer phase, which helps distinguish S1 from S2. As heart rate rises, diastole shortens and the two phases approach equal duration."
  },
  {
    "id": "cv-005",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slide 20",
    "question": "S1 is best described as the \"DUB\" sound.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. S1 is the \"LUB\" (beginning of systole). S2 is the \"DUB\" (end of systole)."
  },
  {
    "id": "cv-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Auscultation Locations",
    "source": "CV Auscultation, slide 16",
    "question": "Where is the aortic valve area best auscultated?",
    "options": [
      "2nd intercostal space, right sternal border",
      "2nd intercostal space, left sternal border",
      "4th intercostal space, left sternal border",
      "5th intercostal space, midclavicular line"
    ],
    "answer": 0,
    "explanation": "The aortic area is the 2nd right intercostal space at the right sternal border. Pulmonic = 2nd LICS at LSB; tricuspid = 4th LICS at LSB; mitral = 5th LICS at the midclavicular line."
  },
  {
    "id": "cv-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Auscultation Locations",
    "source": "CV Auscultation, slide 16",
    "question": "Erb's point (the second pulmonic area) is located at:",
    "options": [
      "2nd LICS at the left sternal border",
      "3rd LICS at the left sternal border",
      "4th LICS at the left sternal border",
      "5th LICS at the midclavicular line"
    ],
    "answer": 1,
    "explanation": "Erb's point is the 3rd left intercostal space at the left sternal border."
  },
  {
    "id": "cv-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Auscultation Locations",
    "source": "CV Auscultation, slide 16",
    "question": "In an adult, the mitral area (cardiac apex / PMI) is best heard at:",
    "options": [
      "4th LICS medial to the nipple",
      "2nd RICS at the right sternal border",
      "5th LICS at the midclavicular line",
      "3rd LICS at the left sternal border"
    ],
    "answer": 2,
    "explanation": "In adults the mitral area / apex / PMI is the 5th left intercostal space at the midclavicular line. (In children it is the 4th LICS medial to the nipple.)"
  },
  {
    "id": "cv-009",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Auscultation Locations",
    "source": "CV Auscultation, slide 16",
    "question": "Match each valve area to its auscultation location.",
    "pairs": [
      {
        "left": "Aortic",
        "right": "2nd ICS, right sternal border"
      },
      {
        "left": "Pulmonic",
        "right": "2nd ICS, left sternal border"
      },
      {
        "left": "Tricuspid",
        "right": "4th ICS, left sternal border"
      },
      {
        "left": "Mitral",
        "right": "5th ICS, midclavicular line"
      }
    ],
    "explanation": "Aortic = 2nd RSB, Pulmonic = 2nd LSB, Tricuspid = 4th LSB, Mitral = 5th MCL. A common memory aid is APT-M moving down the chest."
  },
  {
    "id": "cv-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slide 20",
    "question": "Which heart sound marks the beginning of systole?",
    "options": [
      "S1",
      "S2",
      "S3",
      "S4"
    ],
    "answer": 0,
    "explanation": "S1 marks the beginning of systole (ventricular contraction) as the mitral and tricuspid valves close."
  },
  {
    "id": "cv-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slide 22",
    "question": "The louder component of S1, best heard at the apex, is:",
    "options": [
      "A2 (aortic closure)",
      "P2 (pulmonic closure)",
      "M1 (mitral closure)",
      "T1 (tricuspid closure)"
    ],
    "answer": 2,
    "explanation": "S1 has two components: M1 (mitral closure, louder, best at the apex) and T1 (tricuspid closure, best at the lower left sternal border). They are usually heard as a single S1."
  },
  {
    "id": "cv-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slide 24",
    "question": "Physiologic splitting of S2 is best appreciated during:",
    "options": [
      "Late expiration",
      "Late inspiration",
      "Valsalva strain",
      "Standing"
    ],
    "answer": 1,
    "explanation": "During late inspiration, A2 and P2 separate because ejection from the right ventricle takes slightly longer, delaying P2. During expiration they are usually heard as a single sound. Listen at the 2nd-3rd LICS."
  },
  {
    "id": "cv-013",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slide 24",
    "question": "During expiration, A2 and P2 are normally heard as a single sound.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Normal (physiologic) splitting appears on inspiration; on expiration A2 and P2 merge into one sound."
  },
  {
    "id": "cv-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slide 26",
    "question": "An S3 heart sound is heard:",
    "options": [
      "Just before S1 (late diastole)",
      "Just after S2 (early diastole)",
      "Between S1 and S2 (systole)",
      "Simultaneously with S1"
    ],
    "answer": 1,
    "explanation": "S3 occurs in early diastole, just after S2, as blood strikes the ventricular walls during early passive filling. S4 is the sound that occurs late in diastole, just before S1."
  },
  {
    "id": "cv-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slide 26",
    "question": "In an adult, an S3 most commonly indicates:",
    "options": [
      "A normal finding requiring no workup",
      "Loss of compliance from volume overload of a dilated ventricle (e.g., heart failure)",
      "A stiff, non-compliant left ventricle from hypertension",
      "Aortic valve stenosis"
    ],
    "answer": 1,
    "explanation": "In adults an S3 suggests a dilated ventricle with volume overload and loss of compliance, classically heart failure. (An S3 can be normal in children.)"
  },
  {
    "id": "cv-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slide 27",
    "question": "An S4 heart sound reflects:",
    "options": [
      "Rapid passive ventricular filling",
      "Blood striking a stiff, non-compliant ventricle during atrial contraction",
      "Closure of the semilunar valves",
      "Opening of the mitral valve"
    ],
    "answer": 1,
    "explanation": "S4 occurs in late diastole when blood strikes the ventricular wall during atrial contraction against increased resistance to filling. It indicates loss of ventricular compliance (a stiffened LV). It can be normal in children and some young adults."
  },
  {
    "id": "cv-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slides 26-27",
    "question": "S3 and S4 gallops are best heard using:",
    "options": [
      "The diaphragm at the aortic area, patient sitting upright",
      "The bell at the mitral area, patient in the left lateral decubitus position",
      "The diaphragm at the apex, patient leaning forward",
      "The bell at the right sternal border, patient supine"
    ],
    "answer": 1,
    "explanation": "S3 and S4 are low-pitched and heard best with the bell at the mitral area with the patient in the left lateral decubitus position."
  },
  {
    "id": "cv-018",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slide 27",
    "question": "An S4 can be a normal finding in children and some young adults.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. An S4 may be normal in children and some young adults; when present in older adults it indicates loss of ventricular compliance."
  },
  {
    "id": "cv-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "S3 & S4",
    "source": "CV Auscultation, slide 28",
    "question": "At faster heart rates, S3 and S4 may merge into a single louder sound called a:",
    "options": [
      "Opening snap",
      "Summation gallop",
      "Ejection click",
      "Pericardial rub"
    ],
    "answer": 1,
    "explanation": "When S3 and S4 combine at faster heart rates, the result is a summation gallop."
  },
  {
    "id": "cv-020",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slides 26-27",
    "question": "The bell of the stethoscope is best for hearing high-pitched sounds.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. The bell is best for low-pitched sounds such as S3 and S4; the diaphragm is best for higher-pitched sounds."
  },
  {
    "id": "cv-021",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 30",
    "question": "Select ALL recognized causes of a heart murmur.",
    "options": [
      "High flow rate through a normal or abnormal orifice",
      "Forward flow through a narrowed (stenotic) valve",
      "Backward flow through a valve that does not fully close",
      "Backward flow through a cardiac defect"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "All four are listed causes: high flow through an orifice, stenosis (forward flow through a narrowed valve), regurgitation/insufficiency (backward flow through an incompetent valve), and flow through a cardiac defect."
  },
  {
    "id": "cv-022",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 31",
    "question": "Select ALL characteristics used to distinguish heart murmurs.",
    "options": [
      "Site (listening location)",
      "Character (shape and quality)",
      "Radiation",
      "Timing (systole or diastole)",
      "Patient's blood type"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Murmurs are described by site, character (shape/quality), radiation, intensity (grade), pitch, timing, and response to maneuvers. Blood type is not a murmur descriptor."
  },
  {
    "id": "cv-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 33",
    "question": "A murmur with the same loudness throughout, such as many holosystolic murmurs, has which shape?",
    "options": [
      "Crescendo",
      "Decrescendo",
      "Crescendo-decrescendo",
      "Plateau"
    ],
    "answer": 3,
    "explanation": "A plateau murmur has uniform loudness throughout and is typically pansystolic/holosystolic (or pandiastolic/holodiastolic). Crescendo gets louder, decrescendo gets softer, crescendo-decrescendo builds then fades."
  },
  {
    "id": "cv-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 36",
    "question": "A murmur that is loud AND has a palpable thrill corresponds to which grade?",
    "options": [
      "Grade I/VI",
      "Grade II/VI",
      "Grade IV/VI",
      "Grade VI/VI"
    ],
    "answer": 2,
    "explanation": "Grade IV/VI is loud with a palpable thrill. Grade V/VI is very loud, heard with the stethoscope partly off the chest; Grade VI/VI is audible with the stethoscope entirely off the chest."
  },
  {
    "id": "cv-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 36",
    "question": "Which murmur grade is described as very loud and audible with the stethoscope completely off the chest?",
    "options": [
      "Grade III/VI",
      "Grade IV/VI",
      "Grade V/VI",
      "Grade VI/VI"
    ],
    "answer": 3,
    "explanation": "Grade VI/VI is heard without the stethoscope on the chest at all. Grade V/VI still needs the edge of the scope on the chest."
  },
  {
    "id": "cv-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 38",
    "question": "Regarding murmur timing, which statement is TRUE?",
    "options": [
      "All systolic murmurs are pathologic",
      "Diastolic murmurs imply cardiac pathology",
      "Diastolic murmurs are usually innocent",
      "Systolic murmurs occur between S2 and S1"
    ],
    "answer": 1,
    "explanation": "Diastolic murmurs (between S2 and S1) imply cardiac pathology. Systolic murmurs (between S1 and S2) can be innocent or pathologic and coincide with the carotid upstroke."
  },
  {
    "id": "cv-027",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slides 30, 38",
    "question": "All systolic murmurs are pathologic.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. Some systolic murmurs are innocent. Diastolic murmurs, however, always imply pathology."
  },
  {
    "id": "cv-028",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slide 39",
    "question": "Inspiration accentuates murmurs originating from which side of the heart?",
    "options": [
      "Left-sided murmurs",
      "Right-sided murmurs",
      "Both equally",
      "Neither"
    ],
    "answer": 1,
    "explanation": "Inspiration increases venous return to the right heart, accentuating right-sided murmurs (Carvallo's sign for tricuspid regurgitation is a classic example)."
  },
  {
    "id": "cv-029",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slides 39, 53",
    "question": "Select ALL maneuvers that ATTENUATE most murmurs but ACCENTUATE hypertrophic obstructive cardiomyopathy (HOCM).",
    "options": [
      "Squatting",
      "Handgrip",
      "Valsalva",
      "Standing"
    ],
    "answer": [
      2,
      3
    ],
    "explanation": "Valsalva and standing both decrease preload (venous return), which softens most murmurs but increases LV outflow obstruction, making HOCM louder. Squatting and handgrip do the opposite: they attenuate HOCM."
  },
  {
    "id": "cv-030",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Murmur Characteristics",
    "source": "CV Auscultation, slides 40, 53",
    "question": "Squatting is useful to differentiate aortic stenosis from HOCM because squatting:",
    "options": [
      "Accentuates both equally",
      "Accentuates aortic stenosis but attenuates HOCM",
      "Attenuates aortic stenosis but accentuates HOCM",
      "Has no effect on either"
    ],
    "answer": 1,
    "explanation": "Squatting increases venous return and afterload, accentuating aortic stenosis. In HOCM the increased LV volume displaces the hypertrophic septum and reduces obstruction, so the HOCM murmur softens."
  },
  {
    "id": "cv-031",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 40",
    "question": "The murmur of aortic stenosis is best characterized as:",
    "options": [
      "Early diastolic, decrescendo, blowing",
      "Systolic, crescendo-decrescendo, radiating to the carotids",
      "Holosystolic, blowing, radiating to the axilla",
      "Mid-diastolic, low-pitched, rumbling"
    ],
    "answer": 1,
    "explanation": "Aortic stenosis is a systolic crescendo-decrescendo murmur at the aortic area (2nd RICS) that radiates to the carotids and may produce a narrow pulse pressure."
  },
  {
    "id": "cv-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 42",
    "question": "The murmur of mitral regurgitation classically radiates to the:",
    "options": [
      "Carotid arteries",
      "Axilla",
      "Epigastrium",
      "Right sternal border"
    ],
    "answer": 1,
    "explanation": "Mitral regurgitation is a high-pitched, blowing, pansystolic (holosystolic) murmur at the apex that radiates to the axilla."
  },
  {
    "id": "cv-033",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 46",
    "question": "Which murmur is mid-diastolic, low-pitched, and rumbling with an opening snap, and is commonly associated with atrial fibrillation?",
    "options": [
      "Aortic regurgitation",
      "Mitral stenosis",
      "Tricuspid regurgitation",
      "Pulmonic stenosis"
    ],
    "answer": 1,
    "explanation": "Mitral stenosis produces a low-pitched, rumbling, mid-diastolic murmur with an opening snap at the apex and is commonly seen with atrial fibrillation."
  },
  {
    "id": "cv-034",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 44",
    "question": "A decrescendo, blowing, early-diastolic murmur at the left sternal border best describes:",
    "options": [
      "Aortic regurgitation",
      "Mitral regurgitation",
      "Aortic stenosis",
      "Tricuspid stenosis"
    ],
    "answer": 0,
    "explanation": "Aortic regurgitation is an early-diastolic, decrescendo, blowing murmur (2nd-4th ICS at LSB). Associated signs include a water hammer pulse, Corrigan's sign, and DeMusset's sign."
  },
  {
    "id": "cv-035",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 44",
    "question": "Select ALL peripheral signs classically associated with aortic regurgitation.",
    "options": [
      "Water hammer pulse",
      "DeMusset's sign (head nodding)",
      "Corrigan's sign (carotid distention/collapse)",
      "Narrow pulse pressure"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Aortic regurgitation produces a wide pulse pressure with a water hammer pulse, DeMusset's sign (head bobbing), and Corrigan's sign. A NARROW pulse pressure is a feature of aortic stenosis, not regurgitation."
  },
  {
    "id": "cv-036",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 43",
    "question": "Carvallo's sign (a murmur that gets louder with inspiration) together with an elevated JVP is most consistent with:",
    "options": [
      "Mitral regurgitation",
      "Aortic stenosis",
      "Tricuspid regurgitation",
      "Mitral valve prolapse"
    ],
    "answer": 2,
    "explanation": "Tricuspid regurgitation is a right-sided, blowing, pansystolic murmur at the 4th LICS that gets louder with inspiration (Carvallo's sign) and is associated with increased JVP."
  },
  {
    "id": "cv-037",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 48",
    "question": "What is the most common valvular disorder, affecting roughly 2-6% of the population?",
    "options": [
      "Aortic stenosis",
      "Mitral valve prolapse",
      "Tricuspid stenosis",
      "Pulmonic regurgitation"
    ],
    "answer": 1,
    "explanation": "Mitral valve prolapse is the most common valvular disorder (about 2-6% of the population, more common in females). A 'floppy' redundant mitral valve prolapses into the left atrium."
  },
  {
    "id": "cv-038",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 48",
    "question": "The classic auscultatory finding of mitral valve prolapse is:",
    "options": [
      "An opening snap in early diastole",
      "A mid-to-late systolic click",
      "A fixed split S2",
      "A continuous machine-like murmur"
    ],
    "answer": 1,
    "explanation": "Mitral valve prolapse produces a mid-to-late systolic click, with or without a high-pitched systolic murmur of mitral regurgitation, best heard at the apex."
  },
  {
    "id": "cv-039",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 49",
    "question": "A pericardial friction rub is best heard how?",
    "options": [
      "With the bell at the apex, patient in left lateral decubitus",
      "With the diaphragm left of the sternum, patient leaning forward",
      "With the bell at the 2nd RICS, patient supine",
      "With the diaphragm at the axilla, patient standing"
    ],
    "answer": 1,
    "explanation": "A pericardial friction rub is high-pitched, scratchy and grating, heard best with the diaphragm just left of the sternum with the patient leaning forward. It has both systolic and diastolic components."
  },
  {
    "id": "cv-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 41",
    "question": "Pulmonic stenosis may produce which specific S2 finding?",
    "options": [
      "A loud single S2",
      "A fixed split S2",
      "An absent S2",
      "An early ejection click that eliminates S2"
    ],
    "answer": 1,
    "explanation": "In pulmonic stenosis, increased resistance to RV outflow prolongs RV ejection and delays P2, which can produce a fixed split S2. The murmur itself is a harsh crescendo-decrescendo systolic murmur at the 2nd-3rd LICS."
  },
  {
    "id": "cv-041",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slides 44-47",
    "question": "Select ALL murmurs that occur during DIASTOLE.",
    "options": [
      "Aortic regurgitation",
      "Aortic stenosis",
      "Mitral stenosis",
      "Mitral regurgitation"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Aortic regurgitation (early diastolic) and mitral stenosis (mid-diastolic) are diastolic murmurs. Aortic stenosis and mitral regurgitation are systolic murmurs."
  },
  {
    "id": "cv-042",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Heart Sounds",
    "source": "CV Auscultation, slides 22, 23, 26, 27",
    "question": "Match each heart sound to its mechanism.",
    "pairs": [
      {
        "left": "S1",
        "right": "Closure of the mitral and tricuspid valves"
      },
      {
        "left": "S2",
        "right": "Closure of the aortic and pulmonic valves"
      },
      {
        "left": "S3",
        "right": "Blood striking ventricular walls during early passive filling"
      },
      {
        "left": "S4",
        "right": "Blood striking the ventricle during atrial contraction"
      }
    ],
    "explanation": "S1 = AV valve closure; S2 = semilunar valve closure; S3 = early passive filling (early diastole); S4 = atrial contraction against a stiff ventricle (late diastole)."
  },
  {
    "id": "cv-043",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slides 40, 42, 44, 46",
    "question": "Match each valve lesion to its murmur description.",
    "pairs": [
      {
        "left": "Aortic stenosis",
        "right": "Systolic, crescendo-decrescendo, radiates to carotids"
      },
      {
        "left": "Mitral regurgitation",
        "right": "Pansystolic, blowing, radiates to axilla"
      },
      {
        "left": "Aortic regurgitation",
        "right": "Early diastolic, decrescendo, blowing"
      },
      {
        "left": "Mitral stenosis",
        "right": "Mid-diastolic, low-pitched, rumbling with opening snap"
      }
    ],
    "explanation": "These four are high-yield: AS (systolic crescendo-decrescendo to the carotids), MR (holosystolic blowing to the axilla), AR (early diastolic decrescendo), MS (mid-diastolic rumble with opening snap)."
  },
  {
    "id": "cv-044",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slides 40, 42, 43, 45",
    "question": "Match each murmur to where it characteristically radiates.",
    "pairs": [
      {
        "left": "Aortic stenosis",
        "right": "Carotid arteries"
      },
      {
        "left": "Mitral regurgitation",
        "right": "Axilla"
      },
      {
        "left": "Tricuspid regurgitation",
        "right": "Epigastrium (occasionally)"
      },
      {
        "left": "Pulmonic regurgitation",
        "right": "Right sternal border"
      }
    ],
    "explanation": "AS radiates to the carotids, MR to the axilla, TR occasionally to the epigastrium, and pulmonic regurgitation toward the right sternal border."
  },
  {
    "id": "cv-045",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "HOCM",
    "source": "CV Auscultation, slide 51",
    "question": "Hypertrophic obstructive cardiomyopathy (HOCM) is inherited in which pattern?",
    "options": [
      "Autosomal recessive",
      "Autosomal dominant",
      "X-linked recessive",
      "Mitochondrial"
    ],
    "answer": 1,
    "explanation": "HOCM is an autosomal dominant disorder involving multiple genes. It causes asymmetric septal hypertrophy with LV outflow obstruction and is a significant cause of sudden cardiac death in young athletes."
  },
  {
    "id": "cv-046",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "HOCM",
    "source": "CV Auscultation, slides 51-52",
    "question": "In young, well-trained athletes with HOCM, sudden cardiac death can be the first symptom.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. HOCM is a significant cause of sudden cardiac death in young athletes, and sudden death is often the first symptom, which is why thorough cardiac exams matter."
  },
  {
    "id": "cv-047",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "HOCM",
    "source": "CV Auscultation, slides 51-53",
    "question": "A 19-year-old college basketball player collapses during practice. On exam he has a systolic murmur that becomes LOUDER when he stands up and softer when he squats. Which diagnosis is most likely?",
    "options": [
      "Aortic stenosis",
      "Mitral valve prolapse",
      "Hypertrophic obstructive cardiomyopathy (HOCM)",
      "Innocent flow murmur"
    ],
    "answer": 2,
    "explanation": "A murmur that intensifies with standing/Valsalva and softens with squatting is the hallmark of HOCM, a leading cause of sudden cardiac death in young athletes. Most other murmurs behave the opposite way."
  },
  {
    "id": "cv-048",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 40",
    "question": "A 74-year-old man has a harsh systolic crescendo-decrescendo murmur best heard at the 2nd right intercostal space, radiating to both carotids, with a narrow pulse pressure. What is the most likely lesion?",
    "options": [
      "Mitral regurgitation",
      "Aortic stenosis",
      "Aortic regurgitation",
      "Tricuspid stenosis"
    ],
    "answer": 1,
    "explanation": "Location (2nd RICS), crescendo-decrescendo shape, radiation to the carotids, and a narrow pulse pressure all point to aortic stenosis."
  },
  {
    "id": "cv-049",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 42",
    "question": "A 60-year-old woman has a high-pitched, blowing, holosystolic murmur best heard at the apex that radiates toward the left axilla. Which lesion fits best?",
    "options": [
      "Aortic stenosis",
      "Mitral stenosis",
      "Mitral regurgitation",
      "Pulmonic stenosis"
    ],
    "answer": 2,
    "explanation": "An apical, blowing, holosystolic murmur radiating to the axilla is classic for mitral regurgitation."
  },
  {
    "id": "cv-050",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 49",
    "question": "A 55-year-old man 5 days after a myocardial infarction has a high-pitched, scratchy, grating sound heard in both systole and diastole, loudest when he leans forward. What is the most likely cause?",
    "options": [
      "Pericardial friction rub",
      "Aortic regurgitation",
      "S3 gallop",
      "Mitral stenosis"
    ],
    "answer": 0,
    "explanation": "A scratchy, grating sound with systolic and diastolic components, loudest with the patient leaning forward and a recent MI, describes a pericardial friction rub (post-MI pericarditis)."
  },
  {
    "id": "cv-051",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Specific Murmurs",
    "source": "CV Auscultation, slide 46",
    "question": "A 68-year-old woman with atrial fibrillation has a low-pitched, rumbling, mid-diastolic murmur at the apex with an opening snap. Which valve lesion is most likely?",
    "options": [
      "Mitral regurgitation",
      "Mitral stenosis",
      "Aortic stenosis",
      "Tricuspid regurgitation"
    ],
    "answer": 1,
    "explanation": "A low-pitched, rumbling, mid-diastolic murmur with an opening snap at the apex, plus atrial fibrillation, is the classic picture of mitral stenosis."
  },
  {
    "id": "cv-052",
    "type": "labeling",
    "class": "Cardiology",
    "lecture": "Cardiac Auscultation & Heart Murmurs",
    "section": "Anatomy",
    "source": "CV Auscultation, slide 8",
    "question": "Label the four chambers of the heart on this cross-section.",
    "image": "images/heart-chambers.jpg",
    "viewBox": "0 0 460 300",
    "covers": [
      {
        "x": 0,
        "y": 80,
        "w": 128,
        "h": 40
      },
      {
        "x": 316,
        "y": 80,
        "w": 144,
        "h": 40
      },
      {
        "x": 0,
        "y": 150,
        "w": 128,
        "h": 30
      },
      {
        "x": 0,
        "y": 200,
        "w": 132,
        "h": 34
      },
      {
        "x": 316,
        "y": 130,
        "w": 144,
        "h": 34
      },
      {
        "x": 316,
        "y": 198,
        "w": 144,
        "h": 36
      },
      {
        "x": 300,
        "y": 284,
        "w": 160,
        "h": 16
      }
    ],
    "markers": [
      {
        "num": 1,
        "bx": 30,
        "by": 168,
        "tx": 180,
        "ty": 172,
        "label": "Right atrium",
        "accept": [
          "right atrium",
          "ra"
        ]
      },
      {
        "num": 2,
        "bx": 30,
        "by": 220,
        "tx": 205,
        "ty": 228,
        "label": "Right ventricle",
        "accept": [
          "right ventricle",
          "rv"
        ]
      },
      {
        "num": 3,
        "bx": 440,
        "by": 150,
        "tx": 255,
        "ty": 150,
        "label": "Left atrium",
        "accept": [
          "left atrium",
          "la"
        ]
      },
      {
        "num": 4,
        "bx": 440,
        "by": 214,
        "tx": 292,
        "ty": 208,
        "label": "Left ventricle",
        "accept": [
          "left ventricle",
          "lv"
        ]
      }
    ],
    "explanation": "The right heart (blue, deoxygenated blood) sits on the patient's right and the left heart on the left. Atria are the upper 'reservoir' chambers; ventricles are the lower 'pump' chambers. The left ventricle has the thickest wall."
  },
  {
    "id": "lp-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 5",
    "question": "Which of the following is NOT a stated role of dietary fats?",
    "options": [
      "Transport of fat-soluble vitamins (A, D, E, K)",
      "Provision of essential fatty acids",
      "Direct transport of water-soluble vitamins",
      "A source for cell membrane manufacture and cell signaling"
    ],
    "answer": 2,
    "explanation": "Fats transport the fat-soluble vitamins A, D, E, and K, provide essential fatty acids, and supply energy for membrane manufacture, cell signaling, and brain function. They are hydrophobic and stored intracellularly as triglyceride."
  },
  {
    "id": "lp-002",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 5",
    "question": "Fats are hydrophobic (insoluble in water) and are stored intracellularly as triglyceride.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Fats are esters of glycerol and fatty acids, are insoluble in water, and are stored inside cells as triglyceride (TG)."
  },
  {
    "id": "lp-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 6",
    "question": "Compared with unsaturated fats, saturated fats are best described as:",
    "options": [
      "Usually liquid at room temperature and may lower CVD risk",
      "Typically solid at room temperature and can raise LDL",
      "Unable to affect LDL levels",
      "The main source of omega-3 fatty acids"
    ],
    "answer": 1,
    "explanation": "Saturated fats have a straight, tightly packed structure, are typically solid at room temperature, and can increase LDL. Unsaturated fats are usually liquid, loosely packed, and may lower CVD risk."
  },
  {
    "id": "lp-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 6",
    "question": "Omega-3 fatty acids most improve which part of the lipid profile?",
    "options": [
      "LDL-C",
      "HDL-C",
      "Triglycerides",
      "Total cholesterol"
    ],
    "answer": 2,
    "explanation": "Omega-3 fatty acids mainly improve triglycerides and also lower inflammation."
  },
  {
    "id": "lp-005",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 8",
    "question": "Only animals synthesize cholesterol, and it is the principal component of animal cell plasma membranes.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Cholesterol is synthesized from fatty acid chains in the liver and other tissues; only animals make it, and it is a principal component of animal cell plasma membranes and of arterial plaques."
  },
  {
    "id": "lp-006",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 9",
    "question": "Match each cholesterol-derived compound to its function.",
    "pairs": [
      {
        "left": "Androgens/estrogens",
        "right": "Mediate sexual characteristics and function"
      },
      {
        "left": "Progestins",
        "right": "Regulate the menstrual cycle"
      },
      {
        "left": "Mineralocorticoids",
        "right": "Regulate renal sodium reabsorption"
      },
      {
        "left": "Bile acids",
        "right": "Emulsify dietary lipids"
      }
    ],
    "explanation": "Cholesterol is the precursor for steroid hormones and bile acids: androgens/estrogens (sexual development), progestins (menstrual cycle), corticosteroids (metabolism), mineralocorticoids (renal sodium reabsorption), and bile acids (emulsify dietary fat)."
  },
  {
    "id": "lp-007",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipid Basics",
    "source": "Dyslipidemia, slide 4",
    "question": "Match each lipid abbreviation to its meaning.",
    "pairs": [
      {
        "left": "TG",
        "right": "Triglyceride"
      },
      {
        "left": "CM",
        "right": "Chylomicron"
      },
      {
        "left": "LDL-C",
        "right": "Low-density lipoprotein cholesterol"
      },
      {
        "left": "ASCVD",
        "right": "Atherosclerotic cardiovascular disease"
      }
    ],
    "explanation": "Key terms: FFA = free fatty acid, TG = triglyceride, CM = chylomicron, VLDL/IDL/LDL/HDL-C = the lipoprotein cholesterol fractions, CHD = coronary heart disease, ASCVD = atherosclerotic cardiovascular disease."
  },
  {
    "id": "lp-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 11",
    "question": "Why are lipoproteins needed to move lipids through the blood?",
    "options": [
      "Lipids are too small to circulate alone",
      "Lipids are water-insoluble and cannot be transported directly in blood",
      "Lipids would be filtered by the kidney",
      "Lipids bind oxygen and must be shielded"
    ],
    "answer": 1,
    "explanation": "Because lipids are water-insoluble, they cannot travel directly in the bloodstream; lipoproteins carry them. A lipoprotein has a neutral lipid core (TG and cholesterol esters) surrounded by a hydrophilic shell of apoproteins, free cholesterol, and phospholipids."
  },
  {
    "id": "lp-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 13",
    "question": "Where are chylomicrons formed, and what do they primarily transport?",
    "options": [
      "Liver; they transport HDL to tissues",
      "Small intestine after a meal; they transport triglycerides, cholesterol, and fat-soluble vitamins",
      "Kidney; they transport free fatty acids only",
      "Adipose tissue; they transport apoproteins"
    ],
    "answer": 1,
    "explanation": "Chylomicrons are large lipoproteins formed in the small intestine after a meal. They carry triglycerides, cholesterol, and fat-soluble vitamins to peripheral tissues (adipose, muscle, liver) for energy or storage."
  },
  {
    "id": "lp-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 15",
    "question": "Which statement about LDL is correct?",
    "options": [
      "LDL removes cholesterol from tissues back to the liver",
      "LDL carries cholesterol to cells and is one of the most atherogenic lipoproteins",
      "LDL is called the 'good' cholesterol",
      "High LDL correlates with lower ASCVD risk"
    ],
    "answer": 1,
    "explanation": "LDL ('bad' cholesterol) carries cholesterol to cells; LDL receptors on peripheral and liver cells clear it from the blood. LDL-C is one of the most atherogenic lipoproteins."
  },
  {
    "id": "lp-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 16",
    "question": "HDL is considered cardioprotective because it:",
    "options": [
      "Delivers cholesterol to arterial walls",
      "Facilitates transfer of cholesterol from atherogenic lipoproteins and tissues to the liver for metabolism",
      "Raises LDL receptor destruction",
      "Increases triglyceride storage"
    ],
    "answer": 1,
    "explanation": "HDL ('good' cholesterol) helps move cholesterol from atherogenic lipoproteins and peripheral tissues to the liver. Low HDL-C correlates with higher ASCVD risk and high HDL-C with lower risk."
  },
  {
    "id": "lp-012",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 16",
    "question": "Data support raising HDL-C pharmacologically to improve cardiovascular outcomes.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. Although high HDL-C correlates with lower ASCVD risk, the data do NOT support raising HDL-C pharmacologically to improve outcomes."
  },
  {
    "id": "lp-013",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Lipoproteins",
    "source": "Dyslipidemia, slide 11",
    "question": "Select ALL components that make up the hydrophilic outer shell of a lipoprotein.",
    "options": [
      "Apoproteins",
      "Free cholesterol",
      "Phospholipids",
      "Triglyceride core"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The shell is made of hydrophilic molecules: apoproteins, free cholesterol, and phospholipids. The triglyceride and cholesterol esters form the neutral core, not the shell."
  },
  {
    "id": "lp-014",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Testing & Screening",
    "source": "Dyslipidemia, slide 18",
    "question": "Select ALL components that most standard lipid panels measure.",
    "options": [
      "Total cholesterol",
      "Triglycerides",
      "LDL-C",
      "HDL-C"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Most lipid panels report total cholesterol, triglycerides, LDL-C, and HDL-C."
  },
  {
    "id": "lp-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Testing & Screening",
    "source": "Dyslipidemia, slide 19",
    "question": "For initial lipid screening, which sample is acceptable?",
    "options": [
      "Fasting only",
      "Non-fasting is acceptable",
      "Only after a 24-hour fast",
      "Post-prandial only"
    ],
    "answer": 1,
    "explanation": "For initial screening, non-fasting samples are acceptable. Fasting is preferred when diagnosing pancreatitis or evaluating premature ASCVD, metabolic syndrome, or hypertriglyceridemia."
  },
  {
    "id": "lp-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Testing & Screening",
    "source": "Dyslipidemia, slide 19",
    "question": "Which situation most favors a FASTING lipid profile?",
    "options": [
      "Routine first-time screening in a healthy adult",
      "Evaluating hypertriglyceridemia or premature ASCVD",
      "A quick screen at a health fair",
      "Checking HDL only"
    ],
    "answer": 1,
    "explanation": "Fasting is preferred for diagnosing pancreatitis or when treating premature ASCVD, metabolic syndrome, or hypertriglyceridemia."
  },
  {
    "id": "lp-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Testing & Screening",
    "source": "Dyslipidemia, slide 42",
    "question": "Per the 2026 AHA/ACC Multisociety guidelines, at what age should screening for high blood cholesterol begin in adults?",
    "options": [
      "Age 20 years or older",
      "Men 35, women 45 only",
      "Age 40 or older",
      "Only after a cardiac event"
    ],
    "answer": 0,
    "explanation": "The 2026 AHA/ACC Multisociety guidelines recommend screening all adults aged 20 years or older. (USPSTF screens men at 35 and women at 45 if at increased risk, and younger adults with risk factors.)"
  },
  {
    "id": "lp-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Testing & Screening",
    "source": "Dyslipidemia, slide 42",
    "question": "The American Academy of Pediatrics recommends screening children for high cholesterol at what age?",
    "options": [
      "3-5 years",
      "9-11 years",
      "14-16 years",
      "Only if symptomatic"
    ],
    "answer": 1,
    "explanation": "The American Academy of Pediatrics recommends screening for high cholesterol between ages 9 and 11."
  },
  {
    "id": "lp-019",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Dyslipidemia Overview",
    "source": "Dyslipidemia, slide 20",
    "question": "Dyslipidemia can include any of the following abnormalities. Select ALL that apply.",
    "options": [
      "Elevated triglycerides",
      "Elevated total cholesterol",
      "Elevated LDL-C",
      "Decreased HDL-C"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dyslipidemia is any lipid abnormality: elevated TG, elevated total cholesterol, elevated LDL-C, and/or decreased HDL-C (any one or a combination)."
  },
  {
    "id": "lp-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Dyslipidemia Overview",
    "source": "Dyslipidemia, slide 24",
    "question": "Approximately what fraction of the population has dyslipidemia?",
    "options": [
      "About 10%",
      "About 25%",
      "Almost 50%",
      "Nearly 90%"
    ],
    "answer": 2,
    "explanation": "Almost 50% of the population has dyslipidemia, and risk increases with age."
  },
  {
    "id": "lp-021",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Dyslipidemia Overview",
    "source": "Dyslipidemia, slide 24",
    "question": "Women tend to have lower LDL levels than men until about age 55 (after menopause).",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Men have lower HDL than women, and women have lower LDL than men until about age 55 (after menopause). Familial hypercholesterolemia has a prevalence of about 1 in 500."
  },
  {
    "id": "lp-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Dyslipidemia Overview",
    "source": "Dyslipidemia, slide 24",
    "question": "What is the approximate prevalence of familial hypercholesterolemia?",
    "options": [
      "1 in 50",
      "1 in 500",
      "1 in 5,000",
      "1 in 50,000"
    ],
    "answer": 1,
    "explanation": "Familial hypercholesterolemia has a prevalence of roughly 1 in 500."
  },
  {
    "id": "lp-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Atherosclerosis",
    "source": "Dyslipidemia, slide 26",
    "question": "In atherogenesis, foam cells are formed when:",
    "options": [
      "HDL delivers cholesterol to the liver",
      "Arterial-wall macrophages become engorged with cholesterol from LDL",
      "Chylomicrons enter the intestine",
      "LDL receptors clear all circulating LDL"
    ],
    "answer": 1,
    "explanation": "LDL not taken up by LDL receptors is scavenged by arterial-wall macrophages. These macrophages become engorged with LDL-derived cholesterol, forming foam cells, a key component of atherogenic plaques."
  },
  {
    "id": "lp-024",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Atherosclerosis",
    "source": "Dyslipidemia, slide 26",
    "question": "Oxidized LDL can form toxic intermediates that cause inflammation in the arterial wall.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. LDL can be oxidized into toxic intermediates that drive inflammation, contributing to plaque formation."
  },
  {
    "id": "lp-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Atherosclerosis",
    "source": "Dyslipidemia, slide 26",
    "question": "Occlusive plaques that cause ASCVD events such as CHD or stroke are often the result of:",
    "options": [
      "Simple gradual narrowing without any acute change",
      "Plaque rupture compounded by thrombosis",
      "Excess HDL deposition",
      "Vitamin deficiency"
    ],
    "answer": 1,
    "explanation": "Occlusive plaques are often the result of rupture compounded by thrombosis, producing ASCVD events such as coronary heart disease or stroke."
  },
  {
    "id": "lp-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Atherosclerosis",
    "source": "Dyslipidemia, slide 15",
    "question": "LDL that is NOT cleared by LDL receptors is instead taken up by:",
    "options": [
      "Scavenger macrophages on the arterial wall",
      "Red blood cells",
      "Chylomicrons",
      "Bile acids"
    ],
    "answer": 0,
    "explanation": "LDL not cleared by hepatic or peripheral LDL receptors is taken up by scavenger macrophages on the arterial wall, a first step toward foam-cell and plaque formation."
  },
  {
    "id": "lp-027",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 32",
    "question": "Select ALL of the listed risk factors for ASCVD.",
    "options": [
      "Hypertension",
      "Diabetes",
      "Cigarette smoking",
      "Sedentary lifestyle"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Listed ASCVD risk factors include age, hypertension, dyslipidemia, diabetes, diet, cigarette smoking, overweight/obesity, sedentary lifestyle, and stress/depression."
  },
  {
    "id": "lp-028",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 34",
    "question": "The most common primary hyperlipoproteinemia, familial hypercholesterolemia, is characterized by:",
    "options": [
      "Low LDL-C due to receptor overactivity",
      "An LDL-receptor defect with very high LDL-C, autosomal co-dominant inheritance",
      "A deficiency of triglycerides",
      "No relationship to family history"
    ],
    "answer": 1,
    "explanation": "Familial hypercholesterolemia is autosomal co-dominant (about 1/500), caused by an LDL-receptor defect producing very high LDL-C (and TG). Suspect it with a family history of premature ASCVD."
  },
  {
    "id": "lp-029",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 33",
    "question": "Which is an example of a PRIMARY cause of dyslipidemia?",
    "options": [
      "Hypothyroidism",
      "Genetic overproduction of LDL apolipoproteins",
      "Thiazide diuretic use",
      "Nephrotic syndrome"
    ],
    "answer": 1,
    "explanation": "Primary dyslipidemia is genetic: overproduction of lipids or beta-apolipoproteins (LDL) or underproduction of alpha-apolipoproteins (HDL). Secondary causes include diet and metabolic/hormonal conditions."
  },
  {
    "id": "lp-030",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 39",
    "question": "Select ALL listed SECONDARY causes of hyperlipidemia.",
    "options": [
      "Hypothyroidism",
      "Nephrotic syndrome",
      "Cholestasis",
      "Thiazide diuretics"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Listed secondary causes: hypothyroidism, nephrotic syndrome, cholestasis, acute intermittent porphyria, and medications such as glucocorticoids, anabolic steroids, thiazide diuretics, and amiodarone."
  },
  {
    "id": "lp-031",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 56",
    "question": "Select ALL of the following that are listed ASCVD risk enhancers.",
    "options": [
      "Premature ASCVD in a parent or sibling",
      "Chronic inflammatory disease (e.g., lupus, RA)",
      "Lp(a) ≥125 nmol/L or ≥50 mg/dL",
      "hsCRP ≥2 mg/L on more than one occasion"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Risk enhancers include premature family ASCVD, higher-risk ancestry, high polygenic risk, chronic inflammatory disease, elevated Lp(a), elevated hsCRP, persistently high TG, CKM syndrome, persistently high LDL-C/apoB, and reproductive risk markers."
  },
  {
    "id": "lp-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Causes & Risk Factors",
    "source": "Dyslipidemia, slide 41",
    "question": "'Premature' or early cardiac disease in the family history is generally defined as onset in:",
    "options": [
      "Men <55 and women <65",
      "Men <65 and women <55",
      "Anyone over age 70",
      "Men <45 and women <35"
    ],
    "answer": 0,
    "explanation": "Premature/early cardiac disease is defined as men younger than 55 and women younger than 65. A general clinical approach inquires about this family history, assesses ASCVD risk, and performs a complete CV exam."
  },
  {
    "id": "lp-033",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Clinical Signs",
    "source": "Dyslipidemia, slides 36-37",
    "question": "Match each cutaneous sign of dyslipidemia to its description.",
    "pairs": [
      {
        "left": "Xanthoma",
        "right": "Cholesterol deposit in skin/tendons"
      },
      {
        "left": "Xanthelasma",
        "right": "Yellow cholesterol plaque on the eyelids"
      },
      {
        "left": "Arcus senilis (<40 y)",
        "right": "Corneal ring that can signal elevated cholesterol"
      }
    ],
    "explanation": "Cutaneous manifestations of dyslipidemia include xanthomas and xanthelasma. Arcus senilis in people under 40 can be a sign of elevated cholesterol."
  },
  {
    "id": "lp-034",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Clinical Signs",
    "source": "Dyslipidemia, slide 37",
    "question": "Arcus senilis is most concerning as a marker of elevated cholesterol when it appears in a patient who is:",
    "options": [
      "Over 70 years old",
      "Under 40 years old",
      "Any age, equally",
      "Only in children"
    ],
    "answer": 1,
    "explanation": "Arcus senilis is common with aging, but when it appears in people under 40 it can be a sign of elevated cholesterol."
  },
  {
    "id": "lp-035",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Clinical Signs",
    "source": "Dyslipidemia, slide 34",
    "question": "A finding of xanthomas plus a strong family history of premature heart disease should raise suspicion for:",
    "options": [
      "Secondary hyperlipidemia from diet",
      "Familial hypercholesterolemia",
      "Normal aging",
      "Hypothyroidism alone"
    ],
    "answer": 1,
    "explanation": "Very high LDL-C with cutaneous xanthomas and a family history of premature ASCVD suggests familial hypercholesterolemia, an LDL-receptor defect."
  },
  {
    "id": "lp-036",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slides 45, 68",
    "question": "The new PREVENT-CVD calculator includes which of the following inputs? Select ALL that apply.",
    "options": [
      "A1c",
      "eGFR",
      "Zip code and BMI",
      "Race"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The PREVENT calculator includes A1c, eGFR, zip code, and BMI but does NOT include race. It was created because the older ASCVD calculator overestimated risk."
  },
  {
    "id": "lp-037",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slide 45",
    "question": "Unlike the older ASCVD risk calculator, the PREVENT calculator does not include race.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. The PREVENT calculator drops race and instead uses A1c, eGFR, zip code, and BMI. The prior ASCVD calculator tended to overestimate risk."
  },
  {
    "id": "lp-038",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slide 48",
    "question": "Match each PREVENT-ASCVD 10-year risk category (ages 30-79) to its percentage range.",
    "pairs": [
      {
        "left": "Low",
        "right": "<3%"
      },
      {
        "left": "Borderline",
        "right": "3% to <5%"
      },
      {
        "left": "Intermediate",
        "right": "5% to <10%"
      },
      {
        "left": "High",
        "right": "≥10%"
      }
    ],
    "explanation": "PREVENT-ASCVD 10-year categories for ages 30-79: low (<3%), borderline (3 to <5%), intermediate (5 to <10%), and high (≥10%)."
  },
  {
    "id": "lp-039",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slide 48",
    "question": "A PREVENT-ASCVD 10-year risk of 7% falls into which category?",
    "options": [
      "Low",
      "Borderline",
      "Intermediate",
      "High"
    ],
    "answer": 2,
    "explanation": "A 10-year risk of 5% to <10% is intermediate. Low is <3%, borderline is 3 to <5%, and high is ≥10%."
  },
  {
    "id": "lp-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slide 55",
    "question": "In patients found to have borderline or intermediate 10-year risk, the guideline says to next:",
    "options": [
      "Automatically start a high-intensity statin",
      "Look at risk enhancers",
      "Stop screening",
      "Order coronary bypass"
    ],
    "answer": 1,
    "explanation": "For adults with borderline or intermediate risk, evaluate risk enhancers to refine the decision about lipid-lowering therapy."
  },
  {
    "id": "lp-041",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slide 66",
    "question": "According to the coronary artery calcium (CAC) guidance, a CAC score of zero in an intermediate-risk patient means it is reasonable to:",
    "options": [
      "Immediately start a high-intensity statin",
      "Withhold statin and reassess in 5-10 years",
      "Order urgent catheterization",
      "Never screen again"
    ],
    "answer": 1,
    "explanation": "A CAC of zero: reasonable to withhold statin and reassess in 5-10 years. CAC 1-99: start a statin in patients ≥55 years. CAC ≥100: start statin therapy."
  },
  {
    "id": "lp-042",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 54",
    "question": "Match each therapy to its approximate LDL reduction.",
    "pairs": [
      {
        "left": "Lifestyle changes",
        "right": "10%-15% reduction"
      },
      {
        "left": "Moderate-intensity statin",
        "right": "30%-49% reduction"
      },
      {
        "left": "High-intensity statin",
        "right": ">50% reduction"
      },
      {
        "left": "Adding ezetimibe/bile sequestrant",
        "right": "Extra 15%-20% reduction"
      }
    ],
    "explanation": "LDL outcomes: lifestyle 10-15%, low-intensity statin <30%, moderate-intensity 30-49%, high-intensity >50%, and adding a bile-sequestering agent or ezetimibe gives an additional 15-20%."
  },
  {
    "id": "lp-043",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 53",
    "question": "Which lifestyle target is recommended as a cornerstone of dyslipidemia prevention and management?",
    "options": [
      "BMI goal of 30-35",
      "No exercise needed if diet is good",
      "Regular aerobic exercise ~40 min, moderate-to-intense, 3-4 times per week",
      "A diet high in red meat and sugar-sweetened beverages"
    ],
    "answer": 2,
    "explanation": "Lifestyle is the cornerstone: a diet high in fruits, vegetables, and lean protein (fish) and low in sweets/sugar-sweetened beverages/red meat, a goal BMI of 20-25, and regular aerobic exercise (~40 min moderate-to-intense, 3-4 times/week)."
  },
  {
    "id": "lp-044",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 65",
    "question": "In a patient with severe primary hypercholesterolemia (LDL-C ≥190 mg/dL), the recommendation is to:",
    "options": [
      "Do a full risk assessment before any therapy",
      "Start a high-intensity statin with no risk assessment needed",
      "Use lifestyle changes only",
      "Start ezetimibe as first-line monotherapy"
    ],
    "answer": 1,
    "explanation": "For severe primary hypercholesterolemia (LDL ≥190), no risk assessment is needed: use a high-intensity statin."
  },
  {
    "id": "lp-045",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 65",
    "question": "For a 55-year-old patient with diabetes (age 40-75), regardless of their 10-year ASCVD risk, the recommendation is:",
    "options": [
      "No statin unless risk is high",
      "A moderate-intensity statin",
      "A bile acid sequestrant only",
      "PCSK9 inhibitor first-line"
    ],
    "answer": 1,
    "explanation": "In patients with diabetes aged 40-75, a moderate-intensity statin is recommended regardless of the 10-year ASCVD risk."
  },
  {
    "id": "lp-046",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 64",
    "question": "For secondary ASCVD prevention in a patient at 'not very high risk,' the goal is to reduce LDL-C by at least 50% using a high-intensity statin, targeting an LDL below:",
    "options": [
      "100 mg/dL",
      "70 mg/dL",
      "55 mg/dL",
      "130 mg/dL"
    ],
    "answer": 1,
    "explanation": "For secondary prevention at 'not very high risk,' reduce LDL-C by ≥50% with a high-intensity statin, goal <70 mg/dL. Very-high-risk patients use a threshold of 50 mg/dL."
  },
  {
    "id": "lp-047",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 64",
    "question": "In a very-high-risk secondary-prevention patient whose LDL remains above 50 mg/dL on a maximally tolerated statin, the next step is to:",
    "options": [
      "Stop the statin",
      "Add ezetimibe, then a PCSK9 inhibitor if needed",
      "Switch to lifestyle only",
      "Add a thiazide diuretic"
    ],
    "answer": 1,
    "explanation": "In very-high-risk patients using an LDL threshold of 50 mg/dL, if LDL is still >50 on a statin, add ezetimibe and then a PCSK9 inhibitor. PCSK9 inhibitors are monoclonal antibodies that prevent LDL-receptor destruction."
  },
  {
    "id": "lp-048",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 68",
    "question": "Ezetimibe and PCSK9 inhibitors should be used as primary prevention in patients with no history of ASCVD.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. Added medications like ezetimibe and PCSK9 inhibitors can help ASCVD patients reach goal, but should NOT be used as primary prevention in patients with no ASCVD history."
  },
  {
    "id": "lp-049",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 64",
    "question": "How do PCSK9 inhibitors lower LDL-C?",
    "options": [
      "They block cholesterol absorption in the gut",
      "They are monoclonal antibodies that prevent LDL-receptor destruction",
      "They dissolve existing plaques",
      "They increase triglyceride storage"
    ],
    "answer": 1,
    "explanation": "PCSK9 inhibitors are monoclonal antibodies that bind the PCSK9 receptor, preventing LDL-receptor destruction so more LDL is cleared from the blood."
  },
  {
    "id": "lp-050",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Treatment & Prevention",
    "source": "Dyslipidemia, slide 43",
    "question": "The 2026 AHA/ACC guideline framework for managing blood cholesterol includes which elements? Select ALL that apply.",
    "options": [
      "Lifestyle modification of risk factors",
      "Primary prevention in high-risk conditions",
      "Secondary prevention in patients with ASCVD",
      "Using the PREVENT equation to calculate ASCVD risk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "The guideline framework: (1) lifestyle modification (smoking, sedentary lifestyle, obesity, diet), (2) primary prevention in high-risk conditions, (3) secondary prevention in ASCVD patients, and (4) use the PREVENT equation to calculate risk."
  },
  {
    "id": "lp-051",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Statins",
    "source": "Dyslipidemia, slide 63",
    "question": "Select ALL characteristics associated with increased risk of statin-attributed muscle symptoms.",
    "options": [
      "Age ≥65 years",
      "Female sex",
      "Hypothyroidism",
      "High-dose statin therapy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Increased-risk characteristics include age ≥65, low BMI, female sex, obesity, hypothyroidism, diabetes, chronic liver or kidney disease, alcohol use, vigorous exercise, high-dose statin therapy, myalgia-associated diseases, and gene variants (e.g., SLCO1B1)."
  },
  {
    "id": "lp-052",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Statins",
    "source": "Dyslipidemia, slide 63",
    "question": "Higher statin potency, rather than higher dose, is what drives the increased risk of statin-attributed muscle symptoms.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. The increased risk is associated with higher DOSES within the approved range, not with statin potency. Higher-potency statins do not carry higher muscle-symptom risk; high doses do."
  },
  {
    "id": "lp-053",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Statins",
    "source": "Dyslipidemia, slides 44, 52-53",
    "question": "A 61-year-old woman (BMI 29, BP 130/80 on medication, total cholesterol 260, HDL 35, LDL 125, eGFR 90, no diabetes, quit smoking 4 months ago) is advised to start a statin but wants to lower her cholesterol on her own first. About how much LDL reduction can she expect from lifestyle changes alone?",
    "options": [
      "About 1%-2%",
      "About 10%-15%",
      "About 40%-50%",
      "Over 60%"
    ],
    "answer": 1,
    "explanation": "Lifestyle changes produce roughly a 10%-15% reduction in LDL. That is meaningful but generally less than statin therapy (moderate-intensity 30-49%, high-intensity >50%), which supports a shared-decision discussion about starting a statin."
  },
  {
    "id": "lp-054",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Dyslipidemia",
    "section": "Risk Assessment",
    "source": "Dyslipidemia, slides 40, 43",
    "question": "You are seeing a 58-year-old for primary prevention. Which single tool does the 2026 guideline direct you to use to calculate her 10-year ASCVD risk before deciding on therapy?",
    "options": [
      "Framingham points only",
      "The PREVENT-ASCVD equation",
      "Coronary angiography",
      "A fasting glucose alone"
    ],
    "answer": 1,
    "explanation": "The guideline directs use of the PREVENT equation to calculate 10-year ASCVD risk. Risk stratification then guides lifestyle and statin decisions, with risk enhancers considered in borderline/intermediate patients."
  }
];

if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; }
