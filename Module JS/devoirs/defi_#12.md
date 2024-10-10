#### Exercices OOP Prototypale inheritance

### Exercice 1 : Création d'une Fonction Constructeur

**Objectif** : Créer une fonction constructeur qui modélise un **Livre**.

**Instructions** :

1. Crée une fonction constructeur `Livre` qui accepte les arguments `titre`, `auteur`, et `nombrePages`.
2. Ajoute une méthode `resume` dans le prototype de `Livre` qui affiche une courte description du livre.
3. Crée deux instances de `Livre` et appelle la méthode `resume` sur chacune d'elles.

**Exemple attendu :**

```jsx
const livre1 = new Livre('Le Petit Prince', 'Antoine de Saint-Exupéry', 96);
const livre2 = new Livre('L\\'Étranger', 'Albert Camus', 144);

livre1.resume();  // Le livre "Le Petit Prince" a été écrit par Antoine de Saint-Exupéry et compte 96 pages.
livre2.resume();  // Le livre "L'Étranger" a été écrit par Albert Camus et compte 144 pages.

```

---

### Exercice 2 : Utiliser l'Opérateur `new`

**Objectif** : Comprendre le rôle de l'opérateur `new` pour créer des objets.

**Instructions** :

1. Crée une fonction constructeur `Voiture` qui prend `marque` et `modele` comme paramètres.
2. Ajoute une méthode `description` dans le prototype de `Voiture` qui retourne un message décrivant la voiture.
3. Utilise l'opérateur `new` pour créer trois instances de la fonction constructeur `Voiture`.
4. Appelle la méthode `description` sur chaque instance.

**Exemple attendu :**

```jsx
const voiture1 = new Voiture("Toyota", "Corolla");
const voiture2 = new Voiture("Honda", "Civic");
const voiture3 = new Voiture("Tesla", "Model S");

console.log(voiture1.description()); // "Toyota Corolla"
console.log(voiture2.description()); // "Honda Civic"
console.log(voiture3.description()); // "Tesla Model S"
```

---

### Exercice 3 : Héritage avec Fonctions Constructeurs

**Objectif** : Appliquer le concept d'héritage en utilisant des fonctions constructeurs.

**Instructions** :

1. Crée une fonction constructeur `Animal` avec les propriétés `nom` et `espece`.
2. Ajoute une méthode `parler` dans le prototype d'`Animal` qui affiche un message disant que l'animal fait un bruit.
3. Crée une fonction constructeur `Chien` qui hérite de `Animal`, et qui ajoute une propriété `race`.
4. Ajoute une méthode `aboyer` dans le prototype de `Chien` qui affiche un message spécifique aux chiens.
5. Crée une instance de `Chien` et appelle ses méthodes `parler` et `aboyer`.

**Exemple attendu :**

```jsx
const chien1 = new Chien("Max", "Canidé", "Berger Allemand");
chien1.parler(); // Max fait un bruit.
chien1.aboyer(); // Max aboie.
```

---

### Exercice 4 : Utiliser les Prototypes pour Ajouter des Méthodes

**Objectif** : Ajouter des méthodes à un objet en utilisant le prototype.

**Instructions** :

1. Crée une fonction constructeur `Utilisateur` qui prend `nom` et `email` en paramètres.
2. Ajoute une méthode `afficherInfo` dans le prototype de `Utilisateur` qui affiche les informations de l'utilisateur.
3. Crée une autre méthode `changerEmail` dans le prototype qui permet de modifier l'email de l'utilisateur.
4. Crée une instance d'`Utilisateur`, affiche les informations et change l'email, puis affiche les informations à nouveau.

**Exemple attendu :**

```jsx
const utilisateur1 = new Utilisateur("Amadou", "amadou@example.com");
utilisateur1.afficherInfo(); // Nom : Amadou, Email : amadou@example.com

utilisateur1.changerEmail("nouvelEmail@example.com");
utilisateur1.afficherInfo(); // Nom : Amadou, Email : nouvelEmail@example.com
```
