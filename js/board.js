var board = {
        name: 'Kanban board',
        boardContainer: document.querySelector('.column-container'),
        addColumn: function(column) {
            this.boardContainer.appendChild(column.columnContainer);
            initSortable(column.id);
        }
    }