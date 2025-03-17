Teste feito para avaliar conhecimentos em Java e Angular.

API feita com spring, utilizei a arquitetura mvc para organizar o projeto.

Todos os métodos pedidos no enunciado do teste, estão na pasta service > DoadorService.java.
 Não utilizei recursos avançados da linguagem, fiz o básico e utilizei HashMaps para para armazenar os dados, basicamente o que eu fazia era trazer todos os doadores da tabela com o findAll() e fazer o que era pedido nos tópicos utilizando for pra iterar os doadores e processar o que era pedido para adicionar ao HashMap que o método retornaria.

Na Pasta model, está a classe do doador, na classe doador está o mapeamento para o JPA criar a tabela.

Na Pasta controller, está a DoadorController.java, onde estão os endpoints da API.


-----------------------------------------------------------------------------------------------------------
No Front End eu fiz um app com Angular 19, utilizei o bootstrap para facilitar a estilização e deixar menos rudimentar o projeto.

Criei todos os componentes na pasta Pages, e isolei a comunicação com a API no service, dessa forma fica mais facil de entender o código.
Todos os componentes são muito parecidos, tem um método pra fazer o  get pra pegar os dados retornados pelos endpoints correspondentes as telas que é disparado no evento do click do botão, todos eles também tem uma lista <li> que faz o ngfor no array doadores e exibe todos eles, fiz uma
estilização bem básica na lista para não ficar feio, e centralizei na tela.

O componente que faz o post do array de objetos para gravar os dados no banco é bem simples também, ele tem dois métodos:
   Um que le o arquivo verifica se é um json e salva os dados em uma variavel, se não for um json retorna um alert falando pra selecionar um json.
   O outro faz um post no endpoint que passamos no service e loga a response.



Qualquer dúvida ou feedback sobre o projeto me avise, ainda estou aprendendo, espero que goste!
