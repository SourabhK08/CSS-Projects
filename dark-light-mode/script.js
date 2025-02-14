let modeBtn = document.querySelector("#btn");
let mode = "light"; 
let chg = document.querySelector("body");


modeBtn.addEventListener( "click", ()=>{
    if( mode === "light"){
        mode = "dark";
        chg.classList.add("dark");
        chg.classList.remove("light");
    }else{
        mode = "light";
        chg.classList.add("light");
        chg.classList.remove("dark");
    }
} ) 