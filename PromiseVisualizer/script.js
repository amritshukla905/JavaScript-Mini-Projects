const stack = document.getElementById("stack");
const microtask = document.getElementById("microtask");
const consoleBox = document.getElementById("console");
const runBtn = document.getElementById("runBtn");
const codeBox = document.getElementById("codeBox");

function add(container,text){
    const div = document.createElement("div");
    div.classList.add("items");
    div.innerText = text;
    container.appendChild(div);
    return div;
}
function log(text){
    add(consoleBox,text);
}
function clearAll(){
    stack.innerHTML = "";
    microtask.innerHTML = "";
    consoleBox.innerHTML = "";
}
runBtn.addEventListener("click",()=>{
    clearAll();
    const code = codeBox.value;
    const logs = [...code.matchAll(/console\.log\(["'`](.*?)["'`]\)/g)];
    const startText = logs[0][1];
    const promiseText = logs[1][1];
    const endText = logs[2][1];
    const start = add(stack,`console.log("${startText}")`);
    log(startText);
    setTimeout(()=>{
        start.remove();
    },2000);
    setTimeout(()=>{
        const promiseStack = add(stack,"Promise.then()");
        setTimeout(()=>{
            promiseStack.remove();
            const micro = add(microtask,"Promise Callback");
            Promise.resolve().then(()=>{
                setTimeout(()=>{
                    micro.remove();
                    const Callback = add(stack,"Promise Callback");
                    log(promiseText);
                    setTimeout(()=>{
                        Callback.remove();
                    },2000);
                },2000);
            });
        },2000);
    },2500);

    setTimeout(()=>{
    const end = add(stack,`console.log("${endText}")`);
    log(endText);
    setTimeout(()=>{
        end.remove();
    },2000);
},1000);
})
