// Find Common values in Two Objects
const input1={a:1,b:2,c:3,d:4,e:3}
const input2={a:2,e:3,d:2,f:5}

function func1(input1,input2){
    let obj={}

    for(let i in input1){
       // console.log(i)
        if(input1[i]==input2[i])
        {
            //console.log('a1')
            obj[i]=input1[i]
            //console.log(obj[i])
        }
    }
    return obj;
}

console.log(func1(input1,input2))