let score12=document.querySelectorAll("#correct2");
let button7=document.querySelectorAll("#wrong7");
let button8=document.querySelectorAll("#wrong8");
let button9=document.querySelectorAll("#wrong9");
var animatedDiv=document.getElementById("time3");
// var count=0;
// const display=()=>{
//     score1=count++;
// }
correct2.addEventListener("click", () => {
        correct2.innerText="selected";
        correct2.disabled=true;
        wrong7.disabled=true;
        wrong8.disabled=true;
        wrong9.disabled=true;
})
wrong7.addEventListener("click", () => {
    wrong7.innerText="selected";
    correct2.disabled=true;
    wrong7.disabled=true;
    wrong8.disabled=true;
    wrong9.disabled=true;
});
wrong8.addEventListener("click", () => {
    wrong8.innerText="selected";
    correct2.disabled=true;
    wrong7.disabled=true;
    wrong8.disabled=true;
    wrong9.disabled=true;
});
wrong9.addEventListener("click", () => {
    wrong9.innerText="selected";
    correct2.disabled=true;
    wrong7.disabled=true;
    wrong8.disabled=true;
    wrong9.disabled=true;
});
function onAnimationEnd( ) {
    correct2.disabled=true;
    wrong7.disabled=true;
    wrong8.disabled=true;
    wrong9.disabled=true;
}
animatedDiv.addEventListener('animationend', onAnimationEnd);