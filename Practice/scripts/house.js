const totalImgs = 37;
const totalRooms = 14;

// Generar 14 índices únicos aleatorios
function getUniqueRandomIndices(count, max) {
  const indices = new Set();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * max) + 1;
    indices.add(randomIndex);
  }
  return Array.from(indices);
}

const uniqueImageIndices = getUniqueRandomIndices(totalRooms, totalImgs);

// Insertar imágenes en los cuartos
document.querySelectorAll('.room').forEach((roomDiv, index) => {
  const roomName = roomDiv.dataset.room;
  const imgIndex = uniqueImageIndices[index]; // Usar el índice único

  const label = document.createElement('div');
  label.textContent = roomName;
  label.style.fontWeight = 'bold';

  const img = document.createElement('img');
  img.src = `../imgs/nouns/img${imgIndex}.png`;
  img.alt = roomName;

  roomDiv.appendChild(label);
  roomDiv.appendChild(img);
});
