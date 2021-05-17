// // 1)....max and lower no..

// var arr=[1,12,0,3,11];
// var max= arr[0];
// var lower= arr[0];
// for(var i=0 ; i < arr.length;i++){

//     if(max<arr[i]){
//         max=arr[i];
//     }else if(lower>arr[i]){
//         lower= arr[i];
//     }

// }
// console.log(`lower ${lower} and ${max}`);

//2)missing no 1,2,4,5,6

// function getMissingNo(a, n) {

//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     console.log(total);
//     for (let i = 0; i < n; i++)
//         total -= a[i];
//     return total;
// }

// // Driver Code

// let arr = [ 1, 2, 4, 5, 6 ];
// let n = arr.length;
// let miss = getMissingNo(arr, n);
// document.write(miss);              //3 o/p


//3)left and rigth sum of array

// var arr = [4,5,6];
//     var left=0;
//     var right=0;
//     var mul=0;
//     for(var i =0; i<arr.length; i++){
//         if(i<=arr.length/2-1){
//             left=left+arr[i];
//         }
//         else{
//             right=right+arr[i];
//         }
//     }
//     mul= left*right;
//     console.log(mul)



//4)rotate no of n-times

// console.log("Hello Javascript !");
// const leftRotate = (arr,r,n)=>{
//     var leftvalue= arr.splice(0,r);//nekal kar dal diye arr change hogya
//     console.log('b',arr);
//    arr=arr.concat(leftvalue);
//     console.log(leftvalue);
//     console.log('b',arr);
//     // arr.splice(r,r)

// }

// var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
// var k = prompt('enter no');
// //      leftRotate(arr, k, 7);
        // printArray(arr, 7);


//5) minimus value sum of array

// var arr = [11,4,0,2];
// var arr2=[3,4,8,2];
// arr.sort(function(a,b){return a-b})
// var sum=[];
// console.log(arr);
// for(var i=0; i<arr.length||arr2.length; i++){
//     // sum=arr[i]*arr2[i];
//     // console.log(arr[i])
// }


// var arr = [3,2,1,5,4];
// console.log('arr--', arr);
// k=3;
// var temp = arr.splice(0,k);
// arr.reverse();
// console.log('arr',arr);
// temp.reverse();
// console.log('temp', temp)
// for(var i=0; i<arr.length;i++){
//     temp.push(arr[i])
// }
// console.log('temp -', temp);
// arr=temp;

// console.log('arr--', arr);

//find no of numbers;

// function addNum(value){
//  var result=0;
//  if(value>=10){
//     result=value.toString().split("");
//     result.forEach(element => {
//         console.log('element', element)
//         addNum(element);
//     });


//  }
//  else if(value==1){
//      sum++;
//      console.log('sum', sum)
//  }
//  else if(value>1){
//      console.log('return', value)
// return;
//  }
// }


//code chef print only how many times sum of k in a array

// let arr = [ 20, 5, 5, 5, 10, 16 ];
// let k = 15;
// let n = arr.length;
// let res = 0;
 
// // Calculate all subarrays
// for(let i = 0; i < n; i++)
// {
//     let sum = arr[i];
//     for(let j = i+1; j < n; j++)
//     {
//        if(sum == k){
//            console.log(sum);
//            break
//        }
//        else if(sum<k){
//             sum = sum +arr[j];
            
//        }
//       else{
//         break;
//       }
       
      
         
//         // Check if sum is equal to
//         // required sum
        
//     }
// }
// console.log(res)


// var arr=[11,12,13,15,14];
// var k=1;

// var sum=0;
// for(var i=0 ;i<arr.length;i++){
//     addNum(arr[i])

// }
// console.log(sum)



// console.log("tech-stack")

// // alert("hello");

// var name1="Ambesh";
// console.log(name1);


// var batch= "ninja";
// console.log(batch);

// console.log(you);
// var you=10;
// console.log(you);




    //hoisting function var 

// 1) var a=10 
//    var a
//    a=10

// all the decrlation and processed first before any part of
//your code is executed
// undifined
// var a// undifined
// console.log(a);// undifined
// var a =10
// console.log(a);//10

// 1) what is JS 
// 2)var + hosting
// 3) null and undefined// difference

// 3) post 
// i) flax box 
// ii)hosting
// var + let
// iii) resume


//boolena
// trur yah false
// var pass = false;
// console.log(pass)

// var pass = true;
// console.log(pass)

// var pass = True; // error
// console.log(pass)

//null and undefined

// var pass = undefined;
// console.log(pass)

// var count = 10;
// console.log(count);
// var one = 1;
// var incrementByone= count+one;
// console.log(incrementByone);


// console.log("abc"/5); // NAN not a no..

// console.log(5/0);// infineite


