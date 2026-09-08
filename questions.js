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
 *   why (optional)      : array parallel to options, per-option rationale shown after grading
 *   pairs[].why (optional): per-pair rationale for matching questions
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
    "explanation": "The mitral valve sits between the left atrium and left ventricle. The tricuspid separates the right atrium and right ventricle; the aortic and pulmonic are the semilunar outflow valves.",
    "why": [
      "The tricuspid valve is the right-sided AV valve, sitting between the right atrium and right ventricle.",
      "Correct. The mitral (bicuspid) valve is the left-sided AV valve, between the left atrium and left ventricle.",
      "The aortic valve is a semilunar outflow valve, between the left ventricle and the aorta, not an AV valve.",
      "The pulmonic valve is a semilunar outflow valve, between the right ventricle and the pulmonary artery."
    ]
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
    "explanation": "S1 (\"LUB\") marks the start of systole and is produced as the mitral and tricuspid (AV) valves close. S2 is produced by closure of the aortic and pulmonic (semilunar) valves.",
    "why": [
      "That is S2. The aortic and pulmonic (semilunar) valves close at the end of systole.",
      "Correct. S1 (\"LUB\") is closure of the mitral and tricuspid (AV) valves at the start of systole.",
      "Mixes one AV valve with one semilunar valve, so they do not close together to make a single sound.",
      "Also mixes a semilunar and an AV valve, so this is not how a single heart sound is produced."
    ]
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
    "explanation": "S2 (\"DUB\") occurs at the end of systole / start of diastole as the aortic and pulmonic valves close. Its two components are A2 (aortic, louder) and P2 (pulmonic).",
    "why": [
      "Valve opening is silent; heart sounds come from closure, not opening.",
      "That closure produces S1, not S2.",
      "Correct. S2 (\"DUB\") is closure of the aortic and pulmonic (semilunar) valves at the end of systole.",
      "Atrial contraction against a stiff ventricle produces an S4, not S2."
    ]
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
    "explanation": "True. At normal rates diastole is the longer phase, which helps distinguish S1 from S2. As heart rate rises, diastole shortens and the two phases approach equal duration.",
    "why": [
      "Correct. At rates under 100 per minute diastole is the longer phase, which helps tell S1 from S2.",
      "Incorrect. Diastole is longer at normal rates; it only shortens as heart rate rises."
    ]
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
    "explanation": "False. S1 is the \"LUB\" (beginning of systole). S2 is the \"DUB\" (end of systole).",
    "why": [
      "Incorrect. S1 is the \"LUB\" at the start of systole, not the \"DUB.\"",
      "Correct. S1 is the \"LUB\" (mitral and tricuspid closure). S2 is the \"DUB\" at the end of systole."
    ]
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
    "explanation": "The aortic area is the 2nd right intercostal space at the right sternal border. Pulmonic = 2nd LICS at LSB; tricuspid = 4th LICS at LSB; mitral = 5th LICS at the midclavicular line.",
    "why": [
      "Correct. The aortic area is the 2nd right intercostal space at the right sternal border.",
      "That is the pulmonic area.",
      "That is the tricuspid area.",
      "That is the mitral area, over the cardiac apex."
    ]
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
    "explanation": "Erb's point is the 3rd left intercostal space at the left sternal border.",
    "why": [
      "That is the pulmonic area, not Erb's point.",
      "Correct. Erb's point is the 3rd left intercostal space at the left sternal border.",
      "That is the tricuspid area.",
      "That is the mitral area, over the cardiac apex."
    ]
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
    "explanation": "In adults the mitral area / apex / PMI is the 5th left intercostal space at the midclavicular line. (In children it is the 4th LICS medial to the nipple.)",
    "why": [
      "That is the mitral area in a child, not an adult.",
      "That is the aortic area.",
      "Correct. In adults the apex, PMI, and mitral area sit at the 5th LICS in the midclavicular line.",
      "That is Erb's point."
    ]
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
        "right": "2nd ICS, right sternal border",
        "why": "Aortic valve sounds project up and to the right along the aorta, so it is heard at the 2nd right interspace."
      },
      {
        "left": "Pulmonic",
        "right": "2nd ICS, left sternal border",
        "why": "The pulmonic area mirrors the aortic on the left, at the 2nd left interspace."
      },
      {
        "left": "Tricuspid",
        "right": "4th ICS, left sternal border",
        "why": "The tricuspid (right AV) valve is heard lower along the left sternal border, around the 4th interspace."
      },
      {
        "left": "Mitral",
        "right": "5th ICS, midclavicular line",
        "why": "The mitral area is over the cardiac apex, at the 5th interspace in the midclavicular line."
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
    "explanation": "S1 marks the beginning of systole (ventricular contraction) as the mitral and tricuspid valves close.",
    "why": [
      "Correct. S1 marks the start of systole as the mitral and tricuspid valves close.",
      "S2 marks the end of systole and start of diastole (semilunar valve closure).",
      "S3 is an early-diastolic filling sound, not the start of systole.",
      "S4 is a late-diastolic sound just before S1, not the start of systole."
    ]
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
    "explanation": "S1 has two components: M1 (mitral closure, louder, best at the apex) and T1 (tricuspid closure, best at the lower left sternal border). They are usually heard as a single S1.",
    "why": [
      "A2 is aortic closure, a component of S2, not S1.",
      "P2 is pulmonic closure, a component of S2, not S1.",
      "Correct. M1 (mitral closure) is the louder component of S1, best heard at the apex.",
      "T1 (tricuspid closure) is the softer component of S1, best at the lower left sternal border."
    ]
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
    "explanation": "During late inspiration, A2 and P2 separate because ejection from the right ventricle takes slightly longer, delaying P2. During expiration they are usually heard as a single sound. Listen at the 2nd-3rd LICS.",
    "why": [
      "On expiration A2 and P2 merge into a single S2.",
      "Correct. Inspiration delays P2, separating it from A2, so physiologic splitting is heard on late inspiration.",
      "Valsalva reduces venous return and does not produce physiologic splitting.",
      "Standing decreases preload and is not when physiologic splitting is appreciated."
    ]
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
    "explanation": "True. Normal (physiologic) splitting appears on inspiration; on expiration A2 and P2 merge into one sound.",
    "why": [
      "Correct. Physiologic splitting appears on inspiration; on expiration A2 and P2 merge into one sound.",
      "Incorrect. The split normally disappears on expiration, becoming a single S2."
    ]
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
    "explanation": "S3 occurs in early diastole, just after S2, as blood strikes the ventricular walls during early passive filling. S4 is the sound that occurs late in diastole, just before S1.",
    "why": [
      "That timing describes S4, not S3.",
      "Correct. S3 occurs in early diastole just after S2, during early passive ventricular filling.",
      "S3 is a diastolic sound, not systolic.",
      "S3 follows S2; it does not coincide with S1."
    ]
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
    "explanation": "In adults an S3 suggests a dilated ventricle with volume overload and loss of compliance, classically heart failure. (An S3 can be normal in children.)",
    "why": [
      "In adults an S3 is usually abnormal; it can be normal in children, not adults.",
      "Correct. In adults an S3 suggests a dilated, volume-overloaded ventricle with reduced compliance, classically heart failure.",
      "A stiff, non-compliant LV produces an S4, not an S3.",
      "Aortic stenosis is a systolic murmur, not a cause of S3."
    ]
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
    "explanation": "S4 occurs in late diastole when blood strikes the ventricular wall during atrial contraction against increased resistance to filling. It indicates loss of ventricular compliance (a stiffened LV). It can be normal in children and some young adults.",
    "why": [
      "That is the mechanism of S3, not S4.",
      "Correct. S4 is blood striking a stiff, non-compliant ventricle during atrial contraction in late diastole.",
      "Closure of the semilunar valves produces S2.",
      "Valve opening is normally silent; a snap occurs only in mitral stenosis."
    ]
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
    "explanation": "S3 and S4 are low-pitched and heard best with the bell at the mitral area with the patient in the left lateral decubitus position.",
    "why": [
      "The diaphragm favors high-pitched sounds, but S3 and S4 are low-pitched.",
      "Correct. S3 and S4 are low-pitched, heard best with the bell at the apex in the left lateral decubitus position.",
      "Leaning forward with the diaphragm is for aortic regurgitation and rubs, and the diaphragm misses low-pitched gallops.",
      "The bell is right for low pitch, but the location and position are wrong; use the apex in left lateral decubitus."
    ]
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
    "explanation": "True. An S4 may be normal in children and some young adults; when present in older adults it indicates loss of ventricular compliance.",
    "why": [
      "Correct. An S4 can be normal in children and some young adults; in older adults it signals a stiff ventricle.",
      "Incorrect. An S4 is not always pathologic; it may be a normal finding in the young."
    ]
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
    "explanation": "When S3 and S4 combine at faster heart rates, the result is a summation gallop.",
    "why": [
      "An opening snap is the sound of mitral stenosis, not merged S3 and S4.",
      "Correct. At fast rates S3 and S4 merge into a summation gallop.",
      "An ejection click relates to semilunar valve opening, not gallops.",
      "A pericardial rub is a scratchy pericarditis sound, unrelated to merged gallops."
    ]
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
    "explanation": "False. The bell is best for low-pitched sounds such as S3 and S4; the diaphragm is best for higher-pitched sounds.",
    "why": [
      "Incorrect. The bell is for low-pitched sounds; the diaphragm captures high-pitched sounds.",
      "Correct. The bell is best for low-pitched sounds like S3 and S4; the diaphragm is best for high-pitched sounds."
    ]
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
    "explanation": "All four are listed causes: high flow through an orifice, stenosis (forward flow through a narrowed valve), regurgitation/insufficiency (backward flow through an incompetent valve), and flow through a cardiac defect.",
    "why": [
      "Correct. High flow through a normal or abnormal orifice can generate a murmur.",
      "Correct. Forward flow across a narrowed valve is stenosis.",
      "Correct. Backward flow through a valve that does not fully close is regurgitation, or insufficiency.",
      "Correct. Flow through a cardiac defect, such as a septal defect, is also a listed cause."
    ]
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
    "explanation": "Murmurs are described by site, character (shape/quality), radiation, intensity (grade), pitch, timing, and response to maneuvers. Blood type is not a murmur descriptor.",
    "why": [
      "Correct. Site is where the murmur is loudest.",
      "Correct. Character is the murmur's shape and quality.",
      "Correct. Radiation is where the murmur travels.",
      "Correct. Timing, systole versus diastole, is a key descriptor.",
      "Incorrect. Blood type has nothing to do with describing a murmur."
    ]
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
    "explanation": "A plateau murmur has uniform loudness throughout and is typically pansystolic/holosystolic (or pandiastolic/holodiastolic). Crescendo gets louder, decrescendo gets softer, crescendo-decrescendo builds then fades.",
    "why": [
      "A crescendo murmur grows steadily louder, not uniform.",
      "A decrescendo murmur fades, not uniform.",
      "Crescendo-decrescendo builds then fades (a diamond shape), not uniform.",
      "Correct. A plateau murmur is uniform in loudness, typical of holosystolic murmurs."
    ]
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
    "explanation": "Grade IV/VI is loud with a palpable thrill. Grade V/VI is very loud, heard with the stethoscope partly off the chest; Grade VI/VI is audible with the stethoscope entirely off the chest.",
    "why": [
      "Grade I is very faint, heard only with effort, and has no thrill.",
      "Grade II is soft but readily heard, with no thrill.",
      "Correct. Grade IV/VI is loud with a palpable thrill.",
      "Grade VI is audible with the stethoscope entirely off the chest, more than just loud with a thrill."
    ]
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
    "explanation": "Grade VI/VI is heard without the stethoscope on the chest at all. Grade V/VI still needs the edge of the scope on the chest.",
    "why": [
      "Grade III is loud but has no thrill.",
      "Grade IV is loud with a thrill, but still needs the scope on the chest.",
      "Grade V needs the edge of the scope still touching the chest.",
      "Correct. Grade VI/VI is audible with the stethoscope completely off the chest."
    ]
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
    "explanation": "Diastolic murmurs (between S2 and S1) imply cardiac pathology. Systolic murmurs (between S1 and S2) can be innocent or pathologic and coincide with the carotid upstroke.",
    "why": [
      "False; many systolic murmurs are innocent.",
      "Correct. Diastolic murmurs, between S2 and S1, imply cardiac pathology.",
      "Opposite of the truth; diastolic murmurs are pathologic, not innocent.",
      "Systolic murmurs occur between S1 and S2, not between S2 and S1."
    ]
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
    "explanation": "False. Some systolic murmurs are innocent. Diastolic murmurs, however, always imply pathology.",
    "why": [
      "Incorrect. Some systolic murmurs are innocent.",
      "Correct. Not all systolic murmurs are pathologic, though diastolic murmurs always are."
    ]
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
    "explanation": "Inspiration increases venous return to the right heart, accentuating right-sided murmurs (Carvallo's sign for tricuspid regurgitation is a classic example).",
    "why": [
      "Left-sided murmurs are accentuated by expiration, not inspiration.",
      "Correct. Inspiration increases right heart venous return, accentuating right-sided murmurs (Carvallo's sign).",
      "Inspiration affects the two sides differently, favoring the right.",
      "Inspiration does change murmur intensity, specifically right-sided murmurs."
    ]
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
    "explanation": "Valsalva and standing both decrease preload (venous return), which softens most murmurs but increases LV outflow obstruction, making HOCM louder. Squatting and handgrip do the opposite: they attenuate HOCM.",
    "why": [
      "Incorrect. Squatting increases preload and softens HOCM.",
      "Incorrect. Handgrip increases afterload and softens HOCM.",
      "Correct. Valsalva drops preload, softening most murmurs but making HOCM louder.",
      "Correct. Standing drops preload, softening most murmurs but making HOCM louder."
    ]
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
    "explanation": "Squatting increases venous return and afterload, accentuating aortic stenosis. In HOCM the increased LV volume displaces the hypertrophic septum and reduces obstruction, so the HOCM murmur softens.",
    "why": [
      "They respond oppositely, which is why squatting helps tell them apart.",
      "Correct. Squatting raises preload and afterload (louder AS), while the larger LV volume reduces the obstruction (softer HOCM).",
      "That describes standing or Valsalva, not squatting.",
      "Squatting clearly changes both murmurs."
    ]
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
    "explanation": "Aortic stenosis is a systolic crescendo-decrescendo murmur at the aortic area (2nd RICS) that radiates to the carotids and may produce a narrow pulse pressure.",
    "why": [
      "That describes aortic regurgitation.",
      "Correct. Aortic stenosis is a systolic crescendo-decrescendo murmur radiating to the carotids.",
      "That describes mitral regurgitation.",
      "That describes mitral stenosis."
    ]
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
    "explanation": "Mitral regurgitation is a high-pitched, blowing, pansystolic (holosystolic) murmur at the apex that radiates to the axilla.",
    "why": [
      "The carotids are where aortic stenosis radiates.",
      "Correct. Mitral regurgitation radiates to the axilla.",
      "Tricuspid regurgitation may radiate toward the epigastrium, not MR.",
      "The right sternal border is not a typical MR radiation site."
    ]
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
    "explanation": "Mitral stenosis produces a low-pitched, rumbling, mid-diastolic murmur with an opening snap at the apex and is commonly seen with atrial fibrillation.",
    "why": [
      "Aortic regurgitation is early-diastolic and decrescendo, without an opening snap.",
      "Correct. Mitral stenosis is a mid-diastolic, low-pitched, rumbling murmur with an opening snap, often with atrial fibrillation.",
      "Tricuspid regurgitation is a pansystolic murmur, not mid-diastolic with an opening snap.",
      "Pulmonic stenosis is a systolic murmur, not diastolic."
    ]
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
    "explanation": "Aortic regurgitation is an early-diastolic, decrescendo, blowing murmur (2nd-4th ICS at LSB). Associated signs include a water hammer pulse, Corrigan's sign, and DeMusset's sign.",
    "why": [
      "Correct. Aortic regurgitation is an early-diastolic, decrescendo, blowing murmur at the left sternal border.",
      "Mitral regurgitation is holosystolic and blowing at the apex, not early-diastolic.",
      "Aortic stenosis is a systolic crescendo-decrescendo murmur, not diastolic.",
      "Tricuspid stenosis is a rare mid-diastolic murmur, not an early-diastolic decrescendo at the LSB."
    ]
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
    "explanation": "Aortic regurgitation produces a wide pulse pressure with a water hammer pulse, DeMusset's sign (head bobbing), and Corrigan's sign. A NARROW pulse pressure is a feature of aortic stenosis, not regurgitation.",
    "why": [
      "Correct. The water hammer (Corrigan) pulse reflects the wide pulse pressure of AR.",
      "Correct. Head bobbing with each beat (DeMusset's sign) is a classic AR sign.",
      "Correct. Carotid distention and collapse (Corrigan's sign) is an AR sign.",
      "Incorrect. AR causes a WIDE pulse pressure; a narrow one points to aortic stenosis."
    ]
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
    "explanation": "Tricuspid regurgitation is a right-sided, blowing, pansystolic murmur at the 4th LICS that gets louder with inspiration (Carvallo's sign) and is associated with increased JVP.",
    "why": [
      "Mitral regurgitation is left-sided and does not increase with inspiration.",
      "Aortic stenosis is left-sided and softens, rather than getting louder, with inspiration.",
      "Correct. Tricuspid regurgitation is right-sided, louder with inspiration (Carvallo's sign), with an elevated JVP.",
      "Mitral valve prolapse gives a systolic click, not an inspiration-accentuated murmur with raised JVP."
    ]
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
    "explanation": "Mitral valve prolapse is the most common valvular disorder (about 2-6% of the population, more common in females). A 'floppy' redundant mitral valve prolapses into the left atrium.",
    "why": [
      "Common in the elderly, but not the most common valvular disorder overall.",
      "Correct. Mitral valve prolapse is the most common valvular disorder, about 2 to 6 percent of the population.",
      "Tricuspid stenosis is rare.",
      "Pulmonic regurgitation is uncommon and not the most prevalent."
    ]
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
    "explanation": "Mitral valve prolapse produces a mid-to-late systolic click, with or without a high-pitched systolic murmur of mitral regurgitation, best heard at the apex.",
    "why": [
      "An opening snap in early diastole is the sound of mitral stenosis, not MVP.",
      "Correct. MVP produces a mid-to-late systolic click, with or without an MR murmur.",
      "A fixed split S2 suggests an atrial septal defect, not MVP.",
      "A continuous machine-like murmur describes a patent ductus arteriosus."
    ]
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
    "explanation": "A pericardial friction rub is high-pitched, scratchy and grating, heard best with the diaphragm just left of the sternum with the patient leaning forward. It has both systolic and diastolic components.",
    "why": [
      "That position is for low-pitched S3 and S4, not a rub.",
      "Correct. A pericardial rub is high-pitched; hear it with the diaphragm left of the sternum, patient leaning forward.",
      "The bell and supine position are wrong for this high-pitched sound.",
      "The axilla and standing are not where a rub is best heard."
    ]
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
    "explanation": "In pulmonic stenosis, increased resistance to RV outflow prolongs RV ejection and delays P2, which can produce a fixed split S2. The murmur itself is a harsh crescendo-decrescendo systolic murmur at the 2nd-3rd LICS.",
    "why": [
      "Pulmonic stenosis delays P2 rather than producing a loud single S2.",
      "Correct. Delayed P2 from RV outflow obstruction can produce a fixed split S2.",
      "S2 is not absent in pulmonic stenosis.",
      "An ejection click may occur, but it does not eliminate S2."
    ]
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
    "explanation": "Aortic regurgitation (early diastolic) and mitral stenosis (mid-diastolic) are diastolic murmurs. Aortic stenosis and mitral regurgitation are systolic murmurs.",
    "why": [
      "Correct. Aortic regurgitation is an early-diastolic murmur.",
      "Incorrect. Aortic stenosis is systolic.",
      "Correct. Mitral stenosis is a mid-diastolic murmur.",
      "Incorrect. Mitral regurgitation is holosystolic."
    ]
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
        "right": "Closure of the mitral and tricuspid valves",
        "why": "S1 is closure of the AV valves (mitral and tricuspid) at the start of systole."
      },
      {
        "left": "S2",
        "right": "Closure of the aortic and pulmonic valves",
        "why": "S2 is closure of the semilunar valves (aortic and pulmonic) at the end of systole."
      },
      {
        "left": "S3",
        "right": "Blood striking ventricular walls during early passive filling",
        "why": "S3 comes from blood striking the ventricular walls during early passive filling, in early diastole."
      },
      {
        "left": "S4",
        "right": "Blood striking the ventricle during atrial contraction",
        "why": "S4 comes from blood hitting a stiff ventricle during atrial contraction, in late diastole."
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
        "right": "Systolic, crescendo-decrescendo, radiates to carotids",
        "why": "Systolic crescendo-decrescendo at the aortic area, radiating to the carotids."
      },
      {
        "left": "Mitral regurgitation",
        "right": "Pansystolic, blowing, radiates to axilla",
        "why": "Pansystolic blowing murmur at the apex, radiating to the axilla."
      },
      {
        "left": "Aortic regurgitation",
        "right": "Early diastolic, decrescendo, blowing",
        "why": "Early-diastolic decrescendo blowing murmur at the left sternal border."
      },
      {
        "left": "Mitral stenosis",
        "right": "Mid-diastolic, low-pitched, rumbling with opening snap",
        "why": "Mid-diastolic, low-pitched rumble with an opening snap at the apex."
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
        "right": "Carotid arteries",
        "why": "Aortic stenosis radiates up to the carotid arteries."
      },
      {
        "left": "Mitral regurgitation",
        "right": "Axilla",
        "why": "Mitral regurgitation radiates to the axilla."
      },
      {
        "left": "Tricuspid regurgitation",
        "right": "Epigastrium (occasionally)",
        "why": "Tricuspid regurgitation may occasionally radiate to the epigastrium."
      },
      {
        "left": "Pulmonic regurgitation",
        "right": "Right sternal border",
        "why": "Pulmonic regurgitation radiates toward the right sternal border."
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
    "explanation": "HOCM is an autosomal dominant disorder involving multiple genes. It causes asymmetric septal hypertrophy with LV outflow obstruction and is a significant cause of sudden cardiac death in young athletes.",
    "why": [
      "HOCM is dominant, not recessive.",
      "Correct. HOCM is autosomal dominant, causing asymmetric septal hypertrophy with outflow obstruction.",
      "Not the inheritance pattern of HOCM.",
      "Not the inheritance pattern of HOCM."
    ]
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
    "explanation": "True. HOCM is a significant cause of sudden cardiac death in young athletes, and sudden death is often the first symptom, which is why thorough cardiac exams matter.",
    "why": [
      "Correct. Sudden cardiac death can be the first sign of HOCM in a young athlete, which is why screening matters.",
      "Incorrect. Sudden death tragically can be the first symptom of HOCM."
    ]
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
    "explanation": "A murmur that intensifies with standing/Valsalva and softens with squatting is the hallmark of HOCM, a leading cause of sudden cardiac death in young athletes. Most other murmurs behave the opposite way.",
    "why": [
      "Aortic stenosis softens with standing (less flow across the valve), the opposite of this murmur, and usually presents in older adults.",
      "Mitral valve prolapse also shifts with position, but the young athlete who collapses with this dynamic murmur is the classic HOCM picture.",
      "Correct. Louder with standing/Valsalva (less LV filling worsens the outflow obstruction) and softer with squatting; a leading cause of sudden death in young athletes.",
      "An innocent flow murmur would not cause collapse and does not intensify with standing."
    ]
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
    "explanation": "Location (2nd RICS), crescendo-decrescendo shape, radiation to the carotids, and a narrow pulse pressure all point to aortic stenosis.",
    "why": [
      "Mitral regurgitation is holosystolic at the apex radiating to the axilla, not to the carotids.",
      "Correct. 2nd RICS, crescendo-decrescendo shape, carotid radiation, and a narrow pulse pressure are classic aortic stenosis.",
      "Aortic regurgitation is an early-diastolic decrescendo murmur with a WIDE pulse pressure.",
      "Tricuspid stenosis is a rare right-sided diastolic murmur, not this picture."
    ]
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
    "explanation": "An apical, blowing, holosystolic murmur radiating to the axilla is classic for mitral regurgitation.",
    "why": [
      "Aortic stenosis radiates to the carotids and is crescendo-decrescendo, not holosystolic to the axilla.",
      "Mitral stenosis is a mid-diastolic rumble, not a holosystolic apical murmur.",
      "Correct. An apical, blowing, holosystolic murmur radiating to the axilla is classic mitral regurgitation.",
      "Pulmonic stenosis is a systolic murmur at the upper left sternal border, not apical to the axilla."
    ]
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
    "explanation": "A scratchy, grating sound with systolic and diastolic components, loudest with the patient leaning forward and a recent MI, describes a pericardial friction rub (post-MI pericarditis).",
    "why": [
      "Correct. A scratchy, grating sound in systole and diastole, louder leaning forward after a recent MI, is a pericardial friction rub.",
      "Aortic regurgitation is a blowing diastolic murmur, not a scratchy to-and-fro rub.",
      "An S3 is a low-pitched early-diastolic sound, not a scratchy rub.",
      "Mitral stenosis is a mid-diastolic rumble with an opening snap, not a grating rub."
    ]
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
    "explanation": "A low-pitched, rumbling, mid-diastolic murmur with an opening snap at the apex, plus atrial fibrillation, is the classic picture of mitral stenosis.",
    "why": [
      "Mitral regurgitation is holosystolic, not a mid-diastolic rumble with an opening snap.",
      "Correct. A low-pitched mid-diastolic rumble with an opening snap, plus atrial fibrillation, is classic mitral stenosis.",
      "Aortic stenosis is a systolic murmur radiating to the carotids, not diastolic at the apex.",
      "Tricuspid regurgitation is a right-sided pansystolic murmur, not a diastolic apical rumble."
    ]
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
    "explanation": "Fats transport the fat-soluble vitamins A, D, E, and K, provide essential fatty acids, and supply energy for membrane manufacture, cell signaling, and brain function. They are hydrophobic and stored intracellularly as triglyceride.",
    "why": [
      "This IS a role; fats transport the fat-soluble vitamins A, D, E, and K.",
      "This IS a role; fats provide essential fatty acids.",
      "Correct. This is NOT a role; water-soluble vitamins do not need fat for transport.",
      "This IS a role; fats supply material for cell membranes and signaling."
    ]
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
    "explanation": "True. Fats are esters of glycerol and fatty acids, are insoluble in water, and are stored inside cells as triglyceride (TG).",
    "why": [
      "Correct. Fats are hydrophobic and stored inside cells as triglyceride.",
      "Incorrect. Fats are water-insoluble and stored intracellularly as triglyceride."
    ]
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
    "explanation": "Saturated fats have a straight, tightly packed structure, are typically solid at room temperature, and can increase LDL. Unsaturated fats are usually liquid, loosely packed, and may lower CVD risk.",
    "why": [
      "That describes unsaturated fats, which are usually liquid and may lower CVD risk.",
      "Correct. Saturated fats are typically solid at room temperature and can raise LDL.",
      "Saturated fats do affect LDL; they can raise it.",
      "Omega-3s come from unsaturated fats, not saturated fats."
    ]
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
    "explanation": "Omega-3 fatty acids mainly improve triglycerides and also lower inflammation.",
    "why": [
      "Omega-3s have only a modest LDL effect; their main benefit is on triglycerides.",
      "Not the main target; omega-3s mainly improve triglycerides.",
      "Correct. Omega-3 fatty acids mainly improve triglycerides and lower inflammation.",
      "Not the primary effect; triglycerides are the main target."
    ]
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
    "explanation": "True. Cholesterol is synthesized from fatty acid chains in the liver and other tissues; only animals make it, and it is a principal component of animal cell plasma membranes and of arterial plaques.",
    "why": [
      "Correct. Only animals synthesize cholesterol, and it is a principal component of animal cell membranes.",
      "Incorrect. Cholesterol is made only by animals and is a key component of animal cell membranes."
    ]
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
        "right": "Mediate sexual characteristics and function",
        "why": "Steroid sex hormones made from cholesterol; they drive sexual characteristics and function."
      },
      {
        "left": "Progestins",
        "right": "Regulate the menstrual cycle",
        "why": "Cholesterol-derived hormones that regulate the menstrual cycle."
      },
      {
        "left": "Mineralocorticoids",
        "right": "Regulate renal sodium reabsorption",
        "why": "Cholesterol-derived hormones, such as aldosterone, that regulate renal sodium reabsorption."
      },
      {
        "left": "Bile acids",
        "right": "Emulsify dietary lipids",
        "why": "Made from cholesterol; they emulsify dietary lipids for absorption."
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
        "right": "Triglyceride",
        "why": "TG stands for triglyceride."
      },
      {
        "left": "CM",
        "right": "Chylomicron",
        "why": "CM stands for chylomicron."
      },
      {
        "left": "LDL-C",
        "right": "Low-density lipoprotein cholesterol",
        "why": "LDL-C is low-density lipoprotein cholesterol."
      },
      {
        "left": "ASCVD",
        "right": "Atherosclerotic cardiovascular disease",
        "why": "ASCVD is atherosclerotic cardiovascular disease."
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
    "explanation": "Because lipids are water-insoluble, they cannot travel directly in the bloodstream; lipoproteins carry them. A lipoprotein has a neutral lipid core (TG and cholesterol esters) surrounded by a hydrophilic shell of apoproteins, free cholesterol, and phospholipids.",
    "why": [
      "Size is not the issue; lipids of any size still cannot dissolve in blood.",
      "Correct. Lipids are water-insoluble, so lipoproteins carry them through the blood.",
      "Filtration is not the reason; the problem is that lipids do not dissolve in water.",
      "Lipids do not bind oxygen; the issue is water insolubility."
    ]
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
    "explanation": "Chylomicrons are large lipoproteins formed in the small intestine after a meal. They carry triglycerides, cholesterol, and fat-soluble vitamins to peripheral tissues (adipose, muscle, liver) for energy or storage.",
    "why": [
      "Chylomicrons form in the intestine, not the liver, and do not transport HDL.",
      "Correct. Chylomicrons form in the small intestine after a meal and carry triglycerides, cholesterol, and fat-soluble vitamins.",
      "They are not made in the kidney, and they carry more than free fatty acids.",
      "They are not made in adipose tissue; they form in the small intestine."
    ]
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
    "explanation": "LDL ('bad' cholesterol) carries cholesterol to cells; LDL receptors on peripheral and liver cells clear it from the blood. LDL-C is one of the most atherogenic lipoproteins.",
    "why": [
      "That describes HDL and reverse cholesterol transport, not LDL.",
      "Correct. LDL delivers cholesterol to cells and is one of the most atherogenic lipoproteins.",
      "Reversed. LDL is the \"bad\" cholesterol; HDL is the \"good\" cholesterol.",
      "Backwards. Higher LDL correlates with higher ASCVD risk, not lower."
    ]
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
    "explanation": "HDL ('good' cholesterol) helps move cholesterol from atherogenic lipoproteins and peripheral tissues to the liver. Low HDL-C correlates with higher ASCVD risk and high HDL-C with lower risk.",
    "why": [
      "That is what LDL does; HDL removes cholesterol rather than delivering it to arteries.",
      "Correct. HDL moves cholesterol from atherogenic lipoproteins and tissues to the liver (reverse cholesterol transport).",
      "HDL does not increase LDL-receptor destruction; that is related to PCSK9.",
      "HDL is cardioprotective, not a promoter of triglyceride storage."
    ]
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
    "explanation": "False. Although high HDL-C correlates with lower ASCVD risk, the data do NOT support raising HDL-C pharmacologically to improve outcomes.",
    "why": [
      "Incorrect. The data do not support raising HDL-C with drugs to improve outcomes.",
      "Correct. High HDL-C correlates with lower risk, but raising it pharmacologically has not improved outcomes."
    ]
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
    "explanation": "The shell is made of hydrophilic molecules: apoproteins, free cholesterol, and phospholipids. The triglyceride and cholesterol esters form the neutral core, not the shell.",
    "why": [
      "Correct. Apoproteins are part of the hydrophilic surface coat.",
      "Correct. Free (unesterified) cholesterol sits in the outer shell.",
      "Correct. The polar heads of phospholipids face outward, forming the shell.",
      "Incorrect. Triglyceride and cholesterol esters make up the neutral core, not the shell."
    ]
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
    "explanation": "Most lipid panels report total cholesterol, triglycerides, LDL-C, and HDL-C.",
    "why": [
      "Correct. Total cholesterol is reported on a standard panel.",
      "Correct. Triglycerides are reported on a standard panel.",
      "Correct. LDL-C is reported on a standard panel.",
      "Correct. HDL-C is reported on a standard panel."
    ]
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
    "explanation": "For initial screening, non-fasting samples are acceptable. Fasting is preferred when diagnosing pancreatitis or evaluating premature ASCVD, metabolic syndrome, or hypertriglyceridemia.",
    "why": [
      "Fasting is preferred in specific situations but is not required for initial screening.",
      "Correct. Non-fasting samples are acceptable for initial lipid screening.",
      "A 24-hour fast is not required.",
      "A post-prandial-only sample is not a screening requirement."
    ]
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
    "explanation": "Fasting is preferred for diagnosing pancreatitis or when treating premature ASCVD, metabolic syndrome, or hypertriglyceridemia.",
    "why": [
      "Routine first-time screening can be done non-fasting.",
      "Correct. Fasting is preferred when evaluating hypertriglyceridemia or premature ASCVD.",
      "A quick health-fair screen does not require fasting.",
      "Checking HDL alone does not require fasting."
    ]
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
    "explanation": "The 2026 AHA/ACC Multisociety guidelines recommend screening all adults aged 20 years or older. (USPSTF screens men at 35 and women at 45 if at increased risk, and younger adults with risk factors.)",
    "why": [
      "Correct. The 2026 AHA/ACC Multisociety guidelines screen all adults aged 20 or older.",
      "That is closer to the USPSTF approach, not the 2026 Multisociety guideline.",
      "Screening begins earlier than 40, at age 20.",
      "Screening is not deferred until after a cardiac event."
    ]
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
    "explanation": "The American Academy of Pediatrics recommends screening for high cholesterol between ages 9 and 11.",
    "why": [
      "Too young; the AAP screens between ages 9 and 11.",
      "Correct. The AAP recommends screening for high cholesterol between ages 9 and 11.",
      "Later than recommended; the window is ages 9 to 11.",
      "Screening is routine in this age window, not only if symptomatic."
    ]
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
    "explanation": "Dyslipidemia is any lipid abnormality: elevated TG, elevated total cholesterol, elevated LDL-C, and/or decreased HDL-C (any one or a combination).",
    "why": [
      "Correct. Elevated triglycerides is a form of dyslipidemia.",
      "Correct. Elevated total cholesterol is a form of dyslipidemia.",
      "Correct. Elevated LDL-C is a form of dyslipidemia.",
      "Correct. Decreased HDL-C is a form of dyslipidemia."
    ]
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
    "explanation": "Almost 50% of the population has dyslipidemia, and risk increases with age.",
    "why": [
      "Underestimates; almost half the population has dyslipidemia.",
      "Underestimates; the figure is closer to 50 percent.",
      "Correct. Almost 50 percent of the population has dyslipidemia, and risk rises with age.",
      "Overestimates; it is closer to half."
    ]
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
    "explanation": "True. Men have lower HDL than women, and women have lower LDL than men until about age 55 (after menopause). Familial hypercholesterolemia has a prevalence of about 1 in 500.",
    "why": [
      "Correct. Women have lower LDL than men until about age 55, after menopause.",
      "Incorrect. Women's LDL is typically lower than men's until around age 55."
    ]
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
    "explanation": "Familial hypercholesterolemia has a prevalence of roughly 1 in 500.",
    "why": [
      "Too common; FH is about 1 in 500.",
      "Correct. Familial hypercholesterolemia has a prevalence of roughly 1 in 500.",
      "Too rare; it is about 1 in 500.",
      "Far too rare; it is about 1 in 500."
    ]
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
    "explanation": "LDL not taken up by LDL receptors is scavenged by arterial-wall macrophages. These macrophages become engorged with LDL-derived cholesterol, forming foam cells, a key component of atherogenic plaques.",
    "why": [
      "HDL delivering cholesterol to the liver is protective, not foam-cell formation.",
      "Correct. Arterial-wall macrophages engorged with LDL-derived cholesterol become foam cells.",
      "Chylomicrons entering the intestine is normal digestion, not foam-cell formation.",
      "Full LDL clearance would prevent foam cells, not create them."
    ]
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
    "explanation": "True. LDL can be oxidized into toxic intermediates that drive inflammation, contributing to plaque formation.",
    "why": [
      "Correct. Oxidized LDL forms toxic intermediates that drive arterial inflammation.",
      "Incorrect. Oxidized LDL does form toxic, pro-inflammatory intermediates."
    ]
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
    "explanation": "Occlusive plaques are often the result of rupture compounded by thrombosis, producing ASCVD events such as coronary heart disease or stroke.",
    "why": [
      "Events are usually acute, from rupture and clot, not just gradual narrowing.",
      "Correct. Occlusive plaques often result from rupture compounded by thrombosis, causing CHD or stroke.",
      "HDL is protective and does not form occlusive plaques.",
      "Vitamin deficiency is not the mechanism of occlusive plaque events."
    ]
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
    "explanation": "LDL not cleared by hepatic or peripheral LDL receptors is taken up by scavenger macrophages on the arterial wall, a first step toward foam-cell and plaque formation.",
    "why": [
      "Correct. LDL not cleared by receptors is taken up by scavenger macrophages on the arterial wall.",
      "Red blood cells do not scavenge LDL.",
      "Chylomicrons carry dietary fat from the gut; they do not scavenge LDL.",
      "Bile acids emulsify fat; they do not take up arterial LDL."
    ]
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
    "explanation": "Listed ASCVD risk factors include age, hypertension, dyslipidemia, diabetes, diet, cigarette smoking, overweight/obesity, sedentary lifestyle, and stress/depression.",
    "why": [
      "Correct. Hypertension is a listed ASCVD risk factor.",
      "Correct. Diabetes is a listed ASCVD risk factor.",
      "Correct. Cigarette smoking is a listed ASCVD risk factor.",
      "Correct. A sedentary lifestyle is a listed ASCVD risk factor."
    ]
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
    "explanation": "Familial hypercholesterolemia is autosomal co-dominant (about 1/500), caused by an LDL-receptor defect producing very high LDL-C (and TG). Suspect it with a family history of premature ASCVD.",
    "why": [
      "FH raises LDL through a receptor defect; it does not lower it.",
      "Correct. FH is an LDL-receptor defect with very high LDL-C and autosomal co-dominant inheritance.",
      "FH involves high LDL, not a triglyceride deficiency.",
      "FH is strongly familial; suspect it with a family history of premature ASCVD."
    ]
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
    "explanation": "Primary dyslipidemia is genetic: overproduction of lipids or beta-apolipoproteins (LDL) or underproduction of alpha-apolipoproteins (HDL). Secondary causes include diet and metabolic/hormonal conditions.",
    "why": [
      "That is a secondary (acquired) cause, not primary.",
      "Correct. Primary dyslipidemia is genetic, such as overproduction of LDL apolipoproteins.",
      "Medication-induced dyslipidemia is a secondary cause.",
      "Nephrotic syndrome is a secondary cause, not primary."
    ]
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
    "explanation": "Listed secondary causes: hypothyroidism, nephrotic syndrome, cholestasis, acute intermittent porphyria, and medications such as glucocorticoids, anabolic steroids, thiazide diuretics, and amiodarone.",
    "why": [
      "Correct. Hypothyroidism is a listed secondary cause.",
      "Correct. Nephrotic syndrome is a listed secondary cause.",
      "Correct. Cholestasis is a listed secondary cause.",
      "Correct. Thiazide diuretics are a listed medication cause."
    ]
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
    "explanation": "Risk enhancers include premature family ASCVD, higher-risk ancestry, high polygenic risk, chronic inflammatory disease, elevated Lp(a), elevated hsCRP, persistently high TG, CKM syndrome, persistently high LDL-C/apoB, and reproductive risk markers.",
    "why": [
      "Correct. Premature ASCVD in a parent or sibling is a risk enhancer.",
      "Correct. Chronic inflammatory disease such as lupus or RA is a risk enhancer.",
      "Correct. Elevated Lp(a) is a risk enhancer.",
      "Correct. Persistently elevated hsCRP is a risk enhancer."
    ]
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
    "explanation": "Premature/early cardiac disease is defined as men younger than 55 and women younger than 65. A general clinical approach inquires about this family history, assesses ASCVD risk, and performs a complete CV exam.",
    "why": [
      "Correct. Premature disease is men younger than 55 and women younger than 65.",
      "The sexes are reversed; it is men under 55 and women under 65.",
      "Over age 70 is not premature.",
      "The thresholds are too low; it is men under 55 and women under 65."
    ]
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
        "right": "Cholesterol deposit in skin/tendons",
        "why": "A cholesterol deposit in the skin or tendons."
      },
      {
        "left": "Xanthelasma",
        "right": "Yellow cholesterol plaque on the eyelids",
        "why": "A yellow cholesterol plaque on the eyelids."
      },
      {
        "left": "Arcus senilis (<40 y)",
        "right": "Corneal ring that can signal elevated cholesterol",
        "why": "A corneal ring that, in someone under 40, can signal elevated cholesterol."
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
    "explanation": "Arcus senilis is common with aging, but when it appears in people under 40 it can be a sign of elevated cholesterol.",
    "why": [
      "Arcus is common with aging and less concerning in the elderly.",
      "Correct. Arcus senilis under age 40 can signal elevated cholesterol.",
      "It is more concerning specifically in the young, under 40.",
      "It is a concern in adults under 40, not limited to children."
    ]
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
    "explanation": "Very high LDL-C with cutaneous xanthomas and a family history of premature ASCVD suggests familial hypercholesterolemia, an LDL-receptor defect.",
    "why": [
      "Diet-related secondary hyperlipidemia does not typically cause xanthomas with a strong familial pattern.",
      "Correct. Xanthomas plus a family history of premature heart disease suggest familial hypercholesterolemia.",
      "This combination is not normal aging.",
      "Hypothyroidism alone does not explain xanthomas with this family history."
    ]
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
    "explanation": "The PREVENT calculator includes A1c, eGFR, zip code, and BMI but does NOT include race. It was created because the older ASCVD calculator overestimated risk.",
    "why": [
      "Correct. The PREVENT calculator includes A1c.",
      "Correct. The PREVENT calculator includes eGFR.",
      "Correct. PREVENT includes zip code and BMI.",
      "Incorrect. PREVENT deliberately does NOT include race."
    ]
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
    "explanation": "True. The PREVENT calculator drops race and instead uses A1c, eGFR, zip code, and BMI. The prior ASCVD calculator tended to overestimate risk.",
    "why": [
      "Correct. PREVENT drops race and uses A1c, eGFR, zip code, and BMI instead.",
      "Incorrect. PREVENT does not include race, unlike the older calculator."
    ]
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
        "right": "<3%",
        "why": "Low risk is under 3 percent over 10 years."
      },
      {
        "left": "Borderline",
        "right": "3% to <5%",
        "why": "Borderline is 3 to under 5 percent."
      },
      {
        "left": "Intermediate",
        "right": "5% to <10%",
        "why": "Intermediate is 5 to under 10 percent."
      },
      {
        "left": "High",
        "right": "≥10%",
        "why": "High is 10 percent or more."
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
    "explanation": "A 10-year risk of 5% to <10% is intermediate. Low is <3%, borderline is 3 to <5%, and high is ≥10%.",
    "why": [
      "Low is under 3 percent.",
      "Borderline is 3 to under 5 percent.",
      "Correct. 5 to under 10 percent is intermediate, so 7 percent is intermediate.",
      "High is 10 percent or more."
    ]
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
    "explanation": "For adults with borderline or intermediate risk, evaluate risk enhancers to refine the decision about lipid-lowering therapy.",
    "why": [
      "Do not automatically start a statin; refine the estimate first.",
      "Correct. For borderline or intermediate risk, evaluate risk enhancers next.",
      "Screening does not stop; you refine the risk estimate.",
      "Bypass surgery is not a risk-refinement step."
    ]
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
    "explanation": "A CAC of zero: reasonable to withhold statin and reassess in 5-10 years. CAC 1-99: start a statin in patients ≥55 years. CAC ≥100: start statin therapy.",
    "why": [
      "A CAC of zero argues against, not for, immediately starting a statin.",
      "Correct. With CAC of zero it is reasonable to withhold the statin and reassess in 5 to 10 years.",
      "A CAC of zero does not warrant urgent catheterization.",
      "Reassessment is still recommended in 5 to 10 years, not never."
    ]
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
        "right": "10%-15% reduction",
        "why": "Lifestyle changes lower LDL by about 10 to 15 percent."
      },
      {
        "left": "Moderate-intensity statin",
        "right": "30%-49% reduction",
        "why": "A moderate-intensity statin lowers LDL by about 30 to 49 percent."
      },
      {
        "left": "High-intensity statin",
        "right": ">50% reduction",
        "why": "A high-intensity statin lowers LDL by more than 50 percent."
      },
      {
        "left": "Adding ezetimibe/bile sequestrant",
        "right": "Extra 15%-20% reduction",
        "why": "Adding ezetimibe or a bile sequestrant gives an extra 15 to 20 percent."
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
    "explanation": "Lifestyle is the cornerstone: a diet high in fruits, vegetables, and lean protein (fish) and low in sweets/sugar-sweetened beverages/red meat, a goal BMI of 20-25, and regular aerobic exercise (~40 min moderate-to-intense, 3-4 times/week).",
    "why": [
      "The BMI goal is 20 to 25, not 30 to 35.",
      "Exercise is recommended even when the diet is good.",
      "Correct. Regular aerobic exercise, about 40 minutes moderate-to-intense 3 to 4 times weekly, is a cornerstone.",
      "A diet high in red meat and sugary drinks is discouraged, not recommended."
    ]
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
    "explanation": "For severe primary hypercholesterolemia (LDL ≥190), no risk assessment is needed: use a high-intensity statin.",
    "why": [
      "With LDL 190 or higher, no risk assessment is needed before treating.",
      "Correct. For LDL-C 190 or higher, start a high-intensity statin without a risk assessment.",
      "Lifestyle alone is insufficient for LDL 190 or higher.",
      "A statin, not ezetimibe monotherapy, is first-line here."
    ]
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
    "explanation": "In patients with diabetes aged 40-75, a moderate-intensity statin is recommended regardless of the 10-year ASCVD risk.",
    "why": [
      "Diabetes aged 40 to 75 warrants a statin regardless of 10-year risk.",
      "Correct. In diabetes aged 40 to 75, a moderate-intensity statin is recommended regardless of 10-year risk.",
      "A bile acid sequestrant is not the recommended first step here.",
      "A PCSK9 inhibitor is not first-line for this patient."
    ]
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
    "explanation": "For secondary prevention at 'not very high risk,' reduce LDL-C by ≥50% with a high-intensity statin, goal <70 mg/dL. Very-high-risk patients use a threshold of 50 mg/dL.",
    "why": [
      "The goal here is below 70, not 100.",
      "Correct. For secondary prevention at not very high risk, reduce LDL by at least 50 percent, goal below 70.",
      "That is not the stated threshold; very-high-risk uses 50.",
      "Far above goal; the target is below 70."
    ]
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
    "explanation": "In very-high-risk patients using an LDL threshold of 50 mg/dL, if LDL is still >50 on a statin, add ezetimibe and then a PCSK9 inhibitor. PCSK9 inhibitors are monoclonal antibodies that prevent LDL-receptor destruction.",
    "why": [
      "Do not stop the statin; add another agent.",
      "Correct. Add ezetimibe, then a PCSK9 inhibitor if LDL stays above 50 on a maximal statin.",
      "Lifestyle-only is not appropriate for a very-high-risk patient above goal.",
      "A thiazide does not lower LDL."
    ]
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
    "explanation": "False. Added medications like ezetimibe and PCSK9 inhibitors can help ASCVD patients reach goal, but should NOT be used as primary prevention in patients with no ASCVD history.",
    "why": [
      "Incorrect. These agents are for ASCVD patients, not primary prevention.",
      "Correct. Ezetimibe and PCSK9 inhibitors should not be used as primary prevention in patients with no ASCVD history."
    ]
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
    "explanation": "PCSK9 inhibitors are monoclonal antibodies that bind the PCSK9 receptor, preventing LDL-receptor destruction so more LDL is cleared from the blood.",
    "why": [
      "That describes ezetimibe, which blocks gut absorption, not PCSK9 inhibitors.",
      "Correct. PCSK9 inhibitors are monoclonal antibodies that prevent LDL-receptor destruction, so more LDL is cleared.",
      "They do not dissolve existing plaques.",
      "They lower LDL; they do not increase triglyceride storage."
    ]
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
    "explanation": "The guideline framework: (1) lifestyle modification (smoking, sedentary lifestyle, obesity, diet), (2) primary prevention in high-risk conditions, (3) secondary prevention in ASCVD patients, and (4) use the PREVENT equation to calculate risk.",
    "why": [
      "Correct. Lifestyle modification of risk factors is part of the framework.",
      "Correct. Primary prevention in high-risk conditions is part of the framework.",
      "Correct. Secondary prevention in ASCVD patients is part of the framework.",
      "Correct. Using the PREVENT equation to calculate risk is part of the framework."
    ]
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
    "explanation": "Increased-risk characteristics include age ≥65, low BMI, female sex, obesity, hypothyroidism, diabetes, chronic liver or kidney disease, alcohol use, vigorous exercise, high-dose statin therapy, myalgia-associated diseases, and gene variants (e.g., SLCO1B1).",
    "why": [
      "Correct. Age 65 or older raises the risk of statin muscle symptoms.",
      "Correct. Female sex is a listed risk characteristic.",
      "Correct. Hypothyroidism is a listed risk characteristic.",
      "Correct. High-dose statin therapy raises the risk."
    ]
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
    "explanation": "False. The increased risk is associated with higher DOSES within the approved range, not with statin potency. Higher-potency statins do not carry higher muscle-symptom risk; high doses do.",
    "why": [
      "Incorrect. Higher doses within the approved range, not potency, drive the risk.",
      "Correct. The risk tracks with higher doses, not with statin potency."
    ]
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
    "explanation": "Lifestyle changes produce roughly a 10%-15% reduction in LDL. That is meaningful but generally less than statin therapy (moderate-intensity 30-49%, high-intensity >50%), which supports a shared-decision discussion about starting a statin.",
    "why": [
      "Too low; lifestyle changes give roughly 10 to 15 percent.",
      "Correct. Lifestyle changes lower LDL by about 10 to 15 percent.",
      "That is statin-level reduction, more than lifestyle alone achieves.",
      "Higher than any single therapy; lifestyle gives about 10 to 15 percent."
    ]
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
    "explanation": "The guideline directs use of the PREVENT equation to calculate 10-year ASCVD risk. Risk stratification then guides lifestyle and statin decisions, with risk enhancers considered in borderline/intermediate patients.",
    "why": [
      "The 2026 guideline directs the PREVENT equation, not Framingham alone.",
      "Correct. The 2026 guideline uses the PREVENT-ASCVD equation to calculate 10-year risk.",
      "Angiography is not the risk-calculation tool for primary prevention.",
      "A single glucose does not calculate ASCVD risk."
    ]
  },
  {
    "id": "htn-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Epidemiology & Cost",
    "source": "Hypertensive Vascular Disease, slide 5 (Hypertension is a world-wide problem)",
    "question": "In 2019, roughly what share of adults aged 30 to 79 worldwide had hypertension?",
    "options": [
      "About 5% of adults",
      "About one third of adults (32% of women, 34% of men)",
      "About two thirds of adults",
      "Fewer than 10% of adults"
    ],
    "answer": 1,
    "explanation": "In 2019 the global prevalence of hypertension in adults aged 30 to 79 was about 32% in women and 34% in men, roughly one third of adults.",
    "why": [
      "Far too low; global prevalence is about one third of adults.",
      "Correct. In 2019 it was about 32% in women and 34% in men.",
      "Too high; it is closer to one third, not two thirds.",
      "Underestimates; about a third of adults are affected."
    ]
  },
  {
    "id": "htn-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Epidemiology & Cost",
    "source": "Hypertensive Vascular Disease, slide 5 (Hypertension is a world-wide problem)",
    "question": "Worldwide, approximately what portion of people with hypertension have it controlled?",
    "options": [
      "Only 10 to 25%",
      "About 50%",
      "About 75%",
      "Over 90%"
    ],
    "answer": 0,
    "explanation": "Only about 10 to 25 percent of people with hypertension worldwide have it controlled.",
    "why": [
      "Correct. Only about 10 to 25 percent are controlled worldwide.",
      "Too high; worldwide control is only 10 to 25 percent.",
      "Far too high; control is 10 to 25 percent worldwide.",
      "Control rates are nowhere near that high."
    ]
  },
  {
    "id": "htn-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Epidemiology & Cost",
    "source": "Hypertensive Vascular Disease, slide 8 (US National data)",
    "question": "Of US adults with hypertension, approximately what percentage have controlled blood pressure (below 130/80)?",
    "options": [
      "About 24%",
      "About 50%",
      "About 81%",
      "About 95%"
    ],
    "answer": 0,
    "explanation": "In US national data, 81% of adults with HTN are treated with medication and lifestyle modification, but only about 24% have controlled blood pressure (below 130/80).",
    "why": [
      "Correct. Only about 24% of US adults with HTN are controlled to below 130/80.",
      "Too high; only about 24% are controlled.",
      "81% are treated, but only about 24% are actually controlled.",
      "Control is far lower, about 24%."
    ]
  },
  {
    "id": "htn-004",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Epidemiology & Cost",
    "source": "Hypertensive Vascular Disease, slide 9 (Hypertension - cost)",
    "question": "Hypertension is the most prevalent modifiable CVD risk factor and the leading cause of death and disability worldwide.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Hypertension is the most prevalent modifiable CVD risk factor and the leading cause of death and disability worldwide, with total direct costs projected around $200 billion by 2030.",
    "why": [
      "Correct. HTN is the most prevalent modifiable CVD risk factor and leading cause of death and disability worldwide.",
      "Incorrect. HTN is in fact the leading modifiable cause of death and disability worldwide."
    ]
  },
  {
    "id": "htn-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Epidemiology & Cost",
    "source": "Hypertensive Vascular Disease, slide 11 (Hypertension in children)",
    "question": "How does hypertension in children differ from hypertension in adults?",
    "options": [
      "It is almost always essential (primary)",
      "It is more often due to secondary causes and defined as BP above the 90th percentile for age, height, and sex",
      "It is defined by the same 130/80 threshold as adults",
      "It never occurs before adolescence"
    ],
    "answer": 1,
    "explanation": "In children, HTN is more often secondary and is defined as BP above the 90th percentile for age, height, and sex. About 3 to 5% of children have HTN, and roughly 30% of obese adolescents.",
    "why": [
      "The opposite; childhood HTN is more often secondary than essential.",
      "Correct. Childhood HTN is more often secondary and defined as BP above the 90th percentile for age, height, and sex.",
      "Children use a percentile-based definition, not the adult 130/80 threshold.",
      "HTN does occur in children, in about 3 to 5%."
    ]
  },
  {
    "id": "htn-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Definition & Diagnosis",
    "source": "Hypertensive Vascular Disease, slide 6 (2025 Definition of HTN in Adults)",
    "question": "Per the 2025 ACC/AHA guideline, the diagnosis of hypertension is based on:",
    "options": [
      "A single elevated office reading",
      "The average of two or more BP measurements taken during two or more encounters",
      "A home reading above 140/90 on one day",
      "Any reading above 120/80"
    ],
    "answer": 1,
    "explanation": "Hypertension is diagnosed using the average of two or more blood pressure measurements taken during two or more separate encounters, not a single reading.",
    "why": [
      "A single reading is not enough; diagnosis needs averaged readings across encounters.",
      "Correct. Diagnosis uses the average of two or more readings across two or more encounters.",
      "Home readings can help, but the definition requires averaging across two or more encounters.",
      "120/80 is not the diagnostic threshold for HTN."
    ]
  },
  {
    "id": "htn-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Definition & Diagnosis",
    "source": "Hypertensive Vascular Disease, slide 50 (2025 AHA/ACC Management Guidelines)",
    "question": "The overarching blood pressure treatment goal in the 2025 AHA/ACC guideline is:",
    "options": [
      "Below 140/90",
      "Below 130/80",
      "Below 120/70",
      "Below 150/90"
    ],
    "answer": 1,
    "explanation": "The 2025 AHA/ACC guideline sets an overarching treatment goal of below 130/80 mm Hg.",
    "why": [
      "That was an older, higher goal; the 2025 goal is below 130/80.",
      "Correct. The overarching 2025 goal is below 130/80 mm Hg.",
      "Lower than the guideline goal of below 130/80.",
      "Higher than the guideline goal of below 130/80."
    ]
  },
  {
    "id": "htn-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Definition & Diagnosis",
    "source": "Hypertensive Vascular Disease, slide 50 (2025 AHA/ACC Management Guidelines)",
    "question": "For adults with stage 2 hypertension, the 2025 guideline recommends initiating:",
    "options": [
      "A single agent, titrated slowly",
      "Two first-line agents, ideally as a single combination pill",
      "Lifestyle changes alone for 6 months",
      "A beta blocker first-line"
    ],
    "answer": 1,
    "explanation": "For stage 2 HTN, initiating two first-line agents (ideally as a single combination pill) is recommended, along with lifestyle changes.",
    "why": [
      "Stage 2 usually needs two agents, not a single drug, to reach goal.",
      "Correct. Stage 2 HTN warrants two first-line agents, ideally one combination pill.",
      "Lifestyle changes are recommended for all, but stage 2 also needs two agents up front.",
      "Beta blockers are not first-line unless HF or CHD is present."
    ]
  },
  {
    "id": "htn-009",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Definition & Diagnosis",
    "source": "Hypertensive Vascular Disease, slide 50 (2025 AHA/ACC Management Guidelines)",
    "question": "Lifestyle changes are recommended for all adults, regardless of blood pressure stage.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Lifestyle changes are recommended for all adults in the 2025 guideline, across every blood pressure category.",
    "why": [
      "Correct. Lifestyle modification is recommended for all adults regardless of stage.",
      "Incorrect. Lifestyle change is universally recommended, not reserved for higher stages."
    ]
  },
  {
    "id": "htn-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 18 (Cardiovascular)",
    "question": "What is the most common cause of death in hypertensive patients?",
    "options": [
      "Renal failure",
      "Heart disease",
      "Stroke",
      "Cancer"
    ],
    "answer": 1,
    "explanation": "Heart disease is the most common cause of death in hypertensive patients.",
    "why": [
      "Renal failure is a serious complication but not the most common cause of death.",
      "Correct. Heart disease is the most common cause of death in hypertensive patients.",
      "Stroke is strongly linked to HTN, but heart disease is the leading cause of death.",
      "Cancer is not the leading cause of death in hypertensive patients."
    ]
  },
  {
    "id": "htn-011",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 18 (Cardiovascular)",
    "question": "Select ALL cardiac consequences of chronic hypertension.",
    "options": [
      "Left ventricular hypertrophy",
      "Heart failure",
      "Atrial fibrillation",
      "Coronary artery disease"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Hypertension leads to left ventricular hypertrophy, atrial enlargement, heart failure, atherosclerotic coronary artery disease, microvascular disease, and arrhythmias such as atrial fibrillation.",
    "why": [
      "Correct. LVH is a hallmark cardiac consequence of hypertension.",
      "Correct. Heart failure is a cardiac consequence of hypertension.",
      "Correct. Atrial fibrillation is an arrhythmia linked to hypertension.",
      "Correct. Atherosclerotic coronary artery disease is a cardiac consequence."
    ]
  },
  {
    "id": "htn-012",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 18 (Cardiovascular)",
    "question": "Left ventricular hypertrophy is an independent risk factor for CHD, stroke, CHF, and sudden death.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Left ventricular hypertrophy is an independent risk factor for CHD, stroke, CHF, and sudden death.",
    "why": [
      "Correct. LVH independently raises the risk of CHD, stroke, CHF, and sudden death.",
      "Incorrect. LVH is an independent risk factor for those outcomes."
    ]
  },
  {
    "id": "htn-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 19 (Brain)",
    "question": "Which statement about hypertension and stroke is correct?",
    "options": [
      "HTN is a minor contributor and most strokes are hemorrhagic",
      "Elevated BP is the strongest risk factor, and about 85% of strokes are ischemic (infarction)",
      "HTN only causes hemorrhagic strokes",
      "Treating HTN does not change stroke risk"
    ],
    "answer": 1,
    "explanation": "Elevated blood pressure is the strongest risk factor for stroke. About 85% of strokes are due to infarction (ischemic), the rest hemorrhagic. Treating HTN lowers both ischemic and hemorrhagic stroke incidence.",
    "why": [
      "HTN is the strongest risk factor, and most strokes are ischemic, not hemorrhagic.",
      "Correct. Elevated BP is the strongest stroke risk factor, and about 85% of strokes are ischemic.",
      "HTN causes both ischemic and hemorrhagic strokes; most are ischemic.",
      "Treating HTN does lower stroke incidence."
    ]
  },
  {
    "id": "htn-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 20 (Kidney)",
    "question": "Regarding hypertension and the kidney, HTN is:",
    "options": [
      "Not related to kidney disease",
      "A major risk factor for renal injury and the second most common cause of renal failure",
      "The single leading cause of kidney stones",
      "Protective against ESRD"
    ],
    "answer": 1,
    "explanation": "HTN is a major risk factor for renal injury and ESRD, and the second most common cause of renal failure. Preglomerular arteriolar lesions cause ischemic glomerular damage.",
    "why": [
      "HTN is strongly linked to kidney damage.",
      "Correct. HTN is a major risk factor for renal injury and the second most common cause of renal failure.",
      "HTN drives vascular kidney injury, not kidney stones specifically.",
      "HTN worsens, not protects against, ESRD."
    ]
  },
  {
    "id": "htn-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "End-Organ Damage",
    "source": "Hypertensive Vascular Disease, slide 21 (Peripheral vessels)",
    "question": "Independent of blood pressure level, which finding is associated with target-organ disease (stroke, heart disease, renal failure)?",
    "options": [
      "Arterial stiffness (carotid-femoral pulse wave velocity)",
      "Height",
      "Resting heart rate alone",
      "Skin turgor"
    ],
    "answer": 0,
    "explanation": "Independent of BP, arterial stiffness (measured as carotid-femoral pulse wave velocity or carotid pulse pressure) is associated with target-organ disease including stroke, heart disease, and renal failure.",
    "why": [
      "Correct. Arterial stiffness independently tracks with target-organ disease.",
      "Height is not the associated measure.",
      "Resting heart rate alone is not the described marker.",
      "Skin turgor reflects hydration, not vascular target-organ disease."
    ]
  },
  {
    "id": "htn-016",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Blood Pressure Regulation",
    "source": "Hypertensive Vascular Disease, slide 25 (Blood pressure regulation)",
    "question": "Select ALL systems and mechanisms that regulate blood pressure.",
    "options": [
      "Intravascular volume and sodium concentration",
      "Renin-Angiotensin-Aldosterone System",
      "Autonomic nervous system",
      "Vascular constriction and dilation"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Blood pressure is regulated by intravascular volume (sodium), the renin-angiotensin-aldosterone system, the autonomic nervous system, and vascular mechanisms (vasoconstriction and vasodilation).",
    "why": [
      "Correct. Intravascular volume and sodium influence blood pressure.",
      "Correct. The RAAS is a key blood pressure regulator.",
      "Correct. The autonomic nervous system regulates blood pressure.",
      "Correct. Vascular constriction and dilation regulate blood pressure."
    ]
  },
  {
    "id": "htn-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Blood Pressure Regulation",
    "source": "Hypertensive Vascular Disease, slide 28 (At the level of the Glomerulus, RAAS)",
    "question": "Renin, the initiating enzyme of the RAAS, is released from:",
    "options": [
      "Juxtaglomerular cells of the kidney",
      "The adrenal medulla",
      "Hepatocytes",
      "Cardiac myocytes"
    ],
    "answer": 0,
    "explanation": "Renin is released from the juxtaglomerular cells at the level of the glomerulus, initiating the renin-angiotensin-aldosterone system that regulates blood pressure.",
    "why": [
      "Correct. Juxtaglomerular cells release renin to initiate the RAAS.",
      "The adrenal medulla releases catecholamines, not renin.",
      "Hepatocytes make angiotensinogen, not renin.",
      "Cardiac myocytes do not release renin."
    ]
  },
  {
    "id": "htn-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Blood Pressure Regulation",
    "source": "Hypertensive Vascular Disease, slide 29 (RAAS)",
    "question": "In the RAAS, blood pressure is raised primarily through:",
    "options": [
      "Angiotensin II causing vasoconstriction and aldosterone causing sodium and water retention",
      "Vasodilation and sodium excretion",
      "Decreased cardiac output only",
      "Increased renal sodium loss"
    ],
    "answer": 0,
    "explanation": "The RAAS raises BP mainly through angiotensin II (vasoconstriction) and aldosterone (renal sodium and water retention, which expands volume).",
    "why": [
      "Correct. Angiotensin II constricts vessels and aldosterone retains sodium and water, both raising BP.",
      "That would lower BP, the opposite of the RAAS effect.",
      "The RAAS raises BP through vasoconstriction and volume, not by cutting cardiac output.",
      "The RAAS retains sodium, it does not increase sodium loss."
    ]
  },
  {
    "id": "htn-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Blood Pressure Regulation",
    "source": "Hypertensive Vascular Disease, slide 25 (Blood pressure regulation)",
    "question": "The autonomic nervous system regulates blood pressure largely through:",
    "options": [
      "Alpha and beta adrenergic receptors",
      "Insulin receptors",
      "Histamine receptors only",
      "GABA receptors"
    ],
    "answer": 0,
    "explanation": "The autonomic nervous system regulates BP largely through alpha and beta adrenergic receptors, affecting vascular tone and cardiac output.",
    "why": [
      "Correct. Alpha and beta adrenergic receptors mediate autonomic BP control.",
      "Insulin receptors are not the autonomic BP mediators described.",
      "Histamine receptors are not the primary autonomic BP mediators.",
      "GABA receptors are not involved in this pathway."
    ]
  },
  {
    "id": "htn-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Primary vs Secondary HTN",
    "source": "Hypertensive Vascular Disease, slide 30 (Primary essential vs Secondary HTN)",
    "question": "What proportion of adult hypertension is primary (essential)?",
    "options": [
      "5 to 10%",
      "About 50%",
      "90 to 95%",
      "Less than 1%"
    ],
    "answer": 2,
    "explanation": "Primary (essential) hypertension accounts for 90 to 95% of adult HTN; secondary HTN is 5 to 10%, and severe hypertension/hypertensive emergency about 1%.",
    "why": [
      "That is the share for secondary HTN, not primary.",
      "Underestimates; primary HTN is 90 to 95%.",
      "Correct. Primary (essential) HTN is 90 to 95% of adult cases.",
      "That is roughly the share of hypertensive emergency, not primary HTN."
    ]
  },
  {
    "id": "htn-021",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Primary vs Secondary HTN",
    "source": "Hypertensive Vascular Disease, slide 31 (Primary essential Hypertension)",
    "question": "Primary (essential) hypertension is multifactorial, with more than one identifiable contributing factor.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Primary (essential) HTN is multifactorial: genetics, obesity and sedentary lifestyle, alcohol, sodium intake, smoking, diabetes and dyslipidemia, and older age all contribute.",
    "why": [
      "Correct. Primary HTN is multifactorial with several contributing factors.",
      "Incorrect. Primary HTN is multifactorial, not from a single cause."
    ]
  },
  {
    "id": "htn-022",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Primary vs Secondary HTN",
    "source": "Hypertensive Vascular Disease, slide 32 (Modifiable vs unmodifiable Risk Factors)",
    "question": "Select ALL MODIFIABLE risk factors for hypertension.",
    "options": [
      "Smoking",
      "Obesity",
      "High sodium diet and alcohol",
      "Family history"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Modifiable risk factors include smoking, obesity, high sodium/alcohol/other drug intake, and physical inactivity. Family history, ethnicity, increasing age, and male sex are non-modifiable.",
    "why": [
      "Correct. Smoking is a modifiable risk factor.",
      "Correct. Obesity is a modifiable risk factor.",
      "Correct. High sodium intake and alcohol are modifiable.",
      "Incorrect. Family history is non-modifiable."
    ]
  },
  {
    "id": "htn-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Primary vs Secondary HTN",
    "source": "Hypertensive Vascular Disease, slide 33 (Secondary Hypertension)",
    "question": "Which scenario should raise concern for secondary hypertension?",
    "options": [
      "Gradual BP rise in a 55-year-old controlled on one medication",
      "Abrupt onset in a patient under 30 with HTN resistant to three or more medications",
      "Well-controlled BP on lifestyle alone",
      "A single mildly elevated reading at a health fair"
    ],
    "answer": 1,
    "explanation": "Suspect secondary HTN with abrupt onset, age under 30, HTN resistant to three or more medications, or excessive end-organ damage.",
    "why": [
      "That is a typical primary HTN picture, not a red flag for secondary.",
      "Correct. Abrupt onset, young age, and treatment resistance are red flags for secondary HTN.",
      "Well-controlled BP does not suggest a secondary cause.",
      "A single mild reading is not a red flag for secondary HTN."
    ]
  },
  {
    "id": "htn-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Primary vs Secondary HTN",
    "source": "Hypertensive Vascular Disease, slide 33 (Secondary Hypertension)",
    "question": "What is the most common cause of secondary hypertension?",
    "options": [
      "Obstructive sleep apnea",
      "Pheochromocytoma",
      "Cushing syndrome",
      "Aortic coarctation"
    ],
    "answer": 0,
    "explanation": "Obstructive sleep apnea is the most common cause of secondary HTN (25 to 50%), followed by primary aldosteronism (5 to 25%).",
    "why": [
      "Correct. OSA is the most common secondary cause, 25 to 50%.",
      "Pheochromocytoma is rare, about 0.6%.",
      "Cushing syndrome is uncommon, about 0.1%.",
      "Aortic coarctation is uncommon, about 0.1%."
    ]
  },
  {
    "id": "htn-025",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 35 (Secondary HTN cause/test table)",
    "question": "Match each secondary cause of hypertension to its diagnostic test.",
    "pairs": [
      {
        "left": "Renal artery stenosis",
        "right": "Doppler ultrasound, CTA, or MRA",
        "why": "Imaging of the renal arteries (Doppler ultrasound, CTA, or MRA) confirms renal artery stenosis."
      },
      {
        "left": "Primary aldosteronism",
        "right": "Aldosterone-to-renin ratio",
        "why": "An elevated aldosterone-to-renin ratio screens for primary aldosteronism."
      },
      {
        "left": "Pheochromocytoma",
        "right": "24-hour urine metanephrines",
        "why": "24-hour urine metanephrines (and MRI) evaluate for pheochromocytoma."
      },
      {
        "left": "Obstructive sleep apnea",
        "right": "Sleep study",
        "why": "A sleep study diagnoses obstructive sleep apnea."
      }
    ],
    "explanation": "Each secondary cause has a targeted test: renal artery stenosis (Doppler ultrasound, CTA, or MRA), primary aldosteronism (aldosterone-to-renin ratio, adrenal CT), pheochromocytoma (24-hour urine metanephrines, MRI), and OSA (sleep study)."
  },
  {
    "id": "htn-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 35 (Secondary HTN cause/test table)",
    "question": "An abdominal bruit with resistant hypertension, especially early-onset in a young woman, suggests:",
    "options": [
      "Renal artery stenosis (fibromuscular dysplasia)",
      "Hypothyroidism",
      "Cushing syndrome",
      "Primary aldosteronism"
    ],
    "answer": 0,
    "explanation": "Abdominal bruits with resistant HTN, especially early onset in women (fibromuscular dysplasia), point to renal artery stenosis.",
    "why": [
      "Correct. Abdominal bruit plus resistant, early-onset HTN in a young woman suggests renal artery stenosis from fibromuscular dysplasia.",
      "Hypothyroidism presents with weight gain, cold intolerance, and dry skin.",
      "Cushing presents with weight gain and other cortisol-excess features.",
      "Primary aldosteronism is screened by the aldosterone/renin ratio and often shows hypokalemia."
    ]
  },
  {
    "id": "htn-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 35 (Secondary HTN cause/test table)",
    "question": "A patient with resistant HTN and unprovoked or diuretic-associated hypokalemia should be screened for:",
    "options": [
      "Primary aldosteronism (aldosterone-to-renin ratio)",
      "Hyperthyroidism",
      "Renal artery stenosis",
      "Pheochromocytoma"
    ],
    "answer": 0,
    "explanation": "Hypokalemia (especially with diuretic use), muscle cramps, and weakness with resistant HTN suggest primary aldosteronism; screen with the aldosterone-to-renin ratio.",
    "why": [
      "Correct. Hypokalemia with resistant HTN points to primary aldosteronism, screened by the aldosterone/renin ratio.",
      "Hyperthyroidism causes weight loss, heat intolerance, and tremor rather than this pattern.",
      "Renal artery stenosis is suggested by abdominal bruits, not primarily hypokalemia.",
      "Pheochromocytoma causes labile BP with headache, palpitations, and sweating."
    ]
  },
  {
    "id": "htn-028",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 35 (Secondary HTN cause/test table)",
    "question": "Labile blood pressure with episodic headache, palpitations, and sweating is most suggestive of:",
    "options": [
      "Pheochromocytoma",
      "Obstructive sleep apnea",
      "Hypothyroidism",
      "Aortic coarctation"
    ],
    "answer": 0,
    "explanation": "Labile BP with headache, palpitations, and sweating suggests pheochromocytoma; confirm with 24-hour urine metanephrines and MRI.",
    "why": [
      "Correct. Labile BP with headache, palpitations, and sweating is the classic pheochromocytoma picture.",
      "OSA presents with snoring and daytime sleepiness, not episodic catecholamine surges.",
      "Hypothyroidism causes fatigue and cold intolerance, not this pattern.",
      "Coarctation presents with differential blood pressure between the arms and legs."
    ]
  },
  {
    "id": "htn-029",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 36 (Secondary HTN causes by age)",
    "question": "In children aged 0 to 12 with hypertension, the likelihood and most common cause of a secondary etiology is:",
    "options": [
      "An underlying cause is rare (under 5%)",
      "70 to 85% have an identifiable underlying cause, most commonly renal parenchymal disease",
      "Essential HTN accounts for nearly all cases",
      "Pheochromocytoma is the most common cause"
    ],
    "answer": 1,
    "explanation": "In children 0 to 12, an underlying (secondary) cause is found in 70 to 85%, most commonly renal parenchymal disease. Secondary causes become progressively less common with age.",
    "why": [
      "The opposite; most young children with HTN have a secondary cause.",
      "Correct. 70 to 85% of young children with HTN have a secondary cause, usually renal parenchymal disease.",
      "Essential HTN dominates in adults, not young children.",
      "Renal parenchymal disease, not pheochromocytoma, is the most common cause in this age group."
    ]
  },
  {
    "id": "htn-030",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Secondary Causes",
    "source": "Hypertensive Vascular Disease, slide 33 (Secondary Hypertension)",
    "question": "Select ALL listed common causes of secondary hypertension.",
    "options": [
      "Obstructive sleep apnea",
      "Primary aldosteronism",
      "Renal artery stenosis",
      "Seasonal allergies"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Common secondary causes include OSA, primary aldosteronism, renal artery stenosis, Cushing syndrome, aortic coarctation, and pheochromocytoma. Seasonal allergies are not a cause.",
    "why": [
      "Correct. OSA is a common secondary cause.",
      "Correct. Primary aldosteronism is a common secondary cause.",
      "Correct. Renal artery stenosis is a listed secondary cause.",
      "Incorrect. Seasonal allergies are not a cause of secondary HTN."
    ]
  },
  {
    "id": "htn-031",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "History & Physical Exam",
    "source": "Hypertensive Vascular Disease, slide 40 (Risk Assessment/History taking in HTN)",
    "question": "Select ALL history elements important in assessing a hypertensive patient.",
    "options": [
      "Duration of HTN and prior therapies",
      "Family history of HTN and CV disease",
      "Symptoms suggesting a secondary cause",
      "Favorite color"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Key history includes duration of HTN, prior therapies and side effects, family history of HTN and CVD, diet and psychosocial factors, comorbidities, and clues to secondary causes or end-organ damage.",
    "why": [
      "Correct. Duration and prior therapy responses guide management.",
      "Correct. Family history of HTN and CVD is important.",
      "Correct. Symptoms of a secondary cause should be sought.",
      "Incorrect. Favorite color has no clinical relevance."
    ]
  },
  {
    "id": "htn-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "History & Physical Exam",
    "source": "Hypertensive Vascular Disease, slide 44 (Physical exam)",
    "question": "On cardiac exam of a hypertensive patient, an S4 gallop reflects:",
    "options": [
      "Atrial contraction forcing blood into a stiff, non-compliant left ventricle",
      "Rapid filling of a dilated ventricle in heart failure",
      "A normal finding in all adults",
      "Severe mitral regurgitation"
    ],
    "answer": 0,
    "explanation": "S4 is a late-diastolic presystolic gallop from atrial contraction against a stiff, non-compliant LV, common in HTN with LVH. S3 by contrast reflects sudden decreased filling of a dilated LV in heart failure.",
    "why": [
      "Correct. S4 is atrial contraction into a stiff, non-compliant LV.",
      "That describes S3, not S4.",
      "S4 is not a normal finding; it reflects a stiff ventricle.",
      "S4 relates to ventricular compliance, not mitral regurgitation."
    ]
  },
  {
    "id": "htn-033",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "History & Physical Exam",
    "source": "Hypertensive Vascular Disease, slide 47 (Fundoscopic findings in HTN)",
    "question": "Match each hypertensive fundoscopic finding to its description.",
    "pairs": [
      {
        "left": "AV nicking",
        "right": "Arteriolar narrowing indenting the veins",
        "why": "AV nicking is arteriolar narrowing that indents the crossing venules in chronic HTN."
      },
      {
        "left": "Hard exudates",
        "right": "Leaked lipids and proteins",
        "why": "Hard exudates are leaked lipids and proteins."
      },
      {
        "left": "Papilledema",
        "right": "Swelling from increased intracranial pressure",
        "why": "Papilledema is optic disc swelling from increased intracranial pressure."
      },
      {
        "left": "Cotton wool spots",
        "right": "Retinal ischemia",
        "why": "Cotton wool spots reflect retinal nerve-fiber-layer ischemia."
      }
    ],
    "explanation": "Hypertensive fundoscopic findings: AV nicking (arteriolar narrowing indenting veins), hemorrhages (extravasation), hard exudates (leaked lipids and proteins), papilledema (swelling from raised intracranial pressure), and cotton wool spots (ischemia)."
  },
  {
    "id": "htn-034",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "History & Physical Exam",
    "source": "Hypertensive Vascular Disease, slide 44 (Physical exam)",
    "question": "Select ALL components of the physical exam in a hypertensive patient.",
    "options": [
      "Accurate BP measurement",
      "Fundoscopic exam",
      "Palpation of the thyroid",
      "Genetic karyotyping"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The HTN physical exam includes accurate BP measurement, cardiac auscultation, peripheral pulses and carotid bruits, fundoscopic exam, abdominal exam (AAA, renal bruits), and thyroid palpation. Karyotyping is not routine.",
    "why": [
      "Correct. Accurate BP measurement is central.",
      "Correct. Fundoscopic exam checks for hypertensive retinopathy.",
      "Correct. Thyroid palpation screens for a contributing thyroid disorder.",
      "Incorrect. Genetic karyotyping is not part of the routine HTN exam."
    ]
  },
  {
    "id": "htn-035",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "History & Physical Exam",
    "source": "Hypertensive Vascular Disease, slide 40 (Risk Assessment/History taking in HTN)",
    "question": "Which history finding is evidence of hypertensive end-organ damage?",
    "options": [
      "Prior stroke or TIA",
      "Recent common cold",
      "Seasonal allergies",
      "Occasional caffeine use"
    ],
    "answer": 0,
    "explanation": "Evidence of end-organ damage on history includes acute coronary syndrome, heart failure, stroke or TIA, and erectile dysfunction.",
    "why": [
      "Correct. A prior stroke or TIA is evidence of hypertensive end-organ damage.",
      "A common cold is unrelated to end-organ damage.",
      "Seasonal allergies are not end-organ damage.",
      "Occasional caffeine use is not end-organ damage."
    ]
  },
  {
    "id": "htn-036",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Labs & Workup",
    "source": "Hypertensive Vascular Disease, slide 49 (Basic Lab Testing)",
    "question": "Select ALL tests that are part of the basic laboratory workup for hypertension.",
    "options": [
      "Fasting glucose or HbA1c",
      "Lipid profile",
      "12-lead ECG",
      "Bone density scan"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Basic HTN labs: fasting glucose or HbA1c, CBC, metabolic profile, lipid profile, TSH, urinalysis with albumin/creatinine ratio, and a 12-lead ECG. Bone density scanning is not part of the workup.",
    "why": [
      "Correct. Fasting glucose or HbA1c is part of the basic workup.",
      "Correct. A lipid profile is part of the basic workup.",
      "Correct. A 12-lead ECG is part of the basic workup.",
      "Incorrect. Bone density scanning is not part of the HTN workup."
    ]
  },
  {
    "id": "htn-037",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Labs & Workup",
    "source": "Hypertensive Vascular Disease, slide 49 (Basic Lab Testing)",
    "question": "Which test is listed as OPTIONAL in the basic hypertension workup?",
    "options": [
      "Coronary artery calcium score",
      "Urinalysis",
      "Metabolic profile",
      "12-lead ECG"
    ],
    "answer": 0,
    "explanation": "Optional tests include serum uric acid, echocardiogram, CXR, and coronary artery calcium. Urinalysis, metabolic profile, and a 12-lead ECG are part of the basic panel.",
    "why": [
      "Correct. Coronary artery calcium is an optional test.",
      "Urinalysis is part of the basic panel, not optional.",
      "The metabolic profile is part of the basic panel.",
      "A 12-lead ECG is part of the basic panel."
    ]
  },
  {
    "id": "htn-038",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Labs & Workup",
    "source": "Hypertensive Vascular Disease, slide 49 (Basic Lab Testing)",
    "question": "A urinalysis with albumin/creatinine ratio is part of the basic hypertension workup.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Urinalysis, including an albumin/creatinine ratio, is part of the basic hypertension workup and screens for renal end-organ damage.",
    "why": [
      "Correct. Urinalysis with albumin/creatinine ratio is part of the basic workup.",
      "Incorrect. It is included, and it screens for renal damage."
    ]
  },
  {
    "id": "htn-039",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 60 (Medications for HTN)",
    "question": "Match each first-line antihypertensive drug class to its example medications.",
    "pairs": [
      {
        "left": "Thiazide diuretic",
        "right": "Chlorthalidone, HCTZ",
        "why": "Thiazide diuretics include chlorthalidone and HCTZ."
      },
      {
        "left": "Long-acting calcium channel blocker",
        "right": "Amlodipine, Nifedipine LA",
        "why": "Dihydropyridine calcium channel blockers include amlodipine and nifedipine LA."
      },
      {
        "left": "ACE inhibitor",
        "right": "Enalapril, Lisinopril",
        "why": "ACE inhibitors include enalapril and lisinopril."
      },
      {
        "left": "ARB",
        "right": "Valsartan, Losartan",
        "why": "ARBs include valsartan and losartan."
      }
    ],
    "explanation": "The four first-line classes and examples: thiazide diuretics (chlorthalidone, HCTZ), long-acting dihydropyridine CCBs (amlodipine, nifedipine LA), ACE inhibitors (enalapril, lisinopril), and ARBs (valsartan, losartan)."
  },
  {
    "id": "htn-040",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 60 (Medications for HTN)",
    "question": "Select ALL first-line drug classes for uncomplicated hypertension.",
    "options": [
      "Thiazide diuretics",
      "ACE inhibitors or ARBs",
      "Calcium channel blockers",
      "Beta blockers"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The four first-line classes for uncomplicated HTN are thiazide diuretics, ACE inhibitors, ARBs, and calcium channel blockers. Beta blockers are first-line only in patients with heart failure or CHD.",
    "why": [
      "Correct. Thiazide diuretics are a first-line class.",
      "Correct. ACE inhibitors and ARBs are first-line.",
      "Correct. Calcium channel blockers are first-line.",
      "Incorrect. Beta blockers are first-line only with HF or CHD, not uncomplicated HTN."
    ]
  },
  {
    "id": "htn-041",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 60 (Medications for HTN)",
    "question": "Beta blockers should be used as first-line antihypertensives only in patients with:",
    "options": [
      "Heart failure or coronary heart disease",
      "Uncomplicated stage 1 HTN",
      "White-coat hypertension",
      "No comorbidities"
    ],
    "answer": 0,
    "explanation": "Beta blockers (atenolol, metoprolol, bisoprolol) should be first-line only in patients with heart failure or coronary heart disease, not in uncomplicated HTN.",
    "why": [
      "Correct. Beta blockers are first-line only with HF or CHD.",
      "Uncomplicated HTN is treated with the other four classes first.",
      "White-coat HTN is not an indication for first-line beta blockade.",
      "Without a compelling comorbidity, beta blockers are not first-line."
    ]
  },
  {
    "id": "htn-042",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 61 (Where do these medications work?)",
    "question": "ACE inhibitors and ARBs lower blood pressure in part by:",
    "options": [
      "Dilating the efferent arteriole",
      "Constricting the afferent arteriole",
      "Blocking calcium channels in the heart",
      "Increasing aldosterone"
    ],
    "answer": 0,
    "explanation": "ACE inhibitors and ARBs dilate the efferent arteriole (by reducing angiotensin II), lowering glomerular pressure and blood pressure.",
    "why": [
      "Correct. ACE inhibitors and ARBs dilate the efferent arteriole.",
      "They do not constrict the afferent arteriole.",
      "Calcium channel blockade is a different class's mechanism.",
      "ACE inhibitors and ARBs decrease aldosterone, they do not increase it."
    ]
  },
  {
    "id": "htn-043",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 58 (DASH Diet and lifestyle modification)",
    "question": "Select ALL recommended lifestyle modifications for hypertension.",
    "options": [
      "Weight loss and a DASH-style diet",
      "Sodium reduction and potassium supplementation",
      "Regular physical activity and reduced alcohol",
      "Increasing red meat and sodium"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Recommended lifestyle modifications: a healthful (DASH) diet, weight loss, sodium reduction, potassium supplementation, physical activity, and reduced alcohol intake. Increasing sodium is counterproductive.",
    "why": [
      "Correct. Weight loss and a DASH-style diet are recommended.",
      "Correct. Sodium reduction and potassium supplementation are recommended.",
      "Correct. Physical activity and reduced alcohol are recommended.",
      "Incorrect. Increasing red meat and sodium would raise blood pressure."
    ]
  },
  {
    "id": "htn-044",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 52 (PREVENT-CVD risk calculator)",
    "question": "Which statement about the PREVENT CVD risk calculator is TRUE?",
    "options": [
      "It includes race as a variable",
      "It predicts 10-year CVD risk in patients 30 to 79 with no known CVD and uses zip code instead of race",
      "It requires a fasting LDL",
      "It is only for patients over 80"
    ],
    "answer": 1,
    "explanation": "PREVENT predicts 10-year CVD risk in patients 30 to 79 with no known CVD. It drops race, adds zip code (as a social deprivation index), and is no longer based on LDL.",
    "why": [
      "PREVENT deliberately no longer includes race.",
      "Correct. PREVENT estimates 10-year risk in ages 30 to 79 without known CVD and uses zip code instead of race.",
      "PREVENT is no longer based on LDL.",
      "PREVENT is for ages 30 to 79, not only over 80."
    ]
  },
  {
    "id": "htn-045",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slides 51, 54 (2025 guideline updates; case)",
    "question": "A 47-year-old man is seen for possible new-onset hypertension. His BP averages 134/82, his PREVENT 10-year CVD risk is 5%, and he has no diabetes, CKD, or ASCVD. Per the 2025 guideline, the best next step is:",
    "options": [
      "Start two medications immediately",
      "Try lifestyle modification first and start medication if BP is not controlled after 3 to 6 months",
      "Never offer medication",
      "Start a beta blocker first-line"
    ],
    "answer": 1,
    "explanation": "With BP above 130/80 and PREVENT risk below 7.5% (and no diabetes, CKD, or ASCVD), start with lifestyle modification and add medication if lifestyle changes do not work after 3 to 6 months. Patients with diabetes, CKD, or risk above 7.5% should start medication.",
    "why": [
      "Immediate two-drug therapy is for stage 2 HTN, not this lower-risk scenario.",
      "Correct. Lower-risk patients try lifestyle first, adding medication if uncontrolled after 3 to 6 months.",
      "Medication is still an option if lifestyle change fails.",
      "Beta blockers are not first-line here."
    ]
  },
  {
    "id": "htn-046",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "2025 Management Guidelines",
    "source": "Hypertensive Vascular Disease, slide 56 (Ambulatory blood pressure monitoring)",
    "question": "Ambulatory blood pressure monitoring (ABPM) is especially useful for:",
    "options": [
      "Confirming suspected white-coat or masked hypertension",
      "Replacing all office visits permanently",
      "Diagnosing sleep apnea",
      "Measuring cholesterol"
    ],
    "answer": 0,
    "explanation": "ABPM (a 24-hour device averaging day and night readings) helps evaluate BP discrepancies, suspected white-coat HTN (15 to 20% of patients), masked HTN, episodic HTN, and resistant HTN.",
    "why": [
      "Correct. ABPM helps confirm white-coat and masked hypertension.",
      "ABPM complements office monitoring, it does not replace it.",
      "Sleep apnea is diagnosed with a sleep study, not ABPM.",
      "ABPM measures blood pressure, not cholesterol."
    ]
  },
  {
    "id": "htn-047",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slide 66 (racial and ethnic differences in HTN)",
    "question": "In the US, non-Hispanic Black adults with hypertension tend to have:",
    "options": [
      "Lower rates and better control than other groups",
      "Higher rates, earlier onset, less adequate control, and higher CVD/stroke/ESRD morbidity",
      "No difference from other groups",
      "Higher rates but better outcomes"
    ],
    "answer": 1,
    "explanation": "Non-Hispanic Black patients have higher HTN rates, earlier diagnosis, less adequate control, and higher morbidity and mortality from CVD, stroke, and ESRD.",
    "why": [
      "The opposite; rates are higher and control is worse in this group.",
      "Correct. Non-Hispanic Black adults have higher rates, earlier onset, worse control, and worse outcomes.",
      "There are significant disparities, not an absence of difference.",
      "Outcomes are worse, not better."
    ]
  },
  {
    "id": "htn-048",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slide 67 (Race is a social construct)",
    "question": "The deck frames race as a social construct rather than a biologic reality, with disparities reflecting diet, environment, socioeconomics, structural racism, and physiology.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. The deck emphasizes that race is a social construct, not a biologic reality, and that disparities reflect dietary, environmental, and socioeconomic factors, structural racism and stress, and physiology.",
    "why": [
      "Correct. Race is framed as a social construct, and disparities are multifactorial.",
      "Incorrect. The deck explicitly frames race as a social construct, not a biologic one."
    ]
  },
  {
    "id": "htn-049",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slide 69 (Effects of SDOH on HTN)",
    "question": "Select ALL social determinants of health that worsen hypertension control.",
    "options": [
      "Limited access to care and lack of insurance",
      "Food insecurity and poor diet",
      "Low English proficiency",
      "High health literacy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Social determinants worsening HTN include limited access to care, lack of insurance, food insecurity and poor diet, and low English proficiency. High health literacy is protective, not a barrier.",
    "why": [
      "Correct. Limited care access and lack of insurance worsen HTN.",
      "Correct. Food insecurity and poor diet worsen HTN.",
      "Correct. Low English proficiency is a barrier to control.",
      "Incorrect. High health literacy helps control, it is not a barrier."
    ]
  },
  {
    "id": "htn-050",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slide 75 (Hypertensive crisis)",
    "question": "A hypertensive crisis is generally defined as a blood pressure of:",
    "options": [
      "140/90 or higher",
      "160/100 or higher",
      "180/120 or higher",
      "200/140 or higher"
    ],
    "answer": 2,
    "explanation": "A hypertensive crisis is a BP of 180/120 mm Hg or an acute rise above baseline. It is divided into severe hypertension (urgency) and hypertensive emergency.",
    "why": [
      "That is stage 2 HTN, not a crisis.",
      "Still below the crisis threshold.",
      "Correct. A hypertensive crisis is BP of 180/120 or an acute rise above baseline.",
      "Higher than the defining threshold of 180/120."
    ]
  },
  {
    "id": "htn-051",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slides 76-77 (Severe HTN vs Hypertensive Emergency)",
    "question": "The key difference between hypertensive urgency (severe hypertension) and a hypertensive emergency is:",
    "options": [
      "The presence of acute target-organ damage in an emergency",
      "The exact systolic number",
      "Whether the patient is over 65",
      "Whether the patient is on medication"
    ],
    "answer": 0,
    "explanation": "Both involve BP around 180/120. A hypertensive emergency has acute target-organ damage (such as encephalopathy, stroke, MI, pulmonary edema, AKI, or aortic dissection) and needs ICU IV therapy; urgency is asymptomatic without target-organ damage and is managed with gradual oral adjustment over 24 to 48 hours.",
    "why": [
      "Correct. Target-organ damage defines a hypertensive emergency versus urgency.",
      "Both share a similar BP; the distinction is target-organ damage.",
      "Age does not define the difference.",
      "Medication status does not define the difference."
    ]
  },
  {
    "id": "htn-052",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Hypertensive Vascular Disease",
    "section": "Disparities, Adherence & Crisis",
    "source": "Hypertensive Vascular Disease, slide 76 (Severe Hypertension / Hypertensive Urgency)",
    "question": "A 58-year-old woman presents with BP 184/122 and no symptoms; her exam and basic labs show no signs of acute target-organ damage. The most appropriate management is:",
    "options": [
      "Immediate IV antihypertensives in the ICU",
      "Gradual lowering with oral medications over 24 to 48 hours in the outpatient setting",
      "Rapid normalization within 1 hour",
      "No treatment at all"
    ],
    "answer": 1,
    "explanation": "This is hypertensive urgency (asymptomatic, no target-organ damage). It does not require the ER or hospital; restart or adjust oral medications and lower BP gradually over 24 to 48 hours. A hypertensive emergency instead needs ICU IV therapy with controlled MAP reduction.",
    "why": [
      "ICU IV therapy is for a hypertensive emergency with target-organ damage.",
      "Correct. Urgency is managed with gradual oral adjustment over 24 to 48 hours as an outpatient.",
      "Rapid normalization risks hypoperfusion and is not recommended here.",
      "It does require treatment, just gradual and oral."
    ]
  }
];

if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; }
