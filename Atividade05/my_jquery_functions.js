$(document).ready(function () {
    $('#bt1').click(function () {
        $("#questao02 p.vermelho").hide();
    });

    $('#bt2').click(function () {
        $("#questao02 p:odd").hide();
    });

    $('#bt3').click(function () {
        $('p.vermelho').append("- par");
    });

    $('#bt4').click(function () {
        $("#questao02 .vermelho").removeClass('vermelho').addClass('azul');
    });
    $('#bt5').click(function () {
        $('p:odd').hide();
    });
    $('#bt6').click(function () {
        $('p:odd').hide();
    });
    $('#bt7').click(function () {
        $('p').hide();
    });
    $('#bt8').click(function () {
        $('p:odd').hide();
    });
    $('#bt9').click(function () {
        $('questao02').hide(1500).show(1500);
    });
});