//Rearrange array in increasing-decreasing order
// function countFreq(arr){
//     return arr.sort();
// }
    
    let arr=[1,3,2,4,6,5];
    //const res=countFreq(arr);
    console.log(arr.sort((a,b)=>{return a-b}));
    const n=arr.length;
    console.log(arr)
    const newArr=[];
    // for(let i=0;i<=arr.length/2;i++)
    // {
    //     newArr.push(arr[i]);
    // }
    // console.log(newArr)
    const incr=arr.slice(0,Math.ceil(n/2))
    const descr=arr.slice(Math.ceil(n/2)).reverse();

    for(let i=0;i<n/2;i++)
    {
        newArr.push(incr[i])
    }
    for(let i=0;i<n/2;i++)
    {
        newArr.push(descr[i])
    }

   newArr.forEach((elements)=>{
    console.log(elements)
   })
    