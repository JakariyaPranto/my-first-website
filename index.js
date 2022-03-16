//js First Assingment
/*
function kmToMiter(num) {
    return num * 1000
}
const result = kmToMiter(5)
console.log(result);
*/

//========================================

/*
function baduget(watch, phone, laptop) {
    const watchPrise = 100
    const phonePrise = 200
    const laptopPrise = 500

    const result = (watch * watchPrise) + (phone * phonePrise) + (laptop * laptopPrise)
    return result
}

const maney = baduget(2, 4, 2)
console.log(maney);
*/

//=======================================================

/*
function hotelCost(days) {
    let cost = 0
    if(days <= 10) {
        cost = days * 200
    }
    else if(days <= 20) {
        cost = ((days - 10) * 100) + 2000
    }
    else {
        cost = ((days - 20) * 50) + 3000
    }
    return cost
}

const result = hotelCost(23)
console.log(result);
*/

//====================================

/*
function megaFriend(names) {
    let bigName = ""
    for(let i = 0; i < names.length; i++) {
        let fName = names[i]
        if(fName.length > bigName.length) {
            bigName = fName
        }
    }
    return bigName
}
const friends = ['babu', 'pranto', 'jakariya', 'real', 'arman', 'PrantoBabu']
const result = megaFriend(friends)
console.log(result);
*/


// const items = document.getElementsByClassName('item')
// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target)
//     })
    
// }


// event babol
// document.querySelector('#menu').addEventListener('click', function(event) {
//     event.target.parentNode.removeChild(event.target)
// })

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(event) {
//     const menu = document.querySelector('#menu')
//     const newItem = document.createElement('li')
//     newItem.innerText = 'new'
//     menu.appendChild(newItem)
// })


// class
// class Teacher {
//     constructor() {
//         this.teacherName = 'anisul islam'
//     }
// }
// class Student extends Teacher {
//     constructor(sId, sName,) {
//         super()
//         this.id = sId
//         this.name = sName
//         this.school= 'cse'
//     }
// }
// const pranto = new Student(1, 'Pranto')
// const babu = new Student(1, 'Babu')
// console.log(pranto, babu);



// const x = [
//     {id: 21, name: 'jakariya'},
//     {id: 22, name: 'pranto'},
//     {id: 23, name: 'babu'}
// ]

// for (let i = 0; i < x.length; i++) {
//     let element = x[i]
//     let y = element.name
//     console.log(y);
// }




