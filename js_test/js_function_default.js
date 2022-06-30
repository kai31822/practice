console.log('*****  function_test *****');
// function預設參數寫法
function time(max=10, mid=20 ,min=10) {
  let x=(max+min)/mid;
  console.log(x);
}
time()

// 具名參數
function trapezoidArea({top, bottom ,height}) {
  let area = (top+bottom)*height/2;
console.log(area)
}
trapezoidArea({ top:10, bottom : 10, height :2});

//其餘參數  (...)=array
function add(...numbers) {
  let result =0;
  for (let num of numbers){
    result += num;
  }
  return result;
}
console.log(add(1,2,3,4,5)) ;

//其餘參數 預期會放的值   多的值忽略
function add1(...[x,y,z]) {
    return x+y+z;
}
console.log(`[x,y,z] 只放2個值= ${add1(1.2)}`);
console.log(`[x,y,z] 放3個= ${add1(2,1,3)}`);
console.log(`[x,y,z] 放4個= ${add1(1,2,3,4)}`);
