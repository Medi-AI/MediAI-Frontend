const Disease = [
  {
    name: "Paroxysmal Positional Vertigo",
    description:
      "Paroxysmal Positional Vertigo (PPV) is a type of vertigo caused by sudden movements of the head that result in a brief, intense sensation of spinning or rotation. It is a common disorder of the inner ear that can affect people of all ages, but is more common in older adults.",
    severity:
      "PPV is usually a benign condition and does not cause serious health problems. However, it can be very unpleasant and disruptive to daily life.",
    symptoms: [
      "Episodes of vertigo triggered by certain head movements",
      "Nausea and vomiting",
      "Loss of balance or unsteadiness",
    ],
    treatment: [
      "Canalith repositioning maneuvers (CRMs) performed by a healthcare provider to move the displaced calcium carbonate crystals back into the correct position in the inner ear",
      "Medications such as anti-nausea drugs or vestibular suppressants may be prescribed in some cases",
    ],
    prevention: [
      "Avoid sudden or jarring head movements that can trigger PPV",
      "Be cautious when changing positions, such as getting up from bed or bending down to pick something up",
    ],
    facts: [
      "PPV is the most common cause of vertigo",
      "PPV can be triggered by head injuries, infections, or degeneration of the inner ear structures",
    ],
  },

  {
    name: "AIDS",
    description:
      "Acquired Immunodeficiency Syndrome (AIDS) is a serious, life-threatening condition caused by the human immunodeficiency virus (HIV). HIV attacks the immune system, making it difficult for the body to fight off infections and diseases.",
    severity: "High",
    symptoms: [
      "Fever",
      "Fatigue",
      "Swollen lymph nodes",
      "Sore throat",
      "Headache",
      "Muscle aches",
      "Joint pain",
      "Skin rash",
      "Mouth ulcers",
      "Night sweats",
    ],
    treatment: [
      "Antiretroviral therapy (ART) to suppress the virus",
      "Treatment of opportunistic infections",
      "Prevention and treatment of complications",
    ],
    prevention: [
      "Practicing safe sex by using condoms",
      "Avoiding sharing needles or syringes",
      "Getting tested for HIV and encouraging others to do so",
      "Taking pre-exposure prophylaxis (PrEP)",
    ],
    facts: [
      "There is no cure for AIDS, but with proper treatment, people living with HIV can manage the virus and live long, healthy lives",
      "HIV can be transmitted through sexual contact, sharing needles, and from mother to child during pregnancy, childbirth, or breastfeeding",
      "AIDS was first recognized as a disease in the United States in 1981",
    ],
  },
  {
    name: "Acne",
    description:
      "Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It can cause pimples, blackheads, and whiteheads, and can affect people of all ages.",
    severity: "Mild to moderate",
    symptoms: [
      "Pimples",
      "Blackheads",
      "Whiteheads",
      "Cysts",
      "Nodules",
      "Painful lesions",
    ],
    treatment: [
      "Topical creams or gels",
      "Oral medications",
      "Laser or light therapy",
      "Chemical peels",
      "Extraction of blackheads or whiteheads",
      "Dietary changes",
    ],
    prevention: [
      "Wash face twice daily",
      "Avoid picking or squeezing pimples",
      "Use oil-free makeup and skin products",
      "Avoid excessive sun exposure",
    ],
    facts: [
      "Acne is not caused by poor hygiene",
      "Stress can make acne worse",
      "Acne may run in families",
    ],
  },
  {
    name: "Alcoholic hepatitis",
    description:
      "Alcoholic hepatitis is a serious liver disease that occurs as a result of excessive alcohol consumption. It can cause inflammation and scarring of the liver, and can lead to liver failure and death.",
    severity: "Severe",
    symptoms: [
      "Fatigue",
      "Loss of appetite",
      "Nausea and vomiting",
      "Abdominal pain and swelling",
      "Jaundice",
      "Confusion or disorientation",
    ],
    treatment: [
      "Stopping alcohol consumption",
      "Medications to reduce liver inflammation",
      "Corticosteroids to reduce inflammation and scarring",
      "Liver transplant in severe cases",
    ],
    prevention: [
      "Limit alcohol consumption",
      "Avoid binge drinking",
      "Get regular liver function tests if you drink heavily",
    ],
    facts: [
      "Alcoholic hepatitis can occur even in people who do not have alcoholism",
      "Women are more susceptible to alcoholic liver disease than men",
    ],
  },
  {
    name: "Allergy",
    description:
      "An allergy is an overreaction of the immune system to a foreign substance that is normally harmless, such as pollen, dust, or certain foods. It can cause a wide range of symptoms, from mild to life-threatening.",
    severity: "Mild to severe",
    symptoms: [
      "Runny or stuffy nose",
      "Sneezing",
      "Itchy or watery eyes",
      "Rash or hives",
      "Swelling of the lips, tongue, or throat",
      "Difficulty breathing",
    ],
    treatment: [
      "Avoiding allergens",
      "Antihistamines",
      "Nasal corticosteroids",
      "Decongestants",
      "Epinephrine in severe cases",
    ],
    prevention: [
      "Identify and avoid allergens",
      "Use air filters in the home",
      "Keep pets out of the bedroom",
      "Wear a mask when doing outdoor activities during high pollen counts",
    ],
    facts: [
      "Allergies are becoming more common",
      "Allergies can develop at any age",
      "Food allergies are more common in children than adults",
    ],
  },
  {
    name: "Arthritis",
    description:
      "Arthritis is a condition that causes inflammation and pain in the joints. There are many types of arthritis, including osteoarthritis, rheumatoid arthritis, and psoriatic arthritis. It can affect people of all ages, but it is more common in older adults.",
    severity:
      "The severity of arthritis can vary depending on the type and the individual. Some people may experience mild symptoms, while others may have more severe pain and joint damage.",
    symptoms: [
      "Joint pain",
      "Stiffness",
      "Swelling",
      "Redness",
      "Limited range of motion",
    ],
    treatment: [
      "Medications, such as pain relievers and anti-inflammatory drugs",
      "Physical therapy",
      "Occupational therapy",
      "Surgery",
    ],
    prevention: [
      "Maintaining a healthy weight",
      "Staying physically active",
      "Avoiding joint injuries",
      "Eating a balanced diet",
    ],
    facts: [
      "Arthritis is one of the most common causes of disability in the United States.",
      "There is no cure for arthritis, but treatment can help manage symptoms and improve quality of life.",
      "Arthritis can affect more than just the joints - it can also cause inflammation in other parts of the body, such as the eyes, skin, and internal organs.",
    ],
  },

  {
    name: "Bronchial Asthma",
    description:
      "Bronchial asthma is a chronic lung disease that inflames and narrows the airways. It can cause wheezing, coughing, chest tightness, and shortness of breath. Asthma affects people of all ages, but it is more common in children.",
    severity:
      "The severity of asthma can vary from person to person. Some people may have mild symptoms that only occur occasionally, while others may have severe asthma that requires frequent medical care.",
    symptoms: [
      "Wheezing",
      "Coughing",
      "Chest tightness",
      "Shortness of breath",
      "Difficulty breathing",
    ],
    treatment: [
      "Inhaled medications, such as bronchodilators and corticosteroids",
      "Oral medications, such as leukotriene modifiers",
      "Immunotherapy",
      "Breathing exercises",
    ],
    prevention: [
      "Avoiding triggers, such as allergens and irritants",
      "Taking medications as prescribed",
      "Monitoring lung function",
      "Having an action plan for asthma attacks",
    ],
    facts: [
      "Asthma affects more than 25 million people in the United States.",
      "Asthma is the leading chronic disease among children.",
      "Asthma can be triggered by a variety of factors, including allergens, irritants, exercise, and emotions.",
    ],
  },

  {
    name: "Cervical spondylosis",
    description:
      "Cervical spondylosis is a condition where the vertebrae, discs, and ligaments in the neck deteriorate due to aging or wear and tear, causing neck pain and stiffness.",
    severity: "Mild to moderate",
    symptoms: [
      "Neck pain and stiffness",
      "Headaches",
      "Muscle weakness",
      "Numbness or tingling in the arms, hands, legs or feet",
      "Loss of balance or coordination",
    ],
    treatment: [
      "Pain relievers",
      "Physical therapy",
      "Neck braces or collars",
      "Surgery in severe cases",
    ],
    prevention: [
      "Maintain good posture",
      "Exercise regularly",
      "Avoid prolonged neck strain",
      "Quit smoking",
    ],
    facts: [
      "Cervical spondylosis is common in people over 50 years old",
      "Women are more prone to develop cervical spondylosis than men",
      "Most people with cervical spondylosis do not require surgery",
    ],
  },
  {
    name: "Chicken pox",
    description:
      "Chickenpox is a highly contagious viral infection caused by the varicella-zoster virus, which causes itchy red blisters on the skin.",
    severity: "Mild to moderate",
    symptoms: [
      "Fever",
      "Headache",
      "Fatigue",
      "Itchy red blisters on the skin",
      "Loss of appetite",
    ],
    treatment: [
      "Pain relievers",
      "Antihistamines",
      "Antiviral medications",
      "Calamine lotion to relieve itching",
    ],
    prevention: [
      "Vaccination",
      "Avoid contact with infected individuals",
      "Wash hands frequently",
    ],
    facts: [
      "Chickenpox is most common in children under 12 years old",
      "It usually takes 10-21 days after exposure for symptoms to appear",
      "Chickenpox can be dangerous for pregnant women, newborns, and people with weakened immune systems",
    ],
  },
  {
    name: "Chronic cholestasis",
    description:
      "Chronic cholestasis is a condition where there is a reduction or absence of bile flow from the liver, leading to a buildup of bile acids in the liver and bloodstream.",
    severity: "Moderate to severe",
    symptoms: [
      "Itching",
      "Fatigue",
      "Jaundice",
      "Abdominal pain",
      "Pale stools and dark urine",
    ],
    treatment: [
      "Ursodeoxycholic acid",
      "Cholestyramine",
      "Vitamin supplements",
      "Liver transplant in severe cases",
    ],
    prevention: [
      "Maintain a healthy weight",
      "Avoid alcohol and drugs that damage the liver",
      "Vaccination against hepatitis A and B",
      "Avoid exposure to toxic chemicals",
    ],
    facts: [
      "Chronic cholestasis is more common in women than men",
      "It can be caused by a variety of factors including genetic mutations, medications, and infections",
      "Untreated chronic cholestasis can lead to liver failure",
    ],
  },
  {
    name: "Common Cold",
    description:
      "The common cold is a viral infection of the upper respiratory tract that affects people of all ages.",
    severity: "Mild to moderate",
    symptoms: [
      "Sore throat",
      "Runny or stuffy nose",
      "Cough",
      "Sneezing",
      "Headache",
      "Body aches",
    ],
    treatment: [
      "Get plenty of rest",
      "Stay hydrated",
      "Use over-the-counter medications for symptom relief",
      "Avoid spreading the virus to others",
    ],
    prevention: [
      "Wash hands frequently",
      "Avoid close contact with people who have a cold",
      "Cover your nose and mouth when coughing or sneezing",
    ],
    facts: [
      "The common cold is not caused by cold weather or getting wet",
      "There is no cure for the common cold",
      "Most people recover from a cold within a week or two",
    ],
  },
  {
    name: "Dengue",
    description:
      "Dengue is a viral infection spread by mosquitoes that can cause severe flu-like symptoms and potentially life-threatening complications.",
    severity: "Mild to severe",
    symptoms: [
      "High fever",
      "Severe headache",
      "Pain behind the eyes",
      "Muscle and joint pain",
      "Fatigue",
      "Nausea",
      "Vomiting",
      "Skin rash",
    ],
    treatment: [
      "Get plenty of rest",
      "Drink fluids to prevent dehydration",
      "Use over-the-counter medications for symptom relief",
      "Seek medical attention if symptoms worsen or if you develop warning signs of severe dengue",
    ],
    prevention: [
      "Use mosquito repellent",
      "Wear protective clothing",
      "Use mosquito nets",
      "Eliminate standing water where mosquitoes breed",
    ],
    facts: [
      "Dengue is found in tropical and subtropical regions around the world",
      "There is no specific treatment for dengue",
      "Severe dengue can be fatal",
    ],
  },
  {
    name: "Diabetes",
    description:
      "Diabetes is a chronic disease in which the body cannot properly regulate blood sugar levels.",
    severity: "Chronic",
    symptoms: [
      "Frequent urination",
      "Excessive thirst",
      "Extreme hunger",
      "Fatigue",
      "Blurred vision",
      "Slow healing of cuts and bruises",
    ],
    treatment: [
      "Manage blood sugar levels with medication and lifestyle changes",
      "Monitor blood sugar levels regularly",
      "Maintain a healthy diet",
      "Exercise regularly",
    ],
    prevention: [
      "Maintain a healthy weight",
      "Exercise regularly",
      "Eat a healthy diet",
      "Avoid smoking",
    ],
    facts: [
      "Type 1 diabetes is an autoimmune disease and is not preventable",
      "Type 2 diabetes can be prevented or delayed with lifestyle changes",
      "Diabetes can lead to serious complications such as heart disease, kidney disease, and nerve damage",
    ],
  },
  {
    name: "Dimorphic Hemorrhoids (Piles)",
    description:
      "Dimorphic hemorrhoids, commonly known as piles, are swollen veins in the lower rectum and anus. They can be classified into two types: internal and external. Internal hemorrhoids are located inside the rectum and are usually painless, but may cause bleeding. External hemorrhoids, on the other hand, are located under the skin around the anus and can be painful and itchy.",
    severity:
      "The severity of dimorphic hemorrhoids can vary from person to person. In some cases, they may cause mild discomfort, while in other cases they can be very painful and require medical attention.",
    symptoms: [
      "Pain or discomfort around the anus",
      "Itching or irritation around the anus",
      "Swelling or lumps around the anus",
      "Bleeding during bowel movements",
      "Painful bowel movements",
      "Mucus discharge from the anus",
    ],
    treatment: [
      "Increasing fiber intake and drinking plenty of fluids to soften stools",
      "Taking over-the-counter medications, such as pain relievers and topical creams",
      "Sitz baths (soaking the affected area in warm water)",
      "Minimally invasive procedures, such as rubber band ligation or sclerotherapy",
      "Surgical removal of the hemorrhoid",
    ],
    prevention: [
      "Eating a high-fiber diet to prevent constipation",
      "Drinking plenty of fluids to stay hydrated",
      "Avoiding straining during bowel movements",
      "Taking regular breaks from sitting for long periods of time",
    ],
    facts: [
      "Dimorphic hemorrhoids are a common condition, affecting millions of people worldwide",
      "Risk factors for developing hemorrhoids include age, pregnancy, obesity, and a sedentary lifestyle",
      "Most cases of hemorrhoids can be treated with non-surgical methods",
      "In rare cases, hemorrhoids may become thrombosed (clotted), which can be very painful and require immediate medical attention",
    ],
  },

  {
    name: "Drug Reaction",
    description:
      "A drug reaction is an adverse effect that occurs after taking a medication. It can be caused by an allergic reaction, intolerance to the medication, or a side effect of the drug. The severity of the reaction can range from mild to life-threatening.",
    severity:
      "The severity of a drug reaction can vary depending on the individual and the medication. Mild reactions may include skin rash or itching, while more severe reactions can cause difficulty breathing, anaphylaxis, or organ failure.",
    symptoms: [
      "Skin rash or hives",
      "Itching or swelling",
      "Difficulty breathing or wheezing",
      "Anaphylaxis (a severe, life-threatening allergic reaction)",
      "Fever",
      "Nausea or vomiting",
      "Diarrhea",
      "Dizziness",
      "Headache",
    ],
    treatment: [
      "Discontinuing the medication",
      "Taking antihistamines or corticosteroids to reduce symptoms",
      "In severe cases, hospitalization may be necessary for close monitoring and treatment",
      "Epinephrine (adrenaline) injections may be needed for anaphylaxis",
    ],
    prevention: [
      "Informing your healthcare provider of any allergies or previous drug reactions",
      "Being aware of the potential side effects of medications",
      "Taking medications only as prescribed and following instructions carefully",
    ],
    facts: [
      "Anyone can experience a drug reaction, regardless of age or health status",
      "Drug reactions are more common in people with a history of allergies or asthma",
      "Some medications are more likely to cause a reaction than others",
      "It is important to seek medical attention immediately if you experience symptoms of a severe drug reaction, such as difficulty breathing or anaphylaxis",
    ],
  },

  {
    name: "Fungal Infection",
    description:
      "A fungal infection is an infection caused by a fungus. Fungi are present everywhere in our environment, and some can cause infections in humans. These infections can affect the skin, nails, and mucous membranes, and can range from mild to severe.",
    severity:
      "The severity of a fungal infection can vary depending on the type of fungus and the individual's immune system. Mild infections may cause only minor skin irritation, while severe infections can lead to serious complications or even death.",
    symptoms: [
      "Skin rash or redness",
      "Itching or burning",
      "Flaking or scaling of the skin",
      "Cracking or peeling skin",
      "Nail changes or discoloration",
      "Thickened nails",
      "White patches in the mouth or throat",
      "Vaginal itching or discharge",
      "Fever (in severe cases)",
    ],
    treatment: [
      "Antifungal medications, such as creams, ointments, or pills",
      "Improving hygiene practices, such as keeping the affected area clean and dry",
      "Avoiding shared personal items, such as towels or clothing",
      "Treating underlying medical conditions that may contribute to fungal infections",
      "In severe cases, hospitalization may be necessary for intravenous antifungal medication",
    ],
    prevention: [
      "Practicing good hygiene, such as washing hands regularly and keeping skin clean and dry",
      "Avoiding shared personal items, such as towels or clothing",
      "Wearing protective clothing in high-risk environments, such as gardening or construction sites",
      "Treating underlying medical conditions that may contribute to fungal infections",
      "Avoiding prolonged use of antibiotics or corticosteroids",
    ],
    facts: [
      "Fungal infections are common, and anyone can get them",
      "Fungal infections are more common in people with weakened immune systems or certain medical conditions",
      "Some types of fungal infections can be spread from person to person",
      "Most fungal infections can be treated with antifungal medication",
      "In rare cases, fungal infections can be life-threatening",
    ],
  },

  {
    name: "GERD",
    description:
      "Gastroesophageal reflux disease (GERD) is a chronic digestive disorder that occurs when stomach acid or bile flows back into the esophagus. This can cause irritation and inflammation of the esophagus, and lead to a variety of symptoms.",
    severity:
      "The severity of GERD can vary from person to person. Mild cases may only cause occasional discomfort, while severe cases can lead to complications and require medical intervention.",
    symptoms: [
      "Heartburn",
      "Regurgitation of stomach acid or food",
      "Chest pain or discomfort",
      "Difficulty swallowing",
      "Feeling like there is a lump in the throat",
      "Chronic cough or hoarseness",
      "Nausea or vomiting",
    ],
    treatment: [
      "Lifestyle changes, such as weight loss, avoiding trigger foods, and eating smaller meals",
      "Prescription medications, such as proton pump inhibitors or prokinetic agents",
    ],
    prevention: [
      "Maintaining a healthy weight",
      "Avoiding trigger foods, such as spicy or acidic foods",
    ],
    facts: [
      "GERD is a common condition that affects millions of people worldwide",
      "Untreated GERD can lead to complications such as esophagitis, strictures, and Barrett's esophagus",
    ],
  },

  {
    name: "Gastroenteritis",
    description:
      "Gastroenteritis is an inflammation of the stomach and intestines, often caused by a viral or bacterial infection. It can cause a variety of symptoms, including nausea, vomiting, diarrhea, and abdominal pain.",
    severity:
      "The severity of gastroenteritis can vary depending on the cause and the individual's immune system. Mild cases may cause only minor discomfort, while severe cases can lead to dehydration and other complications.",
    symptoms: [
      "Nausea or vomiting",
      "Diarrhea",
      "Abdominal pain or cramping",
      "Fever",
      "Headache",
      "Muscle aches",
    ],
    treatment: [
      "Rest and hydration",
      "Over-the-counter medications to manage symptoms, such as anti-diarrheals or pain relievers",
    ],
    prevention: [
      "Washing hands regularly and thoroughly",
      "Avoiding contact with people who are sick",
      "Avoiding food and water that may be contaminated",
      "Practicing good food hygiene, such as cooking meat to a safe temperature",
    ],
    facts: [
      "Gastroenteritis is a common condition that affects people of all ages",
      "Most cases of gastroenteritis are caused by viral infections and are self-limiting",
      "Bacterial gastroenteritis can be more serious and require medical attention",
      "Dehydration is a common complication of gastroenteritis and can be dangerous if left untreated",
    ],
  },

  {
    name: "Heart attack",
    description:
      "A heart attack, also known as a myocardial infarction, occurs when blood flow to the heart is blocked, usually by a blood clot. This can cause damage to the heart muscle and lead to a range of symptoms.",
    severity:
      "A heart attack is a medical emergency and can be life-threatening. It is important to seek immediate medical attention if you suspect you or someone else is having a heart attack.",
    symptoms: [
      "Chest pain or discomfort",
      "Pain or discomfort in the arms, back, neck, jaw, or stomach",
      "Shortness of breath",
      "Cold sweat",
      "Nausea or vomiting",
      "Dizziness or lightheadedness",
    ],
    treatment: [
      "Administering aspirin to reduce blood clotting",
      "Performing a procedure to restore blood flow, such as angioplasty or coronary artery bypass surgery",
    ],
    prevention: [
      "Maintaining a healthy weight",
      "Eating a heart-healthy diet",
      "Getting regular exercise",
      "Not smoking",
    ],
    facts: [
      "Heart disease is the leading cause of death worldwide",
      "Certain factors, such as age, gender, and family history, can increase the risk of heart disease and heart attacks",
      "Prompt treatment is critical for improving outcomes and reducing the risk of complications",
    ],
  },

  {
    name: "Hepatitis B",
    description:
      "Hepatitis B is a viral infection that affects the liver. It can be acute or chronic, and can cause a range of symptoms or no symptoms at all. It is spread through contact with infected blood or other bodily fluids.",
    severity:
      "Hepatitis B can range from a mild illness to a chronic condition that can lead to liver damage, cirrhosis, or liver cancer.",
    symptoms: [
      "Abdominal pain",
      "Fatigue",
      "Nausea or vomiting",
      "Loss of appetite",
      "Jaundice (yellowing of the skin and eyes)",
    ],
    treatment: [
      "Antiviral medications to reduce the amount of virus in the body and slow the progression of the disease",
      "Liver transplant in severe cases",
    ],
    prevention: [
      "Getting vaccinated",
      "Practicing safe sex",
      "Not sharing needles or other injection equipment",
      "Using caution when getting tattoos or piercings",
    ],
    facts: [
      "Hepatitis B is a global health problem, affecting millions of people worldwide",
      "Chronic hepatitis B is a leading cause of liver cancer",
      "Prompt diagnosis and treatment can help prevent serious complications",
    ],
  },

  {
    name: "Hepatitis C",
    description:
      "Hepatitis C is a viral infection that primarily affects the liver. It can cause both acute and chronic infections. Most people with acute hepatitis C don't experience symptoms, while chronic hepatitis C can lead to serious liver damage.",
    severity:
      "Can range from mild to severe, and in some cases can be life-threatening",
    symptoms: [
      "Fever",
      "Fatigue",
      "Loss of appetite",
      "Nausea and vomiting",
      "Abdominal pain",
      "Dark urine",
      "Joint pain",
      "Yellowing of the skin and eyes (jaundice)",
    ],
    treatment: [
      "Antiviral medications, such as sofosbuvir and daclatasvir",
      "Combination therapy with antiviral medications and immune system boosters",
    ],
    prevention: [
      "Avoiding sharing of needles, razors, or other personal care items",
      "Using condoms during sex or practicing abstinence",
    ],
    facts: [
      "Approximately 71 million people worldwide have chronic hepatitis C",
      "Hepatitis C is a leading cause of liver cancer and liver transplants",
    ],
  },
  {
    name: "Hepatitis D",
    description:
      "Hepatitis D, also known as delta hepatitis, is a liver infection caused by the hepatitis D virus (HDV), which can only infect people who already have a hepatitis B infection.",
    severity:
      "Hepatitis D can range from a mild illness lasting a few weeks to a severe, lifelong infection that can lead to liver failure and death.",
    symptoms: [
      "fatigue",
      "nausea and vomiting",
      "abdominal pain",
      "joint pain",
      "loss of appetite",
      "dark urine",
      "yellowing of the skin and eyes (jaundice)",
    ],
    treatment: [
      "There is no specific treatment for acute hepatitis D infection, but treatment is focused on supporting the patient and managing their symptoms.",
      "Antiviral medications may be used to treat chronic hepatitis D, but they are not always effective.",
    ],
    prevention: [
      "Getting vaccinated against hepatitis B is the best way to prevent hepatitis D, as the hepatitis B vaccine also protects against hepatitis D.",
      "Avoiding exposure to contaminated blood, such as through sharing needles or having unprotected sex, can also help prevent hepatitis D.",
    ],
    facts: [
      "Hepatitis D can only infect people who are already infected with hepatitis B.",
      "Hepatitis D is more common in certain parts of the world, such as the Amazon Basin and parts of Africa and Asia.",
    ],
  },
  {
    name: "Hepatitis E",
    description:
      "Hepatitis E is a liver infection caused by the hepatitis E virus (HEV). Most cases of hepatitis E are acute, meaning they last for a short period of time and then go away on their own.",
    severity:
      "Hepatitis E is usually a mild illness, but it can be more severe in people with preexisting liver disease or a weakened immune system.",
    symptoms: [
      "fatigue",
      "nausea and vomiting",
      "abdominal pain",
      "joint pain",
      "loss of appetite",
      "dark urine",
      "yellowing of the skin and eyes (jaundice)",
    ],
    treatment: [
      "There is no specific treatment for acute hepatitis E infection, but treatment is focused on supporting the patient and managing their symptoms.",
      "Chronic hepatitis E is rare, but it can be treated with antiviral medications.",
    ],
    prevention: [
      "Avoiding exposure to contaminated food and water is the best way to prevent hepatitis E, particularly when traveling to areas where the disease is common.",
      "Practicing good hygiene, such as washing hands frequently and avoiding close contact with people who are sick, can also help prevent hepatitis E.",
    ],
    facts: [
      "Hepatitis E is more common in developing countries with poor sanitation and limited access to clean water.",
      "Hepatitis E can also be spread through blood transfusions and organ transplants, although this is rare.",
    ],
  },
  {
    name: "Hypertension",
    description:
      "Hypertension, or high blood pressure, is a condition in which the force of blood against the walls of the arteries is consistently too high.",
    severity:
      "Hypertension can lead to serious health problems such as heart disease, stroke, and kidney failure if left untreated.",
    symptoms: [
      "Most people with hypertension do not have any symptoms, which is why it is often referred to as the 'silent killer.'",
      "Some people with hypertension may experience headaches, shortness of breath, or nosebleeds, but these symptoms are not specific to hypertension and can be caused by many other conditions.",
    ],
    treatment: [
      "Lifestyle changes such as eating a healthy diet, exercising regularly, and quitting smoking can help lower blood pressure.",
      "Medications such as diuretics, ACE inhibitors, and beta blockers may also be prescribed to lower blood pressure.",
    ],
    prevention: [
      "Maintaining a healthy weight, eating a healthy diet, and limiting alcohol consumption can help prevent hypertension.",
      "Regular exercise, such as brisk walking or cycling, can also help prevent hypertension and improve overall cardiovascular health.",
    ],
    facts: [
      "Hypertension affects more than 1 billion people worldwide.",
      "Hypertension is often referred to as the 'silent killer' because it typically does not have any symptoms until it has already caused damage to the body.",
    ],
  },
  {
    name: "Hyperthyroidism",
    description:
      "Hyperthyroidism is a condition in which the thyroid gland produces too much thyroid hormone, leading to an overactive metabolism.",
    severity:
      "Hyperthyroidism can cause a range of symptoms and can lead to serious health problems such as heart disease, osteoporosis, and eye problems if left untreated.",
    symptoms: [
      "weight loss",
      "increased appetite",
      "anxiety",
      "irritability",
      "tremors",
      "sweating",
      "fatigue",
      "difficulty sleeping",
      "irregular menstrual periods",
    ],
    treatment: [
      "Medications such as beta blockers and antithyroid drugs can help reduce the production and release of thyroid hormone.",
      "Radioactive iodine therapy or surgery to remove the thyroid gland may be recommended in more severe cases of hyperthyroidism.",
    ],
    prevention: [
      "There is no surefire way to prevent hyperthyroidism, but avoiding exposure to radiation and following a healthy diet and lifestyle may help reduce the risk.",
      "People with a family history of thyroid problems may also want to consider regular thyroid function testing.",
    ],
    facts: [
      "Hyperthyroidism is more common in women than men, and typically develops between the ages of 20 and 40.",
      "Graves' disease is the most common cause of hyperthyroidism, accounting for up to 80% of cases.",
    ],
  },
  {
    name: "Hypoglycemia",
    description:
      "Hypoglycemia, or low blood sugar, is a condition in which the level of glucose (sugar) in the blood is too low.",
    severity:
      "Severe hypoglycemia can lead to seizures, unconsciousness, and even death if left untreated.",
    symptoms: [
      "Hypoglycemia can cause symptoms such as shakiness, weakness, dizziness, sweating, confusion, and headache.",
      "In severe cases, hypoglycemia can lead to seizures, unconsciousness, and even death.",
    ],
    treatment: [
      "The treatment of hypoglycemia depends on the underlying cause, but typically involves eating or drinking something containing sugar, such as fruit juice or candy.",
      "In severe cases, an injection of glucagon may be necessary to raise blood sugar levels.",
    ],
    prevention: [
      "People with diabetes can prevent hypoglycemia by monitoring their blood sugar levels regularly, eating regular meals and snacks, and adjusting their insulin dosage as needed.",
      "Avoiding excessive alcohol consumption can also help prevent hypoglycemia.",
    ],
    facts: [
      "Hypoglycemia is a common side effect of insulin and other diabetes medications.",
      "Hypoglycemia can also occur in people without diabetes, such as those with liver disease or certain types of tumors.",
    ],
  },
  {
    name: "Hypothyroidism",
    description:
      "Hypothyroidism is a condition in which the thyroid gland does not produce enough thyroid hormone, leading to a slower metabolism.",
    severity:
      "Untreated hypothyroidism can lead to a range of health problems, including heart disease, nerve damage, and infertility.",
    symptoms: [
      "fatigue",
      "weight gain",
      "cold intolerance",
      "dry skin",
      "hair loss",
      "depression",
      "constipation",
      "muscle weakness",
    ],
    treatment: [
      "The main treatment for hypothyroidism is thyroid hormone replacement therapy, which involves taking a synthetic form of thyroid hormone orally.",
      "Lifestyle changes such as eating a healthy diet and getting regular exercise can also help manage the symptoms of hypothyroidism.",
    ],
    prevention: [
      "There is no surefire way to prevent hypothyroidism, but following a healthy diet and lifestyle may help reduce the risk.",
      "People with a family history of thyroid problems may also want to consider regular thyroid function testing.",
    ],
    facts: [
      "Hypothyroidism is more common in women than men, and typically develops between the ages of 40 and 60.",
      "Hashimoto's thyroiditis is the most common cause of hypothyroidism in the United States.",
    ],
  },
  {
    name: "Impetigo",
    description:
      "Impetigo is a bacterial skin infection that is common in children and infants.",
    severity:
      "While impetigo is not typically serious, it can cause discomfort and may lead to more serious infections if left untreated.",
    symptoms: [
      "Impetigo typically causes red sores that rupture and develop a yellow-brown crust.",
      "The sores may be itchy and can occur anywhere on the body, but are most commonly found around the nose and mouth.",
    ],
    treatment: [
      "The treatment of impetigo typically involves antibiotics, either as a topical cream or an oral medication.",
      "It is also important to keep the affected areas clean and dry to prevent the spread of infection.",
    ],
    prevention: [
      "To help prevent the spread of impetigo, it is important to practice good hygiene, including washing hands regularly and avoiding sharing towels or other personal items.",
      "Children with impetigo should stay home from school or daycare until they are no longer contagious.",
    ],
    facts: [
      "Impetigo is caused by bacteria, most commonly staphylococcus aureus or streptococcus pyogenes.",
      "Impetigo can be more common in warm, humid climates or during the summer months.",
    ],
  },
  {
    name: "Jaundice",
    description:
      "Jaundice is a condition in which the skin and eyes turn yellow due to a buildup of bilirubin, a waste product formed during the breakdown of red blood cells.",
    severity:
      "While mild cases of jaundice are typically not serious, severe jaundice can lead to brain damage and other complications if left untreated.",
    symptoms: [
      "Jaundice typically causes yellowing of the skin and eyes, as well as dark urine and pale stools.",
      "In some cases, jaundice may also cause fatigue, fever, and abdominal pain.",
    ],
    treatment: [
      "The treatment of jaundice depends on the underlying cause, but may involve treating any underlying liver disease or infection.",
      "In severe cases, phototherapy or exchange transfusion may be necessary to reduce bilirubin levels.",
    ],
    prevention: [
      "Some cases of jaundice can be prevented by avoiding alcohol and other drugs that can damage the liver.",
      "Getting vaccinated against hepatitis A and B can also help prevent jaundice caused by these infections.",
    ],
    facts: [
      "Jaundice is common in newborns and is usually not a cause for concern.",
      "Jaundice can also be a side effect of certain medications or medical conditions, such as gallstones or pancreatic cancer.",
    ],
  },
  {
    name: "Malaria",
    description:
      "Malaria is a mosquito-borne infectious disease that affects humans and other animals. It is caused by protozoan parasites belonging to the genus Plasmodium.",
    severity:
      "Malaria can range from a mild flu-like illness to a severe life-threatening disease.",
    symptoms: [
      "Fever",
      "Headache",
      "Chills",
      "Muscle pain",
      "Nausea and vomiting",
      "Fatigue",
    ],
    treatment: ["Antimalarial drugs", "Hospitalization for severe cases"],
    prevention: ["Use of mosquito nets", "Insect repellent use"],
    facts: [
      "Malaria is a leading cause of death in many countries, particularly in sub-Saharan Africa",
      "There are several types of Plasmodium parasites that cause malaria",
    ],
  },
  {
    name: "Migraine",
    description:
      "A migraine is a type of headache that is usually characterized by throbbing pain on one side of the head, often accompanied by nausea, vomiting, and sensitivity to light and sound.",
    severity:
      "Migraines can range from mild to severe and can be disabling in some cases.",
    symptoms: [
      "Throbbing pain on one side of the head",
      "Nausea and vomiting",
      "Sensitivity to light and sound",
      "Visual disturbances",
      "Dizziness",
    ],
    treatment: [
      "Pain-relieving medications such as aspirin or ibuprofen",
      "Triptans for moderate to severe migraines",
    ],
    prevention: [
      "Avoiding triggers such as stress, lack of sleep, and certain foods",
      "Taking preventive medications",
    ],
    facts: [
      "Migraines are a common neurological condition, affecting approximately 12% of the population",
      "Migraines can be hereditary, with many sufferers reporting a family history of the condition",
    ],
  },
  {
    name: "Osteoarthritis",
    description:
      "Osteoarthritis is a degenerative joint disease that results in the breakdown of cartilage in joints, leading to pain, stiffness, and decreased mobility.",
    severity:
      "Osteoarthritis can range from mild to severe, depending on the extent of joint damage and symptoms experienced.",
    symptoms: [
      "Pain and stiffness in joints",
      "Decreased range of motion",
      "Joint swelling and tenderness",
      "Cracking or popping sound when moving the joint",
    ],
    treatment: [
      "Physical therapy to improve joint mobility and strength",
      "Pain medication, such as nonsteroidal anti-inflammatory drugs (NSAIDs)",
    ],
    prevention: [
      "Maintaining a healthy weight to reduce stress on joints",
      "Regular exercise to strengthen muscles and maintain joint flexibility",
    ],
    facts: [
      "Osteoarthritis is the most common type of arthritis, affecting millions of people worldwide",
      "Although it commonly affects older adults, it can also develop in younger people who have experienced joint injury or overuse",
    ],
  },
  {
    name: "Paralysis (brain hemorrhage)",
    description:
      "Paralysis caused by brain hemorrhage is a condition in which there is damage to the brain due to bleeding, leading to loss of function and mobility in various parts of the body.",
    severity:
      "The severity of paralysis caused by brain hemorrhage can vary depending on the extent and location of the bleeding.",
    symptoms: [
      "Loss of movement or sensation in one or more limbs",
      "Difficulty speaking or understanding speech",
      "Vision problems",
      "Severe headache or migraine",
    ],
    treatment: [
      "Medication to manage pain and prevent further bleeding",
      "Physical therapy to help regain strength and mobility",
    ],
    prevention: [
      "Managing risk factors such as high blood pressure and high cholesterol",
      "Seeking immediate medical attention in case of head injury or stroke symptoms",
    ],
    facts: [
      "Brain hemorrhages are most commonly caused by high blood pressure, but can also result from head injury or other underlying health conditions",
      "Paralysis caused by brain hemorrhage can be permanent, but some people may regain some function with therapy and rehabilitation",
    ],
  },
  {
    name: "Peptic ulcer disease",
    description:
      "Peptic ulcer disease is a condition where painful sores or ulcers develop in the lining of the stomach, esophagus or small intestine.",
    severity:
      "Peptic ulcer disease can range from mild to severe, with severe cases potentially leading to life-threatening complications.",
    symptoms: [
      "Burning pain in the stomach or upper abdomen",
      "Nausea and vomiting",
      "Loss of appetite",
      "Weight loss",
      "Bloody or dark stools",
    ],
    treatment: [
      "Antibiotics to eliminate the bacterial infection that causes most ulcers",
      "Medications that reduce the amount of acid in the stomach",
    ],
    prevention: [
      "Avoiding smoking and excessive alcohol consumption",
      "Managing stress to reduce the risk of ulcers caused by stress",
    ],
    facts: [
      "Most cases of peptic ulcer disease are caused by a bacterial infection called Helicobacter pylori",
      "Long-term use of nonsteroidal anti-inflammatory drugs (NSAIDs) can also increase the risk of developing peptic ulcers",
    ],
  },
  {
    name: "Pneumonia",
    description:
      "Pneumonia is a respiratory infection that affects the lungs, causing inflammation and fluid buildup in the air sacs.",
    severity:
      "Pneumonia can range from mild to severe, with severe cases potentially leading to respiratory failure and death.",
    symptoms: [
      "Coughing",
      "Shortness of breath",
      "Chest pain",
      "Fever and chills",
      "Fatigue and weakness",
    ],
    treatment: [
      "Antibiotics to treat bacterial pneumonia",
      "Supportive care such as oxygen therapy and fluid management",
    ],
    prevention: [
      "Getting vaccinated against common causes of pneumonia, such as pneumococcal bacteria",
      "Practicing good hygiene, such as washing hands regularly and covering mouth and nose when coughing or sneezing",
    ],
    facts: [
      "Pneumonia can be caused by bacteria, viruses, and fungi",
      "Certain populations, such as young children and the elderly, are at higher risk of developing severe pneumonia",
    ],
  },

  {
    name: "Psoriasis",
    description:
      "Psoriasis is a chronic autoimmune condition that causes skin cells to grow too quickly, resulting in thick, scaly patches of skin.",
    severity:
      "Psoriasis can range from mild to severe, with severe cases potentially leading to joint damage and other complications.",
    symptoms: [
      "Red, scaly patches of skin",
      "Itching and burning",
      "Dry, cracked skin that may bleed",
      "Thickened, ridged or pitted nails",
      "Joint pain and stiffness",
    ],
    treatment: [
      "Topical medications such as corticosteroids and retinoids to reduce inflammation and slow skin cell growth",
      "Light therapy or phototherapy, which exposes skin to ultraviolet light to slow cell growth and reduce inflammation",
    ],
    prevention: [
      "There is no known way to prevent psoriasis",
      "However, managing stress and maintaining a healthy lifestyle can help reduce the risk of developing severe psoriasis",
    ],
    facts: [
      "Psoriasis is not contagious and cannot be spread through contact with affected skin",
      "The exact cause of psoriasis is unknown, but it is thought to be related to an immune system dysfunction",
    ],
  },
  {
    name: "Tuberculosis",
    description:
      "Tuberculosis (TB) is a bacterial infection that primarily affects the lungs, but can also affect other parts of the body.",
    severity:
      "TB can range from mild to severe, with severe cases potentially leading to death if left untreated.",
    symptoms: [
      "Coughing that lasts for weeks",
      "Chest pain",
      "Fever and night sweats",
      "Fatigue and weakness",
      "Unintentional weight loss",
    ],
    treatment: [
      "Antibiotics to kill the bacteria that cause TB",
      "Long-term treatment with a combination of antibiotics to ensure complete eradication of the bacteria",
    ],
    prevention: [
      "Getting vaccinated against TB",
      "Avoiding close contact with people who have TB",
    ],
    facts: [
      "TB is a major global health problem, particularly in developing countries",
      "TB is spread through the air when an infected person coughs or sneezes",
    ],
  },

  {
    name: "Typhoid",
    description:
      "Typhoid fever is a bacterial infection caused by the bacterium Salmonella typhi. It can cause high fever, diarrhea, and other symptoms.",
    severity:
      "Typhoid can be a serious illness, particularly in developing countries where access to medical care may be limited.",
    symptoms: [
      "High fever",
      "Weakness and fatigue",
      "Headache and body aches",
      "Diarrhea or constipation",
      "Abdominal pain",
      "Rash",
    ],
    treatment: [
      "Antibiotics to kill the bacteria that cause typhoid",
      "Rehydration therapy to replace fluids lost through diarrhea and vomiting",
    ],
    prevention: [
      "Getting vaccinated against typhoid",
      "Avoiding contaminated food and water when traveling to areas with poor sanitation",
    ],
    facts: [
      "Typhoid is spread through contaminated food and water, and through close contact with infected individuals",
      "Typhoid is more common in areas with poor sanitation and limited access to clean water and medical care",
    ],
  },
  {
    name: "Urinary tract infection",
    description:
      "A urinary tract infection (UTI) is an infection that affects any part of the urinary system, including the kidneys, bladder, ureters, and urethra.",
    severity:
      "UTIs are generally not life-threatening, but can cause discomfort and complications if left untreated.",
    symptoms: [
      "A strong, persistent urge to urinate",
      "A burning sensation when urinating",
      "Passing frequent, small amounts of urine",
      "Cloudy or strong-smelling urine",
      "Pain or pressure in the lower abdomen or back",
    ],
    treatment: [
      "Antibiotics to kill the bacteria that cause the UTI",
      "Drinking plenty of fluids to flush out the bacteria and prevent future infections",
    ],
    prevention: [
      "Wiping from front to back after using the toilet",
      "Drinking plenty of fluids to flush out bacteria",
      "Urinating after sex to help flush out bacteria",
    ],
    facts: [
      "UTIs are more common in women than men",
      "Untreated UTIs can lead to more serious infections, such as kidney infections",
    ],
  },
  {
    name: "Varicose veins",
    description:
      "Varicose veins are enlarged, twisted veins that appear bluish-purple on the surface of the skin. They usually occur in the legs, but can also form in other parts of the body.",
    severity:
      "Varicose veins are generally not considered a serious medical condition, but they can cause discomfort and affect quality of life.",
    symptoms: [
      "Enlarged, twisted veins that appear bluish-purple on the skin's surface",
      "Aching or heaviness in the legs",
      "Swelling in the legs",
      "Pain or cramping in the legs",
      "Itching around the veins",
    ],
    treatment: [
      "Compression stockings to improve blood flow and reduce swelling",
      "Sclerotherapy, a procedure that involves injecting a solution into the vein to close it off and reroute blood flow to healthier veins",
    ],
    prevention: ["Maintaining a healthy weight", "Exercising regularly"],
    facts: [
      "Varicose veins are more common in women than men",
      "Varicose veins can be a hereditary condition",
    ],
  },
  {
    name: "Hepatitis A",
    description:
      "Hepatitis A is a viral infection that affects the liver. It is usually spread through contaminated food or water, or close contact with an infected person.",
    severity:
      "Hepatitis A is usually a short-term illness that does not cause long-term liver damage. However, it can be severe and even fatal in rare cases.",
    symptoms: [
      "Fatigue",
      "Nausea and vomiting",
      "Abdominal pain",
      "Loss of appetite",
      "Fever",
      "Jaundice (yellowing of the skin and eyes)",
    ],
    treatment: [
      "Rest and hydration",
      "In some cases, antiviral medication may be prescribed",
    ],
    prevention: [
      "Getting vaccinated against hepatitis A",
      "Practicing good hygiene, such as washing hands thoroughly before eating or preparing food",
    ],
    facts: [
      "Hepatitis A is more common in areas with poor sanitation and hygiene",
      "The best way to prevent hepatitis A is through vaccination",
    ],
  },
];

module.exports = Disease;
