const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const form = document.getElementById('search-form');
const suggestions = document.querySelector('.suggestions');
const searchBox = document.getElementById('search-box');

searchBox.value = '';
const cities = [];

const prom = fetch(endpoint)
                .then(stuff => stuff.json())
                .then(data => cities.push(...data));


function updateResults() {
    let cityNames = cities
                        .map(place => place['city'].toLowerCase());
                        //.filter(thing => thing.includes(searchBox.textContent));

    let relevantCities = [...cityNames];
    return relevantCities;
};


function outputCities() {
    let text = searchBox.value.toLowerCase();
    let relevantCities;
    suggestions.innerHTML = '';

    relevantCities = updateResults().filter(city => city.includes(text));
    relevantCities.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.textContent = element;
        suggestions.appendChild(newDiv);
    });
}

searchBox.addEventListener('input', outputCities);
form.addEventListener