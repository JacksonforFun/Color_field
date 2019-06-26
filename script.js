var Colors = ["blue", "red", "yellow", "green"];
var color_in_use = 0;
var last_color = "white";
var Main_elem = -1;
//var checker = 0;

var field = document.getElementById("field");
var n = field.offsetWidth/50;

for (var i = 0; i < n; i++) {
	var newColumn = document.createElement('div');
	newColumn.className = "column";
	
	field.appendChild(newColumn);
}
console.log(field);

var columns = document.getElementsByClassName("column");
console.log(columns);



function print()
{
	while (field.firstChild) {						
    field.removeChild(field.firstChild);
	}
	
}



function modeling()
{
  if (Main_elem < n-1)
  	Main_elem++;
  else
  {
  	Main_elem = 0;
  	console.log(Colors);
  	console.log(color_in_use);
  	console.log(last_color);
  	last_color = color_in_use;
  	if (color_in_use < Colors.length-1)
  		color_in_use++;	
  	else
  		color_in_use = 0;	
  }
	   
  var opacity_in_use = 1;
  for (var i = Main_elem; i >= 0; i--)		
	{
		columns[i].style.background = Colors[color_in_use];
		columns[i].style.opacity = opacity_in_use;
		opacity_in_use -= 0.1;
	}

  for (var i = n-1; i > Main_elem; i--)		
	{
		columns[i].style.background = Colors[last_color];
		columns[i].style.opacity = opacity_in_use;
		opacity_in_use -= 0.1;
	}
}

function start_wave()
{
  setTimeout(function ()
	{
		modeling();
    if (true) {
      start_wave();
    }
  }, 50)
}
