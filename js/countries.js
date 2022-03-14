//load rest countries data
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
// display countries
const displayCountries = countries =>{
    console.log(countries);
}
loadCountries();