// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('cse_341_week1');

// Create a new document in the collection.
db.getCollection('contacts').insertOne({
    "firstName": "Isaac",
    "lastName": "Voorhees",
    "email": "isaac@gmail.com",
    "favoriteColor": "Black",
    "birthday": new Date("2011-02-06")
});
