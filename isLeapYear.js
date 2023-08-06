// function isLeapYear(year){
    // const remainder = year % 4;
    // if(remainder === 0){
        //// console.log("Your year is a Leap Year", year);
        // return true;
    // }
    // else{
        //// console.log("Your Year is not a leap Year", year);
        // return false;
    // }
// }

// shortcut way

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const notLeapYear = isLeapYear(1923);
console.log("My Year is",notLeapYear);

const leapYear = isLeapYear(120);
console.log("My Year is",leapYear);