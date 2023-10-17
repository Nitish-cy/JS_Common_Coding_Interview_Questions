// Panagram String checker

//ex-: The quick brown fox jumps over a lazy dog

function checkPangram(str){
    const arr=new Array(26).fill(false)
    //console.log(arr)
    let index;
    for(let i=0;i<arr.length;i++){
        // if(str[i]>='A' && str[i]<='Z'){
        //     index=str.charCodeAt(i)-'A'.charCodeAt(0);
        //     arr[index]=true;
        // }
        // else if(str[i]>='a' && str[i]<='z'){
        //     index=str.charCodeAt(i)-'a'.charCodeAt(0);
        //     arr[index]=true;
        // } or
        const char = str[i].toLowerCase(); // Convert the character to lowercase
        if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index] = true;
        }
    }
    console.log(arr)
    for(let i=0;i<arr.length;i++){
        if(arr[i]===false){
            //console.log(str[i])
            return false;
        }
    }
    return true
}
let str='The quick brown fox jumps over a lazy dog'
console.log(checkPangram("The quick brown fox jumps over a"))