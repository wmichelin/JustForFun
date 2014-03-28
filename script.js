var numRows = 1;
var counter = 0;
var dataRef = new Firebase('https://sweltering-fire-9340.firebaseio.com/justforfun/myData');

function hello()
{
	console.log("it works <3");
	dataRef.on('value', function(snapshot){
		if(snapshot.val() === null)
		{
			console.log("NULL BITCHES");
		}
		else
		{
			var x = snapshot.val();
			console.log(x.stuff);
			addToTable(x.stuff);
		}
	});
}

function execute(var1)
{
	console.log('clicked');
	document.getElementById('box1').value = '';
	if(var1 != '')
	{
		console.log(var1);
		//numRows = numRows + 1;
		writeToDB(var1);
		addToTable(var1);

	}
}

function addToTable(var1)
{	
	var table = document.getElementById('table');
	if(counter == 0)
	{
		var row = table.insertRow(numRows);
		var cell = row.insertCell(0);
		counter ++;
	}
	else
	{
		var cell = table.rows[1].cells.item(0);

	}
	cell.innerHTML = var1;

}

function writeToDB(var1)
{
	dataRef.child("stuff").set(var1);
}


