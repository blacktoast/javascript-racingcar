import { getCarPlayerByClass } from "../utils/dom.js";
import { hideView } from "./renderUtils.js";

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

export function hideLoading() {
  let loadingContainer = document.querySelectorAll(".spinner-container");
  console.log("2");
  for (let i = 0; i < loadingContainer.length; i++) {
    hideView(loadingContainer[i]);
    console.log("object");
  }
}

export function renderForwardCar(players) {
  let template = players.map((e, index) => {
    let tmp = "";
    for (let i = 0; i < e.state; i++) {
      tmp += forwardHtml();
    }
    tmp += addLoadingHtml();
    let $carPlayer = document.querySelectorAll(".racing-container");
    $carPlayer[index].innerHTML = tmp;
  });
}
