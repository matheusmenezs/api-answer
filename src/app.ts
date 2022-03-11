import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectBD } from './config/db';
import { routerEmployee } from './routes/employee';
import { routerQuestion } from './routes/question';
import { routerAnswer } from './routes/answer';
import { routerAuthEmployee } from './routes/authEmployee';
import authMiddleware from './middlewares/authMiddleware';

export const app = express();

app.use(cors()); //libera o acesso aos serviços
app.use(logger('dev')); //configura os logs
app.use(express.json());

app.use('/auth', routerAuthEmployee)
app.use('/employee', routerEmployee);
app.use('/question', routerQuestion);
app.use('/answer', authMiddleware, routerAnswer);

connectBD(); 