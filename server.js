const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const uri = "mongodb+srv://dimasdevspro:Fenix369@cluster0.pwq8wax.mongodb.net/e-wallet-server?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");

    // Definir uma rota para buscar dados
    app.get('/api/sellers', async (req, res) => {
      try {
        const database = client.db("e-wallet-server");
        const collection = database.collection("Sellers");
        const sellers = await collection.find().toArray();
        res.json(sellers);
        console.log(sellers)
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

  } finally {
    // Não feche a conexão ao finalizar o bloco
    // await client.close(); 
  }
}
run().catch(console.dir);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
