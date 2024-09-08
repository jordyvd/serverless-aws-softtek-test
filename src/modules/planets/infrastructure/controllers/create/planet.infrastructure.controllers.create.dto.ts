import { IsString, IsNotEmpty } from 'class-validator';

export class PlanetControllerCreateDto {
    @IsString()
    @IsNotEmpty()
    climate: string;

    @IsString()
    @IsNotEmpty()
    diameter: string;

    @IsString()
    
    @IsNotEmpty()
    gravity: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    population: string;
}
