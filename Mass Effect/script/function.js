function SDeploy1() 
{
	document.getElementById("SDD1").classList.toggle("show");
}

function SDeploy2() 
{
	document.getElementById("SDD2").classList.toggle("show");
}

function SDeploy3() 
{
	document.getElementById("SDD3").classList.toggle("show");
}

function SDeploy4()
{
	document.getElementById("SDD4").classList.toggle("show");
}

function SDeploy5()
{
	document.getElementById("SDD5").classList.toggle("show");
}

function GDeploy1() 
{
	document.getElementById("GDD1").classList.toggle("show");
}

function GDeploy2() 
{
	document.getElementById("GDD2").classList.toggle("show");
}

function GDeploy3() 
{
	document.getElementById("GDD3").classList.toggle("show");
}

function GDeploy4() 
{
	document.getElementById("GDD4").classList.toggle("show");
}

window.onclick = function(event) 
{
	if (!event.target.matches('.DropButton')) 
	{
		var i;
		var dropdowns = document.getElementsByClassName("DDContent");

		for (i = 0; i < dropdowns.length; i++)
		{
			var openDropdown = dropdowns[i];
			
			if (openDropdown.classList.contains('show')) 
			{
				openDropdown.classList.remove('show');
			}
		}
	}
} 