var id =    ["SDD", "GDD", "CDD", "SDDC0", "SDDC1", "SDDC2", "SDDC3", "SDDC4", "GDDC0", "GDDC1", "GDDC2", "GDDC3", "CDDC0", "CDDC1", "CDDC2", "CDDC3"];
var ups =   ["SCU", "GCU", "CCU", "SCU0", "SCU1", "SCU2", "SCU3", "SCU4", "GCU0", "GCU1", "GCU2", "GCU3", "CCU0", "CCU1", "CCU2", "CCU3"];
var downs = ["SCD", "GCD", "CCD", "SCD0", "SCD1", "SCD2", "SCD3", "SCD4", "GCD0", "GCD1", "GCD2", "GCD3", "CCD0", "CCD1", "CCD2", "CCD3"];

var main = 3;
var mainId = ["SDD", "GDD", "CDD"];
var mainUp = ["SCU", "GCU", "CCU"];
var mainDown = ["SCD", "GCD", "CCD"];

var games = 4;
var gamesUp = ["GCU0", "GCU1", "GCU2", "GCU3"];
var gamesDown = ["GCD0", "GCD1", "GCD2", "GCD3"];
var gamesId = ["GDDC0", "GDDC1", "GDDC2", "GDDC3"];

var species = 5;
var speciesUp = ["SCU0", "SCU1", "SCU2", "SCU3", "SCU4"];
var speciesDown = ["SCD0", "SCD1", "SCD2", "SCD3", "SCD4"];
var speciesId = ["SDDC0", "SDDC1", "SDDC2", "SDDC3", "SDDC4"];

var classes = 4;
var classesUp = ["CCU0", "CCU1", "CCU2", "CCU3"];
var classesDown = ["CCD0", "CCD1", "CCD2", "CCD3"];
var classesId = ["CDDC0", "CDDC1", "CDDC2", "CDDC3"];

function Display(i)
{
	var j;
	
	document.getElementById(mainId[i]).classList.toggle('show');
	
	if(document.getElementById(mainDown[i]).style.display === 'none')
	{
		document.getElementById(mainDown[i]).style.display = 'inline-block';
		document.getElementById(mainUp[i]).style.display = 'none';
	}
	else
	{
		document.getElementById(mainUp[i]).style.display = 'inline-block';
		document.getElementById(mainDown[i]).style.display = 'none';
	}
	
	for(j = 0; j < main; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(mainId[j]).classList.contains('show'))
			{
				document.getElementById(mainId[j]).classList.remove('show');
			}
			
			if(document.getElementById(mainDown[j]).style.display === 'none')
			{
				document.getElementById(mainDown[j]).style.display = 'inline-block';
				document.getElementById(mainUp[j]).style.display = 'none';
			}
		}
	}
}

function GDisplay(i)
{
	var j;
	
	document.getElementById(gamesId[i]).classList.toggle('show');
	
	if(document.getElementById(gamesDown[i]).style.display === 'none')
	{
		document.getElementById(gamesDown[i]).style.display = 'inline-block';
		document.getElementById(gamesUp[i]).style.display = 'none';
	}
	else
	{
		document.getElementById(gamesUp[i]).style.display = 'inline-block';
		document.getElementById(gamesDown[i]).style.display = 'none';
	}
	
	for(j = 0; j < games; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(gamesId[j]).classList.contains('show'))
			{
				document.getElementById(gamesId[j]).classList.remove('show');
			}
			
			if(document.getElementById(gamesDown[j]).style.display === 'none')
			{
				document.getElementById(gamesDown[j]).style.display = 'inline-block';
				document.getElementById(gamesUp[j]).style.display = 'none';
			}
		}
	}
}

function CDisplay(i)
{
	var j;
	
	document.getElementById(classesId[i]).classList.toggle('show');
	
	if(document.getElementById(classesDown[i]).style.display === 'none')
	{
		document.getElementById(classesDown[i]).style.display = 'inline-block';
		document.getElementById(classesUp[i]).style.display = 'none';
	}
	else
	{
		document.getElementById(classesUp[i]).style.display = 'inline-block';
		document.getElementById(classesDown[i]).style.display = 'none';
	}
	
	for(j = 0; j < classes; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(classesId[j]).classList.contains('show'))
			{
				document.getElementById(classesId[j]).classList.remove('show');
			}
			
			if(document.getElementById(classesDown[j]).style.display === 'none')
			{
				document.getElementById(classesDown[j]).style.display = 'inline-block';
				document.getElementById(classesUp[j]).style.display = 'none';
			}
		}
	}
}

function SDisplay(i)
{
	var j;
	
	document.getElementById(speciesId[i]).classList.toggle('show');
	
	if(document.getElementById(speciesDown[i]).style.display === 'none')
	{
		document.getElementById(speciesDown[i]).style.display = 'inline-block';
		document.getElementById(speciesUp[i]).style.display = 'none';
	}
	else
	{
		document.getElementById(speciesUp[i]).style.display = 'inline-block';
		document.getElementById(speciesDown[i]).style.display = 'none';
	}
	
	for(j = 0; j < species; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(speciesId[j]).classList.contains('show'))
			{
				document.getElementById(speciesId[j]).classList.remove('show');
			}
			
			if(document.getElementById(speciesDown[j]).style.display === 'none')
			{
				document.getElementById(speciesDown[j]).style.display = 'inline-block';
				document.getElementById(speciesUp[j]).style.display = 'none';
			}
		}
	}
}

window.onclick = function(event)
{
	var i, j, k;
	
	if(!event.target.matches('.SNButton') && !event.target.matches('.DropButton'))
	{
		for(i in downs)
		{
			document.getElementById(downs[i]).style.display = 'inline-block';
		}
		for(j in ups)
		{
			document.getElementById(ups[j]).style.display = 'none';
		}
		for(k in id)
		{
			if(document.getElementById(id[k]).classList.contains('show'))
			{
				document.getElementById(id[k]).classList.remove('show');
			}
		}
	}
}