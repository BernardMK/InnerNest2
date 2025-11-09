// translations.js - Complete translation system for InnerNest

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            blog: "Blog",
            chat: "Chat",
            book: "Book"
        },
        
        // Hero Section
        hero: {
            title: "Welcome to Your Mental Health Journey",
            subtitle: "InnerNest is your safe space for mental wellness, self-discovery, and growth. Connect with professionals, access resources, and build resilience.",
            games: "Games",
            gamesDesc: "For stress relief",
            support: "Support",
            supportDesc: "Professional guidance",
            mindfulness: "Mindfulness",
            mindfulnessDesc: "Mental wellness"
        },
        about: {
            title: "About Us",
            teamPicture: "Team Picture",
            description: "Hi from the creators of InnerNest — a space built to bring peace, understanding, and connection to anyone navigating their mental health journey. We started InnerNest because we believe mental health deserves just as much care and conversation as physical health. Over the years, we have learned how powerful it can be to pause, reflect, and share — whether it's through journaling, music, mindfulness, or simply connecting with others who understand. Here, our goal is to make mental wellness more accessible and less intimidating. InnerNest offers articles, tools, and resources that encourage balance, healing, and self-awareness. Whether you're learning to manage anxiety, seeking calm through mindfulness, or just needing a reminder that you're not alone — this is your place to breathe and reset. Mental health isn't a destination — it's a journey. And InnerNest is here to help you find your peace along the way. 🌸"
        },
        disorders: {
            anxiety: {
                title: "Anxiety Disorders",
                description: "Anxiety disorders are characterized by excessive fear, worry, and related behavioral disturbances. They include generalized anxiety disorder (GAD), panic disorder, and social anxiety disorder. These conditions go beyond normal nervousness and can significantly impact daily functioning.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Excessive worrying that's difficult to control",
                    "Restlessness, feeling on edge or keyed up",
                    "Rapid heartbeat, sweating, trembling",
                    "Difficulty concentrating or mind going blank",
                    "Sleep disturbances and muscle tension",
                    "Avoidance of anxiety-triggering situations"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Cognitive Behavioral Therapy (CBT) to identify and change thought patterns",
                    "Medications such as SSRIs or benzodiazepines as prescribed",
                    "Relaxation techniques including deep breathing and progressive muscle relaxation",
                    "Regular exercise and healthy sleep habits",
                    "Mindfulness meditation and grounding exercises"
                ]
            },
            depression: {
                title: "Depression",
                description: "Depression is a mood disorder causing persistent feelings of sadness and loss of interest. It affects how you feel, think, and handle daily activities. Major depressive disorder, seasonal affective disorder, and bipolar depression are common types.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Persistent sad, anxious, or empty mood",
                    "Loss of interest in activities once enjoyed",
                    "Changes in appetite and weight",
                    "Sleep disturbances (insomnia or oversleeping)",
                    "Fatigue and decreased energy",
                    "Feelings of worthlessness or excessive guilt",
                    "Difficulty thinking, concentrating, or making decisions"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Psychotherapy (talk therapy) including CBT and interpersonal therapy",
                    "Antidepressant medications as prescribed by a doctor",
                    "Regular physical activity and exercise",
                    "Light therapy for seasonal affective disorder",
                    "Support groups and peer support",
                    "Establishing routine and maintaining social connections"
                ]
            },
            stress: {
                title: "Stress Management",
                description: "Chronic stress occurs when the body's stress response is activated too often or for too long. It can result from work pressure, life changes, or ongoing difficulties. While stress is normal, chronic stress can lead to serious health problems.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Headaches and muscle tension",
                    "Fatigue and sleep problems",
                    "Irritability and mood changes",
                    "Difficulty concentrating",
                    "Changes in appetite",
                    "Physical symptoms like upset stomach or chest pain"
                ],
                treatmentTitle: "Management Strategies",
                treatments: [
                    "Time management and prioritization techniques",
                    "Regular exercise and physical activity",
                    "Relaxation practices like yoga, meditation, or tai chi",
                    "Healthy boundaries and learning to say no",
                    "Social support and connecting with others",
                    "Professional counseling or stress management programs"
                ]
            },
            trauma: {
                title: "Trauma & PTSD",
                description: "Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing traumatic events. Complex PTSD results from prolonged trauma. These conditions involve intrusive memories, avoidance behaviors, and changes in mood and thinking.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Intrusive memories, flashbacks, or nightmares",
                    "Avoidance of trauma reminders",
                    "Negative changes in thoughts and mood",
                    "Hypervigilance and exaggerated startle response",
                    "Difficulty sleeping and concentrating",
                    "Emotional numbness or detachment"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Trauma-focused cognitive behavioral therapy (TF-CBT)",
                    "Eye Movement Desensitization and Reprocessing (EMDR)",
                    "Prolonged exposure therapy",
                    "Medications to manage symptoms",
                    "Grounding techniques and emotional regulation skills",
                    "Support groups for trauma survivors"
                ]
            },
            relationships: {
                title: "Relationship Issues",
                description: "Relationship difficulties can affect romantic partnerships, family dynamics, and social connections. Common issues include communication problems, conflict resolution challenges, trust issues, and attachment concerns that impact emotional well-being.",
                symptomsTitle: "Common Signs",
                symptoms: [
                    "Frequent arguments or conflicts",
                    "Poor communication or feeling misunderstood",
                    "Lack of emotional intimacy or connection",
                    "Trust issues or jealousy",
                    "Difficulty setting or respecting boundaries",
                    "Feeling isolated or unsupported"
                ],
                treatmentTitle: "Solutions and Support",
                treatments: [
                    "Couples therapy or family counseling",
                    "Communication skills training",
                    "Learning active listening techniques",
                    "Conflict resolution strategies",
                    "Individual therapy to address personal patterns",
                    "Relationship workshops and support groups"
                ]
            },
            selfcare: {
                title: "Self-Care & Wellness",
                description: "Self-care involves intentional activities that promote physical, mental, and emotional health. Building sustainable wellness practices helps prevent burnout, manage stress, and maintain overall well-being through mindfulness and healthy habits.",
                symptomsTitle: "Signs You Need More Self-Care",
                symptoms: [
                    "Feeling constantly exhausted or burned out",
                    "Neglecting personal needs",
                    "Increased irritability or emotional reactivity",
                    "Declining physical health",
                    "Loss of motivation or passion",
                    "Difficulty enjoying activities"
                ],
                treatmentTitle: "Self-Care Practices",
                treatments: [
                    "Establishing regular sleep and wake times",
                    "Mindfulness meditation and breathing exercises",
                    "Physical activity and movement",
                    "Healthy nutrition and hydration",
                    "Setting boundaries and saying no",
                    "Engaging in hobbies and enjoyable activities",
                    "Social connection and quality time with loved ones"
                ]
            },
            bipolar: {
                title: "Bipolar Disorder",
                description: "Bipolar disorder is characterized by extreme mood swings including emotional highs (mania or hypomania) and lows (depression). These shifts affect energy, activity levels, and the ability to carry out daily tasks.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Manic episodes: elevated mood, increased energy, reduced need for sleep",
                    "Racing thoughts and rapid speech",
                    "Impulsive or risky behavior during manic phases",
                    "Depressive episodes: low mood, fatigue, loss of interest",
                    "Extreme changes in activity and energy levels",
                    "Difficulty maintaining relationships and work performance"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Mood stabilizing medications (lithium, anticonvulsants)",
                    "Psychotherapy including CBT and family-focused therapy",
                    "Maintaining regular sleep schedules",
                    "Mood tracking and trigger identification",
                    "Support groups for bipolar disorder",
                    "Psychoeducation about the condition"
                ]
            },
            panic: {
                title: "Panic Disorder",
                description: "Panic disorder involves recurrent, unexpected panic attacks—sudden periods of intense fear or discomfort. People often worry about future attacks and may avoid situations where attacks have occurred.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Sudden intense fear or discomfort",
                    "Rapid heartbeat, sweating, trembling",
                    "Shortness of breath or feeling of choking",
                    "Chest pain and nausea",
                    "Dizziness or feeling faint",
                    "Fear of losing control or dying",
                    "Avoidance of places where attacks occurred"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Cognitive Behavioral Therapy (CBT) focused on panic",
                    "Exposure therapy to reduce avoidance behaviors",
                    "Anti-anxiety medications or antidepressants",
                    "Breathing techniques and relaxation exercises",
                    "Panic attack management strategies",
                    "Lifestyle modifications including reduced caffeine"
                ]
            },
            delusional: {
                title: "Delusional Disorder",
                description: "Delusional disorder involves persistent false beliefs (delusions) despite evidence to the contrary. Unlike schizophrenia, people with this disorder generally function well aside from their delusions, which often involve persecution, jealousy, or grandiosity.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Non-bizarre delusions lasting at least one month",
                    "Beliefs of being persecuted or conspired against",
                    "Jealous delusions about partner's fidelity",
                    "Grandiose beliefs about special abilities or identity",
                    "Irritability or anger related to delusions",
                    "Social isolation due to mistrust"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Antipsychotic medications",
                    "Individual psychotherapy to build trust",
                    "Cognitive Behavioral Therapy (CBT)",
                    "Family therapy and psychoeducation",
                    "Treatment of co-occurring anxiety or depression",
                    "Building therapeutic alliance gradually"
                ]
            },
            eating: {
                title: "Eating Disorders",
                description: "Eating disorders are serious conditions involving persistent disturbances in eating behaviors and distressing thoughts about weight and shape. Types include anorexia nervosa, bulimia nervosa, and binge eating disorder.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Severe restriction of food intake or fasting",
                    "Binge eating followed by compensatory behaviors",
                    "Preoccupation with weight, food, and body shape",
                    "Distorted body image",
                    "Excessive exercise",
                    "Social withdrawal, especially around meals",
                    "Physical symptoms: fatigue, dizziness, hair loss"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Specialized eating disorder therapy (CBT-E, FBT, DBT)",
                    "Nutritional counseling and meal planning",
                    "Medical monitoring for physical complications",
                    "Medications for co-occurring conditions",
                    "Group therapy and support groups",
                    "Inpatient or residential treatment for severe cases"
                ]
            },
            schizophrenia: {
                title: "Schizophrenia",
                description: "Schizophrenia is a serious mental disorder affecting thinking, feelings, and behavior. It involves psychosis including hallucinations and delusions, along with disorganized thinking and reduced emotional expression.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Hallucinations (seeing or hearing things that aren't there)",
                    "Delusions (false beliefs)",
                    "Disorganized speech and thinking",
                    "Reduced emotional expression",
                    "Lack of motivation and withdrawal",
                    "Cognitive difficulties with memory and attention"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Antipsychotic medications (first-line treatment)",
                    "Psychosocial interventions and skills training",
                    "Cognitive Behavioral Therapy for psychosis",
                    "Family education and support",
                    "Supported employment and housing programs",
                    "Coordinated specialty care programs"
                ]
            },
            histrionic: {
                title: "Histrionic Personality Disorder",
                description: "Histrionic Personality Disorder is characterized by excessive emotionality and attention-seeking behavior. People with this disorder feel uncomfortable when not the center of attention and may display rapidly shifting, shallow emotions.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Discomfort when not the center of attention",
                    "Inappropriately seductive or provocative behavior",
                    "Rapidly shifting and shallow emotions",
                    "Use of physical appearance to draw attention",
                    "Impressionistic, vague speech",
                    "Exaggerated emotional expression",
                    "Easily influenced by others"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Psychodynamic psychotherapy",
                    "Cognitive Behavioral Therapy",
                    "Group therapy for interpersonal skills",
                    "Emotional regulation training",
                    "Developing genuine self-esteem",
                    "Medications for co-occurring anxiety or depression"
                ]
            },
            trichotillomania: {
                title: "Trichotillomania (Hair-Pulling Disorder)",
                description: "Trichotillomania involves recurrent pulling out of one's hair resulting in hair loss. The behavior is often preceded by tension and provides relief or gratification. It's classified as a body-focused repetitive behavior.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Recurrent pulling out of hair",
                    "Noticeable hair loss",
                    "Tension before pulling or when resisting",
                    "Pleasure or relief after pulling",
                    "Attempts to stop or decrease behavior",
                    "Significant distress or impairment",
                    "Often occurs during relaxation or concentration"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Habit Reversal Training (HRT)",
                    "Cognitive Behavioral Therapy",
                    "Acceptance and Commitment Therapy (ACT)",
                    "Stimulus control techniques",
                    "Medications (SSRIs, N-acetylcysteine)",
                    "Support groups and peer support"
                ]
            },
            anankastic: {
                title: "Anankastic (Obsessive-Compulsive) Personality Disorder",
                description: "Anankastic personality disorder involves a pervasive pattern of preoccupation with orderliness, perfectionism, and control. Unlike OCD, it's a personality pattern rather than intrusive thoughts and compulsions.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Preoccupation with details, rules, and order",
                    "Perfectionism that interferes with task completion",
                    "Excessive devotion to work",
                    "Inflexibility about morality and values",
                    "Reluctance to delegate tasks",
                    "Rigidity and stubbornness",
                    "Difficulty discarding worn-out items"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Psychodynamic psychotherapy",
                    "Cognitive Behavioral Therapy to challenge rigid thinking",
                    "Relaxation training",
                    "Flexibility exercises",
                    "Interpersonal therapy",
                    "Medications for anxiety if present"
                ]
            },
            avoidant: {
                title: "Avoidant Personality Disorder",
                description: "Avoidant Personality Disorder involves a pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. People with this disorder desire relationships but avoid them due to fear of rejection.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Avoidance of social activities due to fear of criticism",
                    "Unwillingness to get involved unless certain of being liked",
                    "Restraint in intimate relationships",
                    "Preoccupation with being criticized or rejected",
                    "Inhibited in new social situations",
                    "Views self as socially inept or inferior",
                    "Reluctance to take personal risks"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Cognitive Behavioral Therapy",
                    "Social skills training",
                    "Exposure therapy for social situations",
                    "Schema therapy",
                    "Group therapy for interpersonal practice",
                    "Medications for co-occurring anxiety or depression"
                ]
            },
            intermittentExplosive: {
                title: "Intermittent Explosive Disorder",
                description: "Intermittent Explosive Disorder involves repeated, sudden episodes of impulsive, aggressive, violent behavior or angry verbal outbursts grossly out of proportion to the situation.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Recurrent behavioral outbursts",
                    "Verbal aggression or physical aggression",
                    "Impulsive anger disproportionate to the trigger",
                    "Tension or arousal before the episode",
                    "Relief afterward, followed by remorse",
                    "Significant distress or impairment",
                    "Damage to property or relationships"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Cognitive Behavioral Therapy focused on anger management",
                    "Relaxation techniques and stress management",
                    "Medications (SSRIs, mood stabilizers)",
                    "Impulse control training",
                    "Communication skills development",
                    "Avoiding triggers when possible"
                ]
            },
            bodyDysmorphic: {
                title: "Body Dysmorphic Disorder",
                description: "Body Dysmorphic Disorder involves preoccupation with perceived flaws in physical appearance that are not observable or appear minor to others. This preoccupation causes significant distress and impairment.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Preoccupation with perceived appearance flaws",
                    "Repetitive behaviors (mirror checking, excessive grooming)",
                    "Comparing appearance with others",
                    "Seeking reassurance about appearance",
                    "Avoidance of social situations",
                    "Seeking cosmetic procedures with dissatisfaction",
                    "Significant distress and functional impairment"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Cognitive Behavioral Therapy (CBT) for BDD",
                    "Exposure and Response Prevention",
                    "SSRIs (often at higher doses)",
                    "Perceptual retraining",
                    "Mindfulness-based interventions",
                    "Avoid cosmetic procedures during active symptoms"
                ]
            },
            maladaptiveDaydreaming: {
                title: "Maladaptive Daydreaming",
                description: "Maladaptive Daydreaming involves extensive fantasy activity that replaces human interaction and interferes with academic, interpersonal, or vocational functioning. The daydreaming is vivid, immersive, and often accompanied by repetitive movements.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Intense, vivid daydreaming for hours",
                    "Accompanied by repetitive movements (pacing, rocking)",
                    "Triggered by real-life events or sensory stimuli",
                    "Difficulty stopping or controlling daydreams",
                    "Interference with daily functioning",
                    "Strong desire to continue daydreaming",
                    "Distress when unable to daydream"
                ],
                treatmentTitle: "Management Strategies",
                treatments: [
                    "Cognitive Behavioral Therapy",
                    "Mindfulness and grounding techniques",
                    "Scheduled daydreaming time with limits",
                    "Identifying and managing triggers",
                    "Increasing real-world engagement",
                    "Treatment of underlying conditions (ADHD, OCD)"
                ]
            },
            prolongedGrief: {
                title: "Prolonged Grief Disorder",
                description: "Prolonged Grief Disorder involves intense and persistent grief lasting beyond 12 months after the death of a loved one. The grief is severe enough to significantly impair functioning and quality of life.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Intense yearning or longing for the deceased",
                    "Preoccupation with thoughts or memories",
                    "Difficulty accepting the death",
                    "Feeling life is meaningless without the deceased",
                    "Intense emotional pain",
                    "Avoidance of reminders of the loss",
                    "Social withdrawal and isolation"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Prolonged Grief Disorder therapy (PGD-T)",
                    "Complicated Grief Treatment (CGT)",
                    "Cognitive Behavioral Therapy",
                    "Grief support groups",
                    "Meaning reconstruction and narrative therapy",
                    "Antidepressants if co-occurring depression"
                ]
            },
            attachment: {
                title: "Attachment Disorder",
                description: "Attachment disorders develop from disrupted attachment patterns in early childhood. They involve difficulty forming healthy emotional bonds and can manifest as inhibited or disinhibited social engagement, affecting relationships throughout life.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Difficulty trusting or connecting with others",
                    "Avoidance of comfort or affection",
                    "Lack of emotional responsiveness",
                    "Indiscriminate friendliness (disinhibited type)",
                    "Fear of abandonment or rejection",
                    "Difficulty regulating emotions",
                    "Behavioral problems and aggression"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Attachment-based therapy",
                    "Trauma-focused interventions",
                    "Family therapy and caregiver training",
                    "Play therapy for children",
                    "Creating stable, consistent relationships",
                    "Emotional regulation skills training"
                ]
            },
            dissociativeIdentity: {
                title: "Dissociative Identity Disorder",
                description: "Dissociative Identity Disorder (DID), formerly called multiple personality disorder, involves the presence of two or more distinct personality states. It typically develops as a response to severe childhood trauma and involves disruption of identity and memory.",
                symptomsTitle: "Symptoms",
                symptoms: [
                    "Two or more distinct personality states",
                    "Gaps in memory beyond normal forgetting",
                    "Depersonalization (feeling detached from self)",
                    "Derealization (feeling world is unreal)",
                    "Identity confusion and alteration",
                    "Time loss and unexplained possessions",
                    "Voices or internal dialogue"
                ],
                treatmentTitle: "Treatment Options",
                treatments: [
                    "Long-term psychotherapy (primary treatment)",
                    "Phase-oriented trauma therapy",
                    "EMDR for trauma processing",
                    "Dialectical Behavior Therapy (DBT)",
                    "Integration or collaboration between identity states",
                    "Medications for co-occurring symptoms",
                    "Building internal cooperation and safety"
                ]
            }
        },
        
        // Conditions Section
        conditions: {
            title: "Understanding Mental Health Conditions",
            anxiety: {
                title: "Anxiety Disorders",
                description: "Learn about anxiety symptoms, coping strategies, and treatment options.",
                tags: ["GAD", "Panic", "Social"]
            },
            depression: {
                title: "Depression",
                description: "Understanding depression, its impact, and paths to recovery and support.",
                tags: ["Major", "Seasonal", "Bipolar"]
            },
            stress: {
                title: "Stress Management",
                description: "Effective techniques and strategies for managing daily stress and pressure.",
                tags: ["Work", "Life", "Chronic"]
            },
            trauma: {
                title: "Trauma & PTSD",
                description: "Support and resources for trauma survivors and PTSD recovery.",
                tags: ["PTSD", "Complex", "Recovery"]
            },
            relationships: {
                title: "Relationship Issues",
                description: "Guidance for improving relationships and communication skills.",
                tags: ["Couples", "Family", "Social"]
            },
            selfcare: {
                title: "Self-Care & Wellness",
                description: "Building healthy habits and sustainable self-care practices.",
                tags: ["Mindfulness", "Habits", "Balance"]
            },
            biPolarDisorder: {
                title: "Bipolar Disorder",
                description: "Learn about Bipolar disorder symptoms, coping strategies, and treatment options.",
                tags: ["Mania", "Depression", "Mood"]
            },
            panicdisorder: {
                title: "Panic Disorder",
                description: "Understanding Panic Disorder, its impact, and paths to recovery and support.",
                tags: ["Anxiety", "Panic", "Fear"]
            },
            delusionaldisorder: {
                title: "Delusional Disorder",
                description: "Effective techniques and strategies for managing daily stress and pressure.",
                tags: ["Paranoia", "Belief", "Persecution"]
            },
            eatingDisorder: {
                title: "Eating Disorder",
                description: "Support and resources for individuals struggling with eating disorders.",
                tags: ["Eating", "Binge", "Bulimia"]
            },
            Schizophrenia: {
                title: "Schizophrenia",
                description: "Guidance for managing symptoms and improving quality of life.",
                tags: ["Psychosis", "Vision", "Delusions"]
            },
            HistrionicPersonalityDisorder: {
                title: "Histrionic Personality Disorder",
                description: "Building healthy habits and sustainable self-care practices.",
                tags: ["Emotional", "Dramatic", "Pose"]
            },
            Trichotillomania: {
                title: "Trichotillomania",
                description: "Replace pulling with soothing habits every urge.",
                tags: ["Hair Pulling", "Urge", "Relief"]
            },
            anankasticPersonalityDisorder: {
                title: "Anankastic Personality Disorder",
                description: "Building flexibility daily brings peace and balance.",
                tags: ["Perfectionist", "Neat", "Fixed"]
            },
            avoidantPersonalityDisorder: {
                title: "Avoidant Personality Disorder",
                description: "Building courage slowly eases fear and isolation.",
                tags: ["Shy", "Fearful", "Withdrawn"]
            },
            intermittentExplosiveDisorder: {
                title: "Intermittent Explosive Disorder",
                description: "Building calm habits prevents sudden anger and harm.",
                tags: ["Anger", "Impulsive", "Intense"]
            },
            bodyDysmorphicDisorder: {
                title: "Body Dysmorphic Disorder",
                description: "Building self-love reduces harmful thoughts about appearance.",
                tags: ["Critical", "Anxious", "Insecure"]
            },
            maladaptiveDaydreaming: {
                title: "Maladaptive Daydreaming",
                description: "Building focus helps ground dreams into reality.",
                tags: ["Distracted", "Dreamy", "Avoidant"]
            },
            prolongedGriefDisorder: {
                title: "Prolonged Grief Disorder",
                description: "Building support eases pain and nurtures healing.",
                tags: ["Sad", "Persistent", "Lonely"]
            },
            attachmentDisorder: {
                title: "Attachment Disorder",
                description: "Building trust slowly strengthens emotional connection and security.",
                tags: ["Distrustful", "Isolated", "Insecure"]
            },
            dissociativeIdentityDisorder: {
                title: "Dissociative Identity Disorder",
                description: "Building integration promotes harmony between multiple identities.",
                tags: ["Dissociative", "Lost", "Complex"]
            },
            loadMore: "Load More"
        },
        
        // Blog Section
        blog: {
            title: "Testimony",
            reviewTitle: "Your Review",
            namePlaceholder: "Your Name",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Message",
            submitButton: "Submit",
            successTitle: "Form Submitted Successfully!",
            successMessage: "Thanks for your input – your submission helps us improve. Continue exploring more resources.",
            nameError: "Please enter your name (at least 2 characters)",
            subjectError: "Please enter a subject (at least 3 characters)",
            messageError: "Please enter a message (at least 10 characters)",
            posts: {
                post1: {
                    title: "Finding Calm When My Heart Won't Slow Down",
                    description: "After five years of daily panic attacks, I discovered grounding exercises that turned my anxiety into a manageable rhythm.",
                    author: "By Rajan Patel"
                },
                post2: {
                    title: "Why Therapy Is My Lifeline, Not a Luxury",
                    description: "When depression made me feel invisible, a consistent therapist helped me rebuild my self-worth, one session at a time.",
                    author: "By Mara Kim"
                },
                post3: {
                    title: "Together We Thrive: Peer Support in Recovery",
                    description: "Joining a local support group gave me both accountability and compassion, proving that shared experiences heal faster.",
                    author: "By Emily Torres"
                },
                post4: {
                    title: "Mindfulness at Work: A Daily Reset",
                    description: "Setting aside ten minutes for focused breathing at lunchtime reduced my stress spike and increased workplace creativity.",
                    author: "By Arun Gupta"
                },
                post5: {
                    title: "Building Resilience After Trauma",
                    description: "Through guided imagery and community art projects, I reclaimed joy in small moments, learning that healing is a journey, not a destination.",
                    author: "By Sofia Reyes"
                },
                post6: {
                    title: "Digital Detox & Mental Clarity",
                    description: "Cutting screen time to 30 minutes a day helped me rediscover reading, journaling, and deep breathing — all of which brought calm to my mind.",
                    author: "By Liam Patel"
                }
            },
            testimony: "Testimony",
            comments: "Comments"
        },
        
        // Booking Section
        booking: {
            title: "Schedule Appointment",
            nameLabel: "Name:",
            namePlaceholder: "Your Name",
            emailLabel: "Email:",
            emailPlaceholder: "Your Email",
            phoneLabel: "Phonenumber:",
            phonePlaceholder: "Your Phone",
            datePlaceholder: "Your Booking Date",
            subjectLabel: "Subject:",
            subjectPlaceholder: "Subject",
            messageLabel: "Message",
            messagePlaceholder: "Message",
            submitButton: "Submit"
        },
        
        // Chat Section
        chat: {
            crisisBanner: "If you're in crisis, please call 988 (Suicide & Crisis Lifeline) or 911 for immediate help",
            userProfile: "Anonymous User",
            safeSpace: "Safe & Confidential",
            moodQuestion: "How are you feeling?",
            quickTools: "Quick Tools",
            breathingExercise: "Breathing Exercise",
            guidedMeditation: "Guided Meditation",
            journalEntry: "Journal Entry",
            copingStrategies: "Coping Strategies",
            sessionInfo: "Session Info",
            duration: "Duration",
            encrypted: "End-to-end encrypted",
            endSession: "End Session",
            supportAssistant: "Support Assistant",
            available: "Available 24/7 • Confidential Support",
            clearChat: "Clear Chat",
            welcomeTitle: "Welcome to InnerNest",
            welcomeMessage: "This is a safe, confidential space where you can express yourself freely.",
            confidential: "100% Confidential",
            nonjudgmental: "Non-judgmental Support",
            available247: "Available 24/7",
            promptsLabel: "Quick conversation starters:",
            feelingAnxious: "I'm feeling anxious",
            needTalk: "Need someone to talk to",
            troubleSleeping: "Trouble sleeping",
            feelingOverwhelmed: "Feeling overwhelmed",
            copingStrategiesPrompt: "Coping strategies",
            messagePlaceholder: "Type your message here... Remember, this is a safe space.",
            pressEnter: "Press Enter to send, Shift+Enter for new line"
        },
        
        // Footer
        footer: {
            tagline: "Your sanctuary for mental wellness and growth. We provide compassionate support, evidence-based resources, and practical tools to help you manage anxiety, depression, stress, and relationship challenges. Explore guided exercises, informative articles, community stories, and professional connections designed to build resilience, foster self-care, and promote long-term well-being.",
            quickLinks: "Quick Links",
            home: "Home",
            services: "Services",
            blog: "Blog",
            contact: "Contact",
            support: "Support",
            social: "Social",
            instagram: "Instagram",
            discord: "Discord",
            crisis: "Crisis Support",
            resources: "Resources",
            faq: "FAQ",
            copyright: "© 2025 InnerNest. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        
        // Emergency Contacts
        emergency: {
            title: "Crisis Support Resources",
            subtitle: "You are not alone. Help is available 24/7.",
            ohioTitle: "Ohio Hot-Lines",
            nationalTitle: "National Hot-Lines",
            suicidePrevention: "Suicide Prevention",
            call: "Call",
            text: "Text",
            website: "Website",
            immediateHelp: "If you're in immediate danger, call 911",
            close: "Close"
        },
        
        // Games Popup
        games: {
            title: "Stress Relief Mini Games",
            subtitle: "Choose a game to relax and unwind",
            closeAriaLabel: "Close games menu",
            backToGames: "Back to Games",
            categories: {
                relaxation: "Relaxation",
                interactive: "Interactive",
                creative: "Creative",
                cognitive: "Cognitive",
                mindful: "Mindful",
                active: "Active",
                puzzle: "Puzzle"
            },
            gamesList: {
                breathing: {
                    title: "Breathing Exercise",
                    description: "Guided breathing for calm"
                },
                bubble: {
                    title: "Pop Bubbles",
                    description: "Pop bubbles to release stress"
                },
                paint: {
                    title: "Zen Paint",
                    description: "Draw to express yourself"
                },
                memory: {
                    title: "Memory Match",
                    description: "Focus your mind"
                },
                typing: {
                    title: "Mindful Typing",
                    description: "Type away your worries"
                },
                garden: {
                    title: "Zen Garden",
                    description: "Create peaceful patterns"
                },
                whackamole: {
                    title: "Stress Whack",
                    description: "Whack away your stress"
                },
                balloon: {
                    title: "Balloon Pop",
                    description: "Pop floating balloons"
                },
                simon: {
                    title: "Memory Melody",
                    description: "Follow the pattern"
                },
                colormatch: {
                    title: "Color Match",
                    description: "Match the colors quickly"
                },
                mandala: {
                    title: "Mandala Creator",
                    description: "Create symmetrical art"
                },
                starfield: {
                    title: "Starfield Journey",
                    description: "Relax in space"
                },
                wordsearch: {
                    title: "Calm Word Search",
                    description: "Find peaceful words"
                },
                zen2048: {
                    title: "Zen 2048",
                    description: "Combine tiles mindfully"
                },
                meditation: {
                    title: "Guided Meditation",
                    description: "Audio meditation session"
                }
            },
            alerts: {
                comingSoon: "Coming soon! This feature is under development.",
                memoryWin: "🎉 Congratulations! You won in {moves} moves!",
                whackGameOver: "🎯 Game Over! Your score: {score}",
                paintFinalScore: "🎨 Final Score: {score}",
                wordSearchComplete: "🎉 Congratulations! You found all words!"
            }
        },
        
        // Alert Messages
        alerts: {
            therapyOptions: "Professional Therapy\n\nConnect with licensed therapists:\n• Individual counseling\n• Specialized treatment approaches\n• Flexible scheduling\n• Online and in-person options\n\nContact us to schedule your consultation!",
            groupSessions: "Group Sessions\n\nJoin our supportive community:\n• Anxiety support groups\n• Depression recovery circles\n• Stress management workshops\n• Trauma healing groups\n\nFind your group and start healing together!",
            resourcesLibrary: "Resources Library\n\nExplore our comprehensive collection:\n• Educational articles\n• Self-help guides\n• Meditation resources\n• Crisis support information\n\nAccess tools for your mental health journey!",
            bookAppointment: "Book Appointment\n\nWe'll connect you with a qualified mental health professional.\n\nFeatures:\n• Choose your preferred therapist\n• Select convenient time slots\n• Online or in-person sessions\n• Insurance verification assistance\n\nCall us at: (555) 123-MIND\nOr visit our booking portal online!",
            findResources: "Find Resources\n\nDiscover helpful {resource}:\n\n• Educational materials\n• Interactive tools\n• Support group finder\n• Crisis hotlines\n• Professional referrals\n\nVisit our resources section for comprehensive support!",
            resourceTypes: {
                anxiety: "anxiety management tools and exercises",
                depression: "depression support resources and guides",
                stress: "stress reduction techniques and worksheets",
                trauma: "trauma recovery resources and support groups",
                relationships: "relationship building tools and communication guides",
                selfcare: "self-care planning tools and wellness activities",
                default: "mental health resources"
            }
        }
    },
    
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            blog: "Bitácora",
            chat: "Charla",
            book: "Reservar"
        },
        
        // Sección Principal
        hero: {
            title: "Bienvenido a Tu Viaje de Salud Mental",
            subtitle: "InnerNest es tu espacio seguro para el bienestar mental, el autodescubrimiento y el crecimiento. Conéctate con profesionales, accede a recursos y construye resiliencia.",
            games: "Juegos",
            gamesDesc: "Para aliviar el estrés",
            support: "Apoyo",
            supportDesc: "Orientación profesional",
            mindfulness: "Atención plena",
            mindfulnessDesc: "Bienestar mental"
        },
        about: {
            title: "Acerca de Nosotros",
            teamPicture: "Foto del Equipo",
            description: "Hola de los creadores de InnerNest — un espacio construido para traer paz, comprensión y conexión a cualquiera que navegue su viaje de salud mental. Comenzamos InnerNest porque creemos que la salud mental merece tanto cuidado y conversación como la salud física. A lo largo de los años, hemos aprendido cuán poderoso puede ser pausar, reflexionar y compartir — ya sea a través de escribir en un diario, música, mindfulness, o simplemente conectar con otros que entienden. Aquí, nuestro objetivo es hacer el bienestar mental más accesible y menos intimidante. InnerNest ofrece artículos, herramientas y recursos que fomentan el equilibrio, la curación y la autoconciencia. Ya sea que estés aprendiendo a manejar la ansiedad, buscando calma a través del mindfulness, o simplemente necesitando un recordatorio de que no estás solo — este es tu lugar para respirar y reiniciar. La salud mental no es un destino — es un viaje. Y InnerNest está aquí para ayudarte a encontrar tu paz en el camino. 🌸"
        },
        disorders: {
            anxiety: {
                title: "Trastornos de Ansiedad",
                description: "Los trastornos de ansiedad se caracterizan por miedo excesivo, preocupación y alteraciones conductuales relacionadas. Incluyen el trastorno de ansiedad generalizada (TAG), trastorno de pánico y trastorno de ansiedad social. Estas condiciones van más allá del nerviosismo normal y pueden impactar significativamente el funcionamiento diario.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Preocupación excesiva difícil de controlar",
                    "Inquietud, sentirse al límite o tenso",
                    "Latidos cardíacos rápidos, sudoración, temblores",
                    "Dificultad para concentrarse o mente en blanco",
                    "Trastornos del sueño y tensión muscular",
                    "Evitación de situaciones que desencadenan ansiedad"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia Cognitivo Conductual (TCC) para identificar y cambiar patrones de pensamiento",
                    "Medicamentos como ISRS o benzodiazepinas según prescripción",
                    "Técnicas de relajación incluyendo respiración profunda y relajación muscular progresiva",
                    "Ejercicio regular y hábitos de sueño saludables",
                    "Meditación mindfulness y ejercicios de conexión a tierra"
                ]
            },
            depression: {
                title: "Depresión",
                description: "La depresión es un trastorno del estado de ánimo que causa sentimientos persistentes de tristeza y pérdida de interés. Afecta cómo te sientes, piensas y manejas las actividades diarias. El trastorno depresivo mayor, trastorno afectivo estacional y depresión bipolar son tipos comunes.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Estado de ánimo triste, ansioso o vacío persistente",
                    "Pérdida de interés en actividades que antes disfrutaba",
                    "Cambios en el apetito y peso",
                    "Trastornos del sueño (insomnio o dormir en exceso)",
                    "Fatiga y disminución de energía",
                    "Sentimientos de inutilidad o culpa excesiva",
                    "Dificultad para pensar, concentrarse o tomar decisiones"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Psicoterapia (terapia de conversación) incluyendo TCC y terapia interpersonal",
                    "Medicamentos antidepresivos según prescripción médica",
                    "Actividad física regular y ejercicio",
                    "Terapia de luz para trastorno afectivo estacional",
                    "Grupos de apoyo y apoyo entre pares",
                    "Establecer rutina y mantener conexiones sociales"
                ]
            },
            stress: {
                title: "Manejo del Estrés",
                description: "El estrés crónico ocurre cuando la respuesta al estrés del cuerpo se activa con demasiada frecuencia o por mucho tiempo. Puede resultar de presión laboral, cambios de vida o dificultades continuas. Aunque el estrés es normal, el estrés crónico puede llevar a problemas de salud graves.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Dolores de cabeza y tensión muscular",
                    "Fatiga y problemas de sueño",
                    "Irritabilidad y cambios de humor",
                    "Dificultad para concentrarse",
                    "Cambios en el apetito",
                    "Síntomas físicos como malestar estomacal o dolor en el pecho"
                ],
                treatmentTitle: "Estrategias de Manejo",
                treatments: [
                    "Técnicas de gestión del tiempo y priorización",
                    "Ejercicio regular y actividad física",
                    "Prácticas de relajación como yoga, meditación o tai chi",
                    "Límites saludables y aprender a decir no",
                    "Apoyo social y conexión con otros",
                    "Consejería profesional o programas de manejo del estrés"
                ]
            },
            trauma: {
                title: "Trauma y TEPT",
                description: "El Trastorno de Estrés Postraumático (TEPT) puede desarrollarse después de experimentar o presenciar eventos traumáticos. El TEPT complejo resulta de trauma prolongado. Estas condiciones involucran memorias intrusivas, conductas de evitación y cambios en el estado de ánimo y pensamiento.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Memorias intrusivas, flashbacks o pesadillas",
                    "Evitación de recordatorios del trauma",
                    "Cambios negativos en pensamientos y estado de ánimo",
                    "Hipervigilancia y respuesta de sobresalto exagerada",
                    "Dificultad para dormir y concentrarse",
                    "Entumecimiento emocional o desapego"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia cognitivo conductual enfocada en trauma (TCC-T)",
                    "Desensibilización y Reprocesamiento por Movimientos Oculares (EMDR)",
                    "Terapia de exposición prolongada",
                    "Medicamentos para manejar síntomas",
                    "Técnicas de conexión a tierra y habilidades de regulación emocional",
                    "Grupos de apoyo para sobrevivientes de trauma"
                ]
            },
            relationships: {
                title: "Problemas de Relaciones",
                description: "Las dificultades en las relaciones pueden afectar asociaciones románticas, dinámicas familiares y conexiones sociales. Los problemas comunes incluyen problemas de comunicación, desafíos de resolución de conflictos, problemas de confianza y preocupaciones de apego que impactan el bienestar emocional.",
                symptomsTitle: "Señales Comunes",
                symptoms: [
                    "Argumentos o conflictos frecuentes",
                    "Comunicación deficiente o sentirse incomprendido",
                    "Falta de intimidad emocional o conexión",
                    "Problemas de confianza o celos",
                    "Dificultad para establecer o respetar límites",
                    "Sentirse aislado o sin apoyo"
                ],
                treatmentTitle: "Soluciones y Apoyo",
                treatments: [
                    "Terapia de pareja o consejería familiar",
                    "Entrenamiento en habilidades de comunicación",
                    "Aprender técnicas de escucha activa",
                    "Estrategias de resolución de conflictos",
                    "Terapia individual para abordar patrones personales",
                    "Talleres de relaciones y grupos de apoyo"
                ]
            },
            selfcare: {
                title: "Autocuidado y Bienestar",
                description: "El autocuidado involucra actividades intencionales que promueven la salud física, mental y emocional. Construir prácticas sostenibles de bienestar ayuda a prevenir el agotamiento, manejar el estrés y mantener el bienestar general a través de mindfulness y hábitos saludables.",
                symptomsTitle: "Señales de que Necesitas Más Autocuidado",
                symptoms: [
                    "Sentirse constantemente exhausto o quemado",
                    "Descuidar las necesidades personales",
                    "Mayor irritabilidad o reactividad emocional",
                    "Disminución de la salud física",
                    "Pérdida de motivación o pasión",
                    "Dificultad para disfrutar actividades"
                ],
                treatmentTitle: "Prácticas de Autocuidado",
                treatments: [
                    "Establecer horarios regulares de sueño y vigilia",
                    "Meditación mindfulness y ejercicios de respiración",
                    "Actividad física y movimiento",
                    "Nutrición saludable e hidratación",
                    "Establecer límites y decir no",
                    "Participar en pasatiempos y actividades placenteras",
                    "Conexión social y tiempo de calidad con seres queridos"
                ]
            },
            bipolar: {
                title: "Trastorno Bipolar",
                description: "El trastorno bipolar se caracteriza por cambios extremos de humor incluyendo altibajos emocionales (manía o hipomanía) y bajos (depresión). Estos cambios afectan la energía, los niveles de actividad y la capacidad de realizar tareas diarias.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Episodios maníacos: estado de ánimo elevado, aumento de energía, necesidad reducida de sueño",
                    "Pensamientos acelerados y habla rápida",
                    "Comportamiento impulsivo o arriesgado durante fases maníacas",
                    "Episodios depresivos: bajo estado de ánimo, fatiga, pérdida de interés",
                    "Cambios extremos en actividad y niveles de energía",
                    "Dificultad para mantener relaciones y desempeño laboral"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Medicamentos estabilizadores del estado de ánimo (litio, anticonvulsivos)",
                    "Psicoterapia incluyendo TCC y terapia enfocada en la familia",
                    "Mantener horarios regulares de sueño",
                    "Seguimiento del estado de ánimo e identificación de desencadenantes",
                    "Grupos de apoyo para trastorno bipolar",
                    "Psicoeducación sobre la condición"
                ]
            },
            panic: {
                title: "Trastorno de Pánico",
                description: "El trastorno de pánico involucra ataques de pánico recurrentes e inesperados—períodos repentinos de miedo o malestar intenso. Las personas a menudo se preocupan por futuros ataques y pueden evitar situaciones donde han ocurrido ataques.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Miedo o malestar intenso repentino",
                    "Latidos cardíacos rápidos, sudoración, temblores",
                    "Falta de aire o sensación de ahogo",
                    "Dolor en el pecho y náuseas",
                    "Mareos o sensación de desmayo",
                    "Miedo a perder el control o morir",
                    "Evitación de lugares donde ocurrieron ataques"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia Cognitivo Conductual (TCC) enfocada en el pánico",
                    "Terapia de exposición para reducir comportamientos de evitación",
                    "Medicamentos ansiolíticos o antidepresivos",
                    "Técnicas de respiración y ejercicios de relajación",
                    "Estrategias de manejo de ataques de pánico",
                    "Modificaciones en el estilo de vida incluyendo reducción de cafeína"
                ]
            },
            delusional: {
                title: "Trastorno Delirante",
                description: "El trastorno delirante involucra creencias falsas persistentes (delirios) a pesar de evidencia en contrario. A diferencia de la esquizofrenia, las personas con este trastorno generalmente funcionan bien aparte de sus delirios, que a menudo involucran persecución, celos o grandiosidad.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Delirios no extraños que duran al menos un mes",
                    "Creencias de ser perseguido o conspirado en contra",
                    "Delirios celosos sobre la fidelidad de la pareja",
                    "Creencias grandiosas sobre habilidades especiales o identidad",
                    "Irritabilidad o ira relacionada con delirios",
                    "Aislamiento social debido a desconfianza"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Medicamentos antipsicóticos",
                    "Psicoterapia individual para construir confianza",
                    "Terapia Cognitivo Conductual (TCC)",
                    "Terapia familiar y psicoeducación",
                    "Tratamiento de ansiedad o depresión co-ocurrente",
                    "Construcción gradual de alianza terapéutica"
                ]
            },
            eating: {
                title: "Trastornos Alimentarios",
                description: "Los trastornos alimentarios son condiciones serias que involucran perturbaciones persistentes en comportamientos alimentarios y pensamientos angustiantes sobre peso y forma. Los tipos incluyen anorexia nerviosa, bulimia nerviosa y trastorno por atracón.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Restricción severa de ingesta de alimentos o ayuno",
                    "Comer en exceso seguido de comportamientos compensatorios",
                    "Preocupación por peso, comida y forma corporal",
                    "Imagen corporal distorsionada",
                    "Ejercicio excesivo",
                    "Retraimiento social, especialmente alrededor de comidas",
                    "Síntomas físicos: fatiga, mareos, pérdida de cabello"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia especializada en trastornos alimentarios (TCC-E, TBF, TCD)",
                    "Consejería nutricional y planificación de comidas",
                    "Monitoreo médico para complicaciones físicas",
                    "Medicamentos para condiciones co-ocurrentes",
                    "Terapia grupal y grupos de apoyo",
                    "Tratamiento hospitalario o residencial para casos severos"
                ]
            },
            schizophrenia: {
                title: "Esquizofrenia",
                description: "La esquizofrenia es un trastorno mental serio que afecta el pensamiento, sentimientos y comportamiento. Involucra psicosis incluyendo alucinaciones y delirios, junto con pensamiento desorganizado y expresión emocional reducida.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Alucinaciones (ver o escuchar cosas que no están allí)",
                    "Delirios (creencias falsas)",
                    "Habla y pensamiento desorganizado",
                    "Expresión emocional reducida",
                    "Falta de motivación y retraimiento",
                    "Dificultades cognitivas con memoria y atención"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Medicamentos antipsicóticos (tratamiento de primera línea)",
                    "Intervenciones psicosociales y entrenamiento de habilidades",
                    "Terapia Cognitivo Conductual para psicosis",
                    "Educación y apoyo familiar",
                    "Programas de empleo y vivienda con apoyo",
                    "Programas de atención especializada coordinada"
                ]
            },
            histrionic: {
                title: "Trastorno de Personalidad Histriónica",
                description: "El Trastorno de Personalidad Histriónica se caracteriza por emocionalidad excesiva y comportamiento de búsqueda de atención. Las personas con este trastorno se sienten incómodas cuando no son el centro de atención y pueden mostrar emociones cambiantes y superficiales rápidamente.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Incomodidad cuando no es el centro de atención",
                    "Comportamiento inapropiadamente seductor o provocativo",
                    "Emociones que cambian rápidamente y son superficiales",
                    "Uso de apariencia física para atraer atención",
                    "Habla impresionista y vaga",
                    "Expresión emocional exagerada",
                    "Fácilmente influenciado por otros"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Psicoterapia psicodinámica",
                    "Terapia Cognitivo Conductual",
                    "Terapia grupal para habilidades interpersonales",
                    "Entrenamiento en regulación emocional",
                    "Desarrollo de autoestima genuina",
                    "Medicamentos para ansiedad o depresión co-ocurrente"
                ]
            },
            trichotillomania: {
                title: "Tricotilomanía (Trastorno de Arrancarse el Cabello)",
                description: "La tricotilomanía involucra arrancarse el cabello recurrentemente resultando en pérdida de cabello. El comportamiento a menudo está precedido por tensión y proporciona alivio o gratificación. Se clasifica como un comportamiento repetitivo enfocado en el cuerpo.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Arrancarse el cabello recurrentemente",
                    "Pérdida de cabello notable",
                    "Tensión antes de arrancar o al resistir",
                    "Placer o alivio después de arrancar",
                    "Intentos de detener o disminuir el comportamiento",
                    "Angustia o deterioro significativo",
                    "A menudo ocurre durante relajación o concentración"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Entrenamiento de Reversión de Hábitos (ERH)",
                    "Terapia Cognitivo Conductual",
                    "Terapia de Aceptación y Compromiso (TAC)",
                    "Técnicas de control de estímulos",
                    "Medicamentos (ISRS, N-acetilcisteína)",
                    "Grupos de apoyo y apoyo entre pares"
                ]
            },
            anankastic: {
                title: "Trastorno de Personalidad Anancástica (Obsesivo-Compulsiva)",
                description: "El trastorno de personalidad anancástica involucra un patrón generalizado de preocupación por el orden, perfeccionismo y control. A diferencia del TOC, es un patrón de personalidad en lugar de pensamientos intrusivos y compulsiones.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Preocupación por detalles, reglas y orden",
                    "Perfeccionismo que interfiere con la finalización de tareas",
                    "Devoción excesiva al trabajo",
                    "Inflexibilidad sobre moralidad y valores",
                    "Reticencia a delegar tareas",
                    "Rigidez y terquedad",
                    "Dificultad para desechar artículos gastados"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Psicoterapia psicodinámica",
                    "Terapia Cognitivo Conductual para desafiar pensamiento rígido",
                    "Entrenamiento en relajación",
                    "Ejercicios de flexibilidad",
                    "Terapia interpersonal",
                    "Medicamentos para ansiedad si está presente"
                ]
            },
            avoidant: {
                title: "Trastorno de Personalidad Evitativa",
                description: "El Trastorno de Personalidad Evitativa involucra un patrón generalizado de inhibición social, sentimientos de inadecuación e hipersensibilidad a la evaluación negativa. Las personas con este trastorno desean relaciones pero las evitan por miedo al rechazo.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Evitación de actividades sociales por miedo a la crítica",
                    "Falta de disposición a involucrarse a menos que esté seguro de ser querido",
                    "Restricción en relaciones íntimas",
                    "Preocupación por ser criticado o rechazado",
                    "Inhibido en situaciones sociales nuevas",
                    "Se ve a sí mismo como socialmente inepto o inferior",
                    "Reticencia a tomar riesgos personales"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia Cognitivo Conductual",
                    "Entrenamiento en habilidades sociales",
                    "Terapia de exposición para situaciones sociales",
                    "Terapia de esquemas",
                    "Terapia grupal para práctica interpersonal",
                    "Medicamentos para ansiedad o depresión co-ocurrente"
                ]
            },
            intermittentExplosive: {
                title: "Trastorno Explosivo Intermitente",
                description: "El Trastorno Explosivo Intermitente involucra episodios repetidos y repentinos de comportamiento impulsivo, agresivo, violento o explosiones verbales airadas groseramente desproporcionadas a la situación.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Explosiones conductuales recurrentes",
                    "Agresión verbal o agresión física",
                    "Ira impulsiva desproporcionada al desencadenante",
                    "Tensión o excitación antes del episodio",
                    "Alivio después, seguido de remordimiento",
                    "Angustia o deterioro significativo",
                    "Daño a propiedad o relaciones"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia Cognitivo Conductual enfocada en manejo de ira",
                    "Técnicas de relajación y manejo del estrés",
                    "Medicamentos (ISRS, estabilizadores del estado de ánimo)",
                    "Entrenamiento en control de impulsos",
                    "Desarrollo de habilidades de comunicación",
                    "Evitar desencadenantes cuando sea posible"
                ]
            },
            bodyDysmorphic: {
                title: "Trastorno Dismórfico Corporal",
                description: "El Trastorno Dismórfico Corporal involucra preocupación por defectos percibidos en la apariencia física que no son observables o parecen menores para otros. Esta preocupación causa angustia y deterioro significativos.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Preocupación por defectos percibidos en la apariencia",
                    "Comportamientos repetitivos (revisar espejos, arreglo excesivo)",
                    "Comparar apariencia con otros",
                    "Buscar tranquilización sobre la apariencia",
                    "Evitación de situaciones sociales",
                    "Buscar procedimientos cosméticos con insatisfacción",
                    "Angustia y deterioro funcional significativos"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia Cognitivo Conductual (TCC) para TDC",
                    "Exposición y Prevención de Respuesta",
                    "ISRS (a menudo en dosis más altas)",
                    "Reentrenamiento perceptual",
                    "Intervenciones basadas en mindfulness",
                    "Evitar procedimientos cosméticos durante síntomas activos"
                ]
            },
            maladaptiveDaydreaming: {
                title: "Soñar Despierto Desadaptativo",
                description: "El Soñar Despierto Desadaptativo involucra actividad de fantasía extensa que reemplaza la interacción humana e interfiere con el funcionamiento académico, interpersonal o vocacional. El soñar despierto es vívido, inmersivo y a menudo acompañado de movimientos repetitivos.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Soñar despierto intenso y vívido durante horas",
                    "Acompañado de movimientos repetitivos (caminar, mecerse)",
                    "Desencadenado por eventos de la vida real o estímulos sensoriales",
                    "Dificultad para detener o controlar los sueños despiertos",
                    "Interferencia con el funcionamiento diario",
                    "Fuerte deseo de continuar soñando despierto",
                    "Angustia cuando no puede soñar despierto"
                ],
                treatmentTitle: "Estrategias de Manejo",
                treatments: [
                    "Terapia Cognitivo Conductual",
                    "Técnicas de mindfulness y conexión a tierra",
                    "Tiempo programado para soñar despierto con límites",
                    "Identificar y manejar desencadenantes",
                    "Aumentar el compromiso con el mundo real",
                    "Tratamiento de condiciones subyacentes (TDAH, TOC)"
                ]
            },
            prolongedGrief: {
                title: "Trastorno de Duelo Prolongado",
                description: "El Trastorno de Duelo Prolongado involucra duelo intenso y persistente que dura más de 12 meses después de la muerte de un ser querido. El duelo es lo suficientemente severo como para deteriorar significativamente el funcionamiento y la calidad de vida.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Anhelo o añoranza intensa por el fallecido",
                    "Preocupación con pensamientos o recuerdos",
                    "Dificultad para aceptar la muerte",
                    "Sentir que la vida no tiene sentido sin el fallecido",
                    "Dolor emocional intenso",
                    "Evitación de recordatorios de la pérdida",
                    "Retraimiento social y aislamiento"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia para Trastorno de Duelo Prolongado (TDP-T)",
                    "Tratamiento de Duelo Complicado (TDC)",
                    "Terapia Cognitivo Conductual",
                    "Grupos de apoyo para el duelo",
                    "Reconstrucción de significado y terapia narrativa",
                    "Antidepresivos si hay depresión co-ocurrente"
                ]
            },
            attachment: {
                title: "Trastorno de Apego",
                description: "Los trastornos de apego se desarrollan a partir de patrones de apego interrumpidos en la infancia temprana. Involucran dificultad para formar vínculos emocionales saludables y pueden manifestarse como compromiso social inhibido o desinhibido, afectando las relaciones a lo largo de la vida.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Dificultad para confiar o conectar con otros",
                    "Evitación de consuelo o afecto",
                    "Falta de respuesta emocional",
                    "Amabilidad indiscriminada (tipo desinhibido)",
                    "Miedo al abandono o rechazo",
                    "Dificultad para regular emociones",
                    "Problemas conductuales y agresión"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Terapia basada en apego",
                    "Intervenciones enfocadas en trauma",
                    "Terapia familiar y entrenamiento de cuidadores",
                    "Terapia de juego para niños",
                    "Crear relaciones estables y consistentes",
                    "Entrenamiento en habilidades de regulación emocional"
                ]
            },
            dissociativeIdentity: {
                title: "Trastorno de Identidad Disociativo",
                description: "El Trastorno de Identidad Disociativo (TID), anteriormente llamado trastorno de personalidad múltiple, involucra la presencia de dos o más estados de personalidad distintos. Típicamente se desarrolla como respuesta a trauma infantil severo e involucra interrupción de identidad y memoria.",
                symptomsTitle: "Síntomas",
                symptoms: [
                    "Dos o más estados de personalidad distintos",
                    "Lagunas en la memoria más allá del olvido normal",
                    "Despersonalización (sentirse separado de uno mismo)",
                    "Desrealización (sentir que el mundo no es real)",
                    "Confusión y alteración de identidad",
                    "Pérdida de tiempo y posesiones inexplicables",
                    "Voces o diálogo interno"
                ],
                treatmentTitle: "Opciones de Tratamiento",
                treatments: [
                    "Psicoterapia a largo plazo (tratamiento primario)",
                    "Terapia de trauma orientada por fases",
                    "EMDR para procesamiento de trauma",
                    "Terapia Dialéctico Conductual (TDC)",
                    "Integración o colaboración entre estados de identidad",
                    "Medicamentos para síntomas co-ocurrentes",
                    "Construcción de cooperación interna y seguridad"
                ]
            }
        },
    
        
        // Sección de Condiciones
        conditions: {
            title: "Comprendiendo las Condiciones de Salud Mental",
            anxiety: {
                title: "Trastornos de Ansiedad",
                description: "Aprende sobre los síntomas de ansiedad, estrategias de afrontamiento y opciones de tratamiento.",
                tags: ["TAG", "Pánico", "Social"]
            },
            depression: {
                title: "Depresión",
                description: "Comprendiendo la depresión, su impacto y caminos hacia la recuperación y el apoyo.",
                tags: ["Mayor", "Estacional", "Bipolar"]
            },
            stress: {
                title: "Manejo del Estrés",
                description: "Técnicas y estrategias efectivas para manejar el estrés diario y la presión.",
                tags: ["Trabajo", "Vida", "Crónico"]
            },
            trauma: {
                title: "Trauma y TEPT",
                description: "Apoyo y recursos para sobrevivientes de trauma y recuperación de TEPT.",
                tags: ["TEPT", "Complejo", "Recuperación"]
            },
            relationships: {
                title: "Problemas de Relaciones",
                description: "Orientación para mejorar las relaciones y habilidades de comunicación.",
                tags: ["Parejas", "Familia", "Social"]
            },
            selfcare: {
                title: "Autocuidado y Bienestar",
                description: "Construyendo hábitos saludables y prácticas sostenibles de autocuidado.",
                tags: ["Mindfulness", "Hábitos", "Balance"]
            },
            biPolarDisorder: {
                title: "Trastorno Bipolar",
                description: "Aprende sobre los síntomas del trastorno bipolar, estrategias de afrontamiento y opciones de tratamiento.",
                tags: ["Manía", "Depresión", "Estado de ánimo"]
            },
            panicdisorder: {
                title: "Trastorno de Pánico",
                description: "Comprendiendo el trastorno de pánico, su impacto y caminos hacia la recuperación y el apoyo.",
                tags: ["Ansiedad", "Pánico", "Miedo"]
            },
            delusionaldisorder: {
                title: "Trastorno Delirante",
                description: "Técnicas y estrategias efectivas para manejar el estrés diario y la presión.",
                tags: ["Paranoia", "Creencia", "Persecución"]
            },
            eatingDisorder: {
                title: "Trastorno Alimentario",
                description: "Apoyo y recursos para personas que luchan con trastornos alimentarios.",
                tags: ["Alimentación", "Atracón", "Bulimia"]
            },
            Schizophrenia: {
                title: "Esquizofrenia",
                description: "Orientación para manejar los síntomas y mejorar la calidad de vida.",
                tags: ["Psicosis", "Visión", "Delirios"]
            },
            HistrionicPersonalityDisorder: {
                title: "Trastorno de Personalidad Histriónico",
                description: "Construyendo hábitos saludables y prácticas sostenibles de autocuidado.",
                tags: ["Emocional", "Dramático", "Pose"]
            },
            Trichotillomania: {
                title: "Tricotilomanía",
                description: "Reemplazar el tirón con hábitos calmantes en cada impulso.",
                tags: ["Tirón de pelo", "Impulso", "Alivio"]
            },
            anankasticPersonalityDisorder: {
                title: "Trastorno de Personalidad Anancástico",
                description: "Construir flexibilidad diaria trae paz y equilibrio.",
                tags: ["Perfeccionista", "Ordenado", "Fijo"]
            },
            avoidantPersonalityDisorder: {
                title: "Trastorno de Personalidad Evitativa",
                description: "Construir coraje lentamente alivia el miedo y el aislamiento.",
                tags: ["Tímido", "Temeroso", "Retraído"]
            },
            intermittentExplosiveDisorder: {
                title: "Trastorno Explosivo Intermitente",
                description: "Construir hábitos de calma previene la ira repentina y el daño.",
                tags: ["Ira", "Impulsivo", "Intenso"]
            },
            bodyDysmorphicDisorder: {
                title: "Trastorno Dismórfico Corporal",
                description: "Construir amor propio reduce pensamientos dañinos sobre la apariencia.",
                tags: ["Crítico", "Ansioso", "Inseguro"]
            },
            maladaptiveDaydreaming: {
                title: "Soñar Despierto Desadaptativo",
                description: "Construir enfoque ayuda a aterrizar sueños en la realidad.",
                tags: ["Distraído", "Soñador", "Evitador"]
            },
            prolongedGriefDisorder: {
                title: "Trastorno de Duelo Prolongado",
                description: "Construir apoyo alivia el dolor y nutre la curación.",
                tags: ["Triste", "Persistente", "Solitario"]
            },
            attachmentDisorder: {
                title: "Trastorno de Apego",
                description: "Construir confianza lentamente fortalece la conexión emocional y la seguridad.",
                tags: ["Desconfiado", "Aislado", "Inseguro"]
            },
            dissociativeIdentityDisorder: {
                title: "Trastorno de Identidad Disociativo",
                description: "Construir integración promueve armonía entre múltiples identidades.",
                tags: ["Disociativo", "Perdido", "Complejo"]
            },
            loadMore: "Cargar Más"
        },
        
        // Sección de Blog
        blog: {
            title: "Testimonio",
            reviewTitle: "Tu Reseña",
            namePlaceholder: "Tu Nombre",
            subjectPlaceholder: "Asunto",
            messagePlaceholder: "Mensaje",
            submitButton: "Enviar",
            successTitle: "¡Formulario Enviado Exitosamente!",
            successMessage: "Gracias por tu aporte, tu envío nos ayuda a mejorar. Continúa explorando más recursos.",
            nameError: "Por favor ingresa tu nombre (al menos 2 caracteres)",
            subjectError: "Por favor ingresa un asunto (al menos 3 caracteres)",
            messageError: "Por favor ingresa un mensaje (al menos 10 caracteres)",
            posts: {
                post1: {
                    title: "Encontrando la Calma Cuando Mi Corazón No Se Calma",
                    description: "Después de cinco años de ataques de pánico diarios, descubrí ejercicios de conexión a tierra que convirtieron mi ansiedad en un ritmo manejable.",
                    author: "Por Rajan Patel"
                },
                post2: {
                    title: "Por Qué la Terapia Es Mi Salvavidas, No un Lujo",
                    description: "Cuando la depresión me hizo sentir invisible, un terapeuta constante me ayudó a reconstruir mi autoestima, sesión tras sesión.",
                    author: "Por Mara Kim"
                },
                post3: {
                    title: "Juntos Prosperamos: Apoyo Entre Pares en la Recuperación",
                    description: "Unirme a un grupo de apoyo local me dio responsabilidad y compasión, demostrando que las experiencias compartidas sanan más rápido.",
                    author: "Por Emily Torres"
                },
                post4: {
                    title: "Mindfulness en el Trabajo: Un Reinicio Diario",
                    description: "Dedicar diez minutos a la respiración concentrada en el almuerzo redujo mi pico de estrés y aumentó mi creatividad laboral.",
                    author: "Por Arun Gupta"
                },
                post5: {
                    title: "Construyendo Resiliencia Después del Trauma",
                    description: "A través de imágenes guiadas y proyectos de arte comunitario, recuperé la alegría en pequeños momentos, aprendiendo que la curación es un viaje, no un destino.",
                    author: "Por Sofia Reyes"
                },
                post6: {
                    title: "Desintoxicación Digital y Claridad Mental",
                    description: "Reducir el tiempo de pantalla a 30 minutos al día me ayudó a redescubrir la lectura, el diario y la respiración profunda, todo lo cual trajo calma a mi mente.",
                    author: "Por Liam Patel"
                }
            },
            testimony: "Testimonio",
            comments: "Comentarios"
        },
        
        // Sección de Reservas
        booking: {
            title: "Programar Cita",
            nameLabel: "Nombre:",
            namePlaceholder: "Tu Nombre",
            emailLabel: "Correo electrónico:",
            emailPlaceholder: "Tu Email",
            phoneLabel: "Teléfono:",
            phonePlaceholder: "Tu Teléfono",
            datePlaceholder: "Fecha de Reserva",
            subjectLabel: "Asunto:",
            subjectPlaceholder: "Asunto",
            messageLabel: "Mensaje",
            messagePlaceholder: "Mensaje",
            submitButton: "Enviar"
        },
        
        // Sección de Chat
        chat: {
            crisisBanner: "Si estás en crisis, llama al 988 (Línea de Vida para Suicidio y Crisis) o al 911 para ayuda inmediata",
            userProfile: "Usuario Anónimo",
            safeSpace: "Seguro y Confidencial",
            moodQuestion: "¿Cómo te sientes?",
            quickTools: "Herramientas Rápidas",
            breathingExercise: "Ejercicio de Respiración",
            guidedMeditation: "Meditación Guiada",
            journalEntry: "Entrada de Diario",
            copingStrategies: "Estrategias de Afrontamiento",
            sessionInfo: "Info de Sesión",
            duration: "Duración",
            encrypted: "Cifrado de extremo a extremo",
            endSession: "Terminar Sesión",
            supportAssistant: "Asistente de Apoyo",
            available: "Disponible 24/7 • Apoyo Confidencial",
            clearChat: "Limpiar Chat",
            welcomeTitle: "Bienvenido a InnerNest",
            welcomeMessage: "Este es un espacio seguro y confidencial donde puedes expresarte libremente.",
            confidential: "100% Confidencial",
            nonjudgmental: "Apoyo Sin Juicios",
            available247: "Disponible 24/7",
            promptsLabel: "Iniciadores de conversación rápidos:",
            feelingAnxious: "Me siento ansioso",
            needTalk: "Necesito hablar con alguien",
            troubleSleeping: "Problemas para dormir",
            feelingOverwhelmed: "Me siento abrumado",
            copingStrategiesPrompt: "Estrategias de afrontamiento",
            messagePlaceholder: "Escribe tu mensaje aquí... Recuerda, este es un espacio seguro.",
            pressEnter: "Presiona Enter para enviar, Shift+Enter para nueva línea"
        },
        
        // Pie de Página
        footer: {
            tagline: "Tu santuario para el bienestar mental y el crecimiento. Proporcionamos apoyo compasivo, recursos basados en evidencia y herramientas prácticas para ayudarte a manejar la ansiedad, depresión, estrés y desafíos de relaciones. Explora ejercicios guiados, artículos informativos, historias comunitarias y conexiones profesionales diseñadas para construir resiliencia, fomentar el autocuidado y promover el bienestar a largo plazo.",
            quickLinks: "Enlaces Rápidos",
            home: "Inicio",
            services: "Servicios",
            blog: "Bitácora",
            contact: "Contacto",
            support: "Apoyo",
            social: "Social",
            instagram: "Instagram",
            discord: "Discord",
            crisis: "Apoyo en Crisis",
            resources: "Recursos",
            faq: "Preguntas Frecuentes",
            copyright: "© 2025 InnerNest. Todos los derechos reservados.",
            privacy: "Política de Privacidad",
            terms: "Términos de Servicio"
        },
        
        // Contactos de Emergencia
        emergency: {
            title: "Recursos de Apoyo en Crisis",
            subtitle: "No estás solo. La ayuda está disponible 24/7.",
            ohioTitle: "Líneas Directas de Ohio",
            nationalTitle: "Líneas Directas Nacionales",
            suicidePrevention: "Prevención del Suicidio",
            call: "Llamar",
            text: "Texto",
            website: "Sitio Web",
            immediateHelp: "Si estás en peligro inmediato, llama al 911",
            close: "Cerrar"
        },
        
        // Juegos Popup
        games: {
            title: "Mini Juegos de Alivio del Estrés",
            subtitle: "Elige un juego para relajarte y descansar",
            closeAriaLabel: "Cerrar menú de juegos",
            backToGames: "Volver a Juegos",
            categories: {
                relaxation: "Relajación",
                interactive: "Interactivo",
                creative: "Creativo",
                cognitive: "Cognitivo",
                mindful: "Consciente",
                active: "Activo",
                puzzle: "Rompecabezas"
            },
            gamesList: {
                breathing: {
                    title: "Ejercicio de Respiración",
                    description: "Respiración guiada para la calma"
                },
                bubble: {
                    title: "Reventar Burbujas",
                    description: "Revienta burbujas para liberar estrés"
                },
                paint: {
                    title: "Pintura Zen",
                    description: "Dibuja para expresarte"
                },
                memory: {
                    title: "Memoria",
                    description: "Enfoca tu mente"
                },
                typing: {
                    title: "Escritura Consciente",
                    description: "Escribe tus preocupaciones"
                },
                garden: {
                    title: "Jardín Zen",
                    description: "Crea patrones pacíficos"
                },
                whackamole: {
                    title: "Golpea el Estrés",
                    description: "Golpea tu estrés"
                },
                balloon: {
                    title: "Reventar Globos",
                    description: "Revienta globos flotantes"
                },
                simon: {
                    title: "Melodía de Memoria",
                    description: "Sigue el patrón"
                },
                colormatch: {
                    title: "Coincidir Colores",
                    description: "Coincide los colores rápidamente"
                },
                mandala: {
                    title: "Creador de Mandalas",
                    description: "Crea arte simétrico"
                },
                starfield: {
                    title: "Viaje Estelar",
                    description: "Relájate en el espacio"
                },
                wordsearch: {
                    title: "Búsqueda de Palabras Tranquila",
                    description: "Encuentra palabras pacíficas"
                },
                zen2048: {
                    title: "Zen 2048",
                    description: "Combina fichas conscientemente"
                },
                meditation: {
                    title: "Meditación Guiada",
                    description: "Sesión de meditación con audio"
                }
            },
            alerts: {
                comingSoon: "¡Próximamente! Esta función está en desarrollo.",
                memoryWin: "🎉 ¡Felicitaciones! ¡Ganaste en {moves} movimientos!",
                whackGameOver: "🎯 ¡Juego Terminado! Tu puntuación: {score}",
                paintFinalScore: "🎨 Puntuación Final: {score}",
                wordSearchComplete: "🎉 ¡Felicitaciones! ¡Encontraste todas las palabras!"
            }
        },
        
        // Mensajes de Alerta
        alerts: {
            therapyOptions: "Terapia Profesional\n\nConéctate con terapeutas licenciados:\n• Consejería individual\n• Enfoques de tratamiento especializados\n• Horarios flexibles\n• Opciones en línea y presenciales\n\n¡Contáctanos para programar tu consulta!",
            groupSessions: "Sesiones Grupales\n\nÚnete a nuestra comunidad de apoyo:\n• Grupos de apoyo para ansiedad\n• Círculos de recuperación de depresión\n• Talleres de manejo del estrés\n• Grupos de sanación de trauma\n\n¡Encuentra tu grupo y comienza a sanar juntos!",
            resourcesLibrary: "Biblioteca de Recursos\n\nExplora nuestra colección completa:\n• Artículos educativos\n• Guías de autoayuda\n• Recursos de meditación\n• Información de apoyo en crisis\n\n¡Accede a herramientas para tu viaje de salud mental!",
            bookAppointment: "Reservar Cita\n\nTe conectaremos con un profesional de salud mental calificado.\n\nCaracterísticas:\n• Elige tu terapeuta preferido\n• Selecciona horarios convenientes\n• Sesiones en línea o presenciales\n• Asistencia de verificación de seguro\n\nLlámanos al: (555) 123-MIND\n¡O visita nuestro portal de reservas en línea!",
            findResources: "Encontrar Recursos\n\nDescubre {resource} útiles:\n\n• Materiales educativos\n• Herramientas interactivas\n• Buscador de grupos de apoyo\n• Líneas directas de crisis\n• Referencias profesionales\n\n¡Visita nuestra sección de recursos para apoyo integral!",
            resourceTypes: {
                anxiety: "herramientas y ejercicios de manejo de ansiedad",
                depression: "recursos de apoyo y guías para la depresión",
                stress: "técnicas de reducción de estrés y hojas de trabajo",
                trauma: "recursos de recuperación de trauma y grupos de apoyo",
                relationships: "herramientas de construcción de relaciones y guías de comunicación",
                selfcare: "herramientas de planificación de autocuidado y actividades de bienestar",
                default: "recursos de salud mental"
            }
        }
    }
};

