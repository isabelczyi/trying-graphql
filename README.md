## Description

a GraphQL study using json-server as the db.

## Installation

first start up the db by running:

`npm run json:server`

you'll be able to see the resources at:
http://localhost:3000/users
http://localhost:3000/companies

then

`npm run dev`

you'll see the GraphiQL tool at:
http://localhost:4000/graphql

## Extra notes for my future self

Root Queries:
You could get a particular user's id, first name, age and company with the following query:
```{ user(id: "insert_id_here") { id, firstName, age, company { id, name, description } } }```

Same with the company:
```{ company(id: "1") { id, name, description, users { id firstName age } } }```


Tips:
you could write the query above with the word query:
```query {
  company(id: "insert_id_here"){
    id
    name
    description
  }
}
```

you could also name the query:
```query fetchCompany{
  company(id: "insert_id_here"){
    id
    name
    description
  }
}
```

you could also ask for several companies in a single query but you'll have to give it a key so you don't get an error of duplicate keys:
```{
  apple: company(id: "1"){
    id
    name
    description
  }
  google: company(id: "2"){
    id
    name
    description
  }
}
```

the response would be:
```{
  "data": {
    "apple": {
      "id": "1",
      "name": "Apple",
      "description": "iphone"
    },
    "google": {
      "id": "2",
      "name": "Google",
      "description": "search"
    }
  }
}
```


You could also make the same query above using query fragments:
```{
  apple: company(id: "1"){
    ...companyDetails
  }
  google: company(id: "2"){
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```


mutation query examples:
```mutation {
  addUser(firstName:"Stephen", age: 26){
    id
    firstName
    age
  }
}
```

```mutation {
  deleteUser(id: "23"){
    id
  }
}
```

```mutation {
  editUser(id: "40", firstName: "Alexaaa", companyId: "1"){
    id
    firstName
    age
  }
}
```
