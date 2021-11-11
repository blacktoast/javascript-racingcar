import { getCarPlayerByClass } from "../utils/dom.js";

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
  let template = players.map((e, index) => {
    let tmp = "";
    for (let i = 0; i < e.state; i++) {}
    tmp += forwardHtml();
    let $carPlayer = getCarPlayerByClass();
    $carPlayer[index].insertAdjacentHTML("afterbegin", tmp);
    console.log($carPlayer[index]);
  });
}
