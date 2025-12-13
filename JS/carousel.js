
// carousel for the related and other projects

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card-rel");
    const oCards = document.querySelectorAll(".card-o");
    const leftRel = document.getElementById("leftBtn-rel");
    const rightRel = document.getElementById("rightBtn-rel");
    const leftO = document.getElementById("leftBtn-o");
    const rightO = document.getElementById("rightBtn-o");

    const dotsO = document.querySelectorAll(".dot-o");

    countR = 0;
    countO = 0;

    const dotsRel = document.querySelectorAll(".dot-rel");
    dotsRel[countR].classList.add("high");
    dotsO[countO].classList.add("high");

    oCards[countO].classList.add("show");
    cards[countR].classList.add("show");

    rightRel.addEventListener("click",function() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR + 1 + cards.length) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    });

    leftRel.addEventListener("click",function() {
        cards[countR].classList.remove("show");
        dotsRel[countR].classList.remove("high");
        countR = (countR - 1 + cards.length) % cards.length;
        cards[countR].classList.add("show");
        dotsRel[countR].classList.add("high");
    });

    rightO.addEventListener("click",function() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO + 1 + oCards.length) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    });

    leftO.addEventListener("click",function() {
        oCards[countO].classList.remove("show");
        dotsO[countO].classList.remove("high");
        countO = (countO - 1 + oCards.length) % oCards.length;
        oCards[countO].classList.add("show");
        dotsO[countO].classList.add("high");
    });
});