//data types

// String
// Number
// Boolean
// undefined
// null

// what is primitive and non primitive data type?

//todays session function

// syntax - >
//  function name (paramenter, paramenter){
//          //statement
//  }
//  name(); // calling


// 1) normal function with value pass
// function khushi(catchit){
// console.log("my first function", catchit);
// }



// // console.log("Function");

// khushi(4);// calling


// function khsuhi1(catchit){//3
//         console.log('catchit',catchit);//4
        
//         var temp = 10;//5

// return catchit + temp;//6
// }

// var no = 11;// 1

// var  temp = khushi1(no);//1  //7
// console.log(temp);//8


// homework 

// function
// array
// object



// 1) retunr value
// 2)IIFE
// 3)with parameter
// 4)anonumous function
// 5)recurvisive function
// 6)pure function
// 7)impure function
// 8)HOC// high order function

// teams



// let a =11;
// {
//     let a = 10;
    
// }
// console.log(a)




// let a=10;

// function myfunction(){
//     //  let a =12;
//     console.log(a);
// }


// myfunction(a)
// console.log(a);


//      ***************************   function 5-11-2021

// IIFE -- immediate invoke function expression

//normal fun
// var foo = "foo_outer";
// function test(){
//     var foo ="foo_inner";
//     console.log(foo);
// }
// console.log(foo);
// test();

//iife without parameter
// (function test(){
// console.log('iife');
// })();

// // with parameter
// (function test(val){
// console.log(val)
// })("aditya");

//Anonumous function----> no name function

// (function (){
//     console.log('anonumous fun');
// })();

// one more way to write aninumous function

// var khushiCoder = function (val){ //2
//     console.log('no name function',val);//3
//     return 1;
// };//4

// console.log(khushiCoder("khishi"));// 1
// khushiCoder("aditya");

//resursive fuunction
// function res(n){//2 //6 //10
//     if(n==0){//3 //7 //11 //true
//         return 1;
//     }
//     else{//4 //8 //12
//         return n+res(n-1);//5    10+res(9)
//                         //9    return 9// 46
//                         //13 retunr 8+res(7)
//                         //return  7 +res(6);
//                         //return 6+res(5);
//                         //return 5+res(4);
//                         //return 4+res(3);
//                         //return 3+res(2);
//                         //return 2+ res(1); =2
//                         // return 1+res(0) n=0 //->>return 1+1=2
//     }
// }
// var temp = res(10);//1 
// console.log(temp)


//*****  HOC high order function
// A function takes another function as a parameter

//normal function
// var foo = "foo_outer";
// function test(val){
//     var foo ="foo_inner";
//     console.log(foo,val);
// }
// console.log(foo);
// test("tech-stack");

//Hoc Example
// function bolo(call){//2
//     console.log(call);
//     call();
//     // call();//3
// }

// function print(){//4
//     console.log("Print");//5
// }

// bolo(print)//1

// bolo(print)

// pure--> always same
// function num (val){
//     return val +1;
// }
// console.log(val());

//impure function
// function num (val){
//         return val+(Math.random()*10);
//     }
//     console.log(num(2));


//arow function

// var arrow = (val) => {
// console.log('arrow function', val);
// }
// arrow("val---");




// today homeword --> 
// 1) post function-> anonumous, IIFE
// 2) bind function()--> homework
// 3) reusme->icon dil, homework, font heading, colors



//array padhke aana hai

// ********************12-5-21**************************//
//Settimeout
// what is settimeout
// --> widow object   i can use anywhere
// settimeout and setinterval

//yeh dono ek particular time ke baad program ko execute 
// karne ka kaam karte hai

//Settimeout --> 5 min
// 1) function 2) time

//setinterval ---> 5 min  add har 5 min
// video start ->>>>> add >>>>>>> add

// settime-out -> it is execute a function after waiting a
// specific time in a minisec
// 1000 MS - 1sec

// setinterval - run every 5 sec...


// Set timeout-->
// Example--->
// 1)

// function myfunction(){//2
//     console.log("first");//3  //1
//     setTimeout(function (){//4
// console.log("timeout");//6 //5
//     },6000) // ---> 6 sec  //7
//     console.log("outer");//8 //2
    
// }
// myfunction();//1
// console.log("hey") //3
// console.log("byr") //4


// set interval
// function myfunction(){
//     var date = new Date();
//     document.getElementById("time").innerHTML=date.toLocaleTimeString();
// }
//   var Time =  setInterval(myfunction,1000);

// function Hey(){
//     console.log("hello");
// }

//************************Array*****************8
// syntax
// var a = [0,2,3,4];
// var arr1=[1,2,3,4,5];
// var arr = arr1;

// // console.log(a);
// console.log(arr);

