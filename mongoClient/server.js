const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();
app.use(bodyParser.json());
// Connection URL
const url = '<provendb url>';

// Database Name
const dbName = 'coodb';

// Create a new MongoClient
const client = new MongoClient(url, {
	useUnifiedTopology: true
});
// Use connect method to connect to the Server
client.connect(function (err, client) {
	assert.equal(null, err);
	console.log("Connected to Database.Ready to Serve..");
	const provendb = client.db();
})
const db = client.db(dbName);
app.get('/api/read/', async function (req, res) {
	try {
		console.log("Calling Read operation..")
		let query = {}
		query[req.query.property] = req.query.value
		db.collection("products").find(query).toArray(function (err, result) {
			if (err) throw err;
			res.send(result);
		});
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.get('/api/getHistory/', async function (req, res) {
	   try {
		console.log("Calling history operation..")
		const history = await db.command({docHistory:{collection:'products', filter:req.query}});
                res.send(history)	
	     } catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.post('/api/create/', async function (req, res) {
	try {
		console.log("Creating Documents. Please wait..")
		let data = {
			name: req.body.name,
			qty: req.body.qty,
			Status: "Available"
		}
		db.collection("products").insertOne(data, function (err, r) {
			assert.equal(null, err);
			assert.equal(1, r.insertedCount);
			res.send("Document created Successfully..")
			console.log("Creating Documents. Please wait..")
		})
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.post('/api/update/', async function (req, res) {
	try {
		console.log("Updating Documents. Please wait..")
		let filter = {
			name: req.body.name
		}
		let data = {
			$set: {
				qty: req.body.qty,
			}
		}
		db.collection('products').updateOne(filter, data, function (err, r) {
			assert.equal(null, err);
			assert.equal(1, r.matchedCount);
			assert.equal(1, r.modifiedCount);
			res.send("Document Updated Successfully..");
		})
		console.log("Documents Updated..")
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.post('/api/delete/', async function (req, res) {
	try {
		console.log("Deleting Document. Please wait..")
		let filter = {
			name: req.body.name
		}
		db.collection('products').deleteOne(filter, function (err, r) {
			assert.equal(null, err);
			assert.equal(1, r.deletedCount);
			console.log("Deleted document succesfully..")
			res.send("Document Deleted Successfully..");
		})
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.post('/api/deleteAll/', async function (req, res) {
	try {
		console.log("Deleting Document. Please wait..")
		let filter = {
			name: req.body.name
		}
		db.collection('products').deleteMany(filter, function (err, r) {
			assert.equal(null, err);
			assert.equal(2, r.deletedCount);
			client.close();
			res.send("Documents Deleted Successfully..");
		})
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.post('/api/updateAll/', async function (req, res) {
	try {
		console.log("Updating Documents. Please wait..")
		let filter = {
			name: req.body.name
		}
		let data = {
			$set: {
				status: req.body.status,
			}
		}
		db.collection('products').updateMany(filter, data, function (err, r) {
			assert.equal(null, err);
			assert.equal(2, r.matchedCount);
			assert.equal(2, r.modifiedCount);
		})
	} catch (error) {
		console.error(`Failed to evaluate transaction: ${error}`);
		res.status(500).send({
			Error: error.message
		});
	}

});
app.listen(8080, () => {
	console.log('Server is up and running on 8080..');
});
