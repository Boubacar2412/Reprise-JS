# **🔥🔥Défi de codage #4**

### 🧮 Exercice : Comprendre les Fonctions et la Portée en JavaScript

Dans cet exercice, nous allons explorer les concepts de fonctions et de portée en JavaScript. Suivez les étapes ci-dessous et répondez aux questions.

### Étape 1 : Définir une Fonction Simple

Définissez une fonction `printAmount` qui affiche une valeur arrondie à deux décimales.

1. Que se passe-t-il lorsque vous appelez la fonction `printAmount()` pour la première fois ?
2. Que se passe-t-il lorsque vous appelez la fonction `printAmount()` après avoir doublé la valeur de `amount` ?

### Étape 2 : Ajouter des Paramètres et Retourner des Valeurs

Modifiez la fonction `printAmount` pour qu'elle prenne un paramètre et définissez une nouvelle fonction `formatAmount` qui retourne une chaîne formatée.

1. Comment la fonction `printAmount` utilise-t-elle le paramètre `amt` ?
2. Que retourne la fonction `formatAmount` et pourquoi ?

### Étape 3 : Calculer le Montant Final d'un Achat

Définissez une fonction `calculateFinalPurchaseAmount` pour calculer le montant final après application d'une taxe.

1. Quelle est la valeur de `TAX_RATE` ?
2. Comment la fonction `calculateFinalPurchaseAmount` calcule-t-elle le montant final avec la taxe ?
3. Que se passe-t-il lorsque vous affichez la valeur finale de `amount` ?

### Étape 4 : Comprendre la Portée des Variables

Examinez comment les variables sont accessibles dans différentes portées.

```jsx
function one() {
  var a = 1;
  console.log(a);
}

function two() {
  var a = 2;
  console.log(a);
}

one(); // Affiche "1"
two(); // Affiche "2"
```

1. Pourquoi les variables `a` dans les fonctions `one` et `two` n'interfèrent-elles pas l'une avec l'autre ?

Ensuite, regardons l'imbrication des portées :

```jsx
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
    console.log(a + b); // Affiche "3"
  }

  inner();
  console.log(a); // Affiche "1"
}

outer();
```

1. Pourquoi le code à l'intérieur de la fonction `inner` peut-il accéder aux variables `a` et `b` ?
2. Pourquoi le code à l'intérieur de la fonction `outer` ne peut-il accéder qu'à la variable `a` ?
