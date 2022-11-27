import { Controller } from "@hotwired/stimulus";
import { TYPED } from './typed_js_controller';
// Connects to data-controller="text-speed"
export default class extends Controller {
  skip() {
    if (TYPED !== null){
      TYPED.typeSpeed = 1;
      setTimeout(() => {
        TYPED.typeSpeed = 30;
      }, 1500);
    }
  }
}
