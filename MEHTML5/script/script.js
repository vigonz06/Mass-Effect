var Ids = 
[
[
{ButtonId:"GDB", DropId:"GDD"}, 
{ButtonId:"SDB", DropId:"SDD"}, 
{ButtonId:"CDB", DropId:"CDD"}, 
{ButtonId:"PDB", DropId:"PDD"}, 
{ButtonId:"LDB", DropId:"LDD"}
],
[
{ButtonId:"GDB0", DropId:"GDDC0"},
{ButtonId:"GDB1", DropId:"GDDC1"},
{ButtonId:"GDB2", DropId:"GDDC2"}, 
{ButtonId:"GDB3", DropId:"GDDC3"}
],
[
{ButtonId:"SDB0", DropId:"SDDC0"}, 
{ButtonId:"SDB1", DropId:"SDDC1"}, 
{ButtonId:"SDB2", DropId:"SDDC2"}, 
{ButtonId:"SDB3", DropId:"SDDC3"}, 
{ButtonId:"SDB4", DropId:"SDDC4"}
],
[
{ButtonId:"CDB0", DropId:"CDDC0"}, 
{ButtonId:"CDB1", DropId:"CDDC1"}, 
{ButtonId:"CDB2", DropId:"CDDC2"}
],
[
{ButtonId:"PDB0", DropId:"PDDC0"}, 
{ButtonId:"PDB1", DropId:"PDDC1"}, 
{ButtonId:"PDB2", DropId:"PDDC2"}
]
];

function Display(i, j)
{	
	if(document.getElementById(Ids[i][j].DropId).classList.contains('show'))
	{
		document.getElementById(Ids[i][j].DropId).classList.remove('show');
		document.getElementById(Ids[i][j].ButtonId).classList.remove('clicked');
	}
	else
	{
		var k, l;
		
		for(k = (i == 0) ? 0 : 1; k < Ids.length; k++)
		{
			for(l in Ids[k])
			{
				if(document.getElementById(Ids[k][l].DropId).classList.contains('show'))
				{
					document.getElementById(Ids[k][l].DropId).classList.remove('show');
					document.getElementById(Ids[k][l].ButtonId).classList.remove('clicked');
				}
			}
		}
		document.getElementById(Ids[i][j].DropId).classList.add('show');
		document.getElementById(Ids[i][j].ButtonId).classList.add('clicked');
	}
}

window.onclick = function(event)
{	
	if(!event.target.matches('.SNButton') && !event.target.matches('.DropButton'))
	{
		var i, j;
	
		for(i in Ids)
		{
			for(j in Ids[i])
			{
				if(document.getElementById(Ids[i][j].DropId).classList.contains('show'))
				{
					document.getElementById(Ids[i][j].DropId).classList.remove('show');
					document.getElementById(Ids[i][j].ButtonId).classList.remove('clicked');
				}
			}
		}
	}
}