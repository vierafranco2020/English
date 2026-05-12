function getRandomImage(folder, count) {
  const randomIndex = Math.floor(Math.random() * count) + 1;
  return `${folder}/img${randomIndex}.png`;
};

function displayRandomImages() {
  const isPronounFirst = Math.random() < 0.5;

  const pronounImage = getRandomImage("../imgs/pronouns", 6);
  const nounImage = getRandomImage("../imgs/nouns", 39);

  if (isPronounFirst) {
    document.getElementById("img1").src = pronounImage;
    document.getElementById("img2").src = nounImage;
  } else {
    document.getElementById("img1").src = nounImage;
    document.getElementById("img2").src = pronounImage;
  }
};

window.onload = displayRandomImages;