function validarLogin() {
    // Obtem os valores digitados nos campos
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var mensagem = document.getElementById("mensagem");

    // Verifica se o usuário e a senha são corretos
    if (usuario === "admin" && senha === "123@456") {
        mensagem.style.color = "green"; // Define cor da mensagem
        mensagem.textContent = "Login bem-sucedido!";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos.";
    }
}