import { PlanetDomainRepository } from "../../../domains/repository/planet.domain.repository";
import { IPlanet } from "../../../domains/entity/planet.domain.entity";

export class PlanetUseCaseGet{
    constructor(private readonly planetDomainRepository: PlanetDomainRepository) {}

    async execute(): Promise<IPlanet[]> {
        return await this.planetDomainRepository.get();
    }
}