import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import logInbutton from './components/auth/auth';
import createNavbar from './components/navbar/navbar';
import bindWriteTasks from './components/printTasks/printTasks';

$(window).on('load', () => {
  $('#navbar-button-logout').hide();
  $('#input-todo').prop('disabled', true);
  $('#google-auth').show();
});


const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  logInbutton();
  bindWriteTasks();
};

initApp();
