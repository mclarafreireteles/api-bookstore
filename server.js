import app from "./src/app.js";
import "dotenv/config.js"

const PORT = 3000
 

app.listen(PORT, () => {
    console.log("Servidor disponível na porta 3000")
})