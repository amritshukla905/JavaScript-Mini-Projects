const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const dspl = document.getElementById("display");
let sec = 0;
let min = 0;
let hrs = 0;
let secd ="";
let hrd = "";
let mind = "";
let interval;
function display(){
    if(sec<10) secd = '0'+sec.toString();
    else secd = sec.toString();
    if(min<10) mind = '0'+min.toString();
    else mind = min.toString();
    if(hrs<10) hrd = '0'+hrs.toString();
    else hrd = hrs.toString();
    dspl.innerHTML = hrd+":"+mind+":"+secd;
    
}
stop.addEventListener("click",()=>{
    clearInterval(interval);
})
start.addEventListener("click",()=>{
    interval = setInterval(()=>{
        sec++;
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hrs++;
            min = 0;
        }
        display();
    },1000)
})
reset.addEventListener("click",()=>{
    sec = 0;
    min = 0;
    hrs = 0;
    secd ="";
    hrd = "";
    mind = "";
    display();
})