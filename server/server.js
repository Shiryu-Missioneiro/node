const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((requisicao, resposta) => {
    const urlParse = url.parse(requisicao.url, true);
    const parametrosConsulta = urlParse.query;

    console.log(requisicao.url);
    if (requisicao.url.startsWith('/bye')) {
        resposta.statusCode = 200;
        resposta.setHeader('Content-Type', 'text/plain');
        resposta.end(`Tchau`);
        return;
    }
    else if (requisicao.url.startsWith('/hello')) {
        resposta.statusCode = 200;
        resposta.setHeader('Content-Type', 'text/plain');
        resposta.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);
        return;
    }

    resposta.statusCode = 404;
    resposta.setHeader('Content-Type', 'text/plain');
    resposta.end(`Pagina nao encontrada ${requisicao.url}`);
} );

server.listen(port, hostname, () => {
    console.log(`server runing at http://${hostname}:${port}`);
})