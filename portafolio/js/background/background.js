const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    adjustBalls();
}

let bolas = []
let numBolas = 30;

function adjustBalls() {
    const screenWidth = window.innerWidth;

    // Cambiar la cantidad de bolas según el tamaño de la pantalla
    if (screenWidth > 768) {
        numBolas = 40; // Pantallas grandes
    } else {
        numBolas = 20; // Pantallas pequeñas
    }

    // Recalcular las bolas
    bolas = [];

    for (let i = 0; i < numBolas; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        bolas.push(new Bola(x, y));
    }
}

function animar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bolas.forEach(bola => {
        bolas.forEach(bola2 => {
            let dx = bola2.x - bola.x
            let dy = bola2.y - bola.y
            let dist = Math.sqrt(dx ** 2 + dy ** 2)

            if(dist < 200){
                ctx.beginPath()
                ctx.moveTo(bola.x, bola.y)
                ctx.lineTo(bola2.x, bola2.y)
                ctx.strokeStyle = 'white'; // Cambiar a blanco o el color que prefieras
                ctx.stroke()
                ctx.closePath()
            } 
        })

        bola.dibujar()
        bola.mover()
    })

    requestAnimationFrame(animar)
}

// Inicializar
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Llamar para inicializar las bolas y el tamaño
animar();