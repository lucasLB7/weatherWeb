
var API_KEY = '3f4fbdb0acde79819ff5264ddb12d12c';


$(document).ready(function() {


  $("#countrySelect").click(function(event) {
    event.preventDefault();
    var lockIn = $("#countrySelect").val();
    console.log(lockIn);

     $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + lockIn + '&mode=json&units=metric&APPID=' + API_KEY,
      success: function(weather_data) {
        console.log(weather_data);
        var temp = weather_data.main.temp;
        var hum = weather_data.main.humidity;
        console.log(temp);
        logiCon(temp , hum); //We make the local variable applicable to the logiCon function
        $("#tempOut").html("<h1>"+temp+"</h1>");
      },


    });
      $("#output").html("<h3>So you are in: "+lockIn+"!!</h3>");

  });
});

function logiCon (temp , hum){
  var curTemp = "";
  if(temp < 10) {
    var curTemp = "Cold";
    $("#smartSelect").html("<h1>Brrrr. It's cold</h1>")
    $("#smartSelect").append("<h3>Humidity levels: "+hum+"</h>")
    $("#smartSelect").css("background-image", "url(images/cold.jpg)")
  }
  else if(temp > 10 && temp < 20 ) {
    curTemp = "Fair";
    $("#smartSelect").html("<h1>A good weather to go for a walk..</h1>")
    $("#smartSelect").append("<h3>Humidity levels: "+hum+"</h>")
    $("#smartSelect").css("background-image", "url(images/fair.jpg)")
  }
  else if(temp > 20 && temp < 30 ) {
    curTemp = "Hot";
    $("#smartSelect").html("<h1>Pffff.. Don't forget a cap & drink lot's of water</h1>")
    $("#smartSelect").append("<h3>Humidity levels: "+hum+"</h>")
    $("#smartSelect").css("background-image", "url(images/hot.jpeg)")
  }
  else if(temp > 30 && temp < 40 ) {
    curTemp = "scorching";
    $("#smartSelect").html("<h1>What's that smell?..... Oh yes...... the world in on fire!!!</h1>")
    $("#smartSelect").append("<h3>Humidity levels: "+hum+"</h>")
    $("#smartSelect").css("background-image", "url(images/scorched.jpeg)")
  }
  console.log(curTemp)
  }
