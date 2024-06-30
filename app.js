var list = document.getElementById("list");
var inputBox = document.getElementById("text");
var currentInputValue = "";

inputBox.addEventListener("input", function (e) {
    currentInputValue = e.target.value;  
});

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    var text = document.getElementById("text").value;
    if (currentInputValue === "") {
        alert("Enter a valid TODO item.");
        return;
    }
    var newListElements = document.createElement("li");
    var newText = document.createTextNode(currentInputValue);
    newListElements.appendChild(newText);
    newListElements.id = "item" + (list.childElementCount + 1);
    list.appendChild(newListElements);
    console.log(newListElements);
  inputBox.value = "";
        currentInputValue = "";
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        
        if (currentInputValue === "") {
            alert("Enter a valid TODO item.");
            return;
        }
        btn.click();
    }
})