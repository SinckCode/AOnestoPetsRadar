import { Body, Controller, Post } from '@nestjs/common';
import { FoundPetsService } from './found-pets.service';
import type { FoundPetCDto } from 'src/core/interfaces/found-pet.interfaces';

@Controller('foundPets')
export class FoundPetsController {

    constructor(private readonly FoundPetsService: FoundPetsService){}

    @Post()
    async createFoundPet(@Body() foundPet : FoundPetCDto) {
        const result = await this.FoundPetsService.createFoundPet(foundPet);
                return {
                    message: 'Se creo una mascota encontrada',
                    ...result
                };
    }

}
