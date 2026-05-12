import { generatePerson } from "./generatePerson.js";

function createCard(member) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
          <h3>${member.fullname}, ${member.age}</h3>
          <div class="info-cnt">
            <div class="left">
              <p>${member.heith} m</p>
              <p>${member.country}</p>
              <img src="../imgs/likes/eye.png" alt="Eye" width="40"><div class="eye_circle" style="background-color: ${
                member.eyeColor
              };"></div></br>
              <img src="../imgs/likes/hair.png" alt="Hair" width="40"><div class="eye_circle" style="background-color: ${
                member.hairColor
              };"></div></br>
              <p>${member.job}</p>
              <p>${member.description}</p>
              <p>Have </br> ${member.have}</p>
            </div>
            <div class="right">
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
              <p>Father: ${member.father}</p>
              <p>Mother: ${member.mother}</p>
              Siblings:
              <ul>
                ${member.siblings
                  .map(
                    (sibling) => `<li>${sibling.fullname}, ${sibling.age}</li>`
                  )
                  .join("")}
              </ul>
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
