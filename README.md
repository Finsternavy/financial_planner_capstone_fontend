# This site is currently live at https://gilded-semolina-65e579.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


******************************************************************************************************
# Financial Planner Website

This site was built to assist anyone with creating and managing their own budget.  Relevant additional functionality has been implemented to include additional expenses that come with financed expenses such as auto loans and mortgages.  These include expenses such as insurance, mortgage insurance, and property taxes.  The site also includes mortgage and auto loan calculators that will generate and display a complete breakdown of these expenses and how they affect your monthly payment.

This site was developed as a capstone project for SDGKU Full Stack Web Development Immersive program (Highly recommend).  I plan to continue development after the course as I plan to use this tool for managing my own finances. 

## Fully implemented Functionality

- User registration

- User login

- User account recovery (username / password)

- Change password

- Budget Creation

- Budget management (CRUD elements)

- Budget optimization

- Debt Snowball (Estimated)

- Detailed Mortgage Calculator with cost breakdown

- Detailed Auto Finance Calculator with cost breakdown

- Financed expense tracking.

  - As time goes by, the site will update with payment progress and display useful information such as how much you have paid, the total payoff price of the loan       including interest and specific number of payments applied to the principal balance of the loan. 


# Partially implemented functionality

- Financial Goals:

  - Debt Goals (Working)
  
  - Total Debt Goal (Not functional)
  
  - Surplus Goal (Not functional)
  

# Cloaning this repo

I do not recommend cloaning this repo and expecting it to function.  This site requires use of a backend that utilizes secret environmental variables not available publically.  Instead, if you would like to see the program in action, the site is live here: https://gilded-semolina-65e579.netlify.app/

If you want to attempt to recreate the site, you will need to also cloan the backend found here: https://github.com/Finsternavy/thewebatease_backend

The above repo contains instructions on setting up a local virtual environment. 

Additionally you will need to setup your own MongoDB and adjust the endpoints in the server.py file as well as the axios data service calls found in the dataServices file of this project. 

### This will require installing axios within the root directory of the cloaned project. 
