import { winnerCelebrate } from "../render/animation.js";
import { hideLoading, renderForwardCar } from "../render/renderRacing.js";
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

function selectWinner() {
  let players = state.cars;
  let states = players.map((e) => {
    return e.state;
  });
  let max = Math.max(...states);
  let winner = [];
  players.map((e) => {
    if (e.state === max) {
      winner.push(e.name);
    }
  });
  return winner.join(",");
}

function winner() {
  alert("winner!!!");
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
      if (count === Number(attemptsNumber)) {
        let winner2 = selectWinner();
        document.querySelector(
          ".winner"
        ).innerHTML = `🏆 최종 우승자: ${winner2} 🏆`;
        hideLoading();
        setTimeout(winnerCelebrate, 1000);
        setTimeout(winner, 2000);
      }
      count++;
    }, 1000)
  );
}

export function startRacing(attempts) {
  initRacing();
  startRace(attempts);
}
