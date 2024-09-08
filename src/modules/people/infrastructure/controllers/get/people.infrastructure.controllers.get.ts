import { Request, Response } from "express";
import { PlanetInfrastructureApiClient } from "../../apiclient/people.infrastructure.apiclient";

export class PeopleControllerGet {
    private planetInfrastructureApiClient: PlanetInfrastructureApiClient;
    
    constructor(){
       this.planetInfrastructureApiClient = new PlanetInfrastructureApiClient();
    }

    async execute(req: Request, res: Response) {

        if(!req.params.id){
            return res.status(400).json({
                message: 'id is required',
            });
        }

        try{
            const id:number = parseInt(req.params.id);
            
            const data = await this.planetInfrastructureApiClient.execute(id);
            
            return res.status(200).json({
                'message': 'People found',
                people: data,
            }); 
        
        }catch(Error){
            return res.status(500).json({
                message: Error.message,
            });
        }
    }   
}