import { PlanetUseCaseGet } from '@/modules/planets/aplication/usecases/get/planet.aplication.usecases.get';
import { PlanetInfrastructureRepository } from '@/modules/planets/infrastructure/repository/planet.infrastructure.repository';

const mockPlanetInfrastructureRepository = {
    get: jest.fn()
};

describe('PlanetUseCaseGet', () => {

    let useCase: PlanetUseCaseGet;

    beforeEach(() => {
        useCase = new PlanetUseCaseGet(mockPlanetInfrastructureRepository as unknown as PlanetInfrastructureRepository);
    });

    it('should return a list of planets', async () => {
        await expect(useCase.execute()).resolves.not.toThrow();
    });
});