fetch('http://api.openweathermap.org/data/2.5/weather?id=2741623&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function(resp) { return resp.json()}) 
    .then(function(data){
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 285) + '&deg;';
        document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer').textContent = data.weather[0] ['description'];
        document.getElementById('li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        
})

fetch('http://api.openweathermap.org/data/2.5/weather?id=6087575&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name2').textContent = data.name;
        document.querySelector('.price2').innerHTML = Math.round(data.main.temp - 262) + '&deg;';
        document.querySelector('.humidity2').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer2').textContent = data.weather[0]['description'];
        document.getElementById('li2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })

fetch('http://api.openweathermap.org/data/2.5/weather?id=2510769&appid=d36630cb5c95621c96f81e8c2e7e0208')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        document.querySelector('.package-name3').textContent = data.name;
        document.querySelector('.price3').innerHTML = Math.round(data.main.temp - 276) + '&deg;';
        document.querySelector('.humidity3').innerHTML = Math.round(data.main.humidity) + '%';
        document.querySelector('.disclaimer3').textContent = data.weather[0]['description'];
        document.getElementById('li3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})


let tУrmCanada = 12;
let tУrmNewGermany = 30;
let tУrmSpain = 25;
var tУrm = tУrmNewGermany + tУrmCanada + tУrmSpain;
var tУrm = tУrm/3;
alert("the average term " + tУrm +" degree ");

let humidityCanadA = 61;
let humidityNewGermanY = 54;
let humiditySpaiN = 45;
var humidity = humidityNewGermanY + humidityCanadA + humiditySpaiN;
var humidity = humidity / 3;
alert("the average humidity " + humidity + " %");
alert(Math.max(humidityNewGermanY, humidityCanadA, humiditySpaiN) + "% Max humidity");

function termI(numArray) {
    let term = {
        Canada: 12,
        NewGermany: 30,
        Spain: 25.        
    };
    for (let key in term) {
        alert(key);
        alert(term[key]); 
    }
    function getMaxOfArray(numArray) {
        return Math.max(tУrmNewGermany, tУrmCanada, tУrmSpain) + "Max term";
    }
    alert(getMaxOfArray(numArray));
}

termI();