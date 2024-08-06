### Questions

1. Quelle couleur a le texte du titre principal (`#main-title`) ? Pourquoi ?
2. Quelle couleur a le texte du paragraphe d'introduction (`#intro-text`) ? Pourquoi ?
3. Quelle couleur a le texte du paragraphe mis en évidence (`.highlighted`) ? Pourquoi ?
4. Quelle couleur a le texte du pied de page (`.footer .text`) ? Pourquoi ?

### Solution Attendue

- La couleur du texte du titre principal (`#main-title`) sera **rouge**. C'est parce que l'ID a une spécificité plus élevée que la classe ou le sélecteur d'élément.
- La couleur du texte du paragraphe d'introduction (`#intro-text`) sera **grise**. La règle de la classe `.container p` s'applique à tous les paragraphes dans `.container`, et il n'y a pas de règle de spécificité plus élevée.
- La couleur du texte du paragraphe mis en évidence (`.highlighted`) sera **jaune**. Le mot-clé `!important` a la priorité la plus élevée.
- La couleur du texte du pied de page (`.footer .text`) sera **grise**. La règle de la classe `.container p` a une spécificité plus élevée que celle de `.footer .text`.
