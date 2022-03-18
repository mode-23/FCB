let header = document.getElementById("header");
let header2 = document.getElementById("header2");
let logo2 = document.querySelector(".logo2");

window.addEventListener("scroll", () => {
  if (scrollY > 138) {
    header.classList.add("active");
    header2.classList.add("active");
    logo2.classList.add("active");
  } else {
    header.classList.remove("active");
    header2.classList.remove("active");
    logo2.classList.remove("active");
  }
});
let headings = document.querySelectorAll(".holder div");
headings.forEach((head) => {
  head.addEventListener("mouseover", removed);
});
function removed() {
  headings.forEach((head) => {
    head.classList.remove("active");
    head.classList.add("blured");
    this.classList.add("active");
    this.classList.remove("blured");
  });
}
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".links");
let links = document.querySelectorAll(".links li");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
  });
});

// gallery

let switcher = document.querySelectorAll(".gallery-links li");
let imgs = document.querySelectorAll(".gallery-holder .box");

switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImg);
});

function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manageImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

// gallery

let video = document.getElementById("video");
video.addEventListener("mouseenter", () => {
  // video.muted = true;
  video.play();
});
video.addEventListener("mouseleave", () => {
  // video.muted = true;
  video.pause();
});

let availableType = document.getElementById("available-type");
let availableSize = document.getElementById("available-size");

let typeLi = document.querySelectorAll(".inner-ul li");
typeLi.forEach((li) => {
  li.addEventListener("click", removeActivetwo);
});
function removeActivetwo() {
  typeLi.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    availableType.innerHTML =
      '<i class="fa-solid fa-circle-check"></i> Available immediately';
  });
}

let typeLi2 = document.querySelectorAll(".inner-ul2 li");
typeLi2.forEach((li) => {
  li.addEventListener("click", removeActivethree);
});
function removeActivethree() {
  typeLi2.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    availableSize.innerHTML =
      '<i class="fa-solid fa-circle-check"></i> Available immediately';
  });
}
let bigImg = document.getElementById("big-img");

let home = document.getElementById("home");
let away = document.getElementById("away");
let ucl = document.getElementById("ucl");
let gk = document.getElementById("gk");
home.addEventListener("click", () => {
  bigImg.src = "images/home.png";
});
away.addEventListener("click", () => {
  bigImg.src = "images/away.png";
});
ucl.addEventListener("click", () => {
  bigImg.src = "images/ucl.png";
});
gk.addEventListener("click", () => {
  bigImg.src = "images/gk.png";
});

let addTocart = document.getElementById("add-cart");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  addTocart.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Added to cart, go check it out!';
  btn.classList.add("added");
  setTimeout(() => {
    addTocart.innerHTML = "";
    btn.classList.remove("added");
  }, 2000);
});

let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

let piece = document.querySelectorAll(".holder .piece");
piece.forEach((pie) => {
  pie.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
    // cursor2.classList.add("hover");
  });
});
piece.forEach((pie) => {
  pie.addEventListener("mouseout", () => {
    cursor.classList.remove("hover");
    // cursor2.classList.remove("hover");
  });
});

let up = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (scrollY >= 828) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const anchors = document.querySelectorAll(".scroll_to");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    const section = document.getElementById(anchor.getAttribute("data-link"));
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
