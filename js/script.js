var result1 = 1;
var result2 = 2;
var result3 = 3;
var result4 = 4;
var result5 = 5;
var result6 = 6;
var result7 = 7;
var result8 = 8;
var result9 = 9;
var result10 = 10;

function score () {
  return "you have scored" + total;
}
$(document).ready(function() {
  $("#button1").click(function() {
    var question1 = $("input[name='question1']:checked").val();
    var question2 = $("input[name='question2']:checked").val();
    var question3 = $("input[name='question3']:checked").val();
    var question4 = $("input[name='question4']:checked").val();
    var question5 = $("input[name='question5']:checked").val();
    var question6 = $("input[name='question6']:checked").val();
    var question7 = $("input[name='question7']:checked").val();
    var question8 = $("input[name='question8']:checked").val();
    var question9 = $("input[name='question9']:checked").val();
    var question10 = $("input[name='question10']:checked").val();
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);
    console.log(question6);
    console.log(question7);
    console.log(question8);
    console.log(question9);
    console.log(question10);

    if (question1 === "right") {
        result1 = 20;
      }else {
        result1 = 0;
      }
      if (question2 ==="right") {
        result2 = 20;
      } else {
        result2 = 0;
      }
      if (question3 === "right") {
        result3 = 20;
      } else {
        result3 = 0;
      }
      if (question4 === "right") {
        result4 = 20;
      } else {
        result4 = 0;
      }
      if (question5 === "right") {
        result5 = 20;
      }else {
        result5= 0;
      }
      if (question6 === "right") {
          result6 = 20;
      }else {
          result6= 0;
      }
      if (question7 === "right") {
          result7 = 20;
      }else {
          result6= 0;
      }
      if (question8 === "right") {
          result8 = 20;
      }else {
          result8= 0;
      }
      if (question9 === "right") {
          result9 = 20;
      }else {
          result9= 0;
      }
      if (question10 === "right") {
          result10 = 20;
      }else {
          result10= 0;
      }
      var score = (result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9 + result10);
      console.log(score);
  
      $("#result").text("Congratulations! You have gotten " + score + " points.");
      
    })
  })