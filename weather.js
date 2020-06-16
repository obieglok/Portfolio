
var locationn="Dublin,ie";
locationn=document.getElementById("Location").value;
const form=document.getElementById("form");
const errorElement=document.getElementById("error");
form.addEventListener("submit", () => {
  console.log("here");
  let messages= [];
  if(locationn.value=== '' || locationn.value===null){
    messages.push("Location is Required");
  }
  if(messages.length>0){
      //e.preventDefault();
      errorElement.innerText=messages.join(', ');
  }
});
console.log(locationn);

var city="Dublin,ie";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ locationn +"&units=metric&appid=47c201283320c692edd6f99afa43fb97",function(data){
  console.log(data);

  var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
  var temp=Math.round(data.main.temp);
  var weather=data.weather[0].main;
  var location=data.name;
  var country=data.sys.country;
  $('.weatherpicture').attr('src',icon);
  $('.weather').append(weather);
  $(".temp").append(temp + " C");
  $(".country").append(country);
  // console.log(location);
  $(".location").append(location);

});
// function locationofPerson()
// {
//   var input=document.getElementById("Location").value;
//   console.log(input);
//   alert(input);
// }