// 2 ways to make array
// 1) let arr=[]; ---->  USe this one
// 2) let arr = new Array(); ---> XX no use

// 1)
// let fruit = ["mango","orange","grapes","apple"];
// // console.log(fruit[1]);

// let TestArray = ["apple",2,true,{"name":"anuj"},
// function (){console.log("array-FUnction")}]

// console.log(TestArray[4]());

//object
// var ambesh={
//     name:"khushi",
//     name1:"aadity"
// }
// console.log(ambesh);

// 2) 2nd way to make array
// let arr = [5,2]
// let arr1 = new Array(5);
//1  long way 2 write
// 2 readable
//3 empty space 
// console.log("arr",arr);
// console.log("arr1",arr1);


//**************************methods

// 1)  toSting()
// we are using for make array to string
// array --- > string mai convert 

// let fruit = ["mango","orange","grapes","apple"];
// let no=[1,2,3,4,5]
// console.log(fruit);
// console.log(no.toString())

// 2) JOIN
// 1)convert string
// 2) add-on karta

// let fruit = ["mango","orange","grapes","apple"];
// console.log(fruit)
// console.log(fruit.join("*"))


// end value ke method---->

// 3) pop --> end ki value remove karna
// 1)its remove last element from the array
//2) it is affect your original array also

//  let fruit = ["mango","orange","grapes","apple","banana"];
// var k = fruit.pop() //--> last element vo remove kardo
//  console.log(k);
//  console.log(fruit)


// 4) push --> end mai value dalna
// 1) insert on index endor last;
// 2)its add the element your original array

// let fruit = ["mango","orange","grapes","apple","banana"];
// fruit.push("packet");
// console.log(fruit); //---->
// fruit.pop();
// console.log(fruit);//



//starting add and remove
// 1) shift() ---> starting value remove karna
//1) affect original array for remove item
//2) index 0

// let fruit = ["mango","orange","grapes","apple","banana"];
// var temp = fruit.shift(); //---> temp =mango
// console.log(fruit);//----->
// fruit.push("tech-stack");
// fruit.push("banana");
// // console.log(fruit);--->// b , m, o,g,a,b -->m,t,b
//                        //o,g,a,b,t,b
                         //m,t,b

// 2)unshift  --> // starting m value dalna

// 1)index par dalnega
// 2) affect original array ko
// let fruit = ["mango","orange","grapes","apple","banana"];
// fruit.unshift("khushi");
// console.log(fruit)

// let fruit = ["mango","orange","grapes","apple","banana"];
// fruit[0]= "kiwi"; //- 
// let value = fruit[0];//-
// console.log(value);// --->
// let temp =  fruit.shift();
// console.log(fruit); 



// ************************ 13-05-21

// ********Delete keyword

// we want any single element delete inside the array
// its affect original array
// problem--- empty space create
// let fruit = ["mango","orange","grapes","apple","banana"];
// delete fruit[2];
// delete fruit[1];
// console.log(fruit)

//*********splice
//----add kis postion
//---- delete value
//---- delete karle add karni hai
// its affect original array



// sytax ---->
// splice(excess pr index of new element should be added,
//      how many element should be remove , 
//               new element to be added)

// let fruit = ["mango","orange","grapes","apple","banana"];
// console.log(fruit);
// fruit.splice(2,0,"kiwi","banana", "kiwi");
// console.log(fruit);
// // fruit.splice(2,5);//grapes
// // console.log(fruit);
// var temp = fruit.splice(5,1);
// console.log(temp.toString());
// console.log(fruit);

//********concat
// merge
// its is not change exist array it return new array

// let fruit = ["mango","orange","grapes","apple","banana"];
// let fruit1 = ["kiwi","pinaple"];
// var backet =fruit.concat(fruit1);
// console.log(backet.join(","));


//********slice
// original array not change 
//slice contain a sub-array or piece of code 
//syntax --- array.slice(stating , up-to//  not include);
             //0       1        2        3        4
// let fruit = ["mango","orange","grapes","apple","banana"];
// // var sliced = fruit.slice(1);
// // console.log("fruit",fruit)
// var sliced = fruit.slice(1,3);
// console.log("sliced",sliced)
// // // var sliced = fruit.slice(1);

//********sort
//sorting on strin inside of array ------>
// let fruit = ["mango","orange","grapes","apple","banana"];
// fruit.sort();    //asscending
// console.log(fruit);
// //reverse
// fruit.reverse();
// console.log(fruit);

//sorting on no inside on array ----->
// let fruit = ["mango","orange","grapes","apple","banana"];
// let array = [110, 29, 31,3,00001, 11110];
// // array.sort();
// array.sort(function(a,b){return b-a})

// console.log(array);

