import * as timer from './timer.js'

// Data do lançamento (meses começam em 0)
var target = new Date(2023, 8, 1, 23, 0o0, 0o0);

// Sincroniza os tempos
timer.freeze();

// Loop para o contador
var intervalo = setInterval(drawTime, 100);

// Musica
var musica = document.getElementById("music");

function endTimer() {
    clearInterval(intervalo);
    $("#confetes").css("display", "block");
    $(".steve").css("display", "block");
    $(".parrot").css("display", "block");

    var ip = "boschinhos.apexmc.co";

    $("#title").html(ip);
    $("#title").css("font-size", "3vw");
    $("#title").css("opacity", "0.5");
    $("#title").css("display", "block");
    $("#title").animate({
        fontSize: "5vw",
        opacity: 1
    }, 100);

    $("#time").html("Clique para copiar o IP");
    $("#time").css("font-size", "1.5vw");
    $("#time").css("opacity", "0.5");
    $("#time").css("display", "block");
    $("#time").animate({
        opacity: 1
    }, 100);

    $(".steve").animate({
        width: "15%",
        opacity: 1
    }, 200);

    $(".parrot").animate({
        opacity: 1
    }, 200);


    // Função para copiar o IP
    $(document).on("click", function() {
        if (musica.paused)
            musica.play()
                  .catch(console.log("sla oq q deu kk"));
        navigator.clipboard.writeText(ip).then(function() {
            alert("IP copiado.. Bora jogar!!!");
        });
    });
}

function countdown(oldtime) {
    if (musica.paused && oldtime > 0)
        musica.play()
              .catch(console.log("perdeu o timing mané kk"));

    if(oldtime <= 0) {
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
    $("#countdown").html(oldtime);
    $("#countdown").animate({
        fontSize: "7vw",
        opacity: 0.5
    }, 1000);
}

var oldtime = 0;

function drawTime() {
    if(timer.getSecond(target) <= 10 && oldtime != timer.getSecond(target)) {
        oldtime = timer.getSecond(target);
        countdown(oldtime);
    } else {
        var time = timer.getTime(target);
    
        $("#title").html("Lançamento em:");
        $("#time").html(timer.format(time));
    }

}