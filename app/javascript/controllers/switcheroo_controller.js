import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="switcheroo"
export default class extends Controller {
  transform() {
    if (this.element.className === "") {
      this.element.classList.add("switched");
      document.getElementById("first-torch").style.display = "none";
      document.getElementById("second-torch").style.display = "none";
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-black");
      document.getElementById("line1").className = "nav-line black-line";
      document.getElementById("line2").className = "nav-line black-line";
      document.querySelector(".container-all").style.display = "none";
    } else {
      this.element.classList.remove("switched");
      document.getElementById("first-torch").style.display = "";
      document.getElementById("second-torch").style.display = "";
      document.body.classList.add("bg-black");
      document.body.classList.remove("bg-white");
      document.getElementById("line1").className = "nav-line white-line";
      document.getElementById("line2").className = "nav-line white-line";
      document.querySelector(".container-all").style.display = "";
    }
  }
}
