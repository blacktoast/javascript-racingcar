import { $, getAttempts, getCarNames } from "./../utils/dom.js";

function addRacingEvent({ target }) {
  console.log(target);
  let carNames = getCarNames();
  let retryNumber = getAttempts();
  console.log(carNames, retryNumber);
}

function addPutCarNameEvent({ target }) {
  
}
export function initEvents() {
  let $putCar = $(".put-car-names");
  let $startBtn = $(".start");
  $putCar.addEventListener("click", addPutCarNameEvent);
  $startBtn.addEventListener("click", addRacingEvent);
}
