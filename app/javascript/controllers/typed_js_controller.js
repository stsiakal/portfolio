import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";
let FIRST_DAY_DONE = false;
let SECOND_DAY_DONE = false;
// Connects to data-controller="typed-js"
export default class extends Controller {
  firstDay() {
    new Typed(this.element, {
      strings: [
        "You vaguely remember clicking this weird portfolio link.^2000",
        "You find yourself sitting next to a bonfire.^2000",
        "You can't feel any warmth radiating from it.^1000(Hint: click it)",
      ],
      startDelay: 2000,
      typeSpeed: 30,
      loop: false,
      showCursor: false,
      fadeOut: true,
      onBegin: () => {
        fireFadeIn();
      },
      onComplete: () => {
        firstDayDone();
      },
    });

    function firstDayDone() {
      FIRST_DAY_DONE = true;
      return FIRST_DAY_DONE;
    }
    function fireFadeIn() {
      document.getElementById("fireplace").classList.add("fadeIn");
    }
  }

  playSound() {
    if (FIRST_DAY_DONE === true) {
      document.getElementById("fire-audio").play();
      document.getElementById("choices1").style.display = "";
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "Three buttons appear.^2000",
          "This feels important.^2000",
          "Choose wisely.^2000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          secondDayDone();
        },
      });
    }

    function secondDayDone() {
      SECOND_DAY_DONE = true;
      return SECOND_DAY_DONE;
    }
  }

  progressStory(e) {
    if (SECOND_DAY_DONE === true) {
      if (e.currentTarget.id === "investigation") {
        document.getElementById("choices1").style.display = "none";
        document.querySelector(".skeleton").classList.add("fadeIn");
        new Typed("#typed", {
          strings: [
            "placeholder until i figure why it starts from the second one",
            "A skeleton approaches.^2000",
            "He introduces himself and proceeds to inform you about the new carnival in town.^2000",
            "He says you need to sign an agreement to respect the carnival rules.^2000",
            "He seems trustworthy.^2000",
            "What do you do?^2000",
          ],
          typeSpeed: 30,
          loop: false,
          showCursor: false,
          fadeOut: true,
          onStringTyped: (pos) => {
            if (pos === 5) {
              displayChoices();
            }
          },
        });
      } else if (e.currentTarget.id === "perception") {
        document.getElementById("choices1").style.display = "none";
        perceptionRollListener();
        new Typed("#typed", {
          strings: [
            "placeholder until i figure why it starts from the second one",
            "While looking around you find an emerald dice.^2000",
            "May lady luck smile upon you.^2000",
          ],
          typeSpeed: 30,
          loop: false,
          showCursor: false,
          fadeOut: true,
          onBegin: () => {
            fireFadeOut();
            soundFadeOut();
            diceFadeIn();
          },
        });
      }
    }

    if (e.currentTarget.id === "yesButton") {
      propFade();
      fireFadeOut();
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "He tells you how to get to the carnival, he gives you a coin and then he leaves.^2000",
          "You make your way towards the carvinal.^2000",
          "As you enter, you see all sorts of fun games and you cant wait to try them all.^2000",
          "But that's not the reason you came here today.^2000",
          "Why did you come here?^2000",
        ],
        typeSpeed: 30,
        loop: false,
        onStringTyped: (pos) => {
          if (pos === 1) {
            document.body.setAttribute("id", "carnival");
          }
        },
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace("http://localhost:3000/about");
        },
      });
    } else if (e.currentTarget.id === "noButton") {
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "Im sad to see you leave so soon.^2000",
          "Hope you change your mind next time.^2000",
          "Good luck with your search.^2000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onStringTyped: (pos) => {
          if (pos === 1) {
            propFade();
          }
        },
        onComplete: () => {
          window.location.replace("http://localhost:3000/about");
        },
      });
    }

    function perceptionRollListener() {
      const targetNode = document.getElementById("die1");
      const config = {
        attributes: true,
      };
      const callback = (mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "data-face") {
            setTimeout(diceFadeOut, 4000);
            let d20 = targetNode.getAttribute("data-face");
            if (d20 > 15) {
              criticalRoll();
            } else if (d20 > 2) {
              averageRoll();
            } else {
              poorRoll();
            }
          }
        });
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }

    function criticalRoll() {
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "You realize that you got immersed unwillingly in my attempt to a create a cool dice and a simple story.^2000",
          "Thank you for the playtest and bearing with it. (: ^2000",
          "Until we meet again. (release of my DnD project soonTM)",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace("http://localhost:3000/about");
        },
      });
    }

    function averageRoll() {
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "While looking around some more your accidentally stepped on a bear trap.^2000",
          "Why would there be a bear trap here?^2000",
          `You suffer ${Math.floor(Math.random() * 20)} points of damage^2000`,
          "You died.^2000 Better Luck next time.^2000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace("http://localhost:3000/about");
        },
      });
    }

    function poorRoll() {
      new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "Everything is perfectly normal.^2000",
          "Nothing suspicious at all.^2000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace("http://localhost:3000");
        },
      });
    }

    function displayChoices() {
      document.getElementById("choices2").style.display = "";
    }

    function diceFadeIn() {
      document.getElementById("die1").classList.add("fadeIn");
      document.getElementById("diceButton").classList.add("fadeIn");
    }

    function diceFadeOut() {
      document.getElementById("die1").classList.remove("fadeIn");
      document.getElementById("diceButton").classList.remove("fadeIn");
      document.getElementById("die1").classList.add("fadeOut");
    }

    function soundFadeOut() {
      const sound = document.getElementById("fire-audio");
      const fadeAudio = setInterval(() => {
        if (sound.currentTime <= sound.duration && sound.volume !== 0) {
          sound.volume -= 0.1;
        }
        if (sound.volume < 0.003) {
          clearInterval(fadeAudio);
        }
      }, 400);
    }

    function propFade() {
      document.getElementById("choices2").style.display = "none";
      document.querySelector(".skeleton").classList.remove("fadeOut");
      document.querySelector(".skeleton").classList.add("fadeOut");
    }

    function fireFadeOut() {
      document.getElementById("fireplace").classList.remove("fadeIn");
      document.getElementById("fireplace").classList.add("fadeOut");
    }
  }
}
