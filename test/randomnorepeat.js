let arr = [0, "a", "b", "c", 4, 5, 6, 7, 8, 9, 10];
let result = [];
let randomNum = 11;//次數


// 抽取圈
for (let i = 0; i <= randomNum - 1; i++) {
  let ran = Math.floor(Math.random() * arr.length);

  document.write(`random抽取 == ${ran}***`);
  document.write(`arr剩下 == ${arr} <br>`);

  result.push(arr.splice(ran, 1)[0]);
  console.log(`result == ${result}`)
}
