function fibonacci(num) {
    const x = [0, 1]

    for(let i = 2; i < num; i++) {
        x[i] = x[i - 2] + x[i - 1]
    }
    return x
}

const result = fibonacci(10)
console.log(result);