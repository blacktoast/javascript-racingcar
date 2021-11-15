import { clearCarState } from "../state.js";
import { $ } from "../utils/dom.js";

export function addResetEvent() {
  console.log("object");
  $(".car-names").value = "";
  $(".attempts").value = "";
  $(".car-container").innerHTML = "";
  clearCarState();
}
