export function hideView($element) {
  $element.style.display = "none";
}

export function showView($element) {
  $element.style.display = "block";
}

export function forwardHtml() {
  return;
}

export function addLoadingHtml() {
  return `<div class="d-flex justify-center mt-3">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>`;
}

export function renderForwardCar() {
  
}
