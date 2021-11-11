import { state } from "../state.js";
import { getCarContainer, getCarNames } from "../utils/dom.js";
function carPlayerHtml(carNames) {
  return carNames
    .map((e) => {
      return `<div class="mr-2">
                <div class="car-player" data-car-id=${e}>${e}
                </div>
                <div class="racing-container"></div>
              </div>
    `;
    })
    .join("");
}

export function renderCar() {
  let $renderContainer = getCarContainer();
  let carNames = getCarNames();
  let template = carPlayerHtml(carNames);
  $renderContainer.innerHTML = template;
}
