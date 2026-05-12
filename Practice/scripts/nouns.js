function getRandomImage(folder, count) {
  const randomIndex = Math.floor(Math.random() * count) + 1;
  return `${folder}/img${randomIndex}.png`;
}

function getRandomNumber() {
  return Math.random() < 0.3 ? 1 : Math.floor(Math.random() * 8) + 2;
}

function displayRandomImages() {
  document.getElementById("img1").src = getRandomImage("../imgs/pronouns", 6);
  document.getElementById("img2").src = getRandomImage("../imgs/nouns", 30);
  document.getElementById("img3").src = getRandomImage("../imgs/yn", 3);
  document.getElementById("randomNumber").textContent = getRandomNumber();
}

window.onload = displayRandomImages;
