//Simulando ataque de força bruta

//copiando codigo de usuario do arquivo hash.js

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

//Somente senhas numericas
const usuario = new Usuario("Guilherme", "1337")

//Fazendo laço de repetição e checar se o numero bate com a senha de usuario
for(let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    //Testando se conseguimos pegar a senha
    if(usuario.autentica("Guilherme", senhaTeste.toString())) {
        //se for verdade
        console.log(`A senha do usuario é: ${senhaTeste}`)
    }
}