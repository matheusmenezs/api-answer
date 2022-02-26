import  * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
import * as logger from 'morgan'

import { connectBD } from './config/db';
import { routerEmployee } from './routes/employee';

export const app = express(); //cria a aplicação 
 
app.use(cors()); //libera o acesso aos serviços
app.use(logger('dev')); //configura os logs
app.use(bodyParser.json()); //permite enviar e receber json

app.use(routerEmployee)

connectBD(); //conecta no banco de dados 