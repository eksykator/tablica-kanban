document.addEventListener('DOMContentLoaded', function() {

    function randomString() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var str = '';
        for(var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
     
    function initSortable(id) {
        var el = document.getElementById(id);
        var sortable = Sortable.create(el, {
            group: 'kanban',
            sort: true
        });
    }

    var addColumnButton = document.querySelector('.create-column');
        addColumnButton.addEventListener('click', function(){
        var nameOfColumn = prompt('Jaką kolumnę chcesz stworzyć? Podaj jej nazwę');
        var columnName = new Column(nameOfColumn);
        board.addColumn(columnName);
    });
    
    var todoColumn = new Column('To do');
    var doingColumn = new Column('Doing');
    var doneColumn = new Column('Done');
    
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
});
   