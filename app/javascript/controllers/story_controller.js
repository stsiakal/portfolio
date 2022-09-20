import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="story"
export default class extends Controller {
  connect() {}

  progress(event) {
    let story = document.getElementById("story");
    if (event.currentTarget.id === "fight") {
      story.innerHTML = "kokkino";
    } else if (event.currentTarget.id === "run") {
      story.innerHTML = "mple";
    } else if (event.currentTarget.id === "cry") {
      story.innerHTML = "prasino";
    }
  }
}
