import { state } from "../state.js";
import { getCarNames } from "./../utils/dom.js";

/**
 *  car 상태를 전역으로 다룰까?
 *
 */
class Car {
  constructor(name) {
    this.name = name;
    this.state = 0;
  }
  go() {
    this.state += 1;
  }
}

function initCar(input) {
  let players = input;
  state.cars = players.map((e) => {
    return new Car(e);
  });
  console.log(state);
}

function initRacing() {
  let players = getCarNames();
  initCar(players);
}

export function startRacing() {
  initRacing();
  console.log("object");
}
