var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3385',
  'X-Auth-Token': 'd4111a1514fa261bf045d1ba12ec0dd0'
};
     
function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
        group: 'kanban',
        sort: true
    });
}