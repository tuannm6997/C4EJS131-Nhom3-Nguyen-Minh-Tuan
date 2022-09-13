let listItems = document.getElementsByTagName("li");// đặt listItems bằng các phần tử có tag li
for (item of listItems) {                           //với mỗi item của object listItems
  createDeleteBt(item);                             //gọi function creatDeleteBt với mỗi item
}

function createDeleteBt(item) {                     //tạo function createDeleteBt với biến item
  let span = document.createElement("SPAN");        //đặt biến span = tạo 1 element span
  span.innerText = "delete";                        //thêm text span là delete
  span.className = "delBt";                         //đặt class span là delBt
  item.appendChild(span);                           //thêm phần tử con span vào parent item

  let deleteBt = document.getElementsByClassName("delBt"); //đặt deleteBt bằng các phần tử có class là delBt
  for (i = 0; i < deleteBt.length; i++) {                   //lặp 
    deleteBt[i].onclick = function () {                   //tạo function onclick cho class deleteBt
      let div = this.parentElement;                       //cho div bằng parentnode của class con này
      div.remove();                                   // xóa thg parent của thg con này
    };
  }
}

function addAnListItem() {                              //thêm hàm thêm pt
  let addInput = document.getElementById("addInput");   //biến addInput bằng các pt có id là addInput
  let myUL = document.querySelector("ul");              // đặt myUL= phần tử của ul
  let newBooks = document.createElement("li");          // đặt newBooks là tạo pt li
  newBooks.innerText = addInput.value;                  // sửa nội dung innerText value của addInput (hàm input của form)
  myUL.appendChild(newBooks);                           // thêm pt newBooks vào ul
  createDeleteBt(newBooks);                             // tạo delbt cho newBooks
}

function searchList(value) {                            //hàm tìm kiếm
  for (item of listItems) {                             //lặp mỗi item của listItems
    let itemTxt = item.innerText.toLowerCase();         // cho itemTxt= text của item viết thường
    let valueTxt = value.toLowerCase();                 // cho valueTxt = value nhập viết thường

    if (!itemTxt.includes(valueTxt)) {                  // nếu 2 giá trị khác nhau
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  }
}
