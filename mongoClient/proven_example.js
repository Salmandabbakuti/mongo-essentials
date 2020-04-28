const MongoClient = require('mongodb').MongoClient;

const provendbUri = '<provendb url>';

async function main() {
  const mongoclient = await MongoClient.connect(provendbUri, {
    'useNewUrlParser': true
  });

  const provendb = mongoclient.db();
  const history = await provendb.command({docHistory:{
  collection:'products' ,
  filter:{name:"Camera"},
  projection:{name:1,uploadedAt:1}
 }});
  const currentVersion = await provendb.command({getVersion: 1});
  console.log(history.versions);
  process.exit(0);
}

main();
