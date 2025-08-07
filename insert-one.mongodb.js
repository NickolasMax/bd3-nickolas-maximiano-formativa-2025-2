/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS*/

const database = 'BD3-AULA';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE AQRQUIVOS*/
const collection = 'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERA UTILIZADO, CASO NÃO EXISTA SERA CRIADO */
use(database);

/* EXEMPLO DE INSERÇÃO COM insertone: */
db['LIVRARIA'].insertOne(
    {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg",
      "valor": 120,
      "categoria":"Ficção Científica"
    }
);