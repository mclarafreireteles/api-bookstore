import http from "http"

const PORT = 3000

const routes = {
    "/": "Curso de API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(routes[req.url])
})

server.listen(PORT, () => {
    console.log("Servidor disponível na porta 3000")
})