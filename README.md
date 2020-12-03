# NODE - WEBAPI - JWT - MYSQL

## Atenção - Warning
- Em desenvolvimento - In development
- Carregando Informações - Loading informations.

## TODO
- ok - Create project node
- ok - Implement api for crud User (username, password, permission)
- ok - Implement Sequelize with Mysql
- Implement User Model
- Implement JWT
- Implement security auth with jwt.
- Implement login
- Implement byCript for encript password
- ok - Implement CORS

## Begin
- Exemple node app with API, Login, JWT, Mysql.

- Use Express the minimalist web framework

- use lib mysql2 (npm i mysql2) 

- use Sequelize ORM (for manager database)

- use Postman for interface API get and post

- Print json result in console

- mysql instance running in docker (docker-compose.yml), I used mysql 5

## Script SQL
-- With Sequelize ORM, using sequelize.sync(),it starts and creates the tables based on the model.
-- Before, you need create the database;
```sql
create database demoNode;
```

## how to Run
### how to run this project
- I'am used node 14.x (I use nvm)
- run npm install (for to install packages)

```bash
$ npm install
$ node index.js
```

## JSON POST

- User
```json
{
    "username":"hugo",
    "password":"1234",
    "permission":"ADMIN"
}
```