// Language Manager - Single unified class
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getCurrentLanguage();
        this.init();
    }
    
    getCurrentLanguage() {
        const esBtn = document.querySelector('.lang-btn[data-lang="es"]');
        return esBtn && esBtn.classList.contains('active') ? 'es' : 'en';
    }
    
    init() {
        this.setupEventListeners();
        this.translatePage();
    }
    
    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const newLang = e.target.dataset.lang;
                this.changeLanguage(newLang);
            });
        });
    }
    
    changeLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        this.translatePage();
        this.showNotification(lang === 'en' ? 'Language changed to English' : 'Idioma cambiado a Español');
    }
    
    translatePage() {
        const t = translations[this.currentLanguage];
        
        // Translate navigation
        this.translateNav(t.nav);

        // Translate About Us
        this.translateAboutSection(t.about);
        
        // Translate hero section
        this.translateHero(t.hero);
        
        // Translate conditions section
        this.translateConditions(t.conditions);
        
        // Translate blog section if present
        this.translateBlogSection(t.blog);
        
        // Translate booking section if present
        this.translateBookingSection(t.booking);
        
        // Translate chat section if present
        this.translateChatSection(t.chat);
        
        // Translate footer
        this.translateFooter(t.footer);
        
        // Translate games popup if present
        this.translateGamesPopup(t.games);
    }
    
    translateNav(nav) {
        this.translateElement('.nav-link#home .nav-text', nav.home);
        this.translateElement('.nav-link#blog .nav-text', nav.blog);
        this.translateElement('.nav-link#chatb .nav-text', nav.chat);
        this.translateElement('.nav-link#booka .nav-text', nav.book);
        
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        if (mobileLinks.length >= 4) {
            const texts = [nav.home, nav.blog, nav.chat, nav.book];
            mobileLinks.forEach((link, i) => {
                const textNode = Array.from(link.childNodes).find(n => n.nodeType === 3);
                if (textNode) textNode.textContent = ' ' + texts[i];
            });
        }
    }
    
    
    translateHero(hero) {
        this.translateElement('.hero-title', hero.title);
        this.translateElement('.hero-subtitle', hero.subtitle);
        
        const floatingCards = document.querySelectorAll('.floating-card');
        if (floatingCards.length >= 3) {
            const cards = [
                { h3: hero.games, p: hero.gamesDesc },
                { h3: hero.support, p: hero.supportDesc },
                { h3: hero.mindfulness, p: hero.mindfulnessDesc }
            ];
            floatingCards.forEach((card, i) => {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3) h3.textContent = cards[i].h3;
                if (p) p.textContent = cards[i].p;
            });
        }
    }
    translateAboutSection(about) {
        // Title
        const aboutTitle = document.querySelector('#about_title h2');
        if (aboutTitle) aboutTitle.textContent = about.title;
        
        // Team Picture
        const teamPicture = document.querySelector('#team-picture');
        if (teamPicture) teamPicture.textContent = about.teamPicture;
        
        // Description
        const aboutDescription = document.querySelector('#about_description p');
        if (aboutDescription) aboutDescription.textContent = about.description;
    }
    
    translateConditions(conditions) {
        // Main title
        const titles = document.querySelectorAll('#disoder_preview h2, .description h2');
        titles.forEach(title => {
            if (title.textContent.includes('Understanding') || title.textContent.includes('Comprendiendo')) {
                title.textContent = conditions.title;
            }
        });
        
        // Individual conditions
        Object.keys(conditions).forEach(key => {
            if (key !== 'title' && key !== 'loadMore') {
                this.translateCondition(key, conditions[key]);
            }
        });
        
        // Load More button
        const loadMore = document.querySelector('#learnmore h4');
        if (loadMore) loadMore.textContent = conditions.loadMore;
    }
    
    translateCondition(id, translation) {
        const element = document.getElementById(id);
        if (!element) return;
        
        const title = element.querySelector('h3');
        const description = element.querySelector('p');
        const tags = element.querySelectorAll('.tag');
        
        if (title) title.textContent = translation.title;
        if (description) description.textContent = translation.description;
        if (tags.length === translation.tags.length) {
            tags.forEach((tag, index) => {
                tag.textContent = translation.tags[index];
            });
        }
        
        // Also translate the detailed disorder information section
        this.translateDetailedDisorder(id, translation);
    }
    
    translateDetailedDisorder(id, translation) {
        // Map condition IDs to their detailed section IDs
        const idMap = {
            'anxiety': 'anxiety_disorder',
            'depression': 'depression_disorder',
            'stress': 'stress_disorder',
            'trauma': 'trauma_disorder',
            'relationships': 'relationships_disorder',
            'selfcare': 'selfcare_disorder',
            'biPolarDisorder': 'bipolar_disorder',
            'panicdisorder': 'panic_disorder',
            'delusionaldisorder': 'delusional_disorder',
            'eatingDisorder': 'eating_disorder',
            'Schizophrenia': 'schizophrenia_disorder',
            'HistrionicPersonalityDisorder': 'histrionic_personality_disorder',
            'Trichotillomania': 'trichotillomania_disorder',
            'anankasticPersonalityDisorder': 'anankastic_personality_disorder',
            'avoidantPersonalityDisorder': 'avoidant_personality_disorder',
            'intermittentExplosiveDisorder': 'intermittent_explosive_disorder',
            'bodyDysmorphicDisorder': 'body_dysmorphic_disorder',
            'maladaptiveDaydreaming': 'maladaptive_daydreaming_disorder',
            'prolongedGriefDisorder': 'prolonged_grief_disorder',
            'attachmentDisorder': 'attachment_disorder',
            'dissociativeIdentityDisorder': 'dissociative_identity_disorder'
        };
        
        const detailSectionId = idMap[id];
        if (!detailSectionId) return;
        
        const detailSection = document.getElementById(detailSectionId);
        if (!detailSection) return;
        
        // Get the disorder translations from the disorders object
        const t = translations[this.currentLanguage];
        const disorderKey = this.getDisorderKey(id);
        if (!disorderKey || !t.disorders[disorderKey]) return;
        
        const disorder = t.disorders[disorderKey];
        
        // Translate the title
        const titleElement = detailSection.querySelector('#type h2');
        if (titleElement) titleElement.textContent = disorder.title;
        
        // Translate the description
        const descElement = detailSection.querySelector('#paragraph p');
        if (descElement) descElement.textContent = disorder.description;
        
        // Translate symptoms title
        const symptomsTitle = detailSection.querySelector('#disorder-symptoms h3');
        if (symptomsTitle) symptomsTitle.textContent = disorder.symptomsTitle;
        
        // Translate symptoms list
        const symptomsList = detailSection.querySelector('#symptom-list ul');
        if (symptomsList && disorder.symptoms) {
            const symptoms = symptomsList.querySelectorAll('li');
            symptoms.forEach((symptom, index) => {
                if (index < disorder.symptoms.length) {
                    symptom.textContent = disorder.symptoms[index];
                }
            });
        }
        
        // Translate treatment/cures title
        const curesTitle = detailSection.querySelector('#cures h3');
        if (curesTitle) curesTitle.textContent = disorder.treatmentTitle;
        
        // Translate treatment/cures list
        const curesList = detailSection.querySelector('#cure-list ul');
        if (curesList && disorder.treatments) {
            const cures = curesList.querySelectorAll('li');
            cures.forEach((cure, index) => {
                if (index < disorder.treatments.length) {
                    cure.textContent = disorder.treatments[index];
                }
            });
        }
    }
    
    getDisorderKey(id) {
        // Map condition IDs to disorder keys in translations
        const keyMap = {
            'anxiety': 'anxiety',
            'depression': 'depression',
            'stress': 'stress',
            'trauma': 'trauma',
            'relationships': 'relationships',
            'selfcare': 'selfcare',
            'biPolarDisorder': 'bipolar',
            'panicdisorder': 'panic',
            'delusionaldisorder': 'delusional',
            'eatingDisorder': 'eating',
            'Schizophrenia': 'schizophrenia',
            'HistrionicPersonalityDisorder': 'histrionic',
            'Trichotillomania': 'trichotillomania',
            'anankasticPersonalityDisorder': 'anankastic',
            'avoidantPersonalityDisorder': 'avoidant',
            'intermittentExplosiveDisorder': 'intermittentExplosive',
            'bodyDysmorphicDisorder': 'bodyDysmorphic',
            'maladaptiveDaydreaming': 'maladaptiveDaydreaming',
            'prolongedGriefDisorder': 'prolongedGrief',
            'attachmentDisorder': 'attachment',
            'dissociativeIdentityDisorder': 'dissociativeIdentity'
        };
        
        return keyMap[id];
    }
    
    translateBlogSection(blog) {
        // Main title
        const testTitle = document.querySelector('#test-title h2');
        if (testTitle) testTitle.textContent = blog.reviewTitle;
        
        // Form labels and placeholders
        const nameLabel = document.querySelector('#name_label');
        if (nameLabel) nameLabel.textContent = blog.nameLabel;
        
        const nameInput = document.querySelector('#name');
        if (nameInput) nameInput.placeholder = blog.namePlaceholder;
        
        const subjectLabel = document.querySelector('#subject');
        if (subjectLabel) subjectLabel.textContent = 'Asunto:';
        
        const subjectInput = document.querySelector('#subject-input');
        if (subjectInput) subjectInput.placeholder = blog.subjectPlaceholder;
        
        const messageLabel = document.querySelector('#message_label');
        if (messageLabel) messageLabel.textContent = 'Mensaje:';
        
        const messageTextarea = document.querySelector('#message');
        if (messageTextarea) messageTextarea.placeholder = blog.messagePlaceholder;
        
        // Submit button
        const submitBtn = document.querySelector('#test-submit h4');
        if (submitBtn) submitBtn.textContent = blog.submitButton;
        
        // Success message
        const successTitle = document.querySelector('#submit-message h4');
        if (successTitle) successTitle.textContent = blog.successTitle;
        
        const successMsg = document.querySelector('#submit-message p');
        if (successMsg) successMsg.textContent = blog.successMessage;
        
        // Error messages
        const nameError = document.getElementById('name-error');
        if (nameError) nameError.textContent = blog.nameError;
        
        const subjectError = document.getElementById('subject-error');
        if (subjectError) subjectError.textContent = blog.subjectError;
        
        const messageError = document.getElementById('message-error');
        if (messageError) messageError.textContent = blog.messageError;
        
        // Blog posts
        const posts = [
            { selector: '[data-blog-id="1"]', data: blog.posts.post1 },
            { selector: '[data-blog-id="2"]', data: blog.posts.post2 },
            { selector: '[data-blog-id="3"]', data: blog.posts.post3 },
            { selector: '[data-blog-id="4"]', data: blog.posts.post4 },
            { selector: '[data-blog-id="5"]', data: blog.posts.post5 },
            { selector: '[data-blog-id="6"]', data: blog.posts.post6 }
        ];
        
        posts.forEach(post => {
            const element = document.querySelector(post.selector);
            if (!element) return;
            
            const title = element.querySelector('h3');
            const description = element.querySelector('p:not([style])');
            const author = element.querySelector('p[style*="font-size: 0.9rem"]');
            
            if (title) title.textContent = post.data.title;
            if (description) description.textContent = post.data.description;
            if (author) author.textContent = post.data.author;
        });
        
        // Testimony heading on index page
        const testimonyHeading = document.querySelectorAll('h2');
        testimonyHeading.forEach(h2 => {
            if (h2.textContent.includes('Testimony') || h2.textContent.includes('Testimonio')) {
                h2.textContent = blog.title;
            }
        });
        
        // Translate testimonies on index page (without data-blog-id)
        const testimonies = document.querySelectorAll('#testimony .condition-item, .disorder-container:last-of-type .condition-item');
        const testimonyData = [
            blog.posts.post1,
            blog.posts.post2,
            blog.posts.post3,
            blog.posts.post4,
            blog.posts.post5,
            blog.posts.post6
        ];
        
        testimonies.forEach((testimony, index) => {
            if (index < testimonyData.length) {
                const h3 = testimony.querySelector('h3');
                const p = testimony.querySelector('p');
                
                if (h3 && p && !testimony.hasAttribute('data-blog-id')) {
                    // Check if this is a testimony card (has author name in h3)
                    if (h3.textContent.includes('Rajan') || h3.textContent.includes('Mara') || 
                        h3.textContent.includes('Justin') || h3.textContent.includes('Arun') || 
                        h3.textContent.includes('Sofia') || h3.textContent.includes('Liam')) {
                        // Keep the name, translate the description
                        p.textContent = testimonyData[index].description;
                    }
                }
            }
        });
        
        // Translate the main blog description on blog.html
        const blogDescription = document.querySelector('.description h2');
        if (blogDescription && blogDescription.closest('.disorder-container') && 
            (blogDescription.textContent.includes('Finding Calm') || 
             blogDescription.textContent.includes('Encontrando la Calma'))) {
            blogDescription.textContent = blog.posts.post1.title;
        }
        
        const blogDescriptionP = document.querySelector('.description p');
        if (blogDescriptionP && blogDescriptionP.closest('.disorder-container') &&
            (blogDescriptionP.textContent.includes('After five years') || 
             blogDescriptionP.textContent.includes('Después de cinco años'))) {
            blogDescriptionP.textContent = blog.posts.post1.description;
        }
    }


    
    translateBookingSection(booking) {
        // Title
        const title = document.querySelector('#s_appointment h1');
        if (title) title.textContent = booking.title;
        
        // Form fields
        const nameLabel = document.querySelector('#name_label');
        if (nameLabel) nameLabel.textContent = booking.nameLabel;
        const nameInput = document.querySelector('input[name="name"]');
        if (nameInput) nameInput.placeholder = booking.namePlaceholder;
        
        const emailLabel = document.querySelector('#email_label');
        if (emailLabel) emailLabel.textContent = booking.emailLabel;
        
        const emailInput = document.querySelector('input[name="email"]');
        if (emailInput) emailInput.placeholder = booking.emailPlaceholder;
        
        const phoneLabel = document.querySelector('#phone');
        if (phoneLabel) phoneLabel.textContent = booking.phoneLabel;
        
        const phoneInput = document.querySelector('input[name="phone"]');
        if (phoneInput) phoneInput.placeholder = booking.phonePlaceholder;
        
        const dateInput = document.querySelector('input[name="date"]');
        if (dateInput) dateInput.placeholder = booking.datePlaceholder;
        
        const subjectLabel = document.querySelector('#subject');
        if (subjectLabel) subjectLabel.textContent = booking.subjectLabel;
        
        const subjectInput = document.querySelector('input[name="subject"]');
        if (subjectInput) subjectInput.placeholder = booking.subjectPlaceholder;
        
        const messageLabel = document.querySelector('#message_label');
        if (messageLabel) messageLabel.textContent = booking.messageLabel;
        
        const messageTextarea = document.querySelector('#message');
        if (messageTextarea) messageTextarea.placeholder = booking.messagePlaceholder;
        
        const submitBtn = document.querySelector('#submit');
        if (submitBtn) submitBtn.textContent = booking.submitButton;
    }
    
    translateChatSection(chat) {
        // Crisis banner
        const crisisBanner = document.querySelector('.crisis-content span');
        if (crisisBanner) {
            const strong = crisisBanner.querySelector('strong');
            if (strong) {
                const numbers = ['988', '911'];
                let text = chat.crisisBanner;
                crisisBanner.innerHTML = text.replace('988', '<strong>988</strong>').replace('911', '<strong>911</strong>');
            }
        }
        
        // User profile
        this.translateElement('.user-info h3', chat.userProfile);
        this.translateElement('.user-status', chat.safeSpace);
        
        // Mood tracker
        this.translateElement('.mood-tracker h4', chat.moodQuestion);
        
        // Quick tools
        this.translateElement('.quick-tools h4', chat.quickTools);
        const toolBtns = document.querySelectorAll('.tool-btn span:last-child');
        if (toolBtns.length >= 4) {
            toolBtns[0].textContent = chat.breathingExercise;
            toolBtns[1].textContent = chat.guidedMeditation;
            toolBtns[2].textContent = chat.journalEntry;
            toolBtns[3].textContent = chat.copingStrategies;
        }
        
        // Session info
        this.translateElement('.session-info h4', chat.sessionInfo);
        const sessionTimeLabel = document.querySelector('.session-time');
        if (sessionTimeLabel) {
            const timeSpan = sessionTimeLabel.querySelector('span');
            if (timeSpan) {
                sessionTimeLabel.childNodes[0].textContent = chat.duration + ': ';
            }
        }
        this.translateElement('.session-privacy', `🔒 ${chat.encrypted}`);
        this.translateElement('.end-session-btn', chat.endSession);
        
        // Chat header
        this.translateElement('.assistant-info h3', chat.supportAssistant);
        const assistantStatus = document.querySelector('.assistant-status');
        if (assistantStatus) {
            const statusDot = assistantStatus.querySelector('.status-dot');
            assistantStatus.innerHTML = '';
            if (statusDot) assistantStatus.appendChild(statusDot);
            assistantStatus.appendChild(document.createTextNode(' ' + chat.available));
        }
        this.translateElement('.clear-chat-btn', chat.clearChat);
        
        // Welcome message
        this.translateElement('.welcome-message h2', chat.welcomeTitle);
        this.translateElement('.welcome-message > p', chat.welcomeMessage);
        
        const features = document.querySelectorAll('.feature span:last-child');
        if (features.length >= 3) {
            features[0].textContent = chat.confidential;
            features[1].textContent = chat.nonjudgmental;
            features[2].textContent = chat.available247;
        }
        
        // Suggested prompts
        this.translateElement('.prompts-label', chat.promptsLabel);
        const prompts = document.querySelectorAll('.prompt-chip');
        if (prompts.length >= 5) {
            prompts[0].textContent = chat.feelingAnxious;
            prompts[1].textContent = chat.needTalk;
            prompts[2].textContent = chat.troubleSleeping;
            prompts[3].textContent = chat.feelingOverwhelmed;
            prompts[4].textContent = chat.copingStrategiesPrompt;
        }
        
        // Input area
        this.translatePlaceholder('#messageInput', chat.messagePlaceholder);
        const inputHint = document.querySelector('.input-hint span');
        if (inputHint) inputHint.textContent = chat.pressEnter;
    }
    
    translateFooter(footer) {
        const footerSections = document.querySelectorAll('.footer-section');
        
        // Handle different footer structures
        if (footerSections.length >= 2) {
            // First section - InnerNest tagline (always present)
            const tagline = footerSections[0].querySelector('p');
            if (tagline) tagline.textContent = footer.tagline;
            
            // Check if we have 3 sections (index.html) or 2 sections (resources.html/blog.html with Social)
            if (footerSections.length >= 3) {
                // Index.html structure - 3 sections with Quick Links in middle
                
                // Quick Links section (second section)
                const quickLinksTitle = footerSections[1].querySelector('h4');
                if (quickLinksTitle) quickLinksTitle.textContent = footer.quickLinks;
                
                const quickLinks = footerSections[1].querySelectorAll('li a');
                if (quickLinks.length >= 4) {
                    quickLinks[0].textContent = footer.home;
                    quickLinks[1].textContent = footer.services;
                    quickLinks[2].textContent = footer.blog;
                    quickLinks[3].textContent = footer.contact;
                }
                
                // Support or Social section (third section)
                const thirdSectionTitle = footerSections[2].querySelector('h4');
                if (thirdSectionTitle) {
                    // Check if it's Support or Social section
                    if (thirdSectionTitle.textContent.includes('Support') || thirdSectionTitle.textContent.includes('Apoyo')) {
                        thirdSectionTitle.textContent = footer.support;
                        const supportLinks = footerSections[2].querySelectorAll('li a');
                        if (supportLinks.length >= 3) {
                            supportLinks[0].textContent = footer.crisis;
                            supportLinks[1].textContent = footer.resources;
                            supportLinks[2].textContent = footer.faq;
                        }
                    } else if (thirdSectionTitle.textContent.includes('Social')) {
                        thirdSectionTitle.textContent = footer.social;
                        const socialLinks = footerSections[2].querySelectorAll('li a');
                        if (socialLinks.length >= 2) {
                            socialLinks[0].textContent = footer.instagram;
                            socialLinks[1].textContent = footer.discord;
                        }
                    }
                }
            } else {
                // Resources.html/Blog.html structure - 2 sections (no Quick Links)
                
                // Second section - Check if it's Support or Social
                const secondSection = footerSections[1];
                const secondSectionTitle = secondSection.querySelector('h4');
                
                if (secondSectionTitle) {
                    // Check if it's Social section
                    if (secondSectionTitle.textContent.includes('Social')) {
                        secondSectionTitle.textContent = footer.social;
                        const socialLinks = secondSection.querySelectorAll('li a');
                        if (socialLinks.length >= 2) {
                            socialLinks[0].textContent = footer.instagram;
                            socialLinks[1].textContent = footer.discord;
                        }
                    } 
                    // Check if it's Support section (old structure - still supported)
                    else if (secondSectionTitle.textContent.includes('Support') || secondSectionTitle.textContent.includes('Apoyo')) {
                        secondSectionTitle.textContent = footer.support;
                        const supportLinks = secondSection.querySelectorAll('li a');
                        if (supportLinks.length >= 3) {
                            supportLinks[0].textContent = footer.crisis;
                            supportLinks[1].textContent = footer.resources;
                            supportLinks[2].textContent = footer.faq;
                        }
                    }
                }
                
                // Also check for support-column id (legacy support)
                const supportSection = document.getElementById('support-column');
                if (supportSection) {
                    const supportTitle = supportSection.querySelector('h4');
                    if (supportTitle) {
                        // Check if Social or Support
                        if (supportTitle.textContent.includes('Social')) {
                            supportTitle.textContent = footer.social;
                            const socialLinks = supportSection.querySelectorAll('li a');
                            if (socialLinks.length >= 2) {
                                socialLinks[0].textContent = footer.instagram;
                                socialLinks[1].textContent = footer.discord;
                            }
                        } else {
                            supportTitle.textContent = footer.support;
                            const supportLinks = supportSection.querySelectorAll('li a');
                            if (supportLinks.length >= 3) {
                                supportLinks[0].textContent = footer.crisis;
                                supportLinks[1].textContent = footer.resources;
                                supportLinks[2].textContent = footer.faq;
                            }
                        }
                    }
                }
            }
        }
        
        // Footer bottom (if present)
        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom) {
            footerBottom.innerHTML = `${footer.copyright} | ${footer.privacy} | ${footer.terms}`;
        }
    }
    
    translateGamesPopup(games) {
        // Translate games popup header
        const gamesTitle = document.querySelector('.games-title');
        if (gamesTitle) gamesTitle.textContent = games.title;
        
        const gamesSubtitle = document.querySelector('.games-subtitle');
        if (gamesSubtitle) gamesSubtitle.textContent = games.subtitle;
        
        const closeGamesBtn = document.querySelector('#closeGames');
        if (closeGamesBtn) closeGamesBtn.setAttribute('aria-label', games.closeAriaLabel);
        
        // Translate back button
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            const backText = backButton.querySelector('span:last-child') || backButton;
            if (backText) {
                // Preserve the arrow emoji
                backButton.innerHTML = `<span>←</span> ${games.backToGames}`;
            }
        }
        
        // Translate game cards
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            const gameName = card.getAttribute('data-game');
            const category = card.getAttribute('data-category');
            
            if (gameName && games.gamesList[gameName]) {
                const title = card.querySelector('h3');
                const description = card.querySelector('p');
                const badge = card.querySelector('.game-badge');
                
                if (title) title.textContent = games.gamesList[gameName].title;
                if (description) description.textContent = games.gamesList[gameName].description;
                if (badge && category && games.categories[category]) {
                    badge.textContent = games.categories[category];
                }
            }
        });
    }
    
    translateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }
    
    translatePlaceholder(selector, text) {
        const element = document.querySelector(selector);
        if (element) element.placeholder = text;
    }
    
    showNotification(message) {
        const existingNotification = document.querySelector('.language-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #6BA292, #588377);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(107, 162, 146, 0.4);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        `;
        notification.textContent = message;
        
        if (!document.getElementById('notification-animations')) {
            const animStyles = document.createElement('style');
            animStyles.id = 'notification-animations';
            animStyles.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        transform: translateX(400px);
                    }
                }
            `;
            document.head.appendChild(animStyles);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 3000);
    }
    
    // Helper function to get translated alert messages
    getAlert(alertKey, replacements = {}) {
        const t = translations[this.currentLanguage];
        let message = '';
        
        // Handle different alert types
        if (alertKey.startsWith('games.')) {
            const gameAlert = alertKey.split('.')[1];
            message = t.games.alerts[gameAlert] || alertKey;
        } else if (alertKey.startsWith('resourceType.')) {
            const resourceType = alertKey.split('.')[1];
            message = t.alerts.resourceTypes[resourceType] || t.alerts.resourceTypes.default;
        } else {
            message = t.alerts[alertKey] || alertKey;
        }
        
        // Replace placeholders like {moves}, {score}, {resource}
        Object.keys(replacements).forEach(key => {
            message = message.replace(`{${key}}`, replacements[key]);
        });
        
        return message;
    }
    
}

// Initialize language manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.languageManager = new LanguageManager();
    });
} else {
    window.languageManager = new LanguageManager();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager };
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { disorderTranslations };
}