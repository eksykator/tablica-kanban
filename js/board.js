var board = {
        name: 'Kanban board',
        divBoard: document.querySelector('.column-container'),
        addColumn: function(column) {
            this.divBoard.appendChild(column.columnContainer);
            initSortable(column.id);
        }
    }