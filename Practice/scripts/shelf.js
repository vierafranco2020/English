const totalImgs = 37; // Cambiá esto según cuántas imágenes tengas
const usedIndices = new Set();

function getRandomImageIndex() {
  let index;
  index = Math.floor(Math.random() * totalImgs) + 1;
  // do {
  //   index = Math.floor(Math.random() * totalImgs) + 1;
  // } while (usedIndices.has(index));
  // usedIndices.add(index);
  return index;
}

function createImgElement(index) {
  const img = document.createElement('img');
  img.src = `../imgs/nouns/img${index}.png`;
  img.alt = `noun${index}`;
  return img;
}

// Generar imágenes aleatorias para cada sección
const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");
const leftSlot = document.getElementById("left-slot");
const rightSlot = document.getElementById("right-slot");
const centerGrid = document.getElementById("center-grid");

// 3 arriba
for (let i = 0; i < 3; i++) {
  topRow.appendChild(createImgElement(getRandomImageIndex()));
}

// 9 centro
for (let i = 0; i < 9; i++) {
  centerGrid.appendChild(createImgElement(getRandomImageIndex()));
}

// 3 abajo
for (let i = 0; i < 3; i++) {
  bottomRow.appendChild(createImgElement(getRandomImageIndex()));
}

// 1 a la izquierda y 1 a la derecha
leftSlot.appendChild(createImgElement(getRandomImageIndex()));
rightSlot.appendChild(createImgElement(getRandomImageIndex()));
