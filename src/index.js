// import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import logInbutton from './components/auth/auth';
import createNavbar from './components/navbar/navbar';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  logInbutton();
};

initApp();
