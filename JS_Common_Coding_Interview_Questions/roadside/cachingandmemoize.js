
//Implement Caching/Memoization in function
function memoIze(fn,context){
    const res={}
    return function(...args){
        var argsCache=JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache]=fn.call(context || this ,...args)
        }
        return res[argsCache]
    }
}

const clumsysquare=(num1,num2)=>{
        for(let i=1;i<=1000000;i++){
            return num1*num2;
        }
}

const Mymemoize=memoIze(clumsysquare)

// console.time('First Call')
// console.log(clumsysquare(9467,7456))
// console.timeEnd('First Call')

// console.time('First Call')
// console.log(clumsysquare(9467,7456))
// console.timeEnd('First Call')

// console.time('First Call')
// console.log(Mymemoize(9467,7456))
// console.timeEnd('First Call')

// console.time('Second Call')
// console.log(Mymemoize(9467,7456))
// console.timeEnd('Second Call')

// Infinite curring

//1 . Normal Curring
function add(a){
    return function(b){
            return a+b        
    }
}

// 2. Infinite Curring
function add(a){
    console.log(a)
    return function(b){
        if(b){
            console.log(b)
            return add(a+b)
        }
        console.log(a)
        return a;
    }
}

//console.log(add(1)(2)(2)(2)(2)())

//Implement this code 
const calc={
    total:0,
    add(a){
        this.total+=a
        return this
    },
    multiply(a){
        this.total*=a
        return this
    },
    substract(a){
        this.total-=a
        return this
    }

}
const result=calc.add(10).multiply(5).substract(30).add(10)
console.log(result.total)
