

  // Initialize Firebase
  var database = firebase.database();

  var ref = database.ref('challenge/profiles');
ref.on("value", function(snapshot) {
    challengedata = snapshot.val();
    console.log(Object.keys(snapshot))
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});