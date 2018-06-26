 function Column(name, id) {
    this.name = name;
    this.id = id;

    var ColumnTemplate = document.getElementById('column-template').innerHTML;
    Mustache.parse(ColumnTemplate);  

    var columnParams = {
        nameOfColumn: name,
        id: this.id
    };
        
    this.divColumn = document.createElement('div');
    this.divColumn.classList.add('column');
    this.divColumn.innerHTML = Mustache.render(ColumnTemplate, columnParams);

    this.divColumn.querySelector('.delete-column').addEventListener('click', function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    var self = this;
    this.divColumn.querySelector('.add-card').addEventListener('click', function() {
        var contentOfCard = prompt('Podaj treść karteczki');
        var card = new Card(contentOfCard);   
        self.addCard(card);
    });
}

Column.prototype.addCard = function(card) {
    this.divColumn.querySelector('ul').appendChild(card.divCard);
}

