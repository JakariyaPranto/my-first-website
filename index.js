const x = "I am      Pranto,  and i am from bangladesh"
let y = 0;
for(let i = 0; i < x.length; i++) {
    let latter = x[i]
    if(latter == " " && x[i - 1] != " ") {
        y++
    }
}
y++
console.log(y);