const tensesAll = [
  "Present Simple",
  "Present Continuous",
  "Future Simple",
  "Future Continuous",
  "Would",
  "Would be",
  "Can",
  "Can be",
  "Could",
  "Could be",
  "May",
  "May be",
  "Shall",
  "Shall be",
  "Should",
  "Should be"
];

const tenses = [
  "Future Simple",
  "Present Simple",
  "Present Continuous"
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
  document.getElementById("img3").src = getRandomImage("../imgs/yn", 3);
};

window.onload = displayRandomImages;
