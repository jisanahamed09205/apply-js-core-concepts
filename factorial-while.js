function factorial(numbers){
    let num = 1;
    let result = 1;
    while(num <= numbers){
        result *= num;
        num++;
    }
    return result;
}
const fact = factorial(5);
console.log(fact);
// 5! = 1*2*3*4*5