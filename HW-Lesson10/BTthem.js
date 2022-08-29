// B1: Use for...in loop and recursive to get all key of object (da chua)
console.log("BT 1: KQ");
const user = {
    name: "hieu",
    age: 18,
    appearence: {
      hairColor: "black",
      skinColor: "yeallow",
      height: 1700,
      weight: 68,
    },
  };
  
  function recursive(Object) {
    for (key in Object) {
      console.log(key);
      if (typeof Object[key] === "object") {
        recursive(Object[key]);
      }
    }
  }
  
  recursive(user);
//BT2: Write function to insert element at index of array.
// Input: ([21, 4, 5, -1] 3, 99) // (array, index, element)
// Output: [21 ,4 ,5 ,99, -1]
console.log("BT2 kq")
let input = [21, 4, 5, -1];

function insert(a, index, element) {
  let temp = [];
  temp = a;
  let tempA = [];
  let tempB = [];

  for (i = 0; i < index; i++) {
    tempA.push(a[i]);
  }

  tempB.unshift(element);

  for (i = index; i < a.length; i++) {
    tempB.push(a[i]);
  }

  a = [...tempA, ...tempB];
  input = a;
  console.log(input);
}

insert(input, 3, 99);