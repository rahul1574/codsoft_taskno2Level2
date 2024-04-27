let score13=document.querySelectorAll("#correct3");
let button10=document.querySelectorAll("#wrong10");
let button11=document.querySelectorAll("#wrong11");
let button12=document.querySelectorAll("#wrong12");
var animatedDiv=document.getElementById("time4");
// var count=0;
// const display=()=>{
//     score1=count++;
// }
correct3.addEventListener("click", () => {
        correct3.innerText="selected";
        correct3.disabled=true;
        wrong10.disabled=true;
        wrong11.disabled=true;
        wrong12.disabled=true;
})
wrong10.addEventListener("click", () => {
    wrong10.innerText="selected";
    correct3.disabled=true;
    wrong10.disabled=true;
    wrong11.disabled=true;
    wrong12.disabled=true;
});
wrong11.addEventListener("click", () => {
    wrong11.innerText="selected";
    correct3.disabled=true;
    wrong10.disabled=true;
    wrong11.disabled=true;
    wrong12.disabled=true;
});
wrong12.addEventListener("click", () => {
    wrong12.innerText="selected";
    correct3.disabled=true;
    wrong10.disabled=true;
    wrong11.disabled=true;
    wrong12.disabled=true;
});
function onAnimationEnd( ) {
    correct3.disabled=true;
    wrong10.disabled=true;
    wrong11.disabled=true;
    wrong12.disabled=true;
}
animatedDiv.addEventListener('animationend', onAnimationEnd);