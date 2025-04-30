// Elementos del DOM
const exerciseInput = document.getElementById('exercise');
const restInput     = document.getElementById('rest');
const repsInput     = document.getElementById('reps');
const totalTimeEl   = document.getElementById('totalTime');
const goTimerBtn    = document.getElementById('goTimerBtn');

// Variables de estado
let exerciseTime = 0;
let restTime     = 0;
let reps         = 0;
let totalTime    = 0;

// Función de cálculo y actualización UI
function updateCalculation() {
    exerciseTime = parseInt(exerciseInput.value, 10) || 0;
    restTime     = parseInt(restInput.value, 10)     || 0;
    reps         = parseInt(repsInput.value, 10)     || 0;

    if (exerciseTime > 0 && restTime > 0 && reps > 0) {
        const cycle    = exerciseTime + restTime;
        totalTime      = cycle * reps;

        // Formato mm:ss
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;

        totalTimeEl.innerHTML = `<b>Tiempo total:</b> ${mins} min ${secs} s`;
        goTimerBtn.disabled   = false;
    } else {
        totalTimeEl.innerHTML = `<b>Tiempo total:</b> –`;
        goTimerBtn.disabled   = true;
    }
}

// Listeners para cálculo instantáneo
exerciseInput.addEventListener('input', updateCalculation);
restInput    .addEventListener('input', updateCalculation);
repsInput    .addEventListener('input', updateCalculation);

// Al hacer clic, redirige con parámetros
goTimerBtn.addEventListener('click', () => {
    const params = new URLSearchParams({
        exercise: exerciseTime,
        rest:     restTime,
        reps:     reps
    });
    window.location.href = `timer.html?${params.toString()}`;
});
