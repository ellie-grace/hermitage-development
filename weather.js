var icon=document.querySelector("#weather-icon");
var temp=document.querySelector("#weather-temp");

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200){
	var data = JSON.parse(XHR.responseText);
	var kelvin=data.main['temp'];
	var celsius=Math.round(kelvin-273.15);
	var iconCode=data.weather[0].icon;
	temp.innerText=celsius;
	icon.src="http://openweathermap.org/img/w/"+iconCode+".png"
	
	




};
    }
  
  XHR.open("GET", 'https://api.openweathermap.org/data/2.5/weather?&id=2562655&APPID=40a212561317210107b5f841934217ca');
  XHR.send();

