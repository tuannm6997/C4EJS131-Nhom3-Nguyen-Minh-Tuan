//BT 1. A = [5,4,7,8,10,20,1]-> [1,4,5,7,8,10,20]

let A = [5, 4, 7, 8, 10, 20, 1];

A.sort(function (x, y) {
  return x - y;
});
console.log('BT1')
console.log(A);

//BT 2. B = [1,2,'a',{}, 'b', 'c', 2,4,5]-> C = [1,2,2,4,5]

let B = [1, 2, "a", {}, "b", "c", 2, 4, 5];
let C = [];
function sort(value) {
  if (typeof value === "number") {
    C.push(value);
  }
}
B.forEach(sort);
console.log('BT2')
console.log(C);

//BT 3.D = [1,4,10,100,50,69, 96]-> số lớn nhất trong mảng, số nhỏ nhất trong mảng

let D = [1, 4, 10, 100, 50, 69, 96];

let Mn = 0;
let Mx = 0;

function timMn(value) {
  if (value < Mn || !D.includes(Mn)) {
    Mn = value;
  }
}

function timMx(value) {
  if (value > Mx || !D.includes(Mx)) {
    Mx = value;
  }
}

D.forEach(timMn);
D.forEach(timMx);

console.log('BT3')
console.log("Min =", Mn);
console.log("Max =", Mx)
//BT 4. E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift

let E = [1, 2, "a", "b", 2, "c", 4, 5];
function sort2() {
  for (let z = 0; z < E.length; z++) {
    if (typeof E[z] === "number") {
      let temp = E[z];
      E.splice(z, 1);
      E.unshift(temp);
    }
  }
}
sort2();
console.log('BT4')
console.log(E);


// 5.F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)

let F = [1, 23, 41, 5, 6, 1, 14, 66, 1124, 1, 1, 55, 15, 0];

let stt = 0;
let vt = 0;
for (let m = 0; m < F.length; m++) {
  if (F[m] == 1) {
    stt++;
    if (stt == 4) {
      vt = m;
      break;
    }
  }
}
console.log('BT5')
console.log("Vị trí của số 1 thứ tư nằm tại : F [", vt, "]");