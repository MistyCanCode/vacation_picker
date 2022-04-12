//import {config} from './config.js'
//const KEY = config.API_KEY;
const KEY = process.env.API_KEY;

document.querySelector('#earth').addEventListener('click', getVacation)
document.querySelector('#air').addEventListener('click', getVacation)
document.querySelector('#fire').addEventListener('click', getVacation)
document.querySelector('#water').addEventListener('click', getVacation)


function getVacation(event){

    const category = event.target.value
    console.log(category)
   

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
            'X-RapidAPI-Key': `${KEY}`
        }
    };

    fetch(`https://webcamstravel.p.rapidapi.com/webcams/list/category=${category}?lang=en&show=webcams%3Aimage%2Clocation`, options)
        .then(response => response.json())
        .then(response => {
            let index = Math.ceil(Math.random() * response.result.webcams.length - 1)
            console.log(index)
            console.log(response)
            console.log(response.result.webcams[index].title)
            document.querySelector('.display').style.visibility = 'visible'
            document.querySelector('#title').innerText = response.result.webcams[index].location.city
            console.log(response.result.webcams[index].image.daylight.preview)
            document.querySelector('#daylight').src = response.result.webcams[index].image.daylight.preview
            document.querySelector('#dayP').innerText = `During the day in ` + response.result.webcams[index].location.city
            // console.log(response.result.webcams[index].image.current.preview)
            // document.querySelector('#current').src = response.result.webcams[index].image.current.preview
            // document.querySelector('#currentP').innerText = `Current view of ` + response.result.webcams[index].location.city
            console.log(response.result.webcams[index].location.city)
            console.log(response.result.webcams[index].location.country)
            console.log(response.result.webcams[index].location.region)
            document.querySelector('#city').innerText = response.result.webcams[index].location.city + ", " +response.result.webcams[index].location.region + ", " + response.result.webcams[index].location.country
            console.log(response.result.webcams[index].location.wikipedia)
            document.querySelector('#wikiLink').href = response.result.webcams[index].location.wikipedia
            document.querySelector('#wiki').innerText = response.result.webcams[index].location.wikipedia           
            document.querySelector('#refresh').innerText = 'Refresh page to try again'
        })
        .catch(err => console.error(err));
}
