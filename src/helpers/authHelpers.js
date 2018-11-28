import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#navbar-button-logout').show();
      $('#input-todo').prop('disabled', false);
      $('#google-auth').hide();
      $('#tasks-board').show();
    } else {
      $('#navbar-button-logout').hide();
      $('#input-todo').prop('disabled', true);
      $('#google-auth').show();
      $('#tasks-board').hide();
    }
  });
};

export default checkLoginStatus;
