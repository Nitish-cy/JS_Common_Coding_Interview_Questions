
// Find Missing Number

let input=[5,7,9,11,15,17]

function findMissing(input){
    let num;
    let temp=input[0]
    for(let i=1;i<input.length;i++){
        num=temp+2;
        // console.log(num , input[i])
        if(input[i]!=num){
            break;
        }
        temp=input[i]
    }
    return num;
}

console.log(findMissing(input))