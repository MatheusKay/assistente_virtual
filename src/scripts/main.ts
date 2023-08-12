const formulario = document.getElementById('form') as HTMLFormElement
const respostaIA = document.getElementById('ia-resposta') as HTMLParagraphElement;
const nome = document.getElementById('nome') as HTMLInputElement;
const secaoDeCal = document.getElementById('secao_dos_calculos') as HTMLDivElement

let nomeDeUsuario: string;

formulario?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeValor = nome.value;

    respostaIA.textContent = `"Olá, ${nomeValor}! Sou sua Assistente Virtual especializada em cálculos. Estou aqui para tornar os números fáceis e interessantes. Conte comigo para qualquer cálculo que precisar!"`;

    nomeDeUsuario = nomeValor
    
    secaoDeCal.classList.remove('sumir')
    formulario.classList.add('sumir')

})

let valorCalculo: number[] = []
let resultadoConta: number;
let operadoSelecionado: string = '';

const forCalc = document.getElementById('form-calc') as HTMLFormElement
const calculo = document.getElementById('valor-calculo') as HTMLInputElement
const op_selecionado = document.getElementById('op_selecionado') as HTMLParagraphElement
const containerOp = document.getElementById('container_op') as HTMLDivElement

const escolhaDoOp = document.getElementById('escolha_op') as HTMLParagraphElement
const secaoHistorico = document.getElementById('secao_dos_calculos') as HTMLDivElement
const historicoDeCal = document.getElementById('historico_de_calculos') as HTMLUListElement 
const containerHistoricos = document.getElementById('container_historico') as HTMLDivElement

const opSoma = document.getElementById('op_soma') as HTMLButtonElement

opSoma.addEventListener('click', () => {

    operadoSelecionado = "Soma"
    forCalc?.classList.remove('sumir')

    op_selecionado.innerHTML = `Entendido voce escolheu <span class="form_calc__span">${operadoSelecionado}</span>.`

    secaoHistorico.classList.remove('sumir')
    containerOp.classList.add('sumir')

    respostaIA.classList.add('sumir')

})

const opSubtracao = document.getElementById('op_subtracao') as HTMLButtonElement

opSubtracao.addEventListener('click', () => {

    operadoSelecionado = "Subtração"
    forCalc?.classList.remove('sumir')

    op_selecionado.innerHTML = `Entendido voce escolheu <span class="form_calc__span">${operadoSelecionado}</span>.`

    secaoHistorico.classList.remove('sumir')
    containerOp.classList.add('sumir')

    respostaIA.classList.add('sumir')

})

const opMultiplicacao = document.getElementById('op_multiplicacao') as HTMLButtonElement

opMultiplicacao.addEventListener('click', () => {

    operadoSelecionado = "Multiplicação"
    forCalc?.classList.remove('sumir')

    op_selecionado.innerHTML = `Entendido voce escolheu <span class="form_calc__span">${operadoSelecionado}</span>.`

    secaoHistorico.classList.remove('sumir')
    containerOp.classList.add('sumir')

    respostaIA.classList.add('sumir')

})

const opDivisao = document.getElementById('op_divisao') as HTMLButtonElement

opDivisao.addEventListener('click', () => {

    operadoSelecionado = "Divisão"
    forCalc?.classList.remove('sumir')

    op_selecionado.innerHTML = `Entendido voce escolheu <span class="form_calc__span">${operadoSelecionado}</span>.`

    secaoHistorico.classList.remove('sumir')
    containerOp.classList.add('sumir')

    respostaIA.classList.add('sumir')

})

forCalc?.addEventListener('submit', (e) => {

    e.preventDefault()

    valorCalculo.push(Number(calculo.value))
    console.log(valorCalculo)


    if (operadoSelecionado == 'Soma') {

        const soma = valorCalculo.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        })

        resultadoConta = soma
        console.log(resultadoConta)

    } else if (operadoSelecionado == 'Subtração') {

        const subtracao = valorCalculo.reduce((acumulador, valorAtual) => {
            return acumulador - valorAtual
        })

        resultadoConta = subtracao
        console.log(resultadoConta)

    } else if (operadoSelecionado == 'Multiplicação') {

        const multiplicacao = valorCalculo.reduce((acumulador, valorAtual) => {
            return acumulador * valorAtual
        })

        resultadoConta = multiplicacao
        console.log(resultadoConta)

    } else if (operadoSelecionado == 'Divisão') {

        const divisao = valorCalculo.reduce((acumulador, valorAtual) => {
            return acumulador / valorAtual
        })

        resultadoConta = divisao
        console.log(resultadoConta)
    }

    entregaResposta()

    calculo.value = '';

    const novoItem = document.createElement('li');
    
    for (let i = 0; i < valorCalculo.length; i++) {

        if (i < 8) {
            novoItem.textContent = valorCalculo[i] as unknown as string; // Altere o texto conforme necessário
        
            historicoDeCal.appendChild(novoItem);
        } else {
            alert('Por favor limpe o historico!')

            historicoDeCal.innerHTML = ''
        }

    }
    
    

})

const entregaRespostaNaTela = document.getElementById('resultado') as HTMLParagraphElement
const containersButtos = document.getElementById('container_buttons')
const botaoContinuar = document.getElementById('res-continuar')
const botaoZerar = document.getElementById('res-zerar')

function entregaResposta() {

    containerHistoricos.classList.remove('sumir')

    if (valorCalculo.length > 1) {


        entregaRespostaNaTela.innerHTML = `A <span>${operadoSelecionado}</span> desses valores foi <span>${resultadoConta}</span>. <br> Gostaria de continuar a conta ou voltar a seleção de operadores?`
        
        containersButtos?.classList.remove('sumir')

        botaoContinuar?.addEventListener('click', () => {

            containersButtos?.classList.add('sumir')

        })

        botaoZerar?.addEventListener('click', () => {

            forCalc?.classList.add('sumir')
            containersButtos?.classList.add('sumir')
            entregaRespostaNaTela.innerText = '';

            escolhaDoOp.innerText = `Ola novamente ${nomeDeUsuario}, poderia escolher outro Operador: `
        
            containerOp.classList.remove('sumir')
            containerHistoricos.classList.add('sumir')

            apagaConta();
        })
    }
    
}

function apagaConta() {
    
    valorCalculo = []

    historicoDeCal.innerText = '';
    entregaRespostaNaTela.innerText = '';
    containersButtos?.classList.add('sumir')
    containerHistoricos.classList.add('sumir')
}