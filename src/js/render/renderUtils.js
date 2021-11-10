import { getCarPlayerByClass } from "../utils/dom.js";

export function hideView($element) {
  $element.style.display = "none";
}

export function showView($element) {
  $element.style.display = "block";
}

export function forwardHtml() {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
}

export function addLoadingHtml() {
  return `<div class="d-flex justify-center mt-3">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>`;
}

export function renderForwardCar(players) {
  let template = players.map((e) => {
    let tmp = "";
    for (let i = 0; i < e.state; i++) {
      tmp += forwardHtml();
    }
    tmp += addLoadingHtml();
    let $carPlayer = getCarPlayerByClass();
    $carPlayer.dataset.carId[e.name];
    console.log($carPlayer);
  });
}
