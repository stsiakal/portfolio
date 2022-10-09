import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";
let SECONDDAYDONE = false;
// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {}

  firstDay() {
    new Typed(this.element, {
      strings: [
        "You find yourself sitting next to a bonfire. You dont know how you got here. You vaguely remember clicking this weird porfolio link...^3000",
        "You can see the bonfire yet you cant hear the sound of it. One would think that you might have to click it.^3000",
      ],
      typeSpeed: 30,
      loop: false,
      fadeOut: true,
      showCursor: false,
      onBegin: () => {
        fade();
      },
      onComplete: () => {
        done();
      },
    });

    function done() {
      SECONDDAYDONE = true;
      return SECONDDAYDONE;
    }
    function fade() {
      let fade = document.getElementById("fade");
      fade.classList.add("fadeIn");
    }
  }

  play() {
    if (SECONDDAYDONE === true) {
      document.getElementById("fire-audio").play();
      document.getElementById("buttons").style.display = "";
      new Typed(".typed", {
        strings: [
          "There buttons appear. You feel someone staring at you , almost as this decision is really important. Choose wisely.^3000",
        ],
        typeSpeed: 30,
        loop: false,
        fadeOut: true,
        showCursor: false,
      });
    }
  }
}
