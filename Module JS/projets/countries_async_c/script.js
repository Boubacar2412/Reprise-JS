'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   request.addEventListener('load', function (e) {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" alt="${
//       data.flags.alt
//     }" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${Number(
//               data.population / 1_000_000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//         </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('guinea');
// getCountryData('usa');
// getCountryData('germany');

const getCountryData = function (countryName) {
  // AJAX call main country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener('load', function (e) {
    const [data] = JSON.parse(this.responseText);

    console.log(data);
    // Render main country
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call neighbour country
    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbour}
`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', function (e) {
      const [data] = JSON.parse(this.responseText);

      console.log(data);
      // Render neigbour country
      renderCountry(data, 'neighbour');
    });
  });
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className} ">
      <img class="country__img" src="${data.flags.png}" alt="${
    data.flags.alt
  }" />
      <div class="country__data">
          <h3 class="country__name">${data.name.official}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${Number(
            data.population / 1_000_000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
      </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// getCountryData('guinea');
getCountryData('usa');

// Calback hell
setTimeout(() => {
  console.log('1 second passed 1rst call');
  setTimeout(() => {
    console.log('1 second passed 2nd call');
    setTimeout(() => {
      console.log('1 second passed 3rd call');
      setTimeout(() => {
        console.log('1 second passed 4rth call');
        setTimeout(() => {
          console.log('1 second passed 5 call');
          setTimeout(() => {
            console.log('1 second passed 6 call');
            setTimeout(() => {
              console.log('1 second passed 7 call');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
