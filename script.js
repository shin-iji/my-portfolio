"use strict";
console.log("Yeah");

let moreBtn = document.getElementById("more-btn");
let moreProject = document.querySelectorAll(".more");

let topBtn = document.getElementById("top-btn");

init();

function init() {
  topUp();
  more();
  window.onscroll = () => scroll();
}

function more() {
  moreBtn.addEventListener(
    "click",
    function () {
      for (let i = 0; i < moreProject.length; i++) {
        if (moreProject[i].classList.contains("hidden")) {
          moreProject[i].classList.remove("hidden");
          setTimeout(function () {
            moreProject[i].classList.remove("visuallyhidden");
          }, 50);
          moreBtn.innerHTML = `<i class="fas fa-angle-double-up"></i> LESS <i class="fas fa-angle-double-up"></i>`;
        } else {
          moreProject[i].classList.add("visuallyhidden");
          moreProject[i].addEventListener(
            "transitionend",
            function (e) {
              moreProject[i].classList.add("hidden");
            },
            {
              capture: false,
              once: true,
              passive: false,
            }
          );
          moreBtn.innerHTML = `<i class="fas fa-angle-double-down"></i> MORE <i class="fas fa-angle-double-down"></i>`;
        }
      }
    },
    false
  );
}

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topUp() {
  topBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
