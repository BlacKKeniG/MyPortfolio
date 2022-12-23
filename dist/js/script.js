//hamburger
const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    close = document.querySelector(".menu__close");

hamburger.addEventListener("click", ()=>{
    menu.classList.add("active");
});

close.addEventListener("click", ()=>{
    menu.classList.remove('active');
})

//skills__indicator
const skillsValues = document.querySelectorAll(".skills__indicator-value"),
    indicatorLine = document.querySelectorAll(".skills__indecator-line_fill");

    skillsValues.forEach( (element, i) => {
        indicatorLine[i].style.width = element.innerHTML;
    }); 

