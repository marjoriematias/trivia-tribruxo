function result() {
    var score = 0;

    if (document.getElementById('correct1').checked) {
        score++;
    }

    if (document.getElementById('correct2').checked) {
        score++;
    }

    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }

    let resultado = document.getElementById('resultadoFinal');

    resultado.innerHTML = `Sua pontuação final foi de ${score} de 4`
}

