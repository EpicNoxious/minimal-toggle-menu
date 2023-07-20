const nav = document.querySelector("nav");
const toggleButton = document.querySelector("#toggleButton");
const navMenu = document.querySelector(".menu");
const toggleButtonLine1 = document.querySelector("#toggleButtonLine1");
const toggleButtonLine2 = document.querySelector("#toggleButtonLine2");

console.log(toggleButtonLine1);
let isToggled = false;
toggleButton.addEventListener("click", function () {
  // open the nav
  if (isToggled === false) {
    isToggled = true;
    gsap.to(nav, {
      duration: 0.3,
      width: "25rem",
      height: "40rem",
      ease: "power2.inOut",
      borderRadius: "3rem",
    });
    gsap.to("nav button", {
      duration: 0.2,
      top: "1vh",
      right: "1vh",
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine1, {
      duration: 0.2,
      rotate: 45,
      top: "50%",
      left: "50%",
      rotate: 45,
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine2, {
      duration: 0.2,
      top: "50%",
      left: "50%",
      rotate: -45,
      ease: "power2.inOut",
    });
    gsap.to(navMenu, {
      duration: 0.4,
      visibility: "visible",
      opacity: 1,
      ease: "power2.inOut",
    });

    // close the nav
  } else {
    isToggled = false;
    gsap.to(nav, {
      duration: 0.3,
      width: "5rem",
      height: "5rem",
      ease: "power2.inOut",
      borderRadius: "5rem",
    });
    gsap.to("nav button", {
      duration: 0.4,
      top: "0vh",
      right: "0vh",
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine1, {
      duration: 0.2,
      rotate: 0,
      top: "42.5%",
      left: "50%",
      rotate: 0,
      ease: "power2.inOut",
    });
    gsap.to(toggleButtonLine2, {
      duration: 0.2,
      rotate: 0,
      top: "57.5%",
      left: "50%",
      rotate: 0,
      ease: "power2.inOut",
    });
    gsap.to(navMenu, {
      duration: 0.2,
      visibility: "hidden",
      opacity: 0,
      ease: "power2.inOut",
    });
  }
});
