// function

//自訂函式
function test() {
  let a =100;
  console.log(a);
}

//匿名函式
 test1 =function() {
  let x=1;
  console.log(test1);
}

//箭頭函式
y= ()=>{}

arr.forEach(function(data) {
  console.log(data);
});

arr.forEach((data)=>{
  console.log(data);
});

 //箭頭函式
      let a = (x) => {
        return (x * 2);
      }


      //淺規則 1: 當參數只有一個的時候, 可省略掉 (), 但沒參數或多個參數時不可省略
      let b = x => {
        return (x * 2);    //return [2, 3, 4, 5];
      }

      //淺規則 2: 當函式本體只有一行的時候,而且 return 只有一個值，可省略掉 {} 與 return 關鍵字
      let c = (x) => x * 2;
      // or
      // let c = x => x * 2;
