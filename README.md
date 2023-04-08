# criptografia_tokensJWT

## Repositório com intuito de introduzir conceitos de criptografia utilização de tokens JWT para autorização e autenticação

### Diretórios:

- cifra: Contém arquivo de demonstração para cifrar e decifrar uma mensagem utilizando a cifra de César como exemplo.

- hash: trabalhamos com o conceito de funções hash para substituir a palavra chave da cifra de César. A função Hash é irreversível (não é possível fazer o processo reverso e encontrar a palavra), não pode haver colisões (não pode haver uma mesma hash para duas palavras distintas), tenha um tamanho fixo independente do tamanho da palavra a ser haseada e tenha um nível de complexidade podendo levar algum tempo. Existem diversos tipoes de hash (MD5, SHA, etc). Segue link com diversos tipos de hash: https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107362

- hashComSal: conforme vimos no diretório anterior, existem algumas vulnerabilidade em utilizar apenas a hash (Rainbow Table Attack, por exemplo). Para ajudar a melhorar a segurança, adicionamos um 'sal' na hash, uma informação que complementa a senha do usuário. Agora vimos como podes criar e armazenar um sistema de autenticação. Agora precisamos ver algum metodo para transmitir esses dados, tendo um meio de reverter.

 #### transmissão de dados. Conseguimos gerar uma hash e uma hash com sal, agora precisamos de uma forma de conseguir transmitir essa informação para que alguém consiga receber e entender do que se trata. Usaremos encriptação (Pode ser Simétrica ou Assimétrica) e Desencriptação.

 - encriptacaoSimetrica: Precisamos de uma chave compartilhada para que as partes consigam cifrar/encriptografa e decifrar/desencriptografar uma mensagem. 

 - encriptacaoAssimetrica: Precisaremos de um par de chaves para que as partes consigam cifrar/encriptografa e decifrar/desencriptografar uma mensagem. Uma chave pública (todos podem ter acesso) para encriptografar e uma chave privada (só quem recebe a mensagem pode ter acesso) para desencriptografar.

 #### Assinatura é uma forma de comprovar quem está realmente enviando e recebendo. Além de proteger a mensagem, precisamos saber quem realmente está enviando. No contexto digital, também usaremos o par de chaves para assinar. Chave privada para assinar e a chave pública para verificar. Ou seja, usaremos nossa chave privada em um documento para criar uma assinatura digital (uma hash do documento). Usaremos essa assinatura digital com a chave publica para gerar um outro documento. Se ambos os documentos forem iguais, a assinatura foi verificada e validada.

 - assinatura: usaremos nossa chave privada em um documento para criar uma assinatura digital (uma hash do documento). Usaremos essa assinatura digital com a chave publica para gerar um outro documento. Se ambos os documentos forem iguais, a assinatura foi verificada e validada.

 #### Sessão é uma quantidade de tempo em que o usuário está autenticado e conectado a um serviço ou sistema. Temos um cliente e um servidor. O cliente quer acessar o email, ele entra com login e senha. Servidor é reponsavel por autenticar e validar se o usuario existe e está com as credenciais corretas. O servidor cria e guarda um ID unico para dizer que o usuario esta logado. As respostas ao usuario irão com o ID. O usuário guarda o ID no navegador usando cookies ou local storage e todas as requisições que ele fizer dali pra frente, precisará mandar esse ID para o servidor reconhecer que é ele que está fazendo as requisições (para não ter que ficar colocando login e senha e validando o tempo todo). Servidor compara se o ID é o mesmo que ele tem guardado e responde. Para evitar que alguem consiga este ID e faça ações em nome de outra pessoa, surgiram os tokens

 #### Token: Ao invés do servidor gerar um valor, guarda-lo e ficar se comunicando com o usuario, o token vai gerar uma hash de uma determinada informação e vai enviar para o usuario. O usuario apenas guarda a informação, ele não consegue ler ou reutilizar. O usuario manda o token ao inves do ID. ELe valida o token e não o ID. Um usuario faz login e senha, o servidor gera e devolve um token, usuario armazena token e quando for fazer proxima requisição, ele envia o token. O servidor valida e responde. Um dos Tokens mais utilizados na web é o JWT (Json Web Token) ele é um token que utiliza notação do JSON para guardar informações. Constituido em 3 partes:

  Header(Cabeçalho): contém qual o tipo de algoritmo utilizado e o tipo de token.

  Payload(dados): Campos arbitrários, informação em si que você quer transmitir ou armazenar. Campo iat: quando foi criado

  Signature (Assinatura): Questões de segurança, como vai guardar o segredo em si, como deve ser decodificado, etc.

 #### Cada parte do JWT é separada por '.'. Podemos ver mais informações em jwt.io. Precisa de um segredo para ser gerado

 - token: precisaremos instalar uma dependencia (npm jsonwebtoken@8.5.1 -- save-exact). Formas de usar JWT token: https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107378
