
/* ============================================================
   InnerNest - Advanced Mental Health Support Assistant
   ============================================================ */

/* ========== Global Variables ========== */
let messages = [];
let sessionStartTime = Date.now();
let currentMood = null;
let isTyping = false;
let conversationContext = [];
let crisisAlertCount = 0;
let userRiskLevel = 'low'; // low, moderate, high, critical
let emotionalPatterns = {
  anxiety: 0,
  depression: 0,
  stress: 0,
  crisis: 0,
  positive: 0
};

/* ========== Enhanced Crisis Keywords & Risk Detection ========== */
const crisisDetection = {
  critical: [
    'suicide', 'kill myself', 'end my life', 'end it all', 'better off dead',
    'not worth living', 'no reason to live', 'goodbye', 'final message',
    'suicide plan', 'ways to die', 'overdose', 'jump off', 'hang myself',
    'shoot myself', 'slit my wrists', 'end the pain forever', 'can\'t go on'
  ],
  high: [
    'self-harm', 'hurt myself', 'cut myself', 'harm myself', 'punish myself',
    'hate myself', 'worthless', 'deserve to die', 'everyone would be better without me',
    'burden to everyone', 'no hope', 'giving up', 'can\'t take it anymore',
    'want to disappear', 'wish I was dead', 'don\'t want to be here'
  ],
  moderate: [
    'hopeless', 'helpless', 'trapped', 'no way out', 'can\'t escape',
    'unbearable pain', 'too much pain', 'can\'t handle', 'breaking down',
    'losing control', 'falling apart', 'drowning', 'suffocating'
  ]
};

const anxietyKeywords = [
  'anxious', 'anxiety', 'panic', 'panic attack', 'worried', 'nervous',
  'scared', 'fear', 'terrified', 'dread', 'racing thoughts', 'can\'t breathe',
  'heart racing', 'chest tight', 'sweating', 'shaking', 'trembling',
  'doom', 'catastrophe', 'something bad', 'going to happen', 'losing my mind'
];

const depressionKeywords = [
  'depressed', 'depression', 'sad', 'sadness', 'empty', 'numb',
  'no motivation', 'can\'t get out of bed', 'tired all the time', 'exhausted',
  'no energy', 'no interest', 'don\'t care', 'what\'s the point', 'meaningless',
  'alone', 'isolated', 'disconnected', 'hollow', 'lost', 'broken'
];

const stressKeywords = [
  'stress', 'stressed', 'overwhelmed', 'pressure', 'too much',
  'can\'t cope', 'burning out', 'burnout', 'exhausted', 'overworked',
  'deadlines', 'everything at once', 'piling up', 'drowning in work'
];

const traumaKeywords = [
  'trauma', 'traumatic', 'ptsd', 'flashback', 'nightmare', 'triggered',
  'abuse', 'assault', 'attacked', 'violated', 'scared to go out',
  'can\'t forget', 'haunted', 'reliving', 'intrusive thoughts'
];

const sleepKeywords = [
  'can\'t sleep', 'insomnia', 'sleep problems', 'awake all night',
  'nightmares', 'can\'t fall asleep', 'wake up anxious', 'tired but can\'t sleep',
  'racing mind at night', 'sleep schedule', 'exhausted but wired'
];

const relationshipKeywords = [
  'relationship problems', 'breakup', 'divorce', 'lonely', 'no friends',
  'isolated', 'rejected', 'abandoned', 'betrayed', 'heartbroken',
  'nobody understands', 'nobody cares', 'toxic relationship', 'abusive'
];

const substanceKeywords = [
  'drinking too much', 'drugs', 'addiction', 'substance abuse', 'alcoholic',
  'can\'t stop drinking', 'need to drink', 'high all the time', 'using to cope',
  'dependency', 'withdrawal', 'rehab', 'relapse'
];

const eatingKeywords = [
  'eating disorder', 'anorexia', 'bulimia', 'binge eating', 'can\'t eat',
  'hate my body', 'fat', 'ugly', 'purging', 'starving myself',
  'food obsession', 'calorie counting', 'body dysmorphia'
];

const positiveKeywords = [
  'better', 'improving', 'progress', 'hope', 'grateful', 'thankful',
  'good day', 'feeling good', 'happy', 'proud', 'accomplished',
  'healing', 'recovery', 'breakthrough', 'understanding'
];

