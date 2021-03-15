function setup(){
  // Initialize Firebase
  console.log("ready")
/*
  var firebaseConfig = {
    apiKey: "AIzaSyCEJX5k_LmFjPxV-1IQYZNESC3apL62onM",
    authDomain: "botto-efbfd.firebaseapp.com",
    databaseURL: "https://botto-efbfd.firebaseio.com",
    projectId: "botto-efbfd",
    storageBucket: "botto-efbfd.appspot.com",
    messagingSenderId: "131908843411",
    appId: "1:131908843411:web:9b64e1375087fb07f91a66",
    measurementId: "G-BQHFL0GVF1"
  };
  var secondaryAppConfig = {
    projectId: "botto-efbfd",
    appId: "1:131908843411:web:9b64e1375087fb07f91a66",
    apiKey: "AIzaSyCEJX5k_LmFjPxV-1IQYZNESC3apL62onM",
    databaseURL: "https://botto-efbfd.firebaseio.com",
    storageBucket: "botto-efbfd.appspot.com"
};
  var secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary")
  var database = secondaryApp.database();

  var ref = database.ref('challenge/profiles');
ref.on("value", function(snapshot) {
    challengedata = snapshot.val();
    console.log(Object.keys(snapshot))
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});*/
const app2 = firebase.initializeApp({
    databaseURL: "https://botto-efbfd.firebaseio.com"
  }, 'app2');
}
// test default
print('Creating db ref using DEFAULT');
try {
  const db1 = firebase.database();
  print('Success!');
}
catch(e) {
  print('ERROR: ' + e);
}

// test URL
print('Creating db ref using URL');
try {
  const db2 = firebase.database(app2);
  print('Success!');
}
catch(e) {
  print('ERROR: ' + e);
}

function print(txt) {
  const $pre = $('pre');
  $pre.text( $pre.text() + txt + "\n");
}

setup()
