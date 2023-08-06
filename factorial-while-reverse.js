function factorial(numbers){
    let num = numbers;
    let result = 1;
    while(num >= 1){
        result *= num;
        num --;
    }
    return result;
}
const fact = factorial(5);
console.log(fact);