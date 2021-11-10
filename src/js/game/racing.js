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
}

function initRacing() {
  let players = getCarNames();
  initCar(players);
  generateRandom();
}

function generateRandom() {
  let random = Math.random();
  random = Math.floor(random * 10);
  return random;
}

function goOneStep(players) {
  players.map((e) => {
    let random = generateRandom();
    console.log(random);
    if (random > 3) {
      e.state += 1;
    }
  });
}

function startRace(attempts) {
  let players = state.cars;
  console.log(attempts);
  for (let index = 0; index < attempts; index++) {
    goOneStep(players);
    console.log(state.cars);
  }
  console.log(state);
}

export function startRacing(attempts) {
  initRacing();
  startRace(attempts);
}
