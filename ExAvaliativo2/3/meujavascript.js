var lista = new Array();
lista= ["Banana", "Abacate", "Álcool em gel", "Desodorante"];
function mostrar() {
    document.getElementById('foo').appendChild(makeUL(lista));    
   
}
function makeUL(array) {
// cria o elemento lista
var list = document.createElement('ul');

 for(var i = 0; i < array.length; i++) {
// Cria o item que vai na lista:
var item = document.createElement('li');

// Seta o valor do item:
item.appendChild(document.createTextNode(array[i]));

// Adiciona a o item na lista:
list.appendChild(item);
}

// Retorna a lista ul
return list;
}
