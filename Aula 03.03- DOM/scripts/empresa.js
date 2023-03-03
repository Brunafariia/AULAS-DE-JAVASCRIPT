// Emenentos de dados digitados pelo usuario
const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone"); 

//saber quando o botao foi clicado
const addBtn = document.getElementById("btn-add");

//montar o corpo de linhas da tabela
const conteudoTab = document.getElementById("conteudo-tabela");

// Event Listener =  ouvinte /fofoqueiro
addBtn.addEventListener("click", () => {
    // 1) Coletar dos inputs o que foi digitado
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    };

// 2) Concatenar na tabela
conteudoTab.innerHTML += `
<tr>
    <td>${usuario.email}</td>
    <td>${usuario.cep}</td>
    <td>${usuario.uf}</td>
    <td>${usuario.localidade}</td>
    <td>${usuario.telefone}</td>
</tr>`;
});

let paragrafo = document.getElementById("teste")
email.addBtn.addEventListener('input', (e) => {
    paragrafo.innerHTML = email.value;
});