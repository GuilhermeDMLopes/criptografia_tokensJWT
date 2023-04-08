# criptografia_tokensJWT

## Repositório com intuito de introduzir conceitos de criptografia utilização de tokens JWT para autorização e autenticação

### Diretórios:

- cifra: Contém arquivo de demonstração para cifrar e decifrar uma mensagem utilizando a cifra de César como exemplo.

- hash: trabalhamos com o conceito de funções hash para substituir a palavra chave da cifra de César. A função Hash é irreversível (não é possível fazer o processo reverso e encontrar a palavra), não pode haver colisões (não pode haver uma mesma hash para duas palavras distintas), tenha um tamanho fixo independente do tamanho da palavra a ser haseada e tenha um nível de complexidade podendo levar algum tempo. Existem diversos tipoes de hash (MD5, SHA, etc). Segue link com diversos tipos de hash: https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107362

- hashComSal: conforme vimos no diretório anterior, existem algumas vulnerabilidade em utilizar apenas a hash (Rainbow Table Attack, por exemplo). Para ajudar a melhorar a segurança, adicionamos um 'sal' na hash, uma informação que complementa a senha do usuário. Agora vimos como podes criar e armazenar um sistema de autenticação. Agora precisamos ver algum metodo para transmitir esses dados, tendo um meio de reverter.

 #### transmissão de dados. Conseguimos gerar uma hash e uma hash com sal, agora precisamos de uma forma de conseguir transmitir essa informação para que alguém consiga receber e entender do que se trata. Usaremos encriptação (Pode ser Simétrica ou Assimétrica) e Desencriptação.

 - encriptacaoSimetrica: Precisamos de uma chave compartilhada para que as partes consigam cifrar/encriptografa e decifrar/desencriptografar uma mensagem. 

 - encriptacaoAssimetrica: Precisaremos de um par de chaves para que as partes consigam cifrar/encriptografa e decifrar/desencriptografar uma mensagem. Uma chave pública (todos podem ter acesso) para encriptografar e uma chave privada (só quem recebe a mensagem pode ter acesso) para desencriptografar.