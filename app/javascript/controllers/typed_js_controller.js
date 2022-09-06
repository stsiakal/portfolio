import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {}

  firstDay() {
    new Typed(this.element, {
      strings: [
        "You find yourself sitting next to a bonfire. You dont know how you got here. You remember clicking this weird porfolio link...^3000",
        "You can see the bonfire yet you cant hear the sound of it. One would think that you might have to click it.^4000",
        'Suddently three buttons appear before you. "sigh" You just wanted to see a portfolio page, not waste your time like this.',
        "Choose carefully for nothing is like it seems to be.",
      ],
      typeSpeed: 60,
      loop: false,
      fadeOut: true,
    });
  }
}
