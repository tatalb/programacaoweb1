var resultado = 50;
function soma(){
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var n3 = document.getElementById('num3').value;
    resultado = Number(n1)+Number(n2)+Number(n3);
}
var eoq = "Par";
function parOuimpar(){
    var aux = resultado%2;
    if(aux != 0){
       return "Impar";
    }
    return  "Par";
}

function mostrar(soma,parOuimpar){
    this.soma();
    var mensagem  = "A Soma é: "
    mensagem = mensagem + resultado + "\n"
    mensagem = mensagem + "O resultado é: "
    mensagem = mensagem + this.parOuimpar();
    alert(mensagem);
}