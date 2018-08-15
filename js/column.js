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

    var columnObject = this; 
     
    this.divColumn.querySelector('.delete-column').addEventListener('click', function() {
       
        var self = this;
        
        fetch(baseUrl + '/column/' + columnObject.id, {
            method: 'DELETE',
            headers: myHeaders
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
             self.parentNode.parentNode.removeChild(self.parentNode);
        })
    });

    var self = this;
     
    this.divColumn.querySelector('.add-card').addEventListener('click', function() {
        var contentOfCard = prompt('Podaj treść karteczki');
        
        var data = new FormData();
        data.append('name', contentOfCard);
        data.append('bootcamp_kanban_column_id', id)
        
        fetch(baseUrl + '/card', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            var card = new Card(contentOfCard, resp.id);   
            self.addCard(card);
        })
    });
}

Column.prototype.addCard = function(card) {
    this.divColumn.querySelector('ul').appendChild(card.cardItem);
}

