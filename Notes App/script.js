const ttl = document.getElementById("title");
const txt = document.getElementById("text");
const box = document.querySelector(".notes-grid");
const newnotes = document.getElementById("addnote");


function add(container,title,text){
    const div = document.createElement("div");
    div.classList.add("note-card");
    div.innerHTML = `
    <div class="note-content">
        <h2>${title}</h2>

        <p>
            ${text}
        </p>
    </div>

    <div class="note-buttons">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>`;
    container.appendChild(div);
    div.querySelector(".delete-btn").addEventListener("click",()=>{
        div.remove();
    });
    div.querySelector(".edit-btn").addEventListener("click",()=>{

    const oldTitle = div.querySelector("h2").innerText;
    const oldText = div.querySelector("p").innerText;

    ttl.value = oldTitle;
    txt.value = oldText;
    div.remove();

});
}


function log(title,text){
    add(box,title,text);
}


newnotes.addEventListener("click",()=>{
    log(ttl.value,txt.value);
    ttl.value = "";
    txt.value = "";
});








