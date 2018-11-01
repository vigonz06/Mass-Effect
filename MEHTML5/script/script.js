var id = ["SDD", "GDD", "SDDC0", "SDDC1", "SDDC2", "SDDC3", "SDDC4", "GDDC0", "GDDC1", "GDDC2", "GDDC3"];
var downs = ["SCD", "GCD", "SCD0", "SCD1", "SCD2", "SCD3", "SCD4", "GCD0", "GCD1", "GCD2", "GCD3"];
var ups = ["SCU", "GCU", "SCU0", "SCU1", "SCU2", "SCU3", "SCU4", "GCU0", "GCU1", "GCU2", "GCU3"];

function Display(i)
{
	var j, k;
	
	j = (i >= 0 & i <= 1) ? 0 : (i >= 2 & i <= 6) ? 2 : 7;
	k = (i >= 0 & i <= 1) ? 1 : (i >= 2 & i <= 6) ? 6 : 10;
	
	if(document.getElementById(id[i]).style.display === 'none')
	{
		document.getElementById(id[i]).style.display = 'block';
	}
	else
	{
		document.getElementById(id[i]).style.display = 'none';
	}
	
	if(document.getElementById(downs[i]).style.display === 'none')
	{
		document.getElementById(downs[i]).style.display = 'inline-block';
		document.getElementById(ups[i]).style.display = 'none';
	}
	else
	{
		document.getElementById(ups[i]).style.display = 'inline-block';
		document.getElementById(downs[i]).style.display = 'none';
	}
	
	/*for(; j <= k; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(id[j]).classList.contains('show'))
			{
				document.getElementById(id[j]).classList.remove('show');
			
				document.getElementById(downs[j]).style.display = 'inline-block';
				document.getElementById(ups[j]).style.display = 'none';
			}
		}
	}*/
}

/*window.onclick = function(event)
{
	var i, j, k;
	
	if(!event.target.matches('.SNButton'))
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
}*/