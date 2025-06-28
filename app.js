// Game Data
const gameData = {
  "niveis": {
    "1": {
      "nome": "Fácil - Palavras Simples",
      "palavras": [
        {"palavra": "CASA", "silabas": ["CA", "SA"], "emoji": "🏠", "dica": "Lugar onde moramos"},
        {"palavra": "BOLA", "silabas": ["BO", "LA"], "emoji": "⚽", "dica": "Usamos para jogar futebol"},
        {"palavra": "GATO", "silabas": ["GA", "TO"], "emoji": "🐱", "dica": "Animal que faz miau"},
        {"palavra": "PATO", "silabas": ["PA", "TO"], "emoji": "🦆", "dica": "Animal que nada na lagoa"},
        {"palavra": "DADO", "silabas": ["DA", "DO"], "emoji": "🎲", "dica": "Tem pontos e usamos em jogos"},
        {"palavra": "FACA", "silabas": ["FA", "CA"], "emoji": "🔪", "dica": "Utensílio para cortar"},
        {"palavra": "VACA", "silabas": ["VA", "CA"], "emoji": "🐄", "dica": "Animal que dá leite"},
        {"palavra": "CAMA", "silabas": ["CA", "MA"], "emoji": "🛏️", "dica": "Lugar onde dormimos"},
        {"palavra": "MESA", "silabas": ["ME", "SA"], "emoji": "🪑", "dica": "Móvel onde comemos"},
        {"palavra": "RODA", "silabas": ["RO", "DA"], "emoji": "⭕", "dica": "É redonda e o carro tem quatro"}
      ]
    },
    "2": {
      "nome": "Médio - Três Sílabas", 
      "palavras": [
        {"palavra": "BATATA", "silabas": ["BA", "TA", "TA"], "emoji": "🥔", "dica": "Legume que vira batata frita"},
        {"palavra": "BANANA", "silabas": ["BA", "NA", "NA"], "emoji": "🍌", "dica": "Fruta amarela que o macaco gosta"},
        {"palavra": "BONECA", "silabas": ["BO", "NE", "CA"], "emoji": "🪆", "dica": "Brinquedo que parece uma criança"},
        {"palavra": "CAVALO", "silabas": ["CA", "VA", "LO"], "emoji": "🐎", "dica": "Animal que corre e galopa"},
        {"palavra": "SAPATO", "silabas": ["SA", "PA", "TO"], "emoji": "👞", "dica": "Calçamos nos pés"},
        {"palavra": "GIRAFA", "silabas": ["GI", "RA", "FA"], "emoji": "🦒", "dica": "Animal muito alto"},
        {"palavra": "MACACO", "silabas": ["MA", "CA", "CO"], "emoji": "🐵", "dica": "Animal que gosta de banana"},
        {"palavra": "TOMATE", "silabas": ["TO", "MA", "TE"], "emoji": "🍅", "dica": "Fruta vermelha da salada"},
        {"palavra": "CAMELO", "silabas": ["CA", "ME", "LO"], "emoji": "🐪", "dica": "Animal do deserto"},
        {"palavra": "MENINO", "silabas": ["ME", "NI", "NO"], "emoji": "👦", "dica": "Criança do sexo masculino"}
      ]
    },
    "3": {
      "nome": "Difícil - Quatro Sílabas",
      "palavras": [
        {"palavra": "BORBOLETA", "silabas": ["BOR", "BO", "LE", "TA"], "emoji": "🦋", "dica": "Inseto colorido que voa"},
        {"palavra": "ELEFANTE", "silabas": ["E", "LE", "FAN", "TE"], "emoji": "🐘", "dica": "Animal grande com tromba"},
        {"palavra": "BICICLETA", "silabas": ["BI", "CI", "CLE", "TA"], "emoji": "🚲", "dica": "Veículo de duas rodas"},
        {"palavra": "TELEVISÃO", "silabas": ["TE", "LE", "VI", "SÃO"], "emoji": "📺", "dica": "Aparelho de assistir desenhos"},
        {"palavra": "GELADEIRA", "silabas": ["GE", "LA", "DEI", "RA"], "emoji": "❄️", "dica": "Aparelho que deixa gelado"},
        {"palavra": "CHOCOLATE", "silabas": ["CHO", "CO", "LA", "TE"], "emoji": "🍫", "dica": "Doce marrom gostoso"},
        {"palavra": "DINOSSAURO", "silabas": ["DI", "NOS", "SAU", "RO"], "emoji": "🦕", "dica": "Animal gigante do passado"},
        {"palavra": "COMPUTADOR", "silabas": ["COM", "PU", "TA", "DOR"], "emoji": "💻", "dica": "Máquina para estudar"},
        {"palavra": "BORRACHA", "silabas": ["BOR", "RA", "CHA"], "emoji": "✏️", "dica": "Para apagar o lápis"},
        {"palavra": "JACARÉ", "silabas": ["JA", "CA", "RÉ"], "emoji": "🐊", "dica": "Réptil com dentes grandes"}
      ]
    }
  },
  "conquistas": [
    {"id": "primeiro_acerto", "nome": "🎯 Primeiro Acerto!", "descricao": "Parabéns pelo seu primeiro acerto!"},
    {"id": "cinco_seguidas", "nome": "🔥 5 Seguidas!", "descricao": "Cinco palavras corretas seguidas!"},
    {"id": "nivel_perfeito", "nome": "⭐ Nível Perfeito!", "descricao": "Completou um nível sem erros!"},
    {"id": "velocista", "nome": "⚡ Velocista!", "descricao": "Respondeu em menos de 5 segundos!"},
    {"id": "cem_pontos", "nome": "💯 100 Pontos!", "descricao": "Alcançou 100 pontos!"},
    {"id": "explorador", "nome": "🏆 Explorador!", "descricao": "Completou todos os níveis!"}
  ]
};

