//Simulando ataque de dicionario

//copiando codigo de usuario do arquivo forcaBruta.js

import { createHash } from "crypto";


class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    
    //migrando função para dentro do usuario
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuario autenticado com sucesso");
            return true;
        }

        //console.log("Dados incorretos");
        return false;
    }
}

//Somente senhas comuns
const usuario = new Usuario("Guilherme", "senha123")

//Lista de senhas prontas:
const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

//Checando se nossa senha esta na lista
//Para cada senha, verificar se bate com a nossa
senhasComuns.map( senha => {
    if(usuario.autentica("Guilherme", senha)) {
        console.log(`A senha do usuário é: ${senha}`)
    }
})

