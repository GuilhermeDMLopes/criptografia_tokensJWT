//Arquivo responsável por fazer a encriptogração Assimétrica
//Fazendo umportação de um metodo de crypto
import { generateKeyPairSync } from 'crypto';

//Criando um par de chaves
//Passamos como parametro, algoritmo de encriptogração a ser usado
//Segundo parametro é um objeto padronizado na documentação
const { privateKey, publicKey } = generateKeyPairSync("rsa",
{
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
})

//Mostrando as chaves
//console.log(publicKey)
//console.log(privateKey)

//Utilizar os metodos para fazer a encriptogração publica e a desencriptogração privada
//Importando metodos para isso
import { publicEncrypt, privateDecrypt } from 'crypto';

//Encriptografando uma mensagem a ser enviada
//Precisa ter a chave publica e a mensagem
const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
)

//Mostrando a mensagem encriptografada
console.log(dadosCriptografados.toString("hex"));

//--------Transmissao-------Lado de quem vai receber a mensagem

//Desencriptografando a mensagem
//Passamos a chave privada e a mensagem encriptografada
const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

//Mostrando mensagem desencriptografada
//EStamos passando utf-8 para conseguirmos ler a mensagem
console.log(`Dados decifrados: ${dadosDecifrados.toString("utf-8")}`);