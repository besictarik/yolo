const scroller = document.querySelector(".hero__scroller");
const firstSection = document.querySelector("#section--first");
const secondSection = document.querySelector("#section--second");

const scrollToSection = () => {
    firstSection.scrollIntoView({
        behavior: "smooth",
    });
};

const handleMargin = () => {
    const width = firstSection.offsetWidth;
    const clientWidth = document.documentElement.clientWidth;

    if (clientWidth > 1920) return;

    const properMargin = (clientWidth - width) / 2;
    secondSection.style.marginLeft = `${properMargin}px`;
    console.log(width, clientWidth);
    console.log(secondSection.style.marginLeft);
};

scroller.addEventListener("click", scrollToSection);

window.addEventListener("load", handleMargin);
window.addEventListener("resize", handleMargin);
