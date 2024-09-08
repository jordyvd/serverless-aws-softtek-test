import {Request, Response} from 'express';
import { PlanetUseCaseGet } from '@/modules/planets/aplication/usecases/get/planet.aplication.usecases.get';
import { PlanetInfrastructureRepository } from '../../repository/planet.infrastructure.repository';

export class PlanetControllerGet {
    private planetUseCaseGet: PlanetUseCaseGet;

    constructor() {
        this.planetUseCaseGet = new PlanetUseCaseGet(new PlanetInfrastructureRepository());
    }

    async execute(req: Request, res: Response) {
        try {
            const planets = await this.planetUseCaseGet.execute();
            return res.status(200).json({
                message: 'Planets found',
                planets,
            });
        } catch {
            return res.status(500).json({
                message: 'Internal Server Error',
            });
        }
    }
}