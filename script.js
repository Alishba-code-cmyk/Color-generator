let btn= document.querySelector("button");
let colorbox=document.querySelector('.color-box');
btn.addEventListener("click",function(){
    
    
    colorbox.style.backgroundColor=getrandomcolor();
    console.log("color updated");
});
function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue}`;
    return color;
}
