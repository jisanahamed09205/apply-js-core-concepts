// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInch = 160;
// const dadaFeet = dadaInch / 12;
// console.log("Dada Feet", dadaFeet);

// const dadiInch = 600;
// const dadiFeet = dadiInch / 12;
// console.log("Dadi Feet",dadiFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInch = 500;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);