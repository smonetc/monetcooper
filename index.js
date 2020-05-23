"use strict";

// will make the scroll appear 'smooth'
function pageScroll() {
    window.scrollBy(0,2);
    scrolldelay = setTimeout(pageScroll,10);
}

