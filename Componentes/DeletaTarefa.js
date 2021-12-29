const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.addEventListener('click', tarefaDeletada)

    return botaoDeleta;
}

const tarefaDeletada = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta; 