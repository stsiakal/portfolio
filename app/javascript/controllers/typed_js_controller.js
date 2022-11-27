import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";
export let TYPED = null;
let FIRST_DAY_DONE = false;
let SECOND_DAY_DONE = false;
export let DICE_READY = false;
// Connects to data-controller="typed-js"
export default class extends Controller {
  firstDay() {
    document.querySelector(".prologue").style.display = "none";
    let x = new Typed("#typed", {
      strings: [
        "You vaguely remember clicking this weird portfolio link.^1000",
        "You find yourself sitting next to a bonfire.^1000",
        "You can't feel any warmth radiating from it.^1000(Hint: click it)",
      ],
      startDelay: 1000,
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
    TYPED = x;
    function firstDayDone() {
      FIRST_DAY_DONE = true;
      return FIRST_DAY_DONE;
    }
    function fireFadeIn() {
      document.getElementById("fireplace").classList.add("fadeIn");
    }
  }

  playSound(e) {
    if (FIRST_DAY_DONE === true) {
      document.getElementById("fire-audio").play();
      document.getElementById("choices1").style.display = "";
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "Two buttons appear.^1000",
          "This feels important.^1000",
          "Choose wisely.^1000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          secondDayDone();
        },
      });
      TYPED = x;
      e.target.removeAttribute("data-controller");
      function secondDayDone() {
        SECOND_DAY_DONE = true;
        return SECOND_DAY_DONE;
      }
    }
  }

  progressStory(e) {
    if (SECOND_DAY_DONE === true) {
      if (e.currentTarget.id === "investigation") {
        document.getElementById("choices1").style.display = "none";
        document.querySelector(".skeleton").classList.add("fadeIn");
        let x = new Typed("#typed", {
          strings: [
            "placeholder until i figure why it starts from the second one",
            "A skeleton approaches.^1000",
            "He introduces himself and proceeds to inform you about the new carnival in town.^1000",
            "He says you need to sign an agreement to respect the carnival rules.^1000",
            "He seems trustworthy.^1000",
            "What do you do?^1000",
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
        TYPED = x;
      } else if (e.currentTarget.id === "perception") {
        document.getElementById("choices1").style.display = "none";
        perceptionRollListener();
        let x = new Typed("#typed", {
          strings: [
            "placeholder until i figure why it starts from the second one",
            "While looking around you find an emerald dice.^1000",
            "May lady luck smile upon you.^1000",
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
          onStringTyped: (pos) => {
            if (pos === 2) {
              diceDone();
            }
          },
        });
        TYPED = x;
      }
    }

    function diceDone() {
      DICE_READY = true;
      return DICE_READY;
    }

    if (e.currentTarget.id === "yesButton") {
      propFade();
      fireFadeOut();
      soundFadeOut();
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "He tells you how to get to the carnival, he gives you a coin and then he leaves.^1000",
          "You make your way towards the carvinal.^1000",
          "As you enter, you see all sorts of fun games and you cant wait to try them all.^1000",
          "But that's not the reason you came here today.^1000",
          "Why did you come here?^1000",
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
          window.location.replace(
            "https://stsiakal-portfolio.herokuapp.com/about"
          );
        },
      });
      TYPED = x;
    } else if (e.currentTarget.id === "noButton") {
      propFade();
      fireFadeOut();
      soundFadeOut();
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "I'm sad to see you leave so soon.^1000",
          "Hope you change your mind next time.^1000",
          "Good luck with your search.^1000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace(
            "https://stsiakal-portfolio.herokuapp.com/about"
          );
        },
      });
      TYPED = x;
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
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "You realize that you got immersed unwillingly in my attempt to a create a cool dice and a simple story.^1000",
          "Thank you for the playtest and bearing with it. (: ^1000",
          "Until we meet again. (release of my DnD project soonTM)",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace(
            "https://stsiakal-portfolio.herokuapp.com/about"
          );
        },
      });
      TYPED = x;
    }

    function averageRoll() {
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "While looking around some more you accidentally stepped on a bear trap.^1000",
          "Why would there be a bear trap here?^1000",
          `You suffer ${Math.floor(Math.random() * 20 + 1)} points of damage^1000`,
          "You died.^1000 Better Luck next time.^1000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace(
            "https://stsiakal-portfolio.herokuapp.com/about"
          );
        },
      });
      TYPED = x;
    }

    function poorRoll() {
      let x = new Typed("#typed", {
        strings: [
          "placeholder until i figure why it starts from the second one",
          "Everything is perfectly normal.^1000",
          "Nothing suspicious at all.^1000",
        ],
        typeSpeed: 30,
        loop: false,
        showCursor: false,
        fadeOut: true,
        onComplete: () => {
          window.location.replace("https://stsiakal-portfolio.herokuapp.com/");
        },
      });
      TYPED = x;
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
