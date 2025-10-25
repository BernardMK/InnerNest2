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
            namePlaceholder: "Your Name",
            emailLabel: "Email",
            emailPlaceholder: "Your Email",
            phoneLabel: "Phone",
            phonePlaceholder: "Your Phone",
            datePlaceholder: "Your Booking Date",
            subjectLabel: "Subject",
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
            tagline: "Your sanctuary for mental wellness and growth.",
            quickLinks: "Quick Links",
            home: "Home",
            services: "Services",
            blog: "Blog",
            contact: "Contact",
            support: "Support",
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
            namePlaceholder: "Tu Nombre",
            emailLabel: "Correo electrónico",
            emailPlaceholder: "Tu Email",
            phoneLabel: "Teléfono",
            phonePlaceholder: "Tu Teléfono",
            datePlaceholder: "Fecha de Reserva",
            subjectLabel: "Asunto",
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
            tagline: "Tu santuario para el bienestar mental y el crecimiento.",
            quickLinks: "Enlaces Rápidos",
            home: "Inicio",
            services: "Servicios",
            blog: "Bitácora",
            contact: "Contacto",
            support: "Apoyo",
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
    }
    
    translateBlogSection(blog) {
        // Main title
        const testTitle = document.querySelector('#test-title h2');
        if (testTitle) testTitle.textContent = blog.reviewTitle;
        
        // Form labels and placeholders
        const nameLabel = document.querySelector('#name_label');
        if (nameLabel) nameLabel.textContent = 'Nombre:';
        
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
        if (footerSections.length >= 3) {
            // First section
            const tagline = footerSections[0].querySelector('p');
            if (tagline) tagline.textContent = footer.tagline;
            
            // Quick Links section
            const quickLinksTitle = footerSections[1].querySelector('h4');
            if (quickLinksTitle) quickLinksTitle.textContent = footer.quickLinks;
            
            const quickLinks = footerSections[1].querySelectorAll('li a');
            if (quickLinks.length >= 4) {
                quickLinks[0].textContent = footer.home;
                quickLinks[1].textContent = footer.services;
                quickLinks[2].textContent = footer.blog;
                quickLinks[3].textContent = footer.contact;
            }
            
            // Support section
            const supportTitle = footerSections[2].querySelector('h4');
            if (supportTitle) supportTitle.textContent = footer.support;
            
            const supportLinks = footerSections[2].querySelectorAll('li a');
            if (supportLinks.length >= 3) {
                supportLinks[0].textContent = footer.crisis;
                supportLinks[1].textContent = footer.resources;
                supportLinks[2].textContent = footer.faq;
            }
        }
        
        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom) {
            footerBottom.innerHTML = `${footer.copyright} | ${footer.privacy} | ${footer.terms}`;
        }
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