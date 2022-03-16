

function activityFun() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        document.getElementById('activity-tusk').innerText = data.activity
    })
}

setInterval(() => {
    activityFun()
}, 3000)