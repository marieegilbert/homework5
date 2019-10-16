$(document).ready(function(){
  $(".saveBtn").click(function(){
    console.log($(this).parent());
    var time = $(this).parent().attr("id")
    console.log($(this).siblings(".description").val());
    var textValue = $(this).siblings(".description").val();
    localStorage.setItem(time, textValue);
    localStorage.setItem(time, textValue);
  })
})

var currentHour = 12;
var array = [1]
for (var currentHour = i; i < Array.length; i++)