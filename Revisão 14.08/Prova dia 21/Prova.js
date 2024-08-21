const usuarios = [];

function adicionarUsuario(nome, idade, email) {
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    usuarios.push(usuario);
}

function verificarUsuario(usuario) {
    if (usuario.idade > 0 && usuario.nome !== "" && usuario.email !== "") {
        console.log("Usuário válido");
    } else {
        console.log("Erro no cadastro");
    }
}

function listaUsuarios() {
    console.log("Nossos usuários já cadastrados:", usuarios);
}


adicionarUsuario("Fulano", 18, "fulanodasilva@gmail.com");


verificarUsuario(usuarios[0]);


listaUsuarios();
