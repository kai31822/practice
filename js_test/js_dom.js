//建立Dom元素
let element = document.createElement('h1');

//+id
element.setAttribute('id','domh1');

//+class
element.classList.add('h1234');

//建立節點內容
let content = document.createTextNode('用js建立的內容');

//把內容塞到元素
element.appendChild(content);

//test
console.log(element);

//把建立好的東西塞到頁面上(#dom的最後)
let domtest =document.querySelector('#dom');
 domtest.appendChild(element);

//集合
const domp = document.createElement('p');
domp.setAttribute('id','domp');
// domp.removeAttribute('id', 'domp');
domp.classList.add('p1234', 'p5678');
domp.classList.remove('p5678');
domp.innerText = '用js建立的內容2';
document.getElementById('dom').appendChild(domp);


