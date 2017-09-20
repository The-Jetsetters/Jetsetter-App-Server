# Jetsetter-App-Server

An Express.js and PostgreSQL app.

### Installing

```
$ npm install
$ createdb nomad
$ mv env-example .env
```
Edit .env in your favorite editor and change the default values.

```
$ knex migrate:latest
$ knex seed:run
$ nodemon
```
Viewable Locally @
[Localhost](http://localhost:8000)

Live site@
[Live](https://stark-harbor-90587.herokuapp.com/trips/)
