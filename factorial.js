// 1 * 2 * 3 * 4 * 5 * 6 * 7
function factorial(numbers){
    let result = 1;
    for(let i = 1; i <= numbers;i++){
        result *=  i;
        // console.log(i, result);
    }
    return result;
}
const result = factorial(9);
console.log(result);