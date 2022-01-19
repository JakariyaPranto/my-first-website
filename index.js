
function factorial(number) {
    if(number < 0) {
        return 'Stupid'
    } 
    else if(number == 0) {
        return '1'
    } 
    else {
        // let x = 1;
        // for(let i = 1; i <= number; i++) {
        //     x *= i
        // }
        return number * factorial(number - 1)
    }
}

const factNum = 10
const live = factorial(factNum)
document.querySelector('h2').innerHTML = `The factorial of ${factNum} is ${live}`