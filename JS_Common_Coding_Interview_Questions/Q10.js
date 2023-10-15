//Remove Duplicates in-place from Sorted Array

// let arr = [1, 2, 5, 2, 3, 3, 3, 3, 4, 3];
// const n = arr.length;
// const newSet=new Set();
// for(let i=0;i<n;i++)
// {
//     newSet.add(arr[i]);
// }
// console.log(newSet)

// Remove duplicate elements in place

function removeDuplicate(arr){
    let set=new Set(arr);
    let newArr=Array.from(set);
    for(let i=0;i<newArr.length;i++)
    {
        arr[i]=newArr[i];
        //console.log(arr[i])
    }
    //console.log(arr.length)
    //console.log(newArr.length)
   return newArr.length;
}

const arr=[1,1,2,2,2,2,3,3,4,5,5,6,6]
const k=removeDuplicate(arr);
for(let i=0;i<k;i++){
    console.log(arr[i])
}

// Using Two Pointer Approach

// function removeDuplicate(arr){
//     let i=0;
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]!=arr[j])
//         {
//             i++;
//             arr[i]=arr[j]
//         }
//     }
//     return i+1;
// }

// const arr=[1,1,1,2,2,2,2,3,3,4,5,5,6,6]
// let k=removeDuplicate(arr);
// for(let i=0;i<k;i++){
//     console.log(arr[i])
// }