import serverless from 'serverless-http';
import expressApp from '@/utils/infrastructure/express/utils.express.app';
import { PlanetControllerGet } from '@/modules/planets/infrastructure/controllers/get/planet.infrastructure.controllers.get';

const planetControllerGet = new PlanetControllerGet();

expressApp.get('/planets/', async (req, res) => await planetControllerGet.execute(req, res));

export const handler = serverless(expressApp);