import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dice20"
export default class extends Controller {
  rollDice(event) {
    event.preventDefault()

    let die1 = document.getElementById("die1");
    let status = document.getElementById("status");
    let d1 = 20;
    die1.innerHTML = d1;
    status.innerHTML = "What a roll! you scored a critical."
  }
}
