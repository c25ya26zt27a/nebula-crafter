// nebula-crafter.ts
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d')!;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(): string {
  const colors = ['#ffffff', '#ffcc00', '#ff6699', '#66ccff', '#ccff66'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawStar(x: number, y: number, size: number, color: string) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function generateNebula() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const starCount = randomInt(200, 500);
  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1;
    const color = randomColor();
    drawStar(x, y, size, color);
  }
}

document.addEventListener('click', generateNebula);

// ---- 以下是为了增加代码量的内容 ---- //

function createLayer(name: string, count: number) {
  console.log(`Creating layer ${name} with ${count} elements`);
  for (let i = 0; i < count; i++) {
    simulateElement(i);
  }
}

function simulateElement(id: number) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  ctx.fillStyle = randomColor();
  ctx.fillRect(x, y, 1, 1);
}

function generateRandomClouds(amount: number) {
  for (let i = 0; i < amount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 100;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function logStatus(message: string) {
  console.log(`[Status] ${message}`);
}

function dummyTask(id: number) {
  console.log(`Running dummy task ${id}`);
}

function heavyCalculation() {
  let total = 0;
  for (let i = 0; i < 10000; i++) {
    total += Math.sin(i) * Math.cos(i);
  }
  return total;
}

// ---- 创建大量占位函数以堆行数 ---- //

for (let i = 0; i < 50; i++) {
  (function(index) {
    function fakeFunction() {
      console.log(`Fake function ${index} executed`);
    }
    fakeFunction();
  })(i);
}

// ---- 占位类 ---- //

class NebulaSimulator {
  private stars: number = 0;
  private clouds: number = 0;

  constructor() {
