// <!-- // 1--> edit karna text
// <!-- //    var header = document.getElementById("header-title");
// //    console.log(header);
// //    header.textContent="hello"// text change
// //    header.innerHTML="bye"//--> attention style
// <!-- // console.log(header.textContent) -->
// <!-- 
// // 2 style css
// // var header = document.getElementById("header-title")

// // header.style.borderBottom="solid 2px #000";

// // var mainheader=document.getElementById("main-header");
// // mainheader.style.borderBottom="solid 2px #000" -->


// <!-- // which one we get --loop class use! --
//     >

// // var items= document.getElementsByClassName("list-group-item");
// // console.log(items);
// //    console.log(items[3])
// //    items[3].textContent="hello";
// //    items[3].style.fontWeight="bold"; 
// // items[3].style.background="green"; 

// // for(var i=0; i<items.length;i++){
// //     items[i].style.background="yellow"   
// //     // if(i%2==0){
// //     //     items[i].style.background="green"  
// //     // }
// // }

// //TagName -->li, ul, a, h1 ,h3
// // var li = document.getElementsByTagName('li');
// // li[1].textContent="bye"
// // console.log(li);
// // console.log(li[0]);
// <!-- 
// //Query Selector-->
// // var header =  document.querySelector('#main-header');
// // header.style.borderBottom="solid 2px #000"
// // var input= document.querySelector('input');
// // input.value="hello Khushi Nd aditya"   
// // var Submit= document.querySelector('input[type="submit"]');
// // Submit.value="ok";

// //list ke sath query selector
// // var item =  document.querySelector('.list-group-item:nth-child(2)');
// // item.style.backgroundColor="red";// single one

// //query selector All
// //it can grab more than one thing

// // var title = document.querySelectorAll(".title") -->

// // console.log(title[1]); -->

// // var li = document.querySelectorAll('.list-group-item:nth-child(even)');
// // console.log(li)
// // var li =document.querySelectorAll('li:nth-child(even)');
// // console.log(li)
// // for(var i=0; i< li.length;i++){
// //     li[i].style.backgroundColor="#f5f5f5"
// // }

// //traversing DOM
// // var Itemlist = document.querySelector('#items');
// // console.log(Itemlist);
// // // console.log(Itemlist.parentNode)
// // // console.log(Itemlist.parentNode.parentNode)
// // // console.log(Itemlist.parentNode.parentNode.parentNode)
// // // console.log(Itemlist.parentNode.parentNode.parentNode.parentNode)
// // // console.log(Itemlist.parentNode.parentNode.parentNode.parentNode.parentNode)
// // console.log(Itemlist.parentElement.parentElement.parentElement.parentElement.parentElement);

// // Question-->

// // function myfun(val, val1){// paramenter
// //     console.log(val, val1);
// //     console.log(arguments)
// // }
// // myfun(1,2,3,4,5,6,7,8) //---arugrmt

// // most important -->
// <!-- 
// // var test="test";
// // function abc(){
// //     var test = "inner test";
// //     console.log(test);
// //     console.log(this.test);
// // }
// // abc(); -->

// <!-- // for(let a=0; a<5; a++){ -->
// <!-- //     (function(test){
// //         setTimeout(function(){
// //             console.log(test);
// //         },1000)
// //     })(a);
// // } -->

// document.write("hello");
// var hey = document.getElementById("hello");
// console.log(hey)


//**********   21-05-21  **************/
//childNode
// var itemlist = document.querySelector("#items");
// console.log(itemlist.childNodes);

//chlidren
// specific value can be present
// var itemlist = document.querySelector("#items");
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor="red";

// firstchild
//firstElement Child
// var itemlist = document.querySelector("#items");
// console.log(itemlist.firstElementChild);
// console.log(itemlist.lastElementChild)

//how to track our sibing track

// var itemlist = document.querySelector("#items");
// console.log(itemlist.nextElementSibling);
// itemlist.nextElementSibling.textContent="khushi and aditya"
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.textContent="khushi and aditya"

//create element on DOM

//  var newDiv = document.createElement('div');
// //  console.log(newDiv);

//  newDiv.className="cl";
// //  console.log(newDiv)
// newDiv.id='id1';
// // console.log(newDiv)
// // how i put the attribut
// newDiv.setAttribute('name','value');
// // console.log(newDiv)
// newDiv.textContent="Hello"
// console.log(newDiv)

// //add to Html tag

// var cont = document.querySelector('header .container')
// var h1 =  document.querySelector('header h1');
// cont.insertBefore(newDiv,h1);
// newDiv.style.color="black";
// newDiv.style.fontSize="45px";

// Event stuff

// function ClickFun(){
//     console.log("clickFUnction");
// }

//we make event with the help of js

// var button = document.getElementById("button").addEventListener('click',ClickFun);

// function ClickFun(){
//     console.log("clicked");
//     document.getElementById('header-title').textContent="Welcome"
// }

// function ClickFun(e){
//     console.log("clicked");
//     document.getElementById('header-title').textContent="Welcome"
//         console.log(e.target.id);
        
//     }

// function ClickFun(e){
//     var out =  document.getElementById('output');

//     out.innerHTML="<h3>"+e.target.id+"</h3>"
// console.log(e.altKey)
// var temp=e.altKey
// if(temp){
//     console.log("hey");
// }

// }

// var button = documents.getElementById("button").addEventListener('',ClickFun);

// function ClickFun(){
//         console.log("clicked");
//         // document.getElementById('header-title').textContent="Welcome"
//     }

//js deep
 //old

//  function myfun(name, age){
//      return 'hi '+name+' your age is '+age+' years old';
//  }
//  var temp = myfun("aditya",20)
//  console.log(temp);


// ES6

//template literal
// function myfun(name, age){
//     return `hi ${name} your age is ${age} year old`;
// }
// var temp = myfun("aditya",20)
// console.log(temp);

// Destructuring in js Object
// const emp = {
//     "name":"abc",
//     "emp_id":1,
//     "phone":80779061,
//     "address":"108 Jaipur"
// }
//  let {name,emp_id} = emp;

// console.log(name,emp_id)
        //  abc  1  no,    108    109    abc

//  console.log(["emp_id"]);
//console.log(emp.name);
// console.log();

// let arr = ["ram","shyam","rita"];



// let [ ,, val3] = arr


// console.log(  val3);

//spread opertator
//callback -- > async await .then .catch promise

array