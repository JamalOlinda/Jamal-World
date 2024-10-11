
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

//funcao do login
function login(){
    let email = document.getElementById('login-email').value
    let password = document.getElementById('login-password').value
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    //encontrando o usuario e a senha no localstorage
    let usuario = usuarios.find(usuario => usuario.email === email && atob(usuario.senha) === password)

    //verificando se usuario e senha estao corretos
    if(usuario){
        //armazenar que o usuario está logado 
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario))

        //verigicando se o sessionStorage foi atualizado 
        console.log('sessionStorage atualizado:', sessionStorage.getItem('usuarioLogado'))


        console.log("login efetuado")
        //redirecionar para página home
        window.location.href = "inicio.html"
    }else{
        document.getElementById('mensagem').innerText = 'usuário ou senha incorretos'
        console.log("login com erro")
        return
        
    }

}

function cadastrarMusica(titulo, artista, genero, duracao) {
    // Criar objeto da música
    const musica = {
        titulo: titulo,
        artista: artista,
        genero: genero,
        duracao: duracao
    };

    // Verificar se já existe uma lista de músicas no localStorage
    let listaMusicas = JSON.parse(localStorage.getItem('musicas')) || [];

    // Adicionar a nova música à lista
    listaMusicas.push(musica);

    // Armazenar a lista atualizada no localStorage
    localStorage.setItem('musicas', JSON.stringify(listaMusicas));
}
function exibirMusicas() {
    let listaMusicas = JSON.parse(localStorage.getItem('musicas')) || [];
    const listaElement = document.getElementById('lista-musicas');

    // Limpar a lista antes de exibir para evitar duplicações
    listaElement.innerHTML = '';

    listaMusicas.forEach(musica => {
        const item = document.createElement('li');
        item.textContent = `Título: ${musica.titulo}, Artista: ${musica.artista}, Gênero: ${musica.genero}, Duração: ${musica.duracao}`;
        listaElement.appendChild(item);
    });
}

// Chamar a função para exibir músicas ao carregar a página
window.onload = exibirMusicas;



function cadastrarMusica(titulo, artista, genero, duracao) {
    // Criar objeto da música
    const musica = {
        titulo: titulo,
        artista: artista,
        genero: genero,
        duracao: duracao
    };

    // Verificar se já existe uma lista de músicas no localStorage
    let listaMusicas = JSON.parse(localStorage.getItem('musicas')) || [];

    // Adicionar a nova música à lista
    listaMusicas.push(musica);

    // Armazenar a lista atualizada no localStorage
    localStorage.setItem('musicas', JSON.stringify(listaMusicas));

    // Verificar o conteúdo do localStorage
    console.log(localStorage.getItem('musicas'));
}
// Exemplo de uso da função
cadastrarMusica('Wow', 'Post Malone', 'Pop', 2.3);