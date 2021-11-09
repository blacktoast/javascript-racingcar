import { renderCar } from "../render/renderCarName.js";
import { $, getCarNames } from "../utils/dom.js";

function checkEmpty(input) {
  if (input.includes("")) {
    alert("공백을 입력하지 마세요");
    return false;
  }
  return true;
}

function checkInputLength(input) {
  input = input.filter((e) => e.length > 5);
  console.log(input);
  if (input.length !== 0) {
    alert("차 이름은 5글자를 넘을수가 없습니다.");
    return false;
  }
  return true;
}

export function checkCarName() {
  let names = getCarNames();
  console.log(names);
  if (checkEmpty(names) && checkInputLength(names)) {
    return true;
  }
  $(".car-names").value = "";
  return false;
}

export function addPutCarNameEvent({ target }) {
  if (checkCarName()) {
    renderCar();
  }
}
