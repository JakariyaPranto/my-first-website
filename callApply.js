const normalPerson = {
    firstName: 'jakariya',
    lastName: 'Pranto',
    salary: 15000,
    fullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Arman',
    salary: 20000
}

const frindlyPerson = {
    firstName: 'Real',
    lastName: 'Hasan',
    salary: 22000
}

// This is bind function
// const result = normalPerson.chargeBill.bind(frindlyPerson)
// result(1000)
// result(1000)
// result(5000)
// console.log(frindlyPerson.salary);


// This is call function, ekhane ekadhik peramiter pas kora jabe and segulo koma diye dite hobe
// console.log(frindlyPerson.salary);
// normalPerson.chargeBill.call(frindlyPerson, 500)
// console.log(frindlyPerson.salary);
// normalPerson.chargeBill.call(frindlyPerson, 1500)
// console.log(frindlyPerson.salary);



// This is apply function, ekhane ekadhik peramiter pas kora jabe, and segolu array hisebe dite hobe
// normalPerson.chargeBill.apply(frindlyPerson, [500])
// console.log(frindlyPerson.salary);
// normalPerson.chargeBill.apply(frindlyPerson, [1500])
// console.log(frindlyPerson.salary);





class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const student1 = new Student('Pranto', 22, 1)
const student2 = new Student('Babu', 24, 2)
console.log(student2.age);