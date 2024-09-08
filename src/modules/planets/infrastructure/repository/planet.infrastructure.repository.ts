import { Planet, IPlanet } from "../../domains/entity/planet.domain.entity";
import { PlanetDomainRepository } from "../../domains/repository/planet.domain.repository";
import { DynamoDB } from "aws-sdk";

export class PlanetInfrastructureRepository extends PlanetDomainRepository {

  private dynamodb = new DynamoDB.DocumentClient();

  async create(planet: Planet): Promise<IPlanet> {

    const params = {
      TableName: "PlanetsTbl",
      Item: planet.toValue(),
    };

    await this.dynamodb.put(params).promise();

    return planet.toValue();
  }

  async get(): Promise<IPlanet[]> {

    const params: DynamoDB.DocumentClient.ScanInput = {
      TableName: "PlanetsTbl",
    };

    const response = await this.dynamodb.scan(params).promise();

    const planets = response.Items as IPlanet[];

    return planets;
  }
}