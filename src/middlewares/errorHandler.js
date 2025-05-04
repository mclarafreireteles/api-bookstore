import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ message:"Um ou mais dados fornecidos estão incorretos" });
    } else if (err instanceof mongoose.Error.ValidationError) {        
        const errorMessages = Object.values.apply(err.errors)
            .map(err => err.message)
            .join("; ");
        res.status(400).send({ message: `Os seguintes erros foram entrados ${errorMessages}` });
    } else {
        res.status(500).send({ message:"Erro interno do servidor" });
    }
}

export default errorHandler;