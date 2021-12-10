# postgreSQL-Nest JS-Prisma-Typescript-API



### In this Restful API we are using multiple tools to create our endpoints!

- **PostgreSQL** is our pick for database.

- **Nest JS** is our pick for Framework ! By default Nest uses **TypeScript**!
- **Prisma** is our pick for the Object Relational Mapping (ORM).



This project contains 3 endpoints called: **filmes**, **genero** and **participante.**

In order to add a **filme**(Movie) to our Database, first we need to understand which informations are required in our JSON.

[ENDPOINT FILMES]:

> **localhost:3000/filmes**
>
> <u>JSON FORMAT Example</u>:
>
> ```javascript
> {
>     "nome":"Movie",
>     "imagem":"movie.jpg",
>     "data_lancamento":"2019",
>     "tempo_duracao":"120min",
>     "generoid":????
> }
> ```
>
> Inside our filme(Movie) we can see the **generoid** property, so first we need to create the **genero** and get it's ID before  pushing a movie object in our database.



[ENDPOINT GENERO]:

> **[POST] localhost:3000/genero**
>
> <u>JSON FORMAT Example</u>:
>
> ```javascript
> {
>     "nome":"Horror Movie",
> }
> ```
>
> This will create our first **genero** with the ID = **1** ! And now we're able to create our first **filme**(Movie) in the database.

[ENDPOINT FILMES]:

> **[POST] localhost:3000/filmes**
>
> <u>JSON FORMAT Example</u>:
>
> ```javascript
> {
>     "nome":"Movie",
>     "imagem":"movie.jpg",
>     "data_lancamento":"2019",
>     "tempo_duracao":"120min",
>     "generoid":1
> }
> ```
>
> Sucess! We created our first Movie in our database with the ID = **1**!

Now, let's add some Actors to our movie!?

[ENDPOINT PARTICIPANTE]:

> **[POST] localhost:3000/participante**
>
> <u>JSON FORMAT Example</u>:
>
> ```javascript
> {
>     "nome": "Actor1",
>     "imagem": "actor1.jpg",
>     "data_nascimento": "1999",
>     "staff": "Main actor"
>   }
> ```
>
> Sucess! We created our first actor! with the ID =**1**!



Let's see how our database and our tables are looking ?

Run this code on your terminal to visualize the entire schema and the relation between endpoints in this API :

```javascript
npx prisma studio
```

You can also add, edit and delete data using just the Prisma Studio!



Enjoy!



B. 🚀
