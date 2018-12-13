var config = {
    apiKey: "AIzaSyCkTEJaH09O6GzHFTGdBRnFyeWT3RWcHzc",
    authDomain: "trainschedule-dfe3e.firebaseapp.com",
    databaseURL: "https://trainschedule-dfe3e.firebaseio.com",
    projectId: "trainschedule-dfe3e",
    storageBucket: "",
    messagingSenderId: "623681276132"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var ref = database.ref("scores");
  var data = {
      name: "BLB",
      score: 43
  }
  ref.push(data);

 console.log(firebase);

 var name= "";
 var destination= "";
 var time= 0;
 var frequency= 0;

 //Grabbed values from text boxes
//  name = $("#trainName").val().trim();
//  destination = $("#trainDestination").val().trim();
//  time = $("#firstTrainTime").val().trim();
//  frequency = $("#frequency").val().trim();

 $("#submit").click( function() {
    name = $("#trainName").val().trim();
    destination = $("#trainDestination").val().trim();
    time = $("#firstTrainTime").val().trim();
    frequency = $("#frequency").val().trim();
     $("#trainTable tr:last").after(
         "<tr>" +
         "<td>" + trainNumber + "</td>" +
         "<td>" + $("#trainName").val() + "</td>" +
         "<td>" + $("#trainDestination").val() + "</td>" +
         "</tr>"
     )
 });

 // Assumptions
 var tFrequency = 3;

 // Time is 3:30 AM
 var firstTime = "03:30";

 // First Time (pushed back 1 year to make sure it comes before current time)
 var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
 console.log(firstTimeConverted);

 // Current Time
 var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 // Difference between the times
 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);

 // Time apart (remainder)
 var tRemainder = diffTime % tFrequency;
 console.log(tRemainder);

 // Minute Until Train
 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 // Next Train
 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


