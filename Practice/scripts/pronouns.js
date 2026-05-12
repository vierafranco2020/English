const tenses = [
  "Present Simple",
  "Present Continuous",
  "Future Simple",
  "Future Continuous",
  "Would",
  "Would be",
  "Can",
  "Can be"
];

function getRandomElement(array){
  const randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}
function getRandomImage(folder, count) {
  const randomIndex = Math.floor(Math.random() * count) + 1;
  return `${folder}/img${randomIndex}.png`;
};

function displayRandomImages() {
  document.getElementById("tense").innerHTML = "";
  document.getElementById("tense").innerHTML = getRandomElement(tenses);
  document.getElementById("img1").src = getRandomImage("../imgs/pronouns", 6);
  document.getElementById("img2").src = getRandomImage("../imgs/verbs", 41);
  document.getElementById("img3").src = getRandomImage("../imgs/pronouns", 6);
};

window.onload = displayRandomImages;
