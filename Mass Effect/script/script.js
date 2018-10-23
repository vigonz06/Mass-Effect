function Display(i)
{
	var downs = ["GCD0", "GCD1", "GCD2", "GCD3", "SCD0", "SCD1", "SCD2", "SCD3", "SCD4"];
	var ups   = ["GCU0", "GCU1", "GCU2", "GCU3", "SCU0", "SCU1", "SCU2", "SCU3", "SCU4"];
	var id    = ["GDD0", "GDD1", "GDD2", "GDD3", "SDD0", "SDD1", "SDD2", "SDD3", "SDD4"];
	var j, k;
	
	j = (i < 4) ? 0 : 4;
	k = (i < 4) ? 4 : 9;
	
	document.getElementById(id[i]).classList.toggle('show');
	
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
	
	for(; j < k; j++)
	{
		if(!(j == i))
		{
			if(document.getElementById(id[j]).classList.contains('show'))
			{
				document.getElementById(id[j]).classList.remove('show');
			}
			
			if(document.getElementById(downs[j]).style.display === 'none')
			{
				document.getElementById(downs[j]).style.display = 'inline-block';
				document.getElementById(ups[j]).style.display = 'none';
			}
		}
	}
}

window.onclick = function(event)
{
	var downs = ["GCD0", "GCD1", "GCD2", "GCD3", "SCD0", "SCD1", "SCD2", "SCD3", "SCD4"];
	var ups   = ["GCU0", "GCU1", "GCU2", "GCU3", "SCU0", "SCU1", "SCU2", "SCU3", "SCU4"];
	var dropdowns = document.getElementsByClassName("DDContent");
	var i, j, k;
		
	if (!event.target.matches('.DropButton'))
	{		
		for (i in dropdowns) 
		{
			var openDropdown = dropdowns[i];
			
			if (openDropdown.classList.contains('show')) 
			{
				openDropdown.classList.remove('show');
			}
		}
		
		for(j in downs)
		{			
			document.getElementById(downs[j]).style.display = 'inline-block';
		}
		
		for(k in ups)
		{			
			document.getElementById(ups[k]).style.display = 'none';
		}
	}
}