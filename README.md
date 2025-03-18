# Teste Citel - Aplicação Java e Angular Para Controle de Doadores de Sangue

## Considerações:
 * Utilizado o Spring boot para o backend seguindo a arquitetura MVC para organizar o projeto
 * Angular para o front end
 * MySQL para o banco de dados


### Implementação:
* Utilizei recursos básicos da linguagem, basicamente o que eu fazia era trazer todos os doadores da tabela com o findAll() e fazer o que era pedido nos tópicos utilizando loop for pra iterar os doadores e processar o que era pedido, depois adicionava ao HashMap que o método retornaria.

-----------------------------------------------------------------------------------------------------------
### No FrontEnd eu fiz um app com Angular 19 e utilizei o bootstrap para facilitar a estilização.

* Criei todos os componentes na pasta Pages, e isolei a comunicação com a API no service, dessa forma fica mais facil de entender o código.
Todos os componentes são muito parecidos, tem um método pra fazer o  get pra pegar os dados retornados pelos endpoints correspondentes as telas que é disparado no evento do click do botão, todos eles também tem uma lista que faz o ngfor no array doadores e exibe todos eles, fiz uma
estilização bem básica na lista para não ficar feio, e centralizei na tela.

* O componente que faz o post do array de objetos para gravar os dados no banco é bem simples também, ele tem dois métodos:
   Um que le o arquivo verifica se é um json e salva os dados em uma variavel, se não for um json retorna um alert falando pra selecionar um json.
   O outro faz um post no endpoint que passamos no service e loga a response.
