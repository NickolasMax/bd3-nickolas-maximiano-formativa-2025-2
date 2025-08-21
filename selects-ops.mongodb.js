/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS*/
const database = 'BD3-AULA';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE AQRQUIVOS*/
const collection = 'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERA UTILIZADO, CASO NÃO EXISTA SERA CRIADO */
use(database);

/*SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR $gt */
//db['LIVRARIA'].find({valor:{$gt:100}});

/*SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR $lt */
//db['LIVRARIA'].find({valor:{$lt:110}});

/*DEFININDO INTERVALO ENTRE VALORES*/
/*db['LIVRARIA'].find({valor:{$gte:100 , $lte:200}})
/*ORDEM CRESCENTE.sort({valor:1});*/

/* OPERADOR LOGICO AND */
/* db['LIVRARIA'].find({
    $and:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
]}); */

/* OPERADOR LOGICO OR*/
/* db['LIVRARIA'].find({
    $or:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
]}); */

/* SELEÇÃO DE DOCUMENTOS COM USO DO OPERADOR $in */
db['LIVRARIA'].find({
    autor:{
        $in:['J.R.R Tolkien','Isaac Asimov']
    }
}, {_id:0 , codigo:0, descricao:0}
).sort({valor:1});