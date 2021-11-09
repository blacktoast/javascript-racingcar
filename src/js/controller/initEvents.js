import { $, getAttempts, getCarNames } from "./../utils/dom.js";

function addRacingEvent({ target }) {
  console.log(target);
  let carNames = getCarNames();
  let retryNumber = getAttempts();
  console.log(carNames, retryNumber);
}

export function initEvents() {
  console.log($(".start"));
  let $startBtn = $(".start");
  $startBtn.addEventListener("click", addRacingEvent);
}
