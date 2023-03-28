const menuBtn = document.getElementById("menuBtn"),
  navMenu = document.getElementById("nav"),
  close = document.getElementById("close"),
  item = document.querySelectorAll(".link-item"),
  fadeOut = document.querySelector(".fade-out-effect"),
  mobileHeader = document.getElementById("mobileHeader"),
  desktopNavigations = document.querySelectorAll(".link-items"),
  opcity = document.querySelector(".opcity"),
  styleSwitcherToggler = document.querySelector(".style-switcher-toggler"),
  colors = document.querySelectorAll(".color-1");
dayNight = document.querySelector(".day-night");

window.addEventListener("scroll", () => {
  mobileHeader.classList.toggle("sticky", window.scrollY > 0);
});

// desktop navigation
(() => {
  desktopNavigations.forEach((Element) => {
    Element.addEventListener("click", (e) => {
      desktopNavigations.forEach((el) => {
        el.classList.remove("active");
      });
      Element.classList.add("active");
    });
  });
})();
// mobile navigation
(() => {
  menuBtn.addEventListener("click", (e) => {
    navMenu.classList.add("open");
    fadeOut.classList.add("active");
    opcity.classList.add("active");
  });
  close.addEventListener("click", () => {
    navMenu.classList.remove("open");
    fadeOut.classList.remove("active");
    opcity.classList.remove("active");
  });
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("link-item")) {
      navMenu.classList.remove("open");
      fadeOut.classList.remove("active");
    }
  });
  item.forEach((MobileNavs) => {
    MobileNavs.addEventListener("click", (e) => {
      item.forEach((mNav) => {
        mNav.classList.remove(
          "outer-shadow",
          "hover-in-shadow",
          "inner-shadow",
          "active"
        );
        mNav.classList.add("outer-shadow", "hover-in-shadow");
      });
      e.target.classList.add("active", "inner-shadow");
    });
  });
})();

// color
(() => {
  styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open");
    }
  });

  colors.forEach((element) => {
    element.addEventListener("click", (e) => {
      let color = element.style.color;
      document.querySelector(":root").style.setProperty("--skin-color", color);
    });
  });
})();

// body color
(() => {
  dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  });
  window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
      dayNight.querySelector("i").classList.add("fa-sun");
    } else {
      dayNight.querySelector("i").classList.add("fa-moon");
    }
  });
})();
