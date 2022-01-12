function leage(num) {
    let largeNum = [0]
    for(let i = 0; i < num.length; i++) {
        let x = num[i]
        if(largeNum < x) {
            largeNum = x
        }
    } 
    return largeNum
}

const output = leage([5, 2, 7, 9, 1])
console.log(output)