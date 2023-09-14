//Count frequency of each element in the array
//Brute force
// function countFreq(arr){
   
//     let visited=[];
//   for(let i=0;i<arr.length;i++){
//     let count=1
//     if(visited[i]==true)
//         continue;
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             visited[j]=true;
//             count++;
//            // console.log(count)
//             //console.log(j + " " + i)
//         }
//        // console.log(j + " " + i)
//     }
//     console.log(arr[i] + " : " + count)
//   }  
//   //console.log(visited)
// }

// let arr=[10,5,10,15,10,5];
// countFreq(arr);

// Using Map -:

function countFreq(arr){
const newMap=new Map();
for(let element of arr){
    if(newMap.has(element))
    {
        newMap.set(element,newMap.get(element)+1);
    }
    else{
        newMap.set(element,1);   
    }
}
return newMap;
}

let arr=[10,5,10,15,10,5];
const res=countFreq(arr);
console.log(res)
res.forEach((count, element)=>{
    console.log(`element ${element}-> occurence is -> ${count}`)
})


