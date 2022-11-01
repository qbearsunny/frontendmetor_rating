//HTML find
let rateCard = document.querySelector(".rate_card");
let rateBTNcontainer = document.querySelector(".rateBTN_container");
let thankCard = document.querySelector(".thankyou_card");
let submitBTN = document.querySelector(".submitBTN");
let showRateResult = document.querySelector(".rate_result");

//--------------------------------------------------------------------------------
//function list
function toNextCard() {
  rateCard.style.display = "none";
  thankCard.style.display = "flex";
}

//--------------------------------------------------------------------------------
//add rate button with button
//  let rateArray = [1, 2, 3, 4, 5];
//  let rateButtonCreate = rateArray.map(function (rateButtonCreate) {
//    return `<button type="button" class="rateBTN rateNum${rateButtonCreate}">${rateButtonCreate}</button>`;
//  });
//  rateButtonCreate = rateButtonCreate.join("");
//  rateBTNcontainer.insertAdjacentHTML("beforeend", rateButtonCreate);
//  console.log(rateButtonCreate);

//--------------------------------------------------------------------------------
// rate button action

let rateBTN = document.querySelectorAll(".rateBTN");

rateBTN.forEach(function (BTN, i) {
  BTN.addEventListener("click", function () {
    rateBTN[i].classList.add("clicked");
  });
});

//--------------------------------------------------------------------------------
let rateResult = document.getElementsByClassName('clicked');


//--------------------------------------------------------------------------------
// submit button action

submitBTN.addEventListener("click", toNextCard);
