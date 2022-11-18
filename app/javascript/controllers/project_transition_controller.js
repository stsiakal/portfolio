import { Controller } from "@hotwired/stimulus";
const IMAGE_CLASS = document.querySelector(".project-black-card");
// Connects to data-controller="project-transition"
export default class extends Controller {
  loop() {
    IMAGE_CLASS.classList.add("bottom");
    IMAGE_CLASS.addEventListener("transitionend", loopTransition);

    function loopTransition(e) {
      if (e.propertyName == "background-position-y") {
        if (IMAGE_CLASS.className == "project-black-card bottom") {
          IMAGE_CLASS.className = "project-black-card top";
        } else {
          IMAGE_CLASS.className = "project-black-card bottom";
        }
      }
    }
  }
}
