const tenses = [
  "Near",
  "Far"
];

function getRandomElement(array){
  const randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}
function getRandomImage(folder, count) {
  const randomIndex = Math.floor(Math.random() * count) + 1;
  return `${folder}/img${randomIndex}.png`;
};
function getRandomNumber() {
  const number = Math.random() < 0.5 ? 1 : Math.floor(Math.random() * 999998) + 2;
  return number.toLocaleString('es-ES'); // Esto le pone punto como separador de miles
}

function displayRandomImages() {
  document.getElementById("tense").innerHTML = "";
  document.getElementById("tense").innerHTML = getRandomElement(tenses);
  document.getElementById("randomNumber").textContent = getRandomNumber();
  document.getElementById("img1").src = getRandomImage("../imgs/nouns", 39);
};

window.onload = displayRandomImages;