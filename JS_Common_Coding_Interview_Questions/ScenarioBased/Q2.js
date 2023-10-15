//Second Largest Element

const arr=[1,2,3,4,5,6]

function func1(arr){
    let arr1=[...new Set(arr)].sort((a,b)=>a-b)
    return arr1[arr1.length-2]
}

//Second Approach
function func2(arr){
    let secondh;
    let highest=-1;
    for(let i=0;i<arr.length;i++){
        if(highest<arr[i]){
            secondh=highest;
            highest=arr[i];
        }
    }
    return secondh;
}
console.log(func1(arr))
console.log(func2(arr))