const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// Confetti setup
const confettiColors = ["#ff6f61", "#ffd966", "#6fd08c", "#ff85c0", "#ffffff"];
const confettiPieces = [];

function createConfetti() {
    const count = 100;
    for (let i = 0; i < count; i++) {
        confettiPieces.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            size: Math.random() * 6 + 4,
            velocity: Math.random() * 3 + 2,
            angle: Math.random() * Math.PI * 2
        });
    }
}

function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach((piece) => {
        confettiCtx.fillStyle = piece.color;
        confettiCtx.beginPath();
        confettiCtx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        confettiCtx.fill();

        piece.y += piece.velocity;
        piece.x += Math.sin(piece.angle) * 2;

        if (piece.y > confettiCanvas.height) piece.y = -10;
        if (piece.x > confettiCanvas.width) piece.x = 0;
    });
    requestAnimationFrame(drawConfetti);
}

function showConfetti() {
    createConfetti();
    drawConfetti();
}
