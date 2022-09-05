let listItems = document.getElementsByTagName("li");
for (item of listItems) {
  createDeleteBt(item);
}

function createDeleteBt(item) {
  let span = document.createElement("SPAN");
  span.innerText = "delete";
  span.className = "delBt";
  item.appendChild(span);

  let deleteBt = document.getElementsByClassName("delBt");
  for (i = 0; i < deleteBt.length; i++) {
    deleteBt[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    };
  }
}

function addAnListItem() {
  let addInput = document.getElementById("addInput");
  let myUL = document.querySelector("ul");
  let newBooks = document.createElement("li");
  newBooks.innerText = addInput.value;
  myUL.appendChild(newBooks);
  createDeleteBt(newBooks);
}

function searchList(value) {
  for (item of listItems) {
    let itemTxt = item.innerText.toLowerCase();
    let valueTxt = value.toLowerCase();

    if (!itemTxt.includes(valueTxt)) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  }
}
