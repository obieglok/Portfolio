
var city="Dublin,ie"
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=47c201283320c692edd6f99afa43fb97",function(data){
  console.log(data);

  var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
  var temp=Math.round(data.main.temp);
  var weather=data.weather[0].main;
  var location=data.name;
  $('.weatherpicture').attr('src',icon);
  $('.weather').append(weather);
  $(".temp").append(temp + " C");
  // console.log(location);
  $(".location").append(location);

});
// function locationofPerson()
// {
//   var input=document.getElementById("Location").value;
//   console.log(input);
//   alert(input);
// }

const area=document.getElementById("Location");
const form=document.getElementById("form");
const errorElement=document.getElementById("error");
form.addEventListener("submit", (e) => {
  console.log("here");
  let messages= [];
  if(area.value=== '' || area.value===null){
    messages.push("Location is Required");
  }
  if(messages.length>0){
      e.preventDefault();
      errorElement.innerText=messages.join(', ');
  }
});
