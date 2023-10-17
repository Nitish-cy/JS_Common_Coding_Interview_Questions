// Convert 12 hr time to 24 hr
let time='01:02 PM'
const convert=(time12)=>{
    let [tim,modifier]=time12.split(" ");
    console.log(tim + "---: " + modifier)
    let [hr,min]=tim.split(":")
    console.log(hr + "---: " + min)

    if(hr==="12") hr="00"
    if(modifier==='PM') hr=parseInt(hr)+12
    return `${hr}:${min}`
}
console.log(convert("01:02 PM"))
console.log(convert("12:02 PM"))