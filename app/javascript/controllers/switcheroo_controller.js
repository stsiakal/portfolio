import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="switcheroo"
export default class extends Controller {
  transform() {
    if (this.element.className === "") {
      this.element.classList.add("switched");
      document.querySelector(".switch-wrap").style.display = "none";
      document.querySelector(".container-all").classList.add("fadeOut");
      document.querySelector(".nav-left").classList.add("fadeOut");
      setTimeout(returnHome, 3000);

      function returnHome() {
        window.location.replace("https://stsiakal-portfolio.herokuapp.com/");
      }
    } else {
      this.element.classList.remove("switched");
    }
  }
}
