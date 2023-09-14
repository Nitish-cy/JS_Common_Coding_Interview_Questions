//Rearrange array in increasing-decreasing order
// function countFreq(arr){
//     return arr.sort();
// }
    
    let arr=[10,5,10,15,10,5];
    //const res=countFreq(arr);
    console.log(arr.sort((a,b)=>{return a-b}));
    console.log(arr)
//    res.forEach((elements)=>{
//     console.log(elements)
//    })
    