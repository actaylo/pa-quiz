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
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Modalities",
    "source": "Cardiac Imaging, slide 87 (Imaging Modality table)",
    "question": "Match each imaging modality to its description.",
    "pairs": [
      {
        "left": "Chest X-ray (CXR)",
        "right": "Radiograph of heart, vessels, lungs; used for heart failure, cardiomegaly, pulmonary edema, thoracic aneurysm",
        "why": "The CXR is a radiograph showing the heart, vessels, and lungs, used for heart failure, cardiomegaly, pulmonary edema, and thoracic aneurysm."
      },
      {
        "left": "Transthoracic echocardiogram (TTE)",
        "right": "Ultrasound with moderate visualization of heart structures and pericardium",
        "why": "The TTE is an ultrasound giving moderate visualization of heart structures and the pericardium."
      },
      {
        "left": "Transesophageal echocardiogram (TEE)",
        "right": "Ultrasound with higher resolution than TTE, especially the LA, mitral valve, and aorta",
        "why": "The TEE is an ultrasound with higher resolution than TTE, particularly for the left atrium, mitral valve, and aorta."
      }
    ],
    "explanation": "CXR is a radiograph of the heart, vessels, and lungs (heart failure, cardiomegaly, pulmonary edema, thoracic aneurysm). TTE is an ultrasound with moderate visualization of heart structures and pericardium. TEE is an ultrasound with higher resolution than TTE, especially the left atrium, mitral valve, and aorta."
  },
  {
    "id": "img-002",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Modalities",
    "source": "Cardiac Imaging, slide 87 (Transesophageal Echocardiogram)",
    "question": "The main advantage of a transesophageal echocardiogram (TEE) over a transthoracic echocardiogram (TTE) is:",
    "options": [
      "Higher-resolution visualization of posterior structures, particularly the left atrium, mitral valve, and aorta",
      "It uses no ultrasound and avoids all probes",
      "It measures the coronary calcium score",
      "It does not require a trained operator"
    ],
    "answer": 0,
    "explanation": "A TEE gives more detail than a TTE, especially for the valves and posterior structures such as the left atrium, mitral valve, and aorta, because the probe sits directly behind the heart in the esophagus.",
    "why": [
      "Correct. TEE better visualizes the LA, mitral valve, and aorta.",
      "TEE is an ultrasound study using an esophageal probe.",
      "The coronary calcium score is a CT measurement, not a TEE.",
      "TEE is operator-dependent and requires a trained provider."
    ]
  },
  {
    "id": "img-003",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Modalities",
    "source": "Cardiac Imaging, slide 87 (Echocardiography)",
    "question": "For a patient whose obesity, COPD, or body habitus limits transthoracic image quality, the best alternative to visualize valve anatomy is:",
    "options": [
      "Transesophageal echocardiogram",
      "Chest X-ray",
      "Coronary calcium score",
      "MUGA scan"
    ],
    "answer": 0,
    "explanation": "When body habitus or lung disease degrades TTE windows, a TEE provides high-resolution imaging of the valves and posterior structures because the probe images from within the esophagus.",
    "why": [
      "Correct. TEE bypasses the poor transthoracic windows to image the valves clearly.",
      "A chest X-ray cannot detail valve anatomy or hemodynamics.",
      "A coronary calcium score assesses calcified plaque, not valves.",
      "A MUGA scan evaluates ejection fraction, not valve anatomy."
    ]
  },
  {
    "id": "img-004",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 88 (Stress Testing table)",
    "question": "Match each stress test to its description.",
    "pairs": [
      {
        "left": "Exercise stress EKG",
        "right": "Monitors HR, BP, and ST changes during exercise; less sensitive and specific than stress echo; requires the patient to exercise",
        "why": "The exercise stress EKG monitors HR, BP, and ST changes but is less sensitive and specific than stress echo and requires the patient to exercise."
      },
      {
        "left": "Stress echocardiogram",
        "right": "Ultrasound plus monitoring; detects reversible wall motion abnormalities; obesity or lung disease can limit image quality",
        "why": "The stress echocardiogram adds ultrasound to detect reversible wall motion abnormalities, though obesity or lung disease can limit imaging."
      },
      {
        "left": "SPECT nuclear stress test",
        "right": "Radioactive tracer (technetium-99) assessing blood flow; shows fixed and reversible defects; can be done pharmacologically",
        "why": "The SPECT nuclear stress test uses a technetium-99 tracer to assess myocardial blood flow, showing fixed and reversible defects, and can be pharmacologic."
      }
    ],
    "explanation": "Exercise stress EKG monitors HR, BP, and ST changes but is less sensitive and specific and needs the patient to exercise. Stress echo adds ultrasound for reversible wall motion abnormalities (limited by obesity or lung disease). SPECT nuclear stress uses a technetium-99 tracer to assess blood flow and shows fixed and reversible defects, and can be done pharmacologically."
  },
  {
    "id": "img-005",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 88 (Pharmacologic stress agents)",
    "question": "For a patient who cannot exercise, cardiac stress testing can instead be performed:",
    "options": [
      "Pharmacologically, using agents such as regadenoson, dipyridamole, or dobutamine",
      "Only by having them run on a treadmill",
      "By coronary calcium scoring during exercise",
      "Not at all; stress testing requires exercise"
    ],
    "answer": 0,
    "explanation": "When a patient cannot exercise, pharmacologic stress agents (regadenoson, dipyridamole, dobutamine) are used, most often with a SPECT nuclear or stress echo protocol.",
    "why": [
      "Correct. Pharmacologic agents allow stress testing without exercise.",
      "Requiring a treadmill would exclude patients who cannot exercise.",
      "Coronary calcium scoring is not a stress test.",
      "Stress testing can be done pharmacologically when exercise is not possible."
    ]
  },
  {
    "id": "img-006",
    "type": "multi",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Stress Testing",
    "source": "Cardiac Imaging, slide 88 (Pharmacologic stress agents)",
    "question": "Select ALL pharmacologic stress agents.",
    "options": [
      "Regadenoson",
      "Dipyridamole",
      "Dobutamine",
      "Aspirin"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pharmacologic stress agents include regadenoson, dipyridamole, and dobutamine. Aspirin is an antiplatelet agent, not a stress agent.",
    "why": [
      "Correct. Regadenoson is a pharmacologic stress agent.",
      "Correct. Dipyridamole is a pharmacologic stress agent.",
      "Correct. Dobutamine is a pharmacologic stress agent.",
      "Incorrect. Aspirin is an antiplatelet, not a stress agent."
    ]
  },
  {
    "id": "img-007",
    "type": "matching",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Artery Visualization",
    "source": "Cardiac Imaging, slide 89 (Modalities for Coronary Artery Visualization)",
    "question": "Match each modality to its primary use.",
    "pairs": [
      {
        "left": "Coronary angiogram (cardiac catheterization)",
        "right": "Visualize coronary anatomy and stenosis; stent and balloon procedures; measure valve gradients",
        "why": "The coronary angiogram visualizes coronary anatomy and patency, allows stenting and balloon procedures, and measures valve gradients."
      },
      {
        "left": "Coronary CT angiography (CCTA, CT with contrast)",
        "right": "Evaluate low-to-intermediate-risk chest pain and graft patency; shows hard and soft plaque",
        "why": "CCTA evaluates stable or acute chest pain in low-to-intermediate-risk patients, assesses graft patency, and visualizes both hard and soft plaque."
      },
      {
        "left": "Coronary calcium score (CAC)",
        "right": "Screening of asymptomatic, moderate-risk patients",
        "why": "The coronary calcium score screens asymptomatic, moderate-risk patients for calcified plaque."
      },
      {
        "left": "Cardiac MR",
        "right": "Evaluate cardiac function and cardiomyopathies such as amyloidosis",
        "why": "Cardiac MR is better for evaluating cardiac function and cardiomyopathies like amyloidosis."
      }
    ],
    "explanation": "Coronary angiogram: visualize coronary anatomy and stenosis, stent and balloon procedures, measure valve gradients. CCTA (CT with contrast): low-to-intermediate-risk chest pain, graft patency, hard and soft plaque. Coronary calcium score: asymptomatic moderate-risk screening. Cardiac MR: cardiac function and cardiomyopathies such as amyloidosis."
  },
  {
    "id": "img-008",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Artery Visualization",
    "source": "Cardiac Imaging, slide 89 (CCTA vs CAC)",
    "question": "Compared with a coronary calcium score, coronary CT angiography (CCTA) has the advantage of:",
    "options": [
      "Visualizing both hard (calcified) and soft (non-calcified) plaque",
      "Requiring no contrast",
      "Showing only calcified plaque",
      "Being an invasive catheter procedure"
    ],
    "answer": 0,
    "explanation": "CCTA (cardiac CT with contrast) visualizes both hard and soft plaque in the coronary arteries, whereas the coronary calcium score detects only calcified plaque and misses more dangerous soft plaque.",
    "why": [
      "Correct. CCTA shows both hard and soft plaque.",
      "CCTA uses contrast; the non-contrast study is the calcium score.",
      "Showing only calcified plaque describes the calcium score, not CCTA.",
      "CCTA is a noninvasive CT, not a catheter procedure."
    ]
  },
  {
    "id": "img-009",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Artery Visualization",
    "source": "Cardiac Imaging, slide 89 (Coronary Artery CT Calcium Scoring)",
    "question": "The coronary artery calcium (CAC) score is primarily used for:",
    "options": [
      "Screening asymptomatic, moderate-risk patients",
      "Guiding stent placement during PCI",
      "Evaluating cardiomyopathies like amyloidosis",
      "Measuring valve gradients"
    ],
    "answer": 0,
    "explanation": "The coronary calcium score screens asymptomatic, moderate-risk patients for calcified coronary plaque to refine risk. It is not used for procedural guidance, cardiomyopathy evaluation, or valve gradients.",
    "why": [
      "Correct. CAC is a screening tool for asymptomatic, moderate-risk patients.",
      "Guiding stent placement is a role for IVUS or angiography, not CAC.",
      "Cardiomyopathy evaluation like amyloidosis is a cardiac MR role.",
      "Valve gradients are measured by echo or catheterization, not CAC."
    ]
  },
  {
    "id": "img-010",
    "type": "mcq",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Coronary Artery Visualization",
    "source": "Cardiac Imaging, slide 89 (Intravascular Ultrasound)",
    "question": "Intravascular ultrasound (IVUS) is primarily used for:",
    "options": [
      "Complex high-risk PCI, including stent placement and checking patency",
      "Screening asymptomatic patients for calcified plaque",
      "Evaluating cardiomyopathies noninvasively",
      "Producing a chest radiograph"
    ],
    "answer": 0,
    "explanation": "IVUS is used in complex high-risk PCI for stent placement and patency assessment, and assists with ablation, pacing wire placement, transcatheter valve replacement, and evaluating aneurysms or dissection.",
    "why": [
      "Correct. IVUS supports complex high-risk PCI and stent assessment.",
      "Asymptomatic screening for calcified plaque is the coronary calcium score.",
      "Noninvasive cardiomyopathy evaluation is a cardiac MR role.",
      "IVUS is an intravascular ultrasound, not a radiograph."
    ]
  },
  {
    "id": "img-011",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 90 (84-year-old with suspected mitral stenosis)",
    "question": "An 84-year-old with prior rheumatic fever and an audible murmur is suspected of mitral valve stenosis. She has severe COPD and a BMI of 38. Which study best visualizes the anatomy and hemodynamics of her mitral valve?",
    "options": [
      "Transesophageal echocardiogram",
      "Coronary calcium test",
      "Transthoracic echocardiogram",
      "MUGA scan",
      "Cardiac MRI"
    ],
    "answer": 0,
    "explanation": "Severe COPD and a high BMI degrade transthoracic windows. A transesophageal echocardiogram best visualizes the mitral valve anatomy and hemodynamics because the probe images directly behind the heart, giving high resolution of the left atrium and mitral valve.",
    "why": [
      "Correct. TEE gives high-resolution mitral valve imaging despite poor transthoracic windows.",
      "A coronary calcium test assesses coronary plaque, not the mitral valve.",
      "TTE image quality is limited here by COPD and body habitus.",
      "A MUGA scan measures ejection fraction, not valve anatomy.",
      "Cardiac MRI is better for function and cardiomyopathies than for detailed mitral valve hemodynamics."
    ]
  },
  {
    "id": "img-012",
    "type": "vignette",
    "class": "Cardiology",
    "lecture": "Cardiac Imaging",
    "section": "Imaging Case Application",
    "source": "Cardiac Imaging, slide 92 (67-year-old preoperative cardiac assessment)",
    "question": "For a preoperative cardiac assessment before elective hip replacement, a 67-year-old man with a 45 pack-year history cannot ambulate more than half a block due to hip pain. Which screening study best determines whether he has critical coronary stenosis?",
    "options": [
      "Pharmacologic SPECT nuclear stress test",
      "Exercise treadmill stress test",
      "CT scan of the chest with and without contrast",
      "Stress echocardiogram",
      "Coronary angiography"
    ],
    "answer": 0,
    "explanation": "Because he cannot exercise adequately, an exercise-based test is not feasible. A pharmacologic SPECT nuclear stress test assesses myocardial perfusion without requiring exercise, making it the most appropriate noninvasive screen here.",
    "why": [
      "Correct. Pharmacologic SPECT stress testing works when the patient cannot exercise.",
      "He cannot ambulate enough for an exercise treadmill test.",
      "A chest CT does not screen for functional coronary ischemia.",
      "A stress echo would still require adequate stress; a pharmacologic protocol is needed, and perfusion imaging is the best noninvasive screen here.",
      "Coronary angiography is invasive and not the initial noninvasive screening study."
    ]
  }
];

if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; }
