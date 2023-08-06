function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
function getOddOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddOfAnArray(myNumbers);
console.log(oddNumbers);
getSumOfAnArray(myNumbers);