var main_logo = document.querySelector(".main_logo");
var brand_name = document.querySelector(".brand_name");
var main_nav = document.querySelector(".main_nav");
var introduction = document.querySelector(".introduction");
var hover_class = document.querySelector(".hover_class");
var view_btn = document.querySelector("#view_more");
var reduce = document.querySelector(".reduce")


view_btn.addEventListener("click", function(event){
    event.preventDefault();
    reduce.style.display = "inline";
    view_btn.style.display = "none";
})



