import serverless from 'serverless-http';
import expressApp from '@/utils/infrastructure/express/utils.express.app';
import { PeopleControllerGet } from '@/modules/people/infrastructure/controllers/get/people.infrastructure.controllers.get';

const peopleControllerGet = new PeopleControllerGet();

expressApp.get('/people/:id?', async (req, res) => await peopleControllerGet.execute(req, res));

export const handler = serverless(expressApp);