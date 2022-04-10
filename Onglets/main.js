let Onglet1 = document.getElementsByClassName("onglet1");
let Onglet2 = document.getElementsByClassName("onglet2");
let Onglet3 = document.getElementsByClassName("onglet3");

let txt1 = document.getElementsByClassName("txtonglet1");
let txt2 = document.getElementsByClassName("txtonglet2");
let txt3 = document.getElementsByClassName("txtonglet3");

Onglet1[0].addEventListener("click", function cache() {
    txt1[0].style.opacity = "1";
    txt2[0].style.opacity = "0";
    txt3[0].style.opacity = "0";
})

Onglet2[0].addEventListener("click", function cache() {
    txt1[0].style.opacity = "0";
    txt2[0].style.opacity = "1";
    txt3[0].style.opacity = "0";
})
Onglet3[0].addEventListener("click", function cache() {
    txt1[0].style.opacity = "0";
    txt2[0].style.opacity = "0";
    txt3[0].style.opacity = "1";
})

