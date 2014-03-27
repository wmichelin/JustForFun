var numRows = 0;

function hello()
{
	console.log("it works <3");
}

function execute(var1)
{
	console.log('clicked');
	document.getElementById('box1').value = '';
	if(var1 != '')
	{
		console.log(var1);
		addToTable(var1);
	}
}

function addToTable(var1)
{	
	var table = document.getElementById('table');
	var row = table.insertRow(numRows + 1);
	var cell1 = row.insertCell(0);
	numRows = numRows + 1;
	cell1.innerHTML = var1;

}

