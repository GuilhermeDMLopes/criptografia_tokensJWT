//Arquivo responsável por trabalhar com uma função hash
//importando função do modulo crypto
//Para importar apenas para esse arquivo, iremos dentro do diretório, inserir o comando:
//npm init -y
//No final do arquivo package..json gerado, inserimos: "type" : "module"
import { createHash } from "crypto";

//criando função hash, recebendo uma senha por parametro e retorna uma hash para essa senha
function criaHash(senha) {
    //retorna uma hash baseado no algoritmo sha256 e a senha em si e a forma com que a hash será apresentada, em hex por exemplo
    return createHash('sha256').update(senha).digest('hex');
}

//Testando a função hash
//console.log(criaHash("uma String Qualquer"))

//Iremos criar uma classe usuario para simular uma situação real
class Usuario {
    //construtor com um nome e senha do usuario
    constructor(nome, senha) {
        this.nome = nome;
        //Não vamos guardar a senha em si. Guardaremos a hash dessa senha para comparar com a senha digitada posteriormente
        this.hash = criaHash(senha);
    }

    //Criando metodo de autenticação para checar se a hash senha fornecida bate com a hash da senha salva
    autentica(nome, senha) {
        //Verifica se o nome e as hashes do usuário batem
        if(nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuario autenticado com sucesso");
            return true;
        }

        console.log("Dados incorretos");
        return false;
    }
}

//criando novo usuario
const usuario = new Usuario("Guilherme", "minhaSenha")

//Vendo o que esta sendo guardado no usuario
//console.log(usuario)

//Autenticando usuario
//Caso de sucesso
//usuario.autentica("Guilherme", "minhaSenha");

//Caso falha
//usuario.autentica("Guilherme", "senha123");

/*Existem algumas vulnerabilidades nas hashes. Um hacker pode ter um banco gigantesco de hashes
no qual ele faz comparações com uma hash vazada. Podendo descobrir sua senha. ESte ataque chama
Rainbow Table. Para ajudar as hashes a evitarem este ataque e melhorarem a segurança, podemos adicionar
um 'sal' na hash. Ou seja adicionaremos mais um ingrediente na hash.

Exemplo: Ao gerar a hash de um usuario, posso pegar 2 informações fornecidas por ele,
a senha e a data em que ela foi gerada por exemplo. Faço uma hash com base nessas duas informações, gerando
uma hash com sal. Trabalharemos este conceito no diretório hashComSal.
*/