var gallery = document.querySelectorAll(".project-gallery img");
var active = document.querySelector(".active-project img");
var len = gallery.length;
var i;
for (i = 0; i < len; i++) {
    gallery[i].addEventListener("click", function () {
        active.src = this.src;
    })
}

var menu = document.querySelector("nav");
var logo = document.querySelector(".logo");
var anch=menu.querySelectorAll("a");
var mobileNav=document.querySelectorAll(".mobile-nav div");
window.addEventListener("scroll", function () {
    if (this.pageYOffset > 100) {
        menu.style.backgroundColor = "white";  
        for(i=0;i<anch.length;i++){
            anch[i].style.color="black";
        }
       
       for(i=0;i< mobileNav.length;i++){
            mobileNav[i].style.backgroundColor="black";
        } logo.style.backgroundColor="black";
    }
    else{
         menu.style.backgroundColor = "transparent";  
        for(i=0;i<anch.length;i++){
            anch[i].style.color="white";
        }
        
        for(i=0;i< mobileNav.length;i++){
            mobileNav[i].style.backgroundColor="white";
        } 
        logo.style.backgroundColor="transparent";
    }
})

/*function cross(x){
    x.classList.toggle("change");
}*/

function openNav(){
    document.querySelector(".mobile-menu").style.display="block";
    document.querySelector(".mobile-menu").style.width="350px";
}

function closeNav(){
     document.querySelector(".mobile-menu").style.display="none";
    document.querySelector(".mobile-menu").style.width="0";
}