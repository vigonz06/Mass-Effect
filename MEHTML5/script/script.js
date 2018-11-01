var downs = ["SCD", "GCD"];
var ups = ["SCU", "GCU"];
var id = ["SDD", "GDD"];

function Display(i)
{
	var j, k;
	
	k = (i == 0) ? 1 : 0;
	
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
	
	if(document.getElementById(id[k]).classList.contains('show'))
	{
		document.getElementById(id[k]).classList.remove('show');
		
		document.getElementById(downs[k]).style.display = 'inline-block';
		document.getElementById(ups[k]).style.display = 'none';
	}
}

window.onclick = function(event)
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
}