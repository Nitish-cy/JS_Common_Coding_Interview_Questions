//Find Second Smallest and Second Largest Element in an array

//Find the Largest element in an array
function smallest(){
    const arr=[10,2,30,-4,-5,50,600];
   // var smValue=0;
   let smValue=arr[0];
   let secondSm=0;
    for(let i=0;i<arr.length;i++)
    {
        //let sm=arr[0]
       
        if(arr[i]<smValue)
        {
            secondSm=smValue;
            smValue=arr[i];
            //sm=arr[i];
           // console.log(smValue);
        }
    }
    return secondSm;
}
const ans=smallest();
console.log(ans);