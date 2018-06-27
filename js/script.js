function setupColumns(columns) {
    console.log(columns);
    for(var i = 0; i < columns.length; i++) {
        var columnObject = new Column(columns[i].name, columns[i].id)
        board.addColumn(columnObject);
        for(var j = 0; j < columns[i].cards.length; j++) {
            columnObject.addCard(new Card(columns[i].cards[j].name, columns[i].cards[j].id))
        }
    } 
}

fetch(baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

var addColumnButton = document.querySelector('.create-column');
    addColumnButton.addEventListener('click', function(){
    var nameOfColumn = prompt('Jaką kolumnę chcesz stworzyć? Podaj jej nazwę');
    
    var data = new FormData();
        
    data.append('name', nameOfColumn);
        
    fetch(baseUrl + '/column', {
        method: 'POST',
        headers: myHeaders,
        body: data,
    })  
        .then(function(resp) {
        return resp.json();
    })
        .then(function(resp) {
        var column = new Column(nameOfColumn, resp.id);
        board.addColumn(column);
    })
});


   