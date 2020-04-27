function Filme(titulo, genero, ano) {
     this.titulo = titulo;
     this.genero = genero;
     this.ano = ano;
   }


var Filme1 = new Filme("Titanic","Drama",1997 );
var Filme2 = new Filme("O Poderoso Chefão","Crime",1972 );
var Filme3 = new Filme("1917","Guerra",2019 );

function minhaFuncao() {
     debugger
     document.getElementById("demo").innerHTML = "Filme 1: " + Filme1.titulo + ", estreado em " + Filme1.ano + " e do gênero "  +  Filme1.genero  + "<br />" 
     + "Filme 2: " + Filme2.titulo + ", estreado em " + Filme2.ano + " e do gênero "  +  Filme2.genero + "<br />" 
     + "Filme 3: " + Filme3.titulo + ", estreado em " + Filme3.ano + " e do gênero "  +  Filme3.genero ;
}




