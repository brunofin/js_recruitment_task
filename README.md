# JS Recruitment Task

## The Guardian API key

Before being able to use this project, please add your The Guardian API key to `.env` file, otherwise the API calls will fail.

## Description

We would like you to create an application that will display list of news fetched from The Guardian. You should use their API, which can be found here: [https://open-platform.theguardian.com/](https://open-platform.theguardian.com/)

Goal of this task is to check your JavaScript knowledge so please don't use any additional libraries, you can use `fetch` for http requests.

We have provided sample html + css styling, so you can focus on writing JS code.

## Requirements

- Display list of news from last 30 days
- Add pagination: 10 items per page
- Add news filtering based on section selection from dropdown. You can restrict it only to: `sport`, `books`, `business`, `culture`
- Add search functionality for filtering news content based on provided phrase
- Each news list element should have following elements:
  - Title
  - Section name
  - Date of publication
  - Link to full article (open in new window)
  - "Read Later" button
- Clicking "Read later" button should add selected news to the "Read later" section on the right. Those elements should be stored somewhere and displayed even after refresh.
- Each element from "read later" can be removed by clicking "delete" button
- (Bonus) It would be beneficial if you would write some kind of tests, either unit or integration
- (Bonus) If you will find time, please briefly describe your approach to solving this task.

# Tools used


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
