function aula01(){   
    var qg = prompt("INFORME A QTD DE GOLS: ")
    var qa = prompt("INFOME A QTD DE ACERTO: ")
    var qe = prompt("INFOME A QTD DE ERROS: ")
    var pontos = ((qg * 50) + (qa * 10)) - (qe * 5);

    document.write("SUA PONTUAÇÃO FOI: " + pontos + "<br>")
    if (pontos < 50){
        document.write("PESSIMA PARTIDA ");
    } else if(pontos >= 50 && pontos < 100){
        document.write("PARTIDA RUIM");
    } else if(pontos >= 100 && pontos < 150){
        document.write("JOGOU O BASICO");
    } else if(pontos >= 150 && pontos < 200){
        document.write("JOGOU BEM");            
    } else {
        document.write("JOGOU DEMAIS");      
    }
}
