// Déclaration des variables pour la masse et la taille de Mamadou et Fanta pour les données de test 1
let masseMamadou1 = 75; // en kg
let tailleMamadou1 = 1.7; // en mètres

let masseFanta1 = 65; // en kg
let tailleFanta1 = 1.6; // en mètres

// Calcul de l'IMC de Mamadou et Fanta pour les données de test 1
let imcMamadou1 = masseMamadou1 / (tailleMamadou1 * tailleMamadou1);
let imcFanta1 = masseFanta1 / (tailleFanta1 * tailleFanta1);

// Création d'une variable booléenne indiquant si Mamadou a un IMC plus élevé que Fanta pour les données de test 1
let mamadouIMCPlusEleve1 = imcMamadou1 > imcFanta1;

console.log(`IMC de Mamadou (données 1): ${imcMamadou1}`);
console.log(`IMC de Fanta (données 1): ${imcFanta1}`);
console.log(
  `Mamadou a un IMC plus élevé que Fanta (données 1): ${mamadouIMCPlusEleve1}`
);

// Répétition des mêmes étapes pour les données de test 2
let masseMamadou2 = 80; // en kg
let tailleMamadou2 = 1.75; // en mètres

let masseFanta2 = 70; // en kg
let tailleFanta2 = 1.65; // en mètres

// Calcul de l'IMC de Mamadou et Fanta pour les données de test 2
let imcMamadou2 = masseMamadou2 / (tailleMamadou2 * tailleMamadou2);
let imcFanta2 = masseFanta2 / (tailleFanta2 * tailleFanta2);

// Création d'une variable booléenne indiquant si Mamadou a un IMC plus élevé que Fanta pour les données de test 2
let mamadouIMCPlusEleve2 = imcMamadou2 > imcFanta2;

console.log(`IMC de Mamadou (données 2): ${imcMamadou2}`);
console.log(`IMC de Fanta (données 2): ${imcFanta2}`);
console.log(
  `Mamadou a un IMC plus élevé que Fanta (données 2): ${mamadouIMCPlusEleve2}`
);
