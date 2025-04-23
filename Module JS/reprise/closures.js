// Notion de closure
function compteur() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  let incrementer = compteur();
  incrementer();
  incrementer();
  incrementer();
  
  let autre = compteur();
  autre();
  incrementer();
  


  function exemple1() {
    let x = 42;
  
    return function() {
      console.log("Hello");
    };
  }
  
  let f = exemple1();
  f(); // 🔁 "Hello"
  // ❌ Pas de closure sur "x" car la fonction interne ne l’utilise pas

  
  function exemple2() {
    let x = 42;
  
    return function() {
      console.log(x); // 👈 x est utilisée ici
    };
  }
  
  let f2 = exemple2();
  f2(); // ✅ "42" – la closure fonctionne
  
