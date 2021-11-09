export const $ = (e) => document.querySelector(e);

export function getCarNames() {
  let $carNames = $(".car-names");
  return $carNames.value;
}

export function getAttempts() {
  let $getNumber = $(".attempts");
  return $getNumber.value;
}
