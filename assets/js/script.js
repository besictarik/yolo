const scroller = document.querySelector(".scroller");
const firstSection = document.querySelector("#firstSection");

const scrollToSection = () => {
    firstSection.scrollIntoView({
        behavior: "smooth",
    });
};

scroller.addEventListener("click", scrollToSection);
