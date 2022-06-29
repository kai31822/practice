document.getElementById('h1').textContent = `宣告陣列`;
// 宣告1
let arr = Array();
arr[0] = 1;
arr[1] = 2;
document.getElementById('p1').textContent = `${arr}`;

// 宣告2
let arr1 = new Array(0, 1, 2, 3);
var p2 = document.getElementById('p2');
p2.textContent = `${arr1}`;

// 宣告3
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
document.getElementById('p3').textContent = `${arr2}`;

//array維護*****
const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
document.getElementById('h2').textContent = `array維護 : ${arr3}`;
// push
arr3.push('h');
document.getElementById('p4').textContent = `push []+ : ${arr3}`;

// pop
arr3.pop();
document.getElementById('p5').textContent = `pop []- : ${arr3}`;

//unshift
arr3.unshift('pre_a');
document.getElementById('p6').textContent = `unshift +[] : ${arr3}`;

//shift
arr3.shift();
document.getElementById('p7').textContent = `shift -[] : ${arr3}`;

//delete
delete arr3[5];
document.getElementById('p8').textContent = `delete :  ${arr3}`;

// splice
arr3.splice(5, 2);
document.getElementById('p9').textContent = `splice :  ${arr3}`;

//array排序*****
const arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('h3').textContent = `array排序 : ${arr4}`;

//reverse
let reverse = arr4.reverse();
document.getElementById('p10').textContent = `${reverse}`;

//sort
let sort = arr4.sort();
document.getElementById('p11').textContent = `normal : ${sort}`;

let sortltoh = arr4.sort(function (a, b) { return a - b; });
document.getElementById('p12').textContent = `low to high : ${sortltoh}`;

let sorthtol = arr4.sort(function (a, b) {
  return b - a;
});
document.getElementById('p13').textContent = `high to low : ${sorthtol}`;


// object*****
document.getElementById('h4').textContent = `object ~log`;
const obj = {
  name: 'a',
  age: 100,
  height: 200,

  q: [1, 2, 3],
  qsq: { aa: 12, bb: 22 },

  run: function run() {
    console.log('run');
  }
};
console.log(obj);

// 物件選取
document.getElementById('p14').textContent = `選物件 : ${obj.name}`;
document.getElementById('p15').textContent = `選物件裡陣列值 : ${obj.q[0]}`;
document.getElementById('p16').textContent = `選物件裡物件 : ${obj.qsq.aa}`;
document.getElementById('p16').textContent = `物件function : 物件key.function()`;
obj.run();

const arro = [
  {
    name: "iPhone XS",
    color: ["silver", "gray", "gold"],
    size: ['64g', '256g', '512g']
  },
  {
    name: "iPhone XS Max",
    color: ["silver", "gray", "gold"],
    size: ['64g', '256g', '512g']
  }
]
console.log('**********');
arro.forEach(function (item) {  // console.log(item); console.log(item.name);

  item.color.forEach(function (item2) {
    // document.getElementById('p17').textContent = `${item.name}  ${item2}`;
    item.size.forEach(function (item3) {
      console.log(`${item.name}  ${item2}  ${item3}`);
    });

  });
})

console.log('**********');

document.getElementById('p18').textContent = `陣列中的物件選取: ${arro[0].name} `;

//test: str + index
let str = "12321";
console.log(str[2]);//3



