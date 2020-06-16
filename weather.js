
var city="Dublin,ie"
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=47c201283320c692edd6f99afa43fb97",function(data){
  console.log(data);

  var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
  var temp=Math.round(data.main.temp);
  var weather=data.weather[0].main;
  $('.weatherpicture').attr('src',icon);
  $('.weather').append(weather);
  $(".temp").append(temp + " C");
});
