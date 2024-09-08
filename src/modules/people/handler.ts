import serverless from 'serverless-http';
import express from 'express';
import { PeopleControllerGet } from './infrastructure/controllers/get/people.infrastructure.controllers.get';

const app = express();
app.use(express.json());

const peopleControllerGet = new PeopleControllerGet();

app.get('/people/:id?', async (req, res) => await peopleControllerGet.execute(req, res));

export const handler = serverless(app);