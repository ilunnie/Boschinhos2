import * as timer from './timer.js'

// Data do lançamento (meses começam em 0)
var target = new Date(2023, 8, 1, 23, 0o0, 0o0);

// Sincroniza os tempos
timer.freeze();

// Loop para o contador
var intervalo = setInterval(drawTime, 100);

function endTimer() {
    clearInterval(intervalo);
    $("#confetes").css("display", "block");

    var ip = "boschinhos.apexmc.co";

    $("#title").html(ip);
    $("#title").css("font-size", "5vw");
    $("#title").css("display", "block");

    $("#time").html("Clique para copiar o IP");
    $("#time").css("font-size", "1.5vw");
    $("#time").css("display", "block");


    // Função para copiar o IP
    $(document).on("click", function() {
        navigator.clipboard.writeText(ip).then(function() {
            alert("IP copiado.. Bora jogar!!!");
        });
    });
}

function countdown() {
    if(timer.getSecond(target) <= 0) {
        $("#countdown").css("display", "none");
        $("#countdown").html("");
        endTimer();
        return;
    }

    $("#title").css("display", "none");
    $("#time").css("display", "none");

    $("#countdown").finish().css("font-size", "10vw");
    $("#countdown").css("opacity", "1");
    $("#countdown").css("display", "block");
    $("#countdown").html(timer.getSecond(target));
    $("#countdown").animate({
        fontSize: "7vw",
        opacity: 0.5
    }, 1000);
}

var oldtime = 0;

function drawTime() {
    if(timer.getSecond(target) <= 10 && oldtime != timer.getSecond(target)) {
        oldtime = timer.getSecond(target);
        countdown();
    } else {
        var time = timer.getTime(target);
    
        $("#title").html("Lançamento em:");
        $("#time").html(timer.format(time));
    }

}