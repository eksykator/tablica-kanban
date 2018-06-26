function setupColumns(columns) {
    console.log(columns);
    columns.forEach(function(column) {
    });
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
    
var todoColumn = new Column('To do', 15);
var doingColumn = new Column('Doing', 25);
var doneColumn = new Column('Done', 45);
    
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);
    
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');
var card3 = new Card('Lorem ipsum');
var card4 = new Card('dolor sit amet');
var card5 = new Card('lalalallal');
var card6 = new Card('blebleble');
    
todoColumn.addCard(card1);
todoColumn.addCard(card6);
todoColumn.addCard(card4);
doingColumn.addCard(card2);
doingColumn.addCard(card3);
doneColumn.addCard(card5);

   