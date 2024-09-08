import { PlanetDomainRepository } from "../../../domains/repository/planet.domain.repository";
import { PlanetUseCaseCreateDto } from "./planet.aplication.usecases.create.dto";
import { IPlanet, Planet } from "../../../domains/entity/planet.domain.entity";

export class PlanetUseCaseCreate{
    constructor(private readonly planetDomainRepository: PlanetDomainRepository) {}

    async execute(dto: PlanetUseCaseCreateDto): Promise<IPlanet> {
        const planet = Planet.create(dto);
       
        await this.planetDomainRepository.create(planet);

        return planet.toValue();
    }
}