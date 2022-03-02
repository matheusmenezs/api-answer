import  * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import * as logger from 'morgan'

import { connectBD } from './config/db';
import { routerEmployee } from './routes/employee';
import { routerQuestion } from './routes/question';

export const app = express(); //cria a aplicação 
 
app.use(cors()); //libera o acesso aos serviços
app.use(logger('dev')); //configura os logs
app.use(bodyParser.json()); //permite enviar e receber json

app.use('/employee', routerEmployee)
app.use('/question', routerQuestion)

connectBD(); //conecta no banco de dados 