// var config = {
//     apiKey: "AIzaSyDHakBglSa9x2vD69pIogfZvapV_1fjlHw",
//     authDomain: "api-project-df95f.firebaseapp.com",
//     databaseURL: "https://api-project-df95f.firebaseio.com",
//     projectId: "api-project-df95f",
//     storageBucket: "api-project-df95f.appspot.com",
//     messagingSenderId: "1085967618347"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// var databaseRef = database.ref();

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-gate.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "headers": {
      "client": "UCLA",
      "x-api-key": "1gzlaHGKva4Ry0cmyF4ha4OVce8F5Gtx87BRkZda",
      "api-version": "v102",
      "Geolocation": "34.063608;-118.448258",
      "cache-control": "no-cache",
      "Postman-Token": "395e9a1b-8f1d-40e7-a922-51c71ff8e8c2"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });