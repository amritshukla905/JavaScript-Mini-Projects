const dspl = document.getElementById("count");
const plus = document.getElementById("increase");
const minus = document.getElementById("decrease");
const reset = document.getElementById("reset");
let cnt = 0; 
function display(){
    dspl.textContent = cnt.toString();
}
plus.addEventListener("click",()=>{
    cnt++;
    display();
});
minus.addEventListener("click",()=>{
    if(cnt > 0) cnt--;
    display();
});
reset.addEventListener("click",()=>{
    cnt = 0;
    display();
});
