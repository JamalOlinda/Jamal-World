let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Vagabundo",
    endereco: {
        rua: "Rua dos bobos",
        cidade: "Palhoça",
        estado: "Santa Catarina"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e moro em ${this.endereco.cidade}, ${this.endereco.estado}.`;
    }
};

console.log(pessoa.endereco.cidade); 

pessoa.profissao = "Desenvolvedor de Software";
console.log(pessoa); 

pessoa.telefone = "1234-5678";
console.log(pessoa); 
