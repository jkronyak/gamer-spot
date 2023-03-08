
const constructorMethod = (app) => { 
	app.use("/", (req, res) => { 
		res.json("Hello World!"); 
	}); 

	app.use('*', (req, res) => { 
		res.status(404).json({error: 'Not found'})
	});
}

export default constructorMethod;