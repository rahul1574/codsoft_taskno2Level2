let score14=document.querySelectorAll("#correct4");
let button13=document.querySelectorAll("#wrong13");
let button14=document.querySelectorAll("#wrong14");
let button15=document.querySelectorAll("#wrong15");
var animatedDiv=document.getElementById("time5");
let button16=document.querySelectorAll("#correct5")
// var count=0;
// const display=()=>{
//     score1=count++;
// }
correct4.addEventListener("click", () => {
        correct4.innerText="selected";
        correct4.disabled=true;
        wrong13.disabled=true;
        wrong14.disabled=true;
        wrong15.disabled=true;
})
correct5.addEventListener("click",()=>{
    correct5.disabled=true;
})
wrong13.addEventListener("click", () => {
    wrong13.innerText="selected";
    correct3.disabled=true;
    wrong13.disabled=true;
    wrong14.disabled=true;
    wrong15.disabled=true;
});
wrong14.addEventListener("click", () => {
    wrong14.innerText="selected";
    correct4.disabled=true;
    wrong13.disabled=true;
    wrong14.disabled=true;
    wrong15.disabled=true;
});
wrong15.addEventListener("click", () => {
    wrong15.innerText="selected";
    correct4.disabled=true;
    wrong13.disabled=true;
    wrong14.disabled=true;
    wrong15.disabled=true;
});
function onAnimationEnd( ) {
    correct4.disabled=true;
    wrong13.disabled=true;
    wrong14.disabled=true;
    wrong15.disabled=true;
}
animatedDiv.addEventListener('animationend', onAnimationEnd);