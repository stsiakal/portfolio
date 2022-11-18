import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="animate"
export default class extends Controller {
  static targets = ["button"];

  rollDice() {
    let sides = 20;
    let initialSide = 1;
    let lastFace;
    let timeoutId;
    const transitionDuration = 500;
    const animationDuration = 3000;
    let die = document.getElementById("die1");
    die.classList.add("rolling");
    timeoutId = setTimeout(function () {
      die.classList.remove("rolling");
      rollTo(randomFace());
    }, animationDuration);
    return false;

    function randomFace() {
      let face = Math.floor(Math.random() * sides) + initialSide;
      lastFace = face == lastFace ? randomFace() : face;
      return face;
    }

    function rollTo(face) {
      clearTimeout(timeoutId);
      die.setAttribute("data-face", face);
    }
  }
}
