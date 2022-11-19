import { Controller } from "@hotwired/stimulus";
// Connects to data-controller="project-transition"
export default class extends Controller {
  loop() {
    const sgmi = document.querySelector(".project-black-card");
    sgmi.classList.add("bottom");
    sgmi.addEventListener("transitionend", loopTransition);
    function loopTransition(e) {
      if (e.propertyName == "background-position-y") {
        if (sgmi.className == "project-black-card bottom") {
          sgmi.className = "project-black-card top";
        } else {
          sgmi.className = "project-black-card bottom";
        }
      }
    }
  }
}
