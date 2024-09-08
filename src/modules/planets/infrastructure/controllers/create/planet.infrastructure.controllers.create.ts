import { Request, Response } from "express";
import { PlanetUseCaseCreate } from "@/modules/planets/aplication/usecases/create/planet.aplication.usecases.create";
import { PlanetUseCaseCreateDto } from "@/modules/planets/aplication/usecases/create/planet.aplication.usecases.create.dto";
import { PlanetControllerCreateDto } from "./planet.infrastructure.controllers.create.dto";
import { PlanetInfrastructureRepository } from "../../repository/planet.infrastructure.repository";
import { plainToInstance } from 'class-transformer';
import { AwsTranslateReadJson } from '@/utils/infrastructure/aws/translate/utils.aws.translate.read.json';
import { validate } from "class-validator";

export class PlanetControllerCreate {
    private planetUseCaseCreate: PlanetUseCaseCreate;

    constructor(){
        this.planetUseCaseCreate = new PlanetUseCaseCreate(new PlanetInfrastructureRepository());
    }

    async execute(req: Request, res: Response) {
        try{
            const dto = plainToInstance(PlanetControllerCreateDto, req.body);
            
            await this.validateDto(dto).then(valid => {
                if (!valid) {
                    return res.status(400).json({
                        message: 'Bad Request',
                        errors: 'Invalid data',
                    });
                }
            });
            
            const translated = await AwsTranslateReadJson.readJson(req.body) as PlanetUseCaseCreateDto;
            
            const planet = await this.planetUseCaseCreate.execute(translated);
            
            return res.status(201).json({
                message: 'Planet created',
                planet,
            });
        
        }catch(Error){
            return res.status(500).json({
                message: Error.message,
            });
        }
    }

    private async validateDto(dto: PlanetControllerCreateDto): Promise<boolean> {
        const errors = await validate(dto);
        if (errors.length > 0) {
            return false;
        }
        return true;
    }
}