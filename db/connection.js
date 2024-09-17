const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vtrvy.mongodb.net/professional?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function connectToDB(){
    try{
        await client.connect();
        console.log("Connected Successfully");

        await listDatabases(client);
    } catch (e){
        console.error(e);
    } finally{
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
    });

}


module.exports = {
    connectToDB
};
