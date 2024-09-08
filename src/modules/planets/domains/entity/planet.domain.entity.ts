import { v4 as uuidv4 } from 'uuid';

export interface IPlanet {
    id: string;
    clima: string;
    diámetro: string;
    gravedad: string;
    nombre: string;
    población: string;
}

export class Planet {
    constructor(private attributes: IPlanet) {}

    static create(CreatePlanet: Omit<IPlanet, 'id'>): Planet {
        return new Planet({
            id: uuidv4(),
            clima: CreatePlanet.clima,
            diámetro: CreatePlanet.diámetro,
            gravedad: CreatePlanet.gravedad,
            nombre: CreatePlanet.nombre,
            población: CreatePlanet.población
        });
    }

    toValue(): IPlanet {
        return this.attributes;
    }
}