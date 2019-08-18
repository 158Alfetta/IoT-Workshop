// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  var database = firebase.database();
  var led;
  var color;

  database.ref().on("value", function(snap){
    led = snap.val().led;
    color = snap.val().color;

    if(led == 1){
      $(".lightStatus").text("The light is --> ON <--");
    } else {
      $(".lightStatus").text("The light is --> OFF <--");
    }

    if(color == 1){
      $(".colorStatus").text("The color is now --> GREEN <--");
    } else if (color == 2){
      $(".colorStatus").text("The color is now --> RED <--");
    } else if (color == 3){
      $(".colorStatus").text("The color is now --> YELLOW <--");
    } else if (color == 4){
      $(".colorStatus").text("The color is now --> SKY BLUE <--");
    } else if (color == 5){
      $(".colorStatus").text("The color is now --> PINK <--");
    } else if (color == 6){
      $(".colorStatus").text("The color is now --> CLEARLY WHITE <--");
    }



  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("led");

    if(led == 1){
      firebaseRef.set(0);
      led = 0;
    } else {
      firebaseRef.set(1);
      led = 1;
    }
  });

  $(".btn-success").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(1);
  });

  $(".btn-danger").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(2);
  });

  $(".btn-warning").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(3);
  });

  $(".btn-info").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(4);
  });

  $(".btPink").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(5);
  });

  $(".btWhite").click(function(){
    var firebaseRef = firebase.database().ref().child("color");
    firebaseRef.set(6);
  });
});
