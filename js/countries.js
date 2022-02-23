const countries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
countries();

const displayCountries = countries => {
    console.log(countries)
    const countriesDiv = document.getElementById('countries');

    // use forEach
    countries.forEach(country => {
        console.log(country);

        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
<h3>${country.name.official}</h3>
<button onclick = loadDetails('${country.name.common}')>Details</button>
`
        countriesDiv.appendChild(div);
    });

    // use for of
    /*  for (const country of countries) {
         console.log(country);
 
         const div = document.createElement('div');
         div.classList.add('country');
         const h3 = document.createElement('h3');
         h3.innerText = country.name.official;
 
         const p = document.createElement('p');
         p.innerText = country.capital;
         div.appendChild(h3);
         div.appendChild(p);
         countriesDiv.appendChild(div);
 
     } */
}

const loadDetails = name => {
    console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountyDetails(data[0]))
}

const displayCountyDetails = data => {
    // console.log(data)
    const sec = document.getElementById('contryDetails')
    sec.innerHTML = `<h2>${data.name.common}</h2>
    <p> population ${data.population}</p>
    <img width="200px" src="${data.flags.png}">
    `
}