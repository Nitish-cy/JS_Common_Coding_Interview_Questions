//Remove Duplicates From an Unsorted Array

// function removeDuplicate(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr[i]=1;
//     }
//     for(let i=0;i<arr.length;i++){
//         if(newArr[i]==1){
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                     newArr[j]=0;
//                 }
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(newArr[i]==1){
//             console.log(arr[i]);
//         }
//     }
// }

// const arr=[1,4,4,4,2,2,3,3,66,66,7,7,8,8];
// removeDuplicate(arr);

//Using HashMap 
function hashMap(arr){
    const map=new Map();
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            console.log(arr[i])
            map.set(arr[i]);
        }
    }
}

const arr=[1,4,4,4,2,2,3,3,66,66,7,7,8,8];
hashMap(arr);