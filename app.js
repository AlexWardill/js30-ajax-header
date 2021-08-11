const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const form = document.getElementById('search-form');
const suggestions = document.querySelector('.suggestions');

const cities = [];

const prom = fetch(endpoint)
                .then(stuff => stuff.json())
                .then(data => cities = data);
