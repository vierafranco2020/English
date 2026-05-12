import { generatePerson } from "./generatePerson.js";

function choose(opt1, opt2) {
  return Math.random() < 0.5 ? opt1 : opt2;
};

function createCard(member) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
          <h3>${member.fullname}</h3>
          <div class="info-cnt">
            <div class="left">
              <p><b>Birthday:</b> ${member.birthday}</p>
              <p><b>Age:</b> ${member.age}</p>
              <p><b>Heith:</b> ${member.heith} m</p>
              <p><b>From:</b> ${member.country}</p>
              <p><b>Living in:</b> ${member.countryLive}</p>
              <img src="../imgs/likes/eye.png" alt="Eye" width="40"><div class="eye_circle" style="background-color:${
                member.eyeColor
              };"></div></br>
              <img src="../imgs/likes/hair.png" alt="Hair" width="40"><div class="eye_circle" style="background-color:${
                member.hairColor
              };"></div></br>
              <p><b>${member.job}</b></p>
              <p>${member.description}</p>
            </div>
            <div class="midle">
              <img src="../imgs/likes/like.png" alt="Like" width="40">${
                member.like
              }</br>
              <img src="../imgs/likes/dislike.png" alt="Dislike" width="40">${
                member.dislike
              }</br>
              <img src="../imgs/likes/love.png" alt="Love" width="40">${
                member.love
              }</br>
              <img src="../imgs/likes/hate.png" alt="Hate" width="40">${
                member.hate
              }</br>
              <p><b>Favorite things:</b></p>
              <ul>
                <li><b>Song:</b> ${member.favoriteSong}</li>
                <li><b>TV Show:</b> ${member.favoriteTVShow}</li>
                <li><b>Movie:</b> ${member.favoriteMovie}</li>
                <li><b>Superhero:</b> ${member.favoriteSuperhero}</li>
                <li><b>Color:</b> <div class="eye_circle" style="background-color: ${
                  member.favoriteColor
                };"></div></li>
                <li><b>Food:</b> ${member.foods}</li>
                <li><b>Drinks:</b> ${member.drinks}</li>
              </ul>
              <p><b>Think:</b> ${member.opinions}<br>
              <b>Know:</b> ${member.knowledge}<br>
              <b>Feel:</b> ${member.feelings}<br>
              <b>Want:</b> ${member.wants}<br>
              <b>Need:</b> ${member.needs}<br>
              <b>${choose("Would","Wouldn't")}:</b> ${member.advice[0]}<br>
              <b>${choose("Should","Shouldn't")}:</b> ${member.advice[1]}<br>
              <b>${choose("Can","Can't")}:</b> ${member.skills}<br>
              <b>${choose("Could","Couldn't")}:</b> ${member.advice[2]}</p>
            </div>
            <div class="right">
              <p><b>Family Members:</b></p>
              <p>${member.familyMembers}</p>
              <b>Siblings:</b>
              <ul>
                ${member.siblings
                  .map(
                    (sibling) =>
                      `<li><b>${sibling.fullname}</b>, ${sibling.age}, ${sibling.job}</li>`
                  )
                  .join("")}
              </ul>
              <p>${member.who}</p>
            </div>
          </div>
        `;

  return card;
}

async function main() {
  const newPerson = await generatePerson();
  const card = createCard(newPerson);
  document.getElementById("card-cnt").appendChild(card); // Añade la card al cuerpo del documento
}

main();

// Evento para generar una nueva tarjeta al hacer click
document.getElementById("generar").addEventListener("click", () => {
  document.getElementsByClassName("card")[0].remove();
  main();
});
