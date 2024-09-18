### **Exercices**

### **Exercice 1 : Closure de base**

Créez une fonction qui suit combien de fois elle a été appelée et affiche ce nombre à chaque appel.

- Fonction : `createCounter()`
- Variable : `count`

### **Exercice 2 : Accéder aux variables externes**

Créez une closure qui retient l'accès à une variable de type chaîne de caractères de la portée externe et la concatène avec un argument donné.

- Fonction : `createGreeting()`
- Variables : `name`, `greeting`

### **Exercice 3 : Closure avec `setTimeout`**

Utilisez une closure pour créer une fonction qui affiche un message après un délai de 2 secondes. Le message doit être stocké dans la fonction externe.

- Fonction : `delayedLogger()`
- Variables : `message`

### **Exercice 4 : Closure avec écouteurs d'événements**

Créez une closure qui suit combien de fois un bouton est cliqué. Attachez cette closure à un bouton avec l'ID `myButton`.

- Fonction : `trackButtonClicks()`
- Variables : `clickCount`

### **Exercice 5 : Closures et Usines de Fonctions**

Écrivez une fonction qui génère des "multiplicateurs" — des fonctions qui multiplient un nombre donné par un multiplicateur fixe.

- Fonction : `createMultiplier()`
- Variables : `factor`, `multiply`
