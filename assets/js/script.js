const scroller = document.querySelector(".hero__scroller");
const firstSection = document.querySelector("#section--first");
const secondSection = document.querySelector("#section--second");
const thirdSection = document.querySelector("#section--third");
const scrollContainer = document.querySelector(".reviews__posts-wrapper");

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
    console.log(width, clientWidth);
    console.log(secondSection.style.marginLeft);
};

const handlePostsScroll = (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
};

scroller.addEventListener("click", scrollToSection);
scrollContainer.addEventListener("wheel", (e) => handlePostsScroll(e));
window.addEventListener("load", handleMargin);
window.addEventListener("resize", handleMargin);
