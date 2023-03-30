import reviewRoutes from './reviews.js';

const constructorMethod = (app) => { 

	app.use("/api/reviews", reviewRoutes);

	// app.use('*', (req, res) => { 
	// 	res.status(404).json({error: 'Not found'})
	// });
}

export default constructorMethod;