// Game State
let gameState = {
  currentLevel: 1,
  currentWordIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  attempts: 3,
  correctWords: 0,
  totalWords: 0,
  startTime: null,
  achievements: [],
  settings: {
    soundsEnabled: true,
    autoTransition: true,
    responseTime: 15
  }
};

// DOM Elements
const screens = {
  welcome: document.getElementById('welcome-screen'),
  settings: document.getElementById('settings-screen'),
  game: document.getElementById('game-screen'),
  completion: document.getElementById('completion-screen')
};

const elements = {
  // Welcome screen
  levelButtons: document.querySelectorAll('.level-btn'),
  settingsBtn: document.getElementById('settings-btn'),
  
  // Settings screen
  soundsToggle: document.getElementById('sounds-toggle'),
  autoTransitionToggle: document.getElementById('auto-transition-toggle'),
  responseTimeSelect: document.getElementById('response-time'),
  backToMenuBtn: document.getElementById('back-to-menu'),
  
  // Game screen
  menuBtn: document.getElementById('menu-btn'),
  score: document.getElementById('score'),
  currentLevel: document.getElementById('current-level'),
  streak: document.getElementById('streak'),
  wordEmoji: document.getElementById('word-emoji'),
  wordHint: document.getElementById('word-hint'),
  playSoundBtn: document.getElementById('play-sound'),
  syllableSlots: document.getElementById('syllable-slots'),
  syllableBank: document.getElementById('syllable-bank'),
  attemptsHearts: document.getElementById('attempts-hearts'),
  clearWordBtn: document.getElementById('clear-word'),
  checkWordBtn: document.getElementById('check-word'),
  progressFill: document.getElementById('progress-fill'),
  progressText: document.getElementById('progress-text'),
  
  // Modals
  feedbackModal: document.getElementById('feedback-modal'),
  feedbackIcon: document.getElementById('feedback-icon'),
  feedbackMessage: document.getElementById('feedback-message'),
  feedbackPoints: document.getElementById('feedback-points'),
  achievementModal: document.getElementById('achievement-modal'),
  achievementIcon: document.getElementById('achievement-icon'),
  achievementTitle: document.getElementById('achievement-title'),
  achievementDescription: document.getElementById('achievement-description'),
  
  // Completion screen
  finalScore: document.getElementById('final-score'),
  correctWordsCount: document.getElementById('correct-words'),
  bestStreakCount: document.getElementById('best-streak'),
  playAgainBtn: document.getElementById('play-again'),
  backToMenuFinalBtn: document.getElementById('back-to-menu-final')
};

// Audio System
class AudioManager {
  constructor() {
    this.audioContext = null;
    this.speechSynthesis = window.speechSynthesis;
    this.voices = [];
    this.init();
  }

