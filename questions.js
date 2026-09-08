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
  },
  {
    "id": "acs-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "CAD Terminology & Clinical Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 4 (CAD Terminology)",
    "question": "The term ischemic heart disease (IHD) emphasizes:",
    "options": [
      "Reduced blood supply and oxygen delivery to the myocardium",
      "Plaque buildup specifically within the coronary arteries",
      "Disease of the heart valves",
      "Inflammation of the pericardium"
    ],
    "answer": 0,
    "explanation": "Ischemic heart disease (IHD) emphasizes reduced blood supply and oxygen delivery to the myocardium. Coronary atherosclerosis refers specifically to plaque buildup within the coronary arteries, and CAD is disease of the coronary arteries due to atherosclerosis.",
    "why": [
      "Correct. IHD emphasizes reduced blood supply and oxygen delivery to the myocardium.",
      "That defines coronary atherosclerosis, not the emphasis of IHD.",
      "IHD concerns myocardial blood supply, not the valves.",
      "That is pericarditis, unrelated to the IHD term."
    ]
  },
  {
    "id": "acs-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "CAD Terminology & Clinical Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 5 (CAD Overview)",
    "question": "Coronary artery disease is caused by:",
    "options": [
      "Atherosclerotic plaque formation narrowing the coronary artery lumen",
      "A congenital absence of the coronary arteries",
      "Bacterial infection of the myocardium",
      "Excess pericardial fluid"
    ],
    "answer": 0,
    "explanation": "CAD is caused by atherosclerotic plaque formation within the coronary arteries, narrowing the vessel lumen: atherosclerosis leads to plaque formation, reduced coronary blood flow, and myocardial ischemia.",
    "why": [
      "Correct. Atherosclerotic plaque narrows the lumen and reduces coronary flow.",
      "The coronary arteries are present; the problem is plaque narrowing.",
      "CAD is atherosclerotic, not an infectious myocarditis.",
      "That describes a pericardial effusion, not CAD."
    ]
  },
  {
    "id": "acs-003",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "CAD Terminology & Clinical Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 6 (Clinical Spectrum: CAD)",
    "question": "CAD is often asymptomatic early in the disease process.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. CAD is often asymptomatic early. As it progresses, gradual plaque growth causes stenosis and stable angina, or plaque rupture causes thrombus and acute coronary syndrome.",
    "why": [
      "Correct. CAD is frequently silent early, becoming symptomatic as it progresses.",
      "Incorrect. Early CAD is commonly asymptomatic."
    ]
  },
  {
    "id": "acs-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "CAD Terminology & Clinical Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 6 (Clinical Spectrum: CAD)",
    "question": "As CAD progresses it can follow two paths. Which pairing is correct?",
    "options": [
      "Gradual plaque growth leads to stable angina; plaque rupture leads to ACS/MI",
      "Gradual plaque growth leads to STEMI; plaque rupture leads to stable angina",
      "Both paths always lead to sudden death",
      "Neither path produces symptoms"
    ],
    "answer": 0,
    "explanation": "Gradual plaque growth causes coronary stenosis and decreased oxygen delivery, producing stable angina. Alternatively, plaque rupture causes thrombus formation and an acute reduction in blood flow, producing acute coronary syndrome or myocardial infarction.",
    "why": [
      "Correct. Slow growth causes stable angina; rupture causes ACS/MI.",
      "Reversed; rupture, not slow growth, causes STEMI.",
      "Not all CAD leads to sudden death.",
      "Progressive CAD does produce symptoms such as angina."
    ]
  },
  {
    "id": "acs-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Epidemiology & Risk Factors",
    "source": "Ischemic Heart Disease & ACS, slide 9 (Epidemiology of CAD)",
    "question": "Approximately how many US adults have chronic coronary disease?",
    "options": [
      "About 2 million",
      "About 20 million",
      "About 200,000",
      "About 100 million"
    ],
    "answer": 1,
    "explanation": "Approximately 20 million US adults have chronic coronary disease. ACS accounts for about 1 million annual hospital admissions, with roughly 605,000 new and 210,000 recurrent MIs each year.",
    "why": [
      "Underestimates; about 20 million US adults are affected.",
      "Correct. About 20 million US adults have chronic coronary disease.",
      "Far too low; the figure is about 20 million.",
      "Too high; it is about 20 million, not 100 million."
    ]
  },
  {
    "id": "acs-006",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Epidemiology & Risk Factors",
    "source": "Ischemic Heart Disease & ACS, slide 11 (Risk Factors)",
    "question": "Select ALL MODIFIABLE risk factors for CAD.",
    "options": [
      "Hypertension and dyslipidemia",
      "Tobacco use",
      "Type II diabetes",
      "Male sex"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Modifiable risk factors include hypertension, dyslipidemia, type II diabetes, obesity, metabolic syndrome, sedentary lifestyle, tobacco, the Standard American Diet, alcohol, cocaine, stress, and shift work. Age, male sex, family history of premature CAD, and genetics are non-modifiable.",
    "why": [
      "Correct. Hypertension and dyslipidemia are modifiable.",
      "Correct. Tobacco use is modifiable.",
      "Correct. Type II diabetes (hyperglycemia) is modifiable.",
      "Incorrect. Male sex is a non-modifiable risk factor."
    ]
  },
  {
    "id": "acs-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Epidemiology & Risk Factors",
    "source": "Ischemic Heart Disease & ACS, slide 11 (Risk Factors)",
    "question": "Family history of premature CAD is defined as a fatal or non-fatal cardiovascular event before what age?",
    "options": [
      "Before 55 in men and before 65 in women",
      "Before 65 in men and before 55 in women",
      "Before 40 in both sexes",
      "Before 75 in both sexes"
    ],
    "answer": 0,
    "explanation": "A family history of premature CAD means a fatal or non-fatal cardiovascular event before age 55 in male relatives and before age 65 in female relatives.",
    "why": [
      "Correct. The cutoffs are under 55 for men and under 65 for women.",
      "Reversed; it is under 55 for men and under 65 for women.",
      "The cutoffs are 55 (men) and 65 (women), not 40.",
      "The cutoffs are 55 (men) and 65 (women), not 75."
    ]
  },
  {
    "id": "acs-008",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Epidemiology & Risk Factors",
    "source": "Ischemic Heart Disease & ACS, slide 12 (Psychological Risk Factors)",
    "question": "Select ALL psychological risk factors associated with increased CAD.",
    "options": [
      "Depression and anxiety",
      "Social isolation",
      "Chronic hostility (anger)",
      "High self-esteem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Psychological risk factors associated with increased CAD include low socioeconomic status, work and family stress, social isolation, depression, anxiety, hostility, PTSD, and a distressed personality.",
    "why": [
      "Correct. Depression and anxiety are psychological CAD risk factors.",
      "Correct. Social isolation is a psychological CAD risk factor.",
      "Correct. Chronic hostility is a psychological CAD risk factor.",
      "Incorrect. High self-esteem is not a listed risk factor."
    ]
  },
  {
    "id": "acs-009",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Epidemiology & Risk Factors",
    "source": "Ischemic Heart Disease & ACS, slide 13 (Infectious Risk Factor)",
    "question": "Periodontal disease is listed as an infectious risk factor for CAD.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. The deck lists periodontal disease as an infectious risk factor associated with CAD.",
    "why": [
      "Correct. Periodontal disease is the listed infectious risk factor.",
      "Incorrect. Periodontal disease is specifically listed as an infectious risk factor."
    ]
  },
  {
    "id": "acs-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 16 (The Healthy Endothelium)",
    "question": "Which substance produced by healthy endothelium causes vasodilation?",
    "options": [
      "Nitric oxide",
      "Endothelin-1",
      "Tissue factor",
      "Thromboxane"
    ],
    "answer": 0,
    "explanation": "Healthy endothelium produces nitric oxide (vasodilation) and prostacyclin (vasodilation plus platelet inhibition). Endothelin-1 causes vasoconstriction. A healthy endothelium is a vasodilatory, anti-inflammatory, and antithrombotic surface.",
    "why": [
      "Correct. Nitric oxide is the endothelial vasodilator.",
      "Endothelin-1 causes vasoconstriction, not vasodilation.",
      "Tissue factor promotes coagulation, not vasodilation.",
      "Thromboxane promotes platelet aggregation and vasoconstriction."
    ]
  },
  {
    "id": "acs-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 18 (The Fatty Streak)",
    "question": "In the fatty streak, which cells consume oxidized LDL to become foam cells?",
    "options": [
      "Macrophages (derived from monocytes)",
      "Erythrocytes",
      "Neutrophils only",
      "Platelets"
    ],
    "answer": 0,
    "explanation": "After LDL enters the intima and is oxidized, monocytes enter and become macrophages that consume the LDL, forming foam cells. Foam cells plus lipid form the fatty streak.",
    "why": [
      "Correct. Monocyte-derived macrophages engulf oxidized LDL to become foam cells.",
      "Erythrocytes carry oxygen and do not form foam cells.",
      "The key cells are macrophages, not neutrophils.",
      "Platelets drive thrombosis, not foam-cell formation."
    ]
  },
  {
    "id": "acs-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 19 (Plaque Formation)",
    "question": "A mature fibroatheroma contains a lipid-rich necrotic core covered by:",
    "options": [
      "A fibrous cap of smooth muscle and collagen",
      "A layer of red blood cells",
      "Only endothelium",
      "Calcified valve tissue"
    ],
    "answer": 0,
    "explanation": "As inflammation persists, foam cells accumulate and die, forming a necrotic lipid core. Smooth muscle migration and collagen production create a fibrous cap. The mature plaque contains a lipid-rich necrotic center, inflammatory cells, smooth muscle cells, and a fibrous cap.",
    "why": [
      "Correct. A fibrous cap of smooth muscle and collagen overlies the necrotic core.",
      "The cap is fibrous tissue, not red blood cells.",
      "The plaque is more than endothelium; it has a fibrous cap and necrotic core.",
      "That describes valvular calcification, not a coronary plaque."
    ]
  },
  {
    "id": "acs-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 20 (Stable vs Unstable Plaque)",
    "question": "A vulnerable (unstable) plaque is characterized by:",
    "options": [
      "A thin fibrous cap, large lipid core, and high inflammation",
      "A thick fibrous cap and small lipid core",
      "Complete absence of lipid",
      "Dense calcification with no lipid core"
    ],
    "answer": 0,
    "explanation": "A vulnerable plaque has a thin fibrous cap, large lipid core, and high inflammation, making it prone to rupture. A stable plaque has a thick fibrous cap, smaller lipid core, and less inflammation, causing gradual narrowing and predictable (stable) angina.",
    "why": [
      "Correct. Thin cap, large lipid core, and high inflammation define a vulnerable plaque.",
      "That describes a stable plaque, not a vulnerable one.",
      "Vulnerable plaques have a large lipid core, not an absence of lipid.",
      "Vulnerability is driven by a thin cap and lipid core, not dense calcification."
    ]
  },
  {
    "id": "acs-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 21 (Why Plaque Rupture Causes MI)",
    "question": "After plaque rupture and thrombus formation, complete coronary occlusion typically produces:",
    "options": [
      "STEMI",
      "Stable angina",
      "A normal ECG",
      "Partial occlusion with NSTEMI"
    ],
    "answer": 0,
    "explanation": "Plaque rupture exposes collagen, tissue factor, and lipid, triggering platelet adhesion, activation, aggregation, and thrombus. Partial occlusion causes ischemia or NSTEMI; complete occlusion causes STEMI. Plaque stability, not just blockage size, predicts danger.",
    "why": [
      "Correct. Complete occlusion produces a STEMI.",
      "Stable angina reflects fixed stenosis, not acute complete occlusion.",
      "Complete occlusion causes ST elevation, not a normal ECG.",
      "Partial occlusion causes NSTEMI; complete occlusion causes STEMI."
    ]
  },
  {
    "id": "acs-015",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Pathophysiology: Endothelium to Plaque",
    "source": "Ischemic Heart Disease & ACS, slide 21 (Why Plaque Rupture Causes MI)",
    "question": "The size of the blockage always predicts the danger of a coronary plaque.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. The size of the blockage does not always predict the danger; plaque stability matters. A smaller but vulnerable plaque can rupture and cause a major event.",
    "why": [
      "Incorrect. Blockage size alone does not predict danger.",
      "Correct. Plaque stability, not just size, determines the risk of a major event."
    ]
  },
  {
    "id": "acs-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 22 (Why do Patients Become Symptomatic?)",
    "question": "Myocardial ischemia develops when:",
    "options": [
      "Myocardial oxygen demand exceeds myocardial oxygen supply",
      "Oxygen supply exceeds demand",
      "Heart rate falls below 40",
      "The coronary arteries dilate excessively"
    ],
    "answer": 0,
    "explanation": "Ischemia develops when myocardial oxygen demand exceeds supply. Demand rises with tachycardia, hypertension, increased contractility, and exercise; supply falls with coronary stenosis, vasospasm, hypotension, anemia, or hypoxemia.",
    "why": [
      "Correct. Ischemia occurs when demand outstrips supply.",
      "Reversed; ischemia is demand exceeding supply.",
      "Bradycardia itself is not the mechanism of anginal ischemia.",
      "Vasodilation improves supply; ischemia is a supply-demand mismatch."
    ]
  },
  {
    "id": "acs-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 27 (Classic Features of Angina)",
    "question": "Typical angina is defined by which three features?",
    "options": [
      "Substernal discomfort, provoked by exertion or stress, relieved by rest or nitroglycerin",
      "Sharp pain, worse with breathing, relieved by leaning forward",
      "Burning pain, worse when lying flat, relieved by antacids",
      "Tearing pain radiating to the back, unrelated to activity"
    ],
    "answer": 0,
    "explanation": "Typical angina has three features: substernal chest discomfort (pressure, tightness, heaviness, squeezing), provoked by physical exertion or emotional stress, and relieved by rest or nitroglycerin.",
    "why": [
      "Correct. These are the three classic features of typical angina.",
      "Pleuritic, positional pain suggests pericarditis, not angina.",
      "That pattern suggests GERD, not angina.",
      "Tearing pain to the back suggests aortic dissection, not angina."
    ]
  },
  {
    "id": "acs-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 28 (Typical vs Atypical Angina)",
    "question": "A patient reports exertional shortness of breath, fatigue, and nausea without chest pain. This is best described as:",
    "options": [
      "An angina equivalent",
      "Typical angina",
      "Atypical angina with all three features",
      "Definite non-cardiac pain"
    ],
    "answer": 0,
    "explanation": "An angina equivalent presents with symptoms such as shortness of breath, fatigue, epigastric discomfort, nausea, or decreased exercise tolerance instead of chest pain. Typical angina has all three features; atypical angina has only two.",
    "why": [
      "Correct. Exertional dyspnea, fatigue, and nausea without chest pain is an angina equivalent.",
      "Typical angina requires substernal chest discomfort, which is absent here.",
      "Atypical angina still involves chest discomfort as one of its features.",
      "These exertional symptoms can be cardiac and should not be dismissed."
    ]
  },
  {
    "id": "acs-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 27 (Classic Features of Angina)",
    "question": "Nitroglycerin relieves angina primarily by:",
    "options": [
      "Venodilation that reduces preload and oxygen demand, plus coronary vasodilation",
      "Increasing heart rate and contractility",
      "Constricting the coronary arteries",
      "Raising systemic blood pressure"
    ],
    "answer": 0,
    "explanation": "Nitroglycerin causes venodilation, reducing preload and wall stress and thus myocardial oxygen demand. It also causes coronary vasodilation, especially of larger epicardial vessels, and relieves coronary vasospasm.",
    "why": [
      "Correct. Venodilation lowers preload and demand, and coronary vasodilation improves flow.",
      "Nitroglycerin lowers demand; raising heart rate and contractility would worsen angina.",
      "Nitroglycerin dilates, not constricts, coronary arteries.",
      "Nitroglycerin lowers, not raises, blood pressure through vasodilation."
    ]
  },
  {
    "id": "acs-020",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 26 (Understanding Angina)",
    "question": "Levine's sign, a clenched fist held over the sternum, is a classic gesture describing anginal chest discomfort.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Levine's sign, a clenched fist held over the sternum when describing chest discomfort, is a classic gesture associated with angina.",
    "why": [
      "Correct. Levine's sign is the clenched-fist gesture describing anginal chest discomfort.",
      "Incorrect. Levine's sign is a recognized gesture associated with angina."
    ]
  },
  {
    "id": "acs-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 36 (Pretest Probability)",
    "question": "Before ordering tests, the pretest probability of CAD is estimated using:",
    "options": [
      "Symptoms, age and sex, and risk factors",
      "Troponin alone",
      "The patient's zip code only",
      "A coronary calcium score alone"
    ],
    "answer": 0,
    "explanation": "Pretest probability is estimated from symptoms plus age and sex plus risk factors. Low probability (under 15%) makes CAD unlikely; intermediate to high probability (over 15%) with an uncertain diagnosis prompts noninvasive testing such as CCTA, stress echo, or nuclear perfusion imaging.",
    "why": [
      "Correct. Symptoms, age and sex, and risk factors set the pretest probability.",
      "Troponin is used in ACS workup, not for chronic pretest probability.",
      "Zip code alone does not estimate pretest CAD probability.",
      "A calcium score is one test, not the full pretest-probability estimate."
    ]
  },
  {
    "id": "acs-022",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 45 (The EKG)",
    "question": "A normal resting ECG excludes coronary artery disease.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "False. More than 50% of patients with chronic stable angina have a normal resting ECG. A normal ECG does not exclude CAD.",
    "why": [
      "Incorrect. Over half of chronic stable angina patients have a normal resting ECG.",
      "Correct. A normal resting ECG does not rule out CAD."
    ]
  },
  {
    "id": "acs-023",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 46 (EKG Findings Suggestive of CAD)",
    "question": "Match each ECG finding to what it represents.",
    "pairs": [
      {
        "left": "ST depression",
        "right": "Subendocardial ischemia",
        "why": "ST depression reflects subendocardial (inner-layer) ischemia."
      },
      {
        "left": "ST elevation",
        "right": "Acute transmural injury",
        "why": "ST elevation reflects acute transmural (full-thickness) injury."
      },
      {
        "left": "Pathologic Q waves",
        "right": "Prior infarction (scar)",
        "why": "Pathologic Q waves represent prior myocardial necrosis and scar."
      },
      {
        "left": "T-wave inversion",
        "right": "Ischemia or prior injury",
        "why": "T-wave inversion suggests ischemia or prior injury."
      }
    ],
    "explanation": "ECG correlations: ST depression = subendocardial ischemia; ST elevation = acute transmural injury; pathologic Q waves = prior infarction (scar); T-wave inversion = ischemia or prior injury."
  },
  {
    "id": "acs-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 55 (Stress Tests)",
    "question": "A stress test:",
    "options": [
      "Detects ischemia but does not directly visualize coronary anatomy",
      "Directly visualizes coronary plaque and stenosis",
      "Is the anatomic gold standard for CAD",
      "Is only useful after a STEMI"
    ],
    "answer": 0,
    "explanation": "Stress testing evaluates whether the heart receives enough blood flow under increased demand. It detects ischemia but does not visualize CAD directly. Options include exercise ECG, stress echocardiography (wall motion), and nuclear perfusion imaging.",
    "why": [
      "Correct. Stress testing detects ischemia functionally, not coronary anatomy.",
      "CCTA and angiography visualize anatomy; stress testing does not.",
      "Invasive coronary angiography, not stress testing, is the anatomic gold standard.",
      "Stress testing is used in chronic stable angina workup, not only post-STEMI."
    ]
  },
  {
    "id": "acs-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 57 (Stress Test vs CCTA)",
    "question": "Coronary CT angiography (CCTA) is preferred for:",
    "options": [
      "Younger patients with intermediate-high pretest probability and no known CAD",
      "Patients with known CAD",
      "Patients with a contraindication to CCTA",
      "Confirming ischemia functionally"
    ],
    "answer": 0,
    "explanation": "CCTA (a Class I option) is preferred for younger patients, those with intermediate-high pretest probability, and no known CAD. Stress testing is preferred with known CAD, a contraindication to CCTA, or low-intermediate risk. A normal stress test does not exclude CAD.",
    "why": [
      "Correct. CCTA suits younger patients with intermediate-high probability and no known CAD.",
      "With known CAD, stress testing is generally preferred.",
      "A contraindication to CCTA points toward stress testing instead.",
      "Functional ischemia confirmation is the role of stress testing, not CCTA."
    ]
  },
  {
    "id": "acs-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Workup",
    "source": "Ischemic Heart Disease & ACS, slide 58 (When to Proceed with Cardiac Cath)",
    "question": "The gold-standard anatomic assessment of coronary stenosis, which also allows PCI, is:",
    "options": [
      "Invasive coronary angiography (cardiac catheterization)",
      "Resting ECG",
      "Stress echocardiography",
      "Chest X-ray"
    ],
    "answer": 0,
    "explanation": "Invasive coronary angiography (cardiac catheterization / left heart cath) is the gold-standard anatomic assessment. Contrast is injected into the coronary arteries to identify the location and severity of stenosis, and it allows PCI when appropriate.",
    "why": [
      "Correct. Invasive coronary angiography is the anatomic gold standard and enables PCI.",
      "A resting ECG does not assess coronary anatomy.",
      "Stress echo is a functional test, not the anatomic gold standard.",
      "A chest X-ray does not visualize coronary stenosis."
    ]
  },
  {
    "id": "acs-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Management",
    "source": "Ischemic Heart Disease & ACS, slide 65 (Management of Stable CAD)",
    "question": "The first-line anti-anginal medication class for stable angina is:",
    "options": [
      "Beta-blockers",
      "Long-acting nitrates",
      "Ranolazine",
      "Calcium channel blockers"
    ],
    "answer": 0,
    "explanation": "Beta-blockers are the first-line anti-anginal therapy for stable angina. Calcium channel blockers, long-acting nitrates, and ranolazine are additional options. All patients also receive aspirin and a statin.",
    "why": [
      "Correct. Beta-blockers are first-line anti-anginal therapy.",
      "Long-acting nitrates are an additional option, not first-line.",
      "Ranolazine is an add-on option, not first-line.",
      "CCBs are an alternative or add-on, not the first-line anti-anginal."
    ]
  },
  {
    "id": "acs-028",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Management",
    "source": "Ischemic Heart Disease & ACS, slide 65 (Management of Stable CAD)",
    "question": "Select ALL recommended lifestyle modifications for stable CAD.",
    "options": [
      "Smoking cessation",
      "Mediterranean diet",
      "Weight control and stress management",
      "Increasing saturated fat intake"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Lifestyle modifications for stable CAD include weight control, smoking cessation, a Mediterranean diet, and stress management. Increasing saturated fat is counterproductive.",
    "why": [
      "Correct. Smoking cessation is a core lifestyle intervention.",
      "Correct. A Mediterranean diet is recommended.",
      "Correct. Weight control and stress management are recommended.",
      "Incorrect. Increasing saturated fat worsens CAD risk."
    ]
  },
  {
    "id": "acs-029",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Management",
    "source": "Ischemic Heart Disease & ACS, slide 65 (Management of Stable CAD)",
    "question": "Beyond anti-anginal therapy, which medications does the deck recommend for stable CAD patients?",
    "options": [
      "Aspirin",
      "Statin",
      "A beta-blocker or other anti-anginal",
      "A routine antibiotic"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Medical therapy for stable CAD includes an anti-anginal (beta-blocker first-line), aspirin, and a statin. Antibiotics are not part of routine CAD management.",
    "why": [
      "Correct. Aspirin is recommended for stable CAD.",
      "Correct. A statin is recommended for stable CAD.",
      "Correct. An anti-anginal such as a beta-blocker is part of therapy.",
      "Incorrect. Routine antibiotics are not part of CAD management."
    ]
  },
  {
    "id": "acs-030",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Stable Angina Management",
    "source": "Ischemic Heart Disease & ACS, slide 66 (When to Revascularize)",
    "question": "Revascularization for stable angina is considered when there is:",
    "options": [
      "Lifestyle-limiting angina with significant stenosis and symptoms despite optimal medical therapy",
      "Any degree of coronary calcium on CT",
      "A single episode of chest pain with a normal workup",
      "Patient preference alone with no stenosis"
    ],
    "answer": 0,
    "explanation": "Revascularization (elective PCI or CABG) is considered when there is persistent lifestyle-limiting angina, significant coronary stenosis, and symptoms despite optimal medical therapy.",
    "why": [
      "Correct. Limiting angina, significant stenosis, and failure of optimal therapy together drive revascularization.",
      "Coronary calcium alone does not warrant revascularization.",
      "A single episode with a normal workup does not warrant revascularization.",
      "Revascularization requires significant stenosis, not preference alone."
    ]
  },
  {
    "id": "acs-031",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 70 (Acute Coronary Syndrome)",
    "question": "Acute coronary syndrome is most commonly caused by:",
    "options": [
      "Atherosclerotic plaque rupture with thrombus formation",
      "Slow, progressive plaque growth alone",
      "Coronary artery aneurysm",
      "Pericardial inflammation"
    ],
    "answer": 0,
    "explanation": "ACS is a spectrum caused by a sudden reduction in coronary blood flow, most commonly from atherosclerotic plaque rupture, platelet activation, and thrombus formation, rather than progressive plaque growth alone.",
    "why": [
      "Correct. Most ACS results from plaque rupture and thrombus.",
      "Progressive growth causes stable angina; ACS is usually acute rupture.",
      "A coronary aneurysm is not the common ACS mechanism.",
      "Pericardial inflammation is pericarditis, not ACS."
    ]
  },
  {
    "id": "acs-032",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 71 (The Spectrum of CAD: ACS)",
    "question": "Match each point on the CAD/ACS spectrum to its defining feature.",
    "pairs": [
      {
        "left": "Stable angina",
        "right": "Negative markers, chest pain with activity",
        "why": "Stable angina has negative markers with predictable chest pain on activity, relieved by rest."
      },
      {
        "left": "Unstable angina",
        "right": "Negative troponin, symptoms at rest or increasing",
        "why": "Unstable angina has a negative troponin with ischemic symptoms at rest or increasing in frequency."
      },
      {
        "left": "NSTEMI",
        "right": "Positive troponin, no ST elevation",
        "why": "NSTEMI has a positive troponin without ST elevation on ECG."
      },
      {
        "left": "STEMI",
        "right": "Complete occlusion, ST elevation, positive troponin",
        "why": "STEMI reflects complete coronary occlusion with ST elevation and elevated troponin."
      }
    ],
    "explanation": "Across the spectrum: stable angina (negative markers, exertional pain relieved by rest), unstable angina (negative troponin, symptoms at rest or increasing), NSTEMI (positive troponin, no ST elevation), and STEMI (complete occlusion, ST elevation, positive troponin, needs emergent reperfusion)."
  },
  {
    "id": "acs-033",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 105 (ACS: UA, NSTEMI, STEMI)",
    "question": "The key difference between unstable angina and NSTEMI is:",
    "options": [
      "NSTEMI has a positive troponin (myocyte death); unstable angina has a negative troponin",
      "Unstable angina shows ST elevation; NSTEMI does not",
      "NSTEMI never causes chest pain",
      "Unstable angina always requires emergent PCI"
    ],
    "answer": 0,
    "explanation": "Both unstable angina and NSTEMI lack ST elevation. The distinction is troponin: NSTEMI has a positive troponin reflecting myocyte death, while unstable angina has a negative troponin (ischemia without necrosis).",
    "why": [
      "Correct. A positive troponin distinguishes NSTEMI from unstable angina.",
      "Neither unstable angina nor NSTEMI shows ST elevation.",
      "NSTEMI does cause chest pain or anginal-equivalent symptoms.",
      "Unstable angina does not automatically require emergent PCI like STEMI."
    ]
  },
  {
    "id": "acs-034",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 73 (ACS vs Stable Angina Presentation)",
    "question": "Which presentation is most consistent with ACS rather than stable angina?",
    "options": [
      "Sudden symptoms at rest that fail to improve with rest or nitroglycerin",
      "Predictable chest discomfort with exertion that improves with rest",
      "Symptoms only during heavy exercise, relieved within minutes of stopping",
      "A stable pattern of exertional angina unchanged over years"
    ],
    "answer": 0,
    "explanation": "ACS presents with sudden-onset symptoms, often at rest, that fail to improve with rest or nitroglycerin, frequently with diaphoresis, nausea, or dyspnea. Stable angina is a predictable, exertional pattern relieved by rest and medication.",
    "why": [
      "Correct. Sudden rest symptoms not relieved by rest or nitro suggest ACS.",
      "Exertional discomfort relieved by rest is the stable angina pattern.",
      "Exercise-limited symptoms relieved by stopping fit stable angina.",
      "An unchanged exertional pattern over years is stable angina, not ACS."
    ]
  },
  {
    "id": "acs-035",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 74 (ACS Presentation)",
    "question": "Select ALL features consistent with an ACS presentation.",
    "options": [
      "Chest pressure radiating to the arm or jaw",
      "Diaphoresis",
      "Nausea and dyspnea",
      "Symptoms that reliably resolve with rest"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Classic ACS symptoms include chest pain, pressure, tightness, or heaviness radiating to the arm, jaw, neck, or back, failing to improve with rest or nitroglycerin. Associated symptoms include diaphoresis, nausea and vomiting, dyspnea, and lightheadedness.",
    "why": [
      "Correct. Radiating chest pressure is a classic ACS symptom.",
      "Correct. Diaphoresis is a common associated symptom.",
      "Correct. Nausea and dyspnea are associated ACS symptoms.",
      "Incorrect. In ACS, symptoms fail to improve reliably with rest."
    ]
  },
  {
    "id": "acs-036",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Initial Treatment",
    "source": "Ischemic Heart Disease & ACS, slide 75 (ACS Initial Treatment: Aspirin)",
    "question": "The initial aspirin dose in suspected ACS is:",
    "options": [
      "162 to 325 mg chewed, then 81 mg daily",
      "81 mg swallowed once, with no further doses",
      "650 mg chewed once only",
      "No aspirin until troponin returns"
    ],
    "answer": 0,
    "explanation": "In ACS, give a loading dose of 162 to 325 mg of aspirin chewed, then 81 mg daily. Aspirin decreases platelet aggregation.",
    "why": [
      "Correct. Load 162 to 325 mg chewed, then 81 mg daily.",
      "A single 81 mg dose is maintenance, not the loading dose.",
      "The loading range is 162 to 325 mg, not 650 mg.",
      "Aspirin should not wait for troponin in suspected ACS."
    ]
  },
  {
    "id": "acs-037",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Initial Treatment",
    "source": "Ischemic Heart Disease & ACS, slide 75 (ACS Initial Treatment)",
    "question": "In ACS, supplemental oxygen should be given:",
    "options": [
      "Only if oxygen saturation is below 90%",
      "To every patient routinely",
      "Only after PCI",
      "Never"
    ],
    "answer": 0,
    "explanation": "Supplemental oxygen in ACS is indicated only if the oxygen saturation is below 90%. Routine oxygen for normally saturated patients is not recommended.",
    "why": [
      "Correct. Give oxygen only if saturation is below 90%.",
      "Routine oxygen for all patients is not recommended.",
      "Oxygen is guided by saturation, not tied to after PCI.",
      "Oxygen is given when saturation drops below 90%."
    ]
  },
  {
    "id": "acs-038",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Initial Treatment",
    "source": "Ischemic Heart Disease & ACS, slide 75 (ACS Initial Treatment)",
    "question": "Sublingual nitroglycerin in ACS is dosed as:",
    "options": [
      "0.3 to 0.4 mg every 5 minutes, up to 3 doses",
      "One dose only, never repeated",
      "10 mg every minute",
      "Only intravenously"
    ],
    "answer": 0,
    "explanation": "Sublingual nitroglycerin is given 0.3 to 0.4 mg every 5 minutes, up to a maximum of 3 doses. It causes venodilation (reducing preload and oxygen demand) and vasodilation (improving coronary flow and reducing afterload).",
    "why": [
      "Correct. 0.3 to 0.4 mg sublingually every 5 minutes, up to 3 doses.",
      "Nitroglycerin can be repeated up to 3 doses at 5-minute intervals.",
      "10 mg every minute is far above the sublingual dose.",
      "The initial route here is sublingual, not intravenous."
    ]
  },
  {
    "id": "acs-039",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Initial Treatment",
    "source": "Ischemic Heart Disease & ACS, slide 89 (Should we Start Heparin?)",
    "question": "Select ALL higher-risk features that favor starting heparin in ACS.",
    "options": [
      "Positive troponin",
      "GRACE score above 140",
      "Hemodynamic instability",
      "A single negative troponin with low-risk chest pain"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Higher-risk features favoring heparin include a positive troponin, GRACE score above 140, recurrent ischemic symptoms despite therapy, hemodynamic instability, new heart failure, ventricular arrhythmias, diabetes, and prior MI or PCI/CABG. Low-risk chest pain with negative serial troponins does not require heparin.",
    "why": [
      "Correct. A positive troponin favors anticoagulation.",
      "Correct. A GRACE score above 140 is a higher-risk feature.",
      "Correct. Hemodynamic instability favors heparin.",
      "Incorrect. Low-risk pain with negative serial troponins does not need heparin."
    ]
  },
  {
    "id": "acs-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Initial Treatment",
    "source": "Ischemic Heart Disease & ACS, slide 89 (Should we Start Heparin?)",
    "question": "A typical unfractionated heparin regimen for ACS is:",
    "options": [
      "60 units/kg bolus (max 4,000), then a 12 units/kg/hr infusion, monitored by aPTT or anti-Xa",
      "A fixed 10,000 unit bolus with no monitoring",
      "Oral heparin twice daily",
      "A one-time subcutaneous dose only"
    ],
    "answer": 0,
    "explanation": "A typical UFH regimen is a 60 units/kg IV bolus (maximum 4,000 units), then a 12 units/kg/hr infusion (maximum 1,000 units/hr), monitored with aPTT or anti-Xa.",
    "why": [
      "Correct. Weight-based bolus and infusion with aPTT or anti-Xa monitoring.",
      "UFH is weight-based and monitored, not a fixed unmonitored bolus.",
      "Heparin is not given orally.",
      "ACS UFH uses a bolus plus a monitored infusion, not a single subcutaneous dose."
    ]
  },
  {
    "id": "acs-041",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Risk Scores & Biomarkers",
    "source": "Ischemic Heart Disease & ACS, slide 80 (HEART Score)",
    "question": "The HEART score is used to:",
    "options": [
      "Estimate the risk of major adverse cardiac events (MACE) to guide disposition in possible ACS",
      "Diagnose STEMI on ECG",
      "Calculate the door-to-balloon time",
      "Measure the ejection fraction"
    ],
    "answer": 0,
    "explanation": "The HEART score estimates the risk of major adverse cardiac events (MACE) in patients with possible ACS to guide disposition. Its components (History, ECG, Age, Risk factors, Troponin) each score 0 to 2, for a maximum of 10.",
    "why": [
      "Correct. HEART estimates MACE risk to guide disposition.",
      "STEMI is diagnosed on ECG, not by the HEART score.",
      "Door-to-balloon is a STEMI treatment target, not the HEART score.",
      "The HEART score does not measure ejection fraction."
    ]
  },
  {
    "id": "acs-042",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Risk Scores & Biomarkers",
    "source": "Ischemic Heart Disease & ACS, slide 81 (HEART Score Interpretation)",
    "question": "A HEART score of 0 to 3 indicates:",
    "options": [
      "Low risk: discharge if serial troponins are negative and follow-up is arranged",
      "High risk requiring immediate catheterization",
      "Intermediate risk requiring admission",
      "A confirmed NSTEMI"
    ],
    "answer": 0,
    "explanation": "A HEART score of 0 to 3 is low risk; discharge is reasonable if serial troponins are negative and follow-up is arranged. A score of 4 to 6 is intermediate (observation, serial troponins, stress test or CCTA), and 7 to 10 is high risk (admit, cardiology consult, early invasive evaluation).",
    "why": [
      "Correct. 0 to 3 is low risk with discharge if serial troponins are negative.",
      "High risk is a score of 7 to 10, not 0 to 3.",
      "Intermediate risk is 4 to 6, not 0 to 3.",
      "A low HEART score does not confirm an NSTEMI."
    ]
  },
  {
    "id": "acs-043",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Risk Scores & Biomarkers",
    "source": "Ischemic Heart Disease & ACS, slide 82 (High Sensitivity Troponin)",
    "question": "An elevated troponin indicates:",
    "options": [
      "Myocardial injury or necrosis, not merely ischemia",
      "Ischemia without any cell death",
      "Coronary anatomy on imaging",
      "The presence of ST elevation"
    ],
    "answer": 0,
    "explanation": "Troponin is a regulatory protein released when myocardial injury or necrosis occurs; it detects injury, not ischemia. Ischemia without cell death (unstable angina) has a negative troponin, while myocardial infarction has an elevated troponin.",
    "why": [
      "Correct. Troponin marks myocyte injury or necrosis.",
      "Ischemia without cell death (unstable angina) gives a negative troponin.",
      "Troponin is a blood biomarker, not a coronary imaging finding.",
      "ST elevation is an ECG finding, separate from troponin."
    ]
  },
  {
    "id": "acs-044",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Risk Scores & Biomarkers",
    "source": "Ischemic Heart Disease & ACS, slide 82 (Troponin Kinetics)",
    "question": "After myocardial injury, high-sensitivity troponin typically:",
    "options": [
      "Begins to rise within 1 to 3 hours, peaks at 12 to 24 hours, and returns toward baseline over 7 to 14 days",
      "Rises only after 24 hours",
      "Peaks within 10 minutes",
      "Never returns to baseline"
    ],
    "answer": 0,
    "explanation": "High-sensitivity troponin begins to rise 1 to 3 hours after myocardial injury, peaks at 12 to 24 hours, and gradually returns toward baseline over 7 to 14 days.",
    "why": [
      "Correct. Rise at 1 to 3 hours, peak at 12 to 24 hours, baseline by 7 to 14 days.",
      "hs-troponin begins rising within 1 to 3 hours, not only after 24 hours.",
      "It peaks at 12 to 24 hours, not within 10 minutes.",
      "Troponin gradually returns toward baseline over 7 to 14 days."
    ]
  },
  {
    "id": "acs-045",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Risk Scores & Biomarkers",
    "source": "Ischemic Heart Disease & ACS, slide 84 (Wellens Syndrome)",
    "question": "Wellens syndrome (biphasic or deeply inverted T waves in V2 to V3 during a pain-free period) indicates:",
    "options": [
      "Critical proximal LAD narrowing; stress testing is contraindicated and catheterization is needed",
      "A benign finding needing no follow-up",
      "A definite completed inferior STEMI",
      "Right coronary artery occlusion requiring only aspirin"
    ],
    "answer": 0,
    "explanation": "Wellens syndrome is a specific ECG pattern (type A biphasic or type B deep symmetric T-wave inversions in V2 to V3 during a pain-free period, with normal or minimally elevated troponin) indicating critical LAD narrowing and impending anterior MI. Stress testing is strictly contraindicated; the patient needs catheterization.",
    "why": [
      "Correct. Wellens signals critical LAD disease; avoid stress testing and pursue cath.",
      "Wellens is high-risk, not benign.",
      "Wellens warns of impending anterior MI, not a completed inferior STEMI.",
      "It reflects critical LAD disease and needs catheterization, not aspirin alone."
    ]
  },
  {
    "id": "acs-046",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 95 (STEMI Diagnosis)",
    "question": "The ECG diagnosis of STEMI requires:",
    "options": [
      "New ST elevation in two contiguous leads",
      "T-wave inversion in a single lead",
      "ST depression in two leads",
      "A pathologic Q wave alone"
    ],
    "answer": 0,
    "explanation": "STEMI is diagnosed by new ST elevation in two contiguous leads, obtained on a 12-lead ECG within 10 minutes of first medical contact. Examples: inferior (II, III, aVF), anterior (V1 to V4), lateral (I, aVL, V5 to V6).",
    "why": [
      "Correct. New ST elevation in two contiguous leads defines STEMI on ECG.",
      "A single lead T-wave inversion does not define STEMI.",
      "ST depression is not the STEMI criterion, though it can be a posterior mirror image.",
      "A Q wave alone reflects prior infarction, not acute STEMI."
    ]
  },
  {
    "id": "acs-047",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 100 (Reperfusion Therapy)",
    "question": "For STEMI, the preferred reperfusion strategy and time goal is:",
    "options": [
      "Primary PCI with a door-to-balloon time under 90 minutes",
      "Fibrinolytics for all patients regardless of PCI availability",
      "Elective PCI within 2 weeks",
      "Beta-blockers alone"
    ],
    "answer": 0,
    "explanation": "For STEMI, primary PCI is preferred when available, with a door-to-balloon time under 90 minutes. Fibrinolytic therapy is considered when PCI is unavailable in the appropriate timeframe and there are no contraindications. Time is myocardium.",
    "why": [
      "Correct. Primary PCI within 90 minutes door-to-balloon is the goal.",
      "Fibrinolytics are a fallback when timely PCI is unavailable, not for all.",
      "STEMI needs emergent, not elective, reperfusion.",
      "Beta-blockers do not restore coronary flow; reperfusion does."
    ]
  },
  {
    "id": "acs-048",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 98 (Culprit Lesion on EKG)",
    "question": "Match each set of ECG leads to the wall and usual culprit artery.",
    "pairs": [
      {
        "left": "II, III, aVF",
        "right": "Inferior wall, RCA",
        "why": "Inferior leads II, III, aVF localize to the RCA (usually)."
      },
      {
        "left": "V1 to V4",
        "right": "Anterior wall, LAD",
        "why": "Anterior leads V1 to V4 localize to the LAD."
      },
      {
        "left": "I, aVL, V5 to V6",
        "right": "Lateral wall, LCx or diagonal",
        "why": "Lateral leads I, aVL, V5 to V6 localize to the LCx or a diagonal branch."
      },
      {
        "left": "V7 to V9",
        "right": "Posterior wall, LCx or RCA",
        "why": "Posterior leads V7 to V9 localize to the LCx or RCA."
      }
    ],
    "explanation": "ECG localization: inferior (II, III, aVF) = RCA; anterior (V1 to V4) = LAD; lateral (I, aVL, V5 to V6) = LCx or diagonal; posterior (V7 to V9) = LCx or RCA. ST depression in V1 to V3 can be the mirror image of a posterior STEMI."
  },
  {
    "id": "acs-049",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 101 (Antithrombotic Therapy)",
    "question": "Dual antiplatelet therapy (DAPT) after STEMI consists of:",
    "options": [
      "Aspirin plus a P2Y12 inhibitor (clopidogrel, ticagrelor, or prasugrel)",
      "Aspirin plus warfarin",
      "Two statins",
      "Aspirin plus a beta-blocker"
    ],
    "answer": 0,
    "explanation": "DAPT is aspirin plus a P2Y12 inhibitor (clopidogrel, ticagrelor, or prasugrel). It reduces platelet activation and thrombus growth after revascularization; anticoagulation such as unfractionated heparin is given separately to limit clot propagation.",
    "why": [
      "Correct. DAPT is aspirin plus a P2Y12 inhibitor.",
      "Warfarin is an anticoagulant, not the second antiplatelet in DAPT.",
      "DAPT combines two antiplatelets, not two statins.",
      "A beta-blocker is not an antiplatelet agent."
    ]
  },
  {
    "id": "acs-050",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 102 (Additional STEMI Medications)",
    "question": "After stabilization, which medications are recommended following a STEMI?",
    "options": [
      "High-intensity statin",
      "Beta-blocker",
      "ACE inhibitor or ARB",
      "Routine long-term antibiotics"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "After stabilization, post-STEMI medications include a high-intensity statin, a beta-blocker (reduces heart rate, contractility, and oxygen demand), an ACE inhibitor or ARB (especially with LV dysfunction, diabetes, or hypertension), and an aldosterone antagonist with reduced EF or heart failure. Antibiotics are not routine.",
    "why": [
      "Correct. A high-intensity statin is standard post-STEMI.",
      "Correct. A beta-blocker is given when appropriate.",
      "Correct. An ACE inhibitor or ARB is recommended, especially with LV dysfunction.",
      "Incorrect. Routine long-term antibiotics are not part of post-STEMI care."
    ]
  },
  {
    "id": "acs-051",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 103 (STEMI Complications)",
    "question": "Which is a mechanical complication of STEMI?",
    "options": [
      "Papillary muscle rupture causing mitral regurgitation",
      "T-wave inversion",
      "Sinus tachycardia",
      "A normal echocardiogram"
    ],
    "answer": 0,
    "explanation": "Mechanical complications of STEMI include papillary muscle rupture (causing mitral regurgitation), ventricular septal rupture, and free wall rupture. Other complications include ventricular arrhythmias, heart block, heart failure, cardiogenic shock, pericarditis, RV infarction, and thromboembolism.",
    "why": [
      "Correct. Papillary muscle rupture causing MR is a mechanical complication.",
      "T-wave inversion is an ECG finding, not a mechanical complication.",
      "Sinus tachycardia is not a mechanical complication.",
      "A normal echo is not a complication."
    ]
  },
  {
    "id": "acs-052",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 112 (Lifestyle Modification)",
    "question": "After which conditions is cardiac rehabilitation recommended?",
    "options": [
      "Myocardial infarction",
      "PCI or CABG",
      "Spontaneous coronary artery dissection (SCAD)",
      "A single benign palpitation"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cardiac rehabilitation is recommended after myocardial infarction, PCI or CABG, stable angina, and spontaneous coronary artery dissection (SCAD). It improves functional capacity, reduces recurrent events, and improves long-term outcomes.",
    "why": [
      "Correct. Cardiac rehab is recommended after MI.",
      "Correct. Cardiac rehab is recommended after PCI or CABG.",
      "Correct. Cardiac rehab is recommended after SCAD.",
      "Incorrect. A single benign palpitation is not an indication for cardiac rehab."
    ]
  },
  {
    "id": "acs-053",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 114 (Exercise & Risk Factor Modification)",
    "question": "The recommended aerobic exercise goal for CAD patients is:",
    "options": [
      "150 minutes/week of moderate intensity or 75 minutes/week of vigorous intensity",
      "30 minutes once a week",
      "Vigorous exercise every day without limit",
      "No exercise until fully asymptomatic"
    ],
    "answer": 0,
    "explanation": "The goal is 150 minutes per week of moderate-intensity or 75 minutes per week of vigorous-intensity aerobic exercise, plus resistance training 2 days per week.",
    "why": [
      "Correct. 150 min/week moderate or 75 min/week vigorous, plus resistance twice weekly.",
      "30 minutes weekly is well below the goal.",
      "The recommendation is a weekly target, not unlimited daily vigorous exercise.",
      "Exercise, often via cardiac rehab, is part of recovery, not withheld until asymptomatic."
    ]
  },
  {
    "id": "acs-054",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 118 (Blood Pressure & Neurohormonal Therapy)",
    "question": "For most CAD patients, the deck recommends a blood pressure goal of:",
    "options": [
      "Below 130/80 mmHg",
      "Below 140/90 mmHg",
      "Below 120/70 mmHg",
      "Below 150/90 mmHg"
    ],
    "answer": 0,
    "explanation": "The blood pressure goal is below 130/80 mmHg in most CAD patients. High-intensity statin therapy (atorvastatin 40 to 80 mg or rosuvastatin 20 to 40 mg) is the cornerstone lipid therapy, lowering LDL, reducing inflammation, and stabilizing plaque.",
    "why": [
      "Correct. The goal is below 130/80 mmHg for most CAD patients.",
      "Below 140/90 is higher than the recommended CAD goal.",
      "Below 120/70 is lower than the stated goal of below 130/80.",
      "Below 150/90 is well above the recommended goal."
    ]
  },
  {
    "id": "acs-055",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 121 (Type I vs Type II MI)",
    "question": "A Type II myocardial infarction is caused by:",
    "options": [
      "An oxygen supply-demand mismatch without plaque rupture (such as sepsis, severe anemia, or tachyarrhythmia)",
      "Plaque rupture with coronary thrombosis",
      "A congenital coronary anomaly only",
      "A pericardial effusion"
    ],
    "answer": 0,
    "explanation": "Type II MI results from an oxygen supply-demand mismatch without plaque rupture, from causes such as sepsis, severe anemia, SVT, hypertensive emergency, or hypotension. Treatment targets the underlying cause; not everyone needs PCI. Type I MI is plaque rupture with coronary thrombosis, treated with cath, DAPT, and anticoagulation.",
    "why": [
      "Correct. Type II MI is a supply-demand mismatch without plaque rupture.",
      "Plaque rupture with thrombosis is a Type I MI.",
      "A congenital anomaly alone is not the definition of Type II MI.",
      "A pericardial effusion is not the mechanism of Type II MI."
    ]
  },
  {
    "id": "acs-056",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 124 (Coronary Vasospasm / Prinzmetal)",
    "question": "Chest pain at rest with transient ST elevation that resolves with nitroglycerin, in a patient with normal coronaries, suggests coronary vasospasm (Prinzmetal). Appropriate treatment includes:",
    "options": [
      "Calcium channel blockers and nitrates, avoiding nonselective beta-blockers",
      "Nonselective beta-blockers as first-line",
      "Emergent CABG for all",
      "No treatment, as it is benign"
    ],
    "answer": 0,
    "explanation": "Vasospastic (variant/Prinzmetal) angina is transient coronary vasospasm causing ischemia with ST elevation during episodes. It is treated with calcium channel blockers and nitrates, avoiding nonselective beta-blockers, which can worsen spasm. Triggers include smoking, cocaine, cold exposure, and emotional stress.",
    "why": [
      "Correct. CCBs and nitrates treat vasospasm; avoid nonselective beta-blockers.",
      "Nonselective beta-blockers can worsen coronary spasm and are avoided.",
      "Vasospasm is managed medically, not with CABG for all.",
      "Vasospastic angina causes real ischemia and requires treatment."
    ]
  },
  {
    "id": "acs-057",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Secondary Prevention & Special Cases",
    "source": "Ischemic Heart Disease & ACS, slide 123 (MINOCA)",
    "question": "MINOCA (myocardial infarction with non-obstructive coronary arteries) can be caused by:",
    "options": [
      "Coronary spasm, SCAD, microvascular disease, or thromboembolism",
      "Only a completely occluded LAD",
      "A normal stress test",
      "A pericardial effusion exclusively"
    ],
    "answer": 0,
    "explanation": "MINOCA is myocardial infarction without obstructive CAD. Possible causes include coronary spasm, spontaneous coronary artery dissection (SCAD), microvascular disease, and thromboembolism.",
    "why": [
      "Correct. Spasm, SCAD, microvascular disease, and thromboembolism cause MINOCA.",
      "MINOCA is defined by non-obstructive arteries, not a fully occluded LAD.",
      "A normal stress test is not a cause of MINOCA.",
      "A pericardial effusion is not the mechanism of MINOCA."
    ]
  },
  {
    "id": "acs-058",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "Angina: Features & Classification",
    "source": "Ischemic Heart Disease & ACS, slide 30 (Patient Scenario)",
    "question": "A 55-year-old man, a former smoker with HTN and DM, reports 2 months of chest tightness while climbing stairs that is relieved by rest. He denies pain at rest, dyspnea, or nausea; his father had an MI at 55. How is this presentation best classified?",
    "options": [
      "Stable angina",
      "Unstable angina",
      "STEMI",
      "Non-cardiac chest pain"
    ],
    "answer": 0,
    "explanation": "Exertional chest tightness relieved by rest, stable over 2 months, in a patient with multiple risk factors, is classic stable angina.",
    "why": [
      "Correct. Predictable exertional discomfort relieved by rest is stable angina.",
      "Unstable angina occurs at rest or with increasing frequency, unlike this stable pattern.",
      "There is no acute presentation or ST elevation to suggest STEMI.",
      "The exertional, reproducible pattern with risk factors is cardiac, not non-cardiac."
    ]
  },
  {
    "id": "acs-059",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "STEMI Diagnosis & Management",
    "source": "Ischemic Heart Disease & ACS, slide 93 (STEMI Patient Scenario)",
    "question": "A 59-year-old man has acute substernal chest pain with nausea and diaphoresis after an argument. A prehospital 12-lead ECG shows ST elevation. What is the best next step?",
    "options": [
      "Activate the cath lab for emergent PCI (door-to-balloon under 90 minutes)",
      "Wait for troponin results before any intervention",
      "Discharge with outpatient stress testing",
      "Start oral beta-blockers and observe at home"
    ],
    "answer": 0,
    "explanation": "Acute chest pain with ST elevation is a STEMI. Activate the cath lab for emergent primary PCI with a door-to-balloon goal under 90 minutes. Treatment should not wait for troponin if the ECG confirms STEMI.",
    "why": [
      "Correct. STEMI needs emergent reperfusion; activate the cath lab without delay.",
      "Do not wait for troponin when the ECG confirms STEMI.",
      "STEMI is an emergency; outpatient stress testing is inappropriate.",
      "Home observation on oral beta-blockers is unsafe for a STEMI."
    ]
  },
  {
    "id": "acs-060",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Ischemic Heart Disease & ACS",
    "section": "ACS Overview & Spectrum",
    "source": "Ischemic Heart Disease & ACS, slide 88 (NSTEMI Patient Scenario)",
    "question": "A 72-year-old woman presents with nausea, vomiting, malaise, and epigastric discomfort. She appears pale and diaphoretic. Her ECG shows ST depression and high-sensitivity troponin is elevated at 250. What is the diagnosis?",
    "options": [
      "NSTEMI",
      "STEMI",
      "Stable angina",
      "Prinzmetal angina"
    ],
    "answer": 0,
    "explanation": "Elevated troponin with ST depression (no ST elevation) and an anginal-equivalent presentation is an NSTEMI. Management includes admission to telemetry, serial troponin and ECG, echocardiography, heparin if suspicion is high, and urgent catheterization, especially with an uptrending troponin.",
    "why": [
      "Correct. Positive troponin without ST elevation defines NSTEMI.",
      "STEMI requires ST elevation, which is absent here; ST depression is present.",
      "Stable angina has negative markers; her troponin is elevated.",
      "Prinzmetal causes transient ST elevation with spasm, not this picture."
    ]
  },
  {
    "id": "cse-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Anatomy & Physiology Review",
    "source": "Cardiac Surgery: Elective, slide 5 (Blood Flow)",
    "question": "Which sequence correctly traces normal blood flow through the heart?",
    "options": [
      "Vena cava, right atrium, right ventricle, pulmonary artery, lungs, pulmonary vein, left atrium, left ventricle, aorta",
      "Vena cava, left atrium, left ventricle, pulmonary artery, aorta",
      "Aorta, right atrium, pulmonary vein, left ventricle",
      "Pulmonary vein, right ventricle, aorta, left atrium"
    ],
    "answer": 0,
    "explanation": "Deoxygenated blood returns via the IVC and SVC to the right atrium, then right ventricle, pulmonary artery, and lungs. Oxygenated blood returns via the pulmonary veins to the left atrium, left ventricle, and out the aorta.",
    "why": [
      "Correct. This is the normal right-heart-to-lungs-to-left-heart-to-aorta path.",
      "The left atrium and ventricle handle oxygenated blood returning from the lungs, not the initial venous return.",
      "The coronary and chamber order here is scrambled.",
      "This order is anatomically impossible."
    ]
  },
  {
    "id": "cse-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Anatomy & Physiology Review",
    "source": "Cardiac Surgery: Elective, slide 7 (Coronary Anatomy)",
    "question": "The coronary arteries arise as the first branch off the:",
    "options": [
      "Aorta",
      "Pulmonary artery",
      "Left atrium",
      "Superior vena cava"
    ],
    "answer": 0,
    "explanation": "The coronary arteries are the first branch off the aorta and bring oxygenated blood to the heart muscle. The RCA gives the PDA and PLV; the left main gives the LAD (and diagonals), ramus intermedius, and left circumflex (and obtuse marginals).",
    "why": [
      "Correct. The coronaries are the first branch off the aorta.",
      "The pulmonary artery carries deoxygenated blood to the lungs and does not give off the coronaries.",
      "The left atrium is a chamber, not the origin of the coronaries.",
      "The SVC returns venous blood and does not give off the coronaries."
    ]
  },
  {
    "id": "cse-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Anatomy & Physiology Review",
    "source": "Cardiac Surgery: Elective, slide 8 (Electrical Circuit)",
    "question": "Electrical activity of the heart normally originates and travels in which order?",
    "options": [
      "SA node, AV node, bundle of His, bundle branches, Purkinje fibers",
      "AV node, SA node, Purkinje fibers, bundle of His",
      "Purkinje fibers, bundle branches, SA node, AV node",
      "Bundle of His, SA node, AV node, bundle branches"
    ],
    "answer": 0,
    "explanation": "Electrical activity originates in the sinoatrial (SA) node, travels to the atrioventricular (AV) node, then the bundle of His, the bundle branches, and finally the Purkinje fibers.",
    "why": [
      "Correct. SA node to AV node to bundle of His to bundle branches to Purkinje fibers.",
      "The SA node is the origin, not the AV node.",
      "The Purkinje fibers are the end of the pathway, not the start.",
      "The bundle of His comes after the SA and AV nodes, not before."
    ]
  },
  {
    "id": "cse-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 12 (Understanding the term ANGINA)",
    "question": "Per this lecture, typical angina is substernal chest pressure that:",
    "options": [
      "Lasts about 2 to 15 minutes, occurs at a certain level of myocardial oxygen demand, and is relieved by rest or nitroglycerin",
      "Lasts for hours and never changes with activity",
      "Is always sharp and positional",
      "Occurs only at rest and worsens with nitroglycerin"
    ],
    "answer": 0,
    "explanation": "Typical angina is substernal chest pressure or heaviness that may radiate to the jaw, back, or arm, lasts about 2 to 15 minutes, occurs at a certain level of myocardial oxygen demand (activity, emotional distress, increased sympathetic tone), and is relieved by rest or nitroglycerin.",
    "why": [
      "Correct. Duration, a demand threshold, and relief by rest or nitroglycerin define typical angina.",
      "Angina is brief and demand-related, not a constant hours-long pain.",
      "Sharp, positional pain is more typical of atypical or non-cardiac causes.",
      "That pattern (rest-only, worse with nitro) is not typical angina."
    ]
  },
  {
    "id": "cse-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 12 (Understanding the term ANGINA)",
    "question": "Unstable angina is characterized by:",
    "options": [
      "Chest pain at rest, of longer duration or frequency, that does not typically improve with nitroglycerin, with usually negative cardiac biomarkers",
      "Chest pain only with heavy exertion, relieved by rest",
      "ST elevation with a positive troponin",
      "Pain reliably relieved by nitroglycerin"
    ],
    "answer": 0,
    "explanation": "Unstable angina is chest pain at rest, with longer duration or increasing frequency, that does not typically improve with nitroglycerin. Cardiac biomarkers are usually negative.",
    "why": [
      "Correct. Rest pain, longer or more frequent, poorly relieved by nitroglycerin, with negative biomarkers.",
      "Exertional pain relieved by rest describes stable angina.",
      "ST elevation with a positive troponin is a STEMI, not unstable angina.",
      "Reliable relief with nitroglycerin points toward stable angina."
    ]
  },
  {
    "id": "cse-006",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 13 (How do we assess cardiac pathologies?)",
    "question": "Select ALL tests that are part of the INITIAL cardiac workup in this lecture.",
    "options": [
      "Electrocardiogram (EKG)",
      "Stress test",
      "Transthoracic echocardiogram (TTE)",
      "Coronary angiogram (left heart cath)"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The initial workup includes the EKG, stress test, coronary artery calcium (CAC) score, and transthoracic echocardiogram (TTE). The coronary angiogram / left heart cath is an invasive part of the further workup, along with CTA coronaries, TEE, cardiac MRI, CTA chest, right heart cath, and Holter monitor.",
    "why": [
      "Correct. The EKG is part of the initial workup.",
      "Correct. The stress test is part of the initial workup.",
      "Correct. TTE is part of the initial workup.",
      "Incorrect. The coronary angiogram (LHC) is an invasive further-workup test."
    ]
  },
  {
    "id": "cse-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 13 (How do we assess cardiac pathologies?)",
    "question": "On transthoracic echocardiogram, a normal ejection fraction (the heart's pumping power) is approximately:",
    "options": [
      "60%",
      "20%",
      "90%",
      "35%"
    ],
    "answer": 0,
    "explanation": "A normal ejection fraction is approximately 60%. TTE also assesses wall motion, wall thickness (hypertrophy vs dilation), valvular structure and function, and shunts such as PFO, ASD, and VSD.",
    "why": [
      "Correct. Normal EF is about 60%.",
      "An EF of 20% reflects severely reduced systolic function.",
      "90% is above the normal range.",
      "35% is a reduced ejection fraction, not normal."
    ]
  },
  {
    "id": "cse-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 13 (How do we assess cardiac pathologies?)",
    "question": "A key limitation of the coronary artery calcium (CAC) score is that:",
    "options": [
      "Soft (non-calcified) plaque is even more dangerous and will not show up",
      "It requires cardiac catheterization",
      "It only works in patients under 30",
      "It directly measures ejection fraction"
    ],
    "answer": 0,
    "explanation": "The CAC score screens for CAD, but while plaque is often calcified, soft plaque (which is even more dangerous) will not show up on the calcium score.",
    "why": [
      "Correct. Soft plaque is more dangerous and is not captured by the calcium score.",
      "The CAC score is a noninvasive CT-based screen, not a catheterization.",
      "The CAC score is not limited to a single young age group.",
      "The CAC score does not measure ejection fraction."
    ]
  },
  {
    "id": "cse-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Cardiac Workup & Angina",
    "source": "Cardiac Surgery: Elective, slide 17 (Coronary Angiogram / LHC / Cardiac Cath)",
    "question": "During a coronary angiogram, blockages are identified by:",
    "options": [
      "The lack of contrast within the coronary artery",
      "Direct visualization of the plaque color",
      "A drop in ejection fraction",
      "ST elevation on the monitor"
    ],
    "answer": 0,
    "explanation": "The interventional cardiologist accesses the radial or femoral artery, advances a catheter to the coronary ostia, and injects contrast. Any blockage is noted by the lack of contrast beyond the lesion.",
    "why": [
      "Correct. A blockage shows up as an absence of contrast flow.",
      "Angiography visualizes contrast flow, not plaque color directly.",
      "A drop in EF is not how a specific coronary blockage is localized.",
      "ST elevation is an EKG finding, not the angiographic marker of a blockage."
    ]
  },
  {
    "id": "cse-010",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 19 (Indication for ELECTIVE CABG)",
    "question": "Select ALL indications for elective coronary artery bypass graft (CABG).",
    "options": [
      "Severe stenosis of more than one coronary artery",
      "Left main involvement",
      "Diabetic patient with multivessel disease",
      "A single mild coronary lesion in an asymptomatic patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Indications for elective CABG include severe stenosis of more than one coronary artery, left main involvement, and a diabetic patient (multivessel disease favors CABG), in someone who is an overall good surgical candidate.",
    "why": [
      "Correct. Severe multivessel disease is an indication.",
      "Correct. Left main involvement favors CABG.",
      "Correct. Diabetics with multivessel disease favor CABG.",
      "Incorrect. A single mild lesion in an asymptomatic patient is not a CABG indication."
    ]
  },
  {
    "id": "cse-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 18 (Indication for surgical revascularization)",
    "question": "A diabetic patient with severe multivessel CAD including left main involvement favors which revascularization strategy?",
    "options": [
      "CABG",
      "PCI with stents",
      "Medical therapy only",
      "TAVI"
    ],
    "answer": 0,
    "explanation": "A diabetic patient with severe multivessel CAD including left main involvement favors CABG over PCI.",
    "why": [
      "Correct. Diabetes with multivessel and left main disease favors CABG.",
      "PCI is less favored than CABG in this diabetic multivessel scenario.",
      "Medical therapy alone does not address the surgical indication here.",
      "TAVI is a valve procedure, not coronary revascularization."
    ]
  },
  {
    "id": "cse-012",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 23 (Indication for AVR)",
    "question": "Select ALL indications for aortic valve replacement (AVR).",
    "options": [
      "Severe aortic stenosis or regurgitation on echocardiogram",
      "Symptomatic patient",
      "Asymptomatic patient with EF < 50%",
      "Mild aortic stenosis in an asymptomatic patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Indications for AVR include severe aortic stenosis or regurgitation on echocardiogram, a symptomatic patient, or an asymptomatic patient with EF < 50%.",
    "why": [
      "Correct. Severe stenosis or regurgitation is an indication.",
      "Correct. Symptoms are an indication.",
      "Correct. An asymptomatic patient with EF < 50% meets indication.",
      "Incorrect. Mild stenosis in an asymptomatic patient does not meet indication."
    ]
  },
  {
    "id": "cse-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 23 (Indication for AVR)",
    "question": "Once symptoms of valvular aortic stenosis appear, untreated average survival is approximately:",
    "options": [
      "50% at two years and 20% at five years",
      "90% at ten years",
      "Unchanged from the general population",
      "100% at five years"
    ],
    "answer": 0,
    "explanation": "Valvular aortic stenosis can be life-threatening. Once symptoms appear, untreated patients have a poor prognosis, with average survival of 50% at two years and 20% at five years.",
    "why": [
      "Correct. Survival is about 50% at two years and 20% at five years once symptomatic.",
      "Prognosis is poor once symptomatic, not 90% at ten years.",
      "Symptomatic aortic stenosis markedly reduces survival.",
      "Survival is far below 100% at five years once symptoms appear."
    ]
  },
  {
    "id": "cse-014",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 26 (Indication for mitral valve repair/replacement)",
    "question": "Select ALL indications for mitral valve repair or replacement (MVr/R).",
    "options": [
      "Severe mitral regurgitation or stenosis on TEE",
      "Symptomatic patient",
      "New-onset Afib in the setting of mitral regurgitation",
      "Trace mitral regurgitation in an asymptomatic patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Indications for MVr/R include severe mitral regurgitation or stenosis on TEE, a symptomatic patient, new-onset Afib in the setting of MR, or an asymptomatic patient at high risk of hemodynamic compromise (EF < 60% or systolic PA pressure > 50 mmHg).",
    "why": [
      "Correct. Severe MR or stenosis on TEE is an indication.",
      "Correct. Symptoms are an indication.",
      "Correct. New-onset Afib with MR is an indication.",
      "Incorrect. Trace MR in an asymptomatic patient is not an indication."
    ]
  },
  {
    "id": "cse-015",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 29 (Indication for repair of thoracic aneurysm)",
    "question": "Match each patient scenario to the thoracic aorta diameter threshold for repair.",
    "pairs": [
      {
        "left": "No genetic or risk factors",
        "right": "5.5 cm",
        "why": "With no genetic or risk factors, repair a thoracic aorta at 5.5 cm (lowered to 5.0 cm at aortic centers)."
      },
      {
        "left": "Bicuspid aortic valve with risk factors",
        "right": "5.0 cm",
        "why": "In BAV with risk factors such as HTN or family history, the threshold is 5.0 cm."
      },
      {
        "left": "Connective tissue disorder (Marfan, Loeys-Dietz)",
        "right": "4.5 cm",
        "why": "Connective tissue disorders lower the threshold to 4.5 cm."
      },
      {
        "left": "Rapid growth",
        "right": "0.5 cm in 1 year",
        "why": "A growth rate of 0.5 cm in 1 year (or 0.3 cm/year over 2 years) is an indication regardless of absolute size."
      }
    ],
    "explanation": "Thoracic aneurysm repair thresholds: 5.5 cm with no genetic or risk factors (5.0 cm at aortic centers); 5.0 cm with bicuspid aortic valve and risk factors; 4.5 cm with connective tissue disorders; and a growth rate of 0.5 cm in 1 year or 0.3 cm/year over 2 consecutive years."
  },
  {
    "id": "cse-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Indications for Surgery",
    "source": "Cardiac Surgery: Elective, slide 30 (Size of Thoracic Aorta and Rates of Aortic Dissection)",
    "question": "The relative risk of aortic dissection begins to increase appreciably at 4.0 to 4.4 cm and then increases dramatically at a diameter of:",
    "options": [
      "4.5 cm",
      "3.0 cm",
      "6.5 cm",
      "2.5 cm"
    ],
    "answer": 0,
    "explanation": "The relative risk of aortic dissection begins to increase appreciably at a diameter of 4.0 to 4.4 cm and increases dramatically at 4.5 cm.",
    "why": [
      "Correct. Risk climbs sharply at 4.5 cm.",
      "3.0 cm is within the normal range for the aorta.",
      "The dramatic rise begins at 4.5 cm, well before 6.5 cm.",
      "2.5 cm is a normal aortic diameter."
    ]
  },
  {
    "id": "cse-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Surgical Candidacy & the Aorta",
    "source": "Cardiac Surgery: Elective, slide 31 (Aorta)",
    "question": "Which portion of the aorta is cardiac surgery (open) territory?",
    "options": [
      "Aortic root, ascending thoracic aorta, and aortic arch",
      "Descending aorta and abdominal aorta",
      "Only the abdominal aorta",
      "The femoral arteries"
    ],
    "answer": 0,
    "explanation": "The aortic root, ascending thoracic aorta, and aortic arch are cardiac surgery (open) territory. Beyond the arch, down the descending aorta, is vascular surgery territory (TEVAR/EVAR), though overlap and staged procedures such as the elephant trunk exist.",
    "why": [
      "Correct. Root, ascending aorta, and arch are open cardiac surgery territory.",
      "The descending and abdominal aorta are vascular surgery territory.",
      "The abdominal aorta is handled by vascular surgery, not cardiac.",
      "The femoral arteries are peripheral vessels, not cardiac surgery territory."
    ]
  },
  {
    "id": "cse-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Surgical Candidacy & the Aorta",
    "source": "Cardiac Surgery: Elective, slide 32 (Who is a Surgical Candidate?)",
    "question": "A limitation of the Society of Thoracic Surgery (STS) risk calculator is that it:",
    "options": [
      "Fails to account for frailty and should not replace an in-depth risk vs benefit discussion",
      "Requires a cardiac catheterization to compute",
      "Only applies to patients under 40",
      "Directly measures ejection fraction"
    ],
    "answer": 0,
    "explanation": "The STS risk calculator is an objective measure, but it fails to account for frailty, and sharing the STS score should not replace an in-depth discussion of the risks vs benefits of surgery.",
    "why": [
      "Correct. It does not capture frailty and should not replace a full risk/benefit discussion.",
      "The STS score is computed from clinical data, not a catheterization.",
      "It is not restricted to patients under 40.",
      "It estimates surgical risk; it does not measure ejection fraction."
    ]
  },
  {
    "id": "cse-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Percutaneous & Transcatheter Options",
    "source": "Cardiac Surgery: Elective, slide 35 (PCI)",
    "question": "In percutaneous coronary intervention (PCI):",
    "options": [
      "A guidewire is advanced through the lesion and a stent is deployed to open the coronary",
      "The sternum is opened to bypass the lesion",
      "The aortic valve is replaced",
      "The mitral valve is repaired"
    ],
    "answer": 0,
    "explanation": "In PCI, a guidewire is advanced through the lesion and a stent (or stents) is deployed to open the coronary. A drug-eluting stent (DES) requires dual antiplatelet therapy.",
    "why": [
      "Correct. PCI opens the lesion with a guidewire and stent.",
      "Opening the sternum to bypass a lesion describes CABG, not PCI.",
      "Replacing the aortic valve is AVR/TAVI, not PCI.",
      "Repairing the mitral valve is a valve procedure, not PCI."
    ]
  },
  {
    "id": "cse-020",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Percutaneous & Transcatheter Options",
    "source": "Cardiac Surgery: Elective, slide 41 (TAVI/TAVR)",
    "question": "Select ALL true statements about transcatheter aortic valve intervention (TAVI/TAVR) per this lecture.",
    "options": [
      "The most common access site is the femoral artery",
      "It carries an increased rate of permanent pacemaker requirement compared to SAVR",
      "Patients are placed on aspirin and Plavix",
      "The valve is mechanical and lasts a lifetime"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "TAVI is most commonly done via the femoral artery (carotid is a common alternative), carries an increased rate of permanent pacemaker requirement compared to SAVR, and patients are placed on aspirin and Plavix. The valve is bioprosthetic on a metal cage with a longevity of about 10 years, not mechanical.",
    "why": [
      "Correct. Femoral access is most common.",
      "Correct. TAVI increases the rate of permanent pacemaker requirement vs SAVR.",
      "Correct. Patients receive aspirin and Plavix.",
      "Incorrect. The TAVI valve is bioprosthetic (about 10-year longevity), not mechanical."
    ]
  },
  {
    "id": "cse-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Percutaneous & Transcatheter Options",
    "source": "Cardiac Surgery: Elective, slide 41 (TAVI/TAVR)",
    "question": "During TAVI, the new valve is deployed by:",
    "options": [
      "Rapidly pacing the heart and expanding the valve, crushing the native valve out of the way",
      "Suturing it in through an open sternotomy",
      "Stopping the heart on cardiopulmonary bypass",
      "Freezing the native valve first"
    ],
    "answer": 0,
    "explanation": "In TAVI, the valve is brought close to the heart, the heart is rapidly paced, and the valve is deployed, crushing the current valve out of the way. Patients typically stay in the hospital one night.",
    "why": [
      "Correct. Rapid pacing and expansion deploy the valve over the old one.",
      "Suturing through an open sternotomy describes SAVR, not TAVI.",
      "TAVI does not require cardiopulmonary bypass or arrest.",
      "The native valve is crushed aside, not frozen."
    ]
  },
  {
    "id": "cse-022",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Percutaneous & Transcatheter Options",
    "source": "Cardiac Surgery: Elective, slide 43 (Surgical AVR vs TAVI)",
    "question": "An 83-year-old woman with depression and hypothyroidism has severe aortic stenosis and EF 50%. She is minimally symptomatic, sedentary, lives alone, and has multiple age-related considerations. Which approach best fits her?",
    "options": [
      "TAVI/TAVR, since her age and comorbidities favor a less invasive transcatheter option",
      "Surgical AVR via full sternotomy as the first choice",
      "No intervention ever, regardless of guidelines",
      "A mechanical valve requiring lifelong warfarin"
    ],
    "answer": 0,
    "explanation": "Her severe aortic stenosis meets indication for intervention. Given advanced age and comorbidities, the less invasive transcatheter option (TAVI) is generally favored over surgical AVR. TAVI uses a bioprosthetic valve with aspirin and Plavix and a short hospital stay.",
    "why": [
      "Correct. Age and comorbidities favor the less invasive TAVI here.",
      "A full sternotomy SAVR is more invasive and less favored for this higher-risk patient.",
      "Her severe aortic stenosis does meet indication, so intervention is appropriate.",
      "A mechanical valve (lifelong warfarin) is generally reserved for younger patients."
    ]
  },
  {
    "id": "cse-023",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Percutaneous & Transcatheter Options",
    "source": "Cardiac Surgery: Elective, slide 46 (TEER vs TMVR)",
    "question": "A 72-year-old with a prior mitral repair now has severe recurrent mitral regurgitation despite optimized medical therapy and feels strongly against a redo sternotomy. What can you offer her?",
    "options": [
      "A transcatheter option such as TEER or TMVR",
      "An emergent redo sternotomy regardless of her wishes",
      "Aortic valve replacement",
      "No further treatment"
    ],
    "answer": 0,
    "explanation": "A patient who is symptomatic despite goal-directed medical therapy and wishes to avoid a redo sternotomy can be offered a transcatheter option: transcatheter edge-to-edge repair (TEER) or transcatheter mitral valve replacement (TMVR).",
    "why": [
      "Correct. Transcatheter TEER or TMVR fits a symptomatic patient who wants to avoid a redo sternotomy.",
      "Forcing a redo sternotomy against her wishes ignores a valid less-invasive option.",
      "Her problem is the mitral valve, not the aortic valve.",
      "She remains symptomatic on optimal therapy, so further treatment is warranted."
    ]
  },
  {
    "id": "cse-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Open-Heart Fundamentals",
    "source": "Cardiac Surgery: Elective, slide 52 (The Heart and Lung Machine)",
    "question": "To operate on the heart it must be stopped. To do this safely, the patient is placed on:",
    "options": [
      "Cardiopulmonary bypass (the heart and lung machine), which oxygenates and returns blood while the aorta is cross-clamped",
      "A ventilator only",
      "Extracorporeal dialysis",
      "A temporary pacemaker only"
    ],
    "answer": 0,
    "explanation": "The patient is connected to the heart and lung machine (extracorporeal circuit). Typically the aorta and right atrium are cannulated: blood drains from the right atrium, is oxygenated, and returns via the aortic cannula. The aorta is cross-clamped below the cannula so blood only flows to the body, not the heart.",
    "why": [
      "Correct. Cardiopulmonary bypass takes over oxygenation and circulation while the heart is arrested.",
      "A ventilator alone cannot support circulation during cardiac arrest on the table.",
      "Dialysis filters blood; it does not oxygenate and circulate for a stopped heart.",
      "A pacemaker cannot substitute for circulation while the heart is arrested."
    ]
  },
  {
    "id": "cse-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Open-Heart Fundamentals",
    "source": "Cardiac Surgery: Elective, slide 51 (Cardiac Surgery: A stepwise approach)",
    "question": "Before cannulating for cardiopulmonary bypass, heparin is given to a target activated clotting time (ACT) of:",
    "options": [
      "Greater than 400 seconds",
      "Less than 100 seconds",
      "Exactly 200 seconds",
      "ACT is not monitored"
    ],
    "answer": 0,
    "explanation": "Heparin is given before cannulating to prevent clotting in the circuit, targeting an activated clotting time (ACT) greater than 400 seconds.",
    "why": [
      "Correct. The target ACT before bypass is greater than 400 seconds.",
      "An ACT under 100 seconds is near baseline and unsafe for bypass.",
      "The target is greater than 400 seconds, not exactly 200.",
      "ACT is closely monitored to confirm adequate anticoagulation."
    ]
  },
  {
    "id": "cse-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Open-Heart Fundamentals",
    "source": "Cardiac Surgery: Elective, slide 54 (Cardioplegia and Myocardial Protection)",
    "question": "Cardioplegia used to arrest the heart is:",
    "options": [
      "Blood with high potassium at 4 degrees C, delivered antegrade (or retrograde via the coronary sinus)",
      "Warm blood with no potassium",
      "Normal saline at body temperature",
      "Pure oxygen"
    ],
    "answer": 0,
    "explanation": "Cardioplegia is a preparation of blood with high potassium at 4 degrees C, administered antegrade via a needle in the aorta (or retrograde via the coronary sinus). It should be readministered every 15 to 20 minutes to maintain asystole and protect the myocardium, unless Del Nido cardioplegia is used.",
    "why": [
      "Correct. Cold, high-potassium blood cardioplegia arrests and protects the heart.",
      "Warm, potassium-free blood is the 'hot shot' given to restart the heart, not to arrest it.",
      "Room-temperature saline neither arrests nor protects the myocardium.",
      "Pure oxygen does not induce cardiac arrest."
    ]
  },
  {
    "id": "cse-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "CABG Technique & Grafts",
    "source": "Cardiac Surgery: Elective, slide 57 (CABG)",
    "question": "The two grafts most commonly used for CABG are the:",
    "options": [
      "Greater saphenous vein (GSV) and left internal mammary artery (LIMA)",
      "Radial artery and femoral vein",
      "Aorta and pulmonary artery",
      "Cephalic vein and ulnar artery"
    ],
    "answer": 0,
    "explanation": "The greater saphenous vein (GSV) and left internal mammary artery (LIMA) are the typical grafts. The GSV is usually harvested endoscopically while the LIMA is harvested from underneath the sternum. All-arterial revascularization (radial artery, RIMA) is considered in younger patients.",
    "why": [
      "Correct. GSV and LIMA are the standard CABG grafts.",
      "The radial artery is used in younger patients, but the femoral vein is not a standard CABG graft.",
      "The aorta and pulmonary artery are great vessels, not grafts.",
      "The cephalic vein and ulnar artery are not standard CABG grafts."
    ]
  },
  {
    "id": "cse-028",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "CABG Technique & Grafts",
    "source": "Cardiac Surgery: Elective, slide 63 (Graft Patency Rates)",
    "question": "Match each graft or intervention to its approximate patency or occlusion rate.",
    "pairs": [
      {
        "left": "PCI with drug-eluting stent",
        "right": "About 5% occlusion at 1 year",
        "why": "Drug-eluting stents have about a 5% occlusion rate at 1 year."
      },
      {
        "left": "Saphenous vein graft",
        "right": "About 50% patency at 10 years",
        "why": "Saphenous vein grafts have about 50% patency at 10 years."
      },
      {
        "left": "Internal mammary or radial artery graft",
        "right": "About 90% patency at 10 years",
        "why": "Arterial grafts (IMA or radial) have about 90% patency at 10 years due to normal arterial anatomy."
      }
    ],
    "explanation": "Graft patency: PCI with drug-eluting stents has about 5% occlusion at 1 year; saphenous vein grafts about 50% patency at 10 years; and internal mammary or radial artery grafts about 90% patency at 10 years due to their normal arterial anatomy."
  },
  {
    "id": "cse-029",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "CABG Technique & Grafts",
    "source": "Cardiac Surgery: Elective, slide 65 (Antiplatelet Tx s/p CABG)",
    "question": "Per this lecture, antiplatelet therapy after CABG performed for ACS is:",
    "options": [
      "Dual antiplatelet therapy",
      "Warfarin alone",
      "No antiplatelet therapy",
      "A DOAC alone"
    ],
    "answer": 0,
    "explanation": "Dual antiplatelet therapy is used if CABG is performed for ACS or after a coronary stent. Aspirin or clopidogrel alone is used for CABG not performed for ACS. Warfarin or a DOAC plus aspirin does not improve graft patency; anticoagulation after CABG is indicated for Afib, VTE, or ventricular aneurysm.",
    "why": [
      "Correct. CABG for ACS calls for dual antiplatelet therapy.",
      "Warfarin alone is not the antiplatelet regimen after CABG for ACS.",
      "Some antiplatelet therapy is indicated after CABG, not none.",
      "A DOAC alone does not improve graft patency and is not the answer here."
    ]
  },
  {
    "id": "cse-030",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "CABG Technique & Grafts",
    "source": "Cardiac Surgery: Elective, slide 62 (Off-Pump CABG)",
    "question": "Off-pump CABG may be chosen when:",
    "options": [
      "Ischemic ventricles will not tolerate arrest and the bypassable lesion is easily visualized",
      "The patient needs a valve replaced",
      "The aorta must be cross-clamped for a long time",
      "The heart must be arrested with cardioplegia"
    ],
    "answer": 0,
    "explanation": "Off-pump CABG is considered when ischemic ventricles will not tolerate arrest and the bypassable lesion is easily visualized. It is technically more challenging with a possible compromise in quality; advances in temporary ventricular assist devices give more runway to arrest and recover hearts with significant LV dysfunction.",
    "why": [
      "Correct. It suits ventricles that will not tolerate arrest with an accessible lesion.",
      "A valve replacement requires bypass, not an off-pump coronary approach.",
      "Long aortic cross-clamping implies on-pump arrest, the opposite of off-pump.",
      "Arresting the heart with cardioplegia is the on-pump approach."
    ]
  },
  {
    "id": "cse-031",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Valve Surgery",
    "source": "Cardiac Surgery: Elective, slide 67 (Aortic Valve Selection and Implications)",
    "question": "Match each aortic valve feature to the correct valve type.",
    "pairs": [
      {
        "left": "Recommended for age 50 and older",
        "right": "Bioprosthetic",
        "why": "Bioprosthetic (porcine or bovine) valves are used at age 50+, with about 15-year longevity."
      },
      {
        "left": "Recommended for age under 50",
        "right": "Mechanical",
        "why": "Mechanical valves suit younger patients (under 50) and last a lifetime."
      },
      {
        "left": "Indefinite warfarin (INR 2-3)",
        "right": "Mechanical",
        "why": "Mechanical valves require indefinite warfarin (INR 2-3), unless the ON-X valve allows a lower INR."
      },
      {
        "left": "Warfarin for only about 3 months, then aspirin",
        "right": "Bioprosthetic",
        "why": "Bioprosthetic valves need warfarin for about 3 months (INR 2-3) plus aspirin."
      }
    ],
    "explanation": "Bioprosthetic valves: porcine or bovine, age 50+, about 15-year longevity, warfarin for about 3 months then aspirin. Mechanical valves: carbon fiber and titanium, age under 50, lifetime longevity, indefinite warfarin (INR 2-3, or lower for the ON-X valve). Note: the same valve type appears as the answer for two prompts here."
  },
  {
    "id": "cse-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Valve Surgery",
    "source": "Cardiac Surgery: Elective, slide 74 (REPAIR the mitral valve whenever possible)",
    "question": "The mitral valve is repaired rather than replaced whenever possible because repair:",
    "options": [
      "Carries less risk and maintains the structural integrity of the heart",
      "Requires lifelong warfarin",
      "Is always faster and cheaper only",
      "Eliminates the need for cardiopulmonary bypass"
    ],
    "answer": 0,
    "explanation": "Repair is preferred because it carries less risk than replacement and maintains the structural integrity of the heart. Repairable valves are typically non-rheumatic, free of endocarditis, with severe regurgitation or prolapse, and involve the posterior leaflet. Functional MR is often addressed with annuloplasty (putting a ring on it to tighten the annulus).",
    "why": [
      "Correct. Repair carries less risk and preserves cardiac structural integrity.",
      "Lifelong warfarin is tied to mechanical replacement, not a reason to prefer repair.",
      "The benefit is risk and structural preservation, not merely speed or cost.",
      "Mitral valve surgery still requires cardiopulmonary bypass."
    ]
  },
  {
    "id": "cse-033",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Valve Surgery",
    "source": "Cardiac Surgery: Elective, slide 76 (Mitral Valve Replacement)",
    "question": "Select ALL indications favoring mitral valve REPLACEMENT rather than repair.",
    "options": [
      "Myxomatous valves that are hard to repair",
      "Mitral valve stenosis",
      "Anterior leaflet pathology or endocarditis",
      "Isolated posterior leaflet prolapse with severe regurgitation"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Indications favoring replacement include myxomatous valves (harder to repair), mitral valve stenosis, anterior leaflet pathology, and endocarditis. Isolated posterior leaflet prolapse with severe regurgitation is typically repairable.",
    "why": [
      "Correct. Myxomatous valves are harder to repair and favor replacement.",
      "Correct. Mitral stenosis favors replacement.",
      "Correct. Anterior leaflet pathology and endocarditis favor replacement.",
      "Incorrect. Posterior leaflet prolapse with severe regurgitation is typically repairable."
    ]
  },
  {
    "id": "cse-034",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Afib Surgery & Aneurysm Repair",
    "source": "Cardiac Surgery: Elective, slide 79 (Cox-Maze Procedure)",
    "question": "The Cox-Maze procedure treats atrial fibrillation by:",
    "options": [
      "Creating a lesion set around the pulmonary veins and atria to form scar that blocks erratic atrial impulses",
      "Replacing the mitral valve",
      "Bypassing the coronary arteries",
      "Implanting a pacemaker in the ventricle"
    ],
    "answer": 0,
    "explanation": "The Cox-Maze procedure creates a lesion set around the pulmonary veins and atria to promote scar tissue that decreases excitability of the cells generating erratic atrial impulses. It is often combined with left atrial appendage exclusion to reduce stroke risk.",
    "why": [
      "Correct. Scar lesions around the pulmonary veins and atria block erratic impulses.",
      "Replacing the mitral valve does not treat the Afib substrate itself.",
      "Coronary bypass addresses ischemia, not the Afib circuit.",
      "A ventricular pacemaker does not ablate the atrial arrhythmia substrate."
    ]
  },
  {
    "id": "cse-035",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Afib Surgery & Aneurysm Repair",
    "source": "Cardiac Surgery: Elective, slide 81 (Watchman Device)",
    "question": "A Watchman device is appropriate for a patient with Afib who:",
    "options": [
      "Is not undergoing surgery or is too frail for it and cannot tolerate anticoagulation",
      "Needs a new aortic valve",
      "Has no history of Afib",
      "Requires emergent CABG"
    ],
    "answer": 0,
    "explanation": "A Watchman device is used for a patient with a history of Afib who is not undergoing surgery, or is too frail for it, and who cannot tolerate anticoagulation. It occludes the left atrial appendage to reduce stroke risk.",
    "why": [
      "Correct. It fits an Afib patient not having surgery who cannot tolerate anticoagulation.",
      "A Watchman does not address aortic valve disease.",
      "It is used for Afib-related stroke risk, so a history of Afib is expected.",
      "It is not a treatment for acute coronary revascularization."
    ]
  },
  {
    "id": "cse-036",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Afib Surgery & Aneurysm Repair",
    "source": "Cardiac Surgery: Elective, slide 78 (If pt has Hx of Afib and will undergo Cardiac Surgery)",
    "question": "Left atrial appendage exclusion during Afib surgery reduces the stroke risk associated with Afib.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "True. Left atrial appendage (LAA) exclusion decreases the stroke risk associated with Afib. Anticoagulation is still recommended for the initial 3 months in patients with a history of Afib after ablation with LAA exclusion.",
    "why": [
      "Correct. LAA exclusion lowers Afib-related stroke risk.",
      "Incorrect. LAA exclusion does reduce Afib-related stroke risk."
    ]
  },
  {
    "id": "cse-037",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Afib Surgery & Aneurysm Repair",
    "source": "Cardiac Surgery: Elective, slide 82 (Thoracic Aortic Aneurysm Repair)",
    "question": "Repair of an aortic arch aneurysm may require circulatory arrest with antegrade cerebral perfusion, including cooling the patient to about:",
    "options": [
      "18 degrees C",
      "37 degrees C",
      "30 degrees C",
      "No cooling is needed"
    ],
    "answer": 0,
    "explanation": "Aortic arch aneurysm repair may require alternative arterial cannulation and circulatory arrest with antegrade cerebral perfusion. During circulatory arrest the ECMO circuit is off and the brain is perfused via cannulas, requiring cooling to 18 degrees C, propofol, and ice around the head.",
    "why": [
      "Correct. Deep hypothermic circulatory arrest cools the patient to about 18 degrees C.",
      "37 degrees C is normal body temperature, not the target for circulatory arrest.",
      "The target is deeper (about 18 degrees C), not 30 degrees C.",
      "Profound cooling is specifically required for arch repair with circulatory arrest."
    ]
  },
  {
    "id": "cse-038",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Post-op Recovery & Complications",
    "source": "Cardiac Surgery: Elective, slide 92 (ERAS Protocol)",
    "question": "Select ALL goals of the Enhanced Recovery After Surgery (ERAS) protocol.",
    "options": [
      "Promote early mobility",
      "Reduce opioid use",
      "Decrease rates of infection and delirium",
      "Encourage prolonged bed rest"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "ERAS aims to promote early mobility, reduce opioid use, decrease rates of infection, improve blood glucose regulation and post-op nausea, promote early gut motility, decrease delirium, and expedite recovery. Prolonged bed rest is contrary to ERAS.",
    "why": [
      "Correct. Early mobility is a core ERAS goal.",
      "Correct. Reducing opioid use is an ERAS goal.",
      "Correct. Lowering infection and delirium rates are ERAS goals.",
      "Incorrect. ERAS discourages prolonged bed rest in favor of early mobility."
    ]
  },
  {
    "id": "cse-039",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Post-op Recovery & Complications",
    "source": "Cardiac Surgery: Elective, slide 91 (Post-op Recovery)",
    "question": "A cardiac surgery patient can be extubated within 4 hours if they are hemodynamically stable, following commands, and:",
    "options": [
      "Have no significant chest tube output",
      "Have a new fever",
      "Have low urine output",
      "Are still on high-dose pressors"
    ],
    "answer": 0,
    "explanation": "Extubation within 4 hours of surgery is appropriate if the patient is hemodynamically stable, following commands, and has no significant chest tube output. Patients spend about 36 hours in critical care and are hospitalized about 5 days with early mobility and pulmonary rehab.",
    "why": [
      "Correct. No significant chest tube output is one of the extubation criteria.",
      "A new fever is a reason for concern, not a green light to extubate.",
      "Low urine output suggests instability, not readiness to extubate.",
      "Needing high-dose pressors indicates the patient is not yet stable enough."
    ]
  },
  {
    "id": "cse-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Post-op Recovery & Complications",
    "source": "Cardiac Surgery: Elective, slide 99 (HIT)",
    "question": "In heparin-induced thrombocytopenia (HIT), platelets drop 50% from baseline. Appropriate management includes:",
    "options": [
      "Hold all heparin products, check PF4, and start argatroban if suspicion is high; do NOT transfuse platelets",
      "Continue heparin and transfuse platelets",
      "Give more heparin at a higher dose",
      "Ignore it, as it resolves on its own"
    ],
    "answer": 0,
    "explanation": "In HIT, hold all heparin products and check PF4. If suspicion is high, start argatroban even before PF4 results. Consult heme/onc, do NOT transfuse platelets, and watch for petechiae or skin necrosis, which can lead to limb loss.",
    "why": [
      "Correct. Stop all heparin, check PF4, start argatroban if suspicion is high, and avoid platelet transfusion.",
      "Continuing heparin and transfusing platelets worsens the thrombotic risk in HIT.",
      "More heparin is exactly the wrong move in HIT.",
      "HIT is dangerous and requires active management, not observation."
    ]
  },
  {
    "id": "cse-041",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Post-op Recovery & Complications",
    "source": "Cardiac Surgery: Elective, slide 96 (Causes of Post-op Low Cardiac Output Syndrome)",
    "question": "Select ALL causes of post-op low cardiac output syndrome.",
    "options": [
      "Myocardial stunning",
      "Cardiac tamponade from bleeding into the pericardium",
      "Hypovolemia from bleeding or vasoplegia",
      "A normal, well-functioning graft"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Causes of post-op low cardiac output syndrome include myocardial stunning (air, poor target, or early graft closure), hypothermia, hypovolemia from bleeding or vasoplegia, cardiac tamponade, hypoxemia, acidosis, and arrhythmia. A normal, well-functioning graft is not a cause.",
    "why": [
      "Correct. Myocardial stunning is a cause.",
      "Correct. Tamponade from pericardial bleeding is a cause.",
      "Correct. Hypovolemia from bleeding or vasoplegia is a cause.",
      "Incorrect. A normal, well-functioning graft would not cause low output."
    ]
  },
  {
    "id": "cse-042",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Elective",
    "section": "Post-op Recovery & Complications",
    "source": "Cardiac Surgery: Elective, slide 94 (Post-op Management: The Usual)",
    "question": "A post-op patient develops chest pain, SOB, fatigue, diaphoresis, elevated WBC, and fever, with an elevated ESR. This suggests postpericardiotomy syndrome, treated with:",
    "options": [
      "Colchicine",
      "Emergent CABG",
      "A heparin infusion",
      "Immediate transplant"
    ],
    "answer": 0,
    "explanation": "Postpericardiotomy syndrome presents with chest pain, SOB, fatigue, diaphoresis, elevated WBC, and fever. Check the ESR, and if elevated, start colchicine.",
    "why": [
      "Correct. Elevated ESR postpericardiotomy syndrome is treated with colchicine.",
      "This is an inflammatory syndrome, not an indication for emergent CABG.",
      "A heparin infusion does not treat postpericardiotomy inflammation.",
      "Transplant is not the treatment for postpericardiotomy syndrome."
    ]
  },
  {
    "id": "csa-001",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "ACS Management",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 105 (Cardiac Physiology)",
    "question": "Match each hemodynamic term to its definition.",
    "pairs": [
      {
        "left": "Preload",
        "right": "Volume",
        "why": "Preload is the volume filling the ventricle."
      },
      {
        "left": "Afterload",
        "right": "Resistance the heart pumps against",
        "why": "Afterload is the resistance the heart has to pump against."
      },
      {
        "left": "Contractility",
        "right": "Strength of squeeze",
        "why": "Contractility is the strength of the heart's squeeze."
      }
    ],
    "explanation": "Preload is volume, afterload is the resistance the heart has to pump against, and contractility is the strength of the squeeze. These three determine cardiac output."
  },
  {
    "id": "csa-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "ACS Management",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 108 (Acute Coronary Syndrome)",
    "question": "A patient has an acute total occlusion of a coronary artery with ST elevation and elevated troponin. The priority is:",
    "options": [
      "Emergent cardiac cath with a door-to-balloon time under 90 minutes",
      "Admit and trend troponin over several days",
      "Outpatient stress test",
      "Discharge on aspirin"
    ],
    "answer": 0,
    "explanation": "A STEMI is an acute total occlusion with ST elevation and elevated troponin, requiring emergent cardiac cath (door-to-balloon under 90 minutes). Even with severe multivessel CAD, fixing the culprit lesion percutaneously to get the patient out of trouble may be preferable to reduce the mortality of a pump run on injured myocardium.",
    "why": [
      "Correct. STEMI needs emergent cath with door-to-balloon under 90 minutes.",
      "Trending troponin over days fits NSTEMI, not an acute total occlusion with ST elevation.",
      "An outpatient stress test is inappropriate for an acute occlusion.",
      "Discharge is unsafe for an evolving STEMI."
    ]
  },
  {
    "id": "csa-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "ACS Management",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 108 (Acute Coronary Syndrome)",
    "question": "If a STEMI patient with severe multivessel CAD needs CABG, the timing recommendation is to operate in:",
    "options": [
      "Under 6 hours, or wait 6 days, to decrease the risk of mortality",
      "Exactly 3 hours only",
      "Always at least 2 weeks later",
      "Immediately during the same catheterization"
    ],
    "answer": 0,
    "explanation": "When CABG is needed after STEMI, operate in under 6 hours or wait 6 days to decrease the risk of mortality. The patient may need mechanical support in the interim.",
    "why": [
      "Correct. Operate under 6 hours or wait 6 days to reduce mortality.",
      "There is no exclusive 3-hour window in this guidance.",
      "A mandatory 2-week delay is not the stated recommendation.",
      "CABG is a separate operation, not performed during the cath itself."
    ]
  },
  {
    "id": "csa-004",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "ACS Management",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 109 (ACS)",
    "question": "Select ALL components of initial medical management of ACS per this lecture.",
    "options": [
      "Aspirin (ASA)",
      "Heparin infusion",
      "Nitroglycerin infusion if ongoing chest pain or hypertension",
      "Warfarin for graft patency"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "ACS medical management includes aspirin, a heparin infusion, and a nitroglycerin infusion if the patient has ongoing chest pain or hypertension. Dual antiplatelet therapy is added after PCI if not going to the OR soon; Integrilin is used if going to the OR within about a week; and an IABP can improve coronary perfusion. Warfarin is not part of this regimen.",
    "why": [
      "Correct. Aspirin is given.",
      "Correct. A heparin infusion is given.",
      "Correct. Nitroglycerin infusion is used for ongoing chest pain or hypertension.",
      "Incorrect. Warfarin is not part of ACS medical management here."
    ]
  },
  {
    "id": "csa-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Pathophysiology & Recognition",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 113 (Causes of Cardiogenic Shock)",
    "question": "The most common cause of cardiogenic shock is:",
    "options": [
      "Myocardial infarction with significant tissue loss",
      "Pulmonary embolism",
      "Sepsis",
      "Dehydration"
    ],
    "answer": 0,
    "explanation": "Myocardial infarction with significant tissue loss is one of the most common causes of cardiogenic shock. Other causes include valvular dysfunction, severe heart failure, dysrhythmias, cardiomyopathies, myocarditis, and congenital or structural abnormalities.",
    "why": [
      "Correct. MI with significant tissue loss is a leading cause.",
      "PE causes obstructive shock, not primarily cardiogenic shock here.",
      "Sepsis causes distributive shock, not cardiogenic shock.",
      "Dehydration causes hypovolemic shock, not cardiogenic shock."
    ]
  },
  {
    "id": "csa-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Pathophysiology & Recognition",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 112 (Pathogenesis of Cardiogenic Shock)",
    "question": "At the cellular level, cardiogenic shock leads to:",
    "options": [
      "O2 demand exceeding O2 supply, anaerobic metabolism, lactic acid buildup, and cell death",
      "Increased tissue perfusion and improved oxygenation",
      "A rise in cardiac output",
      "Decreased lactic acid production"
    ],
    "answer": 0,
    "explanation": "At the systemic level, decreased contractility lowers CO/CI causing hypotension and reflex vasoconstriction, worsening central congestion and oxygenation. At the cellular level, decreased tissue perfusion means O2 demand exceeds O2 supply, driving anaerobic metabolism, lactic acid buildup, and cell death.",
    "why": [
      "Correct. Demand outstrips supply, causing anaerobic metabolism and cell death.",
      "Tissue perfusion decreases in shock, not increases.",
      "Cardiac output falls in cardiogenic shock.",
      "Lactic acid rises due to anaerobic metabolism."
    ]
  },
  {
    "id": "csa-007",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Pathophysiology & Recognition",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 111 (Patient Presentation)",
    "question": "Select ALL clinical presentation findings of cardiogenic shock.",
    "options": [
      "Lethargy, confusion, or altered mental status",
      "Cold, clammy, mottled extremities",
      "Echo with depressed EF or wall motion abnormalities",
      "Warm, well-perfused extremities with brisk capillary refill"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cardiogenic shock presents with lethargy, confusion, or altered mental status; cold, clammy, mottled extremities; and an echo showing depressed EF or wall motion abnormalities. Warm, well-perfused extremities are not typical of cardiogenic shock.",
    "why": [
      "Correct. AMS is a presentation finding.",
      "Correct. Cold, clammy, mottled extremities are typical.",
      "Correct. Depressed EF or wall motion abnormalities support the diagnosis.",
      "Incorrect. Warm, well-perfused extremities argue against cardiogenic shock."
    ]
  },
  {
    "id": "csa-008",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Pathophysiology & Recognition",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 111 (Hemodynamics/Biomarkers)",
    "question": "Select ALL hemodynamic or biomarker findings consistent with cardiogenic shock.",
    "options": [
      "Systolic blood pressure < 90",
      "Cardiac index < 2.2",
      "Urine output < 30 cc/hr and lactic acid > 2 mmol/L",
      "Cardiac index > 4.0 with normal lactate"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cardiogenic shock is marked by SBP < 90, cardiac index < 2.2, urine output < 30 cc/hr, lactic acid > 2 mmol/L, and often elevated creatinine and liver enzymes. A high cardiac index with normal lactate is not consistent with shock.",
    "why": [
      "Correct. SBP < 90 is a marker.",
      "Correct. CI < 2.2 is a marker.",
      "Correct. Low urine output and elevated lactate are markers.",
      "Incorrect. A high CI with normal lactate does not indicate shock."
    ]
  },
  {
    "id": "csa-009",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Pathophysiology & Recognition",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 110 (The STEMI from last night is looking shocky)",
    "question": "A patient treated for STEMI last night now has SBP in the 80s, cold clammy extremities, confusion, urine output 20 cc/hr, and a rising lactate. This picture is best described as:",
    "options": [
      "Cardiogenic shock",
      "A normal post-STEMI recovery",
      "Simple dehydration",
      "An allergic reaction"
    ],
    "answer": 0,
    "explanation": "Hypotension, cold clammy extremities, altered mental status, low urine output, and a rising lactate after a STEMI indicate cardiogenic shock from myocardial tissue loss. This warrants CVICU-level monitoring and escalation.",
    "why": [
      "Correct. The findings define cardiogenic shock after STEMI.",
      "These are signs of deterioration, not normal recovery.",
      "Dehydration causes hypovolemic shock, not this post-MI cardiogenic picture.",
      "Nothing here suggests an allergic reaction."
    ]
  },
  {
    "id": "csa-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 117 (The Swan-Ganz Catheter)",
    "question": "The Swan-Ganz (pulmonary artery) catheter allows for:",
    "options": [
      "Invasive hemodynamic monitoring, direct delivery of drugs, and mixed venous blood gas sampling",
      "Coronary artery stenting",
      "Replacing the aortic valve",
      "Measuring the ejection fraction directly"
    ],
    "answer": 0,
    "explanation": "The Swan-Ganz catheter allows invasive hemodynamic monitoring, direct delivery of drugs, and drawing mixed venous blood gases. Its waveform lets you identify where the tip of the balloon is, including the wedged position.",
    "why": [
      "Correct. It provides invasive monitoring, drug delivery, and mixed venous sampling.",
      "The Swan-Ganz does not stent coronaries.",
      "It does not replace valves.",
      "EF is measured by echo, not directly by the Swan-Ganz."
    ]
  },
  {
    "id": "csa-011",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 118 (Gathering Data in the CVICU)",
    "question": "Match each hemodynamic parameter to what it primarily reflects.",
    "pairs": [
      {
        "left": "CI (cardiac index)",
        "right": "Contractility / cardiac output",
        "why": "CI, CO, and SvO2 reflect contractility and cardiac output."
      },
      {
        "left": "CVP and PAWP",
        "right": "Preload",
        "why": "CVP (central venous pressure) and PAWP (pulmonary artery wedge pressure) reflect preload."
      },
      {
        "left": "SVR",
        "right": "Afterload",
        "why": "SVR (systemic vascular resistance) and BP reflect afterload."
      },
      {
        "left": "PAPi",
        "right": "RV dysfunction",
        "why": "PAPi (pulmonary artery pulsatility index) reflects RV dysfunction."
      }
    ],
    "explanation": "In the CVICU: CI, CO, and SvO2 reflect contractility and cardiac output; CVP and PAWP reflect preload; SVR and BP reflect afterload; and PAPi reflects RV dysfunction."
  },
  {
    "id": "csa-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 119 (PAPi and PCWP)",
    "question": "Per this lecture, the pulmonary artery pulsatility index (PAPi) is calculated as:",
    "options": [
      "(sPAP - dPAP) / CVP, with a value greater than 1.5 desired",
      "sPAP multiplied by CVP",
      "CVP divided by SVR",
      "SBP minus DBP"
    ],
    "answer": 0,
    "explanation": "PAPi = (sPAP - dPAP) / CVP, with a target greater than 1.5. A low PAPi suggests RV dysfunction. The normal PCWP is roughly 4-6 to 12-15 mmHg.",
    "why": [
      "Correct. PAPi is the PA pulse pressure divided by CVP, target above 1.5.",
      "PAPi is a ratio, not a product of sPAP and CVP.",
      "That formula does not describe PAPi.",
      "SBP minus DBP is the systemic pulse pressure, not PAPi."
    ]
  },
  {
    "id": "csa-013",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 120 (Question)",
    "question": "A patient has CI 1.8, CVP 8, sPAP 32, SVR 2,000, SBP 140. What does this patient primarily need?",
    "options": [
      "Afterload reduction",
      "Inotropic support",
      "Preload optimization"
    ],
    "answer": 0,
    "explanation": "The cardiac index is low (1.8) and the SVR is very high (2,000) with a high SBP (140). The heart is pumping against excessive resistance, so afterload reduction (a vasodilator such as nitroglycerin or nicardipine) is the priority.",
    "why": [
      "Correct. A very high SVR with high blood pressure calls for afterload reduction.",
      "Preload (CVP 8) is adequate, so inotropes are not the first move here.",
      "CVP is adequate, so adding preload would not address the high resistance."
    ]
  },
  {
    "id": "csa-014",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 121 (Question)",
    "question": "A patient has CI 2.0, CVP 3, sPAP 21, SVR 800, SBP 100s. What does this patient primarily need?",
    "options": [
      "Preload optimization",
      "Inotropic support",
      "Increase afterload"
    ],
    "answer": 0,
    "explanation": "The CVP is low (3) and the sPAP is low (21) with a borderline cardiac index, indicating the patient is underfilled. Preload optimization (volume) is the priority.",
    "why": [
      "Correct. A low CVP and low PA pressure indicate the patient needs volume.",
      "With a normal SVR and near-normal CI, inotropes are not the first need.",
      "The SVR (800) is normal, so raising afterload is not indicated."
    ]
  },
  {
    "id": "csa-015",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 122 (Question)",
    "question": "A patient has CI 2.2, CVP 6, sPAP 27, SBP 90, SVR 600. What does this patient primarily need?",
    "options": [
      "Increase afterload",
      "Inotropic support",
      "Preload optimization"
    ],
    "answer": 0,
    "explanation": "The SVR is low (600) with a low SBP (90) despite adequate preload (CVP 6) and an acceptable cardiac index. The problem is low vascular tone, so increasing afterload with a vasopressor is the priority.",
    "why": [
      "Correct. A low SVR with hypotension calls for a vasopressor to increase afterload.",
      "The cardiac index is acceptable, so contractility is not the main problem.",
      "Preload (CVP 6) is adequate, so volume is not the primary need."
    ]
  },
  {
    "id": "csa-016",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "CVICU Hemodynamics",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 123 (Question)",
    "question": "A patient has CI 1.9, CVP 8, sPAP 30, SVR 800, SBP 100s. What does this patient primarily need?",
    "options": [
      "Inotropic support",
      "Preload optimization",
      "Increase afterload"
    ],
    "answer": 0,
    "explanation": "The cardiac index is low (1.9) despite adequate preload (CVP 8) and a normal SVR (800) with an acceptable blood pressure. The heart is not squeezing well enough, so inotropic support is the priority.",
    "why": [
      "Correct. Low CI with adequate preload and normal SVR points to a contractility problem.",
      "Preload (CVP 8) is already adequate.",
      "The SVR (800) is normal, so raising afterload is not indicated."
    ]
  },
  {
    "id": "csa-017",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Management & Pharmacotherapy",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 128 (Cardiac Pharmacotherapy)",
    "question": "Match each drug to its pharmacologic class.",
    "pairs": [
      {
        "left": "Dobutamine",
        "right": "Inotrope",
        "why": "Dobutamine is an inotrope (along with epinephrine and milrinone)."
      },
      {
        "left": "Levophed (norepinephrine)",
        "right": "Vasopressor",
        "why": "Levophed is a vasopressor, along with phenylephrine, vasopressin, and angiotensin II."
      },
      {
        "left": "Nitroglycerin",
        "right": "Vasodilator",
        "why": "Nitroglycerin is a vasodilator, along with nicardipine and clevidipine."
      },
      {
        "left": "Lasix",
        "right": "Diuretic",
        "why": "Lasix (furosemide) is a diuretic, along with Bumex, Diuril, and metolazone."
      }
    ],
    "explanation": "Cardiac pharmacotherapy classes: inotropes (dobutamine, epinephrine, milrinone), vasopressors (levophed, phenylephrine, vasopressin, angiotensin II), vasodilators (nitroglycerin, nicardipine, clevidipine), and diuretics (Lasix, Bumex, Diuril, metolazone)."
  },
  {
    "id": "csa-018",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Management & Pharmacotherapy",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 130 (Optimize Rate and Rhythm)",
    "question": "Select ALL appropriate ways to optimize rate and rhythm in cardiogenic shock.",
    "options": [
      "Amiodarone or lidocaine for arrhythmias",
      "Cardioversion or shock for an unstable patient",
      "Pacing for bradycardia affecting perfusion or heart blocks",
      "Withholding all electrolyte correction"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Optimizing rate and rhythm includes amiodarone or lidocaine, a beta-blocker for rate control (mindful of BP), cardioversion or shock for an unstable patient, and correcting electrolyte imbalances. Pace when necessary for bradycardia affecting perfusion or heart blocks; dobutamine and dopamine have a chronotropic effect. Withholding electrolyte correction is wrong.",
    "why": [
      "Correct. Amiodarone or lidocaine treat arrhythmias.",
      "Correct. Cardioversion or shock is used for the unstable patient.",
      "Correct. Pacing is used for bradycardia affecting perfusion or heart blocks.",
      "Incorrect. Electrolyte imbalances should be corrected, not ignored."
    ]
  },
  {
    "id": "csa-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Management & Pharmacotherapy",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 130 (Optimize Rate and Rhythm)",
    "question": "Besides raising contractility, dobutamine and dopamine are useful in bradycardia because they:",
    "options": [
      "Have a chronotropic effect (increase heart rate)",
      "Are pure vasoconstrictors",
      "Act as diuretics",
      "Lower the heart rate"
    ],
    "answer": 0,
    "explanation": "Dobutamine and dopamine have a chronotropic effect, increasing heart rate, which is useful when bradycardia affects perfusion, in addition to pacing when necessary.",
    "why": [
      "Correct. Both have a chronotropic (rate-increasing) effect.",
      "They are inotropes with chronotropic effects, not pure vasoconstrictors.",
      "They are not diuretics.",
      "They raise, not lower, heart rate."
    ]
  },
  {
    "id": "csa-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Management & Pharmacotherapy",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 126 (Question)",
    "question": "A patient presents with acute SOB, afib with RVR (rate 120s), SBP 90s, SpO2 88% on room air, pulmonary congestion on CXR, BNP 20,000, EF 20% on POCUS, and critical aortic stenosis. This is best characterized as:",
    "options": [
      "Cardiogenic shock with acute decompensated heart failure",
      "Simple anxiety",
      "A hypertensive emergency",
      "Purely a respiratory infection"
    ],
    "answer": 0,
    "explanation": "Afib with RVR, hypotension, hypoxia, pulmonary congestion, a very high BNP, EF 20%, and critical aortic stenosis describe cardiogenic shock with acute decompensated heart failure. Management addresses rate and rhythm, congestion, and the underlying valve disease, with mechanical support if needed.",
    "why": [
      "Correct. The findings define cardiogenic shock with decompensated heart failure.",
      "The objective findings (EF 20%, BNP 20,000, hypoxia) far exceed anxiety.",
      "The blood pressure is low, not a hypertensive emergency.",
      "The pulmonary congestion is cardiogenic, not a simple infection."
    ]
  },
  {
    "id": "csa-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Cardiogenic Shock Management & Pharmacotherapy",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 131 (Temporary External Pacemaker)",
    "question": "A temporary external pacemaker is indicated when:",
    "options": [
      "Bradycardia or heart block is compromising perfusion",
      "The patient is in stable sinus rhythm",
      "Blood pressure is elevated with a normal rate",
      "The patient has an isolated skin rash"
    ],
    "answer": 0,
    "explanation": "Pace when necessary, such as bradycardia affecting perfusion or heart blocks. A temporary external pacemaker supports rate until the underlying problem is corrected.",
    "why": [
      "Correct. Pacing supports perfusion during bradycardia or heart block.",
      "Stable sinus rhythm does not require pacing.",
      "Elevated BP with a normal rate is not a pacing indication.",
      "A skin rash is unrelated to pacing."
    ]
  },
  {
    "id": "csa-022",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Mechanical Circulatory Support",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 135 (Mechanical Support)",
    "question": "Match each mechanical support device to its approximate flow or role.",
    "pairs": [
      {
        "left": "IABP (intra-aortic balloon pump)",
        "right": "About 0.5 L/min, LV support",
        "why": "The IABP adds about 0.5 L/min and improves coronary perfusion."
      },
      {
        "left": "Impella CP",
        "right": "About 3.5 L/min, LV support",
        "why": "The Impella CP provides about 3.5 L/min of LV support."
      },
      {
        "left": "Impella 5.5",
        "right": "About 5.5 L/min, LV support",
        "why": "The Impella 5.5 provides about 5.5 L/min of LV support."
      },
      {
        "left": "Impella RP",
        "right": "About 4.0 L/min, RV support",
        "why": "The Impella RP provides about 4.0 L/min of RV support."
      },
      {
        "left": "VA ECMO",
        "right": "About 7 L/min, biventricular support",
        "why": "VA ECMO provides about 7 L/min and supports both ventricles."
      }
    ],
    "explanation": "LV support: IABP about 0.5 L/min, Impella CP about 3.5 L/min, Impella 5.5 about 5.5 L/min. RV support: Impella RP about 4.0 L/min. Biventricular: VA ECMO about 7 L/min (often with an IABP or Impella, EcPella, to unload the LV; BiPella is Impella RP plus CP/5.5)."
  },
  {
    "id": "csa-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Mechanical Circulatory Support",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 136 (ECMO)",
    "question": "The key distinction between VA and VV ECMO is that:",
    "options": [
      "VA ECMO supports cardiogenic shock (circulation), while VV ECMO supports respiratory failure",
      "VA ECMO is only for respiratory failure",
      "VV ECMO replaces the heart valves",
      "They are interchangeable in all situations"
    ],
    "answer": 0,
    "explanation": "Veno-arterial (VA) ECMO supports circulation in cardiogenic shock; be mindful of North/South syndrome with peripheral cannulation and of inadequate drainage with LV distention. Veno-venous (VV) ECMO supports respiratory failure. The heart can also be unloaded while on ECMO.",
    "why": [
      "Correct. VA supports circulation (cardiogenic shock); VV supports the lungs.",
      "VA ECMO supports circulation, not respiratory failure alone.",
      "ECMO does not replace heart valves.",
      "They serve different purposes and are not interchangeable."
    ]
  },
  {
    "id": "csa-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Mechanical Circulatory Support",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 136 (ECMO)",
    "question": "North/South syndrome (differential hypoxia) is a concern with:",
    "options": [
      "Peripheral cannulation on VA ECMO",
      "VV ECMO for respiratory failure",
      "An IABP",
      "A temporary pacemaker"
    ],
    "answer": 0,
    "explanation": "North/South syndrome is an issue with peripheral cannulation on VA ECMO, where poorly oxygenated blood from the native heart perfuses the upper body while oxygenated ECMO blood perfuses the lower body. Inadequate drainage causing LV distention is another VA ECMO concern.",
    "why": [
      "Correct. North/South syndrome arises with peripheral VA ECMO cannulation.",
      "VV ECMO does not cause the differential upper-body hypoxia of North/South syndrome.",
      "An IABP does not cause North/South syndrome.",
      "A pacemaker is unrelated to this phenomenon."
    ]
  },
  {
    "id": "csa-025",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Mechanical Circulatory Support",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 133 (Question - JP)",
    "question": "JP, 52, had a witnessed arrest with ROSC and a stented proximal LAD (TIMI 2, residual clot). In the CVICU on an Impella CP at 3.5 L/min he has CI 1.9, MAP 50s, lactate 3, SvO2 40, urine output 15-20 cc/hr, and EF 15% on maximal levophed, vasopressin, epinephrine, and dobutamine. How can you better support him?",
    "options": [
      "Escalate mechanical support (for example Impella 5.5 or VA ECMO), since he is failing maximal pharmacologic and current device support",
      "Stop all inotropes and observe",
      "Discharge him home on oral medications",
      "Remove the Impella and give only IV fluids"
    ],
    "answer": 0,
    "explanation": "Despite maximal pharmacotherapy and an Impella CP, JP has a low CI, low MAP, rising lactate, very low SvO2, and poor urine output. He needs escalation of mechanical support, such as an Impella 5.5 or VA ECMO, because if the patient is not getting better, the patient is getting worse.",
    "why": [
      "Correct. Failing on max support means escalating mechanical circulatory support.",
      "Stopping inotropes would remove the support keeping him alive.",
      "He is in critical condition and cannot be discharged.",
      "Removing the Impella and giving only fluids would abandon needed circulatory support."
    ]
  },
  {
    "id": "csa-026",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Mechanical Circulatory Support",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 142 (Bridge to Recovery)",
    "question": "A patient with EF 20% is being bridged to recovery. To protect against fatal arrhythmias while awaiting ventricular recovery (about 3 months), they are discharged with:",
    "options": [
      "A LifeVest (wearable defibrillator), with AICD qualification if EF does not improve at 3 months",
      "An immediate permanent AICD before any recovery period",
      "No arrhythmia protection at all",
      "A Watchman device"
    ],
    "answer": 0,
    "explanation": "Mechanical devices bridge to recovery, transplant, or the fridge. For recovery, you revascularize, fix valve or rhythm problems, and allow about 3 months for ventricular recovery on goal-directed medical therapy. With EF < 35%, patients risk fatal VT/VFib and are discharged with a LifeVest; if EF does not improve at 3 months, they qualify for an AICD.",
    "why": [
      "Correct. A LifeVest bridges the recovery window; AICD if EF stays low at 3 months.",
      "An AICD is placed only if EF fails to improve after the recovery period.",
      "Low-EF patients need arrhythmia protection, not none.",
      "A Watchman addresses Afib stroke risk, not ventricular arrhythmia protection."
    ]
  },
  {
    "id": "csa-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Heart Transplantation",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 144 (Donor Selection and Management)",
    "question": "For heart transplantation, the cold ischemia time for the donor heart is ideally limited to:",
    "options": [
      "4 hours",
      "24 hours",
      "30 minutes",
      "12 hours"
    ],
    "answer": 0,
    "explanation": "Cold ischemia time is ideally limited to 4 hours. Donor selection avoids CHD, HTN, HIV, HBV, and HCV; uses pre-donation echo and ABO-compatible matching (HLA typing is not used as in renal transplant); preserves the heart with hyperkalemic (UW) cardioplegia; and limits donor-recipient distance by jet to about 1,500 miles.",
    "why": [
      "Correct. Cold ischemia time is ideally kept under 4 hours.",
      "24 hours far exceeds the safe ischemic window for a heart.",
      "30 minutes is unnecessarily short and impractical for transport.",
      "12 hours exceeds the ideal 4-hour limit."
    ]
  },
  {
    "id": "csa-028",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Heart Transplantation",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 147 (Post-Transplant Immunosuppression)",
    "question": "Match each post-transplant immunosuppressant to its mechanism.",
    "pairs": [
      {
        "left": "Prednisone",
        "right": "Suppresses cytokine gene expression, reducing inflammation and T-cell activation",
        "why": "Prednisone suppresses cytokine gene expression, decreasing inflammation and T-cell activation."
      },
      {
        "left": "Mycophenolate (MMF)",
        "right": "Inhibits IMPDH, blocking de novo purine synthesis in lymphocytes",
        "why": "MMF inhibits IMPDH, blocking de novo purine synthesis that T and B lymphocytes rely on."
      },
      {
        "left": "Tacrolimus",
        "right": "Inhibits calcineurin, reducing IL-2 transcription and T-cell activation",
        "why": "Tacrolimus inhibits calcineurin, lowering IL-2 transcription and T-cell activation."
      }
    ],
    "explanation": "Prednisone suppresses cytokine gene expression; mycophenolate (MMF) inhibits IMPDH to block de novo purine synthesis that lymphocytes depend on; and tacrolimus inhibits calcineurin, reducing IL-2 transcription and T-cell activation."
  },
  {
    "id": "csa-029",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Heart Transplantation",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 148 (Post-Transplant Management Issues)",
    "question": "The transplanted heart is surgically denervated, which means that:",
    "options": [
      "It does not respond to indirect autonomic input, so pacing is needed for bradyarrhythmia and it responds to circulating catecholamines",
      "It responds normally to vagal tone",
      "It never needs pacing",
      "It is immune to rejection"
    ],
    "answer": 0,
    "explanation": "Implantation leaves the recipient with a surgically denervated heart that responds to circulating adrenergic catecholamines; pacing is necessary for bradyarrhythmia. Other concerns include rejection, diffuse concentric coronary atherosclerosis from immunologic endothelial injury, increased malignancy risk (especially lymphoma and skin cancers), and opportunistic infections such as CMV and Aspergillus.",
    "why": [
      "Correct. Denervation means pacing for bradyarrhythmia and reliance on circulating catecholamines.",
      "A denervated heart does not respond to normal vagal (autonomic) input.",
      "It may need pacing precisely because it is denervated.",
      "Rejection is always a concern after transplant."
    ]
  },
  {
    "id": "csa-030",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Acute & Critical Care",
    "section": "Heart Transplantation",
    "source": "Cardiac Surgery: Acute & Critical Care, slide 143 (Indications/Contraindications)",
    "question": "Select ALL factors that may CONTRAINDICATE heart transplantation.",
    "options": [
      "High physiologic age",
      "Peripheral or cerebrovascular disease",
      "Obesity, diabetes, cancer, or chronic infection",
      "Being a younger patient without significant comorbidities"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Indications include heart failure, end-stage CHD, cardiomyopathy, and congenital heart disease. High physiologic age and comorbidities such as peripheral or cerebrovascular disease, obesity, diabetes, cancer, or chronic infection may contraindicate transplantation. Younger patients without significant comorbidities are good candidates, not contraindicated.",
    "why": [
      "Correct. High physiologic age may contraindicate transplant.",
      "Correct. Peripheral or cerebrovascular disease may contraindicate transplant.",
      "Correct. Obesity, diabetes, cancer, or chronic infection may contraindicate transplant.",
      "Incorrect. A younger patient without comorbidities is a good candidate, not contraindicated."
    ]
  },
  {
    "id": "csx-001",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Chest Pain Differential & STEMI",
    "source": "Cardiac Surgery: Emergencies, slide 151 (Differential Dx of Chest Pain)",
    "question": "Select ALL life-threatening causes of chest pain.",
    "options": [
      "Acute coronary syndrome",
      "Acute aortic dissection or aortic aneurysm leak",
      "Pulmonary embolism, esophageal rupture, or tension pneumothorax",
      "GERD and costochondritis"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Life-threatening causes of chest pain include acute coronary syndrome, aortic aneurysm leak or acute aortic dissection, pulmonary embolism, esophageal rupture, pneumothorax or tension pneumothorax, pericarditis, and rib trauma or flail chest. GERD and costochondritis are non-cardiovascular, non-life-threatening causes.",
    "why": [
      "Correct. ACS is life-threatening.",
      "Correct. Aortic dissection or aneurysm leak is life-threatening.",
      "Correct. PE, esophageal rupture, and tension pneumothorax are life-threatening.",
      "Incorrect. GERD and costochondritis are non-cardiovascular, non-life-threatening causes."
    ]
  },
  {
    "id": "csx-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Chest Pain Differential & STEMI",
    "source": "Cardiac Surgery: Emergencies, slide 152 (STEMI)",
    "question": "For a STEMI, emergent CABG is preferred when symptom onset is within:",
    "options": [
      "Less than 6 hours, otherwise it carries an increased risk of mortality",
      "Less than 24 hours regardless of timing",
      "Between 6 and 12 hours only",
      "More than 6 days"
    ],
    "answer": 0,
    "explanation": "For STEMI, emergent CABG is preferred if symptom onset is within less than 6 hours; otherwise it is associated with an increased risk of mortality. To reduce mortality, re-establish flow as soon as possible and fix the culprit lesion percutaneously.",
    "why": [
      "Correct. Under 6 hours is the window; later carries higher mortality.",
      "There is no blanket 24-hour window here.",
      "The 6-to-12-hour window is not the preferred emergent CABG timing.",
      "More than 6 days is the delayed 'cool off' window, not emergent CABG."
    ]
  },
  {
    "id": "csx-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Chest Pain Differential & STEMI",
    "source": "Cardiac Surgery: Emergencies, slide 153 (Cath Lab Emergencies)",
    "question": "In a cath lab emergency, if attempts to stent and open the vessel all fail, the next step is:",
    "options": [
      "Emergent OR, which carries a high risk of mortality",
      "Discharge home with follow-up",
      "Observation only",
      "Repeat the same stent attempt indefinitely"
    ],
    "answer": 0,
    "explanation": "In a cath lab emergency, the team attempts to stent to cover the lesion and open the vessel. If all fails, the patient goes emergently to the OR, which carries a high risk of mortality.",
    "why": [
      "Correct. Failed stenting means emergent OR, with high mortality risk.",
      "Discharge is unsafe for a failed emergent revascularization.",
      "Observation alone does not address the occluded vessel.",
      "Repeating a failed stent attempt indefinitely delays definitive surgery."
    ]
  },
  {
    "id": "csx-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Pulmonary Embolism",
    "source": "Cardiac Surgery: Emergencies, slide 154 (Pulmonary Embolism)",
    "question": "The diagnostic test of choice for suspected pulmonary embolism is:",
    "options": [
      "CTA PE protocol, with echo to evaluate the RV",
      "Esophagram with gastrografin",
      "Coronary angiogram",
      "Transesophageal echo of the aortic valve"
    ],
    "answer": 0,
    "explanation": "PE presents with hypoxia, with or without hypotension and tachycardia. The diagnostic test is a CTA PE protocol, with an echo to evaluate the RV. Management includes thrombolytics or anticoagulation, catheter or surgical embolectomy, and possibly RV support.",
    "why": [
      "Correct. CTA PE protocol plus echo for the RV is the workup.",
      "An esophagram evaluates esophageal perforation, not PE.",
      "A coronary angiogram evaluates the coronaries, not the pulmonary arteries.",
      "TEE of the aortic valve does not diagnose PE."
    ]
  },
  {
    "id": "csx-005",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Pulmonary Embolism",
    "source": "Cardiac Surgery: Emergencies, slide 154 (Pulmonary Embolism)",
    "question": "Select ALL appropriate management options for pulmonary embolism.",
    "options": [
      "Thrombolytics or anticoagulation",
      "Catheter or surgical embolectomy",
      "RV support if needed",
      "Immediate CABG"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "PE management includes thrombolytics or anticoagulation, catheter or surgical embolectomy, and RV support if required. CABG addresses coronary disease and is not the treatment for PE.",
    "why": [
      "Correct. Thrombolytics or anticoagulation are used.",
      "Correct. Catheter or surgical embolectomy is an option.",
      "Correct. RV support may be required.",
      "Incorrect. CABG treats coronary disease, not PE."
    ]
  },
  {
    "id": "csx-006",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Type A Aortic Dissection",
    "source": "Cardiac Surgery: Emergencies, slide 156 (Type A Aortic Dissection)",
    "question": "Select ALL features of the typical presentation of a Type A aortic dissection.",
    "options": [
      "Sudden onset of tearing chest or back pain",
      "Hypotension and tachycardia with emesis and diaphoresis",
      "CVA or a sudden cold limb",
      "Gradual, mild soreness over several weeks"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Type A aortic dissection presents with sudden onset of tearing chest or back pain, hypotension and tachycardia, emesis and diaphoresis, and possibly a CVA or a sudden cold limb. The diagnostic test is a CTA of the chest, abdomen, and pelvis. A gradual mild ache over weeks is not this emergency.",
    "why": [
      "Correct. Sudden tearing chest or back pain is classic.",
      "Correct. Hypotension, tachycardia, emesis, and diaphoresis occur.",
      "Correct. CVA or a sudden cold limb can result from malperfusion.",
      "Incorrect. A gradual mild ache over weeks is not a Type A dissection."
    ]
  },
  {
    "id": "csx-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Type A Aortic Dissection",
    "source": "Cardiac Surgery: Emergencies, slide 156 (Type A Aortic Dissection)",
    "question": "Definitive management of a Type A aortic dissection is:",
    "options": [
      "Emergent transfer to the operating room",
      "Outpatient blood pressure control",
      "Anticoagulation alone",
      "A stress test"
    ],
    "answer": 0,
    "explanation": "A Type A aortic dissection goes emergently to the operating room. It is diagnosed by CTA of the chest, abdomen, and pelvis.",
    "why": [
      "Correct. Type A dissection is a surgical emergency requiring the OR.",
      "Outpatient BP control is inadequate for a Type A dissection.",
      "Anticoagulation alone does not treat the dissection and could worsen bleeding.",
      "A stress test has no role in an acute dissection."
    ]
  },
  {
    "id": "csx-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Type A Aortic Dissection",
    "source": "Cardiac Surgery: Emergencies, slide 158 (Type A Aortic Dissection - In the OR)",
    "question": "During Type A dissection repair, why is it important to cannulate the true lumen rather than the false lumen?",
    "options": [
      "To avoid malperfusion, which could be detrimental",
      "To shorten the skin incision",
      "To avoid the need for anesthesia",
      "To eliminate the need for cardiopulmonary bypass"
    ],
    "answer": 0,
    "explanation": "Even with peripheral cannulation, depending on the extent of dissection you must ensure the true lumen is cannulated rather than the false lumen to avoid malperfusion, which could be detrimental. The team also waits to induce and intubate until ready to make the incision to reduce the risk of hemodynamic collapse; opening the chest first can relieve a contained rupture.",
    "why": [
      "Correct. Cannulating the false lumen causes dangerous malperfusion.",
      "Lumen selection is about perfusion, not incision length.",
      "Anesthesia is still required regardless of cannulation site.",
      "Bypass is still needed; lumen choice does not eliminate it."
    ]
  },
  {
    "id": "csx-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Type A Aortic Dissection",
    "source": "Cardiac Surgery: Emergencies, slide 159 (Type A Aortic Dissection - Goal of Repair)",
    "question": "The goal of Type A dissection repair is to:",
    "options": [
      "Remove the area of the entry tear so the false lumen loses flow and eventually thromboses",
      "Replace the mitral valve",
      "Leave the entry tear intact but stent around it",
      "Bypass all the coronary arteries"
    ],
    "answer": 0,
    "explanation": "This salvage procedure aims to remove the area of the entry tear; once the entry tear is eliminated, the false lumen no longer has flow and will eventually thrombose. Comorbidities of dissection stem from organ malperfusion off the false lumen, including gut ischemia (fatal), AKI, CVA, paralysis, and limb ischemia.",
    "why": [
      "Correct. Eliminating the entry tear stops false-lumen flow, leading to thrombosis.",
      "Mitral valve replacement is unrelated to the dissection repair goal.",
      "Leaving the entry tear intact would allow continued false-lumen flow.",
      "Bypassing all coronaries is not the goal of dissection repair."
    ]
  },
  {
    "id": "csx-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Type A Aortic Dissection",
    "source": "Cardiac Surgery: Emergencies, slide 159 (Comorbidities)",
    "question": "Which malperfusion complication of aortic dissection is specifically noted as fatal?",
    "options": [
      "Gut ischemia",
      "A mild headache",
      "Transient nausea",
      "Muscle soreness"
    ],
    "answer": 0,
    "explanation": "Comorbidities of aortic dissection are secondary to ischemia from organ malperfusion off the false lumen and include gut ischemia (fatal), AKI, CVA, paralysis, and limb ischemia.",
    "why": [
      "Correct. Gut ischemia is specifically called fatal.",
      "A mild headache is not the noted fatal complication.",
      "Transient nausea is not the noted fatal complication.",
      "Muscle soreness is not a malperfusion complication of dissection."
    ]
  },
  {
    "id": "csx-011",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Tamponade, Esophageal Perforation & Tension Pneumothorax",
    "source": "Cardiac Surgery: Emergencies, slide 161 (Cardiac Tamponade, Esophageal Perforation, Tension Pneumothorax)",
    "question": "Match each emergency to its intervention.",
    "pairs": [
      {
        "left": "Cardiac tamponade",
        "right": "Pericardiocentesis or subxiphoid window",
        "why": "Tamponade is treated with pericardiocentesis or a subxiphoid window to evacuate the effusion."
      },
      {
        "left": "Esophageal perforation",
        "right": "NPO, stenting, or surgical repair with a feeding tube",
        "why": "Esophageal perforation is managed by keeping the patient NPO, stenting, or surgical repair with a temporary feeding tube."
      },
      {
        "left": "Tension pneumothorax",
        "right": "Needle decompression then chest tube",
        "why": "Tension pneumothorax is treated with needle decompression followed by chest tube placement."
      }
    ],
    "explanation": "Cardiac tamponade: pericardiocentesis or subxiphoid window (high risk of hemodynamic collapse on induction, so keep the patient awake until ready to incise). Esophageal perforation: NPO, stenting, or surgical repair with a temporary feeding tube. Tension pneumothorax: needle decompression then chest tube."
  },
  {
    "id": "csx-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Tamponade, Esophageal Perforation & Tension Pneumothorax",
    "source": "Cardiac Surgery: Emergencies, slide 161 (Cardiac Tamponade)",
    "question": "Which findings suggest cardiac tamponade?",
    "options": [
      "Hypotension, tachycardia, jugular venous distention, and muffled heart sounds",
      "Hypertension with a slow heart rate",
      "Tracheal deviation and absent breath sounds only",
      "Fever and difficulty swallowing"
    ],
    "answer": 0,
    "explanation": "Cardiac tamponade presents with hypotension, tachycardia, jugular venous distention, and muffled heart sounds, diagnosed by transthoracic echo. There is a high risk of hemodynamic collapse on induction, so keep the patient awake until ready to make the incision.",
    "why": [
      "Correct. Hypotension, tachycardia, JVD, and muffled heart sounds are Beck's triad findings.",
      "Tamponade causes hypotension and tachycardia, not hypertension with bradycardia.",
      "Tracheal deviation with absent breath sounds points to tension pneumothorax.",
      "Fever and difficulty swallowing point to esophageal perforation."
    ]
  },
  {
    "id": "csx-013",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Tamponade, Esophageal Perforation & Tension Pneumothorax",
    "source": "Cardiac Surgery: Emergencies, slide 162 (Esophageal Perforation)",
    "question": "A young patient with intractable emesis after heavy alcohol use has chest pain, fever, difficulty swallowing, subcutaneous emphysema, and mediastinal air on CT chest. What is the diagnosis and confirmatory test?",
    "options": [
      "Esophageal perforation, confirmed with an esophagram using gastrografin",
      "Tension pneumothorax, confirmed with a chest X-ray",
      "Cardiac tamponade, confirmed with a transthoracic echo",
      "Pulmonary embolism, confirmed with a CTA PE protocol"
    ],
    "answer": 0,
    "explanation": "A young patient with intractable emesis (EtOH or marijuana), chest pain, fever, difficulty swallowing, subcutaneous emphysema, and mediastinal air on CT has an esophageal perforation, confirmed with an esophagram using gastrografin. Management is NPO, stenting, or surgical repair with a temporary feeding tube.",
    "why": [
      "Correct. This picture is esophageal perforation, confirmed by gastrografin esophagram.",
      "Tension pneumothorax causes tracheal deviation, not mediastinal air after emesis.",
      "Tamponade gives JVD and muffled heart sounds, not subcutaneous emphysema.",
      "PE causes hypoxia, not subcutaneous emphysema and mediastinal air after vomiting."
    ]
  },
  {
    "id": "csx-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Tamponade, Esophageal Perforation & Tension Pneumothorax",
    "source": "Cardiac Surgery: Emergencies, slide 163 (Tension Pneumothorax)",
    "question": "A patient has acute respiratory distress, hypotension, tachycardia, and tracheal deviation. The immediate intervention is:",
    "options": [
      "Needle decompression followed by chest tube placement",
      "Pericardiocentesis",
      "Esophageal stenting",
      "Emergent CABG"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax presents with acute respiratory distress (SOB, tachypnea, hypoxia), hypotension, tachycardia, and tracheal deviation, diagnosed by chest X-ray. The intervention is needle decompression followed by chest tube placement.",
    "why": [
      "Correct. Needle decompression then chest tube relieves a tension pneumothorax.",
      "Pericardiocentesis treats tamponade, not a tension pneumothorax.",
      "Esophageal stenting treats a perforation, not a pneumothorax.",
      "CABG is unrelated to acute tension pneumothorax."
    ]
  },
  {
    "id": "csx-015",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Cardiac Trauma",
    "source": "Cardiac Surgery: Emergencies, slide 164 (Cardiac Trauma)",
    "question": "Match each cardiac trauma scenario to its management.",
    "pairs": [
      {
        "left": "Gunshot or stab wound to the chest",
        "right": "Sternotomy for mediastinal exploration",
        "why": "Penetrating chest trauma (GSW or stabbing) warrants sternotomy for mediastinal exploration."
      },
      {
        "left": "Cardiac contusion",
        "right": "Echo, trend troponin, manage conservatively",
        "why": "Cardiac contusion is checked with echo and serial troponin and is most often managed conservatively."
      },
      {
        "left": "Flail chest",
        "right": "Plating, as it can compromise oxygenation",
        "why": "Flail chest requires plating because it can compromise oxygenation."
      },
      {
        "left": "Isolated rib or sternal fracture",
        "right": "Conservative management",
        "why": "Isolated rib or sternal fractures are managed conservatively."
      }
    ],
    "explanation": "Cardiac trauma management: penetrating wounds (GSW or stabbing) get sternotomy for mediastinal exploration; cardiac contusion is worked up with echo and serial troponin and managed conservatively; flail chest requires plating because it can compromise oxygenation; and isolated rib or sternal fractures are managed conservatively."
  },
  {
    "id": "csx-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Surgery: Emergencies",
    "section": "Cardiac Trauma",
    "source": "Cardiac Surgery: Emergencies, slide 164 (Cardiac Trauma)",
    "question": "A hemodynamically stable patient with a cardiac contusion after blunt chest trauma is best managed by:",
    "options": [
      "Checking an echocardiogram, trending troponin, and conservative management",
      "Emergent sternotomy for all contusions",
      "Immediate heart transplant",
      "Discharge without any cardiac evaluation"
    ],
    "answer": 0,
    "explanation": "A cardiac contusion is evaluated with an echocardiogram and serial troponin and is most often managed conservatively. Sternotomy for mediastinal exploration is reserved for penetrating trauma such as a gunshot or stab wound.",
    "why": [
      "Correct. Echo, serial troponin, and conservative management fit a contusion.",
      "Sternotomy is for penetrating trauma, not routine contusions.",
      "A contusion does not warrant transplant.",
      "A contusion still needs echo and troponin evaluation, not blind discharge."
    ]
  },
  {
    "id": "cvr-001",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 7 (CV Physiology: Preload, Afterload, Inotropy, Chronotropy)",
    "question": "Match each physiologic term to its definition.",
    "pairs": [
      {
        "left": "Preload",
        "right": "Wall tension at end of diastole; volume of blood in the ventricle before it contracts",
        "why": "Preload is end-diastolic wall tension, reflecting the volume filling the ventricle before contraction."
      },
      {
        "left": "Afterload",
        "right": "Wall tension during systole; pressure the heart must overcome to eject blood",
        "why": "Afterload is systolic wall tension, the pressure (resistance) the heart pumps against."
      },
      {
        "left": "Inotropy",
        "right": "Strength or velocity of contraction (contractility)",
        "why": "Inotropy is contractility, the strength and velocity of muscle fiber shortening."
      },
      {
        "left": "Chronotropy",
        "right": "Rate of contraction (heart rate)",
        "why": "Chronotropy is the rate of contraction, meaning heart rate."
      }
    ],
    "explanation": "Preload is end-diastolic wall tension (ventricular filling volume); afterload is systolic wall tension (the pressure the heart overcomes to eject blood); inotropy is contractility (strength of contraction); and chronotropy is heart rate."
  },
  {
    "id": "cvr-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 8 (CV Physiology: Inotropy & Chronotropy)",
    "question": "Which of the following INCREASES contractility (inotropy)?",
    "options": [
      "Catecholamines and increased sympathetic tone",
      "Beta-blockers",
      "Calcium channel blockers",
      "Increased parasympathetic (vagal) tone"
    ],
    "answer": 0,
    "explanation": "Inotropy increases with sympathetic tone, catecholamines, and beta-agonists, and decreases with beta-blockers and calcium channel blockers. Chronotropy increases with sympathetic tone, catecholamines, and atropine and decreases with parasympathetic tone, beta-blockers, and calcium channel blockers.",
    "why": [
      "Correct. Catecholamines and sympathetic tone raise contractility.",
      "Beta-blockers decrease inotropy.",
      "Calcium channel blockers decrease inotropy.",
      "Increased vagal tone lowers heart rate and does not raise contractility."
    ]
  },
  {
    "id": "cvr-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 9 (CV Hemodynamics)",
    "question": "Using the relationship Pressure = Flow x Resistance, blood pressure can be expanded to:",
    "options": [
      "Stroke volume x heart rate x resistance",
      "Stroke volume divided by heart rate",
      "Heart rate x resistance, independent of stroke volume",
      "Preload minus afterload"
    ],
    "answer": 0,
    "explanation": "Pressure = Flow x Resistance (P = Q x R). Because cardiac output equals stroke volume times heart rate, P = CO x R expands to P = SV x HR x R.",
    "why": [
      "Correct. P = SV x HR x R, since CO = SV x HR.",
      "Dividing stroke volume by heart rate does not describe blood pressure.",
      "Stroke volume is part of the equation and cannot be dropped.",
      "Blood pressure is not the difference of preload and afterload."
    ]
  },
  {
    "id": "cvr-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 6 (Cardiac cycle review)",
    "question": "The first heart sound (S1) corresponds to:",
    "options": [
      "Sudden closure of the mitral and tricuspid valves",
      "Closure of the aortic and pulmonic valves",
      "Opening of the aortic valve",
      "Atrial contraction"
    ],
    "answer": 0,
    "explanation": "S1 is the sudden closure of the mitral and tricuspid (atrioventricular) valves at the start of systole. S2 is closure of the aortic and pulmonic (semilunar) valves at the start of diastole.",
    "why": [
      "Correct. S1 is closure of the mitral and tricuspid valves.",
      "Closure of the aortic and pulmonic valves is S2.",
      "Aortic valve opening is silent and marks the start of ejection.",
      "Atrial contraction occurs in late diastole and does not produce S1."
    ]
  },
  {
    "id": "cvr-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 10 (Stroke Volume and Ejection Fraction)",
    "question": "In hypovolemia, what happens to stroke volume and ejection fraction?",
    "options": [
      "Stroke volume decreases from reduced venous return, while ejection fraction is maintained or increased by adrenergic stimulation",
      "Both stroke volume and ejection fraction increase",
      "Both stroke volume and ejection fraction fall from impaired myocardium",
      "Stroke volume rises and ejection fraction falls"
    ],
    "answer": 0,
    "explanation": "In hypovolemia, stroke volume falls due to decreased venous return, but ejection fraction is preserved or increased because of adrenergic stimulation of the myocardium. In heart failure with reduced EF, both SV and EF fall from impaired myocardium; in HFpEF, SV falls with a normal EF.",
    "why": [
      "Correct. Low venous return drops SV, while adrenergic drive maintains or raises EF.",
      "Stroke volume does not increase when the patient is volume-depleted.",
      "Falling EF from impaired myocardium describes heart failure, not hypovolemia.",
      "Stroke volume falls, not rises, in hypovolemia."
    ]
  },
  {
    "id": "cvr-006",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "CV Anatomy & Physiology",
    "source": "CV Unit Review, slide 11 (Neurohumoral Control Systems)",
    "question": "Match each neurohumoral mediator to its primary action.",
    "pairs": [
      {
        "left": "ADH (antidiuretic hormone)",
        "right": "Water retention in the distal collecting duct and vasoconstriction",
        "why": "ADH from the posterior pituitary causes renal water retention and vasoconstriction."
      },
      {
        "left": "BNP",
        "right": "Natriuresis and vasodilation in response to ventricular stretch",
        "why": "BNP is released by the ventricles in response to stretch, causing sodium diuresis and vasodilation."
      },
      {
        "left": "Angiotensin II",
        "right": "Vasoconstriction",
        "why": "Angiotensin II is a potent vasoconstrictor in the RAAS."
      },
      {
        "left": "Aldosterone",
        "right": "Sodium retention in the distal tubule",
        "why": "Aldosterone drives sodium retention in the distal tubule of the kidney."
      }
    ],
    "explanation": "ADH causes water retention and vasoconstriction; BNP (released by stretched ventricles) causes natriuresis and vasodilation; angiotensin II causes vasoconstriction; and aldosterone causes distal-tubule sodium retention."
  },
  {
    "id": "cvr-007",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Murmurs & Maneuvers",
    "source": "CV Unit Review, slide 13 (Systolic and Diastolic Murmurs)",
    "question": "Match each valvular lesion to whether its murmur is systolic or diastolic.",
    "pairs": [
      {
        "left": "Aortic stenosis",
        "right": "Systolic",
        "why": "Aortic stenosis (and pulmonary stenosis) produce systolic murmurs."
      },
      {
        "left": "Mitral regurgitation",
        "right": "Systolic",
        "why": "Mitral regurgitation (and tricuspid regurgitation) produce systolic murmurs."
      },
      {
        "left": "Mitral stenosis",
        "right": "Diastolic",
        "why": "Mitral stenosis (and tricuspid stenosis) produce diastolic murmurs."
      },
      {
        "left": "Aortic regurgitation",
        "right": "Diastolic",
        "why": "Aortic regurgitation (and pulmonic regurgitation) produce diastolic murmurs."
      }
    ],
    "explanation": "Systolic murmurs: aortic/pulmonary stenosis and mitral/tricuspid regurgitation. Diastolic murmurs: mitral/tricuspid stenosis and aortic/pulmonic regurgitation."
  },
  {
    "id": "cvr-008",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Murmurs & Maneuvers",
    "source": "CV Unit Review, slide 15 (Special Qualities of Murmurs)",
    "question": "Match each murmur to its distinctive feature.",
    "pairs": [
      {
        "left": "Aortic stenosis",
        "right": "Radiates to the carotids with a narrow pulse pressure",
        "why": "Aortic stenosis radiates to the carotids and narrows the pulse pressure."
      },
      {
        "left": "Mitral regurgitation",
        "right": "Radiates to the axilla",
        "why": "Mitral regurgitation radiates to the axilla and can accompany a mid-systolic click in MVP."
      },
      {
        "left": "Aortic regurgitation",
        "right": "Water hammer pulse and an Austin Flint murmur",
        "why": "Aortic regurgitation causes a water hammer (forceful) pulse and an Austin Flint murmur."
      },
      {
        "left": "Tricuspid regurgitation",
        "right": "Increased JVP",
        "why": "Tricuspid regurgitation raises the jugular venous pressure and right atrial pressure."
      }
    ],
    "explanation": "Aortic stenosis radiates to the carotids with a narrow pulse pressure; mitral regurgitation radiates to the axilla; aortic regurgitation gives a water hammer pulse and Austin Flint murmur; and tricuspid regurgitation raises the JVP."
  },
  {
    "id": "cvr-009",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Murmurs & Maneuvers",
    "source": "CV Unit Review, slide 16 (Accentuation and Attenuation of Murmurs)",
    "question": "Select ALL maneuvers that ACCENTUATE (increase) a hypertrophic obstructive cardiomyopathy (HOCM) murmur.",
    "options": [
      "Standing",
      "Valsalva",
      "Squatting",
      "Sustained handgrip"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Standing and Valsalva both decrease preload (venous return), which accentuates the HOCM murmur. Squatting increases preload and afterload and handgrip increases afterload, both of which attenuate HOCM (while squatting accentuates most other murmurs).",
    "why": [
      "Correct. Standing decreases venous return and accentuates HOCM.",
      "Correct. Valsalva decreases preload and accentuates HOCM.",
      "Incorrect. Squatting attenuates HOCM (though it accentuates most other murmurs).",
      "Incorrect. Sustained handgrip increases afterload and attenuates HOCM."
    ]
  },
  {
    "id": "cvr-010",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Murmurs & Maneuvers",
    "source": "CV Unit Review, slide 17 (Athlete with mid-systolic murmur)",
    "question": "A 22-year-old male athlete has a mid-systolic crescendo-decrescendo murmur at the left sternal border and a father who died suddenly at 34. To differentiate HCM from aortic stenosis, he performs a sustained isometric handgrip. Which finding supports hypertrophic cardiomyopathy over aortic stenosis?",
    "options": [
      "Decrease in murmur intensity",
      "Increase in murmur intensity",
      "Radiation of the murmur to the carotid arteries",
      "Development of a paradoxical S2 split",
      "No change in murmur intensity"
    ],
    "answer": 0,
    "explanation": "Sustained handgrip increases afterload, which reduces the left ventricular outflow obstruction of HOCM and therefore decreases the HOCM murmur. Radiation to the carotids and a narrow pulse pressure instead point to aortic stenosis.",
    "why": [
      "Correct. Handgrip raises afterload and softens the HOCM murmur.",
      "An increase with handgrip would not be expected in HOCM.",
      "Radiation to the carotids points to aortic stenosis, not HCM.",
      "A paradoxical S2 split is associated with aortic stenosis and LV outflow delay.",
      "HOCM changes with maneuvers; no change would not distinguish it."
    ]
  },
  {
    "id": "cvr-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Murmurs & Maneuvers",
    "source": "CV Unit Review, slide 16 (Accentuation and Attenuation of Murmurs)",
    "question": "Squatting increases preload and peripheral resistance. Its effect on murmurs is to:",
    "options": [
      "Accentuate most murmurs but attenuate HOCM",
      "Attenuate all murmurs including HOCM",
      "Accentuate HOCM specifically",
      "Have no effect on any murmur"
    ],
    "answer": 0,
    "explanation": "Squatting increases preload and peripheral resistance, increasing ventricular filling. This accentuates most murmurs but attenuates HOCM. Standing and Valsalva do the opposite for HOCM.",
    "why": [
      "Correct. Squatting accentuates most murmurs but reduces the HOCM murmur.",
      "Squatting increases, not attenuates, most murmurs.",
      "Squatting attenuates HOCM; standing and Valsalva accentuate it.",
      "Squatting clearly changes murmur intensity."
    ]
  },
  {
    "id": "cvr-012",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hemodynamics",
    "source": "CV Unit Review, slide 19 (73-year-old with palpitations and dizziness)",
    "question": "A 73-year-old woman has sudden palpitations and dizziness. Her EKG shows sinus tachycardia at 186 and her BP is 88/62. What hemodynamic derangement best explains her dizziness?",
    "options": [
      "Hypotension due to decreased diastolic filling time",
      "Hypotension due to decreased peripheral resistance",
      "Hypotension due to decreased chronotropy",
      "Hypotension due to increased inotropy"
    ],
    "answer": 0,
    "explanation": "At a rate of 186, diastole shortens markedly, reducing ventricular filling time and preload. Lower stroke volume drops cardiac output and blood pressure, causing her dizziness.",
    "why": [
      "Correct. The very fast rate shortens diastolic filling, lowering stroke volume and BP.",
      "Her problem is filling time, not a fall in peripheral resistance.",
      "She is tachycardic (increased chronotropy), not bradycardic.",
      "Increased inotropy would tend to support, not lower, blood pressure."
    ]
  },
  {
    "id": "cvr-013",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 27 (Stable vs Unstable vs Variant Angina)",
    "question": "Match each angina type to its defining feature.",
    "pairs": [
      {
        "left": "Stable angina",
        "right": "Predictable, exertional, relieved by rest or nitroglycerin, negative biomarkers",
        "why": "Stable angina is predictable exertional pain relieved by rest or nitroglycerin, with negative biomarkers."
      },
      {
        "left": "Unstable angina",
        "right": "At rest or minimal exertion, longer (15+ min), not relieved by rest or nitroglycerin",
        "why": "Unstable angina occurs at rest or with minimal exertion, lasts longer, and is not relieved by rest or nitroglycerin."
      },
      {
        "left": "Variant (Prinzmetal) angina",
        "right": "Coronary spasm, often at rest in early morning, transient ST elevation, treated with CCB",
        "why": "Variant angina is coronary spasm, typically at rest in the early morning, with transient ST elevation, treated with calcium channel blockers."
      }
    ],
    "explanation": "Stable angina: predictable, exertional, relieved by rest or nitroglycerin, negative biomarkers. Unstable angina: rest or minimal exertion, longer duration, not relieved by rest or nitroglycerin. Variant (Prinzmetal): coronary spasm, often at rest early morning, transient ST elevation, treat with calcium channel blockers."
  },
  {
    "id": "cvr-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 31 (Classic ECG Evolution in STEMI)",
    "question": "What is the classic order of ECG evolution in a STEMI?",
    "options": [
      "Peaked (hyperacute) T waves, then ST elevation, then Q-wave development, then T-wave inversion",
      "T-wave inversion, then Q waves, then ST elevation, then peaked T waves",
      "Q waves, then peaked T waves, then ST depression",
      "ST depression, then peaked T waves, then Q waves"
    ],
    "answer": 0,
    "explanation": "The classic STEMI ECG evolution is peaked (hyperacute) T waves, then ST-segment elevation, then Q-wave development, then T-wave inversion.",
    "why": [
      "Correct. Hyperacute T waves, ST elevation, Q waves, then T-wave inversion.",
      "This reverses the true sequence.",
      "Q waves develop after ST elevation, not first.",
      "STEMI features ST elevation, not initial ST depression."
    ]
  },
  {
    "id": "cvr-015",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 32 (Treatment of ACS)",
    "question": "Select ALL components of ACS treatment per this lecture.",
    "options": [
      "Aspirin 162 to 325 mg",
      "Heparin (UFH or LMWH)",
      "High-potency statin with an LDL goal < 55",
      "Routine warfarin for every patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "ACS treatment includes aspirin 162 to 325 mg, oxygen, nitroglycerin, morphine, a 12-lead ECG within 10 minutes, heparin (UFH or LMWH), a high-potency statin (LDL goal < 55), beta-blockers, a P2Y12 inhibitor, and reperfusion (PCI within 90 minutes or fibrinolysis within 30 minutes if PCI is unavailable). Routine warfarin for every patient is not part of this.",
    "why": [
      "Correct. Aspirin 162 to 325 mg is given.",
      "Correct. Heparin (UFH or LMWH) is given.",
      "Correct. A high-potency statin with LDL goal < 55 is used.",
      "Incorrect. Warfarin is not a routine part of ACS treatment."
    ]
  },
  {
    "id": "cvr-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 32 (Treatment of ACS: P2Y12 inhibitors)",
    "question": "Among P2Y12 inhibitors, which has the LOWEST bleeding risk?",
    "options": [
      "Clopidogrel",
      "Ticagrelor",
      "Prasugrel",
      "Eptifibatide"
    ],
    "answer": 0,
    "explanation": "Clopidogrel has the lowest bleeding risk among P2Y12 inhibitors, while ticagrelor and prasugrel are more potent (prasugrel is the most potent). Eptifibatide is a glycoprotein IIb/IIIa inhibitor, not a P2Y12 inhibitor.",
    "why": [
      "Correct. Clopidogrel carries the lowest bleeding risk.",
      "Ticagrelor is more potent with a higher bleeding risk than clopidogrel.",
      "Prasugrel is the most potent and carries higher bleeding risk.",
      "Eptifibatide is a glycoprotein IIb/IIIa inhibitor, not a P2Y12 inhibitor."
    ]
  },
  {
    "id": "cvr-017",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 38 (CABG in Stable Ischemic Heart Disease)",
    "question": "Select ALL indications for CABG in stable ischemic heart disease.",
    "options": [
      "Left main stenosis",
      "Multivessel CAD or ischemic cardiomyopathy",
      "Diabetes with multivessel disease and LAD involvement",
      "A single mild non-obstructive lesion"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "In stable ischemic heart disease, CABG is indicated for left main stenosis, multivessel CAD, ischemic cardiomyopathy, and diabetes with multivessel disease and LAD involvement. In STEMI with ischemic symptoms, CABG is indicated for cardiogenic shock, heart failure, or a large area at risk. A single mild lesion is not an indication.",
    "why": [
      "Correct. Left main stenosis is an indication.",
      "Correct. Multivessel CAD and ischemic cardiomyopathy are indications.",
      "Correct. Diabetes with multivessel disease and LAD involvement favors CABG.",
      "Incorrect. A single mild non-obstructive lesion is not a CABG indication."
    ]
  },
  {
    "id": "cvr-018",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 40 (63-year-old with exertional chest pain)",
    "question": "A 63-year-old man with hypertension and hyperlipidemia has recurring substernal pressure radiating to his jaw, predictably brought on by climbing stairs or carrying groceries and relieved by rest, once or twice a week. Troponins and EKG are normal. The most appropriate diagnosis is:",
    "options": [
      "Stable angina",
      "Prinzmetal (variant) angina",
      "Musculoskeletal chest pain",
      "Unstable angina",
      "NSTEMI"
    ],
    "answer": 0,
    "explanation": "Predictable, exertional chest pressure relieved by rest, with normal troponins and EKG, is classic stable angina from fixed coronary disease.",
    "why": [
      "Correct. Predictable exertional pain relieved by rest is stable angina.",
      "Variant angina occurs at rest, often early morning, not with exertion.",
      "The clear exertional pattern and cardiac risk factors point to angina, not musculoskeletal pain.",
      "Unstable angina occurs at rest or with escalating frequency, not this stable pattern.",
      "NSTEMI would show an elevated troponin, which he does not have."
    ]
  },
  {
    "id": "cvr-019",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 42 (41-year-old with pleuritic chest pain)",
    "question": "A 41-year-old man has sharp, pleuritic substernal chest pain that is constant and relieved by sitting up and leaning forward, with a fever of 100.6 F and normal troponins. The most likely diagnosis and treatment is:",
    "options": [
      "Pericarditis, treated with a nonsteroidal anti-inflammatory",
      "NSTEMI, treated with aspirin, morphine, and a beta-blocker",
      "STEMI, treated with aspirin, morphine, and a beta-blocker",
      "Pericardial effusion, treated with pericardiocentesis",
      "Pulmonary embolism, treated with low molecular weight heparin"
    ],
    "answer": 0,
    "explanation": "Pleuritic chest pain relieved by sitting forward, with fever and normal troponins, is classic acute pericarditis, treated with NSAIDs (often with colchicine).",
    "why": [
      "Correct. Positional pleuritic pain with fever is pericarditis, treated with NSAIDs.",
      "Normal troponins and positional pleuritic pain argue against NSTEMI.",
      "There is no evidence of STEMI here, and beta-blockers are not the treatment for pericarditis.",
      "A pericardial effusion large enough to need pericardiocentesis would cause tamponade physiology, not this picture.",
      "The positional, pleuritic pain with fever fits pericarditis rather than PE."
    ]
  },
  {
    "id": "cvr-020",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 44 (48-year-old with early-morning chest pressure)",
    "question": "A 48-year-old woman with a 25 pack-year smoking history has recurrent chest pressure at about 4:00 AM, lasting 10 to 15 minutes, unrelated to exertion. During an episode, ECG shows transient ST elevation in V2 through V4 that resolves with nitroglycerin, and serial troponins are normal. The most likely diagnosis is:",
    "options": [
      "Variant angina",
      "Acute myocardial infarction",
      "Microvascular angina",
      "Stable angina",
      "Unstable angina"
    ],
    "answer": 0,
    "explanation": "Rest chest pain in the early morning with transient ST elevation that resolves with nitroglycerin and normal troponins is variant (Prinzmetal) angina from coronary vasospasm, treated with calcium channel blockers.",
    "why": [
      "Correct. Transient early-morning ST elevation resolving with nitroglycerin is variant angina.",
      "Normal serial troponins rule out an acute MI.",
      "Microvascular angina does not typically cause transient ST elevation resolving with nitroglycerin.",
      "Stable angina is exertional, not rest pain at 4 AM.",
      "Unstable angina does not typically produce transient ST elevation that fully resolves."
    ]
  },
  {
    "id": "cvr-021",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 46 (55-year-old with crushing chest pain)",
    "question": "A 55-year-old man has severe crushing substernal chest pain radiating to the jaw with diaphoresis and dyspnea that began an hour ago, and an ECG showing ST elevation. Which acute coronary syndrome is present and what is the immediate treatment?",
    "options": [
      "STEMI: nitroglycerin, oxygen, morphine, and aspirin 325 mg",
      "Variant angina: nitroglycerin, oxygen, morphine, and aspirin 325 mg",
      "Unstable angina: nitroglycerin and ranolazine",
      "STEMI: ACE inhibitor, beta-blocker, and oxygen",
      "NSTEMI: nitroglycerin, oxygen, morphine, and aspirin 325 mg"
    ],
    "answer": 0,
    "explanation": "Crushing chest pain with diaphoresis, dyspnea, and ST elevation is a STEMI. Immediate therapy includes nitroglycerin, oxygen (if hypoxic), morphine, and aspirin 325 mg, followed by urgent reperfusion.",
    "why": [
      "Correct. ST elevation with this presentation is a STEMI treated with nitroglycerin, oxygen, morphine, and aspirin.",
      "Variant angina causes transient spasm, not this sustained STEMI presentation.",
      "This is not unstable angina; ST elevation is present.",
      "An ACE inhibitor and beta-blocker are not the immediate first-line STEMI regimen here.",
      "ST elevation makes this a STEMI, not an NSTEMI."
    ]
  },
  {
    "id": "cvr-022",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Angina & ACS",
    "source": "CV Unit Review, slide 48 (64-year-old at a PCI-capable ED)",
    "question": "A 64-year-old man at a PCI-capable emergency department has retrosternal chest pain, dyspnea, bilateral basilar crackles, an S3 gallop, and 3 mm ST elevation in V1 through V4. What is the recommended treatment?",
    "options": [
      "Door-to-balloon time of 90 minutes or less",
      "Immediate catheterization only after heart failure resolves",
      "Door-to-balloon time of 120 minutes",
      "Angiography within 24 hours",
      "Emergency coronary bypass surgery"
    ],
    "answer": 0,
    "explanation": "This is an anterior STEMI at a PCI-capable center. The recommended treatment is primary PCI with a door-to-balloon time of 90 minutes or less; do not delay for heart failure to resolve.",
    "why": [
      "Correct. Primary PCI with door-to-balloon under 90 minutes is the goal.",
      "Reperfusion should not be delayed until heart failure resolves.",
      "The target is 90 minutes or less, not 120 minutes.",
      "A STEMI needs emergent reperfusion, not angiography deferred 24 hours.",
      "Emergency bypass is not the first-line reperfusion strategy at a PCI-capable center."
    ]
  },
  {
    "id": "cvr-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 57 (Hypertensive Emergency)",
    "question": "A patient with BP over 180/120 AND signs or symptoms of target organ damage (for example encephalopathy, MI, or pulmonary edema) has:",
    "options": [
      "A hypertensive emergency, managed in the ICU with IV antihypertensives",
      "Hypertensive urgency, managed with gradual oral therapy",
      "Normal blood pressure",
      "White coat hypertension"
    ],
    "answer": 0,
    "explanation": "A hypertensive emergency is BP over 180/120 with target organ damage (encephalopathy, seizure, stroke, MI, heart failure, pulmonary edema, aortic dissection, AKI, retinopathy). It is managed in the ICU with IV antihypertensives. Without target organ damage it is hypertensive urgency.",
    "why": [
      "Correct. BP over 180/120 with organ damage is a hypertensive emergency requiring ICU IV therapy.",
      "Urgency is the same BP but without target organ damage.",
      "These pressures are far from normal.",
      "White coat hypertension is elevated office readings without true sustained hypertension or organ damage."
    ]
  },
  {
    "id": "cvr-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 56 (Severe Hypertension / Hypertensive Urgency)",
    "question": "For severe asymptomatic hypertension (hypertensive urgency, BP over 180/120 without target organ damage), the blood pressure should be:",
    "options": [
      "Lowered gradually over 24 to 48 hours by restarting or adjusting oral medications",
      "Dropped to normal within one hour with IV agents",
      "Left untreated",
      "Lowered by 75% immediately"
    ],
    "answer": 0,
    "explanation": "In hypertensive urgency you must evaluate for target organ damage, then in the outpatient setting restart or adjust oral medications and lower BP gradually over 24 to 48 hours (reducing mean arterial pressure by about 25%). Rapid lowering risks hypoperfusion.",
    "why": [
      "Correct. Gradual oral lowering over 24 to 48 hours is appropriate for urgency.",
      "Rapid normalization with IV agents is for emergencies with organ damage, and even then not to normal within an hour.",
      "It still requires evaluation and treatment, just not acutely.",
      "Lowering MAP by about 25% is the target, not 75%."
    ]
  },
  {
    "id": "cvr-025",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 54 (Medications for HTN)",
    "question": "Select ALL first-line medication classes for uncomplicated hypertension.",
    "options": [
      "Thiazide diuretics (chlorthalidone or HCTZ)",
      "Long-acting dihydropyridine calcium channel blockers (amlodipine)",
      "ACE inhibitors or ARBs",
      "Beta-blockers for every hypertensive patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "First-line classes for uncomplicated hypertension are thiazide diuretics, long-acting dihydropyridine CCBs, ACE inhibitors, and ARBs. Beta-blockers should only be used as first-line agents in patients with heart failure or coronary heart disease.",
    "why": [
      "Correct. Thiazide diuretics are first-line.",
      "Correct. Long-acting dihydropyridine CCBs are first-line.",
      "Correct. ACE inhibitors and ARBs are first-line.",
      "Incorrect. Beta-blockers are first-line only with heart failure or CHD, not for everyone."
    ]
  },
  {
    "id": "cvr-026",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 58 (65-year-old with CKD, adding aliskiren)",
    "question": "A 65-year-old man with hypertension and stage 3 CKD (eGFR 42) on lisinopril and amlodipine has BP 146/92. A colleague suggests adding the direct renin inhibitor aliskiren. Adding aliskiren is contraindicated because it increases the risk of:",
    "options": [
      "Acute kidney injury and hyperkalemia",
      "Angioedema",
      "Nephrogenic diabetes insipidus",
      "Ototoxicity",
      "Reflex tachycardia"
    ],
    "answer": 0,
    "explanation": "Combining a direct renin inhibitor with an ACE inhibitor (dual RAAS blockade), especially in CKD, significantly increases the risk of acute kidney injury and hyperkalemia and is contraindicated.",
    "why": [
      "Correct. Dual RAAS blockade raises the risk of AKI and hyperkalemia.",
      "Angioedema is an ACE inhibitor risk but not the reason aliskiren is contraindicated here.",
      "Nephrogenic diabetes insipidus is not caused by aliskiren.",
      "Ototoxicity is associated with loop diuretics, not aliskiren.",
      "Reflex tachycardia is seen with vasodilators like hydralazine, not aliskiren."
    ]
  },
  {
    "id": "cvr-027",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 60 (31-year-old newly pregnant on losartan)",
    "question": "A 31-year-old woman with hypertension controlled on losartan is found to be 8 weeks pregnant, BP 128/86. What is the most appropriate next step for her antihypertensive therapy?",
    "options": [
      "Discontinue losartan immediately and start methyldopa or labetalol",
      "Continue losartan and schedule monthly fetal renal ultrasounds",
      "Increase losartan to keep systolic BP strictly below 120",
      "Substitute losartan with lisinopril to minimize teratogenic risk",
      "Suspend all antihypertensive therapy until the third trimester"
    ],
    "answer": 0,
    "explanation": "ARBs (like losartan) and ACE inhibitors are teratogenic and must be stopped in pregnancy. Substitute a pregnancy-safe agent such as methyldopa or labetalol.",
    "why": [
      "Correct. Stop the ARB and switch to methyldopa or labetalol.",
      "Continuing an ARB in pregnancy is unsafe regardless of monitoring.",
      "Intensifying an ARB in pregnancy is contraindicated.",
      "Lisinopril is an ACE inhibitor and is also teratogenic.",
      "Her hypertension still needs treatment with a safe agent, not suspension."
    ]
  },
  {
    "id": "cvr-028",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hypertension",
    "source": "CV Unit Review, slide 62 (58-year-old with BP 198/114 and URI)",
    "question": "A 58-year-old woman who stopped her BP medications 2 months ago has a URI and BP 198/114, with no chest pain, visual changes, neurologic deficits, or papilledema. Besides treating her URI, the most appropriate initial management is:",
    "options": [
      "Resume her previous oral regimen with close outpatient follow-up",
      "Admit for IV hydralazine",
      "Admit to the ICU for IV labetalol",
      "Oral clonidine",
      "Oral immediate-release nifedipine"
    ],
    "answer": 0,
    "explanation": "She has hypertensive urgency (BP over 180/120 without target organ damage). After evaluating for organ damage, management is to restart or adjust oral medications and lower BP gradually with close follow-up. IV therapy is for hypertensive emergencies, and immediate-release nifedipine is avoided due to the risk of precipitous drops.",
    "why": [
      "Correct. Urgency without organ damage is managed by resuming oral meds with follow-up.",
      "IV hydralazine and admission are for emergencies with target organ damage.",
      "ICU IV labetalol is for a hypertensive emergency, which she does not have.",
      "Oral clonidine can cause rebound and is not the preferred initial step here.",
      "Immediate-release nifedipine risks a dangerous rapid BP drop and is avoided."
    ]
  },
  {
    "id": "cvr-029",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hyperlipidemia",
    "source": "CV Unit Review, slide 71 (4 Patient Management Groups)",
    "question": "Match each lipid management group to its defining criterion.",
    "pairs": [
      {
        "left": "Secondary prevention",
        "right": "Established clinical ASCVD",
        "why": "Secondary prevention applies to patients with established clinical ASCVD."
      },
      {
        "left": "Severe hypercholesterolemia",
        "right": "LDL 190 mg/dL or higher",
        "why": "Severe hypercholesterolemia is an LDL of 190 mg/dL or higher."
      },
      {
        "left": "Diabetes group",
        "right": "Adults age 40 to 75 with diabetes",
        "why": "The diabetes group is adults 40 to 75 with diabetes (LDL goal under 100, or under 70 with risk factors)."
      },
      {
        "left": "Primary prevention",
        "right": "Adults 30 to 79, no diabetes, LDL 70 to 189",
        "why": "Primary prevention covers adults 30 to 79 without diabetes, LDL 70 to 189, based on ASCVD risk."
      }
    ],
    "explanation": "The four management groups are secondary prevention (clinical ASCVD), severe hypercholesterolemia (LDL 190 or higher), the diabetes group (age 40 to 75), and primary prevention (age 30 to 79, no diabetes, LDL 70 to 189)."
  },
  {
    "id": "cvr-030",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hyperlipidemia",
    "source": "CV Unit Review, slide 65 (What is Clinical ASCVD)",
    "question": "Select ALL conditions that count as clinical ASCVD.",
    "options": [
      "History of MI or acute coronary syndrome",
      "Ischemic stroke or TIA",
      "Peripheral arterial disease with intermittent claudication",
      "Well-controlled hypertension with no vascular events"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Clinical ASCVD includes coronary heart disease (ACS, prior MI, stable angina, prior PCI or CABG), cerebrovascular disease (ischemic stroke, TIA, carotid stenosis), peripheral arterial disease (claudication, critical limb ischemia, revascularization), and aortic atherosclerotic disease. Hypertension alone without a vascular event is a risk factor, not clinical ASCVD.",
    "why": [
      "Correct. Prior MI or ACS is clinical ASCVD.",
      "Correct. Ischemic stroke or TIA is clinical ASCVD.",
      "Correct. Peripheral arterial disease with claudication is clinical ASCVD.",
      "Incorrect. Hypertension alone without a vascular event is a risk factor, not clinical ASCVD."
    ]
  },
  {
    "id": "cvr-031",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hyperlipidemia",
    "source": "CV Unit Review, slide 73 (58-year-old diabetic, ASCVD risk 12%)",
    "question": "A 58-year-old man with an 11-year history of type 2 diabetes and hypertension has LDL-C 155 mg/dL, a microalbumin/creatinine ratio of 100, no clinical ASCVD, and a 10-year ASCVD risk of 12%. The most appropriate initial pharmacotherapy is:",
    "options": [
      "High-intensity statin therapy",
      "Moderate-intensity statin therapy",
      "Low-intensity statin plus ezetimibe",
      "PCSK9 inhibitor monotherapy",
      "Bile acid sequestrant"
    ],
    "answer": 0,
    "explanation": "A diabetic aged 40 to 75 with diabetes-specific risk enhancers (long duration and microalbuminuria) and an elevated 10-year risk warrants high-intensity statin therapy to lower LDL toward the more aggressive goal.",
    "why": [
      "Correct. Diabetes with risk enhancers and elevated risk calls for a high-intensity statin.",
      "Moderate intensity is used for diabetics without additional risk enhancers.",
      "A statin, not a low-intensity statin plus ezetimibe, is the appropriate first step.",
      "PCSK9 inhibitors are add-on agents, not initial monotherapy.",
      "Bile acid sequestrants are not first-line for this patient."
    ]
  },
  {
    "id": "cvr-032",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Hyperlipidemia",
    "source": "CV Unit Review, slide 75 (69-year-old very high-risk ASCVD)",
    "question": "A 69-year-old man with CABG 3 years ago and a recent NSTEMI is on atorvastatin 80 mg and ezetimibe 10 mg with LDL-C 82 mg/dL, and still smokes with poorly controlled hypertension. For secondary prevention in very high-risk ASCVD, which agent should be added?",
    "options": [
      "PCSK9 inhibitor monoclonal antibody",
      "Fenofibrate",
      "Bempedoic acid",
      "Omega-3 fatty acid ethyl esters",
      "Bile acid sequestrant"
    ],
    "answer": 0,
    "explanation": "In very high-risk ASCVD with LDL-C still above goal despite a maximally tolerated statin plus ezetimibe, a PCSK9 inhibitor monoclonal antibody is the recommended next agent.",
    "why": [
      "Correct. A PCSK9 inhibitor is added when statin plus ezetimibe leaves LDL above goal in very high-risk ASCVD.",
      "Fenofibrate lowers triglycerides but is not the LDL-lowering add-on here.",
      "Bempedoic acid is generally reserved for statin intolerance, not the first add-on after ezetimibe.",
      "Omega-3 ethyl esters target triglycerides, not LDL for this indication.",
      "Bile acid sequestrants are not the recommended next step in very high-risk secondary prevention."
    ]
  },
  {
    "id": "cvr-033",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Cardiac Surgery Review",
    "source": "CV Unit Review, slide 81 (58-year-old, three-vessel disease, SYNTAX 28)",
    "question": "A 58-year-old man with diabetes, hypertension, and hyperlipidemia has stable exertional angina despite optimal therapy. Angiography shows three-vessel disease with over 70% stenosis in the proximal LAD, circumflex, and RCA; EF is 52% and SYNTAX score is 28. The most appropriate next step is:",
    "options": [
      "CABG using the LIMA and saphenous vein grafts",
      "PCI with drug-eluting stents to all three vessels",
      "Add a long-acting nitrate and ranolazine, deferring revascularization",
      "Transmyocardial laser revascularization"
    ],
    "answer": 0,
    "explanation": "A diabetic with complex three-vessel disease involving the proximal LAD and a higher SYNTAX score favors CABG (LIMA plus saphenous vein grafts) over multivessel PCI, which improves survival in this group.",
    "why": [
      "Correct. Diabetes with complex multivessel disease and LAD involvement favors CABG.",
      "Multivessel PCI is less favored than CABG in a diabetic with a higher SYNTAX score.",
      "He is already on optimal medical therapy and remains symptomatic, so revascularization is indicated.",
      "Transmyocardial laser revascularization is not the appropriate next step here."
    ]
  },
  {
    "id": "cvr-034",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "CV Unit Review",
    "section": "Cardiac Surgery Review",
    "source": "CV Unit Review, slide 83 (Pregnant woman needing mitral valve replacement)",
    "question": "A pregnant woman with severe, highly symptomatic mitral valve disease needs mitral valve replacement. Which prosthetic valve is recommended in pregnancy?",
    "options": [
      "A bioprosthetic valve, because it avoids the need for lifelong anticoagulation",
      "A mechanical valve, for its longevity and freedom from structural deterioration",
      "A mechanical valve, for superior hemodynamics and prevention of postpartum heart failure",
      "A bioprosthetic valve, for superior hemodynamics and long-term durability"
    ],
    "answer": 0,
    "explanation": "A bioprosthetic valve is preferred in pregnancy because it avoids the lifelong anticoagulation a mechanical valve requires. Warfarin is teratogenic, so avoiding required anticoagulation is the key advantage, even though bioprosthetic valves are less durable.",
    "why": [
      "Correct. Bioprosthetic valves avoid the required anticoagulation that is hazardous in pregnancy.",
      "Mechanical valve longevity is outweighed by the teratogenic anticoagulation it requires.",
      "Mechanical valves require anticoagulation (warfarin), which is unsafe in pregnancy.",
      "Bioprosthetic valves are actually less durable; the real reason to choose one is avoiding anticoagulation."
    ]
  },
  {
    "id": "img-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 5 (Ultrasound Basics)",
    "question": "In echocardiography, what physically produces the image the transducer displays?",
    "options": [
      "The time it takes for emitted high-frequency sound waves to bounce back to the transducer",
      "The heat generated as sound waves pass through tissue",
      "The magnetic alignment of hydrogen protons in the myocardium",
      "The gamma radiation emitted by an injected tracer"
    ],
    "answer": 0,
    "explanation": "A transducer emits high-frequency sound waves; as they pass through tissue and blood they bounce back, and the time it takes for a wave to return is what produces the picture. Reflection is strongest at boundaries where density changes most.",
    "why": [
      "Correct. The return time of reflected sound waves builds the image, with the strongest reflection at density boundaries.",
      "Heat is not how ultrasound forms an image.",
      "That describes MRI, not echocardiography.",
      "That describes nuclear imaging (SPECT), not ultrasound."
    ]
  },
  {
    "id": "img-002",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 7 (TTE - no radiation)",
    "question": "A transthoracic echocardiogram (TTE) exposes the patient to ionizing radiation.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "TTE uses ultrasound and involves no radiation, which is one of its advantages as a first-line and repeatable study.",
    "why": [
      "Incorrect. Ultrasound-based imaging does not use ionizing radiation.",
      "Correct. TTE uses sound waves and has no radiation exposure."
    ]
  },
  {
    "id": "img-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 7 (TTE - poor study populations)",
    "question": "Which patients tend to have poor-quality transthoracic echocardiogram studies?",
    "options": [
      "Patients with COPD or severe obesity",
      "Patients with a pacemaker",
      "Patients in atrial fibrillation",
      "Patients who cannot hold their breath"
    ],
    "answer": 0,
    "explanation": "Air (as in COPD) and excess soft tissue (severe obesity) both scatter and attenuate ultrasound, degrading transthoracic image quality. These patients often need a transesophageal study for clearer images.",
    "why": [
      "Correct. Hyperinflated lungs and body habitus both worsen transthoracic windows.",
      "A pacemaker does not degrade an ultrasound image the way air or tissue does.",
      "Atrial fibrillation affects rhythm-gated studies, but is not what makes a TTE window poor.",
      "Breath-holding is a limitation of cardiac MRI, not TTE."
    ]
  },
  {
    "id": "img-004",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 6 (TTE evaluates)",
    "question": "Which of the following can a transthoracic echocardiogram evaluate? Select all that apply.",
    "options": [
      "Left and right ventricular systolic function (ejection fraction)",
      "Valvular stenosis and regurgitation",
      "Pericardial effusion",
      "The exact location and percent stenosis of a coronary artery blockage"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Echo assesses ventricular systolic and diastolic function, chamber size and wall thickness, valves (stenosis, regurgitation, endocarditis), the pericardium, IVC, pulmonary artery, and aortic root. It does not visualize the coronary arteries directly; that requires coronary CTA or catheterization.",
    "why": [
      "Correct. Ejection fraction and diastolic function are core echo measurements.",
      "Correct. Valve stenosis, regurgitation, and vegetations are assessed by echo.",
      "Correct. Echo readily detects pericardial effusion.",
      "Incorrect. Echo cannot map coronary blockages; that is the role of coronary CTA or catheterization."
    ]
  },
  {
    "id": "img-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 17 (Doppler color convention)",
    "question": "On color Doppler echocardiography, what does blue indicate?",
    "options": [
      "Blood moving away from the transducer at a lower frequency",
      "Blood moving toward the transducer at a higher frequency",
      "Turbulent, disorganized flow",
      "Absence of any blood flow"
    ],
    "answer": 0,
    "explanation": "By convention, blue is flow away from the transducer (lower frequency) and red is flow toward it (higher frequency). A mixture of red and blue signals turbulence, often at an abnormal valve.",
    "why": [
      "Correct. Blue equals away, at a lower returning frequency.",
      "That describes red, not blue.",
      "Turbulence appears as a mixture of red and blue, not solid blue.",
      "Color Doppler encodes direction and speed of flow, not its absence."
    ]
  },
  {
    "id": "img-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 17 (Doppler use)",
    "question": "Doppler imaging during echocardiography is mostly used to evaluate what?",
    "options": [
      "Valvular abnormalities",
      "Coronary artery calcium",
      "Myocardial viability",
      "Pericardial thickness"
    ],
    "answer": 0,
    "explanation": "Doppler uses the Doppler effect to measure the direction and speed of blood flow, and is mostly used to evaluate valvular abnormalities such as stenosis and regurgitation.",
    "why": [
      "Correct. Flow direction and velocity across valves is the main Doppler application.",
      "Calcium is quantified by CT, not Doppler.",
      "Viability is assessed with nuclear or MRI studies.",
      "Pericardial thickness is a structural measure, not a Doppler flow measurement."
    ]
  },
  {
    "id": "img-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 23 (TEE advantages)",
    "question": "Compared with a transthoracic study, what is a key advantage of a transesophageal echocardiogram (TEE)?",
    "options": [
      "Clearer images of left-sided structures such as the aortic and mitral valves and the left atrial appendage",
      "It avoids the need for any sedation or anesthesia",
      "It directly visualizes the coronary arteries",
      "It uses no probe and is entirely noncontact"
    ],
    "answer": 0,
    "explanation": "Because the probe sits in the esophagus just behind the heart, TEE gives clearer images of left-sided structures, including the aortic valve, mitral valve, pulmonic valve, and left atrial appendage.",
    "why": [
      "Correct. Proximity to the left heart yields superior left-sided imaging.",
      "TEE carries anesthesia and aspiration risks precisely because sedation is used.",
      "TEE does not image the coronary arteries.",
      "TEE requires a probe passed into the esophagus."
    ]
  },
  {
    "id": "img-008",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 21 (TEE indications)",
    "question": "Which of the following are indications for a transesophageal echocardiogram? Select all that apply.",
    "options": [
      "Surgical planning for valve replacement or cardiac mass removal",
      "Confirming endocarditis and measuring vegetation size",
      "Evaluating for a thrombus, including in the left atrial appendage",
      "Quantifying coronary artery calcium to guide statin therapy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "TEE indications include surgical and intraoperative valve planning, confirming endocarditis and sizing vegetations, evaluating for thrombus (notably the left atrial appendage), and thoracic aortic dissection. Calcium scoring is a CT study, not an echo indication.",
    "why": [
      "Correct. Valve and mass surgical planning is a classic TEE indication.",
      "Correct. TEE confirms endocarditis and measures vegetation size.",
      "Correct. TEE is the study of choice for left atrial appendage thrombus.",
      "Incorrect. Coronary calcium scoring is done with CT, not TEE."
    ]
  },
  {
    "id": "img-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 23 (LAA thrombus in AFib)",
    "question": "In a patient with atrial fibrillation, what is the most common location for a thrombus to form?",
    "options": [
      "The left atrial appendage",
      "The right ventricular apex",
      "The aortic root",
      "The coronary sinus"
    ],
    "answer": 0,
    "explanation": "Stagnant flow in the left atrial appendage during atrial fibrillation makes it the most common site of thrombus formation, which is why TEE is used to evaluate it before cardioversion.",
    "why": [
      "Correct. The left atrial appendage is the classic site of AFib-related thrombus.",
      "The RV apex is not the typical thrombus site in AFib.",
      "The aortic root is not where AFib thrombi form.",
      "The coronary sinus is a venous structure, not the typical thrombus location."
    ]
  },
  {
    "id": "img-010",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 20 (TEE after TTE)",
    "question": "A transesophageal echocardiogram is usually performed before a transthoracic echocardiogram.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "A TEE is usually done after a TTE to confirm findings, and is typically performed in the hospital by a cardiologist because it is more invasive.",
    "why": [
      "Incorrect. TTE is the first-line study; TEE follows to confirm findings.",
      "Correct. TEE usually follows an initial transthoracic study."
    ]
  },
  {
    "id": "img-011",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Echocardiography",
    "source": "Cardiac Imaging, slide 9 (Echo terms)",
    "question": "Match each echocardiography term to its description.",
    "pairs": [
      {
        "left": "Transducer",
        "right": "Probe that emits and receives high-frequency sound waves to build the image",
        "why": "The transducer is the probe that both sends and receives ultrasound."
      },
      {
        "left": "Doppler",
        "right": "Encodes direction and speed of blood flow, mostly to assess valves",
        "why": "Doppler uses the frequency shift of moving blood to show flow direction and velocity."
      },
      {
        "left": "TTE",
        "right": "First-line, no-radiation study performed on the chest wall",
        "why": "The transthoracic study is the noninvasive, radiation-free first test."
      },
      {
        "left": "TEE",
        "right": "Probe passed into the esophagus for clearer left-sided images",
        "why": "The transesophageal probe sits behind the heart for superior left-heart detail."
      }
    ],
    "explanation": "These four terms describe the core echo tools: the transducer generates the ultrasound, Doppler measures flow, TTE is the first-line surface study, and TEE gives higher-resolution left-sided imaging from the esophagus."
  },
  {
    "id": "img-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Chest Pain Evaluation",
    "source": "Cardiac Imaging, slide 26 (Always get an EKG)",
    "question": "For any patient presenting with chest pain, which test should always be obtained first?",
    "options": [
      "An EKG",
      "A coronary CTA",
      "A transesophageal echocardiogram",
      "A nuclear viability study"
    ],
    "answer": 0,
    "explanation": "Every chest pain workup begins with an EKG. In the ED or inpatient setting a high-sensitivity troponin and other labs are added, along with a review of prior testing.",
    "why": [
      "Correct. An EKG is the mandatory first step in evaluating chest pain.",
      "Coronary CTA is a later, selective study, not the immediate first test.",
      "TEE is invasive and not a first-line chest pain test.",
      "A viability study assesses infarcted myocardium, not acute chest pain triage."
    ]
  },
  {
    "id": "img-013",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Chest Pain Evaluation",
    "source": "Cardiac Imaging, slide 105 (Chest pain criteria)",
    "question": "Which features make up the three classic chest pain (angina) criteria? Select all that apply.",
    "options": [
      "Substernal chest pain",
      "Exacerbated by exercise",
      "Relieved with nitroglycerin",
      "Worse with deep inspiration"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The three criteria are substernal location, exacerbation by exercise, and relief with nitroglycerin. Meeting all three is typical angina, two is atypical, and zero to one is noncardiac. Pain worse with inspiration is pleuritic, arguing against angina.",
    "why": [
      "Correct. Substernal location is one of the three criteria.",
      "Correct. Exertional worsening is one of the three criteria.",
      "Correct. Relief with nitroglycerin is one of the three criteria.",
      "Incorrect. Pleuritic pain (worse with inspiration) points away from angina."
    ]
  },
  {
    "id": "img-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Chest Pain Evaluation",
    "source": "Cardiac Imaging, slide 105 (Typical vs atypical angina)",
    "question": "A patient meets two of the three classic chest pain criteria. How is this chest pain best classified?",
    "options": [
      "Atypical",
      "Typical",
      "Noncardiac",
      "Asymptomatic"
    ],
    "answer": 0,
    "explanation": "Typical angina meets all three criteria, atypical meets two, and noncardiac meets zero or one. Two of three is atypical chest pain.",
    "why": [
      "Correct. Two of three criteria defines atypical chest pain.",
      "Typical requires all three criteria.",
      "Noncardiac is zero to one criterion.",
      "The patient has symptoms, so asymptomatic does not apply."
    ]
  },
  {
    "id": "img-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Chest Pain Evaluation",
    "source": "Cardiac Imaging, slide 30 (Anatomical vs functional studies)",
    "question": "Which pair of tests are the anatomical studies for coronary artery disease?",
    "options": [
      "Cardiac catheterization and coronary CTA",
      "Exercise treadmill test and stress echocardiogram",
      "Stress nuclear study and stress MRI",
      "Ankle brachial index and right heart catheterization"
    ],
    "answer": 0,
    "explanation": "Anatomical studies look directly at the coronary arteries: invasive cardiac catheterization (ICA) and coronary CTA. Functional studies (ETT, stress echo, stress nuclear, stress MRI) instead detect ischemia provoked by stress.",
    "why": [
      "Correct. Catheterization and coronary CTA image the coronary anatomy directly.",
      "These are functional stress tests, not anatomical studies.",
      "These are functional stress tests, not anatomical studies.",
      "ABI assesses peripheral arteries, and right heart cath measures pressures, not coronary anatomy."
    ]
  },
  {
    "id": "img-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Chest Pain Evaluation",
    "source": "Cardiac Imaging, slide 105 (Who should get a stress test)",
    "question": "Stress testing is best used for patients with what pretest probability of coronary artery disease?",
    "options": [
      "Intermediate",
      "Low",
      "High",
      "Zero"
    ],
    "answer": 0,
    "explanation": "Stress testing is most useful for intermediate pretest probability. Very low probability patients rarely need it, and very high probability or acute patients often go straight to catheterization.",
    "why": [
      "Correct. Intermediate pretest probability is where stress testing adds the most.",
      "Low probability patients generally do not need provocative testing.",
      "High probability or acute presentations often bypass stress testing for catheterization.",
      "Pretest probability is not expressed as zero in this framework."
    ]
  },
  {
    "id": "img-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 39 (Target heart rate)",
    "question": "During an exercise stress test, what is the target heart rate goal?",
    "options": [
      "85% of the maximum predicted heart rate, calculated as (220 minus age) times 0.85",
      "50% of the maximum predicted heart rate",
      "A fixed 150 beats per minute for all patients",
      "Whatever rate the vasodilator produces"
    ],
    "answer": 0,
    "explanation": "The goal of an exercise stress test is to raise the heart rate to 85% of the maximum predicted for age, calculated as (220 minus age) times 0.85, while monitoring the EKG, blood pressure, and symptoms.",
    "why": [
      "Correct. 85% of (220 minus age) is the target heart rate.",
      "50% is too low to adequately provoke ischemia.",
      "The target scales with age, not a single fixed rate.",
      "Vasodilators like regadenoson work without a heart rate target; this question is about exercise testing."
    ]
  },
  {
    "id": "img-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 39 (ETT sensitivity)",
    "question": "Which stress test is the most basic and the least sensitive and specific?",
    "options": [
      "Exercise treadmill test (ETT)",
      "Stress echocardiogram",
      "Nuclear (SPECT) stress test",
      "Stress cardiac MRI"
    ],
    "answer": 0,
    "explanation": "The plain exercise treadmill test relies on EKG changes alone and is the most basic option with the lowest sensitivity and specificity. Adding imaging (echo, nuclear, or MRI) improves both.",
    "why": [
      "Correct. The ETT is the least sensitive and specific because it uses EKG changes only.",
      "Stress echo adds imaging, improving sensitivity and specificity.",
      "Nuclear imaging improves detection and localizes ischemia.",
      "Stress MRI adds detailed imaging, more than a plain ETT."
    ]
  },
  {
    "id": "img-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 36 (Regadenoson mechanism)",
    "question": "What is the mechanism of regadenoson when used for a pharmacologic stress test?",
    "options": [
      "An A2A adenosine receptor agonist that vasodilates the coronary arteries to simulate stress",
      "A beta agonist that raises heart rate and contractility",
      "A calcium channel blocker that slows the heart",
      "A nitric oxide donor that reduces preload"
    ],
    "answer": 0,
    "explanation": "Regadenoson is an A2A adenosine receptor agonist that causes coronary vasodilation, simulating the effect of exercise. Heart rate is not the endpoint. It is more selective than adenosine, has a longer half-life, and has few side effects.",
    "why": [
      "Correct. Regadenoson is a selective A2A agonist causing coronary vasodilation.",
      "That describes dobutamine, not regadenoson.",
      "Regadenoson is a vasodilator, not a rate-slowing calcium channel blocker.",
      "Regadenoson acts on adenosine receptors, not as a nitric oxide donor."
    ]
  },
  {
    "id": "img-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 36 (Dobutamine mechanism)",
    "question": "What is the mechanism of dobutamine when used for pharmacologic stress?",
    "options": [
      "A beta agonist that increases heart rate and contractility",
      "An adenosine receptor agonist that dilates coronary arteries",
      "A beta blocker that lowers myocardial oxygen demand",
      "A radioactive tracer taken up by viable myocardium"
    ],
    "answer": 0,
    "explanation": "Dobutamine is a beta agonist that increases heart rate and contractility, thereby increasing myocardial oxygen demand to provoke ischemia during stress echo or nuclear studies.",
    "why": [
      "Correct. Dobutamine is a beta agonist raising rate and contractility.",
      "That describes regadenoson or adenosine, not dobutamine.",
      "Dobutamine stimulates, rather than blocks, beta receptors.",
      "That describes a nuclear tracer, not dobutamine."
    ]
  },
  {
    "id": "img-021",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 46 (Nuclear stress indications)",
    "question": "Which of the following are indications for a nuclear stress test over a plain exercise treadmill test? Select all that apply.",
    "options": [
      "Left bundle branch block (LBBB)",
      "Known coronary artery disease or prior obstruction",
      "Poor exercise capacity or inability to walk",
      "A completely normal resting EKG in a low-risk patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nuclear imaging is preferred when the resting EKG is uninterpretable (such as LBBB), when there is known CAD, high risk, poor exercise capacity, or a need to localize ischemia and gauge lesion significance. A low-risk patient with a normal EKG who can exercise does not need it.",
    "why": [
      "Correct. LBBB makes exercise EKG changes uninterpretable, favoring imaging.",
      "Correct. Known CAD is an indication for nuclear imaging.",
      "Correct. Poor exercise capacity favors imaging (with pharmacologic stress if needed).",
      "Incorrect. A low-risk patient with a normal EKG who can exercise is the ideal plain ETT candidate."
    ]
  },
  {
    "id": "img-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 46 (SPECT tracer)",
    "question": "A SPECT nuclear stress test uses which of the following to form its images?",
    "options": [
      "Technetium-99m, which emits gamma radiation detected by a nuclear camera",
      "Gadolinium contrast detected by a magnetic field",
      "Iodinated contrast detected by X-ray",
      "Microbubbles detected by ultrasound"
    ],
    "answer": 0,
    "explanation": "SPECT (single photon emission computed tomography) uses a technetium-99m tracer that emits gamma radiation; the nuclear camera detects it to build images of the heart at rest and at stress.",
    "why": [
      "Correct. Technetium-99m emits gamma radiation captured by the nuclear camera.",
      "Gadolinium is an MRI agent, not a SPECT tracer.",
      "Iodinated contrast is used in CT and catheterization, not SPECT.",
      "Microbubbles are ultrasound contrast, not a nuclear tracer."
    ]
  },
  {
    "id": "img-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 50 (Infarct vs ischemia)",
    "question": "On a nuclear perfusion study, how is an area of infarct distinguished from an area of ischemia?",
    "options": [
      "Infarct is myocardium previously infarcted with no blood flow at rest or stress; ischemia is myocardium that is not perfused only under stress",
      "Infarct is perfused only under stress; ischemia is dead tissue at rest",
      "Infarct lights up on repeat delayed imaging; ischemia never does",
      "There is no way to tell them apart on a nuclear study"
    ],
    "answer": 0,
    "explanation": "An infarct is previously infarcted myocardium that receives no blood flow (a fixed defect). Ischemia is myocardium that perfuses at rest but not under stress (a reversible defect).",
    "why": [
      "Correct. Fixed defect equals infarct; reversible stress-induced defect equals ischemia.",
      "This reverses the two definitions.",
      "Delayed uptake describes a viability study, not the basic infarct-versus-ischemia distinction.",
      "The rest-versus-stress comparison is exactly how nuclear imaging separates them."
    ]
  },
  {
    "id": "img-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 51 (Viability study)",
    "question": "In a nuclear viability study using thallium-201 or Tc-99m sestamibi, how is viable myocardium identified?",
    "options": [
      "Viable myocardium takes up the tracer and lights up on repeat images taken at 4 or 24 hours",
      "Viable myocardium never takes up the tracer at any time point",
      "Viable myocardium is identified only by wall motion on echo",
      "Viable myocardium appears as a fixed cold defect on all images"
    ],
    "answer": 0,
    "explanation": "Thallium-201 and Tc-99m sestamibi are absorbed through cell membranes of living cells. After initial rest images, repeat images at 4 or 24 hours show viable myocardium lighting up, distinguishing it from non-viable scar.",
    "why": [
      "Correct. Delayed redistribution and uptake marks viable myocardium.",
      "Viable cells do take up the tracer; that is the point of the study.",
      "Viability studies use the nuclear tracer, not echo wall motion, in this context.",
      "A fixed cold defect indicates scar, the opposite of viable tissue."
    ]
  },
  {
    "id": "img-025",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 43 (Stress echo value)",
    "question": "Adding echocardiographic imaging to a stress test increases sensitivity and specificity and can isolate the area of ischemia.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "A stress echo looks at wall motion at rest and at target heart rate. The imaging improves sensitivity and specificity over a plain ETT and can localize the ischemic territory. It also helps when the baseline EKG is abnormal (such as LVH).",
    "why": [
      "Correct. Imaging adds diagnostic accuracy and localizes ischemia.",
      "Incorrect. Stress echo does improve sensitivity, specificity, and localization."
    ]
  },
  {
    "id": "img-026",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 52 (Case 1 - stable chest pain, normal EKG)",
    "question": "A 45-year-old man with hypertension has substernal chest pressure that began at rest, did not worsen with walking, and was relieved by nitroglycerin. Vitals are normal, his EKG is normal, and three troponins are negative. He is otherwise fit. Which test is most appropriate?",
    "options": [
      "Exercise treadmill test",
      "Coronary artery catheterization",
      "Pharmacologic nuclear stress test",
      "Transesophageal echocardiogram"
    ],
    "answer": 0,
    "explanation": "This is an intermediate-risk patient who can exercise and has a normal, interpretable baseline EKG and negative troponins. The plain exercise treadmill test is the appropriate first study; imaging is reserved for uninterpretable EKGs or inability to exercise.",
    "why": [
      "Correct. A fit patient with a normal baseline EKG and negative troponins is an ideal exercise treadmill candidate.",
      "Catheterization is invasive and not indicated with negative troponins and low-to-intermediate risk.",
      "Pharmacologic stress is for patients who cannot exercise; he can.",
      "TEE evaluates structures and thrombus, not exertional ischemia."
    ]
  },
  {
    "id": "img-027",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 58 (Case 2 - baseline LVH, uninterpretable EKG)",
    "question": "A 60-year-old woman with hypertension, type 2 diabetes, and a heavy smoking history has chest pressure and indeterminate troponins. She can exercise (achieves 12 METS), but her resting EKG shows baseline left ventricular hypertrophy that makes ischemic changes difficult to interpret. Which test best evaluates her?",
    "options": [
      "Stress echocardiogram",
      "Plain exercise treadmill test",
      "Coronary artery calcium score",
      "Ankle brachial index"
    ],
    "answer": 0,
    "explanation": "She can exercise, but her baseline LVH makes the EKG uninterpretable for ischemia. Adding imaging solves this: a stress echo shows whether wall motion becomes abnormal, so a normal echo makes the nonspecific EKG changes unlikely to be ischemic.",
    "why": [
      "Correct. Imaging overcomes an uninterpretable baseline EKG while she exercises.",
      "A plain ETT relies on EKG changes, which her LVH makes uninterpretable.",
      "A calcium score is a risk-stratification tool for asymptomatic patients, not this acute evaluation.",
      "ABI evaluates peripheral, not coronary, disease."
    ]
  },
  {
    "id": "img-028",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 64 (Case 3 - cannot stop beta blocker, known CAD)",
    "question": "A 65-year-old man with uncontrolled hypertension, diabetes, ESRD on dialysis, and known CAD (prior LAD stent) has exertional chest pain and indeterminate troponins. His blood pressure is controlled only by labetalol and clonidine, which cannot be stopped. Which stress test is most appropriate?",
    "options": [
      "Pharmacologic nuclear stress test with regadenoson",
      "Exercise treadmill test",
      "Exercise stress echocardiogram",
      "Coronary CTA"
    ],
    "answer": 0,
    "explanation": "Because he must stay on labetalol (a beta blocker), he cannot reach target heart rate with exercise. A regadenoson nuclear study is heart-rate independent and, with known CAD, localizes ischemia versus infarct. His study showed a moderate lateral-wall infarct near the apex with no ischemia and an EF of 55%.",
    "why": [
      "Correct. A vasodilator nuclear study is HR-independent and localizes disease in a patient who cannot come off a beta blocker.",
      "The beta blocker prevents reaching target heart rate for an exercise test.",
      "An exercise stress echo also depends on reaching target heart rate, which the beta blocker blocks.",
      "Coronary CTA needs a heart rate near 60 and sinus rhythm, and would still not localize functional ischemia the way perfusion imaging does."
    ]
  },
  {
    "id": "img-029",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 69 (Case 4 - positive troponin)",
    "question": "A 45-year-old smoker has constant left substernal chest pain that partially improves with nitroglycerin, and his troponins are clearly positive and rising (1.2, 1.0, 4.0). What is the most appropriate next step?",
    "options": [
      "Coronary artery catheterization",
      "Exercise treadmill test",
      "Stress echocardiogram",
      "Coronary artery calcium score"
    ],
    "answer": 0,
    "explanation": "Positive, rising troponins indicate an acute coronary syndrome (NSTEMI). This patient goes to coronary catheterization, not to a stress test. Provocative stress testing is contraindicated in an active acute coronary syndrome.",
    "why": [
      "Correct. Rising troponins mean ACS, which is a catheterization indication.",
      "Stress testing is unsafe and inappropriate during an active ACS.",
      "Stress echo is contraindicated with a positive troponin ACS.",
      "A calcium score is an outpatient risk tool, not an ACS intervention."
    ]
  },
  {
    "id": "img-030",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 72 (Cath access)",
    "question": "Coronary artery catheterization is usually performed through which access sites?",
    "options": [
      "The radial artery at the wrist or the femoral artery in the groin",
      "The internal jugular or subclavian vein",
      "The brachial vein or a peripheral IV",
      "A direct puncture of the left ventricle"
    ],
    "answer": 0,
    "explanation": "A coronary angiogram is done through an artery, usually the radial artery at the wrist or the femoral artery in the groin. A catheter is advanced to the coronary arteries and contrast is injected under fluoroscopy to map them.",
    "why": [
      "Correct. Radial and femoral arterial access are standard for coronary catheterization.",
      "Those are venous sites used for right heart catheterization, not coronary angiography.",
      "Venous access does not reach the coronary arteries for an arterial study.",
      "Direct LV puncture is not the routine access route."
    ]
  },
  {
    "id": "img-031",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 72 (Cath indications)",
    "question": "Which of the following are indications for coronary artery catheterization? Select all that apply.",
    "options": [
      "An acute ischemic event such as a STEMI or NSTEMI",
      "Concern for ischemia after a stress test",
      "Defining coronary anatomy before other cardiac or vascular surgery",
      "Screening an asymptomatic low-risk patient"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Catheterization is indicated for acute ischemic events, high-risk or unstable angina, an abnormal stress test raising concern for ischemia, and to define coronary anatomy before cardiac or vascular surgery. It is not a screening test for low-risk asymptomatic patients.",
    "why": [
      "Correct. STEMI and NSTEMI are direct catheterization indications.",
      "Correct. A positive or concerning stress test leads to catheterization.",
      "Correct. Pre-surgical anatomy definition is a recognized indication.",
      "Incorrect. This invasive test is not used to screen low-risk asymptomatic patients."
    ]
  },
  {
    "id": "img-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 79 (Drug-eluting stent DAPT)",
    "question": "After placement of a drug-eluting stent, what is the minimum recommended duration of dual antiplatelet therapy (DAPT)?",
    "options": [
      "A minimum of 6 months, with a year usually preferred",
      "1 month",
      "2 weeks",
      "No antiplatelet therapy is needed"
    ],
    "answer": 0,
    "explanation": "A drug-eluting stent is coated to delay endothelialization, so it requires DAPT for at least 6 months, with a year usually preferred. In exchange it further reduces restenosis by 50 to 70% compared with a bare metal stent.",
    "why": [
      "Correct. A drug-eluting stent needs at least 6 months of DAPT, ideally a year.",
      "One month is the duration for a bare metal stent or POBA, not a drug-eluting stent.",
      "Two weeks is far too short for any stent.",
      "DAPT is essential after stenting to prevent stent thrombosis."
    ]
  },
  {
    "id": "img-033",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 79 (POBA restenosis)",
    "question": "Plain old balloon angioplasty (POBA) without a stent has roughly what one-year restenosis rate?",
    "options": [
      "About 50%",
      "About 15 to 20%",
      "Less than 5%",
      "Essentially 0%"
    ],
    "answer": 0,
    "explanation": "POBA requires only about a month of DAPT but has a high restenosis rate of roughly 50% at one year. A bare metal stent lowers that to 15 to 20%, and a drug-eluting stent reduces it further.",
    "why": [
      "Correct. Balloon angioplasty alone restenoses about 50% of the time at a year.",
      "15 to 20% is the bare metal stent restenosis rate.",
      "Less than 5% overstates the durability of balloon-only angioplasty.",
      "Restenosis after POBA is common, not near zero."
    ]
  },
  {
    "id": "img-034",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 79 (PCI options)",
    "question": "Match each percutaneous coronary intervention option to its characteristic.",
    "pairs": [
      {
        "left": "Plain old balloon angioplasty (POBA)",
        "right": "About 1 month of DAPT; roughly 50% restenosis at one year",
        "why": "Balloon-only angioplasty needs brief DAPT but has the highest restenosis."
      },
      {
        "left": "Bare metal stent",
        "right": "About 1 month of DAPT; 15 to 20% restenosis at one year",
        "why": "Endothelialization occurs in 14 to 30 days, allowing short DAPT with moderate restenosis."
      },
      {
        "left": "Drug-eluting stent",
        "right": "At least 6 months of DAPT; a further 50 to 70% reduction in restenosis versus bare metal",
        "why": "The coating delays endothelialization, requiring longer DAPT but giving the lowest restenosis."
      }
    ],
    "explanation": "The three revascularization options trade DAPT duration against restenosis risk: POBA (short DAPT, ~50% restenosis), bare metal stent (short DAPT, 15 to 20%), and drug-eluting stent (at least 6 months of DAPT, lowest restenosis)."
  },
  {
    "id": "img-035",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 80 (Cath complications)",
    "question": "Which of the following are potential complications of coronary catheterization? Select all that apply.",
    "options": [
      "Coronary artery dissection and vascular complications",
      "Contrast dye reaction and renal injury",
      "Stroke and bleeding",
      "Permanent immunity to future contrast reactions"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Catheterization complications include bleeding, vascular complications (including coronary artery dissection), infection, stroke, contrast reaction, and renal injury.",
    "why": [
      "Correct. Vascular complications and coronary dissection can occur.",
      "Correct. Contrast reaction and contrast-induced renal injury are recognized risks.",
      "Correct. Stroke and bleeding are potential complications.",
      "Incorrect. A procedure does not confer immunity to future contrast reactions."
    ]
  },
  {
    "id": "img-036",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Angiography & PCI",
    "source": "Cardiac Imaging, slide 81 (Right heart catheterization)",
    "question": "A right heart catheterization is primarily used to assess which of the following?",
    "options": [
      "Pulmonary pressures, blood oxygenation, cardiac function, and shunts",
      "The exact location of coronary artery stenoses",
      "Peripheral arterial disease in the legs",
      "Coronary calcium burden"
    ],
    "answer": 0,
    "explanation": "A right heart catheterization, done through a vein, assesses pulmonary pressures, blood oxygenation, cardiac function, and shunts. Indications include evaluating shock, volume status and cardiac index, pulmonary hypertension, and endomyocardial biopsy.",
    "why": [
      "Correct. Pulmonary pressures, oxygenation, cardiac function, and shunts are its purpose.",
      "Coronary stenoses are mapped by a left-sided coronary angiogram, not right heart cath.",
      "Peripheral arterial disease is assessed with ABI and peripheral angiography.",
      "Calcium burden is measured by CT, not right heart catheterization."
    ]
  },
  {
    "id": "img-037",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "CT Imaging",
    "source": "Cardiac Imaging, slide 85 (Coronary CTA requirements and limits)",
    "question": "Which of the following are true limitations or requirements of coronary CTA? Select all that apply.",
    "options": [
      "The heart rate ideally needs to be around 60",
      "The patient should generally be in sinus rhythm, because irregular rhythms degrade the study",
      "It ideally requires a BMI of less than 35",
      "It uses no contrast and no radiation"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Coronary CTA is extremely specific for locating and grading blockages at low radiation dose, but it requires a heart rate near 60, generally sinus rhythm (irregular rhythms degrade the images), a BMI ideally under 35, and it still uses iodinated contrast and radiation.",
    "why": [
      "Correct. A controlled heart rate near 60 is needed for image quality.",
      "Correct. Irregular rhythms such as atrial fibrillation degrade the study.",
      "Correct. A BMI under 35 is the ideal limit.",
      "Incorrect. Coronary CTA still uses contrast and radiation, just at a low dose."
    ]
  },
  {
    "id": "img-038",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "CT Imaging",
    "source": "Cardiac Imaging, slide 88 (SCOT-HEART trial)",
    "question": "What did the SCOT-HEART trial demonstrate about adding coronary CTA to standard of care?",
    "options": [
      "A significant reduction in death from coronary artery disease or nonfatal MI at 5 years",
      "No difference in any clinical outcome",
      "A higher rate of death from coronary artery disease",
      "That coronary CTA can replace catheterization for treating blockages"
    ],
    "answer": 0,
    "explanation": "SCOT-HEART compared standard of care to standard of care plus coronary CTA and found that adding CTA significantly reduced death from coronary artery disease or nonfatal MI at 5 years.",
    "why": [
      "Correct. Adding coronary CTA reduced CAD death or nonfatal MI at 5 years.",
      "There was a significant benefit, not a null result.",
      "The trial showed reduced, not increased, cardiac death.",
      "CTA is diagnostic; it does not treat blockages the way catheterization can."
    ]
  },
  {
    "id": "img-039",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "CT Imaging",
    "source": "Cardiac Imaging, slide 90 (Calcium score of 0)",
    "question": "A coronary artery calcium score of 0 in an asymptomatic patient indicates what?",
    "options": [
      "No identifiable calcium and very low risk, so statin use can be deferred for up to 5 years",
      "Extensive plaque burden requiring immediate aspirin and statin",
      "A guaranteed absence of any coronary artery disease for life",
      "A moderate plaque burden warranting guideline-directed therapy"
    ],
    "answer": 0,
    "explanation": "A calcium score of 0 means no identifiable calcium and a very low risk of a cardiovascular event over the next 10 years, so statin therapy can generally be deferred for up to 5 years. This is the basis of the power-of-zero concept.",
    "why": [
      "Correct. A score of 0 supports deferring statin therapy up to 5 years in a low-risk patient.",
      "That describes a score over 400, not 0.",
      "A score of 0 lowers, but does not permanently guarantee the absence of, disease.",
      "Moderate plaque with guideline-directed therapy describes the 101 to 400 range."
    ]
  },
  {
    "id": "img-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "CT Imaging",
    "source": "Cardiac Imaging, slide 90 (Calcium score over 400)",
    "question": "A coronary artery calcium score over 400 indicates what?",
    "options": [
      "Extensive plaque burden with a high likelihood of at least one 50% or greater stenosis; recommend guideline-directed therapy and consider aspirin",
      "No identifiable calcium and very low risk",
      "Minimal plaque burden managed by lifestyle changes alone",
      "That coronary CTA is no longer indicated"
    ],
    "answer": 0,
    "explanation": "A calcium score over 400 signals extensive plaque burden with a high likelihood of at least one 50% or greater plaque. It calls for guideline-directed therapy and consideration of aspirin.",
    "why": [
      "Correct. Over 400 means extensive plaque with high likelihood of significant stenosis.",
      "That describes a score of 0.",
      "Minimal plaque with lifestyle changes describes the 1 to 10 range.",
      "A high score prompts treatment; it does not remove the role of further imaging."
    ]
  },
  {
    "id": "img-041",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "CT Imaging",
    "source": "Cardiac Imaging, slide 89 (Calcium score population)",
    "question": "The coronary artery calcium score is best used to guide statin decisions in which population?",
    "options": [
      "Asymptomatic patients older than 40 with an intermediate 10-year ASCVD risk (7.5 to 20%) who are unsure about starting a statin",
      "Patients actively having an acute coronary syndrome",
      "Diabetic patients of any age",
      "Symptomatic patients with a positive troponin"
    ],
    "answer": 0,
    "explanation": "Calcium scoring helps risk-stratify asymptomatic patients older than 40 with intermediate 10-year ASCVD risk (7.5 to 20%) who are undecided about statin therapy. It does not apply to diabetics and is not for acute presentations.",
    "why": [
      "Correct. Intermediate-risk, asymptomatic, over-40 patients are the target for calcium scoring.",
      "An acute coronary syndrome requires catheterization, not calcium scoring.",
      "The calcium score does not apply to diabetic patients.",
      "A positive troponin means ACS, not an elective risk-stratification setting."
    ]
  },
  {
    "id": "img-042",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Cardiac MRI & Peripheral Vascular Testing",
    "source": "Cardiac Imaging, slide 96 (Cardiac MRI indications)",
    "question": "Which of the following are indications for cardiac MRI? Select all that apply.",
    "options": [
      "Characterizing cardiomyopathy, including ischemic versus non-ischemic and restrictive causes such as amyloidosis or sarcoidosis",
      "Evaluating cardiac masses and certain ventricular arrhythmias (such as ARVD)",
      "Assessing structures such as valvular regurgitation, shunts, and congenital disease",
      "Quantifying coronary artery calcium for statin decisions"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cardiac MRI evaluates cardiomyopathy (ischemic vs non-ischemic, restrictive causes like amyloidosis, sarcoidosis, hemochromatosis, and Fabry disease), cardiac masses, ventricular arrhythmias (ARVD, fibrosis), structural disease (valves, shunts, congenital), viability, and preprocedure planning. Coronary calcium is scored by CT, not MRI.",
    "why": [
      "Correct. Tissue characterization of cardiomyopathies is a hallmark MRI strength.",
      "Correct. Masses and arrhythmogenic substrates such as ARVD are MRI indications.",
      "Correct. Valvular, shunt, and congenital structural assessment is an MRI use.",
      "Incorrect. Coronary calcium scoring is a CT study, not cardiac MRI."
    ]
  },
  {
    "id": "img-043",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Cardiac MRI & Peripheral Vascular Testing",
    "source": "Cardiac Imaging, slide 95 (Cardiac MRI practicalities)",
    "question": "Which of the following is a practical consideration for performing a cardiac MRI?",
    "options": [
      "It requires EKG gating and breath-holding, can be very claustrophobic, and may require gadolinium depending on the indication",
      "It is completed in under 5 minutes with no patient cooperation needed",
      "It uses iodinated contrast and ionizing radiation",
      "It cannot evaluate myocardial tissue characteristics"
    ],
    "answer": 0,
    "explanation": "A cardiac MRI takes roughly 30 minutes to 2 hours, requires breath-holding and EKG gating, is often very claustrophobic (frequently needing an anti-anxiety medication), and may require gadolinium depending on the indication.",
    "why": [
      "Correct. Gating, breath-holding, claustrophobia, and possible gadolinium all apply.",
      "MRI is lengthy and requires significant patient cooperation.",
      "MRI uses gadolinium and a magnetic field, not iodinated contrast or ionizing radiation.",
      "Tissue characterization is one of MRI's greatest strengths."
    ]
  },
  {
    "id": "img-044",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Cardiac MRI & Peripheral Vascular Testing",
    "source": "Cardiac Imaging, slide 100 (Ankle brachial index)",
    "question": "What is the purpose of the ankle brachial index (ABI)?",
    "options": [
      "An inexpensive test that compares arm to leg blood pressures to assess whether leg pain or claudication is due to peripheral arterial blockage",
      "To measure pulmonary artery pressures",
      "To quantify coronary artery calcium",
      "To evaluate valvular regurgitation"
    ],
    "answer": 0,
    "explanation": "The ABI is an inexpensive way to determine whether claudication or leg pain is due to a lower-extremity arterial blockage. It compares arm blood pressure to leg blood pressure at various points, and the ratio grades the severity of peripheral arterial disease.",
    "why": [
      "Correct. The ABI compares arm and leg pressures to assess peripheral arterial disease.",
      "Pulmonary pressures are measured by right heart catheterization.",
      "Coronary calcium is measured by CT.",
      "Valvular regurgitation is assessed by echocardiography."
    ]
  },
  {
    "id": "img-045",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Cardiac MRI & Peripheral Vascular Testing",
    "source": "Cardiac Imaging, slide 99 (ABI as inexpensive PAD test)",
    "question": "The ankle brachial index is an inexpensive first-line way to evaluate for peripheral arterial disease.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "The ABI is specifically described as an inexpensive way to see whether leg pain or claudication is due to a lower-extremity arterial blockage, making it a practical first-line peripheral vascular test.",
    "why": [
      "Correct. The ABI is an inexpensive, practical screen for peripheral arterial disease.",
      "Incorrect. The ABI is in fact an inexpensive first-line peripheral test."
    ]
  },
  {
    "id": "can-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Pericardium & Heart Layers",
    "source": "Cardiac Anatomy, slide 7 (Pericardial sac)",
    "question": "Which layer is the innermost layer of the pericardium and is closely adherent to the surface of the heart?",
    "options": [
      "Epicardium (visceral pericardium)",
      "Parietal pericardium",
      "Myocardium",
      "Endocardium"
    ],
    "answer": 0,
    "explanation": "The epicardium, or visceral pericardium, is the innermost pericardial layer and lies directly on the heart. The pericardial cavity, with its small amount of fluid, sits between it and the parietal pericardium.",
    "why": [
      "Correct. The visceral pericardium (epicardium) is adherent to the heart surface.",
      "The parietal pericardium is the outer layer of the sac, separated from the epicardium by the pericardial cavity.",
      "The myocardium is the muscle layer, not part of the pericardium.",
      "The endocardium is the inner lining of the chambers, not a pericardial layer."
    ]
  },
  {
    "id": "can-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Pericardium & Heart Layers",
    "source": "Cardiac Anatomy, slide 8 (Layers of the heart)",
    "question": "Which layer of the heart generates the force required for contraction and blood ejection?",
    "options": [
      "Myocardium",
      "Epicardium",
      "Endocardium",
      "Parietal pericardium"
    ],
    "answer": 0,
    "explanation": "The myocardium is the thick muscular layer composed of cardiac myocytes. It generates contractile force and contains the conduction system and coronary vessels.",
    "why": [
      "Correct. The myocardium is the muscular layer responsible for contraction.",
      "The epicardium is the outer surface layer, not the force generator.",
      "The endocardium is a thin endothelial lining, not contractile.",
      "The parietal pericardium is part of the surrounding sac, not the heart wall muscle."
    ]
  },
  {
    "id": "can-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Pericardium & Heart Layers",
    "source": "Cardiac Anatomy, slide 45 (Pericardial pathology)",
    "question": "Compression of the heart caused by increased pericardial pressure that impairs cardiac filling and output is called what?",
    "options": [
      "Cardiac tamponade",
      "Pericardial effusion",
      "Pericarditis",
      "Cardiomegaly"
    ],
    "answer": 0,
    "explanation": "Cardiac tamponade is compression of the heart from increased pericardial pressure that impairs filling and output. A simple effusion is fluid accumulation, and pericarditis is inflammation of the pericardium.",
    "why": [
      "Correct. Tamponade is the pressure-driven compression that impairs filling.",
      "A pericardial effusion is fluid accumulation, which may or may not compress the heart.",
      "Pericarditis is inflammation, classically causing chest pain and a friction rub.",
      "Cardiomegaly is enlargement of the heart, not pericardial compression."
    ]
  },
  {
    "id": "can-004",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Pericardium & Heart Layers",
    "source": "Cardiac Anatomy, slide 9 (Key takeaway on layers)",
    "question": "Match each heart layer to its description.",
    "pairs": [
      {
        "left": "Epicardium",
        "right": "Outer surface layer of the heart",
        "why": "The epicardium is the outermost layer, also the visceral pericardium."
      },
      {
        "left": "Myocardium",
        "right": "Muscle layer responsible for contraction",
        "why": "The myocardium is the contractile muscular layer."
      },
      {
        "left": "Endocardium",
        "right": "Inner endothelial lining of chambers and valves",
        "why": "The endocardium lines the chambers and valves with squamous endothelium."
      }
    ],
    "explanation": "From outside in: epicardium (outer), myocardium (muscle), and endocardium (inner endothelial lining continuous with vessel endothelium)."
  },
  {
    "id": "can-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Cardiac Orientation",
    "source": "Cardiac Anatomy, slide 5 (PMI)",
    "question": "Where is the normal point of maximal impulse (PMI) located?",
    "options": [
      "The 5th intercostal space at the left midclavicular line",
      "The 2nd intercostal space at the right sternal border",
      "The xiphoid process",
      "The 5th intercostal space at the right midclavicular line"
    ],
    "answer": 0,
    "explanation": "The normal PMI is at the 5th intercostal space in the left midclavicular line. Displacement of the PMI can indicate cardiomegaly.",
    "why": [
      "Correct. The 5th intercostal space, left midclavicular line, is the normal PMI.",
      "That location is the aortic auscultation area, not the PMI.",
      "The xiphoid is not the normal apical impulse location.",
      "The PMI is on the left, reflecting the leftward-pointing cardiac apex."
    ]
  },
  {
    "id": "can-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Cardiac Orientation",
    "source": "Cardiac Anatomy, slide 5 (Cardiac orientation)",
    "question": "Because the heart is rotated slightly counter-clockwise, which chamber sits directly behind the sternum and forms most of the anterior surface?",
    "options": [
      "Right ventricle",
      "Left ventricle",
      "Left atrium",
      "Right atrium"
    ],
    "answer": 0,
    "explanation": "Anterior rotation places the right ventricle directly behind the sternum, forming most of the front surface of the heart, while the left ventricle is pushed to the back and left.",
    "why": [
      "Correct. The right ventricle forms most of the anterior cardiac surface.",
      "The left ventricle is pushed posteriorly and to the left.",
      "The left atrium is the most posterior chamber.",
      "The right atrium forms part of the right border, not most of the anterior surface."
    ]
  },
  {
    "id": "can-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Myocytes & Contractile Apparatus",
    "source": "Cardiac Anatomy, slide 13 (The sarcomere)",
    "question": "What is the smallest functional contractile unit of cardiac muscle?",
    "options": [
      "The sarcomere",
      "The mitochondrion",
      "The intercalated disc",
      "The T-tubule"
    ],
    "answer": 0,
    "explanation": "The sarcomere, composed of thick (myosin) and thin (actin, troponin, tropomyosin) filaments, is the smallest functional contractile unit of cardiac muscle.",
    "why": [
      "Correct. The sarcomere is the basic contractile unit.",
      "Mitochondria produce ATP but are not the contractile unit.",
      "Intercalated discs connect cells; they are not contractile units.",
      "T-tubules conduct action potentials inward; they are not contractile units."
    ]
  },
  {
    "id": "can-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Myocytes & Contractile Apparatus",
    "source": "Cardiac Anatomy, slide 13 (Thin filament proteins)",
    "question": "Which thin-filament protein binds calcium to initiate contraction?",
    "options": [
      "Troponin",
      "Tropomyosin",
      "Actin",
      "Myosin"
    ],
    "answer": 0,
    "explanation": "Troponin binds calcium, which shifts tropomyosin away from the myosin-binding sites on actin, allowing cross-bridge formation. Myosin is the thick-filament motor protein.",
    "why": [
      "Correct. Troponin is the calcium-binding regulatory protein.",
      "Tropomyosin blocks the binding sites at rest; it does not bind calcium.",
      "Actin provides the binding sites for myosin but does not bind calcium.",
      "Myosin is the thick-filament motor protein, not the calcium sensor."
    ]
  },
  {
    "id": "can-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Myocytes & Contractile Apparatus",
    "source": "Cardiac Anatomy, slide 12 (Intercalated discs)",
    "question": "Which intercalated-disc structures permit direct movement of ions between neighboring myocytes and provide low-resistance pathways for electrical conduction?",
    "options": [
      "Gap junctions",
      "Desmosomes",
      "T-tubules",
      "Ryanodine receptors"
    ],
    "answer": 0,
    "explanation": "Gap junctions are channels that allow ions to move directly between cells, giving low-resistance electrical coupling that propagates action potentials. Desmosomes provide mechanical anchoring.",
    "why": [
      "Correct. Gap junctions electrically couple adjacent myocytes.",
      "Desmosomes are mechanical junctions that anchor cells, not electrical channels.",
      "T-tubules conduct impulses into a single cell, not between cells.",
      "Ryanodine receptors release calcium from the sarcoplasmic reticulum; they are not intercalated-disc structures."
    ]
  },
  {
    "id": "can-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Myocytes & Contractile Apparatus",
    "source": "Cardiac Anatomy, slide 11 (Mitochondria and ischemia)",
    "question": "Cardiac myocytes devote roughly 30 to 40% of their volume to mitochondria. What is the main clinical consequence of this high mitochondrial content?",
    "options": [
      "A high dependence on aerobic metabolism that makes the heart very sensitive to ischemia",
      "An ability to function indefinitely without oxygen",
      "A reliance on anaerobic glycolysis as the primary energy source",
      "Resistance to the effects of coronary artery occlusion"
    ],
    "answer": 0,
    "explanation": "The heart's continuous contraction demands constant ATP from aerobic oxidative phosphorylation, which requires a steady oxygen supply. This dependence is why myocardium is so sensitive to ischemia.",
    "why": [
      "Correct. Continuous aerobic ATP demand makes the myocardium ischemia-sensitive.",
      "The heart cannot function long without oxygen; it depends on aerobic metabolism.",
      "Cardiac myocytes rely on aerobic metabolism, not primarily anaerobic glycolysis.",
      "High oxygen dependence makes the heart vulnerable, not resistant, to occlusion."
    ]
  },
  {
    "id": "can-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Chambers & Septum",
    "source": "Cardiac Anatomy, slide 21 (Two pumps in one)",
    "question": "Why is the left ventricular wall thicker than the right ventricular wall?",
    "options": [
      "Systemic vascular resistance is greater than pulmonary vascular resistance",
      "The left ventricle holds more blood than the right ventricle",
      "Pulmonary vascular resistance is greater than systemic vascular resistance",
      "The right ventricle contracts more forcefully than the left"
    ],
    "answer": 0,
    "explanation": "The left ventricle is a high-pressure pump (about 120/80 mmHg) working against high systemic vascular resistance, whereas the right ventricle is a low-pressure pump (about 25/5 mmHg) against low pulmonary resistance. The higher workload builds a thicker LV wall.",
    "why": [
      "Correct. Higher systemic resistance demands a thicker, more powerful LV.",
      "Both ventricles eject similar stroke volumes; wall thickness reflects pressure, not volume.",
      "This reverses the relationship; pulmonary resistance is lower than systemic.",
      "The left ventricle generates the higher pressure, driving its greater thickness."
    ]
  },
  {
    "id": "can-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Chambers & Septum",
    "source": "Cardiac Anatomy, slide 20 (Patent foramen ovale)",
    "question": "A persistent flap-like opening between the right and left atria at the fossa ovalis is best described as which of the following?",
    "options": [
      "Patent foramen ovale (PFO)",
      "Ventricular septal defect (VSD)",
      "Patent ductus arteriosus (PDA)",
      "Coarctation of the aorta"
    ],
    "answer": 0,
    "explanation": "A patent foramen ovale is a persistent flap-like communication between the atria at the fossa ovalis. In utero the foramen ovale lets blood bypass the fetal lungs; it usually closes after birth but may remain patent.",
    "why": [
      "Correct. A PFO is a persistent flap-like interatrial opening at the fossa ovalis.",
      "A VSD is a communication between the ventricles, not the atria.",
      "A PDA is a persistent connection between the pulmonary artery and aorta.",
      "Coarctation is a narrowing of the aorta, not an atrial opening."
    ]
  },
  {
    "id": "can-013",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Chambers & Septum",
    "source": "Cardiac Anatomy, slide 16 (Flow of blood)",
    "question": "Which of the following statements about the chambers and blood flow are correct? Select all that apply.",
    "options": [
      "The right atrium receives systemic venous blood",
      "The left atrium receives oxygenated blood from the pulmonary veins",
      "The right ventricle pumps blood to the lungs",
      "The pulmonary arteries carry oxygenated blood"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The right atrium receives systemic venous return, the right ventricle pumps to the lungs, and the left atrium receives oxygenated blood from the pulmonary veins. The pulmonary arteries carry deoxygenated blood, and the pulmonary veins carry oxygenated blood, the important exception to the usual rule.",
    "why": [
      "Correct. The right atrium receives deoxygenated systemic venous blood.",
      "Correct. The left atrium receives oxygenated blood via the pulmonary veins.",
      "Correct. The right ventricle pumps blood to the lungs.",
      "Incorrect. The pulmonary arteries carry deoxygenated blood to the lungs."
    ]
  },
  {
    "id": "can-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Valves",
    "source": "Cardiac Anatomy, slide 28 (AV valve leaflets)",
    "question": "How many leaflets does the tricuspid valve have?",
    "options": [
      "Three",
      "Two",
      "Four",
      "One"
    ],
    "answer": 0,
    "explanation": "The tricuspid (right AV) valve has three leaflets (anterior, posterior, and septal), whereas the mitral (left AV) valve has two leaflets (anterior and posterior).",
    "why": [
      "Correct. The tricuspid valve has three leaflets.",
      "Two leaflets describes the mitral valve.",
      "The tricuspid valve has three leaflets, not four.",
      "The tricuspid valve is not a single-leaflet valve."
    ]
  },
  {
    "id": "can-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Valves",
    "source": "Cardiac Anatomy, slide 27 (Chordae tendineae and papillary muscles)",
    "question": "What is the role of the chordae tendineae and papillary muscles during ventricular systole?",
    "options": [
      "They stabilize the AV valve leaflets and prevent prolapse into the atria",
      "They actively snap the AV valves shut",
      "They open the semilunar valves",
      "They generate the pressure that ejects blood"
    ],
    "answer": 0,
    "explanation": "The papillary muscles contract with the ventricles, keeping tension on the chordae tendineae so the AV valve leaflets do not prolapse into the atria. They stabilize the leaflets; they do not close the valves, which close due to the pressure gradient.",
    "why": [
      "Correct. They maintain leaflet tension and prevent prolapse and regurgitation.",
      "The valves close because of the pressure gradient, not because the cords pull them shut.",
      "They act on the AV valves, not the semilunar valves.",
      "Ejection pressure is generated by the myocardium, not the chordae."
    ]
  },
  {
    "id": "can-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Valves",
    "source": "Cardiac Anatomy, slide 29 (Heart sounds)",
    "question": "The first heart sound (S1) is produced by closure of which valves?",
    "options": [
      "The mitral and tricuspid (AV) valves",
      "The aortic and pulmonic (semilunar) valves",
      "The aortic and mitral valves",
      "The pulmonic and tricuspid valves"
    ],
    "answer": 0,
    "explanation": "S1 (the lub) occurs at the beginning of systole from closure of the mitral and tricuspid AV valves. S2 (the dub) occurs at the beginning of diastole from closure of the aortic and pulmonic semilunar valves.",
    "why": [
      "Correct. S1 is closure of the AV valves at the start of systole.",
      "That describes S2, produced by semilunar valve closure.",
      "S1 is both AV valves closing together, not one AV and one semilunar.",
      "S1 is the two AV valves, not this mixed pair."
    ]
  },
  {
    "id": "can-017",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Valves",
    "source": "Cardiac Anatomy, slide 29 (Murmurs vs normal sounds)",
    "question": "Heart murmurs are generated by turbulent blood flow, whereas normal heart sounds are produced by blood hitting closed valves.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Normal heart sounds come from blood hitting closed valves, while murmurs are the sound of turbulent flow, which may indicate valvular stenosis or regurgitation.",
    "why": [
      "Correct. Turbulence causes murmurs; closed valves cause the normal sounds.",
      "Incorrect. This is the accurate distinction between murmurs and normal sounds."
    ]
  },
  {
    "id": "can-018",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Valves",
    "source": "Cardiac Anatomy, slide 23 (Four valves)",
    "question": "Match each cardiac valve to its location.",
    "pairs": [
      {
        "left": "Mitral valve",
        "right": "Between the left atrium and left ventricle",
        "why": "The mitral valve is the left AV valve."
      },
      {
        "left": "Tricuspid valve",
        "right": "Between the right atrium and right ventricle",
        "why": "The tricuspid valve is the right AV valve."
      },
      {
        "left": "Aortic valve",
        "right": "Between the left ventricle and the aorta",
        "why": "The aortic valve is a semilunar valve at the LV outflow."
      },
      {
        "left": "Pulmonic valve",
        "right": "Between the right ventricle and the pulmonary artery",
        "why": "The pulmonic valve is a semilunar valve at the RV outflow."
      }
    ],
    "explanation": "The two AV valves (mitral, tricuspid) sit between atria and ventricles; the two semilunar valves (aortic, pulmonic) sit at the ventricular outflows into the great vessels."
  },
  {
    "id": "can-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Conduction System",
    "source": "Cardiac Anatomy, slide 31 (SA node)",
    "question": "Which structure serves as the intrinsic pacemaker of the heart?",
    "options": [
      "The sinoatrial (SA) node",
      "The atrioventricular (AV) node",
      "The Bundle of His",
      "The Purkinje fibers"
    ],
    "answer": 0,
    "explanation": "The SA node, located in the right atrium near the junction of the superior vena cava, is the intrinsic pacemaker. It initiates impulses that spread across both atria.",
    "why": [
      "Correct. The SA node is the primary pacemaker.",
      "The AV node is a backup pacemaker and the site of conduction delay, not the primary pacemaker.",
      "The Bundle of His conducts impulses to the ventricles; it is not the primary pacemaker.",
      "Purkinje fibers rapidly distribute impulses in the ventricles; they are a slow backup pacemaker."
    ]
  },
  {
    "id": "can-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Conduction System",
    "source": "Cardiac Anatomy, slide 31 (AV nodal delay)",
    "question": "The roughly 0.1-second conduction delay in the heart occurs at which site, and what does it accomplish?",
    "options": [
      "The AV node, allowing adequate ventricular filling before contraction",
      "The SA node, setting the resting heart rate",
      "The Purkinje fibers, speeding ventricular depolarization",
      "The Bundle of His, blocking atrial impulses"
    ],
    "answer": 0,
    "explanation": "Conduction is delayed about 0.1 second at the AV node, which allows the ventricles to fill adequately before they contract. The impulse then travels rapidly through the His-Purkinje system.",
    "why": [
      "Correct. The AV nodal delay times ventricular filling before contraction.",
      "The SA node initiates impulses; it is not where the delay occurs.",
      "Purkinje fibers conduct rapidly; they do not create the delay.",
      "The Bundle of His conducts the impulse onward rather than blocking it."
    ]
  },
  {
    "id": "can-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 33 (Coronary origins)",
    "question": "The first branches of the ascending aorta, arising from the sinuses of Valsalva just above the aortic valve, are which vessels?",
    "options": [
      "The left main coronary artery and the right coronary artery",
      "The carotid and subclavian arteries",
      "The pulmonary arteries",
      "The coronary sinus and the great cardiac vein"
    ],
    "answer": 0,
    "explanation": "The left main coronary artery and the right coronary artery are the first branches of the ascending aorta, both originating from the aortic root within the sinuses of Valsalva.",
    "why": [
      "Correct. The left main and RCA arise from the aortic root sinuses of Valsalva.",
      "The carotid and subclavian arteries arise from the aortic arch, not the root sinuses.",
      "The pulmonary arteries arise from the right ventricle, not the aorta.",
      "The coronary sinus and cardiac veins are venous structures, not aortic branches."
    ]
  },
  {
    "id": "can-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 36 (Coronary dominance)",
    "question": "In a right-dominant coronary circulation, which is the case for about 85% of people, the posterior descending artery (PDA) arises from which vessel?",
    "options": [
      "The right coronary artery (RCA)",
      "The left circumflex artery (LCx)",
      "The left anterior descending artery (LAD)",
      "The left main coronary artery"
    ],
    "answer": 0,
    "explanation": "About 85% of people are right dominant, meaning the PDA arises from the RCA. Roughly 10% are left dominant (PDA from the LCx) and about 5% are co-dominant.",
    "why": [
      "Correct. Right dominance means the PDA comes off the RCA.",
      "PDA from the LCx defines left dominance, seen in about 10%.",
      "The PDA does not arise from the LAD in this classification.",
      "The left main gives rise to the LAD and LCx, not directly to the PDA."
    ]
  },
  {
    "id": "can-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 37 (Coronary venous drainage)",
    "question": "Most of the cardiac veins drain deoxygenated blood into which structure, which then empties into the right atrium?",
    "options": [
      "The coronary sinus",
      "The superior vena cava",
      "The pulmonary veins",
      "The aortic root"
    ],
    "answer": 0,
    "explanation": "Most cardiac veins drain into the coronary sinus, a large venous structure on the posterior heart, which empties into the right atrium.",
    "why": [
      "Correct. The coronary sinus collects cardiac venous blood and drains to the right atrium.",
      "The superior vena cava returns systemic venous blood, not coronary venous blood.",
      "The pulmonary veins carry oxygenated blood from the lungs to the left atrium.",
      "The aortic root is arterial; it gives off the coronary arteries."
    ]
  },
  {
    "id": "can-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 39 (Diastolic coronary perfusion)",
    "question": "Coronary perfusion occurs predominantly during which phase, and what is the consequence for a patient with marked tachycardia?",
    "options": [
      "During diastole, so a shortened diastole from tachycardia can reduce myocardial oxygen supply",
      "During systole, so a faster heart rate improves myocardial oxygen supply",
      "During diastole, so tachycardia has no effect on myocardial oxygen supply",
      "During systole, so tachycardia reduces oxygen demand"
    ],
    "answer": 0,
    "explanation": "The coronary arteries fill predominantly during diastole. Tachycardia shortens diastole, reducing coronary filling time and myocardial oxygen supply, which can provoke ischemia even without a fixed occlusion.",
    "why": [
      "Correct. Diastolic perfusion means a short diastole from tachycardia lowers supply.",
      "Perfusion is diastolic, and tachycardia reduces rather than improves supply.",
      "Tachycardia does affect supply by shortening diastolic filling time.",
      "Coronary filling is diastolic, and tachycardia raises, not lowers, demand."
    ]
  },
  {
    "id": "can-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 40 (STEMI territories)",
    "question": "ST-segment elevation in leads II, III, and aVF localizes to which wall, and which artery is the most common culprit?",
    "options": [
      "Inferior wall, most commonly the right coronary artery (RCA)",
      "Anterior wall, most commonly the LAD",
      "Lateral wall, most commonly the LCx",
      "Septal wall, most commonly the LAD septal branches"
    ],
    "answer": 0,
    "explanation": "Leads II, III, and aVF face the inferior wall. Inferior STEMI is most commonly caused by the right coronary artery. Anterior (V1 to V4) points to the LAD, and lateral (I, aVL, V5 to V6) to the LCx or a diagonal branch.",
    "why": [
      "Correct. II, III, aVF is inferior, most often an RCA occlusion.",
      "Anterior wall with LAD corresponds to V1 to V4, not the inferior leads.",
      "Lateral wall with LCx corresponds to I, aVL, V5 to V6.",
      "Septal changes appear in V1 to V2, not II, III, aVF."
    ]
  },
  {
    "id": "can-026",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Anatomy",
    "section": "Coronary Circulation",
    "source": "Cardiac Anatomy, slide 43 (EKG ischemia progression)",
    "question": "Match each EKG finding to what it typically indicates.",
    "pairs": [
      {
        "left": "ST depression",
        "right": "Subendocardial ischemia",
        "why": "ST depression reflects subendocardial (non-transmural) ischemia."
      },
      {
        "left": "T-wave inversion",
        "right": "Altered repolarization",
        "why": "T-wave inversion reflects a repolarization abnormality."
      },
      {
        "left": "ST elevation",
        "right": "Acute transmural myocardial injury",
        "why": "ST elevation indicates acute full-thickness (transmural) injury."
      },
      {
        "left": "Q waves",
        "right": "Prior infarction or necrosis",
        "why": "Pathologic Q waves indicate established, prior infarction."
      }
    ],
    "explanation": "The EKG evolution of ischemia runs from ST depression (subendocardial ischemia) and T-wave inversion (repolarization change) to ST elevation (acute transmural injury) and, later, Q waves (prior necrosis)."
  },
  {
    "id": "cph-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Action Potential",
    "source": "Cardiac Physiology, slide 45 (Phase 0)",
    "question": "What causes phase 0 (rapid depolarization) of the ventricular myocyte action potential?",
    "options": [
      "Opening of fast voltage-gated sodium channels with rapid sodium influx",
      "Opening of L-type calcium channels with calcium influx",
      "Rapid potassium efflux",
      "Closure of all ion channels"
    ],
    "answer": 0,
    "explanation": "Phase 0 is driven by fast voltage-gated sodium channels opening, causing a rapid sodium influx that makes the membrane potential rise sharply toward positive.",
    "why": [
      "Correct. Fast sodium channel opening and sodium influx cause phase 0.",
      "L-type calcium influx maintains the phase 2 plateau, not phase 0.",
      "Potassium efflux drives repolarization (phases 1 and 3), not depolarization.",
      "Depolarization requires channel opening and ion flux, not closure."
    ]
  },
  {
    "id": "cph-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Action Potential",
    "source": "Cardiac Physiology, slide 46 (Phase 2 plateau)",
    "question": "During phase 2 (the plateau) of the ventricular myocyte action potential, which ion movement is primarily responsible for maintaining the plateau?",
    "options": [
      "Calcium influx balanced by potassium efflux",
      "Rapid sodium influx alone",
      "Chloride influx",
      "Potassium influx"
    ],
    "answer": 0,
    "explanation": "In phase 2, L-type calcium channels open and calcium enters the cell, balanced by potassium leaving, so the membrane potential stays near 0 mV. This prolonged plateau creates the refractory period that allows time for ventricular ejection.",
    "why": [
      "Correct. Calcium influx balanced by potassium efflux sustains the plateau.",
      "Sodium influx drives phase 0, not the plateau.",
      "Chloride influx is not the primary plateau mechanism.",
      "Potassium influx does not maintain the plateau; potassium efflux is what balances calcium entry."
    ]
  },
  {
    "id": "cph-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Action Potential",
    "source": "Cardiac Physiology, slide 45 (Phase 4 resting potential)",
    "question": "The resting membrane potential of a ventricular myocyte (about -90 mV) is maintained by high permeability to which ion?",
    "options": [
      "Potassium",
      "Sodium",
      "Calcium",
      "Chloride"
    ],
    "answer": 0,
    "explanation": "In phase 4, the cell is polarized at about -90 mV due to high potassium permeability, leaving it ready for activation.",
    "why": [
      "Correct. High potassium permeability sets the resting potential near -90 mV.",
      "Sodium permeability rises during depolarization, not at rest.",
      "Calcium entry occurs during the plateau, not at rest.",
      "Chloride is not the primary determinant of the resting potential here."
    ]
  },
  {
    "id": "cph-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Action Potential",
    "source": "Cardiac Physiology, slide 47 (Absolute refractory period)",
    "question": "Ventricular myocytes have a prolonged absolute refractory period. What is the main physiologic benefit of this?",
    "options": [
      "It prevents a second action potential during most of the cardiac action potential, avoiding tetanic contraction",
      "It allows progressively stronger contractions with repeated stimulation",
      "It increases spontaneous depolarization of ventricular myocytes",
      "It shortens repolarization and increases heart rate"
    ],
    "answer": 0,
    "explanation": "The prolonged absolute refractory period means no new action potential can be generated during most of repolarization, preventing premature re-excitation and sustained (tetanic) contraction so the ventricle can relax and fill.",
    "why": [
      "Correct. It blocks premature re-excitation and prevents tetany.",
      "Cardiac muscle does not summate into stronger contractions like this; the refractory period prevents that.",
      "It suppresses, rather than increases, extra depolarizations.",
      "It does not shorten repolarization to speed the rate; it protects against premature beats."
    ]
  },
  {
    "id": "cph-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Action Potential",
    "source": "Cardiac Physiology, slide 47 (Relative refractory period)",
    "question": "A premature ventricular impulse arriving during the relative refractory period is dangerous mainly because it can do what?",
    "options": [
      "Trigger a dangerous ventricular arrhythmia",
      "Permanently stop the SA node",
      "Cause the ventricle to relax completely",
      "Prolong the absolute refractory period"
    ],
    "answer": 0,
    "explanation": "The relative refractory period is an electrically vulnerable window; a stronger-than-normal stimulus can trigger an action potential, and a premature impulse here may set off a dangerous ventricular arrhythmia.",
    "why": [
      "Correct. This vulnerable window can allow a premature impulse to trigger an arrhythmia.",
      "It does not permanently stop the SA node.",
      "It can provoke excitation, not complete relaxation.",
      "It does not lengthen the absolute refractory period."
    ]
  },
  {
    "id": "cph-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Excitation-Contraction Coupling",
    "source": "Cardiac Physiology, slide 51 (Calcium-induced calcium release)",
    "question": "In cardiac excitation-contraction coupling, a small amount of calcium entering through L-type channels triggers a much larger calcium release from the sarcoplasmic reticulum. What mediates that larger release?",
    "options": [
      "Ryanodine receptors (RyR2) on the sarcoplasmic reticulum",
      "The SERCA pump",
      "The sodium-potassium ATPase",
      "Voltage-gated sodium channels"
    ],
    "answer": 0,
    "explanation": "This is calcium-induced calcium release: the small trigger calcium activates ryanodine receptors (RyR2) on the sarcoplasmic reticulum, releasing large amounts of calcium that then bind troponin to start cross-bridge cycling.",
    "why": [
      "Correct. RyR2 receptors release the large store of SR calcium.",
      "SERCA pumps calcium back into the SR during relaxation, not release.",
      "The sodium-potassium ATPase maintains ionic gradients, not SR calcium release.",
      "Sodium channels drive depolarization, not SR calcium release."
    ]
  },
  {
    "id": "cph-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Excitation-Contraction Coupling",
    "source": "Cardiac Physiology, slide 52 (SERCA and relaxation)",
    "question": "During myocardial relaxation, which pump returns calcium into the sarcoplasmic reticulum?",
    "options": [
      "SERCA (sarco/endoplasmic reticulum calcium ATPase)",
      "The ryanodine receptor",
      "The L-type calcium channel",
      "The sodium-calcium exchanger on the T-tubule only"
    ],
    "answer": 0,
    "explanation": "SERCA pumps calcium back into the sarcoplasmic reticulum, lowering cytosolic calcium so it dissociates from troponin, allowing tropomyosin to re-block actin and the myocyte to relax. This requires ATP.",
    "why": [
      "Correct. SERCA re-sequesters calcium into the SR during relaxation.",
      "Ryanodine receptors release calcium; they do not pump it back.",
      "L-type channels admit trigger calcium during the plateau, not reuptake.",
      "SERCA, not solely a T-tubule exchanger, is the answer described in this deck."
    ]
  },
  {
    "id": "cph-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Excitation-Contraction Coupling",
    "source": "Cardiac Physiology, slide 53 (Calcium as inotrope)",
    "question": "Which electrolyte is described as \"nature's inotrope\" because it triggers calcium-induced calcium release and facilitates actin-myosin interaction?",
    "options": [
      "Calcium",
      "Potassium",
      "Sodium",
      "Magnesium"
    ],
    "answer": 0,
    "explanation": "Calcium is nature's inotrope: it triggers calcium-induced calcium release and enables actin-myosin cross-bridge cycling, driving contractile force.",
    "why": [
      "Correct. Calcium directly drives contractile force.",
      "Potassium sets the resting potential and repolarization, not inotropy.",
      "Sodium drives depolarization, not the contractile trigger.",
      "Magnesium is an ATPase cofactor that stabilizes myocytes, not the inotrope itself."
    ]
  },
  {
    "id": "cph-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "The Cardiac Cycle",
    "source": "Cardiac Physiology, slide 57 (All valves closed)",
    "question": "During which periods of the cardiac cycle are ALL four valves closed?",
    "options": [
      "Isovolumetric ventricular contraction and isovolumetric ventricular relaxation",
      "Rapid ventricular ejection and ventricular filling",
      "Atrial systole and rapid ejection",
      "Ventricular filling and atrial systole"
    ],
    "answer": 0,
    "explanation": "All valves are closed during isovolumetric ventricular contraction (ventricle developing pressure before the semilunar valves open) and isovolumetric ventricular relaxation (after the semilunar valves close but before the AV valves open). Ventricular volume does not change during these phases.",
    "why": [
      "Correct. Both isovolumetric phases have all four valves closed.",
      "During ejection the semilunar valves are open and during filling the AV valves are open.",
      "During ejection the semilunar valves are open, so not all valves are closed.",
      "During filling and atrial systole the AV valves are open."
    ]
  },
  {
    "id": "cph-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "The Cardiac Cycle",
    "source": "Cardiac Physiology, slide 54 (Isovolumetric contraction)",
    "question": "Immediately after closure of the mitral and tricuspid valves but before opening of the aortic and pulmonic valves, which phase is occurring?",
    "options": [
      "Isovolumetric ventricular contraction",
      "Ventricular filling",
      "Atrial systole",
      "Isovolumetric ventricular relaxation"
    ],
    "answer": 0,
    "explanation": "Once the AV valves close and before the semilunar valves open, the ventricle contracts with all valves shut and no volume change: isovolumetric ventricular contraction.",
    "why": [
      "Correct. AV valves closed and semilunar valves not yet open defines isovolumetric contraction.",
      "Ventricular filling occurs with the AV valves open.",
      "Atrial systole occurs before AV valve closure, at end diastole.",
      "Isovolumetric relaxation occurs after the semilunar valves close, at the start of diastole."
    ]
  },
  {
    "id": "cph-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "The Cardiac Cycle",
    "source": "Cardiac Physiology, slide 54 (Atrial kick)",
    "question": "The atrial kick, in which atrial contraction tops off ventricular filling, occurs at what point and adds to an already substantially filled ventricle?",
    "options": [
      "At the end of diastole, when the ventricle is already about 80% filled",
      "At the beginning of systole, before the AV valves close",
      "During isovolumetric relaxation",
      "During rapid ventricular ejection"
    ],
    "answer": 0,
    "explanation": "Most ventricular filling is passive; atrial contraction at the end of diastole provides the atrial kick when the ventricle is already about 80% filled, contributing the final portion of end-diastolic volume.",
    "why": [
      "Correct. The atrial kick occurs at end diastole on top of about 80% passive filling.",
      "It occurs at the end of diastole, not the start of systole.",
      "Isovolumetric relaxation is before filling begins.",
      "Ejection is a systolic phase, not when the atrium fills the ventricle."
    ]
  },
  {
    "id": "cph-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Output & Hemodynamics",
    "source": "Cardiac Physiology, slide 60 (Cardiac output equation)",
    "question": "Which equation correctly expresses cardiac output, and what is the approximate normal resting value?",
    "options": [
      "CO = heart rate times stroke volume, about 5 L/min",
      "CO = stroke volume divided by heart rate, about 1 L/min",
      "CO = end-diastolic volume minus end-systolic volume, about 70 L/min",
      "CO = heart rate divided by stroke volume, about 100 L/min"
    ],
    "answer": 0,
    "explanation": "Cardiac output equals heart rate times stroke volume. With a normal heart rate of 60 to 100 bpm and a stroke volume near 70 mL, resting cardiac output is about 5 L/min.",
    "why": [
      "Correct. CO = HR times SV, roughly 5 L/min at rest.",
      "This inverts the relationship and gives an implausible value.",
      "EDV minus ESV defines stroke volume, not cardiac output, and the units are wrong.",
      "Dividing HR by SV is not the cardiac output formula."
    ]
  },
  {
    "id": "cph-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Output & Hemodynamics",
    "source": "Cardiac Physiology, slide 61 (Ejection fraction)",
    "question": "Ejection fraction is calculated as stroke volume divided by end-diastolic volume. What is the normal range for left ventricular ejection fraction?",
    "options": [
      "About 55 to 65%",
      "About 20 to 30%",
      "About 80 to 90%",
      "About 40 to 45%"
    ],
    "answer": 0,
    "explanation": "Ejection fraction (SV divided by EDV, times 100) is the percentage of ventricular volume ejected per beat. Normal LV ejection fraction is about 55 to 65%.",
    "why": [
      "Correct. Normal LV ejection fraction is roughly 55 to 65%.",
      "20 to 30% represents significantly reduced systolic function.",
      "80 to 90% is above the normal range.",
      "40 to 45% is mildly reduced, below the normal range."
    ]
  },
  {
    "id": "cph-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Output & Hemodynamics",
    "source": "Cardiac Physiology, slide 62 (Tachycardia and ischemia)",
    "question": "A 68-year-old man develops atrial fibrillation with a ventricular rate of 170/min and new substernal chest pressure despite no acute coronary occlusion. Which physiologic change most likely contributes to his myocardial ischemia?",
    "options": [
      "Decreased duration of diastole",
      "Increased duration of systole",
      "Increased left ventricular filling time",
      "Decreased myocardial oxygen demand"
    ],
    "answer": 0,
    "explanation": "A very fast rate shortens diastole. Because coronary perfusion and ventricular filling occur mainly in diastole, the shortened diastole reduces coronary oxygen supply while a fast rate raises demand, producing ischemia even without a fixed occlusion.",
    "why": [
      "Correct. A short diastole cuts coronary filling time and oxygen supply.",
      "Tachycardia shortens diastole disproportionately; systole does not lengthen to cause this.",
      "Filling time decreases, not increases, at high rates.",
      "A fast rate raises myocardial oxygen demand rather than lowering it."
    ]
  },
  {
    "id": "cph-015",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Cardiac Output & Hemodynamics",
    "source": "Cardiac Physiology, slide 60 (Optimizing cardiac output)",
    "question": "Which of the following changes would increase cardiac output? Select all that apply.",
    "options": [
      "Increasing preload",
      "Increasing contractility",
      "Increasing heart rate (within physiologic limits)",
      "Increasing afterload"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cardiac output rises with increased preload, contractility, or heart rate (within limits), and with decreased afterload. Increasing afterload raises the resistance the ventricle must overcome and tends to lower stroke volume.",
    "why": [
      "Correct. More preload raises stroke volume via Frank-Starling.",
      "Correct. Greater contractility raises stroke volume and output.",
      "Correct. A higher heart rate raises output within physiologic limits.",
      "Incorrect. Increasing afterload tends to reduce stroke volume and output."
    ]
  },
  {
    "id": "cph-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Autonomic Control of Heart Rate",
    "source": "Cardiac Physiology, slide 66 (Parasympathetic control)",
    "question": "Which nerve provides the primary parasympathetic innervation to the heart, and what is its effect on heart rate?",
    "options": [
      "The vagus nerve, releasing acetylcholine to slow the heart rate",
      "The phrenic nerve, releasing norepinephrine to speed the heart rate",
      "The vagus nerve, releasing norepinephrine to speed the heart rate",
      "The sympathetic chain, releasing acetylcholine to slow the heart rate"
    ],
    "answer": 0,
    "explanation": "The vagus nerve (CN X) provides the main parasympathetic supply to the heart, releasing acetylcholine that acts on muscarinic receptors to slow the heart rate (negative chronotropy) and slow AV conduction.",
    "why": [
      "Correct. Vagal acetylcholine on muscarinic receptors slows the heart.",
      "The phrenic nerve innervates the diaphragm, and this describes sympathetic transmitters.",
      "The vagus releases acetylcholine, not norepinephrine.",
      "The sympathetic system releases norepinephrine and speeds the heart, not acetylcholine."
    ]
  },
  {
    "id": "cph-017",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Autonomic Control of Heart Rate",
    "source": "Cardiac Physiology, slide 65 (Sympathetic effects)",
    "question": "Sympathetic stimulation of the heart, through beta-adrenergic receptors, produces which of the following effects? Select all that apply.",
    "options": [
      "Increased heart rate (positive chronotropy)",
      "Increased AV nodal conduction (positive dromotropy)",
      "Increased contractility (positive inotropy)",
      "Decreased contractility (negative inotropy)"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sympathetic activation, via norepinephrine and epinephrine on beta-adrenergic receptors, increases heart rate, speeds AV conduction, and increases contractility.",
    "why": [
      "Correct. Positive chronotropy increases heart rate.",
      "Correct. Positive dromotropy speeds AV conduction.",
      "Correct. Positive inotropy increases contractility.",
      "Incorrect. Sympathetic stimulation increases, not decreases, contractility."
    ]
  },
  {
    "id": "cph-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Autonomic Control of Heart Rate",
    "source": "Cardiac Physiology, slide 67 (Atropine)",
    "question": "Atropine, a muscarinic antagonist, has what effect on heart rate and why?",
    "options": [
      "It increases heart rate by blocking parasympathetic (vagal) activity",
      "It decreases heart rate by blocking sympathetic activity",
      "It increases heart rate by directly stimulating beta receptors",
      "It has no effect on heart rate"
    ],
    "answer": 0,
    "explanation": "Atropine blocks muscarinic receptors, removing the parasympathetic (vagal) brake on the SA node, so heart rate increases.",
    "why": [
      "Correct. Blocking vagal muscarinic tone unmasks a faster intrinsic rate.",
      "It blocks parasympathetic, not sympathetic, activity, and raises the rate.",
      "It works by blocking muscarinic receptors, not by stimulating beta receptors.",
      "Removing vagal tone clearly raises heart rate."
    ]
  },
  {
    "id": "cph-019",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Autonomic Control of Heart Rate",
    "source": "Cardiac Physiology, slide 69 (Intrinsic pacemaker rates)",
    "question": "Match each cardiac pacemaker structure to its intrinsic rate.",
    "pairs": [
      {
        "left": "SA node",
        "right": "60 to 100 beats per minute",
        "why": "The SA node is the fastest and dominant pacemaker."
      },
      {
        "left": "AV node",
        "right": "40 to 60 beats per minute",
        "why": "The AV node is the next-fastest backup pacemaker."
      },
      {
        "left": "Purkinje fibers",
        "right": "20 to 40 beats per minute",
        "why": "Purkinje fibers are the slowest backup pacemaker."
      }
    ],
    "explanation": "Intrinsic pacemaker rates descend down the conduction system: SA node 60 to 100, AV node 40 to 60, and Purkinje fibers 20 to 40 beats per minute."
  },
  {
    "id": "cph-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Preload, Contractility & Afterload",
    "source": "Cardiac Physiology, slide 71 (Preload)",
    "question": "Preload (end-diastolic volume) is determined primarily by which of the following?",
    "options": [
      "Venous return to the heart",
      "Systemic vascular resistance",
      "The intrinsic contractility of the myocardium",
      "Arterial blood pressure"
    ],
    "answer": 0,
    "explanation": "Preload is the volume of blood in the ventricle just before contraction (end-diastolic volume), and it is determined primarily by venous return. More venous return raises preload and stretches the muscle fibers.",
    "why": [
      "Correct. Venous return is the main determinant of preload.",
      "Systemic vascular resistance relates to afterload, not preload.",
      "Contractility is an independent property, not the determinant of preload volume.",
      "Arterial pressure relates to afterload rather than filling volume."
    ]
  },
  {
    "id": "cph-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Preload, Contractility & Afterload",
    "source": "Cardiac Physiology, slide 72 (Frank-Starling)",
    "question": "A healthy 24-year-old receives a rapid IV fluid bolus, and stroke volume increases. By the Frank-Starling mechanism, which change most directly explains this?",
    "options": [
      "Increased end-diastolic myocardial fiber stretch",
      "Decreased ventricular afterload",
      "A primary increase in myocardial contractility",
      "Increased sympathetic stimulation"
    ],
    "answer": 0,
    "explanation": "The fluid bolus increases venous return and end-diastolic volume, stretching the myocardial fibers. Greater stretch optimizes actin-myosin overlap, producing a more forceful contraction and a larger stroke volume, which is the Frank-Starling mechanism.",
    "why": [
      "Correct. Increased fiber stretch from higher EDV drives the larger stroke volume.",
      "A fluid bolus raises preload; it does not primarily lower afterload.",
      "Frank-Starling works through stretch, not a primary change in contractility.",
      "The bolus works through preload and stretch, not by raising sympathetic tone."
    ]
  },
  {
    "id": "cph-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Preload, Contractility & Afterload",
    "source": "Cardiac Physiology, slide 75 (Contractility and dobutamine)",
    "question": "A patient in cardiogenic shock is started on dobutamine, which stimulates beta-adrenergic receptors. What is the most direct effect?",
    "options": [
      "Increased myocardial contractility",
      "Decreased intracellular calcium",
      "Increased venous capacitance",
      "Decreased stroke volume"
    ],
    "answer": 0,
    "explanation": "Contractility is the intrinsic ability of the myocardium to generate force, regulated mainly by sympathetic beta-adrenergic stimulation and intracellular calcium. Dobutamine's beta stimulation increases contractility, raising stroke volume and cardiac output.",
    "why": [
      "Correct. Beta stimulation increases contractility (positive inotropy).",
      "Beta stimulation increases, not decreases, intracellular calcium availability.",
      "Increased contractility does not primarily raise venous capacitance.",
      "Contractility rises, which raises rather than lowers stroke volume."
    ]
  },
  {
    "id": "cph-023",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Physiology",
    "section": "Preload, Contractility & Afterload",
    "source": "Cardiac Physiology, slide 77 (Afterload)",
    "question": "A 62-year-old has a blood pressure of 210/110 mmHg. Assuming preload and contractility are unchanged, this acute rise in left ventricular afterload would initially produce which change?",
    "options": [
      "Decreased stroke volume",
      "Increased stroke volume",
      "Increased ejection fraction",
      "Decreased myocardial oxygen demand"
    ],
    "answer": 0,
    "explanation": "Afterload is the resistance the ventricle must overcome to eject blood. If afterload rises acutely and contractility does not change, myocardial fibers shorten less during contraction, so stroke volume falls. Chronically, high afterload drives LV hypertrophy.",
    "why": [
      "Correct. Higher afterload with fixed contractility lowers stroke volume.",
      "Stroke volume falls, not rises, with increased afterload.",
      "Ejection fraction tends to fall, not rise, when stroke volume drops.",
      "Higher afterload increases myocardial work and oxygen demand."
    ]
  },
  {
    "id": "vap-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vessel Structure & Function",
    "source": "Vascular Anatomy & Physiology, slide 84 (Functional organization)",
    "question": "Which vessels are the primary resistance vessels of the circulation?",
    "options": [
      "Arterioles",
      "Elastic arteries",
      "Capillaries",
      "Veins"
    ],
    "answer": 0,
    "explanation": "Arterioles are the primary resistance vessels because their vascular smooth muscle regulates diameter, making them the major determinant of systemic vascular resistance.",
    "why": [
      "Correct. Arterioles are the main resistance vessels and set SVR.",
      "Elastic arteries buffer pulsatile flow (Windkessel), not primary resistance.",
      "Capillaries are exchange vessels; their parallel arrangement lowers overall resistance.",
      "Veins are capacitance vessels, not the main resistance vessels."
    ]
  },
  {
    "id": "vap-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vessel Structure & Function",
    "source": "Vascular Anatomy & Physiology, slide 82 (Veins as capacitance vessels)",
    "question": "Veins are highly compliant capacitance vessels. Approximately what fraction of total blood volume do they contain, and which cardiac parameter do they most affect?",
    "options": [
      "About 60 to 70% of blood volume, most affecting preload",
      "About 10 to 20% of blood volume, most affecting afterload",
      "About 60 to 70% of blood volume, most affecting afterload",
      "About 5% of blood volume, most affecting contractility"
    ],
    "answer": 0,
    "explanation": "Veins hold roughly 60 to 70% of total blood volume and are compliant, serving as a reservoir. By governing venous return, they most affect preload. Arteries, by contrast, most affect afterload.",
    "why": [
      "Correct. Veins hold about 60 to 70% of blood volume and set preload via venous return.",
      "The volume figure is far too low, and veins affect preload, not afterload.",
      "The volume is right, but veins affect preload, not afterload.",
      "The volume is far too low, and veins do not directly set contractility."
    ]
  },
  {
    "id": "vap-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vessel Structure & Function",
    "source": "Vascular Anatomy & Physiology, slide 99 (Capillary function)",
    "question": "What is the primary function of capillaries?",
    "options": [
      "Gas, nutrient, fluid, and waste exchange with the tissues",
      "Generating systemic vascular resistance",
      "Storing the majority of blood volume",
      "Buffering pulsatile pressure via elastic recoil"
    ],
    "answer": 0,
    "explanation": "Capillaries have thin, single-endothelial-cell walls and the slowest flow, making them the primary site of gas, nutrient, fluid, and waste exchange.",
    "why": [
      "Correct. Capillaries are the site of exchange with tissues.",
      "Arterioles generate most resistance, not capillaries.",
      "Veins store most of the blood volume, not capillaries.",
      "Elastic arteries buffer pulsatile pressure, not capillaries."
    ]
  },
  {
    "id": "vap-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Arterial Pressure & Compliance",
    "source": "Vascular Anatomy & Physiology, slide 86 (Windkessel effect)",
    "question": "The Windkessel effect describes how the elastic aorta and large arteries maintain continuous blood flow. How does it work?",
    "options": [
      "Elastic arteries expand and store energy during systole, then recoil during diastole to propel blood forward",
      "Arterioles constrict during systole and dilate during diastole to smooth flow",
      "Veins store blood during systole and release it during diastole",
      "The heart contracts continuously to avoid any pause in flow"
    ],
    "answer": 0,
    "explanation": "During systole the elastic arteries expand and store part of the stroke volume as elastic potential energy; during diastole they recoil, propelling blood forward. This maintains diastolic pressure and continuous perfusion, including coronary flow.",
    "why": [
      "Correct. Systolic expansion and diastolic recoil of elastic arteries sustain flow.",
      "The Windkessel effect is an elastic-artery phenomenon, not arteriolar constriction cycling.",
      "It involves elastic arteries, not venous storage.",
      "The heart pumps intermittently; the Windkessel effect compensates for that, it does not eliminate the pause."
    ]
  },
  {
    "id": "vap-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Arterial Pressure & Compliance",
    "source": "Vascular Anatomy & Physiology, slide 89 (Pulse pressure)",
    "question": "Pulse pressure equals systolic pressure minus diastolic pressure. Which of the following increases pulse pressure?",
    "options": [
      "Increased stroke volume or stiffer, less compliant arteries",
      "Decreased stroke volume or more compliant arteries",
      "Increased venous capacitance",
      "Decreased systemic vascular resistance alone"
    ],
    "answer": 0,
    "explanation": "Pulse pressure widens with a larger stroke volume or with stiffer, less compliant arteries. Aging and atherosclerosis reduce compliance, which raises systolic pressure and widens pulse pressure.",
    "why": [
      "Correct. Larger stroke volume and stiffer arteries both widen pulse pressure.",
      "These changes would narrow, not widen, pulse pressure.",
      "Increased venous capacitance affects preload, not directly pulse pressure.",
      "Pulse pressure is driven by stroke volume and arterial compliance, not SVR alone."
    ]
  },
  {
    "id": "vap-006",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Arterial Pressure & Compliance",
    "source": "Vascular Anatomy & Physiology, slide 89 (Mean arterial pressure)",
    "question": "Which statement best describes mean arterial pressure (MAP)?",
    "options": [
      "It is the average pressure driving blood into the tissues and the most clinically useful measure of organ perfusion",
      "It is simply the average of systolic and diastolic pressure, weighted equally",
      "It equals systolic pressure minus diastolic pressure",
      "It is highest in the capillaries"
    ],
    "answer": 0,
    "explanation": "MAP represents the average pressure driving blood into the tissues and is the most clinically useful measure of organ perfusion. Because the heart spends more time in diastole, MAP is weighted toward diastolic pressure, approximated as DBP plus one-third of the pulse pressure.",
    "why": [
      "Correct. MAP is the perfusion pressure and the key measure of organ perfusion.",
      "MAP is weighted toward diastole, not a simple equal average.",
      "That defines pulse pressure, not MAP.",
      "Pressure is highest in the aorta and falls toward the capillaries, not highest in capillaries."
    ]
  },
  {
    "id": "vap-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Arterial Pressure & Compliance",
    "source": "Vascular Anatomy & Physiology, slide 90 (Korotkoff sounds)",
    "question": "When measuring blood pressure with a cuff and stethoscope, what do the first Korotkoff sound and the disappearance of sounds represent?",
    "options": [
      "The first sound marks systolic pressure; disappearance marks diastolic pressure",
      "The first sound marks diastolic pressure; disappearance marks systolic pressure",
      "Both mark the mean arterial pressure",
      "The first sound marks pulse pressure; disappearance marks MAP"
    ],
    "answer": 0,
    "explanation": "As cuff pressure drops just below systolic, blood spurts through turbulently, creating the first Korotkoff sound, which marks systolic pressure. When the cuff falls below diastolic, flow becomes laminar and the sounds disappear, marking diastolic pressure.",
    "why": [
      "Correct. First sound equals systolic; disappearance equals diastolic.",
      "This reverses the two landmarks.",
      "The sounds mark systolic and diastolic pressures, not the mean.",
      "The landmarks are systolic and diastolic, not pulse pressure and MAP."
    ]
  },
  {
    "id": "vap-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vascular Resistance & Blood Flow",
    "source": "Vascular Anatomy & Physiology, slide 94 (Determinant of resistance)",
    "question": "A small arteriole undergoes vasoconstriction. Which property has the greatest effect on the resulting increase in vascular resistance?",
    "options": [
      "Vessel radius",
      "Vessel length",
      "Blood density",
      "Vessel wall thickness"
    ],
    "answer": 0,
    "explanation": "Vessel radius is the primary determinant of resistance. Because resistance is inversely proportional to the radius raised to the fourth power, even small changes in radius have a large effect on resistance and flow.",
    "why": [
      "Correct. Radius is raised to the fourth power, so it dominates resistance.",
      "Vessel length contributes but is relatively fixed and far less influential.",
      "Blood viscosity matters somewhat, but radius has the greatest effect.",
      "Wall thickness is not the primary resistance determinant in this relationship."
    ]
  },
  {
    "id": "vap-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vascular Resistance & Blood Flow",
    "source": "Vascular Anatomy & Physiology, slide 95 (Determinants of flow)",
    "question": "Blood flow (Q) is described by Q = pressure gradient divided by resistance. Based on this, blood flow decreases when which of the following happens?",
    "options": [
      "The pressure gradient falls or vascular resistance rises, as with coronary artery stenosis",
      "The pressure gradient rises or vascular resistance falls",
      "Vessel radius increases",
      "Blood viscosity decreases"
    ],
    "answer": 0,
    "explanation": "Since flow equals the pressure gradient divided by resistance, flow decreases when the pressure gradient falls or resistance rises. Coronary artery stenosis raises resistance and reduces flow.",
    "why": [
      "Correct. A smaller gradient or higher resistance reduces flow.",
      "These changes would increase flow, not decrease it.",
      "A larger radius lowers resistance and increases flow.",
      "Lower viscosity reduces resistance and tends to increase flow."
    ]
  },
  {
    "id": "vap-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Vascular Resistance & Blood Flow",
    "source": "Vascular Anatomy & Physiology, slide 98 (Capillary velocity)",
    "question": "Blood velocity is lowest in the systemic capillaries primarily because capillaries have which feature?",
    "options": [
      "The greatest total cross-sectional area of any region of the circulation",
      "The lowest individual vascular resistance",
      "The thickest vascular walls",
      "The highest hydrostatic pressure"
    ],
    "answer": 0,
    "explanation": "Because millions of capillaries are arranged in parallel, they have the greatest total cross-sectional area. Since flow equals velocity times cross-sectional area, this large area markedly slows velocity, allowing time for exchange.",
    "why": [
      "Correct. The huge total cross-sectional area slows capillary velocity.",
      "Each capillary actually has high individual resistance; velocity is set by cross-sectional area.",
      "Capillaries have thin single-cell walls, not thick walls.",
      "Capillary hydrostatic pressure is not the highest in the circulation, and it is not why velocity is low."
    ]
  },
  {
    "id": "vap-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Endothelium & Vasomotor Control",
    "source": "Vascular Anatomy & Physiology, slide 102 (Endothelial vasodilators)",
    "question": "The endothelium produces which vasodilator that relaxes vascular smooth muscle and helps maintain basal vascular tone?",
    "options": [
      "Nitric oxide (NO)",
      "Endothelin-1",
      "Thromboxane A2",
      "Angiotensin II"
    ],
    "answer": 0,
    "explanation": "The endothelium produces nitric oxide, which relaxes vascular smooth muscle (vasodilation), and prostacyclin, which inhibits platelet aggregation. Reduced NO production is an early step in atherosclerosis.",
    "why": [
      "Correct. Nitric oxide is the key endothelial vasodilator.",
      "Endothelin-1 is a potent vasoconstrictor, not a vasodilator.",
      "Thromboxane A2 causes vasoconstriction and platelet aggregation.",
      "Angiotensin II is a vasoconstrictor produced via the RAAS."
    ]
  },
  {
    "id": "vap-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Endothelium & Vasomotor Control",
    "source": "Vascular Anatomy & Physiology, slide 106 (Endothelin-1)",
    "question": "Which potent endothelial vasoconstrictor is implicated in pulmonary arterial hypertension?",
    "options": [
      "Endothelin-1",
      "Nitric oxide",
      "Prostacyclin",
      "Bradykinin"
    ],
    "answer": 0,
    "explanation": "Endothelin-1 is a potent vasoconstrictor released in response to vascular injury, inflammation, hypoxia, and shear stress. Its excess activity contributes to pulmonary arterial hypertension through pulmonary vasoconstriction and remodeling.",
    "why": [
      "Correct. Endothelin-1 is the vasoconstrictor implicated in pulmonary arterial hypertension.",
      "Nitric oxide is a vasodilator, the opposite effect.",
      "Prostacyclin causes vasodilation and inhibits platelets.",
      "Bradykinin promotes vasodilation, not vasoconstriction."
    ]
  },
  {
    "id": "vap-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Endothelium & Vasomotor Control",
    "source": "Vascular Anatomy & Physiology, slide 104 (Adenosine and ischemia)",
    "question": "When myocardial oxygen delivery decreases and ATP is broken down, which metabolite accumulates and causes vasodilation to improve blood flow?",
    "options": [
      "Adenosine",
      "Endothelin-1",
      "Thromboxane A2",
      "Norepinephrine"
    ],
    "answer": 0,
    "explanation": "As oxygen delivery falls, ATP is broken down into adenosine, a local vasodilator that increases blood flow to match supply to metabolic demand. This is a key intrinsic mechanism of local flow regulation.",
    "why": [
      "Correct. Adenosine accumulates during ischemia and causes local vasodilation.",
      "Endothelin-1 is a vasoconstrictor, the opposite effect.",
      "Thromboxane A2 causes vasoconstriction and platelet aggregation.",
      "Norepinephrine generally causes vasoconstriction via alpha receptors."
    ]
  },
  {
    "id": "vap-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Endothelium & Vasomotor Control",
    "source": "Vascular Anatomy & Physiology, slide 102 (Endothelial dysfunction)",
    "question": "Endothelial dysfunction, with reduced nitric oxide production, is considered one of the earliest events in the development of which condition?",
    "options": [
      "Atherosclerosis",
      "Anemia",
      "Pulmonary fibrosis",
      "Peptic ulcer disease"
    ],
    "answer": 0,
    "explanation": "Reduced NO and endothelial dysfunction, driven by hypertension, diabetes, smoking, and hyperlipidemia, promote inflammation, platelet activation, and a prothrombotic state, making it one of the earliest steps in atherosclerosis.",
    "why": [
      "Correct. Endothelial dysfunction is an early event in atherosclerosis.",
      "Anemia is a red-cell disorder, not primarily an endothelial one.",
      "Pulmonary fibrosis is not the condition this describes.",
      "Peptic ulcer disease is unrelated to endothelial NO dysfunction."
    ]
  },
  {
    "id": "vap-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 113 (RAAS)",
    "question": "In the renin-angiotensin-aldosterone system, angiotensin II has which two major direct effects?",
    "options": [
      "Potent vasoconstriction and stimulation of aldosterone release",
      "Vasodilation and inhibition of aldosterone",
      "Increased sodium excretion and diuresis",
      "Suppression of sympathetic activity"
    ],
    "answer": 0,
    "explanation": "Renin (from juxtaglomerular cells when renal blood flow falls) converts angiotensinogen to angiotensin I, and ACE converts it to angiotensin II. Angiotensin II is a potent vasoconstrictor that also stimulates the adrenal cortex to release aldosterone, raising SVR and volume.",
    "why": [
      "Correct. Angiotensin II vasoconstricts and drives aldosterone release.",
      "Angiotensin II vasoconstricts and stimulates aldosterone, the opposite of this.",
      "Natriuretic peptides increase sodium excretion; angiotensin II promotes retention.",
      "Angiotensin II tends to support, not suppress, pressor responses."
    ]
  },
  {
    "id": "vap-016",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 112 (Aldosterone)",
    "question": "What is the primary effect of aldosterone on blood pressure regulation?",
    "options": [
      "Increased sodium and water reabsorption by the kidney, raising intravascular volume",
      "Increased sodium excretion, lowering intravascular volume",
      "Direct vasodilation of arterioles",
      "Suppression of the renin-angiotensin system"
    ],
    "answer": 0,
    "explanation": "Aldosterone, from the adrenal cortex (zona glomerulosa), increases renal sodium reabsorption, and water follows sodium. This raises intravascular volume, preload, and blood pressure.",
    "why": [
      "Correct. Aldosterone drives sodium and water retention, raising volume and pressure.",
      "It promotes sodium retention, not excretion.",
      "Aldosterone acts on the kidney, not as a direct arteriolar vasodilator.",
      "Aldosterone is an effector of RAAS activation, not a suppressor of it."
    ]
  },
  {
    "id": "vap-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 114 (ADH receptors)",
    "question": "Antidiuretic hormone (vasopressin) acts on two receptor types. What do its V1 and V2 receptors do?",
    "options": [
      "V1 causes vasoconstriction; V2 promotes water reabsorption in the collecting ducts",
      "V1 promotes water reabsorption; V2 causes vasoconstriction",
      "Both cause vasodilation",
      "Both promote sodium excretion"
    ],
    "answer": 0,
    "explanation": "ADH acts on V1 receptors on vascular smooth muscle to cause vasoconstriction (raising SVR) and on V2 receptors in the collecting ducts to insert aquaporins and reabsorb water. Together these support blood pressure.",
    "why": [
      "Correct. V1 vasoconstricts and V2 drives renal water reabsorption.",
      "This reverses the two receptor functions.",
      "V1 causes vasoconstriction, not vasodilation.",
      "ADH promotes water reabsorption, not sodium excretion."
    ]
  },
  {
    "id": "vap-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 117 (Natriuretic peptides)",
    "question": "B-type natriuretic peptide (BNP) is released from ventricular myocytes in response to ventricular stretch. Which set of effects does it produce?",
    "options": [
      "Sodium and water excretion, vasodilation, and suppression of RAAS and sympathetic activity",
      "Sodium and water retention, vasoconstriction, and activation of RAAS",
      "Increased contractility and heart rate only",
      "Water reabsorption via aquaporin insertion"
    ],
    "answer": 0,
    "explanation": "BNP is released with ventricular stretch and wall stress. It promotes natriuresis and diuresis, causes vasodilation, and suppresses RAAS and sympathetic activation. It is elevated in heart failure and serves as a biomarker of ventricular strain.",
    "why": [
      "Correct. BNP promotes salt and water loss, vasodilation, and RAAS suppression.",
      "These are the opposite effects, characteristic of RAAS activation.",
      "BNP does more than affect rate and contractility; it drives natriuresis and vasodilation.",
      "Aquaporin-mediated water reabsorption is an ADH effect, not BNP."
    ]
  },
  {
    "id": "vap-019",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 110 (Adrenal medulla and pheochromocytoma)",
    "question": "The adrenal medulla releases catecholamines (about 80% epinephrine). A catecholamine-secreting tumor of its chromaffin cells is called what?",
    "options": [
      "Pheochromocytoma",
      "Aldosteronoma",
      "Insulinoma",
      "Craniopharyngioma"
    ],
    "answer": 0,
    "explanation": "The adrenal medulla is the endocrine arm of the sympathetic nervous system, releasing mostly epinephrine. A chromaffin cell tumor is a pheochromocytoma, causing excess catecholamines with episodic hypertension, tachycardia, sweating, and headaches.",
    "why": [
      "Correct. A chromaffin cell (adrenal medulla) tumor is a pheochromocytoma.",
      "An aldosteronoma arises from the adrenal cortex and secretes aldosterone.",
      "An insulinoma is a pancreatic tumor secreting insulin.",
      "A craniopharyngioma is a brain tumor unrelated to catecholamines."
    ]
  },
  {
    "id": "vap-020",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Hormonal Blood Pressure Regulation",
    "source": "Vascular Anatomy & Physiology, slide 113 (Vasoactive hormones)",
    "question": "Match each hormone to its primary action on blood pressure.",
    "pairs": [
      {
        "left": "Angiotensin II",
        "right": "Potent vasoconstriction and stimulation of aldosterone",
        "why": "Angiotensin II raises SVR and drives aldosterone release."
      },
      {
        "left": "Aldosterone",
        "right": "Renal sodium and water retention, raising volume",
        "why": "Aldosterone increases sodium and water reabsorption."
      },
      {
        "left": "ADH (vasopressin)",
        "right": "Vasoconstriction and renal water reabsorption",
        "why": "ADH acts on V1 (vasoconstriction) and V2 (water reabsorption) receptors."
      },
      {
        "left": "BNP",
        "right": "Natriuresis, diuresis, and vasodilation",
        "why": "BNP promotes salt and water loss and vasodilation, lowering pressure."
      }
    ],
    "explanation": "Angiotensin II, aldosterone, and ADH all raise blood pressure (by vasoconstriction and volume retention), while BNP opposes them by promoting natriuresis, diuresis, and vasodilation."
  },
  {
    "id": "vap-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Capillary Fluid Balance & Edema",
    "source": "Vascular Anatomy & Physiology, slide 119 (Starling forces)",
    "question": "Across the capillary wall, which force primarily promotes filtration of fluid out of the capillary, and which primarily promotes reabsorption back in?",
    "options": [
      "Capillary hydrostatic pressure promotes filtration; plasma oncotic pressure (from albumin) promotes reabsorption",
      "Plasma oncotic pressure promotes filtration; capillary hydrostatic pressure promotes reabsorption",
      "Both hydrostatic and oncotic pressure promote filtration",
      "Neither force affects fluid movement"
    ],
    "answer": 0,
    "explanation": "Capillary hydrostatic pressure pushes fluid out (filtration), while plasma oncotic pressure, generated mainly by albumin, pulls water back in (reabsorption). The balance of these Starling forces determines net fluid movement.",
    "why": [
      "Correct. Hydrostatic pressure filters out; oncotic pressure reabsorbs in.",
      "This reverses the two forces.",
      "Oncotic pressure opposes filtration by pulling fluid back in.",
      "These opposing forces are precisely what govern capillary fluid movement."
    ]
  },
  {
    "id": "vap-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Capillary Fluid Balance & Edema",
    "source": "Vascular Anatomy & Physiology, slide 123 (Edema mechanisms)",
    "question": "By what mechanism does heart failure most directly cause edema?",
    "options": [
      "Increased capillary hydrostatic pressure",
      "Decreased plasma oncotic pressure from low albumin",
      "Increased capillary permeability from endothelial injury",
      "Lymphatic obstruction"
    ],
    "answer": 0,
    "explanation": "Heart failure raises venous pressure, which increases capillary hydrostatic pressure and pushes fluid out into the interstitium, producing edema when lymphatic capacity is overwhelmed. Low-albumin states cause edema by reduced oncotic pressure, and sepsis by capillary leak.",
    "why": [
      "Correct. Heart failure raises hydrostatic pressure, driving filtration and edema.",
      "Low albumin (nephrotic syndrome, cirrhosis) reduces oncotic pressure; that is a different mechanism.",
      "Increased permeability describes capillary leak in sepsis or burns, not heart failure.",
      "Lymphatic obstruction causes lymphedema, a distinct mechanism."
    ]
  },
  {
    "id": "vap-023",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 124 (Regulation of venous return)",
    "question": "Which of the following increase venous return to the heart? Select all that apply.",
    "options": [
      "The skeletal muscle pump",
      "Venous valves maintaining one-way flow",
      "The respiratory pump during inspiration",
      "Loss of sympathetic venous tone (venodilation)"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Venous return is increased by the skeletal muscle pump, one-way venous valves, the respiratory pump (inspiration lowers intrathoracic pressure and increases the gradient to the right atrium), and sympathetic venoconstriction. Venodilation would reduce venous return.",
    "why": [
      "Correct. The skeletal muscle pump compresses veins and propels blood toward the heart.",
      "Correct. Venous valves keep flow moving toward the right atrium.",
      "Correct. Inspiration increases the pressure gradient favoring venous return.",
      "Incorrect. Sympathetic venoconstriction increases venous return; venodilation decreases it."
    ]
  },
  {
    "id": "vap-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 130 (MAP equation)",
    "question": "Which equation correctly relates mean arterial pressure to cardiac output and vascular resistance?",
    "options": [
      "MAP = cardiac output times systemic vascular resistance",
      "MAP = cardiac output divided by systemic vascular resistance",
      "MAP = stroke volume times heart rate",
      "MAP = systemic vascular resistance divided by cardiac output"
    ],
    "answer": 0,
    "explanation": "MAP equals cardiac output times systemic vascular resistance (also called total peripheral resistance). MAP is the dependent variable, while CO and SVR are the regulated variables. Note that SVR and TPR are used interchangeably.",
    "why": [
      "Correct. MAP = CO times SVR.",
      "Dividing inverts the true relationship.",
      "Stroke volume times heart rate gives cardiac output, not MAP.",
      "This inverts and misorders the relationship."
    ]
  },
  {
    "id": "vap-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 132 (Baroreceptors)",
    "question": "Where are the arterial baroreceptors located, and what do they detect?",
    "options": [
      "In the carotid sinus and aortic arch, detecting changes in arterial wall stretch",
      "In the right atrium, detecting changes in venous oxygen content",
      "In the medulla, detecting changes in cerebrospinal fluid pressure",
      "In the kidneys, detecting changes in serum sodium"
    ],
    "answer": 0,
    "explanation": "Arterial baroreceptors are stretch receptors in the carotid sinus and aortic arch. They detect changes in arterial wall stretch (reflecting MAP) and signal the medullary cardiovascular center, which adjusts autonomic output to restore pressure.",
    "why": [
      "Correct. Baroreceptors sit in the carotid sinus and aortic arch and sense stretch.",
      "Those are not the arterial baroreceptor locations or stimulus.",
      "The medulla is the integration center, not the location of the stretch receptors.",
      "Renal sensing of sodium and perfusion relates to RAAS, not the arterial baroreceptors."
    ]
  },
  {
    "id": "vap-026",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 136 (Baroreceptor response to standing)",
    "question": "A healthy person rapidly stands from a supine position. Which response helps maintain arterial pressure against the effects of gravity?",
    "options": [
      "Increased sympathetic venoconstriction",
      "Decreased sympathetic activity",
      "Decreased heart rate",
      "Arteriolar vasodilation"
    ],
    "answer": 0,
    "explanation": "On standing, gravity pools blood in the legs, reducing venous return, stroke volume, cardiac output, and pressure. Baroreceptors detect the drop and the medulla increases sympathetic output, causing increased heart rate, contractility, arteriolar vasoconstriction, and venoconstriction to restore pressure.",
    "why": [
      "Correct. Increased sympathetic venoconstriction helps restore venous return and pressure.",
      "Sympathetic activity increases, not decreases, to compensate.",
      "Heart rate increases, not decreases, in the compensatory response.",
      "Arteriolar vasoconstriction, not vasodilation, helps maintain pressure."
    ]
  },
  {
    "id": "vap-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 136 (Orthostatic hypotension definition)",
    "question": "By clinical definition, orthostatic hypotension is a drop in blood pressure within 3 minutes of standing of at least which magnitude?",
    "options": [
      "A fall in systolic BP of at least 20 mmHg or diastolic BP of at least 10 mmHg",
      "A fall in systolic BP of at least 5 mmHg or diastolic BP of at least 2 mmHg",
      "A fall in systolic BP of at least 40 mmHg or diastolic BP of at least 30 mmHg",
      "Any measurable fall in mean arterial pressure"
    ],
    "answer": 0,
    "explanation": "Orthostatic hypotension is defined as a fall in systolic BP of at least 20 mmHg or in diastolic BP of at least 10 mmHg within 3 minutes of standing, reflecting inadequate baroreceptor-mediated compensation.",
    "why": [
      "Correct. The threshold is a 20 mmHg systolic or 10 mmHg diastolic drop within 3 minutes.",
      "These thresholds are too small to meet the definition.",
      "These thresholds are larger than the accepted definition.",
      "A specific threshold, not any fall at all, defines orthostatic hypotension."
    ]
  },
  {
    "id": "vap-028",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Vascular Anatomy & Physiology",
    "section": "Venous Return & Integrated Regulation",
    "source": "Vascular Anatomy & Physiology, slide 135 (Compensatory response to hypovolemia)",
    "question": "A patient with severe dehydration becomes hypotensive. Which combination represents the expected compensatory response?",
    "options": [
      "Increased heart rate, increased systemic vascular resistance, and increased renin",
      "Decreased heart rate, decreased systemic vascular resistance, and decreased renin",
      "Increased heart rate, decreased systemic vascular resistance, and decreased renin",
      "Decreased heart rate, increased systemic vascular resistance, and increased renin"
    ],
    "answer": 0,
    "explanation": "Hypovolemia lowers venous return, cardiac output, and MAP. Baroreceptor unloading increases sympathetic output (raising heart rate and vasoconstriction, hence higher SVR), and reduced renal perfusion activates RAAS (increased renin), all working to restore arterial pressure.",
    "why": [
      "Correct. The expected response is a higher heart rate, higher SVR, and higher renin.",
      "This is the opposite of the compensatory response.",
      "SVR rises and renin rises in compensation, not falls.",
      "Heart rate rises, not falls, during compensation for hypotension."
    ]
  },
  {
    "id": "aad-001",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 90 (Aneurysmal vs atherosclerotic disease)",
    "question": "Which pathophysiologic process most distinguishes aneurysmal arterial disease from atherosclerosis?",
    "options": [
      "Proteolytic degradation of the arterial wall connective tissue, with loss of elastin and collagen",
      "Proliferation of atheroma and smooth muscle narrowing the lumen",
      "Deposition of calcium in the coronary arteries",
      "Formation of a platelet-rich thrombus over a ruptured plaque"
    ],
    "answer": 0,
    "explanation": "Aneurysmal disease involves weakening and thinning of the arterial wall from proteolytic breakdown of elastin and collagen (driven by matrix metalloproteinases), which is a genetically influenced process distinct from the atheroma proliferation of atherosclerosis. The two share risk factors but are different disease mechanisms.",
    "why": [
      "Correct. Proteolysis of wall connective tissue with loss of elastin and collagen defines aneurysmal disease.",
      "Atheroma and smooth muscle proliferation describes stenotic atherosclerosis, not aneurysm formation.",
      "Coronary calcification is a marker of atherosclerosis, not the defining aneurysm mechanism.",
      "Thrombus over a ruptured plaque is an atherothrombotic event, not aneurysmal degeneration."
    ]
  },
  {
    "id": "aad-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 102 (Mechanism of dissection)",
    "question": "What is the defining mechanism of an arterial dissection?",
    "options": [
      "The intima is sheared away from the media, creating true and false lumens",
      "The entire arterial wall dilates uniformly beyond normal dimensions",
      "Atheroma proliferates and narrows the lumen",
      "The vessel wall calcifies and becomes rigid"
    ],
    "answer": 0,
    "explanation": "In dissection, a tear or intramural hemorrhage separates the intima from the media, so blood tracks between the wall layers and creates a true and a false lumen. This differs mechanically from aneurysmal dilation. Causes include hypertension, connective tissue disorders, and trauma.",
    "why": [
      "Correct. Separation of the intima from the media forming true and false lumens defines dissection.",
      "Uniform dilation beyond normal dimensions describes an aneurysm, not a dissection.",
      "Luminal narrowing from atheroma describes stenotic atherosclerosis.",
      "Wall calcification is a feature of atherosclerosis, not the dissection mechanism."
    ]
  },
  {
    "id": "aad-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 85 (Matrix metalloproteinase)",
    "question": "Overexpression of matrix metalloproteinase (MMP) contributes to aneurysm formation because MMP does what?",
    "options": [
      "Breaks down elastin and collagen in the arterial wall",
      "Deposits cholesterol within the intima",
      "Promotes platelet aggregation on the endothelium",
      "Increases nitric oxide release from the endothelium"
    ],
    "answer": 0,
    "explanation": "Matrix metalloproteinases are enzymes that degrade elastin and collagen. Their overexpression weakens the structural connective tissue of the arterial wall, predisposing to aneurysmal dilation.",
    "why": [
      "Correct. MMP degrades elastin and collagen, weakening the wall.",
      "Cholesterol deposition is an atherosclerotic process, not the action of MMP.",
      "Platelet aggregation relates to thrombosis, not MMP-driven wall breakdown.",
      "MMP breaks down structural proteins; it does not increase nitric oxide."
    ]
  },
  {
    "id": "aad-004",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 13 (Endothelial dysfunction)",
    "question": "The vascular endothelium controls smooth muscle tone largely by releasing which potent vasodilator, whose loss is central to endothelial dysfunction and atherogenesis?",
    "options": [
      "Nitric oxide",
      "Endothelin-1",
      "Thromboxane A2",
      "Angiotensin II"
    ],
    "answer": 0,
    "explanation": "The endothelium regulates arterial and arteriolar dilation mainly through nitric oxide (along with prostacyclin). Loss of this physiologic control is loosely termed endothelial dysfunction, and endothelial injury initiates atherogenesis.",
    "why": [
      "Correct. Nitric oxide is the potent endothelial vasodilator whose loss drives dysfunction.",
      "Endothelin-1 is a vasoconstrictor, the opposite effect.",
      "Thromboxane A2 causes vasoconstriction and platelet aggregation.",
      "Angiotensin II is a circulating vasoconstrictor, not the endothelial vasodilator."
    ]
  },
  {
    "id": "aad-005",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 12 (Sequelae of atherosclerosis)",
    "question": "Disruption of an atherosclerotic plaque can lead to which of the following? Select all that apply.",
    "options": [
      "Transient ischemic attack from embolized platelet aggregate or atheroma",
      "Unstable angina or NSTEMI from partial coronary occlusion",
      "STEMI or thrombotic stroke from total thrombotic occlusion",
      "Aneurysmal dilation of the vessel from loss of elastin"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Plaque disruption can shed emboli (platelet aggregate, atheroma, or thrombus) causing TIA or atheroembolism, cause partial occlusion producing unstable angina or NSTEMI, or cause total thrombotic occlusion producing STEMI or thrombotic stroke. Aneurysmal dilation is a separate, proteolytic process, not a direct sequela of plaque rupture.",
    "why": [
      "Correct. Embolized plaque debris can produce a TIA.",
      "Correct. Partial occlusion produces unstable angina or NSTEMI.",
      "Correct. Total thrombotic occlusion produces STEMI or thrombotic stroke.",
      "Incorrect. Aneurysm formation is a distinct proteolytic process, not a consequence of plaque rupture."
    ]
  },
  {
    "id": "aad-006",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 108 (Rupture is not dissection)",
    "question": "Rupture of an abdominal aortic aneurysm and aortic dissection are the same mechanical process.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Aneurysm rupture and dissection are two different mechanical processes. Aneurysm rupture is a full-thickness perforation of a dilated, weakened wall, whereas dissection is separation of wall layers. Abdominal aortic aneurysms generally do not dissect.",
    "why": [
      "Incorrect. These are distinct processes; conflating them is a common error.",
      "Correct. Rupture and dissection are different mechanical processes, and AAAs generally do not dissect."
    ]
  },
  {
    "id": "aad-007",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 111 (Connective tissue disorders)",
    "question": "Which connective tissue disorders classically predispose patients to both aneurysm formation and arterial dissection?",
    "options": [
      "Marfan syndrome and vascular Ehlers-Danlos syndrome",
      "Sickle cell disease and hemophilia",
      "Rheumatoid arthritis and gout",
      "Cystic fibrosis and Wilson disease"
    ],
    "answer": 0,
    "explanation": "Marfan syndrome and the vascular form of Ehlers-Danlos syndrome cause defects in elastin and connective tissue (cystic medial necrosis), predisposing to both aneurysm formation and dissection, often at younger ages.",
    "why": [
      "Correct. Marfan and vascular Ehlers-Danlos syndromes predispose to aneurysm and dissection.",
      "Sickle cell disease and hemophilia are not classic aortic connective tissue disorders.",
      "Rheumatoid arthritis and gout are not the classic connective tissue predispositions here.",
      "Cystic fibrosis and Wilson disease are unrelated to aortic wall connective tissue defects."
    ]
  },
  {
    "id": "aad-008",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Pathophysiology",
    "source": "Aortic & Arterial Disease, slide 10 (Three arterial disease processes)",
    "question": "Match each arterial disease process to its defining pathology.",
    "pairs": [
      {
        "left": "Atherosclerosis",
        "right": "Luminal narrowing from atheroma and smooth muscle proliferation",
        "why": "Atherosclerosis narrows the lumen through atheroma and fibrous proliferation."
      },
      {
        "left": "Aneurysm",
        "right": "Wall thinning from loss or defect of elastin and collagen",
        "why": "Aneurysm results from weakening and thinning of the wall."
      },
      {
        "left": "Dissection",
        "right": "Intima sheared from media forming true and false lumens",
        "why": "Dissection separates the wall layers into true and false lumens."
      }
    ],
    "explanation": "Atherosclerosis narrows the lumen (atheroma proliferation), aneurysm weakens and dilates the wall (proteolytic loss of elastin and collagen), and dissection separates the wall layers into true and false lumens."
  },
  {
    "id": "aad-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 25 (Pulse grading)",
    "question": "On the 0 to 4+ peripheral pulse grading scale, what does a 4+ pulse indicate?",
    "options": [
      "A bounding, aneurysmal, wide pulse",
      "A normal pulse",
      "A weak pulse",
      "An absent pulse"
    ],
    "answer": 0,
    "explanation": "The scale runs 0 (absent), 1+ (weak), 2+ (normal), 3+ (bounding), and 4+ (aneurysmal, wide pulse). A 4+ pulse suggests an underlying aneurysmal, widely pulsatile vessel.",
    "why": [
      "Correct. 4+ denotes a bounding, aneurysmal, wide pulse.",
      "A normal pulse is graded 2+.",
      "A weak pulse is graded 1+.",
      "An absent pulse is graded 0."
    ]
  },
  {
    "id": "aad-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 21 (Water hammer pulse)",
    "question": "A patient has a bounding pulse with a rapid upstroke and rapid collapse (a \"water hammer\" pulse) and a wide pulse pressure. Which condition best explains this?",
    "options": [
      "Aortic valve insufficiency",
      "Aortic stenosis",
      "Cardiogenic shock",
      "Hypovolemia"
    ],
    "answer": 0,
    "explanation": "In aortic insufficiency, part of the stroke volume regurgitates into the ventricle during diastole, lowering diastolic pressure and widening pulse pressure. The large, rapidly decaying arterial expansion produces the water hammer pulse. Similar bounding pulses occur in hyperdynamic states such as anemia and thyrotoxicosis.",
    "why": [
      "Correct. Aortic insufficiency produces a wide pulse pressure and water hammer pulse.",
      "Aortic stenosis classically produces a weak, delayed (parvus et tardus) pulse.",
      "Cardiogenic shock produces a weak, thready pulse with narrow pulse pressure.",
      "Hypovolemia produces a low-volume, thready pulse, not a bounding one."
    ]
  },
  {
    "id": "aad-011",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 20 (Thready pulse)",
    "question": "A weak, \"thready\" pulse with a diminished pulse pressure and a slow upstroke most likely reflects which state?",
    "options": [
      "Reduced left ventricular stroke volume, as in heart failure or shock",
      "Aortic insufficiency",
      "Hyperthyroidism",
      "Severe anemia"
    ],
    "answer": 0,
    "explanation": "When left ventricular stroke volume falls, as in heart failure or shock, the pulse pressure narrows and the pulse rises weakly, giving a thready pulse. Hyperdynamic states such as anemia and hyperthyroidism produce the opposite, a bounding pulse.",
    "why": [
      "Correct. Low stroke volume in heart failure or shock gives a weak, thready pulse.",
      "Aortic insufficiency gives a bounding, wide pulse, not a thready one.",
      "Hyperthyroidism is a hyperdynamic state producing a bounding pulse.",
      "Severe anemia is a hyperdynamic state producing a bounding pulse."
    ]
  },
  {
    "id": "aad-012",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 24 (Bruits)",
    "question": "What causes an arterial bruit?",
    "options": [
      "Turbulent blood flow during systole, often at a stenosis",
      "Laminar flow through a normal-caliber artery",
      "Complete occlusion of the artery",
      "Venous congestion in the limb"
    ],
    "answer": 0,
    "explanation": "A bruit is the audible turbulence of blood flow during systole, typically at a region of narrowing where eddy currents form (carotid, renal, aorto-iliac, femoral). Tortuous non-stenotic vessels can also produce bruits, and bruits are accentuated in anemia. A palpable bruit is called a thrill.",
    "why": [
      "Correct. Turbulent systolic flow, often at a stenosis, produces a bruit.",
      "Laminar flow through a normal artery is silent.",
      "Complete occlusion abolishes flow, so there is no bruit through the occluded segment.",
      "Venous congestion does not produce an arterial bruit."
    ]
  },
  {
    "id": "aad-013",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 19 (Diminished pulses)",
    "question": "Diminished or absent peripheral pulses most directly indicate which of the following?",
    "options": [
      "Upstream arterial stenosis or obstruction proximal to the palpation site",
      "Aneurysmal dilation at the palpation site",
      "A hyperdynamic circulatory state",
      "Aortic valve insufficiency"
    ],
    "answer": 0,
    "explanation": "Diminished or absent pulses reflect the sum of stenotic or obstructive lesions proximal to the site being palpated. The overall pulse exam helps localize the anatomy and severity of arterial disease.",
    "why": [
      "Correct. Weak or absent pulses reflect upstream stenosis or obstruction.",
      "Aneurysmal dilation gives a wide, bounding pulse, not a diminished one.",
      "A hyperdynamic state produces bounding, not diminished, pulses.",
      "Aortic insufficiency produces a bounding pulse, not diminished pulses."
    ]
  },
  {
    "id": "aad-014",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Vascular Evaluation & Exam",
    "source": "Aortic & Arterial Disease, slide 25 (Ankle-brachial index)",
    "question": "What does the ankle-brachial index (ABI) provide in the vascular exam?",
    "options": [
      "An objective measure of arterial perfusion pressure in the lower extremity",
      "A direct measurement of cardiac ejection fraction",
      "An estimate of central venous pressure",
      "A measure of aortic aneurysm diameter"
    ],
    "answer": 0,
    "explanation": "The ankle-brachial index compares ankle to brachial systolic pressures, giving an objective indicator of lower-extremity arterial perfusion pressure and screening for peripheral arterial disease.",
    "why": [
      "Correct. ABI objectively indicates lower-extremity arterial pressure and perfusion.",
      "It does not measure ejection fraction, a cardiac imaging parameter.",
      "It does not estimate central venous pressure.",
      "Aneurysm diameter is measured by ultrasound or CT, not by ABI."
    ]
  },
  {
    "id": "aad-015",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Imaging",
    "source": "Aortic & Arterial Disease, slide 40 (Selection of imaging)",
    "question": "Which principle best guides the selection of arterial imaging studies?",
    "options": [
      "Start with the least invasive study, but in emergent cases use the readily available modality that rapidly directs intervention",
      "Always begin with catheter angiography for its detail",
      "Avoid CT in the emergency department because of contrast risk",
      "Use MRI first in every unstable patient"
    ],
    "answer": 0,
    "explanation": "In most situations, begin with the least invasive test. In emergent or urgent cases, use whatever modality is readily available and gives a rapid answer to direct intervention, often POCUS and/or CT in the emergency department.",
    "why": [
      "Correct. Least invasive first, but rapid available imaging in emergencies.",
      "Catheter angiography is invasive and not the routine first step.",
      "CT is in fact a mainstay in the emergency setting for rapid diagnosis.",
      "MRI is often too slow for an unstable patient; CT is usually preferred."
    ]
  },
  {
    "id": "aad-016",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Imaging",
    "source": "Aortic & Arterial Disease, slide 28 (Complications of conventional angiography)",
    "question": "Which of the following are recognized complications of conventional catheter angiography? Select all that apply.",
    "options": [
      "Contrast-induced renal injury",
      "Arterial injury such as pseudoaneurysm or dissection",
      "Anaphylactoid reaction to iodinated contrast",
      "Nephrogenic systemic fibrosis from gadolinium"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Catheter angiography can cause access-site hematoma, arterial injury (pseudoaneurysm, dissection), thromboembolism, contrast-induced nephropathy, and anaphylactoid reactions to iodinated contrast. Nephrogenic systemic fibrosis is a complication of gadolinium used in MRI, not of iodinated contrast angiography.",
    "why": [
      "Correct. Iodinated contrast can cause renal injury.",
      "Correct. Catheter manipulation can injure the artery, causing pseudoaneurysm or dissection.",
      "Correct. Iodinated contrast can trigger anaphylactoid reactions.",
      "Incorrect. Nephrogenic systemic fibrosis is a gadolinium (MRI) complication, not a catheter angiography one."
    ]
  },
  {
    "id": "aad-017",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Imaging",
    "source": "Aortic & Arterial Disease, slide 32 (Gadolinium risk)",
    "question": "Gadolinium contrast used for MR angiography carries a small risk of which serious toxic effect in patients with chronic kidney disease?",
    "options": [
      "Nephrogenic systemic fibrosis",
      "Contrast-induced anaphylaxis from iodine",
      "Radiation-induced malignancy",
      "Cystic medial necrosis"
    ],
    "answer": 0,
    "explanation": "Gadolinium is generally low risk for allergic reaction, but in patients with chronic kidney disease it carries a small risk of nephrogenic systemic fibrosis. Note gadolinium is not iodine based.",
    "why": [
      "Correct. Gadolinium can cause nephrogenic systemic fibrosis in CKD.",
      "Gadolinium is not iodine based, so iodine anaphylaxis does not apply.",
      "MRI does not use ionizing radiation, so radiation malignancy does not apply.",
      "Cystic medial necrosis is a connective tissue pathology, unrelated to contrast."
    ]
  },
  {
    "id": "aad-018",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Imaging",
    "source": "Aortic & Arterial Disease, slide 63 (Ultrasound for AAA)",
    "question": "Regarding abdominal ultrasound for abdominal aortic aneurysm, which statement is most accurate?",
    "options": [
      "It is the initial study of choice and accurate for size, but CT is more sensitive for detecting leak or rupture",
      "It is the most sensitive test for detecting rupture",
      "It cannot measure aneurysm diameter accurately",
      "It requires intravenous contrast to visualize the aorta"
    ],
    "answer": 0,
    "explanation": "Ultrasound is the initial study of choice for AAA and detects diameter to within a few millimeters, making it ideal for screening and following size. However, it is not highly reliable for detecting rupture; CT is more sensitive for leak or rupture.",
    "why": [
      "Correct. Ultrasound is first-line for size but CT is better for leak or rupture.",
      "Ultrasound is not the most sensitive test for rupture; CT is more sensitive.",
      "Ultrasound measures diameter accurately, to within about 3 mm.",
      "Ultrasound does not require intravenous contrast."
    ]
  },
  {
    "id": "aad-019",
    "type": "tf",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Arterial Imaging",
    "source": "Aortic & Arterial Disease, slide 30 (Non-contrast CT for rupture)",
    "question": "A non-contrast CT can identify a ruptured aortic aneurysm because acute hemorrhage is visible without contrast.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Contrast is not always required to diagnose vessel rupture. Acute extravasated blood is visible on non-contrast CT, so a non-contrast study can identify a ruptured thoracic or abdominal aortic aneurysm, which is useful when contrast must be avoided.",
    "why": [
      "Correct. Acute hemorrhage is visible on non-contrast CT, so rupture can be identified.",
      "Incorrect. Contrast is not always required; acute blood is visible without it."
    ]
  },
  {
    "id": "aad-020",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 47 (Definition of AAA)",
    "question": "What abdominal aortic diameter defines an abdominal aortic aneurysm?",
    "options": [
      "Focal widening greater than 3 cm",
      "Focal widening greater than 1.5 cm",
      "Focal widening greater than 5.5 cm",
      "Any measurable widening of the aorta"
    ],
    "answer": 0,
    "explanation": "An abdominal aortic aneurysm is defined as focal widening of the abdominal aorta greater than 3 cm. Most are infrarenal, and mural thrombus and wall calcification are commonly present.",
    "why": [
      "Correct. Greater than 3 cm defines an abdominal aortic aneurysm.",
      "1.5 cm is within the normal caliber of the abdominal aorta.",
      "5.5 cm is the common surgical threshold, not the definition of aneurysm.",
      "A specific threshold of 3 cm, not any widening, defines the aneurysm."
    ]
  },
  {
    "id": "aad-021",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 46 (Most common aneurysm site)",
    "question": "What is the most common site of an aortic aneurysm?",
    "options": [
      "The infrarenal abdominal aorta",
      "The aortic arch",
      "The ascending aorta",
      "The suprarenal abdominal aorta"
    ],
    "answer": 0,
    "explanation": "The infrarenal abdominal aorta is the most common site of aortic aneurysm. About 90% of AAAs are infrarenal, and many extend into one or both iliac arteries.",
    "why": [
      "Correct. The infrarenal abdominal aorta is the most common site.",
      "The aortic arch is a less common thoracic aneurysm site.",
      "The ascending aorta is a thoracic site, far less common than the infrarenal abdominal aorta.",
      "Suprarenal extension occurs but is less common than infrarenal disease."
    ]
  },
  {
    "id": "aad-022",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 56 (AAA clinical presentation)",
    "question": "How do most abdominal aortic aneurysms present before they become complicated?",
    "options": [
      "Asymptomatic, often found incidentally on imaging done for another reason",
      "With severe tearing chest pain radiating to the back",
      "With sudden hemiplegia and aphasia",
      "With exertional substernal chest pressure relieved by rest"
    ],
    "answer": 0,
    "explanation": "Most AAAs are asymptomatic until they are large or complicated, and small ones are typically incidental findings on abdominal imaging done for other reasons. Expansion can cause a steady, gnawing lower back or hypogastric discomfort, and the patient may notice a pulsation.",
    "why": [
      "Correct. Most AAAs are asymptomatic and found incidentally.",
      "Tearing chest pain radiating to the back suggests aortic dissection, not an uncomplicated AAA.",
      "Sudden hemiplegia and aphasia suggest stroke, not an uncomplicated AAA.",
      "Exertional substernal pressure relieved by rest describes stable angina."
    ]
  },
  {
    "id": "aad-023",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 61 (Risk factors for AAA rupture)",
    "question": "Which of the following are risk factors for rupture of an abdominal aortic aneurysm? Select all that apply.",
    "options": [
      "Rapid expansion from baseline diameter",
      "Tobacco use",
      "Hypertension",
      "Diabetes mellitus"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Risk factors for AAA rupture include rapid expansion, tobacco use, hypertension, female gender, decreased FEV1 with COPD, recent surgery, and cardiac or renal transplant. Diabetes actually has a negative association with AAA rupture.",
    "why": [
      "Correct. Rapid expansion raises rupture risk.",
      "Correct. Tobacco use is a strong risk factor.",
      "Correct. Hypertension increases wall stress and rupture risk.",
      "Incorrect. Diabetes has a negative association with AAA rupture."
    ]
  },
  {
    "id": "aad-024",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 69 (AAA screening)",
    "question": "Which patient group is recommended for one-time ultrasound screening for abdominal aortic aneurysm?",
    "options": [
      "Men aged 65 to 75 who have ever smoked",
      "All adults over age 40 regardless of history",
      "Women under 50 with no risk factors",
      "Only patients with known coronary disease"
    ],
    "answer": 0,
    "explanation": "One-time ultrasound screening is recommended for men aged 65 to 75 who have ever smoked, the group with the highest prevalence. First-degree relatives of patients with known TAA or AAA should also be screened per AHA and ACC recommendations.",
    "why": [
      "Correct. Men 65 to 75 who have ever smoked are the classic screening group.",
      "Universal screening of all adults over 40 is not recommended.",
      "Young women without risk factors are not a recommended screening group.",
      "Known coronary disease alone is not the basis for AAA screening."
    ]
  },
  {
    "id": "aad-025",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 71 (AAA management threshold)",
    "question": "An asymptomatic patient has a 4.5 cm abdominal aortic aneurysm. What is the most appropriate management?",
    "options": [
      "Medical management with blood pressure control and surveillance imaging",
      "Immediate open surgical repair",
      "Emergent endovascular stent placement",
      "No follow-up is needed"
    ],
    "answer": 0,
    "explanation": "Most AAAs smaller than about 5 to 5.5 cm and asymptomatic can be managed medically, focusing on blood pressure control and periodic surveillance ultrasound to track size. Surgical or endovascular repair is indicated once the aneurysm reaches roughly 5.5 cm or becomes symptomatic or rapidly expanding.",
    "why": [
      "Correct. A 4.5 cm asymptomatic AAA is managed medically with surveillance.",
      "Repair is generally reserved for aneurysms about 5.5 cm or larger, or symptomatic ones.",
      "Emergent stenting is not indicated for a stable, sub-threshold aneurysm.",
      "Surveillance imaging is required to detect expansion, so follow-up is needed."
    ]
  },
  {
    "id": "aad-026",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 50 (ER case, ruptured AAA presentation)",
    "question": "A 59-year-old man with 22 years of hypertension and a 40 pack-year smoking history presents with 2 hours of severe back pain and syncope. He is lethargic with HR 126, BP 92/50, mottled cool skin, a distended tender abdomen with a faint epigastric bruit, and absent lower-extremity pulses. What is the most likely diagnosis?",
    "options": [
      "Ruptured abdominal aortic aneurysm",
      "Acute pancreatitis",
      "Perforated peptic ulcer",
      "Inferior myocardial infarction"
    ],
    "answer": 0,
    "explanation": "Severe back pain, syncope, hypotension with tachycardia (hemorrhagic shock), a distended tender abdomen, and absent lower-extremity pulses in an older hypertensive smoker point to a ruptured AAA. This is a surgical emergency and must be in the differential for any at-risk patient with abdominal or back pain and shock; POCUS is valuable at the bedside.",
    "why": [
      "Correct. Back pain, syncope, shock, and absent lower-extremity pulses in this patient indicate ruptured AAA.",
      "Pancreatitis can cause abdominal pain but does not explain absent pulses and this hemorrhagic shock picture.",
      "A perforated ulcer causes peritonitis but not absent lower-extremity pulses from aortic hemorrhage.",
      "Inferior MI is in the differential for chest pain and shock but does not explain the pulsatile abdomen and absent leg pulses."
    ]
  },
  {
    "id": "aad-027",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 68 (Blood pressure in ruptured AAA)",
    "question": "In a patient with a leaking or ruptured abdominal aortic aneurysm, how should blood pressure be managed before definitive repair?",
    "options": [
      "Permissive hypotension, keeping systolic pressure around 90 to 100 mmHg while maintaining organ perfusion",
      "Aggressive wide-open IV fluids to normalize blood pressure quickly",
      "Vasopressors to drive systolic pressure above 140 mmHg",
      "No blood pressure management is needed"
    ],
    "answer": 0,
    "explanation": "In a leaking or ruptured AAA, permissive hypotension is used: keep systolic pressure around 90 to 100 mmHg to minimize bleeding while still perfusing organs. Excessive IV fluids and a systolic pressure above 100 can rekindle bleeding, so wide-open resuscitation is avoided.",
    "why": [
      "Correct. Permissive hypotension around 90 to 100 mmHg systolic minimizes rebleeding.",
      "Wide-open fluids raise pressure and can rekindle bleeding.",
      "Driving pressure high with vasopressors would worsen hemorrhage.",
      "Deliberate blood pressure control is essential in a leaking or ruptured AAA."
    ]
  },
  {
    "id": "aad-028",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 74 (Elective AAA repair)",
    "question": "In open elective repair of an abdominal aortic aneurysm, what is done with the aneurysm and the graft?",
    "options": [
      "A synthetic Dacron graft is sutured inside the aneurysm lumen and the aneurysm wall is left intact around it, replacing the aortic route",
      "The aneurysm is bypassed with a vein graft, leaving native flow through the aneurysm",
      "The aneurysm is simply wrapped externally without a graft",
      "The aneurysm is left untreated and only blood pressure is controlled"
    ],
    "answer": 0,
    "explanation": "Open repair excludes the aneurysm by suturing a synthetic Dacron graft inside the aneurysm lumen, with the aneurysm wall left intact around the graft. This replaces the route of the native aorta and is not a bypass. Percutaneous endovascular stenting is an alternative for high-risk patients.",
    "why": [
      "Correct. A Dacron graft is sewn inside the aneurysm, which is left wrapped around it.",
      "Aneurysm repair replaces the aortic route; it is not a bypass like occlusive-disease surgery.",
      "External wrapping alone is not the standard repair; a graft is placed.",
      "A 5.5 cm or symptomatic aneurysm needs repair, not blood pressure control alone."
    ]
  },
  {
    "id": "aad-029",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 88 (Artery of Adamkiewicz)",
    "question": "Paraplegia after aortic aneurysm repair is most directly attributable to injury of which structure?",
    "options": [
      "The artery of Adamkiewicz",
      "The femoral nerve",
      "The recurrent laryngeal nerve",
      "The inferior mesenteric artery"
    ],
    "answer": 0,
    "explanation": "The artery of Adamkiewicz is a major supply to the lower spinal cord with variable location. Its interruption during aortic repair causes spinal cord ischemia and infarction with paraplegia, occurring in roughly 1% of cases.",
    "why": [
      "Correct. Injury to the artery of Adamkiewicz causes spinal cord infarction and paraplegia.",
      "Femoral nerve injury causes leg weakness but not the spinal cord infarction pattern of paraplegia here.",
      "Recurrent laryngeal nerve injury causes hoarseness, not paraplegia.",
      "Inferior mesenteric artery compromise causes ischemic colitis, not paraplegia."
    ]
  },
  {
    "id": "aad-030",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Abdominal Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 86 (Trash foot)",
    "question": "A patient develops patchy violaceous discoloration of the toes with preserved pedal pulses shortly after aortic surgery (\"trash foot\"). What is the mechanism?",
    "options": [
      "Atheroembolism of cholesterol plaque debris to small distal arteries",
      "Large-vessel thrombosis of the femoral artery",
      "Deep venous thrombosis of the calf",
      "Compartment syndrome from reperfusion"
    ],
    "answer": 0,
    "explanation": "\"Trash foot\" is atheroembolism, in which cholesterol-rich plaque debris embolizes to small distal arteries during aortic manipulation, causing patchy ischemia with often preserved proximal pulses. Surveillance of skin and distal pulses is critical after aortic surgery.",
    "why": [
      "Correct. Trash foot is atheroembolism of plaque debris to small distal vessels.",
      "Large-vessel femoral thrombosis would typically abolish distal pulses, unlike patchy atheroembolism.",
      "Deep venous thrombosis is a venous problem, not arterial atheroembolism.",
      "Compartment syndrome causes a tense, painful compartment, not patchy toe discoloration with pulses intact."
    ]
  },
  {
    "id": "aad-031",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Thoracic Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 96 (TAA demographics)",
    "question": "Which statement best characterizes thoracic aortic aneurysms (TAA) compared with abdominal aortic aneurysms?",
    "options": [
      "They account for less than 10% of aortic aneurysms and have a strong genetic and connective tissue association",
      "They are more common than AAA and almost always atherosclerotic",
      "They occur only in patients under age 40",
      "They are unrelated to hypertension"
    ],
    "answer": 0,
    "explanation": "TAAs make up less than 10% of aortic aneurysms and have a strong genetic association with collagen and elastin disorders, and are also seen in Turner syndrome and with coarctation. They are less often atherosclerotic than AAA but are still associated with and worsened by hypertension.",
    "why": [
      "Correct. TAAs are under 10% of aortic aneurysms with strong genetic and connective tissue links.",
      "TAAs are less common than AAA and less often atherosclerotic.",
      "TAAs occur most often in older patients, especially over 65, not only under 40.",
      "TAAs are associated with and exacerbated by hypertension."
    ]
  },
  {
    "id": "aad-032",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Thoracic Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 98 (Tracheal tug and hoarseness)",
    "question": "A patient with an aortic arch aneurysm develops hoarseness (dysphonia) and a \"tracheal tug\" sign. Which structure is being compressed?",
    "options": [
      "The left recurrent laryngeal nerve",
      "The phrenic nerve",
      "The vagus nerve at the jugular foramen",
      "The superior laryngeal nerve"
    ],
    "answer": 0,
    "explanation": "The left recurrent laryngeal nerve loops under the aortic arch, so an arch aneurysm can stretch or compress it, producing hoarseness and the tracheal tug sign. Esophageal compression can also cause dysphagia.",
    "why": [
      "Correct. The left recurrent laryngeal nerve is compressed by an arch aneurysm, causing hoarseness.",
      "Phrenic nerve compression affects the diaphragm, not the voice.",
      "The relevant nerve here is the recurrent laryngeal branch under the arch, not the vagus at the skull base.",
      "The superior laryngeal nerve is not the one that loops under the aortic arch."
    ]
  },
  {
    "id": "aad-033",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Thoracic Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 97 (Aortic root aneurysm complications)",
    "question": "An aneurysm of the aortic root can produce which complication due to dilation of the aortic ring?",
    "options": [
      "Aortic insufficiency (regurgitation)",
      "Mitral stenosis",
      "Tricuspid regurgitation",
      "Pulmonic stenosis"
    ],
    "answer": 0,
    "explanation": "Dilation of the aortic ring in a root aneurysm prevents the aortic valve leaflets from coapting, causing aortic insufficiency. Rupture of an ascending aortic aneurysm into the pericardial sac can also cause cardiac tamponade.",
    "why": [
      "Correct. Aortic root dilation causes aortic insufficiency.",
      "Mitral stenosis is a left AV valve problem, unrelated to aortic root dilation.",
      "Tricuspid regurgitation involves the right heart, not the aortic root.",
      "Pulmonic stenosis involves the right ventricular outflow, not the aortic root."
    ]
  },
  {
    "id": "aad-034",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Thoracic Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 100 (CXR widened mediastinum)",
    "question": "Which chest x-ray finding, though not definitive, often first raises suspicion for a thoracic aortic aneurysm?",
    "options": [
      "A widened mediastinum",
      "A boot-shaped heart",
      "Kerley B lines",
      "A right-sided aortic knob only"
    ],
    "answer": 0,
    "explanation": "A widened mediastinal shadow, sometimes with tracheal or left main bronchus displacement, often first suggests a TAA on chest x-ray. It is nonspecific (also seen with neoplasm, cyst, or substernal goiter), so CT or MR angiography is used to confirm.",
    "why": [
      "Correct. A widened mediastinum commonly first raises suspicion for TAA.",
      "A boot-shaped heart suggests tetralogy of Fallot, not TAA.",
      "Kerley B lines indicate interstitial pulmonary edema, not TAA.",
      "The finding is a widened mediastinum, not simply a right-sided aortic knob."
    ]
  },
  {
    "id": "aad-035",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Thoracic Aortic Aneurysm",
    "source": "Aortic & Arterial Disease, slide 104 (TAA management threshold)",
    "question": "A patient with Marfan syndrome has a thoracic aortic aneurysm. At what diameter is surgical repair generally recommended, compared with patients without a connective tissue disorder?",
    "options": [
      "At 5 cm in Marfan or Ehlers-Danlos syndrome, versus about 5.5 cm otherwise",
      "At 3 cm in Marfan syndrome, versus 4 cm otherwise",
      "At 7 cm regardless of underlying disease",
      "Only after rupture has occurred"
    ],
    "answer": 0,
    "explanation": "Surgical correction of a TAA is generally indicated when it is symptomatic, enlarging, or greater than about 5.5 cm. In Marfan, Ehlers-Danlos, or other progressive connective tissue disease, repair is done earlier, at about 5 cm, because of higher rupture and dissection risk. Blood pressure control slows growth.",
    "why": [
      "Correct. Repair at about 5 cm in connective tissue disease, versus about 5.5 cm otherwise.",
      "These thresholds are too small and not the ones used.",
      "Waiting until 7 cm regardless of disease would incur excess rupture risk.",
      "Elective repair is done before rupture, not after."
    ]
  },
  {
    "id": "aad-036",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 114 (Type A dissection)",
    "question": "A proximal (Stanford type A) aortic dissection originates where and carries what general management implication?",
    "options": [
      "Just distal to the aortic valve, involving the ascending aorta, and generally requires surgical repair",
      "Distal to the left subclavian artery, involving only the descending aorta, and is usually managed medically",
      "In the abdominal aorta below the renal arteries, and is managed with stenting",
      "In the iliac arteries, and is managed with anticoagulation"
    ],
    "answer": 0,
    "explanation": "Type A dissection begins just distal to the aortic valve and involves the ascending aorta. It accounts for about two-thirds of dissections and has high mortality if not treated surgically, given risks of tamponade, coronary occlusion, and aortic regurgitation.",
    "why": [
      "Correct. Type A involves the ascending aorta and generally needs surgery.",
      "That description (distal to left subclavian, descending only, often medical) is type B.",
      "Dissection classification is by ascending versus descending involvement, not an infrarenal abdominal origin.",
      "Iliac origin with anticoagulation does not describe type A dissection."
    ]
  },
  {
    "id": "aad-037",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 114 (Type B dissection)",
    "question": "A distal (Stanford type B) aortic dissection is defined by involvement beginning where?",
    "options": [
      "Distal to the left subclavian artery, involving only the descending aorta",
      "Just distal to the aortic valve in the ascending aorta",
      "At the aortic root",
      "In the abdominal aorta only"
    ],
    "answer": 0,
    "explanation": "Type B dissection begins distal to the left subclavian artery, near the ligamentum arteriosum, and involves only the descending aorta. Coarctation and patent ductus arteriosus predispose to type B.",
    "why": [
      "Correct. Type B begins distal to the left subclavian and involves the descending aorta.",
      "Involvement of the ascending aorta just distal to the valve defines type A.",
      "Aortic root involvement is part of proximal (type A) disease.",
      "Type B is defined by descending thoracic involvement, not the abdominal aorta alone."
    ]
  },
  {
    "id": "aad-038",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 112 (Dissection etiologies)",
    "question": "Which is the most common predisposing condition for aortic dissection?",
    "options": [
      "Hypertension",
      "Diabetes mellitus",
      "Hyperlipidemia",
      "Chronic kidney disease"
    ],
    "answer": 0,
    "explanation": "Hypertension is the most common predisposing factor for aortic dissection. Other causes include cystic medial necrosis (Marfan and Ehlers-Danlos), Turner syndrome, pregnancy, and deceleration trauma; many patients have no identifiable underlying disorder.",
    "why": [
      "Correct. Hypertension is the leading predisposing condition for dissection.",
      "Diabetes is not a leading risk factor for dissection and is negatively associated with AAA rupture.",
      "Hyperlipidemia drives atherosclerosis more than dissection.",
      "Chronic kidney disease is not the classic predisposing factor for dissection."
    ]
  },
  {
    "id": "aad-039",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 117 (Dissection pain quality)",
    "question": "Which pain description is most characteristic of an acute aortic dissection?",
    "options": [
      "Sudden-onset, severe, tearing pain that may radiate to the back or migrate",
      "Gradual substernal pressure brought on by exertion and relieved by rest",
      "Burning epigastric pain relieved by antacids",
      "Pleuritic pain worse with deep inspiration and cough"
    ],
    "answer": 0,
    "explanation": "Dissection classically causes sudden, severe, tearing or ripping pain that is non-ischemic in quality and may radiate to the interscapular area, arms, or neck, or migrate as the dissection propagates toward the abdomen and hips.",
    "why": [
      "Correct. Sudden, severe, tearing, possibly migrating pain is characteristic of dissection.",
      "Gradual exertional pressure relieved by rest describes stable angina.",
      "Burning epigastric pain relieved by antacids suggests peptic disease.",
      "Pleuritic pain worse with inspiration suggests pericarditis or pulmonary causes, not dissection."
    ]
  },
  {
    "id": "aad-040",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 116 (Complications of proximal dissection)",
    "question": "Which set of complications is characteristic of a proximal (type A) aortic dissection?",
    "options": [
      "Aortic insufficiency, coronary artery occlusion, cardiac tamponade, and stroke",
      "Mitral stenosis and pulmonary embolism",
      "Ischemic colitis and cholelithiasis",
      "Deep venous thrombosis and pulmonary edema alone"
    ],
    "answer": 0,
    "explanation": "Proximal dissection complications can be recalled as aortic insufficiency, occlusion of the coronary arteries, rupture, tamponade, ischemia of extremities and viscera, and CVA. These reflect the dissection extending back to the aortic root and its branches.",
    "why": [
      "Correct. AI, coronary occlusion, tamponade, and stroke are hallmark proximal dissection complications.",
      "Mitral stenosis and pulmonary embolism are not the characteristic complications of proximal dissection.",
      "Ischemic colitis and cholelithiasis are not the hallmark proximal dissection complications.",
      "These do not capture the aortic root and branch complications of proximal dissection."
    ]
  },
  {
    "id": "aad-041",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 117 (Dissection physical findings)",
    "question": "Which physical exam finding supports a diagnosis of aortic dissection in a patient with chest pain?",
    "options": [
      "Diminished or unequal pulses and blood pressures between the extremities",
      "Symmetric bounding pulses in all extremities",
      "A fixed split second heart sound",
      "Bilateral lower-extremity pitting edema"
    ],
    "answer": 0,
    "explanation": "Dissection can shear off branch vessels, producing diminished or unequal peripheral pulses and unequal extremity blood pressures. A pulse exam should be done in any case of chest pain. A new aortic diastolic (regurgitant) murmur can occur if the dissection reaches the aortic valve.",
    "why": [
      "Correct. Unequal pulses and blood pressures between limbs support dissection.",
      "Symmetric bounding pulses argue against a flow-limiting dissection.",
      "A fixed split S2 suggests an atrial septal defect, not dissection.",
      "Bilateral pitting edema suggests heart failure or venous disease, not dissection."
    ]
  },
  {
    "id": "aad-042",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 123 (Acute aortic syndrome)",
    "question": "Which conditions are included under the umbrella term \"acute aortic syndrome\"?",
    "options": [
      "Aortic dissection and leak or rupture of a thoracic aortic aneurysm",
      "Abdominal aortic aneurysm rupture and mesenteric ischemia",
      "Acute coronary syndrome and pericarditis",
      "Pulmonary embolism and tension pneumothorax"
    ],
    "answer": 0,
    "explanation": "Acute aortic syndrome is an umbrella term for acute aortic dissection and leak or rupture of a thoracic aortic aneurysm. Notably, AAA is not included. These share a similar rapid presentation and diagnostic pathway.",
    "why": [
      "Correct. Acute aortic syndrome covers dissection and TAA leak or rupture.",
      "AAA rupture is specifically excluded from acute aortic syndrome.",
      "ACS and pericarditis are separate entities in the chest pain differential.",
      "PE and tension pneumothorax are other causes of chest pain and shock, not acute aortic syndrome."
    ]
  },
  {
    "id": "aad-043",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 124 (ACS versus AAS)",
    "question": "A 58-year-old presents with sudden, severe, tearing interscapular pain, unequal pulses between the arms, and a new early diastolic murmur. Compared with a typical acute coronary syndrome, what is the key management difference for this presentation?",
    "options": [
      "It requires surgical management, and antiplatelet and anticoagulant therapy could be harmful",
      "It is treated identically to ACS with antiplatelets and anticoagulation",
      "It requires only oral beta-blockers and outpatient follow-up",
      "It should be observed without imaging until enzymes return"
    ],
    "answer": 0,
    "explanation": "Sudden tearing pain, unequal arm pulses, and a new aortic regurgitant murmur point to acute aortic syndrome (dissection or TAA leak), not ACS. Management is surgical, and the antiplatelet and anticoagulant therapy given for ACS could worsen bleeding, so distinguishing the two with history, exam, and urgent CT angiography is critical.",
    "why": [
      "Correct. This is acute aortic syndrome, which is surgical, and ACS-style anticoagulation could be harmful.",
      "Treating it like ACS with anticoagulation could be dangerous in a dissection or aortic leak.",
      "This is an emergency requiring surgical evaluation, not just oral beta-blockers and outpatient care.",
      "Urgent imaging (CXR then CT angiography) is essential; waiting on enzymes would be dangerous."
    ]
  },
  {
    "id": "aad-044",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 122 (Differential for chest pain and shock)",
    "question": "Because not all chest pain is acute coronary syndrome, which of the following belong in the differential for acute chest pain with shock? Select all that apply.",
    "options": [
      "Aortic dissection or thoracic aneurysm leak",
      "Pulmonary embolism",
      "Pericarditis with tamponade",
      "Stable angina"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "The differential for acute chest pain and shock includes acute coronary syndrome, aortic dissection or TAA leak or rupture, pericarditis with tamponade, pulmonary embolism, tension pneumothorax, and esophageal perforation (Boerhaave syndrome). Stable angina is exertional and relieved by rest, and does not cause shock.",
    "why": [
      "Correct. Aortic dissection or aneurysm leak is a key cause of chest pain with shock.",
      "Correct. Pulmonary embolism can cause chest pain and shock.",
      "Correct. Pericarditis with tamponade can cause chest pain and shock.",
      "Incorrect. Stable angina is exertional and relieved by rest; it does not produce shock."
    ]
  },
  {
    "id": "aad-045",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Dissection & Acute Aortic Syndrome",
    "source": "Aortic & Arterial Disease, slide 114 (Type A versus type B dissection)",
    "question": "Match each Stanford aortic dissection type to its description.",
    "pairs": [
      {
        "left": "Type A (proximal)",
        "right": "Involves the ascending aorta; generally surgical",
        "why": "Type A involves the ascending aorta and usually requires surgery."
      },
      {
        "left": "Type B (distal)",
        "right": "Begins distal to the left subclavian, descending aorta only; often medical",
        "why": "Type B is confined to the descending aorta and is often managed medically."
      }
    ],
    "explanation": "Type A dissection involves the ascending aorta and generally requires surgical repair; type B begins distal to the left subclavian artery, involves only the descending aorta, and is often managed medically."
  },
  {
    "id": "aad-046",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Atheroembolism",
    "source": "Aortic & Arterial Disease, slide 127 (Blue toe syndrome)",
    "question": "A patient develops patchy violaceous skin discoloration of the toes, petechiae, and livedo reticularis with intact pedal pulses (\"blue toe syndrome\"). What is the underlying process?",
    "options": [
      "Embolization of cholesterol-rich atheroma to small distal arteries",
      "Large-artery thrombotic occlusion",
      "Venous thromboembolism",
      "Vasospasm from Raynaud phenomenon"
    ],
    "answer": 0,
    "explanation": "Aortic atheroembolism (blue toe syndrome) is embolization of cholesterol-rich atheroma from the aorta or major arteries to small distal vessels, producing patchy ischemia, petechiae, and livedo reticularis (from venular dilation), typically with preserved proximal pulses.",
    "why": [
      "Correct. Cholesterol atheroembolism to small distal arteries causes blue toe syndrome.",
      "Large-artery thrombosis would typically abolish distal pulses, unlike patchy atheroembolism.",
      "Venous thromboembolism is a venous process, not arterial atheroembolism.",
      "Raynaud phenomenon is episodic vasospasm, not embolization of atheroma."
    ]
  },
  {
    "id": "aad-047",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Atheroembolism",
    "source": "Aortic & Arterial Disease, slide 128 (Trigger of cholesterol embolization)",
    "question": "Cholesterol embolization from aortic atheroma is most often precipitated by which of the following?",
    "options": [
      "Manipulation of the aorta during catheter angiography, intervention, or cardiovascular surgery",
      "Vigorous physical exercise in a healthy young adult",
      "Dietary cholesterol intake",
      "Deep venous thrombosis"
    ],
    "answer": 0,
    "explanation": "Cholesterol emboli commonly follow mechanical manipulation of an atherosclerotic aorta, such as catheter angiography or intervention, or during cardiac or peripheral vascular surgery. Aortic atherosclerosis is common in the elderly, and ulcerated plaque increases embolic and stroke risk.",
    "why": [
      "Correct. Aortic manipulation during catheterization or surgery is the classic trigger.",
      "Exercise in a healthy young adult is not the typical trigger for atheroembolism.",
      "Dietary cholesterol intake does not acutely precipitate embolization of established plaque.",
      "Deep venous thrombosis is a venous event, unrelated to arterial cholesterol embolization."
    ]
  },
  {
    "id": "aad-048",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Aortic & Arterial Disease",
    "section": "Aortic Atheroembolism",
    "source": "Aortic & Arterial Disease, slide 130 (Treatment of atheroembolism)",
    "question": "Which statement best describes the treatment and prognosis of aortic atheroembolism?",
    "options": [
      "No medical therapy revascularizes the ischemic tissue; surgery is only for debridement or amputation, and prognosis is poor when renal failure or stroke occurs",
      "Thrombolytics reliably dissolve the emboli and restore perfusion",
      "Anticoagulation fully reverses the ischemic changes",
      "It carries an excellent prognosis with no long-term risk"
    ],
    "answer": 0,
    "explanation": "There is no medical therapy that revascularizes tissue after atheroembolism; surgery is reserved for debridement or amputation of necrotic or infected tissue. Risk factor modification may reduce future cardiovascular events, but prognosis is poor when renal failure or stroke is present.",
    "why": [
      "Correct. No therapy revascularizes the tissue; care is supportive, and prognosis is poor with renal failure or stroke.",
      "Thrombolytics do not reliably dissolve cholesterol crystal emboli.",
      "Anticoagulation does not reverse established atheroembolic ischemia.",
      "The prognosis is poor, especially with renal failure or stroke, not excellent."
    ]
  },
  {
    "id": "ven-001",
    "type": "mcq",
    "section": "Venous Anatomy & Physiology",
    "source": "Venous Disease, slide 4 (Venous Anatomy)",
    "question": "In the normal lower extremity, in which direction do the perforating (communicating) veins carry blood?",
    "options": [
      "From the deep veins into the superficial veins",
      "From the superficial veins into the deep veins",
      "From the deep veins directly into the lymphatics",
      "From the arterial system into the superficial veins"
    ],
    "answer": 1,
    "why": [
      "Backward flow from deep to superficial is what happens when perforator valves fail, not normal physiology.",
      "Correct. Perforators connect the superficial system to the deep system, and their one-way valves direct blood from superficial into the lower-pressure deep veins.",
      "Perforators connect superficial to deep veins, not veins to lymphatics.",
      "Perforators are part of the venous system and do not connect arteries to veins."
    ],
    "explanation": "The venous system has dual superficial and deep channels. Superficial veins drain through perforating (communicating) veins into the deep veins, and one-way valves throughout ensure flow proceeds into the low-pressure deep system.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-002",
    "type": "tf",
    "section": "Venous Anatomy & Physiology",
    "source": "Venous Disease, slide 6 (Venous system valves)",
    "question": "One-way valves are present throughout most of the venous system to ensure blood flows into the low-pressure deep veins.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": [
      "Correct. One-way valves are present throughout most of the venous system and ensure flow proceeds into the low-pressure deep veins; their failure underlies varicose veins and post-thrombotic syndrome.",
      "Incorrect. Venous valves are indeed present throughout most of the system and are essential for directing flow toward the deep veins and the heart."
    ],
    "explanation": "Competent one-way valves keep venous blood moving centrally into the low-pressure deep system and prevent retrograde pooling. Loss of valve competence causes venous hypertension and its sequelae.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-003",
    "type": "mcq",
    "section": "Venous Anatomy & Physiology",
    "source": "Venous Disease, slide 9 (Deep Pelvic Veins)",
    "question": "A woman develops a deep pelvic vein thrombosis after pelvic surgery. Why is this location difficult to evaluate, and what test is diagnostic?",
    "options": [
      "It is easily seen on compression ultrasound, which is diagnostic",
      "It is inaccessible to physical exam and ultrasound, so MR imaging is diagnostic",
      "It is best diagnosed by D-dimer alone with no imaging",
      "It requires contrast venography of the foot to visualize"
    ],
    "answer": 1,
    "why": [
      "Pelvic veins are exactly the site compression ultrasound cannot reach, so this is wrong.",
      "Correct. Deep pelvic veins are a common DVT site after pelvic surgery, postpartum, or pelvic fracture, and they are inaccessible to both physical exam and ultrasound, so MR imaging (MR venography) is diagnostic.",
      "D-dimer cannot localize or confirm a pelvic thrombus; it only helps rule out VTE in low-risk patients.",
      "Foot contrast venography opacifies the lower extremity deep system, not the deep pelvic veins."
    ],
    "explanation": "Deep pelvic veins are a site of DVT after pelvic surgery, childbirth, or pelvic fracture. Because they lie beyond the reach of physical exam and ultrasound, MR imaging is the diagnostic study.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-004",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 14 (Primary Varicose Veins)",
    "question": "Primary varicose veins are most directly caused by which underlying problem?",
    "options": [
      "Deep vein thrombosis damaging the deep venous valves",
      "Incompetent valves in the great saphenous vein and at the saphenofemoral junction",
      "Arterial insufficiency reducing perfusion of the leg",
      "Lymphatic obstruction from prior lymph node dissection"
    ],
    "answer": 1,
    "why": [
      "That describes secondary varicose veins, which follow deep venous injury such as DVT.",
      "Correct. Primary varicose veins arise from incompetent valves in the great saphenous vein and at the saphenofemoral junction. They are hereditary and seen about twice as often in women.",
      "Varicose veins are a venous valvular problem, not an arterial perfusion problem.",
      "Lymphatic obstruction causes lymphedema, not varicose veins."
    ],
    "explanation": "Primary varicose veins result from incompetent valves in the great saphenous vein and saphenofemoral junction. They are hereditary, twice as common in women, and worsened by anything that raises intraabdominal or venous pressure.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-005",
    "type": "multi",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 14 (Primary Varicose Veins)",
    "question": "Which of the following exacerbate primary varicose veins? Select all that apply.",
    "options": [
      "Heavy lifting",
      "Prolonged standing",
      "Obesity",
      "Pregnancy",
      "Regular aerobic exercise"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": [
      "Correct. Heavy lifting raises intraabdominal pressure, which is transmitted to the leg veins.",
      "Correct. Prolonged standing increases hydrostatic pressure in the leg veins.",
      "Correct. Obesity raises intraabdominal pressure and venous load.",
      "Correct. Pregnancy raises intraabdominal pressure and hormonally relaxes vein walls.",
      "Regular aerobic exercise engages the calf muscle pump and helps venous return; it is not an aggravating factor."
    ],
    "explanation": "Primary varicose veins are exacerbated by heavy lifting, prolonged standing, obesity, pregnancy, and any other cause of increased intraabdominal pressure. All of these raise the pressure the venous valves must work against.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-006",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 16 (Secondary Varicose Veins)",
    "question": "Secondary varicose veins are typically the result of which process?",
    "options": [
      "Hereditary weakness of the saphenofemoral valve",
      "Deep venous injury and incompetent perforating veins, often after DVT",
      "Chronic arterial insufficiency",
      "Congenital absence of venous valves at birth"
    ],
    "answer": 1,
    "why": [
      "That describes primary varicose veins, which are hereditary.",
      "Correct. Secondary varicose veins result from deep venous injury and incompetent perforating veins, often caused by deep vein thrombosis, and are often unilateral following injury or surgery.",
      "Varicose veins are a venous, not arterial, problem.",
      "Congenital valve absence is not the described mechanism; secondary varicosities follow acquired deep venous injury."
    ],
    "explanation": "Secondary varicose veins follow deep venous injury with incompetent perforating veins, classically after DVT, and are often unilateral following injury or surgery.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-007",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 20 (Varicose Veins Signs/Symptoms)",
    "question": "Which symptom pattern is most characteristic of symptomatic varicose veins?",
    "options": [
      "Sharp calf pain that worsens with leg elevation",
      "A dull ache or pressure in the legs after prolonged standing that is relieved by leg elevation",
      "Sudden painless loss of the pedal pulse",
      "Burning foot pain that is worst at night and relieved by dangling the foot"
    ],
    "answer": 1,
    "why": [
      "Varicose vein discomfort improves, not worsens, with elevation.",
      "Correct. Varicose veins cause a dull ache or heaviness after prolonged standing that is relieved by leg elevation, and patients are prone to pedal edema and itching from eczematoid dermatitis.",
      "Loss of a pulse is an arterial finding, not a varicose vein symptom.",
      "Night pain relieved by dangling the foot describes critical limb ischemia (rest pain), an arterial problem."
    ],
    "explanation": "Symptomatic varicose veins cause a dull ache or pressure after prolonged standing, relieved by elevation, along with pedal edema and itching from eczematoid dermatitis. Over time skin atrophy, hyperpigmentation, and ulceration can develop.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-008",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 22 (Varicose Vein Imaging)",
    "question": "What is the imaging test of choice for diagnosing varicose veins and deep vein thrombosis?",
    "options": [
      "Contrast venography",
      "Duplex Doppler ultrasonography",
      "CT angiography",
      "Plain radiography"
    ],
    "answer": 1,
    "why": [
      "Contrast venography is very accurate but invasive and seldom used.",
      "Correct. Duplex Doppler ultrasound is noninvasive and is the imaging test of choice for both varicose veins and DVT. It combines M-mode imaging with blood-flow velocity estimates.",
      "CT angiography is an arterial study and is not the test of choice for varicose veins or DVT.",
      "Plain films do not image venous flow or clot."
    ],
    "explanation": "Duplex Doppler ultrasound combines standard ultrasound imaging with blood-flow velocity estimates and is the noninvasive test of choice for varicose veins and DVT. It also localizes incompetent perforating veins to guide ablation.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-009",
    "type": "multi",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 23 (Varicose Veins Treatment)",
    "question": "Which are appropriate conservative measures for varicose veins? Select all that apply.",
    "options": [
      "Avoid prolonged sitting or standing",
      "Frequent leg elevation above the level of the heart",
      "Graduated compression stockings worn during the day",
      "Strict bed rest with the legs kept dependent"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Avoiding prolonged sitting or standing limits venous pooling.",
      "Correct. Elevating the legs above the heart minimizes edema.",
      "Correct. Graduated compression stockings (usually 20-30 mm Hg) worn during the day are a mainstay of conservative care.",
      "Bed rest with dependent legs worsens pooling; the goal is elevation and the calf muscle pump, not immobility with the legs down."
    ],
    "explanation": "Conservative care is first-line: avoid prolonged sitting or standing, elevate the legs frequently above the heart, and wear graduated compression stockings during the day (typically 20-30 mm Hg, or 30-40 mm Hg for venous stasis ulcers).",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-010",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 23 (Varicose Veins Treatment)",
    "question": "Graduated compression stockings for venous disease are contraindicated in which coexisting condition?",
    "options": [
      "Peripheral arterial disease",
      "Obesity",
      "Prior deep vein thrombosis",
      "Chronic venous insufficiency"
    ],
    "answer": 0,
    "why": [
      "Correct. Compression stockings are contraindicated in peripheral arterial disease, because external compression can further reduce already-compromised arterial inflow.",
      "Obesity is a risk factor for varicose veins, not a contraindication to compression.",
      "Prior DVT is a reason to use compression, not to avoid it.",
      "Chronic venous insufficiency is treated with compression, not a contraindication."
    ],
    "explanation": "Graduated compression is a mainstay of venous therapy but is contraindicated in peripheral arterial disease, where added external pressure can worsen limb ischemia. Arterial inflow should be confirmed adequate before prescribing compression.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-011",
    "type": "mcq",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 24 (Varicose Veins Treatment)",
    "question": "Severely symptomatic varicosities from an incompetent communicating vein are best treated with which of the following?",
    "options": [
      "Lifelong oral anticoagulation",
      "Sclerotherapy or radiofrequency ablation of the incompetent vein under ultrasound guidance",
      "Systemic thrombolysis",
      "Arterial bypass grafting"
    ],
    "answer": 1,
    "why": [
      "Anticoagulation treats thrombosis, not incompetent varicose veins.",
      "Correct. After duplex ultrasound localizes the incompetent perforating vein, severely symptomatic varicosities are treated with sclerotherapy or radiofrequency (endovenous) ablation of the involved vein under ultrasound guidance.",
      "Thrombolysis dissolves clot; it does not correct valvular incompetence.",
      "Bypass grafting is an arterial procedure and has no role in varicose vein treatment."
    ],
    "explanation": "When conservative measures fail, duplex ultrasound pinpoints the incompetent perforating vein and the involved segment is ablated by sclerotherapy or radiofrequency thermal ablation under ultrasound guidance.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-012",
    "type": "vignette",
    "section": "Varicose Veins",
    "source": "Venous Disease, slide 84 (Case: varicose vein workup)",
    "question": "A 64-year-old woman reports a persistent dull ache and heaviness in her lower legs that worsens after standing at her retail job all day and improves when she elevates her legs at night. Exam shows dilated, tortuous superficial veins about 4 mm in diameter on the medial calf and mild ankle pitting edema. Which is the most appropriate initial diagnostic modality to confirm the underlying cause?",
    "options": [
      "Brodie-Trendelenburg bedside maneuver",
      "Venous duplex ultrasonography",
      "CT venography",
      "Contrast venography"
    ],
    "answer": 1,
    "why": [
      "The Brodie-Trendelenburg maneuver is a historical bedside test that has been superseded by duplex ultrasound and does not confirm the anatomic source of reflux.",
      "Correct. Venous duplex ultrasonography is the noninvasive test of choice; it identifies the incompetent valves and refluxing segments driving her varicosities.",
      "CT venography is not the initial study for varicose veins and adds contrast and radiation without advantage here.",
      "Contrast venography is invasive and seldom used; it is not the appropriate initial modality."
    ],
    "explanation": "This is classic symptomatic varicose vein disease. Venous duplex ultrasound is the initial test of choice, localizing valvular incompetence and reflux noninvasively and guiding any later ablation.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-013",
    "type": "tf",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 25 (Superficial Thrombophlebitis)",
    "question": "Superficial thrombophlebitis generally does not result in pulmonary embolism.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": [
      "Correct. Superficial thrombophlebitis is an inflammatory response to thrombosis in a superficial vein and generally does not cause pulmonary embolism, although DVT must still be excluded.",
      "Incorrect. Superficial thrombophlebitis generally does not embolize to the lungs; the concern is extension into the deep system, which is why DVT must be ruled out."
    ],
    "explanation": "Superficial thrombophlebitis causes an inflammatory response and generally does not cause PE. The main concern is progression into the deep venous system, so DVT must always be excluded with Doppler ultrasound.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-014",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 25 (Superficial Thrombophlebitis)",
    "question": "Migrating superficial vein thrombosis is often a marker of which underlying condition?",
    "options": [
      "Iron deficiency anemia",
      "Cancer or vasculitis",
      "Hyperthyroidism",
      "Osteoarthritis"
    ],
    "answer": 1,
    "why": [
      "Anemia is not associated with migratory thrombophlebitis.",
      "Correct. Migrating (migratory) superficial vein thrombosis is often a marker of an occult cancer or a vasculitis, sometimes called Trousseau sign of malignancy.",
      "Hyperthyroidism is not linked to migratory thrombophlebitis.",
      "Osteoarthritis has no relationship to migratory thrombophlebitis."
    ],
    "explanation": "Migratory superficial thrombophlebitis raises concern for an underlying malignancy or vasculitis and should prompt an appropriate workup.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-015",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 25 (Superficial Thrombophlebitis)",
    "question": "Thromboangiitis obliterans (Buerger's disease), a cause of superficial thrombophlebitis, is most strongly associated with which factor?",
    "options": [
      "Cigarette smoking",
      "Diabetes mellitus",
      "Hyperlipidemia",
      "Chronic alcohol use"
    ],
    "answer": 0,
    "why": [
      "Correct. Thromboangiitis obliterans (Buerger's disease) is strongly associated with cigarette smoking, and smoking cessation is central to management.",
      "Diabetes is a major risk factor for atherosclerotic disease but is not the defining association of Buerger's.",
      "Hyperlipidemia drives atherosclerosis rather than Buerger's disease.",
      "Alcohol is not the characteristic association of Buerger's disease."
    ],
    "explanation": "Buerger's disease (thromboangiitis obliterans) is strongly tied to cigarette smoking. Behcet disease, an autoimmune vasculopathy with oral, eye, and genital ulcers, is another listed cause of superficial thrombophlebitis.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-016",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 26 (Superficial Thrombophlebitis: Physical Exam)",
    "question": "What is the classic physical exam finding of superficial thrombophlebitis?",
    "options": [
      "A cool, pulseless, pale limb",
      "A reddened or darkened, warm, tender cord extending along a superficial vein",
      "Painless pitting edema of the entire limb",
      "A cold blue toe with intact proximal pulses"
    ],
    "answer": 1,
    "why": [
      "A cool, pulseless, pale limb is an acute arterial finding, not superficial thrombophlebitis.",
      "Correct. Superficial thrombophlebitis presents as a reddened or darkened, warm, tender palpable cord along the course of a superficial vein or a varicosity.",
      "Painless pitting edema of the whole limb suggests DVT or a systemic cause, not localized superficial phlebitis.",
      "A blue toe with intact pulses suggests atheroembolism, not superficial thrombophlebitis."
    ],
    "explanation": "The hallmark of superficial thrombophlebitis is a tender, warm, erythematous palpable cord along a superficial vein or varicosity.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-017",
    "type": "multi",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 27 (Superficial Thrombophlebitis: Treatment)",
    "question": "Which are appropriate treatments for superficial thrombophlebitis? Select all that apply.",
    "options": [
      "Leg elevation and warm compresses",
      "NSAIDs for pain",
      "Low-molecular-weight heparin for severe disease or extension into the deep system",
      "Routine surgical stripping of the entire superficial system"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Leg elevation and warm compresses are standard supportive care.",
      "Correct. NSAIDs treat the inflammatory pain.",
      "Correct. Low-molecular-weight heparin (enoxaparin) is used in severe disease or when the process is progressing into the deep system; fondaparinux is an alternative.",
      "Routine surgical stripping is not part of standard treatment for superficial thrombophlebitis."
    ],
    "explanation": "Superficial thrombophlebitis is treated with leg elevation, warm compresses, and NSAIDs, with LMWH (or fondaparinux) reserved for severe disease or extension toward the deep system. DVT must always be excluded with Doppler ultrasound.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-018",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 27 (Superficial Thrombophlebitis: Treatment)",
    "question": "By what mechanism does low-molecular-weight heparin (enoxaparin) act?",
    "options": [
      "It directly inhibits thrombin by binding its active site",
      "It activates antithrombin III and inhibits factor Xa, preventing thrombin and fibrin formation",
      "It antagonizes vitamin K-dependent clotting factor synthesis",
      "It blocks platelet ADP receptors"
    ],
    "answer": 1,
    "why": [
      "That describes direct thrombin inhibitors; LMWH works indirectly through antithrombin III.",
      "Correct. LMWH activates antithrombin III and thereby inhibits factor Xa, preventing the formation of thrombin and fibrin.",
      "That describes warfarin, which inhibits vitamin K-dependent factor synthesis.",
      "That describes antiplatelet agents such as clopidogrel, not LMWH."
    ],
    "explanation": "LMWH (enoxaparin) potentiates antithrombin III to inhibit factor Xa, halting conversion of prothrombin to thrombin and the formation of fibrin. Fondaparinux is a synthetic factor Xa inhibitor with no HIT risk and lower bleeding risk.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-019",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 27 (Superficial Thrombophlebitis: Treatment)",
    "question": "Which anticoagulant is a synthetic factor Xa inhibitor that carries no risk of heparin-induced thrombocytopenia (HIT)?",
    "options": [
      "Warfarin",
      "Fondaparinux",
      "Unfractionated heparin",
      "Enoxaparin"
    ],
    "answer": 1,
    "why": [
      "Warfarin is a vitamin K antagonist and is unrelated to HIT.",
      "Correct. Fondaparinux is a synthetic factor Xa inhibitor with no HIT risk and lower bleeding risk.",
      "Unfractionated heparin carries the highest HIT risk of the listed agents.",
      "Enoxaparin (LMWH) carries a lower but real HIT risk, unlike fondaparinux."
    ],
    "explanation": "Fondaparinux is a synthetic factor Xa inhibitor that does not cause HIT and has a lower bleeding risk, making it useful when heparin-induced thrombocytopenia is a concern.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-020",
    "type": "tf",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 27 (Superficial Thrombophlebitis: Treatment)",
    "question": "A patient with superficial thrombophlebitis should always have DVT excluded with Doppler ultrasound.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "why": [
      "Correct. DVT must always be excluded with Doppler ultrasound, because superficial thrombophlebitis can coexist with or extend into a deep vein thrombosis.",
      "Incorrect. Excluding DVT with Doppler ultrasound is a required step; superficial phlebitis can accompany or progress to DVT."
    ],
    "explanation": "Because superficial thrombophlebitis can coexist with or progress into the deep system, DVT must always be excluded with Doppler ultrasound.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-021",
    "type": "mcq",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 31 (Septic Thrombophlebitis)",
    "question": "Septic thrombophlebitis is most commonly a complication of what?",
    "options": [
      "Peripheral or central venous catheters",
      "Untreated varicose veins",
      "Prolonged air travel",
      "Oral contraceptive use"
    ],
    "answer": 0,
    "why": [
      "Correct. Septic thrombophlebitis is a potential complication of peripheral or central venous catheters, which is why antiseptic dressing, regular dressing changes, and line changes are emphasized for prevention.",
      "Varicose veins predispose to bland superficial thrombophlebitis, not typically the septic form.",
      "Air travel is a DVT risk factor, not a cause of septic thrombophlebitis.",
      "Oral contraceptives raise VTE risk but do not cause septic thrombophlebitis."
    ],
    "explanation": "Septic thrombophlebitis complicates peripheral or central venous catheters. Prevention centers on antiseptic technique, IV site dressing changes every 48 hours, and changing temporary central lines about every 2 weeks.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-022",
    "type": "multi",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 32 (Septic Thrombophlebitis)",
    "question": "Which are components of managing septic thrombophlebitis? Select all that apply.",
    "options": [
      "Obtain culture with sensitivity",
      "Incision and removal of the segment of infected vein",
      "IV antibiotics appropriate for the infection",
      "Leave the suspected catheter in place to preserve access"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Culture with sensitivity guides antibiotic selection.",
      "Correct. Incision and removal of the infected vein segment is part of treatment.",
      "Correct. IV antibiotics appropriate to the organism are given.",
      "The suspect line must be removed and replaced, not left in place."
    ],
    "explanation": "Septic thrombophlebitis presents with erythema and pain at the IV site, sometimes with pus on catheter removal. Management includes culture with sensitivity, incision and removal of the infected vein segment, appropriate IV antibiotics, and removal and replacement of the suspect line.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-023",
    "type": "vignette",
    "section": "Superficial & Septic Thrombophlebitis",
    "source": "Venous Disease, slide 29 (Case: endovenous ablation complication)",
    "question": "A 38-year-old man undergoes uneventful ultrasound-guided endovenous radiofrequency ablation of the right great saphenous vein for symptomatic varicose veins. Which of the following is an uncommon but serious complication of endovenous thermal ablation that involves the deep venous system?",
    "options": [
      "Deep vein thrombosis adjacent to the saphenofemoral junction",
      "Saphenous nerve transection causing permanent foot drop",
      "Anaphylactic shock from systemic thermal tissue absorption",
      "High-output arteriovenous fistula formation in the calf"
    ],
    "answer": 0,
    "why": [
      "Correct. DVT of the common femoral vein adjacent to the saphenofemoral junction is an uncommon but potential complication of endovenous thermal ablation, because thrombus can propagate from the treated saphenous vein into the deep system.",
      "The saphenous nerve is sensory; its injury causes numbness, not foot drop, and this is not a deep venous complication.",
      "Anaphylaxis from systemic thermal tissue absorption is not a recognized mechanism of thermal ablation.",
      "High-output AV fistula is not a described complication of endovenous thermal ablation."
    ],
    "explanation": "Endovenous thermal ablation can rarely propagate thrombus from the treated great saphenous vein into the adjacent common femoral vein at the saphenofemoral junction, producing a deep vein thrombosis. This is the serious deep-system complication to counsel about.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-024",
    "type": "mcq",
    "section": "VTE Risk Factors & Pathophysiology",
    "source": "Venous Disease, slide 36 (Virchow's Triad)",
    "question": "Virchow's triad describes the three broad contributors to venous thrombosis. Which set names them?",
    "options": [
      "Hypertension, hyperlipidemia, and hyperglycemia",
      "Venous stasis, endothelial (vessel wall) injury, and hypercoagulability",
      "Arterial plaque, platelet aggregation, and vasospasm",
      "Anemia, leukocytosis, and thrombocytopenia"
    ],
    "answer": 1,
    "why": [
      "Those are cardiovascular risk factors, not the elements of Virchow's triad.",
      "Correct. Virchow's triad is venous stasis, endothelial or vessel wall injury, and hypercoagulability. Risk factors map onto these three categories.",
      "Those describe arterial thrombosis mechanisms, not the venous triad.",
      "Those are blood count abnormalities, not the triad."
    ],
    "explanation": "Virchow's triad, stasis plus endothelial injury plus hypercoagulability, organizes VTE risk factors. Immobility and surgery cause stasis and injury, while pregnancy, cancer, estrogen, and inherited thrombophilias increase coagulability.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-025",
    "type": "multi",
    "section": "VTE Risk Factors & Pathophysiology",
    "source": "Venous Disease, slide 37 (VTE risk factors)",
    "question": "Which of the following are acquired risk factors for venous thromboembolism? Select all that apply.",
    "options": [
      "Pregnancy",
      "Oral contraceptives or estrogen replacement therapy",
      "Immobility",
      "Active cancer and chemotherapy",
      "Factor V Leiden mutation"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": [
      "Correct. Pregnancy is a major acquired VTE risk factor.",
      "Correct. Estrogen-containing contraceptives and ERT raise VTE risk.",
      "Correct. Immobility promotes venous stasis.",
      "Correct. Cancer and chemotherapy are acquired hypercoagulable states.",
      "Factor V Leiden is a congenital (inherited) risk factor, not an acquired one."
    ],
    "explanation": "Acquired VTE risk factors include age, pregnancy, estrogen therapy, smoking, obesity, immobility, lower-extremity surgery, cancer, and chemotherapy. Factor V Leiden and protein C or S dysfunction are congenital contributors.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-026",
    "type": "mcq",
    "section": "VTE Risk Factors & Pathophysiology",
    "source": "Venous Disease, slide 40 (Venous Thromboembolism)",
    "question": "Factor V Leiden increases thrombosis risk through which mechanism?",
    "options": [
      "It causes resistance to the anticoagulant activated protein C",
      "It depletes antithrombin III",
      "It blocks tissue plasminogen activator",
      "It increases platelet count"
    ],
    "answer": 0,
    "why": [
      "Correct. Factor V Leiden is an autosomal dominant mutation that makes factor V resistant to cleavage by activated protein C, so this natural anticoagulant cannot turn off coagulation efficiently.",
      "Antithrombin III deficiency is a separate thrombophilia; it is not the Factor V Leiden mechanism.",
      "Factor V Leiden does not act on tissue plasminogen activator.",
      "Factor V Leiden does not raise the platelet count."
    ],
    "explanation": "Factor V Leiden is an autosomal dominant mutation causing resistance to activated protein C, so the mutated factor V escapes normal downregulation and promotes thrombosis. Protein C and S deficiency and antiphospholipid syndrome are other prothrombotic states.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-027",
    "type": "mcq",
    "section": "VTE Risk Factors & Pathophysiology",
    "source": "Venous Disease, slide 39 (Sites of VTE)",
    "question": "By the distribution taught in this lecture, what fraction of deep vein thromboses arise in the lower extremity?",
    "options": [
      "About 80 percent",
      "About 50 percent",
      "About 20 percent",
      "About 10 percent"
    ],
    "answer": 0,
    "why": [
      "Correct. About 80 percent of DVTs occur in the lower extremity, with roughly 10 percent in the pelvis and 10 percent in the upper extremity.",
      "50 percent understates lower-extremity predominance.",
      "20 percent is far too low for lower-extremity DVT.",
      "10 percent is the share attributed to pelvic and to upper-extremity DVT, not lower extremity."
    ],
    "explanation": "DVT distribution is roughly 80 percent lower extremity, 10 percent pelvis, and 10 percent upper extremity. About 90 percent of pulmonary emboli arise from lower-extremity DVT.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-028",
    "type": "mcq",
    "section": "VTE Risk Factors & Pathophysiology",
    "source": "Venous Disease, slide 39 (Sites of VTE)",
    "question": "Which set of conditions is most associated with upper extremity DVT?",
    "options": [
      "Pregnancy and pelvic surgery",
      "Thoracic outlet syndrome, intravenous devices, and trauma",
      "Prolonged air travel and obesity",
      "Factor V Leiden and protein C deficiency"
    ],
    "answer": 1,
    "why": [
      "Pregnancy and pelvic surgery predispose to pelvic and lower-extremity DVT, not upper extremity.",
      "Correct. Upper extremity DVT is associated with thoracic outlet syndrome, intravenous devices (catheters), and trauma.",
      "Air travel and obesity are general lower-extremity DVT risks.",
      "Inherited thrombophilias raise overall VTE risk but are not the specific upper-extremity associations listed."
    ],
    "explanation": "Upper extremity DVT is linked to thoracic outlet syndrome, indwelling intravenous devices, and trauma.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-029",
    "type": "mcq",
    "section": "DVT Clinical Features & Differential",
    "source": "Venous Disease, slide 42 (DVT Symptoms/Signs)",
    "question": "Which finding is described as the most specific symptom of deep vein thrombosis?",
    "options": [
      "Bilateral symmetric edema",
      "Asymmetric edema",
      "Fever",
      "Chest pain"
    ],
    "answer": 1,
    "why": [
      "Bilateral symmetric edema points toward systemic causes such as heart, kidney, or liver disease rather than DVT.",
      "Correct. Asymmetric (usually unilateral) edema is the most specific symptom of DVT. Leg pain occurs in about 50 percent and tenderness in about 75 percent but are nonspecific.",
      "Fever is nonspecific and not the most specific DVT symptom.",
      "Chest pain suggests pulmonary embolism, not the local DVT finding asked about."
    ],
    "explanation": "DVT symptoms are often nonspecific or absent. Asymmetric edema is the most specific symptom; leg pain (about 50 percent) and tenderness (about 75 percent) are common but nonspecific, and the Homan sign is unreliable.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-030",
    "type": "mcq",
    "section": "DVT Clinical Features & Differential",
    "source": "Venous Disease, slide 42 (DVT Symptoms/Signs)",
    "question": "What is the Homan sign, and how reliable is it for DVT?",
    "options": [
      "Calf pain on passive dorsiflexion of the foot; it is an unreliable sign",
      "A palpable thrill over the femoral vein; it is highly reliable",
      "Loss of the dorsalis pedis pulse; it is diagnostic",
      "Blanching of the toes on elevation; it is confirmatory"
    ],
    "answer": 0,
    "why": [
      "Correct. The Homan sign is calf pain on passive dorsiflexion of the foot, but it is unreliable and cannot be used to confirm or exclude DVT.",
      "A femoral thrill is not the Homan sign and is not a DVT finding.",
      "Loss of the pedal pulse is an arterial finding, not the Homan sign.",
      "Toe blanching on elevation is an arterial insufficiency test, not the Homan sign."
    ],
    "explanation": "The Homan sign is calf pain elicited by passive dorsiflexion of the foot. It is classically taught but unreliable, so it does not rule DVT in or out.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-031",
    "type": "multi",
    "section": "DVT Clinical Features & Differential",
    "source": "Venous Disease, slide 44 (Signs of DVT)",
    "question": "Which of the following are signs of DVT? Select all that apply.",
    "options": [
      "Tenderness along the course of the involved vein, sometimes with a palpable cord",
      "Distention of superficial veins from collateral flow",
      "Cyanosis of the limb with advanced obstruction of venous collaterals",
      "Absent femoral and pedal pulses"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Tenderness along the involved vein, sometimes with a palpable cord, is a sign of DVT.",
      "Correct. Distention of superficial veins occurs as collateral flow develops.",
      "Correct. Limb cyanosis appears only with advanced obstruction of the venous collaterals.",
      "Absent pulses indicate arterial disease; DVT does not abolish arterial pulses until the extreme of phlegmasia with secondary arterial compromise."
    ],
    "explanation": "Signs of DVT include tenderness along the involved vein with a possible palpable cord, distention of superficial collateral veins, and, only in advanced collateral obstruction, limb cyanosis.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-032",
    "type": "multi",
    "section": "DVT Clinical Features & Differential",
    "source": "Venous Disease, slide 45 (Lower extremity DVT differential)",
    "question": "Which conditions belong in the differential diagnosis of a swollen, painful lower extremity that mimics DVT? Select all that apply.",
    "options": [
      "Calf muscle strain or contusion",
      "Cellulitis",
      "Lymphedema or lymphatic or iliac vein obstruction by tumor",
      "Anasarca from heart, kidney, or liver disease",
      "Acute appendicitis"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "why": [
      "Correct. Calf strain, contusion, or trauma can mimic DVT.",
      "Correct. Cellulitis causes a red, warm, tender leg resembling DVT.",
      "Correct. Lymphedema and obstruction of the lymphatics or iliac vein by retroperitoneal tumor mimic DVT.",
      "Correct. Bilateral leg and buttock edema (anasarca) should prompt consideration of heart, kidney, or liver disease.",
      "Appendicitis presents with abdominal pain, not a swollen painful leg, and is not in this differential."
    ],
    "explanation": "The DVT differential includes calf strain or contusion, cellulitis, lymphatic or iliac vein obstruction by tumor, lymphedema, and anasarca from cardiac, renal, or hepatic disease. Bilateral symmetric edema in particular points to a systemic cause.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-033",
    "type": "mcq",
    "section": "DVT Clinical Features & Differential",
    "source": "Venous Disease, slide 46 (Venous causes of leg swelling)",
    "question": "May-Thurner syndrome, a venous cause of unilateral leg swelling, refers to which anatomic problem?",
    "options": [
      "Compression of the left common iliac vein by the right common iliac artery",
      "Compression of the popliteal vein by a Baker cyst",
      "Thrombosis of the superior vena cava by a mediastinal tumor",
      "Reflux through an incompetent saphenofemoral junction"
    ],
    "answer": 0,
    "why": [
      "Correct. May-Thurner syndrome is compression of the left common iliac vein by the overlying right common iliac artery, causing left leg swelling and predisposing to left-sided iliofemoral DVT.",
      "Popliteal vein compression behind the knee is a separate entity (popliteal vein compression syndrome), not May-Thurner.",
      "SVC thrombosis by tumor is SVC syndrome, not May-Thurner.",
      "Saphenofemoral reflux describes varicose vein disease, not May-Thurner."
    ],
    "explanation": "May-Thurner syndrome is compression of the left common iliac vein by the right common iliac artery, producing left leg swelling and a predisposition to left iliofemoral DVT. Klippel-Trenaunay and popliteal vein compression syndrome are other listed venous causes of leg swelling.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-034",
    "type": "mcq",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 49 (Two-tiered assessment for DVT)",
    "question": "The Wells criteria are used at which point in the DVT diagnostic pathway?",
    "options": [
      "To definitively confirm DVT without any imaging",
      "To assign a pretest probability that guides whether to use D-dimer or proceed to imaging",
      "To determine the duration of anticoagulation after diagnosis",
      "To decide whether an IVC filter is needed"
    ],
    "answer": 1,
    "why": [
      "Wells is a clinical probability tool, not a confirmatory test; it never confirms DVT by itself.",
      "Correct. The Wells criteria stratify pretest probability in a two-tiered assessment analogous to the PE approach, guiding whether a D-dimer is sufficient or imaging is required.",
      "Anticoagulation duration is based on the clinical scenario, not the Wells score.",
      "IVC filter decisions depend on anticoagulation contraindications or failure, not the Wells score."
    ],
    "explanation": "Wells criteria assign a pretest probability of DVT in a two-tiered scheme. Low-probability patients can be evaluated with a D-dimer, while higher-probability patients proceed to compression ultrasound.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-035",
    "type": "mcq",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 51 (DVT/PE diagnosis)",
    "question": "What is the best diagnostic tool for a suspected lower-extremity DVT?",
    "options": [
      "Compression ultrasound of the lower extremity",
      "CT pulmonary angiography",
      "D-dimer alone",
      "Plain radiography of the leg"
    ],
    "answer": 0,
    "why": [
      "Correct. Compression ultrasound (compression duplex) of the lower extremity is the best diagnostic tool for DVT; a non-compressible vein indicates clot.",
      "CT pulmonary angiography is the best study when pulmonary embolism is suspected, not for lower-extremity DVT.",
      "D-dimer has high negative predictive value in low-risk patients but does not confirm DVT.",
      "Plain films do not image venous clot."
    ],
    "explanation": "Compression ultrasound is the best test for lower-extremity DVT. CT pulmonary angiography is preferred when PE is suspected, and D-dimer, with about 94 percent negative predictive value, is useful mainly in low-risk, previously healthy outpatients.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-036",
    "type": "mcq",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 53 (DVT Imaging)",
    "question": "On compression duplex ultrasound, what finding indicates a deep vein thrombosis?",
    "options": [
      "A vein that collapses completely with probe compression",
      "A vein that is non-compressible with probe pressure",
      "Absence of an arterial Doppler signal",
      "A thickened but fully compressible vein wall"
    ],
    "answer": 1,
    "why": [
      "A vein that fully collapses with compression is normal, indicating no clot.",
      "Correct. A non-compressible vein indicates clot; predictive value is about 95 percent for proximal DVT, though only 50 to 75 percent accurate in the calf.",
      "DVT is a venous diagnosis; the arterial signal is not the criterion.",
      "Wall thickening alone is not the diagnostic criterion; non-compressibility is."
    ],
    "explanation": "Normal veins collapse with gentle probe compression. A non-compressible vein signifies thrombus, with about 95 percent predictive value for proximal DVT but lower accuracy (50 to 75 percent) in the calf. Compression ultrasound cannot diagnose pelvic vein DVT.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-037",
    "type": "mcq",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 53 (DVT Imaging)",
    "question": "A patient has a suspected pelvic vein or vena caval thrombosis that compression ultrasound cannot assess. Which imaging study is most appropriate?",
    "options": [
      "Repeat compression ultrasound of the calf",
      "MR venography",
      "Chest radiograph",
      "Echocardiography"
    ],
    "answer": 1,
    "why": [
      "Compression ultrasound cannot image pelvic or caval veins no matter how often it is repeated.",
      "Correct. MR venography has accuracy similar to compression ultrasound and is useful for suspected thrombosis of the superior or inferior vena cava or the pelvic veins.",
      "A chest radiograph does not evaluate pelvic or caval venous thrombosis.",
      "Echocardiography images the heart, not the pelvic or caval veins."
    ],
    "explanation": "MR venography matches compression ultrasound in accuracy and, importantly, can evaluate the pelvic veins and the superior and inferior vena cava, which ultrasound cannot reach.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-038",
    "type": "mcq",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 51 (DVT/PE diagnosis)",
    "question": "Which statement about D-dimer testing in the DVT and PE pathway is correct?",
    "options": [
      "It has a high positive predictive value and confirms VTE",
      "It has a high negative predictive value and is useful to help exclude VTE in low-risk patients",
      "It is only valid in hospitalized patients",
      "It replaces imaging in high-risk patients"
    ],
    "answer": 1,
    "why": [
      "D-dimer is nonspecific, so a positive result does not confirm VTE.",
      "Correct. D-dimer has a very high negative predictive value (about 94 percent) and is most useful for excluding VTE in low-risk, previously healthy, non-hospitalized patients.",
      "It is most useful in low-risk outpatients, not hospitalized patients, in whom it is often falsely elevated.",
      "High-risk patients need imaging regardless of the D-dimer result."
    ],
    "explanation": "D-dimer's strength is its negative predictive value (about 94 percent). It helps exclude VTE in low-risk outpatients but cannot confirm it, and high-risk patients still require imaging.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-039",
    "type": "vignette",
    "section": "DVT Diagnosis",
    "source": "Venous Disease, slide 86 (Case: low pretest probability PE)",
    "question": "A 28-year-old woman has sudden pleuritic right-sided chest pain and dyspnea for 4 hours after a 14-hour flight. She takes an oral contraceptive. Vitals: T 36.8 C, P 94, RR 22, BP 118/74, SpO2 96 percent on room air. There is no calf swelling, tenderness, or erythema; lungs are clear; chest x-ray and ECG are unremarkable. Wells criteria indicate a low pretest probability (PE-unlikely). Which is the most appropriate next step?",
    "options": [
      "CT pulmonary angiography",
      "D-dimer assay",
      "Duplex ultrasonography of the lower extremities",
      "Ventilation-perfusion lung scanning"
    ],
    "answer": 1,
    "why": [
      "CT pulmonary angiography is reserved for higher pretest probability or a positive D-dimer, not the first step in a PE-unlikely patient.",
      "Correct. With a low pretest probability (PE-unlikely) on Wells criteria, a D-dimer assay is the appropriate next step; a normal result reliably excludes PE and avoids imaging.",
      "Lower-extremity duplex is not the next step when the question is PE and the pretest probability is low.",
      "V/Q scanning is a second-line imaging study, not the next step ahead of a D-dimer in a low-probability patient."
    ],
    "explanation": "In a hemodynamically stable patient with a PE-unlikely Wells score, a D-dimer is the correct next step. A normal D-dimer excludes PE given the high negative predictive value, sparing the patient CT contrast and radiation.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-040",
    "type": "mcq",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 58 (DVT Treatment)",
    "question": "For an uncomplicated DVT with a known, resolved provoking risk factor, what is the typical duration of anticoagulation?",
    "options": [
      "About 3 months",
      "About 2 weeks",
      "Lifelong in all cases",
      "Until the D-dimer normalizes"
    ],
    "answer": 0,
    "why": [
      "Correct. An uncomplicated DVT with a known (provoked) risk factor is typically treated for about 3 months.",
      "Two weeks is too short to treat an acute DVT.",
      "Lifelong anticoagulation is reserved for ongoing risk such as active cancer, heart failure, recurrent VTE, or a persistent hypercoagulable state, not every DVT.",
      "D-dimer normalization is not used to set the treatment duration."
    ],
    "explanation": "A provoked, uncomplicated DVT is treated about 3 months. Unprovoked events, PE, or atypical sites warrant 3 to 6 months or longer, and permanent anticoagulation is used with ongoing risk such as active cancer, heart failure, post-thrombotic syndrome, hypercoagulable states, or recurrent VTE.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-041",
    "type": "multi",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 58 (DVT Treatment)",
    "question": "Which situations warrant considering permanent (indefinite) anticoagulation after VTE? Select all that apply.",
    "options": [
      "Ongoing active cancer",
      "Recurrent VTE",
      "A persistent hypercoagulable state",
      "A single provoked DVT after a resolved surgical risk"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Active cancer is an ongoing prothrombotic risk favoring indefinite anticoagulation.",
      "Correct. Recurrent VTE favors permanent anticoagulation.",
      "Correct. A persistent hypercoagulable state is an ongoing risk.",
      "A single provoked DVT with a resolved risk factor is treated for a defined course (about 3 months), not indefinitely."
    ],
    "explanation": "Permanent anticoagulation is considered when risk is ongoing: heart failure, active cancer, post-thrombotic syndrome, a hypercoagulable state, or recurrent VTE. A single provoked event with a resolved trigger gets a time-limited course.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-042",
    "type": "mcq",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 59 (DVT Treatment)",
    "question": "Which agents are the preferred first-line anticoagulants for most DVT according to this lecture?",
    "options": [
      "Direct-acting oral anticoagulants such as apixaban or rivaroxaban",
      "Aspirin monotherapy",
      "Warfarin started alone without bridging",
      "Intravenous unfractionated heparin indefinitely"
    ],
    "answer": 0,
    "why": [
      "Correct. Direct-acting oral anticoagulants (DOACs) such as apixaban or rivaroxaban are the preferred first-line therapy. LMWH or fondaparinux is an alternative, and LMWH bridging to warfarin is used only when DOACs are contraindicated.",
      "Aspirin is not effective anticoagulation for DVT treatment.",
      "Warfarin requires bridging and is used mainly when DOACs are contraindicated, discontinuing the bridge once INR is above 2.",
      "Indefinite IV heparin is not standard outpatient DVT therapy."
    ],
    "explanation": "DOACs (apixaban, rivaroxaban) are first-line. LMWH (enoxaparin) or fondaparinux is an alternative, and LMWH followed by warfarin (stopping LMWH once INR is above 2) is reserved for when DOACs are contraindicated. Anticoagulants prevent thrombus propagation and let endogenous fibrinolysis work.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-043",
    "type": "mcq",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 62 (Venous Gangrene)",
    "question": "Phlegmasia cerulea dolens is best described as which of the following?",
    "options": [
      "A benign superficial phlebitis that resolves spontaneously",
      "A painful blue swelling from massive venous thrombosis that occludes the main channel and collaterals, risking venous gangrene",
      "An arterial embolus causing a cold white leg",
      "A lymphatic obstruction causing painless swelling"
    ],
    "answer": 1,
    "why": [
      "Phlegmasia cerulea dolens is limb-threatening, not benign.",
      "Correct. Phlegmasia cerulea dolens (painful blue inflammation) is massive venous thrombosis occluding the main venous channel and its collaterals, causing capillary stasis, impaired arterial inflow, and impending venous gangrene. Fibrinolytics are used.",
      "It is a venous, not arterial, catastrophe, and the limb is blue and swollen rather than white.",
      "It is not a lymphatic process and is intensely painful, not painless."
    ],
    "explanation": "Phlegmasia cerulea dolens is propagation of venous thrombus that occludes both the main venous channel and its collaterals. The resulting capillary stasis and impaired arterial inflow render tissue ischemic (venous gangrene), and fibrinolytics are used for impending gangrene.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-044",
    "type": "multi",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 63 (IVC Filter indications)",
    "question": "Which are accepted indications for an inferior vena cava filter? Select all that apply.",
    "options": [
      "A contraindication to anticoagulation, such as active GI bleed or recent CNS surgery or trauma",
      "Documented PE despite adequate anticoagulation",
      "Major pelvic fracture or crush and lower-extremity trauma",
      "A first uncomplicated DVT that responds well to a DOAC"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. A contraindication to anticoagulation (active GI bleed, CNS trauma or recent surgery, preexisting coagulopathy) is a filter indication.",
      "Correct. A PE occurring despite adequate anticoagulation is an indication.",
      "Correct. Major pelvic fracture or crush and lower-extremity trauma, where PE mortality is high, can warrant a prophylactic filter.",
      "A first uncomplicated DVT responding to a DOAC is treated with anticoagulation alone and does not need a filter."
    ],
    "explanation": "IVC filter indications include a contraindication to anticoagulation, PE despite adequate anticoagulation, and major pelvic-fracture or crush and lower-extremity trauma with high PE mortality. Anticoagulation is the default when it is safe and effective.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-045",
    "type": "mcq",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 65 (Retrievable IVC filter)",
    "question": "Why are retrievable IVC filters preferred over permanent ones when the need is temporary?",
    "options": [
      "Permanent filters cannot prevent pulmonary embolism",
      "Indwelling filters are a liability for IVC occlusion after their period of need, and retrievable filters can be removed via the internal jugular vein",
      "Retrievable filters provide lifelong anticoagulation",
      "Permanent filters require daily warfarin"
    ],
    "answer": 1,
    "why": [
      "Both filter types are placed to prevent PE; that is not the distinction.",
      "Correct. IVC filters become a liability for IVC occlusion once the period of PE risk has passed, so retrievable filters, which can be removed via the internal jugular vein, are preferred when the need is temporary.",
      "Filters are mechanical and do not provide anticoagulation.",
      "Filters do not mandate daily warfarin; that is a separate decision."
    ],
    "explanation": "An indwelling IVC filter risks caval occlusion once its protective period ends. Retrievable filters address this by allowing removal through the internal jugular vein after the risk of PE has resolved.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-046",
    "type": "mcq",
    "section": "DVT Treatment & Complications",
    "source": "Venous Disease, slide 67 (VTE in Pregnancy)",
    "question": "Which statement about venous thromboembolism in pregnancy is correct?",
    "options": [
      "VTE incidence is lower in pregnancy than in nonpregnant women",
      "VTE incidence is 4 to 5 times higher, and the preferred treatment is LMWH continued 6 weeks postpartum",
      "Warfarin is the preferred anticoagulant throughout pregnancy",
      "DOACs are the first-line treatment in pregnancy"
    ],
    "answer": 1,
    "why": [
      "Pregnancy raises, not lowers, VTE risk.",
      "Correct. VTE incidence in pregnancy is 4 to 5 times higher than in nonpregnant women, it is a leading cause of maternal death, and the preferred treatment is LMWH continued 6 weeks postpartum. Risk is increased in the early postpartum period.",
      "Warfarin is teratogenic and is not the preferred agent in pregnancy.",
      "DOACs are not the first-line choice in pregnancy; LMWH is preferred."
    ],
    "explanation": "Pregnancy raises VTE risk 4 to 5 fold and accounts for roughly 10 percent of US maternal deaths, with heightened early postpartum risk. LMWH is preferred and continued 6 weeks postpartum. V/Q scanning is used in stable patients and CTPA in unstable patients, with MR venography for pelvic vein thrombosis when compression ultrasound is negative.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-047",
    "type": "multi",
    "section": "DVT Prophylaxis",
    "source": "Venous Disease, slide 69 (DVT Prophylaxis)",
    "question": "Which are appropriate approaches to DVT prophylaxis? Select all that apply.",
    "options": [
      "Subcutaneous LMWH or fondaparinux",
      "Intermittent pneumatic compression for patients with high bleeding risk",
      "Warfarin or a DOAC for joint replacement or other high-risk procedures",
      "Aspirin alone as effective prophylaxis"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Subcutaneous LMWH or fondaparinux is a mainstay of pharmacologic prophylaxis.",
      "Correct. Intermittent pneumatic compression is used when bleeding risk is high and anticoagulation is unsafe.",
      "Correct. Warfarin or a DOAC is used for joint replacement and other high-risk procedures.",
      "Aspirin alone is NOT effective DVT prophylaxis."
    ],
    "explanation": "Prophylaxis uses subcutaneous LMWH or fondaparinux, intermittent pneumatic compression for high bleeding risk, and warfarin or a DOAC for joint replacement or other high-risk procedures. Aspirin alone is not effective prophylaxis.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-048",
    "type": "mcq",
    "section": "DVT Prophylaxis",
    "source": "Venous Disease, slide 71 (Caprini Score)",
    "question": "How is the Caprini score used in perioperative VTE prevention?",
    "options": [
      "It estimates bleeding risk to decide on transfusion",
      "It stratifies VTE risk so that moderate-risk and higher patients receive prophylaxis",
      "It sets the target INR for warfarin",
      "It predicts the duration of surgery"
    ],
    "answer": 1,
    "why": [
      "The Caprini score estimates thrombosis risk, not bleeding or transfusion need.",
      "Correct. The Caprini score stratifies perioperative VTE risk into low, moderate, high, and very high, and moderate-risk and above receive prophylaxis.",
      "It does not set an INR target.",
      "It does not predict operative duration."
    ],
    "explanation": "The Caprini score sums risk factors to classify perioperative VTE risk from low to very high. Patients at moderate risk and above receive prophylaxis, with predicted DVT incidence rising steeply across the risk levels.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-049",
    "type": "mcq",
    "section": "DVT Prophylaxis",
    "source": "Venous Disease, slide 73 (Perioperative VTE prophylaxis in Ortho Surgery)",
    "question": "Why is perioperative VTE prophylaxis particularly emphasized in orthopedic spine and lower-extremity surgery?",
    "options": [
      "Because these operations rarely injure veins",
      "Because bony and soft tissue manipulation injures veins, healing requires immobilization, and the population is older with comorbidities",
      "Because these patients are anticoagulated preoperatively as a rule",
      "Because these procedures never require postoperative immobility"
    ],
    "answer": 1,
    "why": [
      "These operations frequently injure veins, which is the opposite of the stem.",
      "Correct. Spine and lower-extremity surgery injures veins through bony and soft tissue manipulation, requires immobilization for healing, and involves an older population with comorbidities. Thrombi can even form on the operating table.",
      "Routine preoperative anticoagulation is not the reason and is not standard.",
      "These procedures typically do require postoperative immobility, which raises risk."
    ],
    "explanation": "Orthopedic spine and lower-extremity surgery combines venous injury from tissue manipulation, mandatory immobilization for healing, and an aging population with comorbidities. Thrombi can form intraoperatively, so structured prophylaxis (typically 14 to 35 days) is emphasized.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-050",
    "type": "mcq",
    "section": "Post-Thrombotic Syndrome",
    "source": "Venous Disease, slide 76 (Post-Thrombotic Syndrome)",
    "question": "What is the underlying mechanism of post-thrombotic syndrome (PTS)?",
    "options": [
      "Arterial insufficiency from atherosclerosis",
      "Thrombosis injures venous valves, which thicken and become incompetent, allowing retrograde flow and venous hypertension",
      "Lymphatic channel hypoplasia present from birth",
      "Compression of the popliteal artery by muscle"
    ],
    "answer": 1,
    "why": [
      "PTS is a venous problem, not arterial insufficiency.",
      "Correct. In PTS, thrombosis injures the venous valves so they thicken and fail to prevent retrograde flow, producing chronic venous hypertension. Up to 40 percent of people with DVT can develop PTS.",
      "That describes primary lymphedema (Milroy's), not PTS.",
      "That describes an arterial compression syndrome, not PTS."
    ],
    "explanation": "PTS follows DVT: valve injury from thrombosis leaves the valves incompetent, so blood refluxes and venous pressure stays high. Up to 40 percent of DVT patients develop PTS, diagnosed with the Villalta scale.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-051",
    "type": "mcq",
    "section": "Post-Thrombotic Syndrome",
    "source": "Venous Disease, slide 77 (Post-Thrombotic Syndrome)",
    "question": "Which clinical scale is used to diagnose post-thrombotic syndrome, and what finding automatically indicates severe PTS?",
    "options": [
      "The Wells score; a positive D-dimer indicates severe PTS",
      "The Villalta scale; the presence of a venous ulcer automatically indicates severe PTS",
      "The Caprini score; bilateral edema indicates severe PTS",
      "The Homan sign; a palpable cord indicates severe PTS"
    ],
    "answer": 1,
    "why": [
      "The Wells score is for DVT probability, not PTS severity, and D-dimer does not grade PTS.",
      "Correct. The Villalta scale diagnoses PTS using symptoms and signs, and the presence of a venous ulcer automatically indicates severe PTS.",
      "The Caprini score is for perioperative VTE risk, not PTS grading.",
      "The Homan sign is an unreliable DVT test, not a PTS scale."
    ],
    "explanation": "The Villalta scale grades PTS from symptoms (pain, cramps, heaviness, paresthesia, pruritus) and signs (pretibial edema, induration, hyperpigmentation, redness, venous ectasia, pain on calf compression). A venous ulcer automatically denotes severe PTS.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-052",
    "type": "multi",
    "section": "Post-Thrombotic Syndrome",
    "source": "Venous Disease, slide 79 (Post-Thrombotic Syndrome: Treatment)",
    "question": "Which are appropriate treatments for post-thrombotic syndrome? Select all that apply.",
    "options": [
      "Intermittent leg elevation during the day and elevation at night",
      "Prescription-grade graduated compression stockings if arterial inflow is adequate",
      "Venous stents to restore flow when major veins are occluded",
      "Strict continuous bed rest with the legs dependent"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Intermittent leg elevation during the day and elevation at night reduce venous pressure.",
      "Correct. Prescription-grade graduated compression (mid-foot to below the knee) is used when arterial inflow is good.",
      "Correct. Venous stents can restore flow when major veins are occluded, though this is uncommon.",
      "Continuous bed rest with dependent legs worsens venous pooling and is not treatment."
    ],
    "explanation": "PTS is managed with intermittent leg elevation, avoidance of prolonged sitting or standing, prescription graduated compression (with adequate arterial inflow confirmed), and occasionally venous stents for major vein occlusion.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-053",
    "type": "mcq",
    "section": "Post-Thrombotic Syndrome",
    "source": "Venous Disease, slide 80 (Treatment of PTS ulcer)",
    "question": "What is the Unna boot used to treat in post-thrombotic syndrome?",
    "options": [
      "An arterial ulcer over the lateral malleolus",
      "A venous stasis ulcer, using a zinc oxide medicated elastic dressing to facilitate healing",
      "An acute DVT of the femoral vein",
      "A pulmonary embolism"
    ],
    "answer": 1,
    "why": [
      "The Unna boot is for venous ulcers, and arterial ulcers, which need improved perfusion, are typically over pressure points; compression can harm them.",
      "Correct. The Unna boot is a zinc oxide medicated elastic dressing (with calamine, glycerin, and gelatin) that facilitates healing of a venous stasis ulcer, alongside elevation and padding of the ulcer and bony prominences.",
      "The Unna boot does not treat acute DVT, which requires anticoagulation.",
      "The Unna boot has no role in PE."
    ],
    "explanation": "The venous stasis ulcer of PTS is treated with an Unna boot, a zinc oxide medicated elastic dressing containing calamine, glycerin, and gelatin, plus elevation and padding of the ulcer, tendons, and bony prominences.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-054",
    "type": "vignette",
    "section": "Post-Thrombotic Syndrome",
    "source": "Venous Disease, slide 87 (Case: venous stasis ulcer)",
    "question": "A 58-year-old man with a DVT 10 years ago has severe bilateral lower-extremity swelling and skin thickening, with brawny indurated edema to mid-calf, dark brown hyperpigmentation, and a shallow irregular ulcer with a granulation base near the medial malleolus. Which conservative strategy provides the most effective standard of care to optimize healing of this active venous ulcer?",
    "options": [
      "Topical antibiotics applied to the ulcer base",
      "A course of prophylactic oral antibiotics",
      "Graduated compression stockings providing 30 to 40 mmHg of pressure",
      "Continuous leg immobilization and strict bed rest"
    ],
    "answer": 2,
    "why": [
      "Topical antibiotics do not address the venous hypertension driving the ulcer and are not standard of care.",
      "Prophylactic oral antibiotics are not indicated without infection and do not heal the ulcer.",
      "Correct. Graduated compression at 30 to 40 mmHg counteracts venous hypertension and is the most effective standard of care for healing a venous stasis ulcer, provided arterial inflow is adequate.",
      "Continuous immobilization and bed rest worsen venous stasis and do not heal the ulcer."
    ],
    "explanation": "This is a venous stasis ulcer from severe post-thrombotic syndrome. Graduated compression (30 to 40 mmHg for venous ulcers) is the cornerstone of healing, addressing the underlying venous hypertension when arterial inflow is adequate.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-055",
    "type": "mcq",
    "section": "Vena Cava Syndromes",
    "source": "Venous Disease, slide 90 (Superior Vena Cava Obstruction)",
    "question": "What is the most common cause of superior vena cava obstruction?",
    "options": [
      "A neoplastic process in the mediastinum, such as lung or breast cancer or lymphoma",
      "Deep vein thrombosis of the calf",
      "Primary varicose veins",
      "An incompetent saphenofemoral valve"
    ],
    "answer": 0,
    "why": [
      "Correct. SVC obstruction is most often secondary to a mediastinal neoplasm such as lung cancer, breast cancer, or lymphoma; catheter-related thrombosis and fibrosing mediastinitis are other causes.",
      "Calf DVT does not cause SVC obstruction.",
      "Varicose veins are a lower-extremity superficial problem unrelated to the SVC.",
      "Saphenofemoral incompetence causes varicose veins, not SVC obstruction."
    ],
    "explanation": "SVC obstruction is usually caused by a mediastinal malignancy (lung, breast, lymphoma) or a mediastinal mass, with catheter-related thrombosis and stenosis and inflammatory or fibrotic mediastinitis (TB, histoplasmosis) as other causes.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-056",
    "type": "mcq",
    "section": "Vena Cava Syndromes",
    "source": "Venous Disease, slide 91 (SVC Obstruction: Clinical presentation)",
    "question": "Which presentation is most characteristic of superior vena cava syndrome?",
    "options": [
      "Edema of the face, neck, and arms with prominent veins on the chest and neck",
      "Unilateral calf swelling with a palpable cord",
      "Painless swelling maximal on the dorsum of the foot",
      "Cold, pulseless lower extremities"
    ],
    "answer": 0,
    "why": [
      "Correct. SVC syndrome causes edema of the face, neck, and arms, prominent collateral veins on the chest and neck, headache, and dyspnea or cough as venous drainage of the head, neck, and upper extremities is obstructed.",
      "Unilateral calf swelling with a cord suggests lower-extremity DVT, not SVC syndrome.",
      "Painless foot-dorsum swelling suggests lymphedema.",
      "Cold, pulseless legs indicate arterial disease, not SVC obstruction."
    ],
    "explanation": "SVC syndrome obstructs venous drainage from the head, neck, and upper extremities, producing facial, neck, and arm edema, prominent chest and neck collateral veins, headache, and shortness of breath or cough.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-057",
    "type": "mcq",
    "section": "Vena Cava Syndromes",
    "source": "Venous Disease, slide 94 (Inferior Vena Cava Obstruction)",
    "question": "Which finding is characteristic of inferior vena cava obstruction, and what has become an increasingly common cause?",
    "options": [
      "Dilated venous collaterals of the abdominal wall; an occluded IVC filter",
      "Facial and arm edema; a mediastinal mass",
      "A palpable cord in the calf; superficial thrombophlebitis",
      "Absent femoral pulses; aortic dissection"
    ],
    "answer": 0,
    "why": [
      "Correct. IVC obstruction produces dilated venous collaterals of the abdominal wall, and an occluded IVC filter has recently become a more common cause, alongside tumor compression or invasion and retroperitoneal inflammation.",
      "Facial and arm edema with a mediastinal mass describe SVC, not IVC, obstruction.",
      "A calf cord describes superficial thrombophlebitis, not IVC obstruction.",
      "Absent femoral pulses point to arterial disease, not IVC obstruction."
    ],
    "explanation": "IVC obstruction shares etiologies with SVC obstruction (tumor compression or invasion, retroperitoneal inflammation) and increasingly follows an occluded IVC filter. The hallmark finding is dilated abdominal wall venous collaterals.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "ven-058",
    "type": "mcq",
    "section": "Vena Cava Syndromes",
    "source": "Venous Disease, slide 94 (Inferior Vena Cava Obstruction)",
    "question": "What is the general treatment approach to malignant vena cava obstruction?",
    "options": [
      "Observation alone",
      "Tumor irradiation or chemotherapy followed by a venous stent and anticoagulation, and removal of an obstructed IVC filter when relevant",
      "Immediate open surgical bypass in all cases",
      "Compression stockings only"
    ],
    "answer": 1,
    "why": [
      "Symptomatic caval obstruction is not managed by observation alone.",
      "Correct. Treatment is tumor irradiation or chemotherapy followed by a venous stent and anticoagulation, plus removal of an obstructed IVC filter when that is the cause. SVC syndrome is similarly managed with balloon dilation and stenting.",
      "Open bypass is not the routine approach; endovascular stenting is preferred.",
      "Compression stockings do not relieve central caval obstruction."
    ],
    "explanation": "Malignant caval obstruction is treated by reducing tumor burden with irradiation or chemotherapy, then restoring flow with a venous stent and anticoagulation. An obstructed IVC filter is removed. SVC syndrome is managed with balloon dilation and stenting.",
    "class": "Cardiology",
    "lecture": "Venous Disease"
  },
  {
    "id": "lym-001",
    "type": "multi",
    "section": "Lymphatic System",
    "source": "Lymphatic Disease, slide 97 (Lymphatic System)",
    "question": "Which of the following are functions of the lymphatic system? Select all that apply.",
    "options": [
      "Balancing the volume of interstitial fluid",
      "Immune surveillance by moving antigens and leukocytes to lymph nodes",
      "Transporting interstitial fluid, immune cells, bacteria, and fats toward the heart",
      "Pumping oxygenated blood to the systemic arteries"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. The lymphatics balance interstitial fluid volume by returning excess filtrate to the circulation.",
      "Correct. They provide immune surveillance, carrying antigens and leukocytes to lymph nodes.",
      "Correct. They transport interstitial fluid, immune cells, bacteria, and dietary fats toward the heart.",
      "Pumping oxygenated blood to the arteries is the function of the left heart, not the lymphatic system."
    ],
    "explanation": "The lymphatic system balances interstitial fluid, performs immune surveillance by delivering antigens and leukocytes to lymph nodes, and transports fluid, immune cells, bacteria, and fats centrally. Structurally it follows venous pathways from peripheral capillaries into the main lymph trunks and ultimately the subclavian veins.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-002",
    "type": "mcq",
    "section": "Lymphatic System",
    "source": "Lymphatic Disease, slide 97 (Lymphatic System)",
    "question": "Where does the lymphatic system ultimately return lymph to the bloodstream?",
    "options": [
      "The subclavian veins",
      "The pulmonary artery",
      "The renal arteries",
      "The coronary sinus"
    ],
    "answer": 0,
    "why": [
      "Correct. Lymph generally follows the venous pathways from peripheral capillaries into the main lymph trunks and ultimately drains into the subclavian veins.",
      "The pulmonary artery carries deoxygenated blood from the right ventricle, not lymph.",
      "The renal arteries supply the kidneys and receive no lymphatic drainage.",
      "The coronary sinus drains cardiac venous blood into the right atrium, not lymph."
    ],
    "explanation": "Lymphatic channels parallel the venous system, coalescing into the main lymph trunks that empty into the subclavian veins, returning filtered interstitial fluid to the circulation.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-003",
    "type": "matching",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 98 (Primary Lymphedema)",
    "question": "Match each form of primary lymphedema to its defining feature.",
    "pairs": [
      {
        "left": "Congenital (Milroy's disease)",
        "right": "Present from birth, from hypoplasia of the lymphatics",
        "why": "Milroy's disease is congenital primary lymphedema caused by hypoplasia of the lymphatics."
      },
      {
        "left": "Lymphedema praecox (Meige's disease)",
        "right": "Onset at puberty, with a female-to-male ratio of about 3.5 to 1",
        "why": "Lymphedema praecox (Meige's disease) begins around puberty and predominates in females (about 3.5 to 1)."
      },
      {
        "left": "Lymphedema tarda",
        "right": "Onset after age 35, affecting females and males equally",
        "why": "Lymphedema tarda begins after age 35 and affects the sexes about equally."
      }
    ],
    "explanation": "Primary lymphedema has three classic forms by age of onset: congenital (Milroy's) from lymphatic hypoplasia, praecox (Meige's) at puberty with female predominance, and tarda after age 35 with equal sex distribution.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-004",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 98 (Primary Lymphedema)",
    "question": "Congenital primary lymphedema (Milroy's disease) results from which abnormality?",
    "options": [
      "Hypoplasia of the lymphatics",
      "Metastatic tumor in the lymph nodes",
      "Surgical lymph node dissection",
      "Filarial nematode infection"
    ],
    "answer": 0,
    "why": [
      "Correct. Milroy's disease is congenital primary lymphedema caused by hypoplasia of the lymphatics.",
      "Nodal metastasis is a cause of secondary lymphedema, not congenital Milroy's disease.",
      "Lymph node dissection causes secondary lymphedema.",
      "Filariasis is a cause of secondary lymphedema, not congenital Milroy's disease."
    ],
    "explanation": "Milroy's disease is the congenital form of primary lymphedema, arising from hypoplasia of the lymphatic channels.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-005",
    "type": "multi",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 99 (Secondary Lymphedema)",
    "question": "Which of the following are causes of secondary lymphedema? Select all that apply.",
    "options": [
      "Lymph node tumor metastasis (breast cancer, melanoma, lymphoma, prostate, uterine)",
      "Lymphadenectomy and radiation therapy",
      "Filariasis from nematodes transmitted by mosquitoes",
      "Congenital hypoplasia of the lymphatics"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Metastatic tumor in lymph nodes (breast, melanoma, lymphoma, prostate, uterine) obstructs lymphatic drainage.",
      "Correct. Lymphadenectomy and radiation, including saphenous vein harvest for CABG, damage lymphatics.",
      "Correct. Filariasis, from mosquito-borne nematodes, is a major worldwide cause of secondary lymphedema.",
      "Congenital lymphatic hypoplasia is primary lymphedema (Milroy's), not secondary."
    ],
    "explanation": "Secondary lymphedema follows damage or obstruction of previously normal lymphatics: nodal metastasis, lymphadenectomy and radiation, surgical injury, recurrent lymphangitis, filariasis, podoconiosis, and chronic venous insufficiency.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-006",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 99 (Secondary Lymphedema)",
    "question": "Filariasis, a worldwide cause of secondary lymphedema, is transmitted by what?",
    "options": [
      "Mosquitoes and other arthropods carrying nematodes",
      "Contaminated drinking water carrying protozoa",
      "Direct person-to-person respiratory spread",
      "Walking barefoot on silica-rich soil"
    ],
    "answer": 0,
    "why": [
      "Correct. Filariasis is caused by nematodes transmitted by mosquitoes and other arthropods.",
      "Waterborne protozoa are not the mechanism of filariasis.",
      "Filariasis is vector-borne, not spread respiratorily person to person.",
      "Walking barefoot on soil describes podoconiosis, a separate cause of secondary lymphedema."
    ],
    "explanation": "Filariasis is caused by nematodes transmitted by mosquitoes and other arthropods. Podoconiosis, by contrast, is an inflammatory reaction to soil silica and aluminum from walking barefoot.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-007",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 101 (Lymphedema clinical features)",
    "question": "Which description best fits the clinical presentation of lymphedema?",
    "options": [
      "Painful pitting edema that resolves fully with elevation",
      "Painless edema, non-pitting in late stages, maximal on the dorsum of the foot or hands, without varicosities or stasis pigmentation",
      "A red, warm, tender cord along a superficial vein",
      "Sudden unilateral calf swelling after a long flight"
    ],
    "answer": 1,
    "why": [
      "Lymphedema is painless and, in late stages, non-pitting, and it does not fully resolve with elevation.",
      "Correct. Lymphedema is painless, becomes non-pitting in late stages, is maximal on the dorsum of the foot or hands, and lacks the varicosities and stasis pigmentation seen in venous disease.",
      "A tender cord along a vein describes superficial thrombophlebitis, not lymphedema.",
      "Sudden unilateral calf swelling after a flight suggests DVT, not lymphedema."
    ],
    "explanation": "Lymphedema causes painless swelling that becomes non-pitting in late stages, is maximal on the dorsum of the foot or hands, and lacks varicosities and stasis pigmentation. Unlike venous edema, it does not respond well to elevation.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-008",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 102 (Stemmer's Sign)",
    "question": "A positive Stemmer's sign, which supports a diagnosis of lymphedema, refers to what finding?",
    "options": [
      "Inability to pinch and lift a skin fold at the base of the second toe",
      "Calf pain on passive dorsiflexion of the foot",
      "A palpable thrill over the saphenofemoral junction",
      "Blanching of the skin on firm pressure that refills slowly"
    ],
    "answer": 0,
    "why": [
      "Correct. A positive Stemmer's sign is the inability to pinch and lift a skin fold at the base of the toe, reflecting the thickened, fibrotic skin of lymphedema.",
      "That is the Homan sign, associated with DVT, not lymphedema.",
      "A saphenofemoral thrill is not Stemmer's sign and is not a lymphedema finding.",
      "Slow capillary refill is a perfusion test, not Stemmer's sign."
    ],
    "explanation": "Stemmer's sign is the inability to tent or pinch a fold of skin at the base of the toe (or finger), reflecting the skin thickening of lymphedema. A positive sign supports lymphedema over other causes of swelling.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-009",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 78 (PTS differential: lymphedema)",
    "question": "How does lymphedema classically differ from venous edema on examination?",
    "options": [
      "Lymphedema pits deeply and resolves overnight with elevation",
      "Lymphedema tends to be non-pitting and does not respond well to elevation",
      "Lymphedema always spares the dorsum of the foot",
      "Lymphedema is always accompanied by stasis pigmentation"
    ],
    "answer": 1,
    "why": [
      "Late lymphedema is non-pitting and does not resolve overnight with elevation.",
      "Correct. Lymphedema tends to be non-pitting and, unlike venous edema, does not respond well to elevation, which helps distinguish it in the differential of leg swelling.",
      "Lymphedema is actually maximal on the dorsum of the foot rather than sparing it.",
      "Stasis pigmentation and varicosities are features of venous disease and do not occur in lymphedema."
    ],
    "explanation": "In the differential of leg swelling, lymphedema is non-pitting and does not respond to elevation, in contrast to venous edema, and it lacks the varicosities and stasis pigmentation of venous disease.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-010",
    "type": "mcq",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 103 (Lymphedema: Treatment)",
    "question": "What is the mainstay of treatment for lymphedema?",
    "options": [
      "Long-term systemic anticoagulation",
      "Strict skin hygiene plus graduated compression stockings or gloves and intermittent pneumatic compression",
      "Routine surgical lymph node dissection",
      "High-dose diuretics as monotherapy"
    ],
    "answer": 1,
    "why": [
      "Anticoagulation treats thrombosis, not lymphedema.",
      "Correct. Lymphedema care centers on strict skin hygiene and protective measures plus early graduated compression stockings or gloves and intermittent pneumatic compression devices.",
      "Lymph node dissection can cause lymphedema and is not a treatment for it.",
      "Diuretics alone are ineffective for lymphedema and are not the mainstay."
    ],
    "explanation": "Lymphedema treatment emphasizes strict skin hygiene and protection to prevent infection, plus early intervention with graduated compression stockings or gloves and intermittent pneumatic compression.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-011",
    "type": "vignette",
    "section": "Lymphedema",
    "source": "Lymphatic Disease, slide 105 (Case: Stemmer's sign at puberty)",
    "question": "A 19-year-old woman has asymmetric swelling of her right lower extremity that began around puberty, started in the foot, and has slowly progressed up the leg. Exam shows a positive Stemmer's sign. What is the most likely diagnosis?",
    "options": [
      "Congenital lymphedema (Milroy's disease)",
      "Lymphedema praecox (Meige's disease)",
      "Lymphedema tarda",
      "Secondary podoconiosis"
    ],
    "answer": 1,
    "why": [
      "Milroy's disease is congenital and present from birth, not first appearing at puberty.",
      "Correct. Onset at puberty in a young woman with a positive Stemmer's sign is classic for lymphedema praecox (Meige's disease), which has a female predominance of about 3.5 to 1.",
      "Lymphedema tarda begins after age 35, not at puberty.",
      "Podoconiosis is secondary lymphedema from walking barefoot on silica-rich soil, which does not fit a pubertal-onset primary presentation."
    ],
    "explanation": "Primary lymphedema beginning at puberty in a young woman is lymphedema praecox (Meige's disease), the most common primary form, with a female-to-male ratio of about 3.5 to 1. A positive Stemmer's sign supports lymphedema.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-012",
    "type": "mcq",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 106 (Lymphangitis)",
    "question": "What is lymphangitis?",
    "options": [
      "Infection of a lymphatic vessel related to bacterial entry through the skin or deep tissue",
      "Malignant infiltration of the lymph nodes",
      "Congenital absence of lymphatic valves",
      "Thrombosis of a deep vein"
    ],
    "answer": 0,
    "why": [
      "Correct. Lymphangitis is infection of a lymphatic vessel following bacterial entry through the skin or deep tissue, often via lacerations, burns, or bites.",
      "Malignant nodal infiltration causes secondary lymphedema, not lymphangitis.",
      "Congenital valve absence relates to primary lymphedema, not infectious lymphangitis.",
      "Deep vein thrombosis is a venous, not lymphatic infection, diagnosis."
    ],
    "explanation": "Lymphangitis is infection of a lymphatic vessel after bacteria enter through the skin or deep tissue. Common portals include skin lacerations and abrasions, burns, and bites from humans, other mammals, or insects.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-013",
    "type": "multi",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 106 (Lymphangitis)",
    "question": "Which are common portals of entry for the bacteria that cause lymphangitis? Select all that apply.",
    "options": [
      "Skin lacerations and abrasions",
      "Burns",
      "Bites from humans, other mammals, or insects",
      "Inhalation of airborne spores"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Skin lacerations and abrasions are common portals of entry.",
      "Correct. Burns disrupt the skin barrier and are a recognized portal.",
      "Correct. Bites from humans, other mammals, and insects introduce bacteria.",
      "Airborne spore inhalation is a respiratory route and is not a portal for lymphangitis."
    ],
    "explanation": "Bacteria causing lymphangitis enter through skin lacerations or abrasions, burns, and bites from humans, other mammals, or insects.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-014",
    "type": "mcq",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 107 (Lymphangitis)",
    "question": "What is the classic physical finding of lymphangitis?",
    "options": [
      "A painless plaque with central clearing",
      "An erythematous streak tracking upstream from a focus of infection along an inflamed lymph vessel",
      "A cold, cyanotic toe with intact pulses",
      "A palpable pulsatile abdominal mass"
    ],
    "answer": 1,
    "why": [
      "A painless target-like plaque is not the finding of lymphangitis.",
      "Correct. Lymphangitis produces a typical erythematous streak, the inflamed lymph vessel, tracking upstream (proximally) from a focus of infection, often with tender regional lymph nodes.",
      "A cold cyanotic toe with intact pulses suggests atheroembolism, not lymphangitis.",
      "A pulsatile abdominal mass suggests an aortic aneurysm, unrelated to lymphangitis."
    ],
    "explanation": "The hallmark of lymphangitis is a tender erythematous streak running proximally from the site of infection along the inflamed lymphatic vessel, often with enlarged, tender regional lymph nodes.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-015",
    "type": "mcq",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 108 (Lymphangitis: Pathogens)",
    "question": "Which organisms are the most common causes of lymphangitis?",
    "options": [
      "Streptococcus or Staphylococcus species",
      "Pseudomonas aeruginosa",
      "Pasteurella multocida",
      "Aeromonas species"
    ],
    "answer": 0,
    "why": [
      "Correct. Streptococcus and Staphylococcus species are the most common causes of lymphangitis.",
      "Pseudomonas is a listed but less common cause, not the most common.",
      "Pasteurella is associated specifically with dog or cat bites, not the most common overall.",
      "Aeromonas is associated with water exposure, not the most common overall cause."
    ],
    "explanation": "Streptococcus and Staphylococcus are the most common causes of lymphangitis. Specific exposures point to other organisms: dog or cat bites to Pasteurella, human bites to Eikenella corrodens, and water exposure to Aeromonas.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-016",
    "type": "matching",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 108 (Lymphangitis: Pathogens)",
    "question": "Match each exposure to the organism it classically suggests in lymphangitis or related soft-tissue infection.",
    "pairs": [
      {
        "left": "Dog or cat bite",
        "right": "Pasteurella",
        "why": "Dog and cat bites classically introduce Pasteurella."
      },
      {
        "left": "Human bite",
        "right": "Eikenella corrodens",
        "why": "Human bites are associated with Eikenella corrodens (along with Staphylococcus, Streptococcus, and Corynebacterium)."
      },
      {
        "left": "Water exposure",
        "right": "Aeromonas",
        "why": "Aeromonas is linked to water exposure."
      },
      {
        "left": "Mosquito-borne nematode",
        "right": "Wuchereria",
        "why": "Wuchereria is a mosquito-transmitted nematode."
      }
    ],
    "explanation": "Exposure history guides the likely organism: dog or cat bites suggest Pasteurella, human bites Eikenella corrodens, water exposure Aeromonas, and mosquito-borne nematode infection Wuchereria.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-017",
    "type": "multi",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 109 (Lymphangitis: Treatment)",
    "question": "Which are components of lymphangitis treatment? Select all that apply.",
    "options": [
      "Moist warm compresses and elevation of the infected limb",
      "IV antibiotics transitioned to oral antibiotics",
      "Vancomycin for MRSA in the inpatient setting",
      "Withholding all antibiotics pending blood cultures"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Moist warm compresses and elevation of the infected limb are supportive measures.",
      "Correct. IV antibiotics are given and then transitioned to oral therapy.",
      "Correct. For MRSA, inpatient treatment is vancomycin; oral options include TMP-SMX, clindamycin, or minocycline.",
      "Antibiotics are started empirically, not withheld; blood cultures are uncommonly positive and should not delay therapy."
    ],
    "explanation": "Lymphangitis is treated with moist warm compresses, limb elevation, and IV antibiotics transitioned to oral (penicillin G, amoxicillin-clavulanate, ceftriaxone, cefuroxime, or others). For MRSA, use vancomycin inpatient or TMP-SMX, clindamycin, or minocycline orally.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-018",
    "type": "multi",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 110 (Lymphangitis: Treatment)",
    "question": "Which factors increase the risk or severity of lymphangitis? Select all that apply.",
    "options": [
      "Diabetes mellitus and immunocompromised states",
      "Lesions of the hands, feet, and face as portals of entry",
      "Preexisting lymphedema",
      "Regular use of graduated compression stockings"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "why": [
      "Correct. Diabetes and immunocompromised states increase risk.",
      "Correct. Hand, foot, and face lesions warrant increased vigilance, and deep soft-tissue compartments and relatively avascular tendons are more vulnerable.",
      "Correct. Preexisting lymphedema allows bacteria to evade neutrophils and lymphocytes.",
      "Compression stockings are a treatment measure and do not increase lymphangitis risk."
    ],
    "explanation": "Risk is higher with diabetes, immunocompromise, and preexisting lymphedema (which lets bacteria evade immune cells). Hand, foot, and face lesions deserve extra vigilance because deep compartments and avascular tendons are vulnerable.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  },
  {
    "id": "lym-019",
    "type": "vignette",
    "section": "Lymphangitis",
    "source": "Lymphatic Disease, slide 112 (Case: linear streaks after shin abrasion)",
    "question": "A 24-year-old man has worsening pain and swelling in the left lower leg 3 days after scraping his shin while hiking. T 101.1 F, P 92, BP 120/78. Exam shows a small crusted abrasion on the anterior tibia with several distinct erythematous tender linear streaks extending proximally toward the groin and tender enlarged left inguinal lymph nodes. Which best describes the most likely organism and appropriate initial empiric management?",
    "options": [
      "Sporothrix schenckii; start oral itraconazole",
      "Streptococcus pyogenes; start empiric antibiotics covering Gram-positive cocci",
      "Staphylococcus aureus; perform urgent surgical incision and drainage",
      "Mycobacterium marinum; obtain a skin biopsy and defer antibiotics pending culture"
    ],
    "answer": 1,
    "why": [
      "Sporotrichosis (Sporothrix) causes nodular lymphocutaneous lesions over weeks after plant or soil inoculation, not an acute febrile streaking infection after a simple abrasion.",
      "Correct. Acute lymphangitis with tender proximal streaks and regional adenopathy after a skin break is most often Streptococcus pyogenes, and empiric antibiotics covering Gram-positive cocci are the appropriate initial management.",
      "Without an abscess, urgent incision and drainage is not the initial step; empiric antibiotics are.",
      "Mycobacterium marinum causes an indolent infection after aquatic or aquarium exposure, and deferring antibiotics in this acutely febrile patient is inappropriate."
    ],
    "explanation": "Acute lymphangitis, erythematous streaks tracking proximally from a skin break with tender regional nodes, is most commonly caused by Streptococcus pyogenes. Empiric antibiotics covering Gram-positive cocci are the correct initial management.",
    "class": "Cardiology",
    "lecture": "Lymphatic Disease"
  }
];

if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; }
