//Scroll Animation
const scroller = document.querySelector(".hero__scroller");
const firstSection = document.querySelector("#section--first");

//Margin handling
const secondSection = document.querySelector("#section--second");
const thirdSection = document.querySelector("#section--third");
const scrollContainer = document.querySelector(".reviews__posts-wrapper");

//Slider
const leftArrow = document.querySelector("#slider-arrow--left");
const rightArrow = document.querySelector("#slider-arrow--right");

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
    thirdSection.style.marginRight = `${properMargin}px`;
};

const handlePostsScroll = (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
};

let isFullyRight = false;

const scrollSlider = (direction) => {
    const snap = scrollContainer.children[0].offsetWidth;
    const containerWidth = scrollContainer.offsetWidth;
    const extraSnap = containerWidth % snap;

    console.log(containerWidth);
    if (direction == "right") {
        scrollContainer.scrollBy({ left: snap, top: 0, behavior: "smooth" });
    } else {
        scrollContainer.scrollBy({ left: -extraSnap, top: 0, behavior: "smooth" });
    }
};

scroller.addEventListener("click", scrollToSection);
// scrollContainer.addEventListener("wheel", (e) => handlePostsScroll(e));
window.addEventListener("load", handleMargin);
window.addEventListener("resize", handleMargin);
leftArrow.addEventListener("click", () => scrollSlider("left"));
rightArrow.addEventListener("click", () => scrollSlider("right"));
