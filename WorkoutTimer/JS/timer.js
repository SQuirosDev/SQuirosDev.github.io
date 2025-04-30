// Parámetros desde index.html
const params        = new URLSearchParams(window.location.search);
const exerciseTime  = parseInt(params.get('exercise'), 10) || 0;
const restTime      = parseInt(params.get('rest'), 10)     || 0;
const repsTotal     = parseInt(params.get('reps'), 10)     || 1;

const modeTitle     = document.getElementById('modeTitle');
const timeDisplay   = document.getElementById('timeDisplay');
const totalRemEl    = document.getElementById('totalRemaining');
const repsEl        = document.getElementById('repsCompleted');
const startBtn      = document.getElementById('startBtn');
const backBtn       = document.getElementById('backBtn');

// Estado
let currentMode     = 'exercise';                      // 'exercise' o 'rest'
let timeLeft        = exerciseTime;                    // para el ciclo actual
let totalTimeLeft   = repsTotal * (exerciseTime + restTime);  // total
let repsCompleted   = 0;
let timerInterval   = null;

// Base BG para flash
const BASE_BG       = '#101010';

// Formatear segundos a mm:ss
function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
}

// Actualiza todos los displays
function updateDisplay() {
    timeDisplay.textContent = formatTime(timeLeft);
    totalRemEl.innerHTML    = `<b>Tiempo total restante:</b> ${formatTime(totalTimeLeft)}`;
    repsEl.innerHTML        = `<b>Repeticiones completadas:</b> ${repsCompleted} / ${repsTotal}`;
    modeTitle.textContent   = currentMode === 'exercise' ? 'Ejercicio' : 'Descanso';
}

// Flash de color
function flashBackground(color) {
    document.body.style.backgroundColor = color;
    setTimeout(() => {
        document.body.style.backgroundColor = BASE_BG;
    }, 500);
}

// Cambiar modo y, si acabó un ciclo de descanso, contar repetición
function switchMode() {
    if (currentMode === 'exercise') {
        currentMode = 'rest';
        timeLeft    = restTime;
        flashBackground('rgba(255, 0, 0, 0.8)');
    } else {
        // Terminó un ciclo completo (ejercicio+descanso)
        repsCompleted++;
        currentMode = 'exercise';
        timeLeft    = exerciseTime;
        flashBackground('rgba(0, 200, 0, 0.8)');
    }
    updateDisplay();
}

// Función principal del timer
function startTimer() {
    startBtn.disabled = true;
    backBtn.disabled  = true;
    updateDisplay();

    timerInterval = setInterval(() => {
        if (totalTimeLeft <= 0) {
            // Se terminaron todas las repeticiones
            clearInterval(timerInterval);
            modeTitle.textContent = '¡Terminado!';
            startBtn.disabled = false;
            backBtn.disabled  = false;
            return;
        }

        // Decrementos
        timeLeft--;
        totalTimeLeft--;

        // Si el ciclo actual terminó (timeLeft < 0), cambiamos de modo
        if (timeLeft < 0) {
            switchMode();
        } else {
            updateDisplay();
        }
    }, 1000);
}

// Listeners
startBtn.addEventListener('click', startTimer);

backBtn.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    window.location.href = 'index.html';
});

// Muestra inicial
updateDisplay();
