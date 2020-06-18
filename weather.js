
// var locationn="Dublin,ie";
var locationn=document.getElementById("Location").value
const form=document.getElementById("form");
const errorElement=document.getElementById("error");
form.addEventListener("Submit", () => {
  // console.log("here");
  let messages= [];
  if(locationn=== '' || locationn===null){
    messages.push("Location is Required");
  }


  if(messages.length>0){
      //event.preventDefault();
      errorElement.innerText=messages.join(', ');
  }
});


$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ locationn+"&units=metric&appid=47c201283320c692edd6f99afa43fb97",function(data){
  //console.log(data);
  var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
  var temp=Math.round(data.main.temp);
  var weather=data.weather[0].main;
  var location=data.name;
  var country=data.sys.country;
  var wind=data.wind.speed;
  $('.weatherpicture').attr('src',icon);
  $('.weather').append(weather);
  $(".temptitle").append("Temperature");
  $(".temp").append(temp + " °C");
  $(".windtitle").append("Wind Speed");
  $(".wind").append(wind);
  // $(".weather-container").append(box);
  document.getElementById("location").innerHTML = "";
  $(".location").append(location+", "+country);

});
