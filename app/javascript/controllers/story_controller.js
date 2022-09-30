import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="story"
export default class extends Controller {
  connect() {}

  progress(event) {
    let story = document.getElementById("buttons");
    if (event.currentTarget.id === "invastigation") {
      story.innerHTML = "kokkino";
    } else if (event.currentTarget.id === "perception") {
      story.innerHTML = "mple";
    } else if (event.currentTarget.id === "escape") {
      story.innerHTML = "prasino";
    }
  }
}
