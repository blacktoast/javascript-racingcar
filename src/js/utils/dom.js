export const $ = (e) => document.querySelector(e);

export function getCarNames() {
  let $carNames = $(".car-names");
  let result = $carNames.value.split(",");
  return result;
}

export function getAttempts() {
  let $getNumber = $(".attempts");
  return $getNumber.value;
}

export function getCarContainer() {
  return $(".car-container");
}
