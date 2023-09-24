# Hello, Express

## API

- **POST object via curl**:

```sh
curl -X POST -H 'Content-Type: application/json' -d '{ "id": 4, "title": "A Game of Thrones", "author": "George R.R. Martin" }' http://localhost:3000/books
```

## Mongosh

- **Clear console**:

```sh
cls
```

- **List Databases**:

```sh
show dbs
```

- **Use Database**:

```sh
use <db-name>
```

- **List Collections**:

```sh
db.<collection-name>.find()

```
