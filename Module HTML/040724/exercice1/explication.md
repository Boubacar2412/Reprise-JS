#### Explication des Propriétés

- `display: grid;`: Définit l'élément `.container` comme un conteneur de grille.
- `grid-template-columns: 1fr 2fr 1fr;`: Crée trois colonnes avec des largeurs proportionnelles de 1, 2 et 1 fractions de l'espace disponible.
- `grid-template-rows: 100px auto 50px;`: Crée trois lignes, la première de 100 pixels de hauteur, la deuxième prenant tout l'espace restant, et la troisième de 50 pixels.
- `gap: 10px;`: Ajoute un espace de 10 pixels entre les cellules de la grille.
- `justify-items: center;`: Centre les éléments horizontalement dans chaque cellule.
- `align-items: center;`: Centre les éléments verticalement dans chaque cellule.
- `grid-column: 1 / -1;`: Fait s'étendre l'élément sur toutes les colonnes.
- `grid-row: 2 / 4;`: Fait s'étendre l'élément sur les lignes 2 à 4.
- `grid-column: 2 / 3;`: Positionne l'élément dans la colonne 2.
- `grid-column: 3 / 4;`: Positionne l'élément dans la colonne 3.
- `grid-row: 2 / 3;`: Positionne l'élément dans la ligne 2.
- `grid-row: 3 / 4;`: Positionne l'élément dans la ligne 3.
- Les couleurs de fond sont ajoutées pour différencier visuellement chaque élément.
