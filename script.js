//listener for when the html is loaded (js can run)
$(document).ready(function(){
  //Display Date
  var currentDayText = moment().format('dddd MMMM Do');
  $("#currentDay").text(currentDayText);
  //call function to fill descriptions
  fillDescription();
  fillColors();
  //event listener on save button
  $(".saveBtn").click(function(){
    console.log($(this).parent());
    var time = $(this).parent().attr("id")
    console.log($(this).siblings(".description").val());
    var textValue = $(this).siblings(".description").val();
    //Set "time" key in localStorage
    localStorage.setItem(time, textValue);
  })
})

function fillDescription() {
  var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
  for (var i = 0; i < hours.length; i++) {
    var hour = localStorage.getItem(hours[i]);
    $("#" + hours[i]).find("textarea").val(hour);
  }
}

function fillColors () {
  var now = moment().format('H');
  var hour = 9;
  var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
  for (var i = 0; i < hours.length; i++) {
    hour = parseInt(hours[i].split("-")[1]);
    if (hour < now) {
      $("#" + hours[i]).find("textarea").addClass("past");
    }
    else if (hour == now) {
      $("#" + hours[i]).find("textarea").addClass("present");
    }
    else if (hour > now) {
      $("#" + hours[i]).find("textarea").addClass("future");
    }
  }
}




// var storedTimes = localStorage.getItem(time);
// console.log(localStorage.getItem(time));
// displayPageContent(storedTimes);
// If time was retrieved from localStorage, update the time var to it
// if (storedTimes !== null) {
//   time = storedTimes;
// }
//The $.now() method is a shorthand for the number returned by the expression (new Date).getTime().
// var currentHour = 12;
// var array = [1]
// for (var currentHour = i; i < Array.length; i++)