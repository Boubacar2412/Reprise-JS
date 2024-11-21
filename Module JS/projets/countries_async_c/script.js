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
// getCountryData('usa');

// // Calback hell
// setTimeout(() => {
//   console.log('1 second passed 1rst call');
//   setTimeout(() => {
//     console.log('1 second passed 2nd call');
//     setTimeout(() => {
//       console.log('1 second passed 3rd call');
//       setTimeout(() => {
//         console.log('1 second passed 4rth call');
//         setTimeout(() => {
//           console.log('1 second passed 5 call');
//           setTimeout(() => {
//             console.log('1 second passed 6 call');
//             setTimeout(() => {
//               console.log('1 second passed 7 call');
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getCountryDataPromise = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

//   request
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data);
//     });
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataPromise = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found ${country} (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       if (!data) return;

//       console.log(data);

//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(responseNeighbour => responseNeighbour.json())
//     .then(dataNeigbour => renderCountry(dataNeigbour[0], 'neighbour'))
//     .catch(error => renderError(`Something went wrong 🛑 ${error.message}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryDataPromise('usa');
// });

// getCountryDataPromise('Guinno');

// console.log('Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Result promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; ) {
//     console.log(res);
//   }
// });

// console.log('End');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🎟️');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You won the lottery 💸');
//     } else {
//       reject(new Error('You lost your money 😭'));
//     }
//   }, 4000);
// });

// lotteryPromise
//   .then(result => console.log('Success : ', result))
//   .catch(err => renderError(err));

// setTimeout(() => {
//   console.log('I waited 2 secons');
//   setTimeout(() => {
//     console.log('I waited 3 secons');
//     setTimeout(() => {
//       console.log('I waited 2 secons');
//       setTimeout(() => {
//         console.log('I waited 1 secons');
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }, 2000);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(5)
//   .then(() => {
//     console.log('I promise waited 5 secons');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I promise waited 2 secons');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I promise waited 3 secons');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I promise waited 3 secons');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I promise waited 3 secons');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I promise waited 3 secons');
//     return wait(3);
//   })
//   .then(() => {
//     console.log('I promise waited 3 secons');
//     return wait(3);
//   });

// Promise.resolve('success').then(result => console.log(result));
// Promise.reject('error').catch(result => console.error(result));

// console.log('Getting position...');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error('GeolocationError', err));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=327327185653213256528x96130`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

const whereAmIAsync = async function () {
  try {
    const {
      coords: { latitude: lat, longitude: lng },
    } = await getPosition();

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=327327185653213256528x96130`
    );

    const dataGeo = await resGeo.json();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    const data = await response.json();

    renderCountry(data[0]);
  } catch (error) {
    console.error(`${error.message} 💥`);
    renderError(error.message);
  }
};

whereAmIAsync();

console.log('First');

// btn.addEventListener('click', whereAmIAsync);

// try {
//   let y = 1;
//   const x = 2;
//   x = 1;
// } catch (err) {
//   console.log(err);
// }

// console.log('suite du programme');
