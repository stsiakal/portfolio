import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js";

// Connects to data-controller="sound"
export default class extends Controller {
  connect() {
  }

  play() {
    if (window.secondDaydone === true) {
    document.getElementById("fire-audio").play();
    document.getElementById("buttons").style.display = "";
    new Typed('.typed', {
      strings: [
        "There buttons appear. You feel someone staring at you , almost as this decision is really important. Choose wisely.^3000",
      ],
      typeSpeed: 30,
      loop: false,
      fadeOut: true,
      showCursor: false,
    })}
  };
}
