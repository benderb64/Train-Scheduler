var config = {
    apiKey: "AIzaSyCkTEJaH09O6GzHFTGdBRnFyeWT3RWcHzc",
    authDomain: "trainschedule-dfe3e.firebaseapp.com",
    databaseURL: "https://trainschedule-dfe3e.firebaseio.com",
    projectId: "trainschedule-dfe3e",
    storageBucket: "",
    messagingSenderId: "623681276132"
  };

  firebase.initializeApp(config);

  /*arbitrary code to see if connected to firebase
  var database = firebase.database();
  var ref = database.ref("scores");
  var data = {
      name: "BLB",
      score: 43
  }
  
  ref.push(data);
  */

 console.log(firebase);

 var name= "";
 var destination= "";
 var time= 0;
 var frequency= 0;

 //Grabbed values from text boxes
  name = $("#trainName").val().trim();
  destination = $("#trainDestination").val().trim();
  time = $("#firstTrainTime").val().trim();
  frequency = $("#frequency").val().trim();

 $("#submit1").click( function(event) {
     event.preventDefault()
     console.log("hi");

    name = $("#trainName").val().trim();
    destination = $("#trainDestination").val().trim();
    time = $("#firstTrainTime").val().trim();
    frequency = $("#frequency").val().trim();
     $(".table tr:last").after(
         "<tr>" +
         "<td>" + "</td>" +
         "<td>" + $("#trainName").val() + "</td>" +
         "<td>" + $("#trainDestination").val() + "</td>" +
         "<td"  + $("#firstTrainTime").val() + "</td>" +
         "<td>" + $("#frequency").val() + "</td>" +
         "</tr>"
     )
 });



 