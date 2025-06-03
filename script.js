const emoji = document.getElementById('follower');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX + 10; 
  mouseY = e.clientY + 10;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  emoji.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}

animate(); 



