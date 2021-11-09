import { renderCar } from "../render/renderCarName.js";
import {
  $,
  getAttempts,
  getCarContainer,
  getCarNames,
} from "./../utils/dom.js";
import { addPutCarNameEvent } from "./carEvent.js";

function addRacingEvent({ target }) {
  console.log(target);
  let carNames = getCarNames();
  let retryNumber = getAttempts();
  //r게임 시작
}

export function initEvents() {
  let $putCar = $(".put-car-name");
  console.log($putCar);
  let $startBtn = $(".start");
  $putCar.addEventListener("click", addPutCarNameEvent);
  $startBtn.addEventListener("click", addRacingEvent);
}
