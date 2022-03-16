fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => users(data))
.catch(err => console.log(err.message))

function users(users) {
    const menu = document.getElementById('menu')

    users.map(user => {
        const li = document.createElement('li')
        li.innerText = user.name
        menu.appendChild(li)
    })  
}






document.getElementById('submit').addEventListener('click', () => {
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value

    const jsonObject = {
        titel: title,
        body: body,
        country: 'Bangladesh'
    }
    postSurver(jsonObject)
})



function postSurver(posts) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(posts),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

