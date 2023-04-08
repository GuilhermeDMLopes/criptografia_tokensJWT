//Arquivo responsavel por simular ataque Rainbow Table
//Importando modulos de manipulação de crypt
import { createHash } from "crypto";

//Função para criar hash
//Passaremos os dados e a estrategia/algoritmo usada para constituir uma hash
function criaHash(dado, estrategia) {
    //Retorna uma hash criada atraves da estrategia/algoritmo, inserindo os dados e usando hex
    return createHash(estrategia).update(dado).digest("hex")
}

//Lista de senhas comuns
const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]


//Varrendo lista de senhas comuns e gerar hash para cada uma
const rainbowTable = senhasComuns.map(senha => {
    //para cada senha, criar uma hash usando a estrategia/algoritmo MD4
    return [ senha, criaHash(senha, "MD5") ]
    
})

//Checando a rainbow table
console.log(rainbowTable)

//Lista de hashes vazadas
const hashesVazadas = ["21232f297a57a5a743894a0e4a801fc3",
"cedf5ab7b5c5852b3ed35d7dbe3c3835",
"81dc9bdb52d04dc20036dbd8313ed055"]

//Faz a checagem das hashes para ver se bate com a lista de hashes que temos
hashesVazadas.map( hashVazada => {
    rainbowTable.map( parGerado => {
        //Como a lista fornece a senha e a hash, comparamos com a posiçao 1 da lista (hash)
        if (hashVazada === parGerado[1]){
            console.log(`Senha encontrada: a hash ${hashVazada} equivale à ${parGerado[0]}`)
        }
    })
} )