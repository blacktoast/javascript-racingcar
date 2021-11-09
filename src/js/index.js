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
