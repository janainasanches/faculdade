function limpar() {
    resposta = confirm("Deseja realmente limpar?");
    if (resposta) {
        return true;
    }
    else {
        return false;
    }
}

function validar() {
    /* O campo “Nome” deve conter mais de 3 caracteres. Caso o nome informado tenha
    menos de 3 caracteres, limpar o campo e exibir uma mensagem de alerta para o
    usuário.
    */

    nome = document.Cadastro.Nome.value;
    console.log(nome);
    if (nome.length <= 3) {
        document.Cadastro.Nome.value = "";
        alert("O Nome campo deve conter mais de 3 caracteres");
        console.log("Somente desenvolvedores pode olhar isso");
        return false;

    }
    else {

        // Após a entrada de um “Nome” válido, converter todo o nome para letras maiúsculas.

        document.getElementById("nome").value = nome.toUpperCase();
    }
    /* Verificar se o campo “Estado Civil” está preenchido com um valor válido. Caso não
esteja, exibir na frente do campo uma mensagem destacada em vermelho:*/

    var estadoc = document.getElementById("estado_civil");
    if (estadoc.options[estadoc.selectedIndex].value == "") {
        document.getElementById("erro").innerHTML = "Selecione um estado civil válido";
        return false;
    }
    else {
        document.getElementById("erro").innerHTML = "";
    }
    // d. Converter todo o texto do campo “Objetivo” para letras minúsculas.
    objetivo = document.getElementById("objetivo").value;
    objetivo.toLowerCase();
    document.getElementById("objetivo").value = objetivo;

    /*Retirar o atributo required dos campos “Telefone” e “E-mail”. Validar para que o usuário
    informe obrigatoriamente o telefone OU o e-mail.*/

    telefone = document.getElementById("telefone").value;
    email = document.getElementById("email").value;
    if (telefone == "" && email == "") {
        alert("O campo telefone ou email precisa ser preenchido");
        return false;

    }
    /*Obrigar a seleção de um nível para os campos de “Nível” dos idiomas (inglês e
       espanhol).*/

    Ingles = document.getElementById("Inglês");
    if (Ingles.options[Ingles.selectedIndex].value == "") {
        alert("Selecione um nível de ingles válido");

        return false;
    }
    Espanhol = document.getElementById("Espanhol");
    if (Espanhol.options[Espanhol.selectedIndex].value == "") {
        alert("Selecione um nível de Espanhol válido");

        return false;
    }

    /*Caso o usuário não selecione nenhuma linguagem de programação, exibir mensagem
confirmando se ele deseja enviar o formulário dessa forma*/
    if (!isChecked()) {

        resposta = confirm("Deseja enviar o formulário dessa forma? ");
        if (!resposta) {
            return false;
        }

    }
    return true;
}

function isChecked() {
    var inputs, i;
    inputs = document.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {

            if (inputs[i].name == "conhecimento" && inputs[i].checked == true) {
                return true;
            }
        }
    }
    return false;
}
