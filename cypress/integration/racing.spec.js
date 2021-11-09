/**
 *  [] 차 이름 입력시 해당차 네임 출력
 *
 */

describe("간단 계산기 앱 테스트", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://172.20.128.1:5500");
  });

  it("차 이름 입력 테스트", () => {
    cy.get(".car-names").type("a,b,    c,d");
    cy.get(".put-car-name").click();
    cy.get(".car-container").children("div.car-player")[5];
    console.log("object");
  });
});
