import serverless from 'serverless-http';
import expressApp from '@/utils/infrastructure/express/utils.express.app';
import { PlanetControllerCreate } from '@/modules/planets/infrastructure/controllers/create/planet.infrastructure.controllers.create';

const planetControllerCreate = new PlanetControllerCreate();

expressApp.post('/planets/', async (req, res) => await planetControllerCreate.execute(req, res));

export const handler = serverless(expressApp);