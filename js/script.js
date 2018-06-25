document.addEventListener('DOMContentLoaded', function() {
     var board = {
        name: 'Kanban board',
        divBoard: document.querySelector('.column-container'),
        addColumn: function(column) {
            console.log(column.divColumn)
            this.divBoard.appendChild(column.divColumn);
        }
    }

    function randomString() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var str = '';
        for(var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
     
    function Card(content) {
        this.content = content;
        this.id = randomString();

        var cardParams = {
            contentOfCard: content
        }

        var cardTemplate = document.getElementById('card-template').innerHTML;
        Mustache.parse(cardTemplate);

        this.divCard = document.createElement('li');
        this.divCard.classList.add('card');
        this.divCard.id = this.id;
        this.divCard.innerHTML = Mustache.render(cardTemplate, cardParams);

        this.divCard.querySelector('.delete-card').addEventListener('click', function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }

    function Column(name) {
        this.name = name;
        this.id = randomString();

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
            console.log(self);
            console.log(self.divColumn);
            var contentOfCard = prompt('Podaj treść karteczki');

            var card = new Card(contentOfCard);
            console.log(card, card.divCard);    
            self.divColumn.querySelector('ul').appendChild(card.divCard);

        });

    }

    Column.prototype.addCard = function() {
        console.log(addCard);
        var self = this;
        self.divColumn.appendChild(card.divCard);
        console.log(divCard);
    }

    var addColumnButton = document.querySelector('.create-column');
        addColumnButton.addEventListener('click', function(){
        var nameOfColumn = prompt('Jaką kolumnę chcesz stworzyć? Podaj jej nazwę');
        var columnName = new Column(nameOfColumn);
        board.addColumn(columnName);
    });




});
   