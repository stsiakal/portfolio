import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="switcheroo"
export default class extends Controller {
  transform() {
    if (this.element.className === "") {
      this.element.classList.add("switched");
    } else {
      this.element.classList.remove("switched");
      document.getElementById("first-torch").style.display = "";
      document.getElementById("second-torch").style.display = "";
      document.querySelector(".container-all").style.display = "";
    }
  }
}
