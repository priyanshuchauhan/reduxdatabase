
# reduxdb

Redux with MongoDB-like API.

Notice that NOT all the features of MongoDB are implemented here, such as multi-index and query operators.

The purpose of _reduxdb_ is to avoid writing almost the same actions and stores again and again in different projects.

### Installation

```shell
npm install --save reduxdb
```

### Usage

```javascript
var reduxdb = require("reduxdatabase")

var db = reduxdb.use("test")
db.createCollection("users", {index: "id"})
db.createCollection("teams", {index: "id"})
db.createCollection("books")    // using default index `_id`

db.subscribe(function() {
    console.log(db.stats())
    console.log(db.users.stats())
    console.log(db.teams.stats())
    console.log(db.books.stats())
})

db.users.insert({id: "1234", name: "wizawu"})
db.users.findOne({name: "wizawu"}).id    // 1234
```

### API

#### reduxdb

+ use(name)

A database is generally used for storing related, structured data, with well defined data formats, in an efficient manner for insert, update and/or retrieval (depending on application).

On the other hand, a file system is a more unstructured data store for storing arbitrary, probably unrelated data. The file system is more general, and databases are built on top of the general data storage services provided by file systems

#### reduxdb.DB

ReduxDB:

A database is generally used for storing related, structured data, with well defined data formats, in an efficient manner for
insert, update and/or retrieval (depending on application).

On the other hand, a file system is a more unstructured data store for storing arbitrary, probably unrelated data.
The file system is more general, and databases are built on top of the general data storage services provided by file systems.


1. Parallel First Design Pattern

2. Symntic query: like google/fb

3. normilze, schema, redux, reselect

4. GraphQL: Solves REST problesm for limited fields and offset etc

5. migration for mongo and mysql

6. ES6 from scratch

7. Deserializing on browser: localstorage or redux form. Eg: info related to session user

8. Integrate features one by one

9. Joins/Aggregation between tables/JSON objects

10. lodash

11. Version controlled

12. No separate service in background

13. Speed Test on large record

14. ML data

15. jest testing DB, snapshot testing?

