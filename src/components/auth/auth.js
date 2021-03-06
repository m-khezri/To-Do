import './auth.scss';
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleImage from './sign-in-with-google.png';

const logInbutton = () => {
  const domString = `
  <a href="#" id="google-auth">
  <img src="${googleImage}">
  </a>
  `;
  $('#auth').html(domString);
  $('#google-auth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    $('#google-auth').hide();
    $('#navbar-button-logout').show();
    $('#input-todo').prop('disabled', false);
  });
};

export default logInbutton;
