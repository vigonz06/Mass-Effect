var Ids = [
[{ButtonId:"GDB", DropId:"GDD", CaretUpId:"GCU", CaretDownId:"GCD"}, {ButtonId:"SDB", DropId:"SDD", CaretUpId:"SCU", CaretDownId:"SCD"}, {ButtonId:"CDB", DropId:"CDD", CaretUpId:"CCU", CaretDownId:"CCD"}, {ButtonId:"PDB", DropId:"PDD", CaretUpId:"PCU", CaretDownId:"PCD"}, {ButtonId:"LDB", DropId:"LDD", CaretUpId:"LCU", CaretDownId:"LCD"}],
[{ButtonId:"GDB0", DropId:"GDDC0", CaretUpId:"GCU0", CaretDownId:"GCD0"}, {ButtonId:"GDB1", DropId:"GDDC1", CaretUpId:"GCU1", CaretDownId:"GCD1"}, {ButtonId:"GDB2", DropId:"GDDC2", CaretUpId:"GCU2", CaretDownId:"GCD2"}, {ButtonId:"GDB3", DropId:"GDDC3", CaretUpId:"GCU3", CaretDownId:"GCD3"}],
[{ButtonId:"SDB0", DropId:"SDDC0", CaretUpId:"SCU0", CaretDownId:"SCD0"}, {ButtonId:"SDB1", DropId:"SDDC1", CaretUpId:"SCU1", CaretDownId:"SCD1"}, {ButtonId:"SDB2", DropId:"SDDC2", CaretUpId:"SCU2", CaretDownId:"SCD2"}, {ButtonId:"SDB3", DropId:"SDDC3", CaretUpId:"SCU3", CaretDownId:"SCD3"}, {ButtonId:"SDB4", DropId:"SDDC4", CaretUpId:"SCU4", CaretDownId:"SCD4"}],
[{ButtonId:"CDB0", DropId:"CDDC0", CaretUpId:"CCU0", CaretDownId:"CCD0"}, {ButtonId:"CDB1", DropId:"CDDC1", CaretUpId:"CCU1", CaretDownId:"CCD1"}, {ButtonId:"CDB2", DropId:"CDDC2", CaretUpId:"CCU2", CaretDownId:"CCD2"}],
[{ButtonId:"PDB0", DropId:"PDDC0", CaretUpId:"PCU0", CaretDownId:"PCD0"}, {ButtonId:"PDB1", DropId:"PDDC1", CaretUpId:"PCU1", CaretDownId:"PCD1"}, {ButtonId:"PDB2", DropId:"PDDC2", CaretUpId:"PCU2", CaretDownId:"PCD2"}]
];

function Display(i, j)
{	
	if(document.getElementById(Ids[i][j].DropId).classList.contains('show'))
	{
		document.getElementById(Ids[i][j].DropId).classList.remove('show');
		document.getElementById(Ids[i][j].CaretUpId).style.display = 'none';
		document.getElementById(Ids[i][j].ButtonId).classList.remove('clicked');
		document.getElementById(Ids[i][j].CaretDownId).style.display = 'inline-block';
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
					document.getElementById(Ids[k][l].CaretUpId).style.display = 'none';
					document.getElementById(Ids[k][l].ButtonId).classList.remove('clicked');
					document.getElementById(Ids[k][l].CaretDownId).style.display = 'inline-block';
				}
			}
		}
		document.getElementById(Ids[i][j].DropId).classList.add('show');
		document.getElementById(Ids[i][j].ButtonId).classList.add('clicked');
		document.getElementById(Ids[i][j].CaretDownId).style.display = 'none';
		document.getElementById(Ids[i][j].CaretUpId).style.display = 'inline-block';
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
					document.getElementById(Ids[i][j].CaretUpId).style.display = 'none';
					document.getElementById(Ids[i][j].ButtonId).classList.remove('clicked');
					document.getElementById(Ids[i][j].CaretDownId).style.display = 'inline-block';
				}
			}
		}
	}
}