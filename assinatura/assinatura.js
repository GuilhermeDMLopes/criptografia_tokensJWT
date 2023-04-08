//Arquivo responsável por fazer a assinatura do usuário
//Fazendo umportação de alguns metodos de crypto
import { generateKeyPairSync, createSign, createVerify } from 'crypto';

//Criando par de chaves
//Mesmo conceito de encriptogracaoAssimetrica.js
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

//Criando um documento
let dados = "Essa string vai ser assinada!"

//Assinatura
//Algoritmo utilizado como parametro
const assinador = createSign("rsa-sha256");

//Quais dados serao assinados
assinador.update(dados);

//Fazendo a assinatura em si e guardando em uma variavel
//Passaremos a chave privada e a codificação da assinatura 
const assinatura = assinador.sign(privateKey, "hex")

//Mostrando assinatura
console.log(`Assinatura: ${assinatura}`)

//Intermediário - Alterando mensagem depois de assinada para ver o resultado
//Ao final deve retornar false
//dados += "Arquivo alterado"


// Envio do documento assinado para outra pessoa -------- Pessoa deve receber, documento, assinatura e chave publica


//criando verificador
//Deve ter o mesmo algoritmo do documento assinado
const verificador = createVerify("rsa-sha256")

//Recebendo os dados para serem verificados
verificador.update(dados)

//Booleano para verificar se a assinatura é valida ou nao
//Passamos a chave publica, assinatura e codificação da mensagem
const ehVerificado = verificador.verify(publicKey, assinatura, "hex");

//Checando validação
//Como e mensagem não foi alterada durante o processo, deve retornar true
console.log(ehVerificado)
