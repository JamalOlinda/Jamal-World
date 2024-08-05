let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    detalhes: function() {
      console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
  };
  
  carro.detalhes();
  

  carro.ano = 2020;
  console.log("Carro atualizado:", carro);