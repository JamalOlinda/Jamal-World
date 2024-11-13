
function addUser(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let confirmEmail = document.getElementById('confirm-email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirm-password').value

    //recupera lista de usuarios armazenada no localstorage ou cria uma lista vazia de usuarios, caso nao haja nenhum usuario cadastrado
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
    console.log(usuarios)
    //validacao email e senha
    if(email !== confirmEmail){
        document.getElementById('error').innerText = 'Os emails são diferentes'
        return
    }
    if(password !== confirmPassword){
        document.getElementById('error').innerText = 'As senhas são diferentes'
        return
    }

    //verificacao se o email já está cadastrado
    let usuarioExistente = usuarios.find(usuario => usuario.email === email)
    if(usuarioExistente){
        document.getElementById('error').innerText = 'Usuário já cadastrado'
        return
    }

    //criar um novo objeto usuario que será armazenado na nossa lista de usuarios
    let novoUsuario = {
        id: Date.now(),
        nome: name,
        email: email,
        senha: btoa(password), //salvando senha com criptografia
        playlists: []
    }

    //colocando objeto novoUsuario no final da lista usuarios
    usuarios.push(novoUsuario)
    console.log(usuarios)
    //salvar no local storage
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    document.getElementById('error').innerText = 'Usuário cadastrado com sucesso'
    //depois que o usuário for cadastrado, o sistema redireciona para a pagina de login com uma espera 3 segundos
    console.log("usuario cadastrado")
    setTimeout(() => {
        console.log("redireciona para index.html")
        window.location.href = 'index.html'
    }, 3000)
}

//fora da funcao addUser
//funcao que volta para a pagina de login para o botao voltar
function backLogin(){
    window.location.href = 'index.html'
}

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function login() {
    let email = document.getElementById('login-email').value
    let password = document.getElementById('login-password').value
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    // Encontrando o usuário no localStorage
    let usuario = usuarios.find(usuario => usuario.email === email && atob(usuario.senha) === password)

    // Verificando se o usuário e a senha estão corretos
    if (usuario) {
        // Armazenar o usuário logado no sessionStorage
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))

        console.log("Login efetuado")
        // Redirecionar para a página de perfil ou página inicial
        window.location.href = "perfil.html"; // Certifique-se de que essa é a página correta
    } else {
        document.getElementById('mensagem').innerText = 'Usuário ou senha incorretos'
        console.log("Login com erro")
    }
}
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA