// BUSINESS LOGIC
var sum = 0;
function scoreCalculator(userValue) {
  var names = ["js", "year", "framework","function","dom","link"];
  names.forEach(function(name) {
    var userValue = $("input:radio[name=" + name + "]:checked").val();
    if(userValue === "10") {
      sum+=10;
    }
  });
}


// USER INTERFACE LOGIC
$(function() {
  $("#start-btn").click(function(event) {
    event.preventDefault();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
    if(userFirstName.length === 0 || userSecondName.length === 0) {
      $("#no-name").show();
      $("#firstName").addClass("enter-name");
      $("#secondName").addClass("enter-name");
    } else {
      $("#intro").hide();
      $("#form1").show();
    }
  })
  $("#arrow-right").click(function() {
    $("#form1").hide();
    $("#form2").show();
  })
  $("#arrow-left").click(function() {
    $("#form1").show();
    $("#form2").hide();
  })
  $("#submit").click(function(event) {
    event.preventDefault();
    $("#score").show();
    $("#form2").hide();
    scoreCalculator();
    var userFirstName = $("#firstName").val();
    var userSecondName = $("#secondName").val();
    if(sum <= 30) {
      $(".name-display").text(`Nice try ${userFirstName} ${userSecondName},`);
    } else {
      $(".name-display").text(`Congratulations ${userFirstName} ${userSecondName},`);
    }
    $(".scoreDisplay").text(sum + "/60");
  })
  $("#retake").click(function(event) {
    event.preventDefault();
    location.reload();
  })
})