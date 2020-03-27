const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar uma informação do Back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
 
/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após o ? (filtros, paginação)
 * Route Params: Paramentos utilizados para identificar recursos
 * Request Body: Corpo da requisisção, utilizado para criar ou alterar recursos
 */

 /** Banco de dados
  * SQL : MySQL,SQLite,PostgreSQL, Oracle,Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.use(routes);
app.use(errors());
/**
 * Porta de acesso ao index no Browse
 */
// app.listen(3333);

module.exports = app;


