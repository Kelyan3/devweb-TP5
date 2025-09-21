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
