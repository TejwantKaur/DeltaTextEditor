let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    p.innerHTML = inp.value;
})