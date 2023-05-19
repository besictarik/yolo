const scroller = document.querySelector(".scroller");
const firstSection = document.querySelector("#section--first");

const scrollToSection = () => {
    firstSection.scrollIntoView({
        behavior: "smooth",
    });
};

scroller.addEventListener("click", scrollToSection);
