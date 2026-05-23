const tensesAll = [
  "Present Simple", "Present Continuous", "Future Simple", "Future Continuous",
  "Would", "Would be", "Can", "Can be", "Could", "Could be", "May", "May be",
  "Might be", "Might", "Shall", "Shall be", "Should", "Should be", "Tomorrow",
  "This Friday", "Next week", "Tonight", "Tomorrow morning", "Next Tuesday /tiusdei/",
  "This Wednesday in the afternoon", "Tomorrow Night", "This Weekend", "On May 12th"
];

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
  // Si no hay ninguno seleccionado, usamos por defecto Present Simple
  const finalTenses = checkedTenses.length > 0 ? checkedTenses : ["Present Simple"];
  document.getElementById("tense").innerHTML = getRandomElement(finalTenses);

  // --- 2) Cantidad de Verbos desde el Slider ---
  const maxVerbs = parseInt(document.getElementById("verbs-range").value) || 25;
  const randomVerbIndex = Math.floor(Math.random() * maxVerbs) + 1;
  document.getElementById("img2").src = `../imgs/verbs/img${randomVerbIndex}.png`;

  // --- 3) Filtrar Pronombres (Mapeo de imágenes permitidas) ---
  const checkedPronouns = document.querySelectorAll('.pronoun-checkbox:checked');
  let allowedPronounImgs = [];
  
  checkedPronouns.forEach(cb => {
    // Convertimos el string "2,3,4" en un array de números [2, 3, 4]
    const imgs = cb.getAttribute('data-imgs').split(',').map(Number);
    allowedPronounImgs = allowedPronounImgs.concat(imgs);
  });

  // Si desmarcan todo, por defecto permitimos todas las imágenes (del 1 al 6)
  if (allowedPronounImgs.length === 0) {
    allowedPronounImgs = [1, 2, 3, 4, 5, 6];
  }
  const randomPronounImg = getRandomFromNumbers(allowedPronounImgs);
  document.getElementById("img1").src = `../imgs/pronouns/img${randomPronounImg}.png`;

  // --- 4) Filtrar Tipo de Oración (yn) ---
  const checkedYn = Array.from(document.querySelectorAll('.yn-checkbox:checked')).map(cb => parseInt(cb.value));
  // Si desmarcan todo, por defecto permitimos las 3 opciones [1, 2, 3]
  const finalYn = checkedYn.length > 0 ? checkedYn : [1, 2, 3];
  const randomYnImg = getRandomFromNumbers(finalYn);
  document.getElementById("img3").src = `../imgs/yn/img${randomYnImg}.png`;
}

// Cargar la primera tanda de imágenes al iniciar la página
window.onload = displayRandomImages;