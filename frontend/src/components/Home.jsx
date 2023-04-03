import { React } from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <p>
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
      </ul>
    </div>
  );
};

export default Home;
