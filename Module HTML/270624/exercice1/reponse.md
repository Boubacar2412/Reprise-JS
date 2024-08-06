### Questions de Réflexion

1. **Comment le padding affecte-t-il la taille de la boîte?**

   - Le padding augmente la taille de l'élément en ajoutant de l'espace à l'intérieur de la bordure, ce qui pousse le contenu vers l'intérieur.

2. **Comment la marge affecte-t-elle l'espacement entre les boîtes?**

   - La marge crée de l'espace à l'extérieur de l'élément, augmentant ainsi l'espace entre cet élément et les éléments adjacents.

3. **Comment la bordure affecte-t-elle la taille globale de la boîte?**

   - La bordure ajoute une épaisseur autour de l'élément, ce qui augmente la taille totale de la boîte.

4. **Que se passe-t-il si vous changez le `box-sizing` en `border-box` ? Essayez d'ajouter la règle suivante pour `.box` et observez le résultat :**

   ```css
   .box {
     box-sizing: border-box;
   }
   ```

   - La propriété `box-sizing: border-box` fait en sorte que la largeur et la hauteur spécifiées incluent le padding et la bordure, ce qui facilite le contrôle de la taille totale de l'élément.
