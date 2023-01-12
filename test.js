const obj = [
  {
    name: "banana",
    id: "3653643",
    checked: false
  },
  {
    name: "tomato",
    id: "3653235",
    checked: false
  }
]

const obj2 = obj.map(item => {
  item.id === "3653643" && (item.checked = !item.checked) 
  // console.log('item.checked: ', item.checked);
  return item;
});

// console.log('obj2: ', obj2);
// console.log('obj: ', obj);
// console.log(obj2 === obj);

const obj3 = obj.find((el) => el.id === '3653643');
const obj4 = obj2.find(el => el.id === '3653643');

// console.log(obj3 === obj4);

const obj5 = obj.map(item => item);

// console.log(obj5 == obj);

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.filter(item => item > 3);

console.log(arr, arr2);