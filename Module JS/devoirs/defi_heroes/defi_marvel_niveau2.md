# 🛡️ DEFI AVANCÉ

### 6. **Analyse des Capacités (Rest et Spread dans des Fonctions)**

Un héros doit analyser ses pouvoirs globaux et ceux spécifiques à une mission. L'objectif est de fusionner les pouvoirs globaux et spécifiques pour évaluer ses capacités.

- **Données fournies** :
  ```jsx
  const globalPowers = { strength: 100, speed: 80 };
  ```
- **Variables à créer** : `totalPowers`, `hero`, `mission`
- **Étape 1** : Crée une fonction `analyzePowers(hero, mission, ...specificPowers)`.
- **Étape 2** : Utilise le spread operator pour fusionner `globalPowers` avec `specificPowers`.
- **Étape 3** : Affiche les capacités finales du héros en combinant les deux objets.

---

### 7. **Sélection Automatique des Pouvoirs (Opérateur OR avec Fonctions)**

Si un super-héros n'a pas de pouvoir défini, tu dois lui attribuer un pouvoir par défaut. Utilise les opérateurs de court-circuit OR pour sélectionner le pouvoir approprié.

- **Données fournies** :
  ```jsx
  const defaultPower = "force brute";
  ```
- **Variables à créer** : `selectedPower`, `primaryPower`, `secondaryPower`, `hero`
- **Étape 1** : Crée une fonction `activatePower(hero, primaryPower, secondaryPower)`.
- **Étape 2** : Utilise l'opérateur OR pour sélectionner le premier pouvoir défini ou `defaultPower` si aucun pouvoir n'est activé.
- **Étape 3** : Affiche le pouvoir sélectionné.

---

### 8. **Simulation de Combat (Opérateur AND et Objets)**

Simule un combat entre deux héros. Un héros peut attaquer seulement si sa force est suffisante, et il peut contre-attaquer uniquement si son endurance est supérieure à un certain seuil.

- **Données fournies** :
  ```jsx
  const hero1 = { name: "Hulk", power: 120, endurance: 80 };
  const hero2 = { name: "Thor", power: 110, endurance: 70 };
  ```
- **Variables à créer** : `attack`, `heroA`, `heroB`
- **Étape 1** : Crée une fonction `simulateFight(heroA, heroB)`.
- **Étape 2** : Utilise l'opérateur AND pour vérifier si les conditions d'attaque et de contre-attaque sont remplies.
- **Étape 3** : Affiche si l'attaque réussit ou échoue.

---

### 9. **Mise à Jour des Dossiers des Héros (Spread et Destructuring)**

Les dossiers des héros doivent être mis à jour avec de nouveaux attributs tout en conservant ceux qui ne changent pas. Utilise le spread operator pour appliquer les changements tout en gardant les anciens attributs.

- **Données fournies** :
  ```jsx
  const heroRecord = { name: "Black Panther", agility: 85, strength: 90 };
  ```
- **Variables à créer** : `updatedRecord`, `updates`
- **Étape 1** : Crée une fonction `updateHeroRecord(record, updates)`.
- **Étape 2** : Utilise le spread operator pour combiner `record` avec `updates`.
- **Étape 3** : Retourne l'objet mis à jour.

---

### 10. **Gestion des Alliances (Rest avec Objets et Tableaux)**

Plusieurs alliances de super-héros sont formées et doivent être regroupées dans un seul objet. Chaque alliance a une liste de héros associés. Utilise rest et spread pour regrouper toutes les alliances.

- **Données fournies** :
  ```jsx
  const alliance1 = { JusticeLeague: ["Superman", "Batman"] };
  const alliance2 = { Avengers: ["IronMan", "Thor"] };
  const alliance3 = { XMen: ["Wolverine", "Cyclope"] };
  ```
- **Variables à créer** : `groupedAlliances`, `alliances`
- **Étape 1** : Crée une fonction `manageAlliances(...alliances)`.
- **Étape 2** : Utilise rest pour collecter toutes les alliances dans un tableau.
- **Étape 3** : Utilise `reduce` pour fusionner toutes les alliances en un seul objet
