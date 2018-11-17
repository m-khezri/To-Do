import './navbar.scss';
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-logout') {
      firebase.auth().signOut().then(() => {
        $('#input-todo').prop('disabled', true);
        $('#navbar-button-logout').hide();
        $('#google-auth').show();
      }).catch((err) => {
        console.log('You are stil logged in', err);
      });
    }
  });
};


const createNavbar = () => {
  const domString = `<nav class="myNavbar navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand display-1 mr-5" href="#">TO DO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <div class="nav-item w-100">
  <input id="input-todo" type="text" class="form-control" placeholder="Add To Do">
  </div>
  <div class="nav-item float-left mx-3" id="auth"></div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <a id="navbar-button-logout" class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>`;

  $('#navBar-container').html(domString);
  logoutEvent();
};

export default createNavbar;
