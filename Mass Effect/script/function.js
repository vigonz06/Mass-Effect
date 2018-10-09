function Deploy(i)
{
	var j, k;
	var id = ["SDD1", "SDD2", "SDD3", "SDD4", "SDD5", "GDD1", "GDD2", "GDD3", "GDD4"];
	
	document.getElementById(id[i]).classList.toggle("show");
	
	j = (i < 5) ? 0 : 5;
	k = (i < 5) ? 5 : 9;
	
	for(; j < k; j++)
	{
		if(!(j == i) && document.getElementById(id[j]).classList.contains('show'))
		{
			document.getElementById(id[j]).classList.toggle('show');
		}
	}
}

window.onclick = function(event) 
{
	if (!event.target.matches('.DropButton')) 
	{
		var i;
		var openDropdown;
		var DDContent = document.getElementsByClassName('DDContent');

		for(i in DDContent)
		{
			openDropdown = DDContent[i];
			
			if(openDropdown.classList.contains('show')) 
			{
				openDropdown.classList.remove('show');
			}
		}
	}
} 