  async init() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.loadVoices();
    } catch (error) {
      console.log('Audio context not available:', error);
    }
  }

  loadVoices() {
    this.voices = this.speechSynthesis.getVoices();
    // Find a Portuguese voice
    this.portugueseVoice = this.voices.find(voice => 
      voice.lang.includes('pt') || voice.lang.includes('BR')
    ) || this.voices[0];
  }

  playWord(word) {
    if (!gameState.settings.soundsEnabled) return;
    
    if (this.voices.length === 0) {
      this.loadVoices();
    }

    const utterance = new SpeechSynthesisUtterance(word.toLowerCase());
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    utterance.volume = 1;
    
    if (this.portugueseVoice) {
      utterance.voice = this.portugueseVoice;
    }
    
    this.speechSynthesis.speak(utterance);
  }

  playFeedbackSound(type) {
    if (!gameState.settings.soundsEnabled || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    if (type === 'success') {
      // Happy sound sequence
      const frequencies = [523, 659, 784]; // C5, E5, G5
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const osc = this.audioContext.createOscillator();
          const gain = this.audioContext.createGain();
          osc.connect(gain);
          gain.connect(this.audioContext.destination);
          
          osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
          gain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
          
          osc.start(this.audioContext.currentTime);
          osc.stop(this.audioContext.currentTime + 0.3);
        }, index * 100);
      });
    } else {
      // Error sound
      oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.5);
    }
  }
}

const audioManager = new AudioManager();

// Screen Management
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// Game Logic
function initGame() {
  updateUI();
  loadSettings();
  attachEventListeners();
}

function loadSettings() {
  elements.soundsToggle.checked = gameState.settings.soundsEnabled;
  elements.autoTransitionToggle.checked = gameState.settings.autoTransition;
  elements.responseTimeSelect.value = gameState.settings.responseTime;
}

function updateSettings() {
  gameState.settings.soundsEnabled = elements.soundsToggle.checked;
  gameState.settings.autoTransition = elements.autoTransitionToggle.checked;
  gameState.settings.responseTime = parseInt(elements.responseTimeSelect.value);
}

function startLevel(level) {
  gameState.currentLevel = level;
  gameState.currentWordIndex = 0;
  gameState.score = 0;
  gameState.streak = 0;
  gameState.correctWords = 0;
  gameState.totalWords = gameData.niveis[level].palavras.length;
  gameState.attempts = 3;
  
  elements.currentLevel.textContent = level;
  showScreen('game');
  loadCurrentWord();
  updateUI();
}

function loadCurrentWord() {
  const currentWord = getCurrentWord();
  if (!currentWord) {
    completeLevel();
    return;
  }

  gameState.attempts = 3;
  gameState.startTime = Date.now();
  
  // Update word display
  elements.wordEmoji.textContent = currentWord.emoji;
  elements.wordHint.textContent = currentWord.dica;
  
  // Create syllable slots
  createSyllableSlots(currentWord.silabas.length);
  
  // Create syllable bank
  createSyllableBank(currentWord.silabas);
  
  updateUI();
}

function getCurrentWord() {
  const levelData = gameData.niveis[gameState.currentLevel];
  return levelData.palavras[gameState.currentWordIndex];
}

function createSyllableSlots(count) {
  elements.syllableSlots.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const slot = document.createElement('div');
    slot.className = 'syllable-slot';
    slot.dataset.slotIndex = i;
    slot.textContent = '_';
    elements.syllableSlots.appendChild(slot);
  }
  
  setupDropZones();
}

function createSyllableBank(syllables) {
  elements.syllableBank.innerHTML = '';
  
  // Shuffle syllables
  const shuffled = [...syllables].sort(() => Math.random() - 0.5);
  
  shuffled.forEach((syllable, index) => {
    const card = document.createElement('div');
    card.className = 'syllable-card';
    card.textContent = syllable;
    card.dataset.syllable = syllable;
    card.dataset.originalIndex = index;
    card.draggable = true;
    
    elements.syllableBank.appendChild(card);
  });
  
  setupDragAndDrop();
}

function setupDragAndDrop() {
  const cards = elements.syllableBank.querySelectorAll('.syllable-card');
  
  cards.forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    // Touch events for mobile
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    card.addEventListener('touchend', handleTouchEnd);
  });
}

function setupDropZones() {
  const slots = elements.syllableSlots.querySelectorAll('.syllable-slot');
  
  slots.forEach(slot => {
    slot.addEventListener('dragover', handleDragOver);
    slot.addEventListener('drop', handleDrop);
    slot.addEventListener('dragenter', handleDragEnter);
    slot.addEventListener('dragleave', handleDragLeave);
  });
}

// Drag and Drop Handlers
let draggedElement = null;
let touchOffset = { x: 0, y: 0 };

function handleDragStart(e) {
  draggedElement = e.target;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.outerHTML);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedElement = null;
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  if (!e.target.classList.contains('occupied')) {
    e.target.classList.add('drop-target');
  }
}

function handleDragLeave(e) {
  e.target.classList.remove('drop-target');
}

