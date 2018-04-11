var city = "Brussels";
var API_KEY = '3f4fbdb0acde79819ff5264ddb12d12c';
var openClose =1;

function menuClick() {
  console.log(openClose);
  if (openClose === 1) {
    $(".myCal").show();
    $(".weatherData").hide();
    openClose = 2;
  }
else {
  $(".myCal").hide();
  $(".weatherData").show();
  openClose = 1;
}
}



function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', 'April','May','June', 'July','August','September', 'October', 'November', 'December']; // you get the idea
        time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(), // again, you get the idea



        // a cleaner way than string concatenation
        date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call
$(document).ready(function() {

     $.ajax({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&mode=json&units=metric&APPID=' + API_KEY,
      success: function(weather_data) {
        console.log(weather_data);
        var temp = weather_data.main.temp;
        var hum = weather_data.main.humidity;
        var precip = weather_data.weather[0].description;
        console.log(temp);
        console.log(precip);
        logiCon(temp , hum , precip); //We make the local variable applicable to the logiCon function
        $("#tempOut").html("<h4>"+temp+" °C</h4>");
        $("#humOut").html("<h4>"+hum+" %</h4>");
        $("#precipOut").html("<h4>"+precip+"</h4>");
        $("#loc").html("<h1>Location: " +city+ "</h1>");
      },


    });

  });

function logiCon (temp , hum, precip){


  if(temp < 10) {
    var curTemp = "Cold";
    $("#weatherGlifficon").css("background-image", "url(images/snowFlacke.png)");
  }
  else if(temp > 10 && temp < 20 ) {
    var curTemp = "Fair";
    $("#weatherGlifficon").css("background-image", "url(images/normalTemp.png)");
  }
  else if(temp > 20 && temp < 30 ) {
    var curTemp = "Hot";
    $("#weatherGlifficon").css("background-image", "url(images/sunny1.png)");
  }

  console.log(curTemp)



  if(precip === "few clouds") {
    var curFrc = "fewClouds";
    $("#precipGlifficon").css("background-image", "url(images/light_clouds.png)");
  }
  else if (precip === "scattered clouds") {
    var curFrc = "scatteredClouds";
    $("#precipGlifficon").css("background-image", "url(images/scatteredClouds.png)");
  }
  else if (precip === "broken clouds") {
    var curFrc = "scatteredClouds";
    $("#precipGlifficon").css("background-image", "url(images/broken_clouds.png)");
  }
  else if (precip === "clear sky") {
    var curFrc = "scatteredClouds";
    $("#precipGlifficon").css("background-image", "url(images/nature.png)");
  }
  else if (precip === "light rain") {
    var curFrc = "scatteredClouds";
    $("#precipGlifficon").css("background-image", "url(images/drizzle.png)");
  }
  else if (precip === "mist") {
    var curFrc = "scatteredClouds";
    $("#precipGlifficon").css("background-image", "url(images/mist.png)");
  }
  console.log(curFrc);


  if(hum < 30) {
    var curFrc = "dry";
    $("#humiGlifficon").css("background-image", "url(images/dry.png)");
  }
  else if(hum > 29 && hum < 51) {
    var curFrc = "normal";
    $("#humiGlifficon").css("background-image", "url(images/normalTemp.png)");
  }

  else if(hum > 51) {
    var curFrc = "wet";
    $("#humiGlifficon").css("background-image", "url(images/wetumbrella.png)");
  }
}
