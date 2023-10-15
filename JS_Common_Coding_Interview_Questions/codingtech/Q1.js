
//Curring Ex
function area(l,b,h){
    return l*b*h;
}

console.log(area(1,2,3))

//Curring

function area1(l){
    return function(b)
    {
        return function(h){
            return l*b*h;
        }
    }
}

console.log(area1(1)(2)(3))

// CallBack hell
const n1=(CallBack)=>{
    setTimeout(()=>{CallBack([1,2,3,4,5])}
    ,2000)
}
//const nums=[1,2,3,5]
const add=(nums)=>{
    //let sum =0;
    console.log( nums.reduce((acc,curr)=>acc+=curr,0))
}

n1(add)

// Curring 

const obj={
    name:'Nitish',
    age:23
}

function getName(data,key){
    return data[key]
}

// console.log(getName(obj,'name'))
// console.log(getName(obj,'name'))
//we have to pass object and key every time but we can resolve it by using curring 
function getNameCurr(data){
    return function(key){
        return data[key]
    }
}

const getCurr=getNameCurr(obj);
console.log(getCurr('name'))

// Call
let obj2={
    firstName:'Nitish',
    lastName:'Mishra'
}
function f1(val){
    return val + ' ' + this.firstName + ' ' + this.lastName;
}

//console.log(f1.apply(obj2,['Hello','mi']))

//Create copy of Object
console.log(obj2)
const objCopy=obj2 // this is working on reference bases so it will change in actual object as well
const objCopy2={...obj2} // Actual object will remain same
//or
const objCopy3=Object.assign({},obj2)
objCopy2.firstName='shubham'
objCopy3.firstName='shubham'
 console.log(obj2)
// console.log(objCopy)
//console.log(objCopy2)
console.log(objCopy3)
//++++++++++++++++++++++===================================+++++++++++++++++++++++++++++++++++
//