var express = require('express'),
		bodyParser = require('body-parser'),
		MongoClient = require('mongodb').MongoClient,
		ObjectID = require('mongodb').ObjectID,
		db = require('./db.js'),
		LinksController = require('./controllers/links'),
		app = express();


		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended:true}));


	app.get('/', LinksController.all)

	app.get('/find/:id', LinksController.findById)

	app.post('/add/', LinksController.create)

	app.put('/update/:id', LinksController.update)

	app.delete('/:id', LinksController.delete)



db.connect('mongodb://localhost:27017/shortshit', function(err){
	if(err) return console.log(err);
	app.listen(4188, function(){
		console.log('server is runing');
	})	
})