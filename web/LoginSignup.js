// pwd

let eye = document.getElementById('eye');
let pwd = document.querySelector('#pwd');
let count =0;
eye.onclick=function(){
    if(count ==0 ){ 
        eye.innerHTML="<i class='fa-solid fa-eye'></i>";
        pwd.type = "text";
        count = 1;
    }else {
        eye.innerHTML="<i class='fa-solid fa-eye-slash'></i>";
        pwd.type = "password";
        count = 0;
    }
}

// php 
let loginall = document.getElementById('log');//全部登入內容
let signoutstyle = document.querySelector('.signout-container');//登出show/hide
let signout = document.querySelector('#signout');//登出

let show =document.getElementById('show');
if(show !== null){
   loginall.innerHTML="";
   signoutstyle.classList.add('signout-container-show');
   signoutstyle.classList.remove('signout-container');
}
if( signout.classList.contains !=='signout-container-show'){
   
}
signout.onclick =function(){
    window.location.href = "http://isoftbnb.com:6080/index.php";

}

// js作廢
// pwd END
// login system
// let userid = document.getElementById('userid');//pwd沿用
// let loginbtn = document.getElementById('loginbtn');//登入按鈕
// let loginall = document.getElementById('log');//全部登入內容
// let accounterr= document.getElementById('accounterr');//錯誤訊息
// let signoutstyle = document.querySelector('.signout-container');//登出show/hide
// let showname  =document.querySelector('#showname');


// let signout = document.querySelector('#signout');//登出
// let e1 =JSON.parse(localStorage.getItem('1'));

// if(accounterr.innerText !== JSON.parse(localStorage.getItem('1'))){
// accounterr.innerText =`${e1}`;
// }else{window.localStorage.clear();}

  






// loginbtn.onclick=function(){
//     if(userid.value !=="" || pwd.value !=="" ){
//         if((userid.value == 'admin' && pwd.value =='1234') || ( userid.value == 'web111a' && pwd.value =='web111a') ){
//                 loginall.innerHTML= `<p class="pcolor">歡迎:${userid.value}</p> `;
//                 signoutstyle.classList.add('signout-container-show');
//                 signoutstyle.classList.remove('signout-container');
              
//             }else{
//                 window.localStorage.setItem('1',JSON.stringify('帳號或密碼錯誤!'))                
//             }
//     }else{
//         accounterr.innerText='帳號或密碼不能為空!'
//     }
// }

    
//     signout.onclick = function(){
        
   
//     signoutstyle.classList.add('signout-container');
//     signoutstyle.classList.remove('signout-container-show');
//     }
