const inventory = [
  { name: "apple", price: 1.2, quantity: 10 },
  { name: "banana", price: 0.8, quantity: 5 },
  { name: "orange", price: 1.5, quantity: 8 },
];

/**
Explication :
- find() est utilisé pour chercher un article existant dans le tableau inventory.
    Si l'article existe (item n'est pas undefined), on augmente la quantity de cet article.
    Sinon, on ajoute un nouvel objet avec les propriétés name, price, et quantity au tableau inventory en utilisant la méthode push().
 */

function addItem(name, price, quantity) {
  const item = inventory.find((item) => item.name === name);
  if (item) {
    item.quantity += quantity;
  } else {
    inventory.push({ name, price, quantity });
  }
}

addItem("apple", 1.2, 5); // Augmente la quantité de "apple" à 15
addItem("grape", 2.0, 10); // Ajoute "grape" à l'inventaire

function checkAvailability(itemName, requestedQuantity) {
  const item = inventory.find((item) => item.name === itemName);
  return item && item.quantity >= requestedQuantity
    ? "Disponible"
    : "Stock insuffisant";
}

/**
 * Explication :
 * 
 
 - find() est encore utilisé pour rechercher l'article.
    Une condition ternaire est utilisée pour vérifier la disponibilité :
    Si l'article existe (item) et que la quantity est supérieure ou égale à requestedQuantity, on retourne "Disponible".
    Sinon, on retourne "Stock insuffisant".

 */

console.log(checkAvailability("banana", 3)); // "Disponible"
console.log(checkAvailability("banana", 10)); // "Stock insuffisant"

function calculateTotalPrice(itemName, requestedQuantity) {
  // Conversion de la quantité en nombre (int)
  const quantity = parseInt(requestedQuantity);

  // Vérification si la quantité est un nombre valide
  if (isNaN(quantity) || quantity < 0) {
    return "Quantité invalide";
  }

  const item = inventory.find((item) => item.name === itemName);

  if (item && item.quantity >= quantity) {
    return item.price * quantity;
  } else {
    return "Stock insuffisant";
  }
}

/**
 * Explication :
    - parseInt() est utilisé pour convertir requestedQuantity en un nombre entier.
    - isNaN() vérifie si le résultat de la conversion est un nombre valide. Si ce n'est pas le cas, la fonction retourne "Quantité invalide".
        Ensuite, la disponibilité de l'article est vérifiée avec la même logique que précédemment.
        Si l'article est disponible en quantité suffisante, on retourne le prix total (item.price * quantity), sinon "Stock insuffisant".
 */

console.log(calculateTotalPrice("orange", 3)); // 4.5
console.log(calculateTotalPrice("orange", 10)); // "Stock insuffisant"
console.log(calculateTotalPrice("banana", "2")); // 1.6
console.log(calculateTotalPrice("banana", "five")); // "Quantité invalide"

function removeItem(itemName, quantity) {
  const item = inventory.find((item) => item.name === itemName);

  if (item) {
    if (item.quantity >= quantity) {
      item.quantity -= quantity;
    } else {
      console.log("Quantité insuffisante pour retirer cet article");
    }
  } else {
    console.log("Article non trouvé dans l'inventaire");
  }
}

/**
 * 
 * Explication :
La fonction cherche d'abord l'article dans l'inventaire.
Si l'article existe et que la quantité en stock est suffisante, la quantité est réduite.
Si la quantité demandée est supérieure à la quantité en stock, un message d'erreur est affiché.
 */

removeItem("apple", 3); // Réduit la quantité de "apple" à 12
removeItem("banana", 10); // Affiche "Quantité insuffisante pour retirer cet article"
