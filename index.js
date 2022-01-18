function leapYear(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return(`${year} this year is leap year`)
    } else {
        return(`${year} This year is not leap year`)
    }
}

const giveYear = prompt("Enter your year") 

const result = leapYear(giveYear)

document.querySelector("h2").innerHTML = result




// function leapYear(year) {
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return(`${year} this year is leap year`)
//     } else {
//         return(`${year} This year is not leap year`)
//     }
// }

// const giveYear = prompt("Enter your year") 

// const result = leapYear(giveYear)

// document.querySelector("h2").innerHTML = result