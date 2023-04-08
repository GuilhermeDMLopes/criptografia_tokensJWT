//Arquivo responsável por fazer a encriptação simétrica
//Fazendo umportação de alguns metodos de crypto
import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

//Criando mensagem para ser encriptada
const mensagem = "Demonstração do curso";

//Criando chave utilizada para encriptografar e desencriptografar a informação
const chave = randomBytes(32);

//Vetor de inicialização, mais um parametro para termos uma maior aleatoriedade e enviamos junto da chave para decifrar a informação.
//é um apendice da chave que ajuda a criar uma variedade maior de variação. Dificulta a adivinhação por terceiros
const vi = randomBytes(16);

//Criando a cifra/encriptação em si
//Escolhemos um algoritmo de encriptação, chave e o vetor de inicialização por parametro
const cifra = createCipheriv('aes256', chave, vi)

//Encriptografando mensagem
//Inserimos os dados na cifra. Mensagem a ser encriptografada, codificação que a mensagem esta e como queremos representa-la em seguida
//Inserimos um caractere de finalização, simbolizando que a mensagem vai ate ali (cifra.final(como ela esta codificada))
const mensagemCifrada = cifra.update(mensagem, "utf-8", "hex") + cifra.final("hex");

//Mostrando mensagem encriptografada
//console.log(mensagemCifrada);

//Simulando a transmissão dessa mensagem ---------- deve ser enviado a chave, vi e a mensagem em si

//Decifrando/Desencriptografando mensagem
//Utiliza mesma ideia e parametros da Criptografia da mensagem
const decifra = createDecipheriv("aes256", chave, vi);

//Decifrando mensagem
//Recebe parametro a mensagem cifrada, codificação atual, codificação desejada
//Tambem inserimos um caractere simbolizando o fim da mensagem a ser desencriptografada
const mensagemDecifrada = decifra.update(mensagemCifrada, "hex", "utf-8") + decifra.final("utf-8")

//mostrando mensagem desencriptografada
console.log(`Decifrado: ${mensagemDecifrada}`)
