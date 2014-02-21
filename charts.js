function drawVisualization() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AvRClkFMLkcpdFVzVEdqSDdSclBvcnI5N05UVktkZkE&usp=sharing#gid=0');
	query.send(handleQueryResponse);
}

function handleQueryResponse( response ) {
	
	if ( response.isError() ) {
		window.alert('Error importando datos: '+ response.getMessage() + ', Detalles:' + response.getDetailedMessage() );
	}
	else {
		var data = response.getDataTable();
		new google.visualization.Table(document.getElementById('tabla')).draw(data, null);
		new google.visualization.PieChart(document.getElementById('pastel')).draw(data, {title:"Como ocupas tu dia?"});
	}
}

google.setOnLoadCallback(drawVisualization);
