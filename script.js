$(document).ready(function(){
  $(".saveBtn").click(function(){
    console.log($(this).parent());
    var time = $(this).parent().attr("id")
    console.log($(this).siblings(".description").val());
    var textValue = $(this).siblings(".description").val();
    localStorage.setItem(time, textValue);
  // Get stored time from localStorage
  // Parsing the JSON string to an object
  var storedTimes = JSON.parse(localStorage.getItem(time));
  console.log(storedTimes);
  // If time was retrieved from localStorage, update the time var to it
  if (storedTimes !== null) {
    time = storedTimes;
  }
  })
})

//The $.now() method is a shorthand for the number returned by the expression (new Date).getTime().
// var currentHour = 12;
// var array = [1]
// for (var currentHour = i; i < Array.length; i++)