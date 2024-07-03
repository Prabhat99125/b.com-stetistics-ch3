let lod = document.querySelector("#loder");
let main = document.querySelector("main");

window.addEventListener("load", function() {
    setTimeout(function()  {
        lod.style.display = "none";  
        main.style.display = "block";      
    },2000);
  
});