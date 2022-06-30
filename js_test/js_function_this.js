var btn = document.getElementById('btn');
console.log(btn);

// 1. 直接執行函式，這裡的 this 指的是全域物件 window
function jump() {
    console.log(this);
}

jump();

// 2. 用物件呼叫的方式執行函式，這裡的 this 指的是自己 a 物件
function jump() {
    console.log(this);
}

const a = {};
a.jump = jump;
a.jump();

// 3. 透過監聽函式(事件)，來執行函式，這裡的 this 指的是自己 button 物件
function jump() {
    console.log(this);
}

// 4. 將 jump() 改成匿名函式的寫法，this 指的會是 window
let jump1 = () => {
    console.log(this);
};

btn.addEventListener('click', jump1);
//*************
 var body = document.getElementsByTagName('body');
 body.createElement('div');

 var btn = document.getElementById('btn');
 console.log(btn);

 // 1. 直接執行函式，這裡的 this 指的是全域物件 window
 function jump() {
     console.log(this);
 }

 jump();

 // 2. 用物件呼叫的方式執行函式，這裡的 this 指的是自己 a 物件
 function jump() {
     console.log(this);
 }

 const a = {};
 a.jump = jump;
 a.jump();

 // 3. 透過監聽函式(事件)，來執行函式，這裡的 this 指的是自己 button 物件
 function jump() {
     console.log(this);
 }

 // 4. 將 jump() 改成匿名函式的寫法，this 指的會是 window 物件
 let jump1 = () => {
     console.log(this);
 };

 btn.addEventListener('click', jump1);
