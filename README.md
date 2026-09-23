# Studio 56 — galerie d’interfaces

Galerie responsive en français avec une page d’accueil qui référence les **56 visuels transmis**. Chaque référence ouvre maintenant une **recréation de page en HTML/CSS** : navigation, sections, cartes, formulaires et boutons sont construits dans le DOM et ne sont pas une capture plein écran.

Les captures d’origine restent les miniatures de la galerie. Dans les pages reconstituées, seuls des **extraits recadrés** servent de visuels décoratifs ; la mise en page elle-même est recodée. Les boutons de navigation, le menu mobile, les ajouts au panier et les formulaires de démonstration sont interactifs. Les formulaires n’envoient pas de données à un service externe.

## Limite importante sur la fidélité

Une capture aplatie ne contient pas les fichiers séparés (photos originales, polices, SVG), les mesures CSS exactes ni les états interactifs du site d’origine. Les pages sont donc des **reproductions visuelles travaillées**, pas le code source original et pas une garantie de pixel-perfect. Pour une copie pixel-par-pixel, il faut les éléments originaux ou des captures plus détaillées de chaque section.

## Lancer en local

Aucune dépendance à installer : c’est un site statique.

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.

## Publication sur GitHub Pages

Le workflow `.github/workflows/pages.yml` publie automatiquement le site après un push sur la branche `main`.

Dépôt actuel : <https://github.com/stanleystaw/studio-56-interfaces>

Site publié : <https://stanleystaw.github.io/studio-56-interfaces/>

## Navigation

- Accueil / catalogue : `/`
- Chaque page dédiée : `/#/interface/01` à `/#/interface/56`
- Sur une page : le dock en bas à gauche permet de revenir à la galerie ou de passer à la référence précédente/suivante.
