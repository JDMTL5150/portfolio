document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card-rel");
    const oCards = document.querySelectorAll(".card-o");
    const leftRel = document.getElementById("leftBtn-rel");
    const rightRel = document.getElementById("rightBtn-rel");
    const leftO = document.getElementById("leftBtn-o");
    const rightO = document.getElementById("rightBtn-o");
    const leftM1 = document.getElementById("leftBtn-m1");
    const rightM1 = document.getElementById("rightBtn-m1");
    const leftM2 = document.getElementById("leftBtn-m2");
    const rightM2 = document.getElementById("rightBtn-m2");

    const dotsRel = document.querySelectorAll(".dot-rel");
    const dotsO = document.querySelectorAll(".dot-o");

    let countR = 0;
    let countO = 0;

    dotsRel[countR].classList.add("high");
    dotsO[countO].classList.add("high");

    oCards[countO].classList.add("show");
    cards[countR].classList.add("show");

    function relNext() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR + 1 + cards.length) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    }

    function relPrev() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR - 1 + cards.length) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    }

    function Onext() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO + 1 + oCards.length) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    }

    function Oprev() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO - 1 + oCards.length) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    }

    rightRel.addEventListener("click", () => relNext());

    leftRel.addEventListener("click", () => relPrev());

    rightO.addEventListener("click", () => Onext());

    leftO.addEventListener("click", () => Oprev());

    leftM1.addEventListener("click",() => relPrev());

    rightM1.addEventListener("click",() => relNext());

    leftM2.addEventListener("click",() => Oprev());

    rightM2.addEventListener("click",() => Onext());
});
