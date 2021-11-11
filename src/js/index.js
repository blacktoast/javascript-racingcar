/**
 *  [ ] 자동차 입력 버튼 누르면  콤마로 구분하여 입력 받기
 *    [] 자동차 이름 가져오기
 *    [] 총횟수 가져오기
 * [] 총 획수 입력받아서 총루프 돌리기
 * [] 각각의 차량에 대해서 램덤으로 숫자를 부여해서 전진하는 확인하기
 *
 */

import { initEvents } from "./controller/initEvents.js";
import { getCarNames } from "./utils/dom.js";

function App() {
  getCarNames();
  initEvents();
}
new App();

/********
 *gsap.registerPlugin(Physics2DPlugin);

document.querySelectorAll(".button").forEach((button) => {
  const bounding = button.getBoundingClientRect();

  button.addEventListener("mousemove", (e) => {
    let dy = (e.clientY - bounding.top - bounding.height / 2) / -1;
    let dx = (e.clientX - bounding.left - bounding.width / 2) / 10;

    dy = dy > 10 ? 10 : dy < -10 ? -10 : dy;
    dx = dx > 4 ? 4 : dx < -4 ? -4 : dx;

    button.style.setProperty("--rx", dy);
    button.style.setProperty("--ry", dx);
  });

  button.addEventListener("click", (e) => {
    button.classList.add("success");
    gsap.to(button, {
      "--icon-x": -3,
      "--icon-y": 3,
      "--z-before": 0,
      duration: 0.2,
      onComplete() {
        particles(button.querySelector(".emitter"), 100, -4, 6, -80, -50);
        gsap.to(button, {
          "--icon-x": 0,
          "--icon-y": 0,
          "--z-before": -6,
          duration: 1,
          ease: "elastic.out(1, .5)",
          onComplete() {
            button.classList.remove("success");
          },
        });
      },
    });
  });
});

function particles(parent, quantity, x, y, minAngle, maxAngle) {
  let colors = ["#FFFF04", "#EA4C89", "#892AB8", "#4AF2FD"];
  for (let i = quantity - 1; i >= 0; i--) {
    let angle = gsap.utils.random(minAngle, maxAngle),
      velocity = gsap.utils.random(70, 140),
      dot = document.createElement("div");
    dot.style.setProperty("--b", colors[Math.floor(gsap.utils.random(0, 4))]);
    parent.appendChild(dot);
    gsap.set(dot, {
      opacity: 0,
      x: x,
      y: y,
      scale: gsap.utils.random(0.4, 0.7),
    });
    gsap
      .timeline({
        onComplete() {
          dot.remove();
        },
      })
      .to(
        dot,
        {
          duration: 0.05,
          opacity: 1,
        },
        0
      )
      .to(
        dot,
        {
          duration: 1.8,
          rotationX: `-=${gsap.utils.random(720, 1440)}`,
          rotationZ: `+=${gsap.utils.random(720, 1440)}`,
          physics2D: {
            angle: angle,
            velocity: velocity,
            gravity: 120,
          },
        },
        0
      )
      .to(
        dot,
        {
          duration: 1,
          opacity: 0,
        },
        0.8
      );
  }
}

 */
