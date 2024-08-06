### Correction attendue:

1. **Réponses aux questions de compréhension:**

   1. Tous les éléments enfants du `<body>` héritent des styles définis sur celui-ci, car ce sont des propriétés héritables comme la couleur, la famille de polices, la taille de police et la hauteur de ligne.
   2. Si une couleur différente est ajoutée au paragraphe dans l'`<aside>`, cette couleur spécifique sera appliquée au lieu de la couleur héritée du `<body>`, car les styles spécifiques ont une priorité plus élevée que les styles hérités.
   3. Lorsque la taille de police du `<header>` est modifiée, tous les éléments enfants héritent de cette nouvelle taille de police. Cela se produit car les éléments enfants héritent des propriétés de leurs parents à moins d'être redéfinis.
   4. Le `border` ajouté au `<body>` ne sera pas hérité par les enfants. Les propriétés comme `border` ne sont pas héritables par défaut.
   5. Lorsque la classe `.highlight` est supprimée et que `!important` est ajouté à la couleur du `<body>`, tous les éléments héritent de cette couleur, car `!important` donne la plus haute priorité à cette règle.

2. **Manipulations pratiques:**
   1. Les nouveaux éléments ajoutés à la page hériteront des styles globaux définis sur le `<body>`.
   2. Les styles redéfinis pour des éléments spécifiques prendront le pas sur les styles hérités, montrant comment les priorités fonctionnent en CSS.
   3. Les styles ajoutés à des éléments parents spécifiques affecteront leurs enfants, démontrant l'effet de l'héritage et de la portée des sélecteurs.
