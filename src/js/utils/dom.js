export const $ = (e) => document.querySelector(e);

export function getCarNames() {
  let $carNames = $(".car-names");
  let result = $carNames.value.split(",");
  result = result.map((e) => {
    return e.trim();
  });
  return result;
}

export function getAttempts() {
  let $getNumber = $(".attempts");
  return $getNumber.value;
}

export function getCarPlayerByClass() {
  return $(".car-player");
}

export function getCarContainer() {
  return $(".car-container");
}
