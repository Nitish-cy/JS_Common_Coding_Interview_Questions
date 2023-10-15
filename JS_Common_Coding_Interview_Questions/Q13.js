// Rotate Array by two place

let input1=[1,2,3,4,5]
const output=[3,4,5,1,2]
let k=2;

function func1(input1){
    for(let i=0;i<k;i++){
        //console.log(input1.shift())
        input1.push(input1.shift())
    }
    return input1;
}

//Second Solution
function func2(input1){
    for(let i=0;i<k;i++){
        //console.log(input1.shift())
        let temp=input1[0]
        for(let i=0;i<input1.length;i++){
            input1[i]=input1[i+1];
        }
        input1[input1.length-1]=temp;
    }
    return input1;
}
//Using Two Pointer
function func3(input1){
    let fpt=0
    let lpt=input1.length-1
    while(fpt<lpt && fpt<k){
        let temp =input1[fpt];
        input1[fpt]=input1[lpt]
        input1[lpt]=temp;
        fpt++;
        lpt--;
    }
    return input1;
}

// console.log(func3(input1))


// console.log(func1(input1))
console.log(func2(input1))