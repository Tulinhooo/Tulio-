const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

quiz.addEventListener("submit", function(event) {

    event.preventDefault();

    const respostas = {
        q1: "a",
        q2: "b",
        q3: "a",
        q4: "a",
        q5: "a",
        q6: "a"
    };

    let pontos = 0;

    for (let pergunta in respostas) {

        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (resposta && resposta.value === respostas[pergunta]) {
            pontos++;
        }
    }

    resultado.innerHTML =
        "Você acertou " + pontos + " de 6 questões.";
});
