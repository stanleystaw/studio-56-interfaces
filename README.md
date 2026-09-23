# Studio 56 — galerie d’interfaces

Une galerie statique en français qui rassemble les **56 visuels transmis**. La page d’accueil propose une recherche, des filtres par catégorie et un lien dédié pour chaque référence (`#/interface/01` à `#/interface/56`).

## Recréation des interfaces

Chaque référence ouvre une page construite en HTML, CSS et JavaScript : navigation, textes, boutons, cartes, formulaires et sections sont de vrais éléments web. Les fichiers de capture complets ne servent pas de pages. Des recadrages peuvent être utilisés comme illustrations dans la mise en page.

> Les sources originales, polices et assets séparés n’ayant pas été fournis, il s’agit d’une reconstruction visuelle fidèle, sans promesse de correspondance pixel-perfect absolue. La galerie, la recherche, les filtres, le changement de référence, les formulaires de démonstration et les actions visibles sont interactifs.

## Lancer en local

Aucune dépendance à installer : c’est un site statique.

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>.

## Publication sur GitHub Pages

Le workflow `.github/workflows/pages.yml` publie automatiquement le site sur GitHub Pages après un push sur la branche `main`.

1. Créer un dépôt (par exemple `studio-56-interfaces`) sous le compte GitHub voulu.
2. Depuis un terminal où Git est connecté au compte, pousser le contenu de ce dossier :

```bash
git init
git add .
git commit -m "Créer la galerie Studio 56"
git branch -M main
git remote add origin https://github.com/stanleystaw/studio-56-interfaces.git
git push -u origin main
```

3. Dans **Settings → Pages**, choisir **GitHub Actions** comme source si ce n’est pas déjà le cas.
4. Le workflow déploie le site ; l’URL apparaît dans **Actions** et **Settings → Pages** (pour cet exemple : `https://stanleystaw.github.io/studio-56-interfaces/`).

Connecte Git avec GitHub CLI, le gestionnaire d’identifiants ou une clé SSH. **Ne mets jamais un token dans l’URL du dépôt ni dans un fichier du projet.** Les ressources utilisent des chemins relatifs et les pages détail passent par le hash (`/#/interface/01`), ce qui fonctionne aussi sous un sous-chemin GitHub Pages.
