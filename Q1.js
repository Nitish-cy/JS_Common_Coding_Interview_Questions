//Find the smallest element in an array


function smallest(){
    const arr=[10,2,30,-4,50,60];
   // var smValue=0;
   let smValue=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        //let sm=arr[0]
       
        if(arr[i]<smValue)
        {
            smValue=arr[i];
            //sm=arr[i];
           // console.log(smValue);
        }
    }
    return smValue;
}
const ans=smallest();
console.log(ans);

// Usong Inbuild Methods
// const arr=[10,2,30,4,50,60];
// const smallest = Math.min(...arr);
// console.log(smallest)

// function findSmallestNumber(arr) {
//     if (arr.length === 0) {
//         return undefined; // Handle empty array
//     }

//     let smallest = arr[0]; // Assume the first element is the smallest

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }

//     return smallest;
// }

// const numbers = [5, 3, 9, 1, 7, -2];
// const smallest = findSmallestNumber(numbers);

// console.log("The smallest number is:", smallest);
