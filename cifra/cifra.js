//Codigo demonstrando a cifra de cesar para criptografia

//Mensagem a criptografada
const mensagemSecreta = "minhamensagemsecreta";

console.log(mensagemSecreta);

//Como a cifra de cesar apenas desloca o alfabeta horizontalmente, irems passar a quantidade de casas a serem deslocadas
function cifrarMensagem(mensagem, movimentos) {
    //trocando os caracteres
    //split vazia separa em cada caractere
    //.map para percorrer cada caractere da cifra
    const mensagemCifrada = mensagem.split('').map((caractere) => {
        //Cada caractere tem um codigo, vamos pegar o codigo dele
        const codigoCaractere = caractere.charCodeAt(0);
        //Vai mover o codigo de cada letra pela quantidade de movimentos
        return String.fromCharCode( codigoCaractere + movimentos);
    })

    //Pegar cada caractere e retransformar em uma string
    //Passamos string vazia como parametro para ele juntar todos os caracteres
    return mensagemCifrada.join('')
}

console.log(cifrarMensagem(mensagemSecreta, 3));

//Guardando a mensagem cifrada para conseguirmos descifrar
const mensagemCifrada = cifrarMensagem(mensagemSecreta, 3);

//Função para descifrar a mensagem
function decifraMensagem(mensagem, movimentos) {
    //Mesma função para cifrar, pegaremos cada caractere cifrado
    const mensagemCifrada = mensagem.split('').map((caractere) => {
        //Cada caractere tem um codigo, vamos pegar o codigo dele
        const codigoCaractere = caractere.charCodeAt(0);
        //Vai voltar o codigo de cada letra pela quantidade de movimentos usado para cifrar
        return String.fromCharCode( codigoCaractere - movimentos);
    })

    //Pegar cada caractere e retransformar em uma string
    //Passamos string vazia como parametro para ele juntar todos os caracteres e decifrar
    return mensagemCifrada.join('')
}

//Salvando mensagem decifrada
const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3)

console.log(mensagemDecifrada)