# Serverless Framework v4 / Node / AWS / OpenApi
## DEVELOPER: Jordy Verastegui Dominguez
<!-- 
### Despliegue -->

Instalar dependencias:

```
npm install
```

Implementar:

```
serverless deploy
```

Después de ejecutar la implementación, debería ver un resultado similar al siguiente:

```
Deploying "aws-node-express-dynamodb-api" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-express-dynamodb-api-dev (109s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-dynamodb-api-dev-api (3.8 MB)
```

Generar documentación con OpenApi

```
npx openapi preview-docs
```

Visualizar documentación local en la ruta:

```
http://127.0.0.1:8080
```

## Uso

### Planets POST
 
 Agregar registros en la tabla PlanetsTbl (DynamoDB). 
 - **Endpoint:** `/planets`
 - **Método:** `POST`
 - **Traducción:** Los atributos del json pasado por el body serán traducidos de inglés a español.
 - **Validación:** Cada atributo es validado según su tipo de dato (por ejemplo, string).
 - **Body de la solicitud:**
 ```json
  { 
    "climate": "Arid2",
    "diameter": "10465",
    "gravity": "1 standard",
    "name": "Tatooine",
    "population": "200000"
  }
 ```
  - **Respuesta:**
 ```json
  {
      "message": "Planet created",
      "planet": {
          "id": "13ff6c1c-9054-4937-9a83-79a0ce5ad2a9",
          "clima": "Arid2",
          "diámetro": "10465",
          "gravedad": "1 standard",
          "nombre": "Tatooine",
          "población": "200000"
      }
  }
 ```

 ### Planets GET

 Obtener los datos registrados en la tabla PlanetsTbl (DynamoDB)
 - **Endpoint:** `/planets`
 - **Método:** `GET`
 - **Respuesta:**
  ```json
  {
      "message": "Planets found",
      "planets": [
          {
              "nombre": "Tatooine",
              "clima": "Arid",
              "diámetro": "10465",
              "gravedad": "1 standard",
              "id": "148ece5e-64bf-4051-b43d-84925ae17378",
              "población": "200000"
          }
      ]
  }
  ```
 ### People GET - Integración con SWAPI

 Traducir los nombres de atributos de inglés a español
 - **Endpoint:** `/people/:id`
 - **Método:** `GET`
 - **Respuesta:**
  ```json
  {
      "message": "Success",
      "people": {
          "nombre": "Luke Skywalker",
          "altura": "172",
          "masa": "77",
          "color_de_cabello": "blond",
          "color_de_piel": "fair",
          "color_de_ojos": "blue",
          "año_nacimiento": "19BBY",
          "género": "male",
          "mundo_natal": "https://swapi.dev/api/planets/1/",
          "películas": [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/6/"
          ],
          "especie": [],
          "vehículos": [
              "https://swapi.dev/api/vehicles/14/",
              "https://swapi.dev/api/vehicles/30/"
          ],
          "naves_estelares": [
              "https://swapi.dev/api/starships/12/",
              "https://swapi.dev/api/starships/22/"
          ],
          "creado": "2014-12-09T13:50:51.644000Z",
          "editado": "2014-12-20T21:17:56.891000Z",
          "url": "https://swapi.dev/api/people/1/"
      }
  }
  ```
### Postman

[Texto del enlace](https://www.postman.com/martian-capsule-590273/test-softtek/collection/qn3w26b/apis){:target="_blank"}
