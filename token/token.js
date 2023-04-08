//Arquivo responsável por demonstrar o uso do JWT token
//Importando jwt
import jwt from "jsonwebtoken";

//Chave secreta para gerar token
const chaveSecreta = "chaveSuperSecreta";

//criando token
//Passando qual o payload que queremos utilizar e o segundo paramentro, a chave secreta
const token = jwt.sign(
    {
        apelido: "gm",
        curso: "segurança e node.js"
    }, chaveSecreta
);

//Mostrando token criado
//console.log(token);

//Decodificando token
//Passamos o token e a chave secreta utilizada para fazer o token
const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)