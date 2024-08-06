// Déclarez une variable pour le montant en GNF
let montantGNF = 500000; // par exemple

// Déclarez une variable pour le taux de change (1 USD = 8700 GNF)
let tauxDeChange = 8700; // taux de change approximatif

// Calculez le montant équivalent en USD
let montantUSD = montantGNF / tauxDeChange;

// Affichez le résultat avec console.log()
console.log(`Montant en USD: ${montantUSD.toFixed(2)}`); // Utilisation de toFixed(2) pour afficher deux décimales
