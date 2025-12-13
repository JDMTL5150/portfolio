
document.addEventListener("DOMContentLoaded",() => {
    const edBtn = document.getElementById("edBtn");
    const workBtn = document.getElementById("workBtn");
    const Resume = document.querySelector(".resume");
    const school = document.querySelector(".school");

    Resume.classList.add("show");

    edBtn.addEventListener("click",() => {
        Resume.classList.remove("show");
        school.classList.add("show");
    });

    workBtn.addEventListener("click",() => {
        school.classList.remove("show");
        Resume.classList.add("show");
    });


});