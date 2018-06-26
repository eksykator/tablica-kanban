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