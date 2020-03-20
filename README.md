# MERN Stack Application

This application is a "Social media platform" for developers where you can make your own profile and extend it with varous information. It's created using Node.js, Express, MongoDB and React. 

## React app - client

How to create it <br>
<i>npx create-react-app client </i>

Following packages where installed for this project: <br>
<i>npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment</i>

### Information
- The client application is created in react
- It uses REDUX for state management.

## Node.js - Backend

## DevOps

You can run both backend and frontend at the same time using con 'concurrently' by adding the following in your build scripts in the package.json: <br>
<i> "dev": "concurrently \"npm run server\" \"npm run client\"" <i> <br>

Using this you can run 'npm run dev' to run both backend and frontend at the same time. <br>