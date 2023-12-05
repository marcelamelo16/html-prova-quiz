$(document).ready(function () {

    var pontuacao = 0;

    //Mostrar a primeira tela
        $("#telainicial").show();
        $("#cabeçalho").show();
        $("#img1").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
        $("#btrecomeçar").hide();

    $("#btiniciar").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").show();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
    })


    $("#btvddc1,#btfalsoa1,#btfalsob1,#btfalsod1").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").show();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
    });


    $("#btvdda2,#btfalsob2,#btfalsoc2,#btfalsod2").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").show();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
    });


    $("#btvddd3,#btfalsob3,#btfalsoc3,#btfalsoa3").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").show();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
    });


    $("#btvddc4,#btfalsob4,#btfalsoa4,#btfalsod4").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").show();
        $("#telafinal").hide();
        $("#telarespostas").hide();
    });


    $("#btvdda5,#btfalsob5").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").show();
        $("#btrecomeçar").show();  
        $("#telarespostas").hide();
    });



    $("#btrespostas").click(function () {
        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").show();  
        $("#btrecomeçar").show();
    });



    $("#btrecomeçar").click(function () {
        $("#telainicial").show();
        $("#cabeçalho").show();
        $("#questao1").hide();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#telarespostas").hide();
          
    });


    $("#btiniciar").click(function () {

        $("#telainicial").hide();
        $("#cabeçalho").show();
        $("#questao1").show();
        $("#questao2").hide();
        $("#questao3").hide();
        $("#questao4").hide();
        $("#questao5").hide();
        $("#telafinal").hide();
        $("#respostas").hide();


    });
})