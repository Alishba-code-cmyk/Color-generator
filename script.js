let btn= document.querySelector("button");
let colorbox=tdocument.querySelector(".color-box");
btn.addEventListener("click",function(){
    
    colorbox.style.backgroundcolor=randomcolor();
    console.log("color updated");
});
function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue}`;
    return color;
}

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor="blue";
    
// });