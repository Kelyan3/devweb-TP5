# Développement Web - TP5

## Partie I

### Question 1.1 - Donner la liste des en-têtes de la réponse HTTP du serveur.

Liste des en-têtes :
- Connection: keep-alive
- Date: Fri, 19 Sep 2025 22:36:43 GMT
- Keep-Alive: timeout=5
- Transfer-Encoding: chunked


### Question 1.2 - Donner la nouvelle liste des en-têtes de la réponse HTTP du serveur.

En remplaçant l'ancien code :
```javascript
function requestListener(_request, response) {
  response.writeHead(200);
  response.end("<html><h1>My first server!<h1></html>");
}
```

Par ce nouveau code :
```javascript
function requestListener(_request, response) {
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ message: "I'm OK" }));
}
```

On obtient cette nouvelle liste des en-têtes :
- Connection: keep-alive
- Content-Length: 20
- Content-Type: application/json
- Date: Sun, 21 Sep 2025 04:16:15 GMT
- Keep-Alive: timeout=5


### Question 1.3 - Que contient la réponse reçue par le client ?

Dans notre cas, puisque le fichier "index.html" n'existe pas, le client ne reçoit aucune réponse.


### Question 1.4 - Quelle est l'erreur affichée dans la console ? Retrouver [ici](https://nodejs.org/api) le code d'erreur affiché.

L'erreur obtenue :
```txt
Error: ENOENT: no such file or directory, open 'C:\Users\Kelyan\Documents\DEV_WEB\devweb-TP5\index.html'
    at async open (node:internal/fs/promises:642:25)
    at async Object.readFile (node:internal/fs/promises:1279:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Kelyan\\Documents\\DEV_WEB\\devweb-TP5\\index.html'
}
```

Le code d'erreur "ENOENT" s'affiche grâce à la librairie "fs" qui indique que le fichier n'existe pas car le chemin spécifié ne trouve pas ce fichier.


### Question 1.5 - Donner le code de requestListener() modifié avec gestion d'erreur en async/await.

[Voir le code](https://github.com/Kelyan3/devweb-TP5/blob/main/server-http.mjs#L7-L18)


### Question 1.6 - Indiquer ce que cette commande a modifié dans votre projet.

Les commandes suivantes :
```txt
npm install cross-env --save
npm install nodemon --save-dev
```
Elles ont créées un dossier node_modules contenant tous les packages installés.
De plus, les fichiers "package.json" et "package-lock.json" ont été modifiés pour s'adapter à leur installation.


### Question 1.7 - Quelles sont les différences entre les scripts http-dev et http-prod ?

Leurs différences sont :
- La définition de la variable d'environnement NODE_DEV qui change :
  > "development" pour l'éxécution du script `npm run http-dev`
  > "production" pour l'exécution du script `npm run http-prod`

- Le script http-dev utilise [Nodemon](https://nodemon.io/), qui permet le redémarrage automatique de notre serveur et qui surveille le moindre changement dans le code source. Quant au script http-prod, celui-ci ne possède pas ces fonctionnalités de surveillance et de redémarrage automatique (que l'utilisateur doit faire manuellement).

- http-dev utilise la dépendance de développement nodemon (commande "nodemon"), celle-ci est définie dans le fichier "package.json" dans la section "devDependencies". En revanche, le script http-prod, n'utilise que Node.js (commande "node") pour l'exécution de l'application.


### Question 1.8 - Donner les codes HTTP reçus par votre navigateur pour chacune des 4 pages précédentes.

- `http://localhost:8000/index.html` : 200 (OK)
- `http://localhost:8000/random.html` : 200 (OK)
- `http://localhost:8000/` : 404 (Not Found)
- `http://localhost:8000/dont-exist` : Code 404 (Not Found)


## Partie II

### Question 2.1 - Donner les URL des documentation de chacun des modules installés par la commande précédente.

- Documentation du module [express](https://expressjs.com/en/api.html)
- Documentation du module [http-errors](https://www.npmjs.com/package/http-errors)
- Documentation du module [loglevel](https://www.npmjs.com/package/loglevel)
- Documentation du module [morgan](https://www.npmjs.com/package/morgan)


### Question 2.2 - Vérifier que les 3 routes fonctionnent.

Après avoir exécuté la commande `npm run express-dev` :
- `localhost:8000` affiche "Hello World!"
- `localhost:8000/index.html` affiche "Hello World!"
- `localhost:800/random/15` affiche une liste de 15 nombres aléatoires (on peut remplacer 15 par n'importe quelle valeur).

### Question 2.3 - Lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?

Les en-têtes des réponses fournies par Express sont :
- **Accept-Ranges: bytes**
- **Cache-Control: public, max-age=0**
- Connection: keep-alive
- Content-Length: 165
- Content-Type: text/html; charset=utf-8
- Date: Mon, 22 Sep 2025 06:19:46 GMT
- **Etag: W/"a5-1996a9da8a5"**
- Keep-Alive: timeout=5
- **Last-Modified: Sun, 21 Sep 2025 04:52:21 GMT**
- **X-Powered-By: Express**

Les réponses qui sont en **gras** sont celles qui sont nouvelles par rapport au serveur HTTP.

### Question 2.4 - Quand l'événement "listening" est-il déclenché ?

L'événement "listening" se déclenche lorsque le serveur Express a fini sa configuration de l'hôte et du port spécifié dans le code.
