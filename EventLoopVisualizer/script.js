const stack = document.getElementById("stack");
const webapi = document.getElementById("webapi");
const queue = document.getElementById("que");
const consoleBox = document.getElementById("console");
const runBtn = document.getElementById("rnbtn");
const codeBox = document.getElementById("codeBox");

function add(container, text){
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerText = text;
  container.appendChild(div);
  return div;
}

function log(text){
  add(consoleBox, text);
}

function clearAll(){
  stack.innerHTML = "";
  webapi.innerHTML = "";
  queue.innerHTML = "";
  consoleBox.innerHTML = "";
}

runBtn.addEventListener("click", () => {

  clearAll();

  // USER CODE
  const code = codeBox.value;

  // EXTRACT console.log TEXTS
  const logs = [...code.matchAll(/console\.log\(["'`](.*?)["'`]\)/g)];

  // EXTRACT setTimeout TIME
  const timeoutMatch = code.match(/setTimeout\s*\([\s\S]*?,\s*(\d+)\s*\)/);

  const delay = timeoutMatch ? Number(timeoutMatch[1]) : 2000;

  const startText = logs[0] ? logs[0][1] : "Start";
  const timeoutText = logs[1] ? logs[1][1] : "Timeout Callback";
  const endText = logs[2] ? logs[2][1] : "End";

  // START LOG
  const start = add(stack, `console.log("${startText}")`);

  log(startText);

  setTimeout(() => {

    start.remove();

    const timeoutStack = add(stack, "setTimeout()");
    
    setTimeout(() => {

      timeoutStack.remove();

      const api = add(webapi, `Timer (${delay}ms)`);

      setTimeout(() => {

        api.remove();

        const callback = add(queue, "Timeout Callback");

        setTimeout(() => {

          callback.remove();

          const callbackStack = add(stack, "Timeout Callback");

          log(timeoutText);

          setTimeout(() => {
            callbackStack.remove();
          }, 1000);

        }, 1000);

      }, delay);

    }, 1000);

  }, 1000);

  // END LOG
  setTimeout(() => {

    const endStack = add(stack, `console.log("${endText}")`);

    log(endText);

    setTimeout(() => {
      endStack.remove();
    }, 1000);

  }, 500);

});