function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove('drop-target');
  
  if (e.target.classList.contains('occupied') || !draggedElement) return;
  
  placeSyllableInSlot(draggedElement, e.target);
}

// Touch events for mobile
function handleTouchStart(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = e.target.getBoundingClientRect();
  
  touchOffset.x = touch.clientX - rect.left;
  touchOffset.y = touch.clientY - rect.top;
  
  draggedElement = e.target;
  e.target.classList.add('dragging');
}

function handleTouchMove(e) {
  e.preventDefault();
  if (!draggedElement) return;
  
  const touch = e.touches[0];
  draggedElement.style.position = 'fixed';
  draggedElement.style.left = (touch.clientX - touchOffset.x) + 'px';
  draggedElement.style.top = (touch.clientY - touchOffset.y) + 'px';
  draggedElement.style.zIndex = '1000';
}

function handleTouchEnd(e) {
  e.preventDefault();
  if (!draggedElement) return;
  
  const touch = e.changedTouches[0];
  const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
  
  draggedElement.style.position = '';
  draggedElement.style.left = '';
  draggedElement.style.top = '';
  draggedElement.style.zIndex = '';
  draggedElement.classList.remove('dragging');
  
  if (elementBelow && elementBelow.classList.contains('syllable-slot') && 
      !elementBelow.classList.contains('occupied')) {
    placeSyllableInSlot(draggedElement, elementBelow);
  }
  
  draggedElement = null;
}

function placeSyllableInSlot(syllableCard, slot) {
  const syllableText = syllableCard.dataset.syllable;
  
  slot.textContent = syllableText;
  slot.classList.add('occupied');
  slot.dataset.syllable = syllableText;
  
  syllableCard.classList.add('placed');
  syllableCard.draggable = false;
  syllableCard.style.opacity = '0.5';
}

function clearWord() {
  // Clear all slots
  const slots = elements.syllableSlots.querySelectorAll('.syllable-slot');
  slots.forEach(slot => {
    slot.textContent = '_';
    slot.classList.remove('occupied');
    delete slot.dataset.syllable;
  });
  
  // Reset syllable cards
  const cards = elements.syllableBank.querySelectorAll('.syllable-card');
  cards.forEach(card => {
    card.classList.remove('placed');
    card.draggable = true;
    card.style.opacity = '1';
  });
}

function checkWord() {
  const slots = elements.syllableSlots.querySelectorAll('.syllable-slot');
  const constructedWord = Array.from(slots)
    .map(slot => slot.dataset.syllable || '')
    .join('');
  
  const currentWord = getCurrentWord();
  const isCorrect = constructedWord === currentWord.palavra;
  
  if (isCorrect) {
    handleCorrectAnswer();
  } else {
    handleIncorrectAnswer();
  }
}

function handleCorrectAnswer() {
  const responseTime = (Date.now() - gameState.startTime) / 1000;
  let points = 100;
  
  if (gameState.attempts === 2) points = 75;
  else if (gameState.attempts === 1) points = 50;
  
  gameState.score += points;
  gameState.streak++;
  gameState.correctWords++;
  
  if (gameState.streak > gameState.bestStreak) {
    gameState.bestStreak = gameState.streak;
  }
  
  // Check for achievements
  checkAchievements(responseTime);
  
  // Play success sound
  audioManager.playFeedbackSound('success');
  
  // Show feedback
  showFeedback(true, `Parabéns! Você acertou!`, `+${points} pontos`);
  
  // Auto advance or wait for user
  setTimeout(() => {
    hideFeedback();
    if (gameState.settings.autoTransition) {
      nextWord();
    }
  }, 2000);
}

function handleIncorrectAnswer() {
  gameState.attempts--;
  gameState.streak = 0;
  
  // Play error sound
  audioManager.playFeedbackSound('error');
  
  if (gameState.attempts > 0) {
    showFeedback(false, `Ops! Tente novamente.`, `${gameState.attempts} tentativa${gameState.attempts > 1 ? 's' : ''} restante${gameState.attempts > 1 ? 's' : ''}`);
    setTimeout(() => {
      hideFeedback();
      clearWord();
    }, 2000);
  } else {
    showFeedback(false, `A palavra era: ${getCurrentWord().palavra}`, `Vamos para a próxima!`);
    setTimeout(() => {
      hideFeedback();
      nextWord();
    }, 3000);
  }
  
  updateUI();
}

function nextWord() {
  gameState.currentWordIndex++;
  
  if (gameState.currentWordIndex >= gameState.totalWords) {
    completeLevel();
  } else {
    loadCurrentWord();
  }
}

