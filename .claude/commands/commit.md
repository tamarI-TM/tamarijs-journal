# /commit

> Commande pour sauvegarder le travail en cours dans git.

---

## Mission

Quand je lance `/commit`, tu exécutes la séquence suivante :

### Étape 1 : Vérifier l'état du dépôt

```bash
git status
```

- Si git n'est pas encore initialisé dans ce workspace, lance `git init` d'abord
- Lis le résultat pour identifier les fichiers modifiés, ajoutés ou supprimés

### Étape 2 : Préparer le commit

- Affiche-moi la liste des fichiers qui vont être commités
- Vérifie que `.env` n'est PAS dans la liste (il doit être exclu par `.gitignore`)
- Si `.env` apparaît dans `git status`, STOP : avertis-moi avant de continuer

### Étape 3 : Générer un message de commit

Génère automatiquement un message de commit clair et descriptif en français, basé sur les fichiers modifiés.

Format : `type: description courte`

Types possibles :
- `ajout:` pour un nouveau fichier ou fonctionnalité
- `modif:` pour une modification
- `suppression:` pour une suppression
- `config:` pour un fichier de configuration
- `contenu:` pour du contenu (texte, scripts, livrables)

Exemples : `ajout: structure livrables et gestion des clés API`, `modif: contexte CONTEXT.md mis à jour`

### Étape 4 : Demander confirmation

Présente-moi :
```
Fichiers à commiter :
- [liste des fichiers]

Message proposé : "[message]"

Confirmes-tu ? (oui / non / modifie le message)
```

### Étape 5 : Exécuter le commit

Une fois confirmé :

```bash
git add .
git commit -m "[message confirmé]"
```

Puis affiche-moi la confirmation avec le hash du commit.

### Étape 6 (optionnel) : Proposer de pousser

Si un remote est configuré (`git remote -v`), propose :

> "Veux-tu aussi envoyer ces changements sur GitHub ? (`git push`)"

N'exécute le push que si je dis explicitement oui.

---

## Règles importantes

- Ne jamais commiter `.env` — vérification obligatoire à chaque fois
- Ne jamais utiliser `--no-verify` ou forcer quoi que ce soit
- Si quelque chose semble anormal (fichiers sensibles, erreurs git), STOP et explique
- Le message de commit doit être en français
- Pas de tirets longs (em dashes) dans tes réponses
