function Todo() {
  var list= storeTodos();

  var l = '<ul>';
  for (i = 0; i < list.length; i++){
    l += '<li><span class="todoItem">' + list[i] + '</span><a href="#" class="deleteItems"> x</a>' + '</li>';
  };
  l += '</ul>';

  document.getElementById('items').innerHTML = l;
  var items = document.getElementsByClassName('todoItem');

  for (i = 0; i < items.length; i++) {
    var clicked = false;
    items[i].addEventListener('click', clickhandler);
    items[i].id = 'items-' + i;
    id = items[i].id;
  }

    var deletes = document.getElementsByClassName('deleteItems');
    for (i = 0; i < deletes.length; i++) {
      deletes[i].addEventListener('click', remove);
    };
}

function remove(deletes) {
var clicks = true;
if (clicks) {
  console.log(id);
  var todos = storeTodos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  Todo();
  return false;
}
}