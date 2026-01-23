const btn = document.getElementById("topBtn");

window.addEventListener("scroll",function() {
    if(window.scrollY > 400){
        btn.classList.add("active"); 
    }
    else{
        if(btn.classList.contains("active")){
            btn.classList.remove("active");
        }
    }
});