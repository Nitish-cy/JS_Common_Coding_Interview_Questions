// Find Median of the given Array

let arr = [1, 2, 5,];
const n = arr.length;
let ans = 0;
let m = Math.floor(n / 2);
if (n % 2 == 0) {

    ans = (arr[m - 1] + arr[m]) / 2;
}
else {
    ans = arr[m];
}
console.log(ans)