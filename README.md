# Magic Converter

##### Convertisseur de données entre plusieurs services Magic The Gathering

### Stack Technique :

- Scrapping : Puppeteer
- Front : ReactTS & TailwindCSS
- API : [scryfall.com](https://scryfall.com/)
- Déploiement : [Heroku](heroku.com)

### Lancement

- Lancement du serveur web (React)
```commandline
cd front
npm start
```

- Lancer la détection des fichiers pour Tailwind
```commandline
npx tailwindcss -i front/src/index.css -o front/dist/output.css --watch
```