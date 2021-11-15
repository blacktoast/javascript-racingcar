import { startRacing } from "../game/racing.js";
import { renderCar } from "../render/renderCarName.js";
import {
  $,
  getAttempts,
  getCarContainer,
  getCarNames,
} from "./../utils/dom.js";
import { addPutCarNameEvent, checkCarName } from "./carEvent.js";
import { addResetEvent } from "./reset.js";

function checkInputNumber() {
  let number = getAttempts();
  if (number <= 0) {
    alert("시도 횟수는 0이나 음수가 될수없습니다");
    return false;
  }
  return true;
}

function addRacingEvent({ target }) {
  console.log(target);
  addPutCarNameEvent();
  let carNames = getCarNames();
  let retryNumber = getAttempts();
  if (checkCarName() && checkInputNumber(retryNumber)) {
    startRacing(retryNumber);
  }
  //r게임 시작
}

export function initEvents() {
  let $putCar = $(".put-car-name");
  console.log($putCar);
  let $startBtn = $(".start");
  let $resetBtn = $(".resetBtn");
  $putCar.addEventListener("click", addPutCarNameEvent);
  $startBtn.addEventListener("click", addRacingEvent);
  $resetBtn.addEventListener("click", addResetEvent);
}
