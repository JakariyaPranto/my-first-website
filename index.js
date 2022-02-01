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
document.querySelector('#menu').addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target)
})

const btn = document.querySelector('button')
btn.addEventListener('click', function(event) {
    const menu = document.querySelector('#menu')
    const newItem = document.createElement('li')
    newItem.innerText = 'new'
    menu.appendChild(newItem)
})


function welcome(name, morning) {
    morning(name)
}

const gestName = 'jarariya'
function goodMorning(cName) {
    console.log('Good Morning', cName);
}

welcome(gestName, goodMorning)