/* ========== Helpers ========== */
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    hour: 'numeric', minute: '2-digit', hour12: true
  });
}

function setCurrentDate() {
  const journalDate = document.getElementById('journalDate');
  if (journalDate) {
    journalDate.textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}

/* ========== Risk Assessment ========== */
function assessRiskLevel(message) {
  const lower = message.toLowerCase();
  
  // Critical risk
  for (const keyword of crisisDetection.critical) {
    if (lower.includes(keyword)) {
      userRiskLevel = 'critical';
      crisisAlertCount++;
      emotionalPatterns.crisis += 3;
      return 'critical';
    }
  }
  
  // High risk
  for (const keyword of crisisDetection.high) {
    if (lower.includes(keyword)) {
      if (userRiskLevel !== 'critical') userRiskLevel = 'high';
      emotionalPatterns.crisis += 2;
      return 'high';
    }
  }
  
  // Moderate risk
  for (const keyword of crisisDetection.moderate) {
    if (lower.includes(keyword)) {
      if (userRiskLevel === 'low') userRiskLevel = 'moderate';
      emotionalPatterns.crisis += 1;
      return 'moderate';
    }
  }
  
  return 'low';
}

function updateEmotionalPatterns(message) {
  const lower = message.toLowerCase();
  
  if (anxietyKeywords.some(k => lower.includes(k))) emotionalPatterns.anxiety++;
  if (depressionKeywords.some(k => lower.includes(k))) emotionalPatterns.depression++;
  if (stressKeywords.some(k => lower.includes(k))) emotionalPatterns.stress++;
  if (positiveKeywords.some(k => lower.includes(k))) emotionalPatterns.positive++;
}

/* ========== Page Lifecycle ========== */
document.addEventListener('DOMContentLoaded', () => {
  initializeChat();
  startSessionTimer();
  setupEventListeners();
  setCurrentDate();
});

/* ========== Chat Initialization ========== */
function initializeChat() {
  const welcomeMessages = [
    "Hello! I'm here to listen and support you. How are you feeling today?",
    "Welcome to InnerNest. This is a safe space where you can express yourself freely. What's on your mind?",
    "Hi there! I'm your support assistant. Whether you need someone to talk to or just want to vent, I'm here for you.",
    "Welcome! I'm glad you're here. Taking this step shows real strength. How can I support you today?",
    "Hello and welcome to your safe space. There's no judgment here, only support. What brings you here today?"
  ];
  setTimeout(() => {
    const welcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    addMessage('assistant', welcomeMessage);
  }, 1000);
}

/* ========== Session Timer ========== */
function startSessionTimer() {
  setInterval(() => {
    const elapsed = Date.now() - sessionStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const timer = document.getElementById('sessionTimer');
    if (timer) {
      timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}

/* ========== Event Listeners ========== */
function setupEventListeners() {
  const messageInput = document.getElementById('messageInput');
  const sendBtn = document.getElementById('sendBtn');

  if (messageInput) {
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    messageInput.addEventListener('input', () => {
      messageInput.style.height = 'auto';
      messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
    });
  }
}

/* ========== Messaging Logic ========== */
function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message) return;

  addMessage('user', message);
  input.value = '';
  input.style.height = 'auto';

  const prompts = document.getElementById('suggestedPrompts');
  if (prompts) prompts.style.display = 'none';

  // Assess risk and update patterns
  const risk = assessRiskLevel(message);
  updateEmotionalPatterns(message);

  showTypingIndicator();
  const delay = risk === 'critical' ? 800 : (1500 + Math.random() * 1500);
  
  setTimeout(() => {
    const response = generateResponse(message, risk);
    hideTypingIndicator();
    addMessage('assistant', response);
    
    // Follow-up for high-risk situations
    if (risk === 'critical' || risk === 'high') {
      setTimeout(() => {
        addMessage('assistant', getFollowUpMessage(risk));
      }, 3000);
    }
  }, delay);
}

function sendPrompt(prompt) {
  const input = document.getElementById('messageInput');
  if (input) {
    input.value = prompt;
    sendMessage();
  }
}

function addMessage(sender, content) {
  const container = document.getElementById('messagesContainer');
  if (!container) return;

  const welcomeMsg = container.querySelector('.welcome-message');
  if (welcomeMsg) welcomeMsg.remove();

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `
    <div class="message-avatar">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    </div>
    <div class="message-content">
      ${content}
      <div class="message-time">${getCurrentTime()}</div>
    </div>
  `;

  container.appendChild(messageDiv);
  container.scrollTop = container.scrollHeight;

  messages.push({ sender, content, timestamp: Date.now() });
  conversationContext.push({ role: sender === 'user' ? 'user' : 'assistant', content });
}

/* ========== Enhanced Response Generator ========== */
function generateResponse(userMessage, riskLevel) {
  const lower = userMessage.toLowerCase();

  // CRITICAL: Crisis response
  if (riskLevel === 'critical') {
    return generateCrisisResponse(lower);
  }

  // HIGH RISK: Self-harm or severe distress
  if (riskLevel === 'high') {
    return generateHighRiskResponse(lower);
  }

  // MODERATE RISK: Hopelessness
  if (riskLevel === 'moderate') {
    return generateModerateRiskResponse(lower);
  }

  // Specific mental health concerns
  if (traumaKeywords.some(k => lower.includes(k))) return generateTraumaResponse();
  if (anxietyKeywords.some(k => lower.includes(k))) return generateAnxietyResponse();
  if (depressionKeywords.some(k => lower.includes(k))) return generateDepressionResponse();
  if (sleepKeywords.some(k => lower.includes(k))) return generateSleepResponse();
  if (stressKeywords.some(k => lower.includes(k))) return generateStressResponse();
  if (relationshipKeywords.some(k => lower.includes(k))) return generateRelationshipResponse();
  if (substanceKeywords.some(k => lower.includes(k))) return generateSubstanceResponse();
  if (eatingKeywords.some(k => lower.includes(k))) return generateEatingDisorderResponse();
  if (positiveKeywords.some(k => lower.includes(k))) return generatePositiveResponse();
  
  // Gratitude and coping questions
  if (lower.includes('grateful') || lower.includes('thankful')) return generateGratitudeResponse();
  if (lower.includes('coping') || lower.includes('help me cope')) return generateCopingResponse();
  if (lower.includes('therapist') || lower.includes('therapy')) return generateTherapyResponse();
  if (lower.includes('medication') || lower.includes('meds')) return generateMedicationResponse();
  
  // General supportive responses
  return generateGeneralResponse();
}

/* ========== Crisis & Risk Responses ========== */
function generateCrisisResponse(message) {
  const responses = [
    `I'm deeply concerned about what you've shared. Your life has value, and you deserve support right now.
    <br><br>
    <strong style="color: #ef4444;">IMMEDIATE HELP AVAILABLE:</strong><br>
    📞 <strong>Call 988</strong> (Suicide & Crisis Lifeline) – Free, confidential, 24/7<br>
    💬 <strong>Text "HELLO" to 741741</strong> (Crisis Text Line)<br>
    🚨 <strong>Call 911</strong> if you're in immediate danger<br>
    🏥 <strong>Go to your nearest emergency room</strong><br>
    <br>
    You don't have to face this alone. I'm here with you. Can you tell me if you're safe right now?`,
    
    `What you're feeling is incredibly painful, and I'm so glad you reached out. Please know that you matter.
    <br><br>
    <strong style="color: #ef4444;">GET HELP NOW:</strong><br>
    📞 <strong>988</strong> – National Suicide & Crisis Lifeline (available 24/7)<br>
    💬 <strong>Text 741741</strong> – Crisis Text Line<br>
    🆘 <strong>911</strong> – Emergency services<br>
    <br>
    These thoughts can pass, and there is hope. Can you reach out to someone you trust right now? Are you in a safe place?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateHighRiskResponse(message) {
  const responses = [
    `I hear how much pain you're in, and I'm concerned. Self-harm might feel like relief, but it's temporary and can make things worse. You deserve care, not harm.
    <br><br>
    <strong>Safer alternatives:</strong><br>
    • Hold ice cubes in your hands<br>
    • Snap a rubber band on your wrist<br>
    • Draw on your skin with red marker<br>
    • Scream into a pillow<br>
    • Do intense exercise<br>
    <br>
    <strong>Please consider reaching out:</strong><br>
    📞 Call <strong>988</strong> or text <strong>741741</strong><br>
    <br>
    Can you tell me what triggered these feelings? Let's work through this together.`,
    
    `The pain you're describing sounds overwhelming. I want you to know that you're not alone, and there are people who want to help you through this.
    <br><br>
    If you're thinking about hurting yourself, please:<br>
    1. Remove any means of self-harm from your immediate area<br>
    2. Call <strong>988</strong> or text <strong>741741</strong><br>
    3. Reach out to someone you trust<br>
    <br>
    What's the strongest urge you're feeling right now? Let's talk about it.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateModerateRiskResponse(message) {
  const responses = [
    `I can hear the hopelessness in your words, and I want you to know that these feelings, while very real and painful, can change. You're not trapped, even though it feels that way.
    <br><br>
    When we're in deep pain, our perspective narrows. Let me ask: What's one small thing that brought you even a tiny bit of comfort in the past week?
    <br><br>
    If things feel too heavy, <strong>988</strong> (Suicide & Crisis Lifeline) is available 24/7 to talk.`,
    
    `Feeling trapped is one of the hardest experiences. But I want you to know that this feeling isn't permanent, even though it feels endless right now.
    <br><br>
    Sometimes when we're overwhelmed, breaking things down into the next hour—not the next day or week—can help. What would make the next hour more bearable?
    <br><br>
    Remember, <strong>988</strong> is always available if you need immediate support.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function getFollowUpMessage(risk) {
  if (risk === 'critical') {
    return `I want to check in with you. Have you been able to contact any of the crisis resources? Your safety is the priority right now. If you're still in danger, please call 911 immediately.`;
  }
  if (risk === 'high') {
    return `How are you doing right now? I'm here to listen. If the urges feel too strong, please don't hesitate to call 988 or text 741741. You deserve support.`;
  }
  return '';
}

/* ========== Specialized Mental Health Responses ========== */
function generateTraumaResponse() {
  const responses = [
    `Trauma can leave deep wounds that take time to heal. What you experienced wasn't your fault, and your reactions are normal responses to abnormal situations.
    <br><br>
    <strong>Grounding techniques for trauma:</strong><br>
    • 5-4-3-2-1 senses exercise (5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste)<br>
    • Name objects around you out loud<br>
    • Hold something cold or textured<br>
    <br>
    Would you like to talk about what triggered this, or would you prefer to focus on feeling safer right now?`,
    
    `Living with trauma is exhausting. Your body and mind are trying to protect you, even when it doesn't feel helpful. Have you been able to work with a trauma-informed therapist?
    <br><br>
    In this moment, let's focus on feeling grounded. Can you feel your feet on the floor? Take a slow breath. You're here, you're safe right now.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateAnxietyResponse() {
  const responses = [
    `Anxiety can make everything feel urgent and overwhelming. Right now, let's bring your nervous system back to calm. Try this: Place one hand on your chest, one on your belly. Breathe in for 4, hold for 4, out for 6. Do this three times.
    <br><br>
    What's triggering the anxiety? Sometimes naming it helps take away some of its power.`,
    
    `Panic attacks are terrifying, but they can't actually harm you, even though they feel dangerous. Your body is in "fight or flight" mode. Let's help it calm down.
    <br><br>
    <strong>Try this now:</strong><br>
    • Focus on your breath—slow and steady<br>
    • Name 5 things you can see<br>
    • Press your feet firmly into the floor<br>
    • Remind yourself: "This will pass. I am safe."<br>
    <br>
    What were you doing or thinking about when the anxiety started?`,
    
    `Racing thoughts and constant worry are exhausting. Anxiety often makes us think in "what ifs" and worst-case scenarios. Let's gently challenge that.
    <br><br>
    What's the actual evidence for your worry versus the story anxiety is telling you? Sometimes just separating fact from fear can help.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateDepressionResponse() {
  const responses = [
    `Depression can make everything feel heavy, gray, and pointless. But I want you to know: depression lies. It tells you things won't get better, that you're broken, that nothing matters. None of that is true.
    <br><br>
    What's one tiny thing you can do today? Not a big goal—just something small. Brush your teeth. Open a window. Drink water. Small wins matter.`,
    
    `The emptiness and exhaustion of depression is real. You're not weak for struggling with it. Depression is an illness, not a character flaw.
    <br><br>
    Have you been able to talk to a doctor or therapist about medication or therapy? These can be really effective. In the meantime, what usually brings you even a small moment of relief?`,
    
    `I hear how hard it is to get through each day. When depression tells you nothing matters, it's lying. You reaching out right now matters. Your life matters.
    <br><br>
    Let's focus on just today. What would make today 1% more bearable? That's all we're aiming for right now—just 1% better.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateSleepResponse() {
  const responses = [
    `Sleep problems can amplify every other struggle. When we don't sleep, everything feels harder. Let's work on sleep hygiene together.
    <br><br>
    <strong>Try these tonight:</strong><br>
    • No screens 1 hour before bed<br>
    • Keep bedroom cool (65-68°F)<br>
    • Try the 4-7-8 breathing technique<br>
    • Write down worries before bed (get them out of your head)<br>
    • Same wake time every day, even weekends<br>
    <br>
    What's usually going through your mind when you can't sleep?`,
    
    `Racing thoughts at night are brutal. Your brain won't shut off because it thinks it's protecting you by solving problems. We need to convince it that it's safe to rest.
    <br><br>
    Have you tried a "worry window"? Set aside 15 minutes during the day to write all your worries. Then at night, remind yourself: "I already worried about this today. I'll handle it tomorrow."
    <br><br>
    What time do you usually try to fall asleep?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateStressResponse() {
  const responses = [
    `Being overwhelmed means you care deeply about getting things right. But you can't pour from an empty cup. Let's triage.
    <br><br>
    What absolutely must be done today? What can wait until tomorrow? What can you delegate or cancel entirely? Be honest—not everything is truly urgent.`,
    
    `Stress builds when we feel like we have no control. Let's find where you do have control. You can control your breathing right now. You can control whether you take a 5-minute break. You can control saying "no" to one more thing.
    <br><br>
    What's the biggest stressor right now? Let's break it into smaller pieces.`,
    
    `Burnout is real, and you might be approaching it. Your body is sending you signals. Are you listening?
    <br><br>
    <strong>Warning signs of burnout:</strong><br>
    • Constant exhaustion<br>
    • Cynicism or detachment<br>
    • Reduced performance<br>
    • Physical symptoms (headaches, stomach issues)<br>
    <br>
    Do any of these resonate? What would rest look like for you?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateRelationshipResponse() {
  const responses = [
    `Relationship pain cuts deep because we're wired for connection. Whether it's loneliness, heartbreak, or betrayal, your feelings are valid.
    <br><br>
    What kind of support do you need right now? Someone to listen? Help understanding what happened? Or strategies to cope with the pain?`,
    
    `Loneliness can exist even in a crowded room. It's about feeling understood and connected. What would meaningful connection look like for you?
    <br><br>
    Sometimes we need to start small: one text to a friend, joining one group, or even just a friendly interaction with a barista. What feels doable?`,
    
    `Toxic or abusive relationships leave scars. If you're in danger, please reach out to the National Domestic Violence Hotline: 1-800-799-7233.
    <br><br>
    You deserve to be treated with respect and kindness. Can you tell me more about what's happening?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateSubstanceResponse() {
  const responses = [
    `Using substances to cope makes sense when you're in pain, but it often creates more problems than it solves. You're not weak for struggling with this—addiction is a medical condition.
    <br><br>
    <strong>Resources:</strong><br>
    📞 SAMHSA National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7)<br>
    <br>
    Have you thought about talking to a doctor or addiction specialist? Treatment works. What's your biggest barrier to getting help?`,
    
    `The cycle of addiction is powerful, but it can be broken. You don't have to do this alone.
    <br><br>
    What made you bring this up today? Are you ready to explore treatment options, or are you just thinking about it? Both are okay—change starts with awareness.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateEatingDisorderResponse() {
  const responses = [
    `Eating disorders are serious mental health conditions that need professional treatment. Your relationship with food and your body deserves healing.
    <br><br>
    <strong>Resources:</strong><br>
    📞 NEDA Helpline: <strong>1-800-931-2237</strong><br>
    💬 Text "NEDA" to <strong>741741</strong><br>
    <br>
    Have you been able to talk to a doctor or therapist who specializes in eating disorders? Recovery is possible. What's your biggest fear about seeking help?`,
    
    `The voice of an eating disorder is cruel and convincing, but it's lying to you. Your worth isn't tied to your weight or appearance. You deserve nourishment and peace.
    <br><br>
    What's one small way you could be kinder to yourself today?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generatePositiveResponse() {
  const responses = [
    `I'm so glad to hear there's been some light! Progress isn't always linear, and celebrating improvements—no matter how small—matters. What changed for you?`,
    
    `That's wonderful to hear! Healing takes courage, and you're showing up for yourself. What's been most helpful in this progress?`,
    
    `Moments of hope and improvement are so important to notice and hold onto. They remind us that change is possible. What else has been going well?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateGratitudeResponse() {
  const responses = [
    `Gratitude is a powerful practice. Even in dark times, finding small things to appreciate can shift our perspective. What are three specific things you're grateful for today?`,
    
    `Noticing gratitude is beautiful. Research shows that regularly practicing gratitude can actually change our brain patterns over time. What brought you to reflect on gratitude today?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateCopingResponse() {
  return `Everyone needs healthy coping strategies. Here are some evidence-based ones:
  <br><br>
  <strong>🧠 Immediate Coping (when in crisis):</strong><br>
  • Deep breathing (4-7-8 technique)<br>
  • Cold water on face or ice pack<br>
  • 5-4-3-2-1 grounding<br>
  • Intense exercise (push-ups, running)<br>
  • Call a friend or crisis line<br>
  <br>
  <strong>🛠️ Long-term Coping:</strong><br>
  • Regular therapy<br>
  • Consistent sleep schedule<br>
  • Physical activity<br>
  • Mindfulness or meditation<br>
  • Creative expression (art, music, writing)<br>
  • Social connection<br>
  <br>
  Which of these resonates with you? What have you tried before?`;
}

function generateTherapyResponse() {
  const responses = [
    `Therapy can be incredibly helpful. Different types work for different issues:
    <br><br>
    • <strong>CBT</strong> (Cognitive Behavioral Therapy) – Great for anxiety, depression<br>
    • <strong>DBT</strong> (Dialectical Behavior Therapy) – Excellent for emotion regulation<br>
    • <strong>EMDR</strong> – Effective for trauma/PTSD<br>
    • <strong>Psychodynamic</strong> – Explores deeper patterns<br>
    <br>
    Have you tried therapy before? What's your biggest concern about starting?`,
    
    `Finding the right therapist is like dating—it might take a few tries. Look for someone who specializes in what you're dealing with and who you feel comfortable with.
    <br><br>
    Resources to find therapists:<br>
    • Psychology Today directory<br>
    • Your insurance provider list<br>
    • Community mental health centers<br>
    • Online therapy platforms (BetterHelp, Talkspace)<br>
    <br>
    Would you like help thinking through how to start?`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateMedicationResponse() {
  const responses = [
    `Medication can be an important part of treatment for many people. It's not a sign of weakness—it's healthcare.
    <br><br>
    <strong>Common types:</strong><br>
    • Antidepressants (SSRIs, SNRIs) for depression/anxiety<br>
    • Anti-anxiety medications<br>
    • Mood stabilizers<br>
    • Antipsychotics for severe conditions<br>
    <br>
    Have you talked to a psychiatrist or doctor about this? They can help find what works for you. Medication + therapy often works better than either alone.`,
    
    `Questions about medication are normal. A psychiatrist can evaluate whether it might help you. Some people benefit greatly, others don't need it.
    <br><br>
    What are your concerns? Side effects? Dependency? Cost? Let's talk through them.`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateGeneralResponse() {
  const responses = [
    "Thank you for sharing that. It sounds challenging. Can you tell me more about how it's affecting you?",
    "I hear you. It's normal to feel that way. What has been on your mind lately?",
    "You're not alone in this. Let's unpack it together. What's the most pressing thing for you right now?",
    "That must be difficult to navigate. How long have you been dealing with this?",
    "I appreciate you opening up. What would help most in this moment?",
    "Your feelings are valid. What do you need right now—to vent, get advice, or just be heard?",
    "It takes courage to talk about this. What's been the hardest part?",
    "I'm here to support you. What would make today a bit easier?",
    "That sounds really tough. Have you had support with this, or are you navigating it alone?",
    "Thank you for trusting me with this. What outcome are you hoping for?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

/* ========== Typing Indicator ========== */
function showTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.classList.add('active');
    isTyping = true;
  }
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.classList.remove('active');
    isTyping = false;
  }
}

/* ========== Mood Tracking ========== */
function setMood(mood) {
  currentMood = mood;

  document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.querySelector(`.mood-btn[data-mood="${mood}"]`);
  if (active) active.classList.add('active');

  const moodResponses = {
    happy: "I'm glad you're feeling positive today! What's making you smile?",
    calm: "It's lovely to hear you're calm. What helped you get to that place?",
    anxious: "I hear you're feeling anxious. Would you like to talk about it or try a calming exercise?",
    sad: "I'm sorry you're feeling down. What's weighing on your heart?",
    angry: "I can sense that anger. Would you like to share what's frustrating you?"
  };

  const txt = moodResponses[mood];
  if (txt) {
    setTimeout(() => addMessage('assistant', txt), 500);
  }
  
  // Track mood patterns
  if (mood === 'anxious' || mood === 'sad' || mood === 'angry') {
    emotionalPatterns.depression++;
  } else if (mood === 'happy' || mood === 'calm') {
    emotionalPatterns.positive++;
  }
}

/* ========== Quick Tools ========== */
function startBreathingExercise() {
  const modal = document.getElementById('breathingModal');
  if (modal) modal.classList.add('active');
}

function closeBreathingExercise() {
  const modal = document.getElementById('breathingModal');
  if (modal) modal.classList.remove('active');
  const circle = document.getElementById('breathingCircle');
  if (circle) {
    circle.className = 'breathing-circle';
    const text = document.getElementById('breathingText');
    if (text) text.textContent = 'Ready';
  }
}

function startBreathingAnimation() {
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText');
  const instructions = document.getElementById('breathingInstructions');

  const cycle = [
    { phase: 'inhale', duration: 4000, text: 'Inhale', instruction: 'Breathe in slowly through your nose for 4 seconds' },
    { phase: 'hold', duration: 7000, text: 'Hold', instruction: 'Hold your breath gently for 7 seconds' },
    { phase: 'exhale', duration: 8000, text: 'Exhale', instruction: 'Breathe out slowly through your mouth for 8 seconds' }
  ];

  let phaseIdx = 0;

  function advance() {
    const modal = document.getElementById('breathingModal');
    if (!modal || !modal.classList.contains('active')) return;

    const p = cycle[phaseIdx];
    if (circle) circle.className = `breathing-circle ${p.phase}`;
    if (text) text.textContent = p.text;
    if (instructions) instructions.textContent = p.instruction;
    phaseIdx = (phaseIdx + 1) % cycle.length;

    setTimeout(advance, p.duration);
  }

  advance();
}

function startMeditation() {
  const meditationGuides = [
    `Let's do a quick 2-minute body scan meditation. Close your eyes if comfortable.
    <br><br>
    Start at the top of your head. Notice any tension. Breathe into it. 
    Move to your jaw—unclench it. Shoulders—let them drop. 
    Continue down through your chest, arms, hands, belly, legs, feet.
    <br><br>
    Just observe. Don't judge. Breathe naturally. When you're ready, open your eyes.
    <br><br>
    How do you feel now?`,
    
    `Let's try a loving-kindness meditation. Sit comfortably and take three deep breaths.
    <br><br>
    Silently repeat: "May I be safe. May I be healthy. May I be at peace."
    Repeat this 3 times, really feeling the words.
    <br><br>
    Now think of someone you care about: "May you be safe. May you be healthy. May you be at peace."
    <br><br>
    How does that feel?`,
    
    `Let's do a simple mindfulness practice. Focus on your breath—just observe it naturally flowing in and out.
    <br><br>
    When your mind wanders (and it will), gently bring it back to your breath. No judgment, just return.
    <br><br>
    Try this for 2 minutes. I'll wait. Take your time.`
  ];
  
  const guide = meditationGuides[Math.floor(Math.random() * meditationGuides.length)];
  addMessage('assistant', guide);
}

function showJournal() {
  const modal = document.getElementById('journalModal');
  if (modal) modal.classList.add('active');
  setCurrentDate();
}

function closeJournal() {
  const modal = document.getElementById('journalModal');
  if (modal) modal.classList.remove('active');
}

function saveJournalEntry() {
  const textArea = document.getElementById('journalText');
  if (!textArea) return;
  
  const text = textArea.value.trim();
  if (!text) {
    alert('Your journal entry is empty. Try writing a few sentences about how you feel.');
    return;
  }

  const entry = {
    date: new Date().toISOString(),
    content: text,
    mood: currentMood,
    emotionalState: { ...emotionalPatterns }
  };
  
  // Save to localStorage if available
  try {
    const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  } catch (e) {
    console.log('Journal entry saved to session:', entry);
  }

  const responses = [
    "Your journal entry has been saved. Expressing feelings through writing can be incredibly therapeutic. How do you feel after writing that?",
    "Saved! Journaling is a powerful tool for processing emotions. What insights did you gain from writing?",
    "Entry saved. Writing can help us understand ourselves better. Would you like to talk about anything that came up?"
  ];
  
  addMessage('assistant', responses[Math.floor(Math.random() * responses.length)]);
  closeJournal();
  textArea.value = '';
}

function showCopingStrategies() {
  const strategies = `
    <strong>Evidence-Based Coping Strategies:</strong><br><br>
    
    <strong>🫁 Immediate Relief (Use Right Now):</strong><br>
    • 4-7-8 Breathing: Inhale 4s, hold 7s, exhale 8s<br>
    • Cold Water: Splash face or hold ice cubes<br>
    • 5-4-3-2-1 Grounding: Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste<br>
    • Progressive Muscle Relaxation: Tense and release each muscle group<br>
    • Butterfly Hug: Cross arms and tap shoulders alternately<br>
    <br>
    <strong>🏃 Physical Coping:</strong><br>
    • Exercise (even 10-minute walk helps)<br>
    • Yoga or stretching<br>
    • Dancing to music<br>
    • Cold shower<br>
    <br>
    <strong>🧠 Mental Coping:</strong><br>
    • Journaling thoughts and feelings<br>
    • Challenging negative thoughts<br>
    • Mindfulness meditation<br>
    • Gratitude practice (3 things daily)<br>
    • Reading or podcasts<br>
    <br>
    <strong>🎨 Creative Coping:</strong><br>
    • Drawing, painting, coloring<br>
    • Music (playing or listening)<br>
    • Writing poetry or stories<br>
    • Crafts or DIY projects<br>
    <br>
    <strong>👥 Social Coping:</strong><br>
    • Call a friend or family member<br>
    • Join a support group<br>
    • Volunteer<br>
    • Pet therapy (visit animals)<br>
    <br>
    <strong>⚠️ Avoid Unhealthy Coping:</strong><br>
    • Substance abuse<br>
    • Self-harm<br>
    • Isolation<br>
    • Excessive sleep or avoidance<br>
    <br>
    Which strategies have you tried? What works best for you?
  `;
  addMessage('assistant', strategies);
}

function attachFile() {
  addMessage('assistant', "I appreciate you wanting to share, but I'm not able to view or process files. However, you can describe what you wanted to share, and I'm here to listen and support you through conversation.");
}

function toggleVoiceInput() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    addMessage('assistant', 'Voice input is not supported in your browser. You can type your message instead.');
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SpeechRecognition();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  try {
    rec.start();
    addMessage('assistant', 'Listening... Speak now.');
    
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      const input = document.getElementById('messageInput');
      if (input) input.value = transcript;
      addMessage('assistant', 'Got it! You can edit the message or send it as is.');
    };
    
    rec.onerror = (e) => {
      addMessage('assistant', `Voice recognition error: ${e.error}. Please try typing instead.`);
    };
  } catch (err) {
    addMessage('assistant', 'Unable to start voice input. Please type your message.');
  }
}

function closeCrisisBanner() {
  const banner = document.getElementById('crisisBanner');
  if (banner) banner.style.display = 'none';
}

function clearChat() {
  if (!confirm('Are you sure you want to clear the chat history? This cannot be undone.')) return;

  messages = [];
  conversationContext = [];
  currentMood = null;
  sessionStartTime = Date.now();
  crisisAlertCount = 0;
  userRiskLevel = 'low';
  emotionalPatterns = {
    anxiety: 0,
    depression: 0,
    stress: 0,
    crisis: 0,
    positive: 0
  };

  const container = document.getElementById('messagesContainer');
  if (container) {
    container.innerHTML = '';
    initializeChat();
  }

  document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.mood-btn.active').forEach(b => b.classList.remove('active'));

  const prompts = document.getElementById('suggestedPrompts');
  if (prompts) prompts.style.display = '';
}