//*****IndexOf
// let fruit = ["mango","orange","orange","grapes","banana","apple","banana"];
// console.log(fruit.indexOf("orange"),2);
// console.log(fruit.lastIndexOf("banana"));

//*******************LOOP **************/
//******************* */ DATE:-15-05-21******

// let fruit = ["mango","orange","grapes","apple","banana"];
// var spliced = fruit.slice(1,3);
// console.log(spliced);// --> orange and grapes
//  fruit.splice(0,2,spliced);
//  console.log(fruit)
// console.log(spliced);


// const b =10;
// //fix
// console.log(b);
// // let and const --->  temporal dead zone
// let a;
// console.log(a);


// (function(){console.log("aaditya")})();

// var a=11; //1 a=10
// function myfun(val){
//     val(); //jab yeh khatam hoga tab wapis aegega
//     console.log(a)
// }

// function print(){
//     console.log("print");

//     {
//         var a=10;
//         console.log(a);
//     }

//     console.log(a);

//     fun(a)
// }
// myfun(print);//2

// console.log(a);

// function fun(a){
//     console.log(a)

//     {
//         console.log(a);
//     }
// }



// var k=1;
// let a=10;

// {
   

//     console.log(a); //--->10
//     console.log(k); //--->1
// }

// console.log(k);    //--->1
// console.log(a);    //--->10

// loop start
//anonumous with recursion
// (function (val){
//     if(val>0){
//         console.log(val);
//     arguments.callee(--val);    
//     }
// // console.log(val)
// })(11);


// function myfun(n){
//     if(n>0){
//         console.log(n);
//         myfun(--n);
//     }
// }
// myfun(10); 


// var loop = [1,2,3,4,5];
// console.log(loop.length)
// for(var a=0; a<loop.length; --a){
//     console.log(loop[a]);
// }

// a=0; 0<

//******************** */ 15-05-21**********
// khushi :: aditya
// 10       :: 0
// 0        :: 10

// for of loop ---- of mtlab value array
// for in loop ----- index par kaam karna object
// forEach loop   ---- 

// let fruit = ["mango","orange","grapes","apple","banana"];
// for( var i=0; i<fruit.length;i++){
//     console.log("fruit",fruit[i]);
// }

// for(var a of fruit){
//     console.log(a)
// }

// var name = 1234;

// for(var a of name){
//     console.log(a)
// }

//******************for in

          
// var arr = ["a","b","c",{"name":"kashihs"}];
//console.log(arr[3].name)
// console.log(std.address)

//  var std={
//   arr:[
//       {"name":"khushi",
//     "phn_no":9090909
//     },
//       {"name":"aditya",
//     "phn_no":1234
//     }
//   ]

// ]
// }
// console.log(std);

    


// var std={
//     "id":1234,
//     "name":"Khushi",
//     "address":"git capus",
//     "phone_no":"8233432423"
//   }
//   var arr =[1,2,3,4,5]

// for(var e in std ){
//     console.log(std[e]);
// }
// let fruit = ["mango","orange","grapes","apple","banana"];

// //syntax 
// fruit.forEach(function(value, index){
// console.log(index,value)
// })

// var num = [1,2,3,4];
// var squareNo =[];

// num.forEach(function(val){ // val - 3
//     squareNo.push(val*val) // square - 0[1*1] 1[2*2] 2[3*3]
// })
// console.log(squareNo);


// map , filter , reduce --> method
// map --> 
// 1) operation --> each value par perform hota hai
// 2) its will make new array


// var num_fill = [1,2,3,4,5,6,7,8,112,13,15,18];
                
// var new_arr =num_fill.map(function(val){
//     // if(val>10){
//         return val* val;
//     // }
// })
// console.log(new_arr)

//filter 
// 1) operation ---> can filter the value by logical
// its will make new array
// var num_fill = [1,2,3,4,5,6,7,8,112,13,15,18];

// var new_arr =num_fill.filter(function(val){
//         if(val>10){
//             return val;
//         }
//     })

//     console.log(new_arr);

//reduce
// single value return


// var num_fill = [1,2,3,4,5,6,7,8];
// var sum = num_fill.reduce(myfunction)

// function myfunction(total, value){
//     return total + value;
// }
// console.log(sum);


//lexical scope

// function khushi(){//2
//     var name= "khushi-coder";
//     //3
//     function adi(){//5
//         var name="adi"
//  console.log(name);//6
//  return 1;
//     }
// return adi;//4
// }
// var temp = khushi(); //1
// console.log(temp());

// clourse
// lexical scope 
// temporal dead zone 



// this keyword

// JavaScript this refers to the object that
// the function belongs to. And the value of this depends
// on how the function is called, 
// something known as runtime binding

