const revElement = document.querySelectorAll("[data-reveal]");

const scrollRev = function () {
  for (let i = 0, len = revElement.length; i < len; i++) {
    const isElementOnScreen =
      revElement[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementOnScreen) {
      revElement[i].classList.add("revealed");
    } else {
      revElement[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollRev);
window.addEventListener("load", scrollRev);
