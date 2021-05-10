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




