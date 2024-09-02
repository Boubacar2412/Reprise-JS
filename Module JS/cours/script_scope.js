"use strict";

// Scope global
function calcAge(birthYear) {
  // Scope calcAge

  const age = 2024 - birthYear;

  function printAge() {
    // Scope printAge
    const output = `${firstName} is ${age} years and born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Scope de block if
      var millenial = true;
      firstName = "ousmane";
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);

      function isMillenial() {
        return millenial;
      }

      isMillenial();
    }

    // const firstName = "ousmane"; TDZ

    console.log(millenial); // function printAge scoped
    // console.log(str); block scoped
  }

  //   console.log(output); Not access because of lexical scoping

  printAge();

  return age;
}

let firstName = "Amadou";

calcAge(1991);

// console.log(age); Not access because of lexical scoping
// printAge(); Not access because of lexical scoping
