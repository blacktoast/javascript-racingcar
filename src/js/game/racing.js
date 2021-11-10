import { renderForwardCar } from "../render/renderUtils.js";
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
    console.log("radom");
    if (random > 3) {
      e.state += 1;
    }
  });
}

function startRace(attemptsNumber) {
  let players = state.cars;
  let count = 0;
  let time = setTimeout(
    setTimeout(function step() {
      console.log(count);
      if (count !== Number(attemptsNumber)) {
        goOneStep(players);
        renderForwardCar(players);
        clearTimeout(time);
        time = setTimeout(step, 1000); // (*)
      }
      count++;
    }, 1000)
  );
  console.log(state);
}

export function startRacing(attempts) {
  initRacing();
  startRace(attempts);
}
