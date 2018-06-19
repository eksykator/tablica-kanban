var board = {
    name: 'Kanban board',
    divBoard: document.querySelector('.column-container'),
    addColumn: function(column) {
        console.log(column.divColumn)
        this.divBoard.appendChild(column.divColumn);
    }
}

function Column(name) {
    this.name = name;
    this.divColumn = document.createElement('div');
    this.divColumn.classList.add('column');
    this.divColumn.innerHTML = '<h2>' + this.name + '</h2>';
    console.log(Column);
    Column.prototype.addCard = function(card) {
        
        var self = this;
        self.divColumn.appendChild(card.divCard);
    }
};

var addColumnButton = document.querySelector('.create-column');
addColumnButton.addEventListener('click', function(){
    var nameOfColumn = prompt('Jaką kolumnę chcesz stworzyć? Podaj jej nazwę');
    var columnName = new Column(nameOfColumn);
    board.addColumn(columnName);
});

function Card(name, description) {
    this.name = name;
    this.description = description;
    this.divCard = document.createElement('div');
    this.divCard.classList.add('card');
    this.divCard.innerHTML = '<h3>' + this.name + '</h3>' + '<p>' + this.description + '</p>';
}

var cardTask1 = new Card('Task 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

var cardTask2 = new Card('Task 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

var cardTask3 = new Card('Task 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

columnToDo.addCard(cardTask1);

columnDoing.addCard(cardTask2);

columnDone.addCard(cardTask3);