function completeLevel() {
  elements.finalScore.textContent = gameState.score;
  elements.correctWordsCount.textContent = gameState.correctWords;
  elements.bestStreakCount.textContent = gameState.bestStreak;
  
  showScreen('completion');
}

function checkAchievements(responseTime) {
  const newAchievements = [];
  
  // First correct answer
  if (gameState.correctWords === 1 && !gameState.achievements.includes('primeiro_acerto')) {
    newAchievements.push('primeiro_acerto');
  }
  
  // 5 in a row
  if (gameState.streak === 5 && !gameState.achievements.includes('cinco_seguidas')) {
    newAchievements.push('cinco_seguidas');
  }
  
  // Fast response
  if (responseTime < 5 && !gameState.achievements.includes('velocista')) {
    newAchievements.push('velocista');
  }
  
  // 100 points
  if (gameState.score >= 100 && !gameState.achievements.includes('cem_pontos')) {
    newAchievements.push('cem_pontos');
  }
  
  // Show achievements
  newAchievements.forEach(achievementId => {
    gameState.achievements.push(achievementId);
    const achievement = gameData.conquistas.find(a => a.id === achievementId);
    if (achievement) {
      setTimeout(() => showAchievement(achievement), 1000);
    }
  });
}

function showFeedback(isCorrect, message, points) {
  elements.feedbackIcon.textContent = isCorrect ? '✅' : '❌';
  elements.feedbackMessage.textContent = message;
  elements.feedbackPoints.textContent = points;
  elements.feedbackModal.classList.add('show');
}

function hideFeedback() {
  elements.feedbackModal.classList.remove('show');
}

function showAchievement(achievement) {
  elements.achievementIcon.textContent = achievement.nome.split(' ')[0];
  elements.achievementTitle.textContent = achievement.nome;
  elements.achievementDescription.textContent = achievement.descricao;
  elements.achievementModal.classList.add('show');
  
  setTimeout(() => {
    elements.achievementModal.classList.remove('show');
  }, 3000);
}

function updateUI() {
  elements.score.textContent = gameState.score;
  elements.streak.textContent = gameState.streak;
  
  // Update attempts hearts
  const hearts = elements.attemptsHearts.querySelectorAll('.heart');
  hearts.forEach((heart, index) => {
    if (index < gameState.attempts) {
      heart.classList.remove('lost');
    } else {
      heart.classList.add('lost');
    }
  });
  
  // Update progress bar
  const progress = ((gameState.currentWordIndex + 1) / gameState.totalWords) * 100;
  elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
  elements.progressText.textContent = `${gameState.currentWordIndex + 1} / ${gameState.totalWords}`;
}

function attachEventListeners() {
  // Level selection
  elements.levelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const level = parseInt(btn.dataset.level);
      startLevel(level);
    });
  });
  
  // Settings
  elements.settingsBtn.addEventListener('click', () => showScreen('settings'));
  elements.backToMenuBtn.addEventListener('click', () => {
    updateSettings();
    showScreen('welcome');
  });
  
  // Game controls
  elements.menuBtn.addEventListener('click', () => showScreen('welcome'));
  elements.playSoundBtn.addEventListener('click', () => {
    const currentWord = getCurrentWord();
    if (currentWord) {
      audioManager.playWord(currentWord.palavra);
    }
  });
  elements.clearWordBtn.addEventListener('click', clearWord);
  elements.checkWordBtn.addEventListener('click', checkWord);
  
  // Completion screen
  elements.playAgainBtn.addEventListener('click', () => {
    startLevel(gameState.currentLevel);
  });
  elements.backToMenuFinalBtn.addEventListener('click', () => showScreen('welcome'));
  
  // Modal clicks
  elements.feedbackModal.addEventListener('click', (e) => {
    if (e.target === elements.feedbackModal) {
      hideFeedback();
    }
  });
  
  elements.achievementModal.addEventListener('click', (e) => {
    if (e.target === elements.achievementModal) {
      elements.achievementModal.classList.remove('show');
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (screens.game.classList.contains('active')) {
      if (e.key === 'Enter') {
        checkWord();
      } else if (e.key === 'Escape') {
        clearWord();
      } else if (e.key === ' ') {
        e.preventDefault();
        const currentWord = getCurrentWord();
        if (currentWord) {
          audioManager.playWord(currentWord.palavra);
        }
      }
    }
  });
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);

// Handle speech synthesis voices loading
window.speechSynthesis.onvoiceschanged = () => {
  audioManager.loadVoices();
};