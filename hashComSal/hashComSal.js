//Arquivo responsável por trabalhar com sal em uma hash
//Fazendo umportação de alguns metodos de crypto
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

//Função para criar hash com sal, passando a senha como parametro
function criaHashComSal(senha) {
    //criando variavel para guardar o sal
    //Ele é criado através de bytes aleatórios (tamanho passado por parametro)
    //Convertendo os bytes para string em hexadecimal
    const sal = randomBytes(16).toString('hex');

    //Metodo que recebe senha e o sal e transforma na senha hasheada
    //Recebe a senha, sal e tamanho da chave gerada
    //Transformaremos tudo em uma string em hex para conseguir visualizar
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    //iremos retornar o sal e a senha hasheada
    return `${sal}:${senhaHasheada}`
}

//Reimplementando a classe usuario
class Usuario {
    //construtor com um nome e senha do usuario
    constructor(nome, senha) {
        this.nome = nome;
        //Não vamos guardar a senha em si. Guardaremos o sal e a hash para serem comparados posteriormente
        //Como a função retorna "sal:senhaHasheada", separaremos pelos ":" o sal e a senhaHasheada
        [this.sal, this.hash] = criaHashComSal(senha).split(":");
    }

    //Criando metodo de autenticação para checar se a hash senha e o sal fornecido bate com a hash com sal
    autentica(nome, senha) {
        //Verifica se o nome do usuário batem
        if(nome === this.nome) {
            //Checando se a hash da senha fornecida com o sal bate com a hash salva
            //O tamanho deve ser o mesmo, no caso, 64
            //Resumindo: criando nova hash
            const testeHash = scryptSync(senha, this.sal, 64);
            //A hash real deve ser pega do usuario. Da forma com que utilizamos, guardamos em Buffer (conforme documentação)
            //Resumindo: checa a hash real pra ver se ela condiz com o que temos armazenado
            const hashReal = Buffer.from(this.hash, "hex");

            //Checando valores e guardando
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            //Se corresponder
            if(hashesCorrespondem) {
                console.log("Usuário autenticado")
                return true
            } 
        }
        
        //Se não corresponder
        console.log("Dados incorretos");
        return false;
    }
}

//Testando para ver se estamos conseguindo pegar o sal e a senhaHasheada
//const gm = new Usuario("Guilherme", "senhaSecreta")
//console.log(gm)

//Autenticando usuario
const gm = new Usuario("Guilherme", "senhaSecreta")

//Teste sucesso
//gm.autentica("Guilherme", "senhaSecreta")

//Teste falha
//gm.autentica("Guilherme", "senha123")