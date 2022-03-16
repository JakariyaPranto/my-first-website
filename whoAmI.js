fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
    const name = data.results[0].name
    const fullName = `${name.title} ${name.first} ${name.last}`
    console.log(fullName);
})




// open weather map
fetch(`https://api.openweathermap.org/data/2.5/weather?q=mymensingh&appid=340317d3172c8aa4b1c8a87f12ffcc90`)
.then(res => res.json())
.then(data => console.log(data))





