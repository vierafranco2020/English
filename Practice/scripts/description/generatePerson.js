async function fetchData() {
  const response = await fetch("../scripts/description/data.json");
  return response.json();
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAmountElements(array, count) {
  if (count > array.length) {
    throw new Error("La cantidad solicitada excede el tamaño del array.");
  }

  const indices = new Set();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * array.length));
  }

  return Array.from(indices).map((i) => array[i]);
}
function getRandomBirthday() {
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1; // para evitar días inválidos
  return `${month}/${day}`;
}

function maybeInclude(probability = 0.6) {
  return Math.random() < probability;
}

function generateFamily(age, data, last) {
  const family = [];

  // FATHER
  if (maybeInclude()) {
    const fatherAge = age + 20 + Math.floor(Math.random() * 15); // 20-35 años mayor
    const father = `${getRandomElement(data.male_names)} ${last}, ${fatherAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Father:</b> ${father}`);
  }

  // MOTHER
  if (maybeInclude()) {
    const motherAge = age + 20 + Math.floor(Math.random() * 12); // 20-32 años mayor
    const mother = `${getRandomElement(data.female_names)} ${getRandomElement(data.last_names)}, ${motherAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Mother:</b> ${mother}`);
  }

  // UNCLE
  if (maybeInclude()) {
    const uncleAge = age + 15 + Math.floor(Math.random() * 20); // 15-35 años mayor
    const uncle = `${getRandomElement(data.male_names)} ${getRandomElement(data.last_names)}, ${uncleAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Uncle:</b> ${uncle}`);
  }

  // AUNT
  if (maybeInclude()) {
    const auntAge = age + 15 + Math.floor(Math.random() * 18); // 15-33 años mayor
    const aunt = `${getRandomElement(data.female_names)} ${getRandomElement(data.last_names)}, ${auntAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Aunt:</b> ${aunt}`);
  }

  // NEPHEW
  if (maybeInclude()) {
    const nephewAge = Math.max(1, age - 5 - Math.floor(Math.random() * 15)); // 1 a (edad-5)
    const nephew = `${getRandomElement(data.male_names)} ${getRandomElement(data.last_names)}, ${nephewAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Nephew:</b> ${nephew}`);
  }

  // NIECE
  if (maybeInclude()) {
    const nieceAge = Math.max(1, age - 5 - Math.floor(Math.random() * 15));
    const niece = `${getRandomElement(data.female_names)} ${getRandomElement(data.last_names)}, ${nieceAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Niece:</b> ${niece}`);
  }

  // GRANDFATHER
  if (maybeInclude(0.5)) {
    const grandfatherAge = age + 40 + Math.floor(Math.random() * 20); // 40-60 años mayor
    const grandfather = `${getRandomElement(data.male_names)} ${last}, ${grandfatherAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Grandfather:</b> ${grandfather}`);
  }

  // GRANDMOTHER
  if (maybeInclude(0.5)) {
    const grandmotherAge = age + 40 + Math.floor(Math.random() * 18);
    const grandmother = `${getRandomElement(data.female_names)} ${getRandomElement(data.last_names)}, ${grandmotherAge} years old, ${getRandomBirthday()}`;
    family.push(`<b>Grandmother:</b> ${grandmother}`);
  }

  const familyString = family.join("<br>");
  return familyString;
};

