let obj={
    name:'Nitish',
    lastName:'Mishra',
    address:{
        city:'Sultanpur',
        state:"UP"
    }
}

const copy={...obj}
copy.name='Shubham'// this will not change actual obect
//copy.address.city='Prayagraj' // change in both real and copy object- this is known as Shallow copy bcz
// nested object will change
console.log(obj)
// console.log(copy)

//Deep Copy
const deepCopy=structuredClone(obj)
deepCopy.address.city='Lambhua'
console.log(deepCopy)
//O/P //{
//     name: 'Nitish',
//     lastName: 'Mishra',
//     address: { city: 'Sultanpur', state: 'UP' }
//   }
//   {
//     name: 'Nitish',
//     lastName: 'Mishra',
//     address: { city: 'Lambhua', state: 'UP' }
//   }


// Closure

function closure(){
    let counter=0;
    return function(){
        counter++;
        console.log(counter);
    }
}

const ans1=closure();
console.log(ans1)

ans1()
ans1()
ans1()
ans1()

//String Immutability
let str='Heloo'
str[1]=3
str='mishra'
console.log(str)