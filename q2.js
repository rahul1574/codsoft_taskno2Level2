
let score11=document.querySelectorAll("#correct1");
let button4=document.querySelectorAll("#wrong4");
let button5=document.querySelectorAll("#wrong5");
let button6=document.querySelectorAll("#wrong6");
var animatedDiv=document.getElementById("time2");
// var count=0;
// const display=()=>{
//     score1=count++;
// }
correct1.addEventListener("click", () => {
        correct1.innerText="selected";
        correct1.disabled=true;
        wrong4.disabled=true;
        wrong5.disabled=true;
        wrong6.disabled=true;
})
wrong4.addEventListener("click", () => {
    wrong4.innerText="selected";
    correct1.disabled=true;
    wrong4.disabled=true;
    wrong5.disabled=true;
    wrong6.disabled=true;
});
wrong5.addEventListener("click", () => {
    wrong5.innerText="selected";
    correct1.disabled=true;
    wrong4.disabled=true;
    wrong5.disabled=true;
    wrong6.disabled=true;
});
wrong6.addEventListener("click", () => {
    wrong6.innerText="selected";
    correct1.disabled=true;
    wrong4.disabled=true;
    wrong5.disabled=true;
    wrong6.disabled=true;
});
function onAnimationEnd( ) {
    correct1.disabled=true;
    wrong4.disabled=true;
    wrong5.disabled=true;
    wrong6.disabled=true;
}
animatedDiv.addEventListener('animationend', onAnimationEnd);