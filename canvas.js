const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = 'black';
let lineWidth = 2;

const surfaces = {
  paper: 'white',
  board: 'lightgray',
  wall: 'lightblue',
  canvasBoard: 'beige',
  fabric: 'linen',
  digitalCanvas: 'white',
};

function drawCanvasSurface(surfaceType) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = surfaces[surfaceType];
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with selected surface
}

function changeCanvas(surfaceType) {
  drawCanvasSurface(surfaceType);
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', draw);
}

function startDrawing(e) {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (!isDrawing) return;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  lastX = x;
  lastY = y;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Optionally reset surface when clearing
  drawCanvasSurface('paper');  // Default back to 'paper'
}

function saveCanvas() {
  const dataURL = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();
}

// Set initial surface (Paper by default)
drawCanvasSurface('paper');
