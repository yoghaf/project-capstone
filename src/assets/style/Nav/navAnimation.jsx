const buttonOpen = () => {
  const buttonhamburger = document.querySelector("#button-hamburger");
  const shadow = document.querySelector(".shadow-nav");

  buttonhamburger.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "50%";
    shadow.style.display = "block";
  });
};

const buttonClose = () => {
  const closebutton = document.querySelector(".close-button");
  const shadow = document.querySelector(".shadow-nav");

  closebutton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "0";
    shadow.style.display = "none";
  });

  shadow.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-hidden").style.width = "0";
    shadow.style.display = "none";
  });
};

const onSticky = () => {
  const nav = document.querySelector(".nav-desktop");
  const sticky = nav.offsetTop;

  const scrollCallBack = () => {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", scrollCallBack);
};

export { buttonOpen, buttonClose, onSticky };
