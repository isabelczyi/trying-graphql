a GraphQL study using json-server as the db.

first start up the db by running:

`npm run json:server`

you'll be able to see the resources at:
http://localhost:3000/users
http://localhost:3000/companies

then

`npm run dev`

you'll see the GraphiQL tool at:
http://localhost:4000/graphql

Root Query:
You could get a particular user's id, first name, age and company with the following query:
`{ user(id: "insert_id_here") { id, firstName, age, company { id, name, description } } }`
