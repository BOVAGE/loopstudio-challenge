const MENUICON = document.querySelector("#menuicon");
const HEADING = document.querySelector("#brandname");
const MENUBAR = document.querySelector("#menubar");


MENUICON.addEventListener("click", () => {
    MENUBAR.classList.toggle("show");
    if (MENUBAR.classList.contains("show")) {
        MENUICON.src="images/icon-close.svg"
        document.body.style.overflow = "hidden";
    }else {
        MENUICON.src="images/icon-hamburger.svg"
        document.body.style.overflow = "scroll";
    }
})

