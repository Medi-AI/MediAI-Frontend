const Symptoms = [
  {
    name: "itching",
    description:
      "An uncomfortable sensation on the skin that provokes the urge to scratch",
    synonyms: [
      "pruritus",
      "itchiness",
      "skin irritation",
      "tingling sensation",
    ],
  },
  {
    name: "skin_rash",
    description: "A change of the skin which affects its appearance or texture",
    synonyms: ["dermatitis", "hives", "eczema", "pimples"],
  },
  {
    name: "nodal_skin_eruptions",
    description:
      "Small, raised, solid or fluid-filled bumps that appear on the skin",
    synonyms: ["skin lesions", "blisters", "pustules", "rashes"],
  },
  {
    name: "continuous_sneezing",
    description:
      "Uncontrollable and repetitive expulsion of air from the nose and mouth",
    synonyms: [
      "prolonged sneezing",
      "repetitive sneezing",
      "incessant sneezing",
      "endless sneezing",
    ],
  },
  {
    name: "shivering",
    description:
      "Involuntary contractions of the muscles, often accompanied by coldness or trembling",
    synonyms: ["trembling", "shaking", "quivering", "chills"],
  },
  {
    name: "chills",
    description:
      "A sudden feeling of cold accompanied by shivering or trembling",
    synonyms: ["shuddering", "shivering", "goosebumps", "rigors"],
  },
  {
    name: "joint_pain",
    description: "A discomfort or soreness in any of the joints of the body",
    synonyms: [
      "arthralgia",
      "joint stiffness",
      "joint inflammation",
      "aching joints",
    ],
  },
  {
    name: "stomach_pain",
    description:
      "An uncomfortable sensation in the abdomen that ranges from mild to severe",
    synonyms: ["abdominal pain", "bellyache", "stomachache", "gastric pain"],
  },
  {
    name: "acidity",
    description:
      "A burning sensation in the chest that occurs when stomach acid backs up into the esophagus",
    synonyms: ["heartburn", "acid reflux", "indigestion", "sour stomach"],
  },
  {
    name: "ulcers_on_tongue",
    description:
      "Sores or lesions that develop on the tongue, often causing pain or discomfort",
    synonyms: [
      "canker sores",
      "mouth ulcers",
      "oral lesions",
      "tongue blisters",
    ],
  },
  {
    name: "muscle_wasting",
    description:
      "A decrease in muscle mass that can be caused by a variety of factors",
    synonyms: [
      "muscle atrophy",
      "muscle degeneration",
      "muscle loss",
      "muscle weakness",
    ],
  },
  {
    name: "vomiting",
    description:
      "The forceful expulsion of stomach contents through the mouth and sometimes the nose",
    synonyms: ["throwing up", "regurgitation", "emesis", "nausea"],
  },
  {
    name: "burning_micturition",
    description:
      "A painful or burning sensation during urination that can be caused by infection or inflammation",
    synonyms: [
      "dysuria",
      "painful urination",
      "urinary burning",
      "urethral discomfort",
    ],
  },
  {
    name: "burning_micturition",
    description:
      " A burning or painful sensation during urination, often caused by urinary tract infections or other underlying health conditions.",
    synonyms: ["Dysuria", "Painful urination", "Painful urination syndrome"],
  },
  {
    name: "spotting_ urination",
    description:
      "The presence of blood or discoloration in urine, which can be a sign of underlying health conditions.",
    synonyms: ["Hematuria", "Blood in urine", "Red urine"],
  },
  {
    name: "fatigue",
    description:
      " A feeling of tiredness or exhaustion, often caused by a range of factors including illness, stress, and poor sleep.",
    synonyms: ["Tiredness", "Exhaustion", "Weariness", "Lethargy"],
  },
  {
    name: "weight_gain",
    description:
      " An increase in body weight, often caused by overeating, lack of exercise, or underlying health conditions.",
    synonyms: [
      "Obesity",
      "Overweight",
      "Excessive weight",
      "Unintentional weight gain",
    ],
  },
  {
    name: "anxiety",
    description:
      "A feeling of worry, nervousness or unease, often caused by a range of factors including stress, trauma, and underlying health conditions.",
    synonyms: ["Nervousness", "Worry", "Panic", "Fear", "Apprehension"],
  },
  {
    name: "cold_hands_and_feets",
    description:
      "A sensation of coldness in the hands and feet, often caused by poor circulation or underlying health conditions.",
    synonyms: [
      "Raynaud's disease",
      "Poor circulation",
      "Cold extremities",
      "Numbness and tingling in hands and feet",
    ],
  },
  {
    name: "mood_swings",
    description:
      "A rapid and often unpredictable shift in mood, often caused by hormonal changes, stress, or underlying health conditions.",
    synonyms: [
      "Emotional instability",
      "Bipolar disorder",
      "Erratic mood",
      "Unpredictable emotions",
    ],
  },
  {
    name: "weight_loss",
    description: "Unintentional or significant reduction in body weight",
    synonyms: [
      "High blood sugar",
      "Low blood sugar",
      "Hyperglycemia",
      "Hypoglycemia",
      "Diabetes",
    ],
  },
  {
    name: "restlessness",
    description: " Unintentional or significant reduction in body weight",
    synonyms: [
      "Agitation",
      "Fidgeting",
      "Nervousness",
      "Anxiety",
      "Hyperactivity",
    ],
  },
  {
    name: "lethargy",
    description: " Fatigue, sluggishness, lack of energy.",
    synonyms: ["Fatigue", "Drowsiness", "Tiredness", "Exhaustion", "Languor"],
  },
  {
    name: "patches_in_throat",
    description: "Sore throat, pharyngitis, inflammation in the throat",
    synonyms: [
      "throat inflammation",
      "pharynx soreness",
      "painful throat",
      "swollen throat",
    ],
  },
  {
    name: "irregular_sugar_level",
    description: "Blood sugar fluctuations, unstable glucose levels.",
    synonyms: [
      "unsteady blood sugar",
      "inconsistent glucose levels",
      "fluctuating blood sugar",
      "unpredictable sugar levels",
    ],
  },
  {
    name: "cough",
    description: "Respiratory distress, hacking, throat irritation.",
    synonyms: [
      "persistent cough",
      "throat irritation",
      "bronchial cough",
      "dry cough",
    ],
  },
  {
    name: "high_fever",
    description: "Elevated body temperature, feverishness, hyperthermia.",
    synonyms: [
      "severe fever",
      "high temperature",
      "feverish state",
      "hyperpyrexia",
    ],
  },
  {
    name: "sunken_eyes",
    description: " Hollowed eyes, eye sockets appear deep, dehydration sign.",
    synonyms: [
      "hollowed-out eyes",
      "deep-set eyes",
      "sunken sockets",
      "dehydration eyes",
    ],
  },
  {
    name: "breathlessness",
    description:
      "Shortness of breath, difficulty breathing, labored respiration.",
    synonyms: ["wheezing", "panting", "labored breathing", "dyspnea"],
  },
  {
    name: "sweating",
    description: "Perspiration, sweating profusely, excessive sweating.",
    synonyms: [
      "heavy perspiration",
      "sweating profusely",
      "sweating buckets",
      "excessive sweating",
    ],
  },
  {
    name: "dehydration",
    description: " Excessive fluid loss, lack of hydration, severe thirst.",
    synonyms: [
      "extreme thirst",
      "severe dehydration",
      "fluid depletion",
      "water loss",
    ],
  },
  {
    name: "indigestion",
    description: " Upset stomach, dyspepsia, digestive discomfort.",
    synonyms: [
      "stomach discomfort",
      "dyspeptic symptoms",
      "digestive distress",
      "upset digestion",
    ],
  },
  {
    name: "headache",
    description: "Cephalalgia, head pain, pounding sensation in the head.",
    synonyms: ["throbbing head", "cephalalgia", "head discomfort", "migraine"],
  },
  {
    name: "yellowish_skin",
    description: "Jaundice, skin discoloration, yellow tint on the skin.",
    synonyms: [
      "yellowed skin",
      "jaundiced skin",
      "skin discoloration",
      "yellow skin",
    ],
  },
  {
    name: "dark_urine",
    description: " Smelly urine, concentrated urine, decreased urine output.",
    synonyms: [
      "strong urine odor",
      "concentrated urine",
      "reduced urine output",
      "dark-colored urine",
    ],
  },
  {
    name: "nausea",
    description: "Feeling of sickness, queasiness, upset stomach.",
    synonyms: [
      "queasy feeling",
      "stomach sickness",
      "nauseated sensation",
      "upset stomach",
    ],
  },
  {
    name: "loss_of_appetite",
    description: " Anorexia, decreased appetite, lack of hunger.",
    synonyms: [
      "anorexia nervosa",
      "reduced appetite",
      "lack of craving",
      "decreased hunger",
    ],
  },
  {
    name: "pain_behind_the_eyes",
    description: "Eye pain, ocular discomfort, headache in the eye region.",
    synonyms: [
      "eye strain",
      "ocular ache",
      "headache behind the eyes",
      "eye pressure",
    ],
  },
  {
    name: "back_pain",
    description: " Spinal pain, lower backache, pain in the lumbar region.",
    synonyms: ["lumbago", "backache", "spine discomfort", "lower dorsal pain"],
  },
  {
    name: "constipation",
    description:
      " Difficulty in bowel movement, hard stool, infrequent defecation.",
    synonyms: [
      "stool blockage",
      "bowel obstruction",
      "irregularity",
      "fecal impaction",
    ],
  },
  {
    name: "abdominal_pain",
    description:
      "A pain or discomfort in the abdominal area, often caused by digestive issues, infection, or inflammation.",
    synonyms: [
      "belly ache",
      "stomach discomfort",
      "gut pain",
      "abdominal cramps",
    ],
  },
  {
    name: "diarrhoea",
    description:
      "The frequent passing of loose or watery stools, often caused by infection, food intolerances or other underlying health conditions.",
    synonyms: [
      "loose bowel movements",
      "watery feces",
      "bowel urgency",
      "diarrhea",
    ],
  },
  {
    name: "mild_fever",
    description:
      " A slightly elevated body temperature, often caused by viral or bacterial infections.",
    synonyms: [
      "low-grade fever",
      "subfebrile",
      "slight temperature rise",
      "febricula",
    ],
  },
  {
    name: "yellow_urine",
    description:
      "The presence of yellow-colored urine, which can be normal or a sign of dehydration, liver or kidney problems.",
    synonyms: [
      "amber urine",
      "yellowish pee",
      "urine discoloration",
      "dark yellow urine",
    ],
  },
  {
    name: "yellowing_of_eyes",
    description:
      "The yellowing of the whites of the eyes, which can be a sign of liver or gallbladder problems.",
    synonyms: ["jaundice", "icterus", "yellow eyes", "scleral icterus"],
  },
  {
    name: "acute_liver_failure",
    description:
      "A sudden and severe deterioration of liver function, often caused by viral hepatitis, drug overdose or other underlying health conditions.",
    synonyms: [
      "fulminant hepatic failure",
      "severe liver dysfunction",
      "rapid liver deterioration",
      "acute hepatic collapse",
    ],
  },
  {
    name: "fluid_overload",
    description:
      "The accumulation of excess fluids in the body, often caused by heart or kidney failure or other underlying health conditions.",
    synonyms: [
      "water retention",
      "edema",
      "swelling due to excess fluid",
      "hyperlactation",
    ],
  },
  {
    name: "swelling_of_stomach",
    description:
      "The abnormal swelling or enlargement of the abdominal area, often caused by fluid accumulation, pregnancy or underlying health conditions.",
    synonyms: [
      "bloating",
      "abdominal distension",
      "swollen belly",
      "enlarged tummy",
    ],
  },
  {
    name: "swelled_lymph_nodes",
    description:
      "The enlargement of lymph nodes, often caused by infection or underlying health conditions.",
    synonyms: [
      "swollen lymph glands",
      "lymph node enlargement",
      "lymphadenopathy",
      "lymph node swelling",
    ],
  },
  {
    name: "malaise",
    description:
      "A feeling of discomfort or unease, often accompanied by fatigue and other symptoms, often caused by illness, infection or inflammation.",
    synonyms: ["unease", "discomfort", "weakness", "sickness feeling"],
  },
  {
    name: "blurred_and_distorted_vision",
    description:
      "The impairment of visual clarity and focus, often caused by a range of factors including eye strain, injury or underlying health conditions.",
    synonyms: [
      "distorted eyesight",
      "blurred vision",
      "fuzzy eyesight",
      "visual impairment",
    ],
  },
  {
    name: "phlegm",
    description:
      "The mucus that is produced by the respiratory system, often caused by inflammation or infection.",
    synonyms: [
      "sputum",
      "mucous secretion",
      "expectoration",
      "mucus discharge",
    ],
  },
  {
    name: "throat_irritation",
    description:
      "A scratchy or sore feeling in the throat, often caused by allergies, infection or other underlying health conditions.",
    synonyms: [
      "sore throat",
      "itchy throat",
      "scratchy throat",
      "throat discomfort",
    ],
  },
  {
    name: "redness_of_eyes",
    description:
      "The redness or inflammation of the eyes, often caused by infection, allergies, or other underlying health conditions.",
    synonyms: [
      "eye inflammation",
      "bloodshot eyes",
      "red eyes",
      "ocular irritation",
    ],
  },
  {
    name: "sinus_pressure",
    description:
      "A feeling of pressure or pain in the sinuses, often caused by inflammation or infection.",
    synonyms: [
      "sinus headache",
      "sinus discomfort",
      "sinus pain",
      "sinus congestion",
    ],
  },
  {
    name: "runny_nose",
    description:
      " The excessive production of nasal mucus, often caused by allergies, infection, or other underlying health conditions.",
    synonyms: ["nasal discharge", "dripping nose", "watery nose", "rhinorrhea"],
  },
  {
    name: "congestion",
    description:
      "The blockage or narrowing of nasal passages, often caused by inflammation or infection.",
    synonyms: [
      "nasal obstruction",
      "stuffiness",
      "blocked nose",
      "nasal congestion",
    ],
  },
  {
    name: "chest_pain",
    description:
      "A discomfort or pain in the chest area, often caused by heart or lung issues, injury or other underlying health conditions",
    synonyms: [
      "thoracic discomfort",
      "cardiac pain",
      "chest tightness",
      "sternalgia",
    ],
  },
  {
    name: "weakness_in_limbs",
    description:
      "A loss of strength or power in the arms or legs, often caused by injury, nerve damage, or underlying health conditions.",
    synonyms: [
      "muscle fatigue",
      "limb asthenia",
      "motor weakness",
      "paralysis",
    ],
  },
  {
    name: "fast_heart_rate",
    description:
      "An increased heart rate or palpitations, often caused by stress, anxiety, or underlying health conditions.",
    synonyms: [
      "tachycardia",
      "rapid heartbeat",
      "heart palpitations",
      "fluttering heart",
    ],
  },
  {
    name: "pain_during_bowel_movements",
    description:
      "A pain or discomfort during bowel movements, often caused by inflammation, infection, or other underlying health conditions.",
    synonyms: ["rectal pain", "anal discomfort", "bowel cramps", "dyschezia"],
  },
  {
    name: "pain_in_anal_region",
    description:
      "A discomfort or pain in the anus, often caused by hemorrhoids, anal fissures, or other underlying health conditions.",
    synonyms: ["anal pain", "rectal discomfort", "proctalgia", "perianal pain"],
  },
  {
    name: "bloody_stool",
    description:
      "The presence of blood in the stool, often caused by digestive issues or underlying health conditions.",
    synonyms: ["hematochezia", "bloody feces", "rectal bleeding", "melena"],
  },
  {
    name: "irritation_in_anus",
    description:
      "A feeling of discomfort or itching in the anal area, often caused by skin irritation, infection, or other underlying health conditions.",
    synonyms: [
      "pruritus ani",
      "anal itching",
      "perianal irritation",
      "anal discomfort",
    ],
  },
  {
    name: "neck_pain",
    description:
      "A discomfort or pain in the neck area, often caused by poor posture, injury, or underlying health conditions.",
    synonyms: [
      "cervical pain",
      "neck stiffness",
      "cervicalgia",
      "trapezius pain",
    ],
  },
  {
    name: "dizziness",
    description:
      "A feeling of lightheadedness or unsteadiness, often caused by inner ear problems, low blood pressure, or other underlying health conditions.",
    synonyms: ["vertigo", "giddiness", "disequilibrium", "spinning sensation"],
  },
  {
    name: "cramps",
    description:
      "A sudden and involuntary contraction of muscles, often caused by dehydration, electrolyte imbalances, or other underlying health conditions.",
    synonyms: ["spasms", "muscle cramps", "charley horse", "tetany"],
  },
  {
    name: "bruising",
    description:
      "The appearance of discoloration or swelling on the skin caused by injury, bleeding disorders, or other underlying health conditions.",
    synonyms: ["contusion", "ecchymosis", "hematoma", "black-and-blue mark"],
  },
  {
    name: "obesity",
    description:
      "A medical condition characterized by an excessive accumulation of body fat, often resulting in health problems such as heart disease, diabetes, and high blood pressure.",
    synonyms: ["overweight", "corpulence", "chubbiness", "plumpness"],
  },
  {
    name: "swollen_legs",
    description:
      "An abnormal enlargement of the legs caused by a buildup of fluid in the tissues, often resulting from an underlying medical condition such as heart failure or kidney disease.",
    synonyms: [
      "edema in legs",
      "swollen ankles",
      "puffy legs",
      "fluid retention in legs",
    ],
  },
  {
    name: "swollen_blood_vessels",
    description:
      "An abnormal enlargement of blood vessels, often resulting from an underlying medical condition such as varicose veins or inflammation.",
    synonyms: [
      "dilated blood vessels",
      "enlarged veins",
      "bulging vessels",
      "swollen veins",
    ],
  },
  {
    name: "puffy_face_and_eyes",
    description:
      "An abnormal swelling of the face and eyes caused by a buildup of fluid in the tissues, often resulting from an underlying medical condition such as kidney disease or allergies.",
    synonyms: [
      "facial puffiness",
      "puffy cheeks and eyes",
      "swollen face and eyes",
      "fluid retention in face",
    ],
  },
  {
    name: "enlarged_thyroid",
    description:
      "A medical condition characterized by an abnormal enlargement of the thyroid gland in the neck, often resulting in symptoms such as difficulty swallowing, hoarseness, and fatigue.",
    synonyms: [
      "goiter",
      "thyroid swelling",
      "thyroid enlargement",
      "thyroid lump",
    ],
  },
  {
    name: "brittle_nails",
    description:
      "A medical condition characterized by weak, easily breakable nails that may also appear dry or discolored, often resulting from an underlying medical condition such as a vitamin deficiency or thyroid disease.",
    synonyms: [
      "fragile nails",
      "crumbling nails",
      "splitting nails",
      "weak nails",
    ],
  },
  {
    name: "swollen_extremeties",
    description:
      "An abnormal enlargement of the arms, legs, hands, or feet caused by a buildup of fluid in the tissues, often resulting from an underlying medical condition such as heart failure or kidney disease.",
    synonyms: [
      "edema in extremities",
      "swollen limbs",
      "puffy arms and legs",
      "fluid retention in hands and feet",
    ],
  },
  {
    name: "excessive_hunger",
    description:
      "A persistent feeling of hunger that is not relieved by eating, often resulting from an underlying medical condition such as diabetes or hyperthyroidism.",
    synonyms: [
      "increased appetite",
      "uncontrollable hunger",
      "ravenous appetite",
      "constant craving for food",
    ],
  },
  {
    name: "extra_marital_contacts",
    description:
      "Having sexual relations outside of a committed relationship or marriage.",
    synonyms: ["infidelity", "cheating", "adultery", "extramarital affairs"],
  },
  {
    name: "drying_and_tingling_lips",
    description:
      "A sensation of dryness and tingling in the lips, often resulting from exposure to harsh weather conditions or dehydration.",
    synonyms: [
      "dry and prickly lips",
      "tingling and parched lips",
      "chapped and tingly lips",
      "dry and itchy lips",
    ],
  },
  {
    name: "slurred_speech",
    description:
      "Difficulty pronouncing words or speaking coherently, often caused by neurological issues or intoxication.",
    synonyms: [
      "impaired speech",
      "mumbled speech",
      "garbled speech",
      "incoherent speech",
    ],
  },
  {
    name: "knee_pain",
    description:
      "Pain or discomfort in the knee joint, often caused by injury, overuse, or underlying health conditions.",
    synonyms: [
      "knee discomfort",
      "knee soreness",
      "knee ache",
      "knee throbbing",
    ],
  },
  {
    name: "hip_joint_pain",
    description:
      "Pain or discomfort in the hip joint, often caused by injury, arthritis, or underlying health conditions.",
    synonyms: ["hip discomfort", "hip soreness", "hip ache", "hip throbbing"],
  },
  {
    name: "muscle_weakness",
    description:
      "A loss of strength or power in the muscles, often caused by injury, nerve damage, or underlying health conditions.",
    synonyms: [
      "muscle fatigue",
      "muscle tiredness",
      "muscle lethargy",
      "muscle debility",
    ],
  },
  {
    name: "stiff_neck",
    description:
      "A feeling of stiffness or soreness in the neck, often caused by injury, poor posture, or underlying health conditions.",
    synonyms: [
      "neck stiffness",
      "neck soreness",
      "neck rigidity",
      "neck immobility",
    ],
  },
  {
    name: "swelling_joints",
    description:
      "Swelling or inflammation in the joints, often caused by injury, arthritis, or underlying health conditions.",
    synonyms: [
      "joint swelling",
      "joint inflammation",
      "joint edema",
      "joint puffiness",
    ],
  },
  {
    name: "movement_stiffness",
    description:
      "Difficulty moving or performing activities due to stiffness or rigidity in the muscles, often caused by neurological issues or underlying health conditions.",
    synonyms: [
      "rigid movement",
      "stiff movement",
      "inflexible movement",
      "resistant movement",
    ],
  },
  {
    name: "spinning_movements",
    description:
      "A sensation of dizziness or spinning, often caused by inner ear issues, low blood pressure, or underlying health conditions.",
    synonyms: [
      "rotational movements",
      "vertigo",
      "dizziness",
      "whirling sensations",
    ],
  },
  {
    name: "loss_of_balance",
    description:
      "Difficulty maintaining balance while standing or moving, often caused by neurological issues, inner ear problems, or underlying health conditions.",
    synonyms: ["imbalance", "unsteadiness", "instability", "wobbliness"],
  },
  {
    name: "unsteadiness",
    description:
      "A lack of stability or balance while standing or moving, often caused by neurological issues, inner ear problems, or underlying health conditions.",
    synonyms: ["instability", "unbalance", "wobbliness", "shakiness"],
  },
  {
    name: "weakness_of_one_body_side",
    description:
      "A loss of strength or power on one side of the body, often caused by stroke, injury, or underlying health conditions.",
    synonyms: [
      "hemiparesis",
      "hemiplegia",
      "one-sided weakness",
      "asymmetrical weakness",
    ],
  },
  {
    name: "loss_of_smell",
    description:
      "A condition in which a person experiences a partial or complete loss of their sense of smell.",
    synonyms: [
      "anosmia",
      "olfactory dysfunction",
      "smell impairment",
      "hyposmia",
    ],
  },
  {
    name: "bladder_discomfort",
    description: "A painful or uncomfortable sensation while urinating.",
    synonyms: [
      "dysuria",
      "painful urination",
      "urinary burning",
      "urination discomfort",
    ],
  },
  {
    name: "foul_smell_of_urine",
    description:
      "A condition in which urine has an unpleasant or noxious odor.",
    synonyms: [
      "malodorous urine",
      "urine with unpleasant odor",
      "urine with noxious smell",
      "fetid urine",
    ],
  },
  {
    name: "continuous_feel_of_urine",
    description:
      "A sensation of needing to urinate frequently, even when the bladder is not full.",
    synonyms: [
      "urinary urgency",
      "frequent urination",
      "overactive bladder",
      "urinary frequency",
    ],
  },
  {
    name: "passage_of_gases",
    description:
      "The act of expelling gas from the digestive tract through the rectum.",
    synonyms: ["flatulence", "passing wind", "intestinal gas", "belching"],
  },
  {
    name: "internal_itching",
    description:
      "An uncomfortable sensation of itching or irritation inside the body.",
    synonyms: [
      "pruritus internus",
      "itchy sensation within the body",
      "internal irritation",
      "itchy internal feeling",
    ],
  },
  {
    name: "toxic_look_(typhos)",
    description:
      "A serious and potentially life-threatening complication of certain bacterial infections, characterized by high fever, abdominal pain, and a rash.",
    synonyms: [
      "typhoid fever",
      "typhus",
      "bacterial infection",
      "salmonella infection",
    ],
  },
  {
    name: "depression",
    description:
      "A mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest in activities.",
    synonyms: [
      "major depressive disorder",
      "clinical depression",
      "mood disorder",
      "persistent sadness",
    ],
  },
  {
    name: "irritability",
    description: "A state of feeling easily annoyed or provoked.",
    synonyms: ["agitation", "frustration", "short-temperedness", "edginess"],
  },
  {
    name: "muscle_pain",
    description: "Discomfort or pain experienced in the muscles of the body.",
    synonyms: ["myalgia", "muscle ache", "sore muscles", "muscle soreness"],
  },
  {
    name: "altered_sensorium",
    description:
      "A change in a person's mental state, characterized by confusion, disorientation, or an altered level of consciousness.",
    synonyms: [
      "confused mental state",
      "disoriented consciousness",
      "altered mental status",
      "mental confusion",
    ],
  },
  {
    name: "red_spots_over_body",
    description:
      "Red spots over the body refer to the appearance of red, flat or raised spots or dots on the skin that may or may not be itchy. These spots can be caused by a variety of conditions such as allergic reactions, infections, or skin disorders.",
    synonyms: ["red dots on skin", "skin rash", "skin bumps", "skin lesions"],
  },
  {
    name: "belly_pain",
    description:
      "Belly pain, also known as abdominal pain, is discomfort or pain in the area between the chest and the pelvis. Belly pain can be caused by a variety of conditions such as indigestion, inflammation, infection, or injury.",
    synonyms: ["abdominal pain", "stomach ache", "tummy ache", "bellyache"],
  },
  {
    name: "abnormal_menstruation",
    description:
      "Abnormal menstruation refers to any changes in a woman's menstrual cycle such as heavy bleeding, irregular periods, or missed periods. These changes can be caused by hormonal imbalances, pregnancy, or underlying medical conditions.",
    synonyms: [
      "irregular periods",
      "heavy menstrual bleeding",
      "missed periods",
      "abnormal bleeding",
    ],
  },
  {
    name: "dischromic _patches",
    description:
      "Dischromic patches refer to changes in the color of the skin such as darkening or lightening in certain areas. These patches can be caused by a variety of conditions such as skin infections, hormonal imbalances, or exposure to certain medications or chemicals.",
    synonyms: [
      "skin discoloration",
      "uneven skin tone",
      "hyperpigmentation",
      "hypopigmentation",
    ],
  },
  {
    name: "watering_from_eyes",
    description:
      "Watering from the eyes, also known as tearing or epiphora, refers to the excessive production of tears that overflow onto the face. This can be caused by a variety of conditions such as allergies, infections, or eye disorders.",
    synonyms: ["tearing", "excessive tearing", "watery eyes", "runny eyes"],
  },
  {
    name: "increased_appetite",
    description:
      "Increased appetite, also known as polyphagia, refers to an excessive or abnormal craving for food. This can be caused by a variety of conditions such as diabetes, thyroid disorders, or mental health conditions such as depression or anxiety.",
    synonyms: [
      "excessive hunger",
      "overeating",
      "food cravings",
      "insatiable appetite",
    ],
  },
  {
    name: "polyuria",
    description:
      "Polyuria refers to an excessive production of urine, resulting in frequent urination and an increased volume of urine. This can be caused by a variety of conditions such as diabetes, urinary tract infections, or kidney disorders.",
    synonyms: [
      "frequent urination",
      "excessive urination",
      "urinary frequency",
      "polydipsia",
    ],
  },
  {
    name: "family_history",
    description:
      "Family history refers to the medical history of an individual's family members, including parents, siblings, and grandparents. This information is important in assessing an individual's risk for certain medical conditions and can help guide screening and prevention efforts.",
    synonyms: [
      "genetic history",
      "hereditary background",
      "family medical background",
      "family health history",
    ],
  },
  {
    name: "mucoid_sputum",
    description:
      "Mucoid sputum is a type of sputum that is thick and viscous, often with a white or grayish color. It is commonly associated with respiratory infections or conditions such as bronchitis or cystic fibrosis.",
    synonyms: [
      "thick sputum",
      "viscous phlegm",
      "dense mucus",
      "sticky expectoration",
    ],
  },
  {
    name: "rusty_sputum",
    description:
      "Rusty sputum is a type of sputum that has a reddish-brown color, resembling the color of rust. It is commonly associated with pneumonia or other respiratory infections.",
    synonyms: [
      "brownish phlegm",
      "oxidized sputum",
      "iron-colored expectoration",
      "reddish mucus",
    ],
  },
  {
    name: "lack_of_concentration",
    description:
      "Lack of concentration, also known as poor concentration, is a condition in which a person has difficulty focusing or maintaining attention. It can be caused by a variety of factors, including stress, anxiety, fatigue, and certain medical conditions.",
    synonyms: [
      "poor focus",
      "inability to concentrate",
      "distractibility",
      "attention deficit",
    ],
  },
  {
    name: "visual_disturbances",
    description:
      "Visual disturbances refer to a variety of vision problems that can occur, such as blurred vision, double vision, flashes of light, or halos around objects. They can be caused by a range of factors, including eye conditions, neurological disorders, or medication side effects.",
    synonyms: [
      "vision disturbances",
      "sight disruptions",
      "ocular disturbances",
      "visual impairment",
    ],
  },
  {
    name: "receiving_blood_transfusion",
    description:
      "The act of receiving blood from another person as a medical treatment.",
    synonyms: [
      "blood transfusion",
      "blood donation",
      "receiving a blood infusion",
      "blood transferral",
    ],
  },
  {
    name: "receiving_unsterile_injections",
    description:
      "The act of receiving injections that were not properly sterilized, which can result in infections and other complications.",
    synonyms: [
      "receiving unsanitary injections",
      "getting unsterilized shots",
      "unsafe injections",
      "dirty injections",
    ],
  },
  {
    name: "coma",
    description:
      "A state of prolonged unconsciousness where a person cannot be awakened and does not respond to stimuli.",
    synonyms: [
      "unconsciousness",
      "deep sleep",
      "vegetative state",
      "brain death",
    ],
  },
  {
    name: "stomach_bleeding",
    description:
      "The loss of blood from the digestive tract due to injury or other medical conditions.",
    synonyms: [
      "gastrointestinal bleeding",
      "intestinal hemorrhage",
      "digestive system bleeding",
      "upper GI bleeding",
    ],
  },
  {
    name: "distention_of_abdomen",
    description:
      "Abnormal swelling or enlargement of the abdomen, often caused by excess gas or fluid accumulation.",
    synonyms: [
      "abdominal swelling",
      "bloating",
      "enlarged belly",
      "swollen stomach",
    ],
  },
  {
    name: "history_of_alcohol_consumption",
    description: "A person's past record of consuming alcoholic beverages.",
    synonyms: [
      "alcohol use history",
      "drinking habits",
      "past alcohol intake",
      "alcohol consumption record",
    ],
  },
  {
    name: "fluid_overload.1",
    description:
      "Excessive retention of fluids in the body, leading to swelling or edema.",
    synonyms: ["fluid retention", "water retention", "edema", "swelling"],
  },
  {
    name: "blood_in_sputum",
    description: "Coughing up mucus or phlegm that contains blood.",
    synonyms: [
      "hemoptysis",
      "bloody phlegm",
      "coughing up blood",
      "blood-streaked sputum",
    ],
  },
  {
    name: "prominent_veins_on_calf",
    description: "Visible veins on the surface of the calf muscle.",
    synonyms: [
      "bulging veins on calf",
      "enlarged veins on leg",
      "varicose veins on calf",
      "swollen veins on lower leg",
    ],
  },
  {
    name: "palpitations",
    description:
      "Sensations of fast or irregular heartbeats, fluttering, or pounding in the chest.",
    synonyms: [
      "heart racing",
      "skipped beats",
      "heart pounding",
      "irregular heartbeat",
    ],
  },
  {
    name: "painful_walking",
    description:
      "Discomfort or pain while walking or putting weight on the feet.",
    synonyms: [
      "walking pain",
      "foot pain while walking",
      "painful steps",
      "discomfort while walking",
    ],
  },
  {
    name: "pus_filled_pimples",
    description: "Red, inflamed bumps on the skin that are filled with pus.",
    synonyms: ["acne", "zits", "pimples with pus", "infected acne"],
  },
  {
    name: "blackheads",
    description:
      "Small, dark-colored bumps on the skin that are caused by clogged hair follicles.",
    synonyms: [
      "comedones",
      "open comedones",
      "pores clogged with oil",
      "dark spots on skin",
    ],
  },
  {
    name: "scurring",
    description:
      "Thick, flaky patches of skin that may be white or yellowish in color.",
    synonyms: ["dandruff", "flaky skin", "dry scalp", "scaly skin"],
  },
  {
    name: "skin_peeling",
    description:
      "Shedding of the outer layer of skin, often as a result of sunburn, dryness, or other skin irritations.",
    synonyms: [
      "flaking skin",
      "skin shedding",
      "peeling skin",
      "skin sloughing",
    ],
  },
  {
    name: "silver_like_dusting",
    description:
      "Fine, silvery-white scales or flakes on the skin that may be itchy or inflamed.",
    synonyms: [
      "psoriasis",
      "silvery scales on skin",
      "white flakes on skin",
      "skin rash",
    ],
  },
  {
    name: "small_dents_in_nails",
    description: "Small depressions or pits on the nails.",
    synonyms: [
      "nail pitting",
      "nail pockmarks",
      "pitted nails",
      "nail surface irregularities",
    ],
  },
  {
    name: "inflammatory_nails",
    description: "Nails that are inflamed and may be painful or discolored.",
    synonyms: [
      "swollen nails",
      "nail bed inflammation",
      "inflamed nail plates",
      "nail bed redness",
    ],
  },
  {
    name: "blister",
    description:
      "A small pocket of fluid within the upper layers of the skin, typically caused by friction, burning, or other types of damage.",
    synonyms: ["vesicle", "pustule", "bullae", "blistering"],
  },
  {
    name: "red_sore_around_nose",
    description: "A painful, reddened lesion that develops around the nose.",
    synonyms: [
      "nasal sore",
      "nose soreness",
      "redness around the nose",
      "nose infection",
    ],
  },
  {
    name: "yellow_crust_ooze",
    description:
      "Yellow-colored crust or discharge that oozes from a skin lesion.",
    synonyms: [
      "crusty discharge",
      "scabbing",
      "weeping wound",
      "yellow pus discharge",
    ],
  },
];

module.exports = Symptoms;
