var input = document.querySelector("input");
var enter = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // Helped by Captain Anonymous on CodePen
    li.addEventListener("click", function(){
        // Toggles "done" class when list item is clicked
        var finished = this.classList.toggle("done");
        //create remove button
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");
        //if list item is clicked, and it does not already have a remove button, this will run
		if (finished && li.childElementCount === 0) {
            //creates and adds remove button
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);
            //when remove button is clicked, list item is deleted
			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
            //removes button if item is clicked again
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    })
    //resets input value back to blank
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
     }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode ===13){
        createListElement();
    }
}

enter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
