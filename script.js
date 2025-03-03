var countDownData = new Date("Jan 1, 2026 00:00:00").getTime();

//update de contagem a cada 1 segundo
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownData - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + " DIAS " + hours + "  : " + minutes + " : " + seconds + " ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
