// LRU(Least Recently Used) Cache
//name:'Nitish'
//age:'23'
//profession:'SDE'
//hobbies:'tech'
//location:'Noida'

class LRU{
    constructor(max=5){
        this.max=max;
        this.cache=new Map();
    }
    get(key){
        let item=this.cache.get(key)
        if(item){
            this.cache.delete(key)
            this.cache.set(key,value)
        }
        return item;
    }
    set(key , value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }
        else if(this.cache.size===this.max){
            this.cache.delete(this.first())
        }
        this.cache.set(key,value)
    }
    first(){
        return this.cache.keys().next().value;
    }
}

const lruCache=new LRU(3)
lruCache.set("name","Nitish")
lruCache.set("Lastname","Mishra")
lruCache.set("age","23")
lruCache.set("add","Ramgarh")

console.log(lruCache.cache)