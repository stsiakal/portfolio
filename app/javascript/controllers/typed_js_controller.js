import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {}

  firstDay() {
    new Typed(this.element, {
      strings: [
        "You find yourself sitting next to a bonfire. You dont know how you got here. You vaguely remember clicking this weird porfolio link...^3000",
      ],
      typeSpeed: 30,
      loop: false,
      fadeOut: true,
      showCursor: false,
      onBegin: () => {fade()},
      onComplete: () => {secondDay()}
    });

    function fade() {
      let fade = document.getElementById('fade')
      fade.classList.add('fadeIn')
    }

    function secondDay(){
      let secondDayDone = false
      new Typed(".typed", {
        strings: [
          "You can see the bonfire yet you cant hear the sound of it. One would think that you might have to click it.^3000",
        ],
        typeSpeed: 30,
        loop: false,
        fadeOut: true,
        showCursor: false,
        onComplete: () => {secondDayDone = true}
      });
      window.secondDayDone
    }
  }
}
