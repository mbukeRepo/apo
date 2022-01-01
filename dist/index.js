var main_logo = document.querySelector(".main_logo");
var brand_name = document.querySelector(".brand_name");
var main_nav = document.querySelector(".main_nav");
var introduction = document.querySelector(".introduction");
var hover_class = document.querySelector(".hover_class");

function displayNav(event){
    main_logo.style.display = "block";
    brand_name.style.display = "block";
}

main_nav.addEventListener("mouseover", displayNav)

hover_class.addEventListener("mouseenter", displayNav);
introduction.addEventListener("mousemove", displayNav);

window.addEventListener("scroll",function(event){
    main_logo.style.display = "none";
    brand_name.style.display = "none";
});

