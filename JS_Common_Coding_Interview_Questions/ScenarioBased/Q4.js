//Find Maximum Occurin Character

let str="This is JavaScript Code and you to find max Char"
let map=new Map();
for(let i=0;i<str.length;i++){
    if(map.has(str[i])){
        map.set(str[i],map.get(str[i])+1)
    }
    else{
        map.set(str[i],1)
    }
}
let maxval=0;
let char;
map.forEach((key,value)=>{
    
    if(key>maxval && value!=' ')
    {
        maxval=key;
        char=value
        //console.log(maxval)
    }
   // console.log(key + "   " + value)
})
console.log(maxval + "   " + char)
//console.log(map)
// let res=str.split(' ');
// let res1=0
// function charCount(res){
//     for(let i=0;i<res.length;i++)
//     {
//         res1=chCount(res[i])
//     }
// }
// function chCount(str){
//     //const map=
//     let ch;
//     let cnt=0
//      let prevCnt=0;
//     let ress=''
//     for(let i=0;i<str.length;i++){
//         ch=str[i]
//         cnt=0;
//         if(str[i]==ch)
//         {
//             cnt++;
//         }
//         if(cnt>prevCnt)
//         {
//             prevCnt=cnt;
           
//         }
//     }
//     console.log(prevCnt)
//     return ch;
// }
//let res2=res.
//console.log(charCount(res))