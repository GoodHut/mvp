const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

const client = new MongoClient(uri);
const dbname = "mvp";

const main = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database 🌎`);
    const dbs = await client.db().admin().listDatabases();
    console.table(dbs.databases);
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};


main()
  .catch((err) => console.log(err))
  .finally(() => client.close());
