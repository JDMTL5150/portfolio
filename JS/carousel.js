document.addEventListener("DOMContentLoaded", () => {

    const cards   = document.querySelectorAll(".card-rel");
    const oCards  = document.querySelectorAll(".card-o");

    const leftRel  = document.getElementById("leftBtn-rel");
    const rightRel = document.getElementById("rightBtn-rel");
    const leftO    = document.getElementById("leftBtn-o");
    const rightO   = document.getElementById("rightBtn-o");

    const dotsRel = document.querySelectorAll(".dot-rel");
    const dotsO   = document.querySelectorAll(".dot-o");

    const relContainer = document.querySelector(".carousel-rel");
    const oContainer   = document.querySelector(".carousel-o");

    let countR = 0;
    let countO = 0;

    // Initial state
    cards[countR].classList.add("show");
    dotsRel[countR].classList.add("high");

    oCards[countO].classList.add("show");
    dotsO[countO].classList.add("high");

    // ---------- NAV FUNCTIONS ----------
    function nextRel() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR + 1) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    }

    function prevRel() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR - 1 + cards.length) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    }

    function nextO() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO + 1) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    }

    function prevO() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO - 1 + oCards.length) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    }

    // ---------- BUTTON CONTROLS ----------
    rightRel.addEventListener("click", nextRel);
    leftRel.addEventListener("click", prevRel);

    rightO.addEventListener("click", nextO);
    leftO.addEventListener("click", prevO);

    // ---------- TOUCH SWIPE (PHONE) ----------
    function enableSwipe(container, onNext, onPrev) {
        let startX = 0;
        let endX = 0;
        const threshold = 40; // swipe distance in px

        container.addEventListener("touchstart", e => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        container.addEventListener("touchend", e => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > threshold) {
                diff > 0 ? onNext() : onPrev();
            }
        });
    }

    enableSwipe(relContainer, nextRel, prevRel);
    enableSwipe(oContainer, nextO, prevO);
});