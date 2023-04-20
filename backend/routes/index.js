import reviewRoutes from './reviews.js';
import gameRoutes from './games.js';
import userRoutes from './users.js';

const constructorMethod = (app) => { 

	app.use("/api/reviews", reviewRoutes);
	app.use("/api/games", gameRoutes);
	app.use("/api/users", userRoutes);


	// app.use('*', (req, res) => { 
	// 	res.status(404).json({error: 'Not found'})
	// });
}

export default constructorMethod;
