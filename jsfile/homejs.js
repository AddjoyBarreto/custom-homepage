var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
showtime();

function showtime(){
	if(h.toString().length == 1) //making sure that hours has 2 digits
	{
		h = ['0',h].join('');
	}

	if(m.toString().length == 1) //making sure that minutes has 2 digits
	{
		m = ['0',m].join('');
	}

	var pretty = [h,':',m].join(''); //joining the hours and minutes

	document.getElementById("da").innerHTML = d.toDateString();  	//displaying the date
	document.getElementById("ti").innerHTML = pretty;               //displaying the time
	document.getElementById("saying").innerHTML = "Good Morning";	//displaying greeting

	a = d.getHours();

	//changing the greeting and background image according to the time i.e. hours
	if (a>=12 && a<16) {

		document.getElementById("saying").innerHTML = "Good Afternoon";
		document.body.style.backgroundImage = "url('./img/kym-647115-unsplash.jpg')";
	}

	else if (a<=23 && a>=16) {

		document.getElementById("saying").innerHTML = "Good evening";
		document.body.style.backgroundImage = "url('./img/pexels-photo-878151.jpeg')";
	}

	else if(a>=0 && a<12){
		document.getElementById("saying").innerHTML = "Good Morning";
		document.body.style.backgroundImage = "url('./img/pexels-photo-878151.jpeg')"; 
		document.body.style.padding = "16px 0 0 0";
	}


setInterval(showtime,1000);
}
