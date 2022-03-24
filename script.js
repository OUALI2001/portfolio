let menuBtn =document.querySelector(".menu-btn");
let cancelBtn =document.querySelector(".cancel-btn");
let navigation =document.querySelector(".navigation");
let nav1 =document.querySelector(".menu ");

menuBtn.onclick=function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navigation.classList.add("active");
}
cancelBtn.onclick=function(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navigation.classList.remove("active");
}
nav1.onclick =function closee(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navigation.classList.remove("active");
}
// showing the header when you scrool down   
window.addEventListener("scroll",function(){
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
});
// scroll to top function
const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
