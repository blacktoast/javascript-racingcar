import { renderCar } from "../render/renderCarName.js";
import {
  $,
  getAttempts,
  getCarContainer,
  getCarNames,
} from "./../utils/dom.js";

function addRacingEvent({ target }) {
  console.log(target);
  let carNames = getCarNames();
  let retryNumber = getAttempts();
  console.log(carNames, retryNumber);
}

function checkEmpty(input) {
  if (input.includes("")) {
    alert("공백을 입력하지 마세요");
    return false;
  }
  return true;
}
function checkInputLength(input) {
  input = input.filter((e) => {
    return e.length > 5;
  });
  console.log(input);
  if (input.length !== 0) {
    alert("차 이름은 5글자를 넘을수가 없습니다.");
    return false;
  }
  return true;
}

function checkCarName() {
  let names = getCarNames();
  console.log(names);
  if (checkEmpty(names) && checkInputLength(names)) {
    return true;
  }
  return false;
}

function addPutCarNameEvent({ target }) {
  if (checkCarName()) {
    renderCar();
  }
}
export function initEvents() {
  let $putCar = $(".put-car-name");
  console.log($putCar);
  let $startBtn = $(".start");
  $putCar.addEventListener("click", addPutCarNameEvent);
  $startBtn.addEventListener("click", addRacingEvent);
}
