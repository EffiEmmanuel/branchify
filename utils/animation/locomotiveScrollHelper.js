import LocomotiveScroll from "locomotive-scroll";

// Locomotive scroll
const locomotiveScrollRef = useRef();
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

console.log('HI FROM THE EXTERNAL FILE')