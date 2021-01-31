import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify, { API } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const apiName = 'searchprojects';
const path = '/project';
const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
        name: 'param',
    },
};

API
  .get(apiName, path, myInit)
  .then(response => {
    console.log("Response: " + JSON.stringify(response.data))
  })
  .catch(error => {
    console.log(error + ", " + error.response);
 });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
