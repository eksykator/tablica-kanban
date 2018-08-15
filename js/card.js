function Card(content, id) {
    this.content = content;
    this.id = id;

    var cardParams = {
        contentOfCard: content
    }

    var cardTemplate = document.getElementById('card-template').innerHTML;
    Mustache.parse(cardTemplate);

    this.cardItem = document.createElement('li');
    this.cardItem.classList.add('card');
    this.cardItem.id = this.id;
    this.cardItem.innerHTML = Mustache.render(cardTemplate, cardParams);
        
    var cardObject = this;
    
    this.cardItem.querySelector('.delete-card').addEventListener('click', function() {
            
        var self = this;
            
        fetch(baseUrl + '/card/' + cardObject.id, {
            method: 'DELETE', 
            headers: myHeaders
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            self.parentNode.parentNode.removeChild(self.parentNode);
        })
    })
}