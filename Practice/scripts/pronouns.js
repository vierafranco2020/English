// Función auxiliar para obtener un elemento aleatorio de un array
function getRandomElement(array){
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Función auxiliar para obtener un número aleatorio de un array específico de números
function getRandomFromNumbers(numbersArray) {
  const randomIndex = Math.floor(Math.random() * numbersArray.length);
  return numbersArray[randomIndex];
}

function displayRandomImages() {
  // --- 1) Filtrar Tiempos Verbales seleccionados ---
  const checkedTenses = Array.from(document.querySelectorAll('.tense-checkbox:checked')).map(cb => cb.value);
  const finalTenses = checkedTenses.length > 0 ? checkedTenses : ["Present Simple"];
  document.getElementById("tense").innerHTML = getRandomElement(finalTenses);

  // --- 2) Cantidad de Verbos desde el Slider (img2) ---
  const maxVerbs = parseInt(document.getElementById("verbs-range").value) || 54;
  const randomVerbIndex = Math.floor(Math.random() * maxVerbs) + 1;
  document.getElementById("img2").src = `../imgs/verbs/img${randomVerbIndex}.png`;

  // --- 3) NUEVO: Filtrar Pronombre 1 (Izquierda -> img1) ---
  const checkedPronouns1 = document.querySelectorAll('.pronoun1-checkbox:checked');
  let allowedPronounImgs1 = [];
  
  checkedPronouns1.forEach(cb => {
    const imgs = cb.getAttribute('data-imgs').split(',').map(Number);
    allowedPronounImgs1 = allowedPronounImgs1.concat(imgs);
  });

  if (allowedPronounImgs1.length === 0) {
    allowedPronounImgs1 = [1, 2, 3, 4, 5, 6]; // Respaldo si desmarcan todos
  }
  const randomPronounImg1 = getRandomFromNumbers(allowedPronounImgs1);
  document.getElementById("img1").src = `../imgs/pronouns/img${randomPronounImg1}.png`;

  // --- 4) NUEVO: Filtrar Pronombre 2 (Derecha -> img3) ---
  const checkedPronouns2 = document.querySelectorAll('.pronoun2-checkbox:checked');
  let allowedPronounImgs2 = [];
  
  checkedPronouns2.forEach(cb => {
    const imgs = cb.getAttribute('data-imgs').split(',').map(Number);
    allowedPronounImgs2 = allowedPronounImgs2.concat(imgs);
  });

  if (allowedPronounImgs2.length === 0) {
    allowedPronounImgs2 = [1, 2, 3, 4, 5, 6]; // Respaldo si desmarcan todos
  }
  const randomPronounImg3 = getRandomFromNumbers(allowedPronounImgs2);
  document.getElementById("img3").src = `../imgs/pronouns/img${randomPronounImg3}.png`;
}

// Cargar al iniciar la página
window.onload = displayRandomImages;