async function generatePerson() {
  const data = await fetchData();

  const firstName =
    Math.random() < 0.5
      ? getRandomElement(data.male_names)
      : getRandomElement(data.female_names);
  const lastName = getRandomElement(data.last_names);
  const age = Math.floor(Math.random() * (40 - 18)) + 18;
  const monthBirthday = (Math.floor(Math.random() * 12) + 1).toString();
  const dayBirthday = (Math.floor(Math.random() * 31) + 1).toString();
  const yearBirthday = (2025 - age).toString();
  const birthday = [monthBirthday,"/", dayBirthday,"/", yearBirthday].join(" ");
  const heith = Math.random() * (2.05-1.5) + 1.45;
  const country = getRandomElement(data.countries);
  const countryLive = getRandomElement(data.countries);
  const eyeColor = getRandomElement(data.eye_colors);
  const hairColor = getRandomElement(data.hair_colors);
  const job = getRandomElement(data.employment);
  const filteredJobList = data.employment.filter(item => !item.includes('study'));
  const jobFather = getRandomElement(filteredJobList);
  const jobMother = getRandomElement(filteredJobList);
  const auxList = getRandomAmountElements(data.aux, 5);
  const descriptionList = getRandomAmountElements(data.descriptions, 5);
  const description = [
    auxList[0],
    descriptionList[0],
    "</br>",
    auxList[1],
    descriptionList[1],
    "</br>",
    auxList[2],
    descriptionList[2],
    "</br>",
    auxList[3],
    descriptionList[3],
    "</br>",
    auxList[4],
    descriptionList[4],
  ].join(" ");
  const haveAdjList = getRandomAmountElements(data.adjectives, 3);
  const haveNounList = getRandomAmountElements(data.nouns, 3);
  const have = [
    haveAdjList[0],
    haveNounList[0],
    "</br>",
    haveAdjList[1],
    haveNounList[1],
    "</br>",
    haveAdjList[2],
    haveNounList[2],
  ].join(" ");
  const likesAndDislikes = getRandomAmountElements(data.likes, 4);
  
  //family members
  const familyMembers = generateFamily(age, data, lastName)

  // Para siblings
  const siblingsCount = Math.floor(Math.random() * 5) + 1; // Cantidad aleatoria entre 0 y 4
  const siblings = Array.from({ length: siblingsCount }, () => {
    const siblingAge = age + Math.floor(Math.random() * (7 + 1)) + 1; // Edad aleatoria
    const siblingName = `${getRandomElement(
      data.male_names.concat(data.female_names)
    )}`;
    const siblingJob = getRandomElement(data.employment);
    return { fullname: siblingName, age: siblingAge, job: siblingJob};
  });

  const whoList = getRandomAmountElements(data.who,4);
  const whoJobList = getRandomAmountElements(filteredJobList,4);
  const who= [
    "<b>",whoList[0]," :</b> ",getRandomElement(data.male_names)," , ",whoJobList[0],"</br>",
    "<b>",whoList[1]," :</b> ",getRandomElement(data.female_names)," , ",whoJobList[1],"</br>",
    "<b>",whoList[2]," :</b> ",getRandomElement(data.male_names)," , ",whoJobList[2],"</br>",
    "<b>",whoList[3]," :</b> ",getRandomElement(data.female_names)," , ",whoJobList[3],"</br>",
  ].join(" ");

  return {
    fullname: `${firstName} ${lastName}`,
    age,
    birthday,
    heith: heith.toFixed(2),
    country,
    countryLive,
    eyeColor,
    hairColor,
    job,
    description,
    have,
    like: likesAndDislikes[0],
    dislike: likesAndDislikes[1],
    love: likesAndDislikes[2],
    hate: likesAndDislikes[3],
    familyMembers,
    siblings,
    favoriteSong: getRandomElement(data.songs),
    favoriteTVShow: getRandomElement(data.TVshows),
    favoriteMovie: getRandomElement(data.movies),
    favoriteColor: getRandomElement(data.color),
    favoriteSuperhero: getRandomElement(data.superhero),
    foods: getRandomAmountElements(data.food, 3).join(", "),
    drinks: getRandomAmountElements(data.drinks, 3).join(", "),
    who,
    opinions: getRandomElement(data.opinions),
    knowledge: getRandomElement(data.knowledge),
    feelings: getRandomElement(data.feelings),
    wants: getRandomElement(data.wants),
    needs: getRandomElement(data.needs),
    skills: getRandomElement(data.skills),
    advice: getRandomAmountElements(data.advice,3)
  };
}

export { generatePerson };
