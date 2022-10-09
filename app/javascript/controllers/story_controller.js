import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="story"
export default class extends Controller {
  connect() {}

  progress(event) {
    let story = document.getElementById("buttons");
    if (event.currentTarget.id === "investigation") {
      new Typed(".typed", {
        strings: [""],
        typeSpeed: 30,
        loop: false,
        fadeOut: true,
        showCursor: false,
      });
    } else if (event.currentTarget.id === "perception") {
      story.innerHTML = "mple";
    } else if (event.currentTarget.id === "escape") {
      story.innerHTML = "prasino";
    }
  }
}
