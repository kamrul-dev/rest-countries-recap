//load rest countries data
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
// display countries
const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

}

// original
/* const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
} */

// create html element using function and template string
// option : 1 for object destructiuring
/* const getCountryHTML = country => {
    // option: 1
    const {name, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
} */


// option: 2 for object destructuring
const getCountryHTML = ({name, flags, area}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();
