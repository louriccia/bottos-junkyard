
function setup(){
  // Initialize Firebase
  console.log("ready")
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
  var firebase = firebase.initializeApp(secondaryAppConfig, "secondary")
  var database = firebase.database();

  var ref = database.ref('challenge/profiles');
ref.on("value", function(snapshot) {
    challengedata = snapshot.val();
    console.log(Object.keys(snapshot))
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
}

setup()
