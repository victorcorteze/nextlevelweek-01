import express, { response, request } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3333);
//Rotas: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do beckend
//POST: Criar uma nova informação no backend
//PUT: Atualizar uma informação existente
//DELETE: Remover uma informação do backend

//POST http://localhost:3333/users = Cria um usuário
//GET http://localhost:3333/users = Listar usuários
//GET http://localhost:3333/users/5 = Bucar dados do usuário com ID igual a 5

// Request Param: Parâmetros que vem da própria rota que identificam um recurso
// Query Param: Parâmetros que vem na prória rota geralmente opcionais para filtros, paginação
// Request Body: São parâmetros para criação e atualização de informações

//SQL query normal: SELECT * FROM users WHERE name = 'Victor'
//KNEX query: knex('users').where('name','Victor').select('*')

