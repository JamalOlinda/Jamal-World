let tarefas = [];

function adicionarTarefa(descricao) {
    if (!descricao) {
        console.log("Erro: A descrição da tarefa não pode estar vazia.");
        return;
    }

    let tarefa = {
        descricao: descricao,
        concluida: false
    };

    tarefas.push(tarefa);
    console.log("Tarefa adicionada com sucesso!");
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Tarefas cadastradas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. Descrição: ${tarefa.descricao}, Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
    });
}

function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas.splice(indice, 1);
    console.log("Tarefa removida com sucesso!");
}

function concluirTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas[indice].concluida = true;
    console.log("Tarefa marcada como concluída!");
}

adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas();
concluirTarefa(0);
listarTarefas();
removerTarefa(1);
listarTarefas();
