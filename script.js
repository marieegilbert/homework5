$(document).ready(function(){
  $(".btn").click(function(){
    console.log($(this).parent());
    var time = $(this).parent().attr("id")
    console.log($(this).siblings(".description").val());
    var textValue = $(this).siblings(".description").val();
    localStorage.setItem(time, textValue);
    localStorage.setItem(time, textValue);
  })
})