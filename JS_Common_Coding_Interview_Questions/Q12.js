// Adding Element in an Array
// Insert at beggining
// Insert at last 
// Insert at given position

function insertAtBeg(arr){
   //arr.push(12); //adding at end
   //arr.unshift(12); //adding at beggining
   //arr.shift(); // delete from beggining
   //arr.pop(); // delete from end 
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
// Insert Element at beggining without using inbuild functions

const arr=[1,3,4,5,8];

insertAtBeg(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}