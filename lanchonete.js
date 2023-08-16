// Definindo o cardapio::
const cardapio = [
    { codigo: 'cafe', valor: 3.00 },
    { codigo: 'chantily', valor: 1.50 },
    { codigo: 'suco', valor: 6.20 },
    { codigo: 'sanduiche', valor: 6.50 },
    { codigo: 'queijo', valor: 2.00 },
    { codigo: 'salgado', valor: 7.25 },
    { codigo: 'combo1', valor: 9.50 },
    { codigo: 'combo2', valor: 7.50 }
]

// Dados do pedido:
const pedido = [
    'cafe,1',
    'chantily,1',
    'suco,2',
    'sanduiche,1'
];
const itensPricipais = false;
const itensExtras = false;
const formaDePagamento = 'debito';

// Verificando Regras do pedido :

if (itensPricipais === false && itensExtras === true) {
    console.log("Item extra não pode ser pedido sem o principal")
} else if (!pedido.length) {
    console.log("Não há itens no carrinho de compra!")
} else if (pedido.some(itemStr => itemStr.split(',')[1] === '0')) {
    console.log("Quantidade inválida!")
} else if (!formaDePagamento) {
    console.log("Foma de pagamento invalida!")
} else if (pedido.every(itemStr => cardapio.some(item => item.codigo === itemStr.split(',')[0]))) {
} else {
    console.log('Item inválido!')
}

// Calculando valor da compra:
let valorTotal = 0;
for (const itemStr of pedido) {
    const [itemCodigo, quantidade] = itemStr.split(',');
    const item = cardapio.find(item => item.codigo === itemCodigo);
    if (item) {
        valorTotal += item.valor * parseInt(quantidade);
    }
}

// Aplicando descontos ou taxas:
if (formaDePagamento === 'debito') {
    valorTotal *= 0.95 //Desconto de 5% para pagamento no dinheiro.
} else if (formaDePagamento === 'credito') {
    valorTotal *= 1.03 //Taxa de 3% para pagamento no credito.
}

console.log(`Valor total do pedido é de R$ ${valorTotal.toFixed(2)}`);