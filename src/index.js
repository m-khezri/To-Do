// import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import logInbutton from './components/auth/auth';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  logInbutton();
};

initApp();
