
const ContadorServico = require("../src/servico/ContadorServico");

test('Obter Contador!!', () => {
    let resp = ContadorServico.obterContador();
    expect(resp.contador).toBe(0)
})