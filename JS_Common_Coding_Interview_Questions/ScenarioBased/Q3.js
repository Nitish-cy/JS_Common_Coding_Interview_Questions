// reverse the words of given string
let str = "Javascript Code";

// let str1 = str.split(" ");
// console.log(str1);
// let strrev = "";
// for (let i = 0; i < str1.length; i++) {
//   strrev = strrev +" "+ reve(str1[i]);
//   console.log(strrev);
// //strrev = str1[i] +" "+ strrev ;
//  }
// function reve(str) {
//   let strrev = "";
//  // console.log(str)
//   for (let i =str.length-1;i>=0; i--) {
//     strrev = strrev + str.charAt(i);
   
//   }

//   return strrev
// }
// Using Map
let res=str.split(' ')
let res2=res.map((item=>
  item.split('').reverse().join(''))
).join(' ')

console.log(res2);
