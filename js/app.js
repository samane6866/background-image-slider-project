const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// buena suerte
let indexPhoto = 1;

let imageContainer = document.querySelector(".img-container");

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button);
    if (button.classList.contains("btn-right")) {
      indexPhoto == pictures.length - 1 ? (indexPhoto = 0) : indexPhoto++;
      imageContainer.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
    } else {
      indexPhoto == 0 ? (indexPhoto = pictures.length - 1) : indexPhoto--;
      imageContainer.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;

      console.log("hola");
    }
  });
});
