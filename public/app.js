const button = document.querySelector("button");
const containers = document.querySelectorAll(".container");

button.addEventListener("click", function (e) {
    //Create a textare
    const textarea = document.createElement("textarea");
    //Make it draggable
    textarea.draggable = true;
    //ID
    textarea.id = Math.random() * 100;
    //
    textarea.addEventListener("dragstart", onDragStart);
    textarea.addEventListener("dragend", onDragEnd);
    const first = document.querySelector("#first");
    first.appendChild(textarea);
});

function onDragEnd(e) {
    e.target.classList.remove("drag");
}

function onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.target.classList.add("drag");
}
//Iterate through the containers and allow all dragover in all of the,
containers.forEach(container => {
    container.addEventListener("dragover", function(e) {
        e.preventDefault();
    });
});
//Iterate through the containers and allow all drop in all of the,
containers.forEach(container => {
    container.addEventListener("drop", function(e) {
        e.preventDefault();
        const textareaID = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(textareaID));
    });
});

