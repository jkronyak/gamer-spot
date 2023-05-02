import { React } from 'react';

const Home = () => {
  return (
    <div>
      <h1>Our Project</h1>
      {/* <p>
        The goal of this project is to practice using DevOps tools.
        <br /> For our tools, we have chosen to use
      </p>
      <ul>
        <li>GitHub for version control</li>
        <li>
          GitHub Actions for Continuous Integration/ Continuous Deployment
        </li>
        <li>Docker to containerize our code when deployed</li>
        <li>
          Amazon Web Services and Elastic Beanstalk to deploy our Docker
          container to
        </li>
      </ul> */}
	  <p>
	  	Welcome to Gamer Spot, a place where gamers can learn about new games and share their thoughts on games they've played.
	  	<br/>
		Gamer Spot was developed as a final project for SSW 590: DevOps Principles and Practices at Stevens Institute of Technology, taught by Professor Vesonder.
	  	The project was an exercise in creating and employing a CI/CD pipeline to automatically deploy a web application to AWS Elastic Beanstalk.
	  	<br/>
		Some of the tools we used include: 
		</p>
	  	<ul id='tool-list'>
			<li>GitHub for version control</li>
			<li>GitHub Actions for automating the build and deployment</li>
			<li>Docker to containerize the application for development and deployment</li>
			<li>Amazon Web Services and Elastic Beanstalk to deploy the application</li>
			<li>Trello for task management</li>
		</ul>
	 

    </div>
  );
};

export default Home;
