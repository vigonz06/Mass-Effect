var Ids = [
[{ButtonId:"SDD", CaretUpId:"SCU", CaretDownId:"SCD"}, {ButtonId:"GDD", CaretUpId:"GCU", CaretDownId:"GCD"}],
[{ButtonId:"SDDC0", CaretUpId:"SCU0", CaretDownId:"SCD0"}, {ButtonId:"SDDC1", CaretUpId:"SCU1", CaretDownId:"SCD1"},{ButtonId:"SDDC2", CaretUpId:"SCU2", CaretDownId:"SCD2"},{ButtonId:"SDDC3", CaretUpId:"SCU3", CaretDownId:"SCD3"},{ButtonId:"SDDC4", CaretUpId:"SCU4", CaretDownId:"SCD4"}],
[{ButtonId:"GDDC0", CaretUpId:"GCU0", CaretDownId:"GCD0"}, {ButtonId:"GDDC1", CaretUpId:"GCU1", CaretDownId:"GCD1"}, {ButtonId:"GDDC2", CaretUpId:"GCU2", CaretDownId:"GCD2"}, {ButtonId:"GDDC3", CaretUpId:"GCU3", CaretDownId:"GCD3"}]
];

function Display(i, j)
{
	var k;	
	
	document.getElementById(Ids[i][j].ButtonId).classList.toggle('show');
	
	if(document.getElementById(Ids[i][j].CaretDownId).style.display === 'none')
	{
		document.getElementById(Ids[i][j].CaretDownId).style.display = 'inline-block';
		document.getElementById(Ids[i][j].CaretUpId).style.display = 'none';
	}
	else
	{
		document.getElementById(Ids[i][j].CaretUpId).style.display = 'inline-block';
		document.getElementById(Ids[i][j].CaretDownId).style.display = 'none';
	}
	
	for(k in Ids[i])
	{
		if(!(k == j))
		{
			if(document.getElementById(Ids[i][k].ButtonId).classList.contains('show'))
			{
				document.getElementById(Ids[i][k].ButtonId).classList.remove('show');
			}
			
			if(document.getElementById(Ids[i][k].CaretDownId).style.display === 'none')
			{
				document.getElementById(Ids[i][k].CaretDownId).style.display = 'inline-block';
				document.getElementById(Ids[i][k].CaretUpId).style.display = 'none';
			}
		}
	}
}

window.onclick = function(event)
{
	var i, j;
	
	if(!event.target.matches('.SNButton') && !event.target.matches('.DropButton'))
	{
		for(i in Ids)
		{
			for(j in Ids)
			{
				if(document.getElementById(Ids[i][j].ButtonId).classList.contains('show'))
				{
					document.getElementById(Ids[i][j].CaretDownId).style.display = 'inline-block';
					document.getElementById(Ids[i][j].ButtonId).classList.remove('show');
					document.getElementById(Ids[i][j].CaretUpId).style.display = 'none';
				}
			}
		}
	}
}