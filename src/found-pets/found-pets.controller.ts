import { Body, Controller, Post } from '@nestjs/common';
import { FoundPetsService } from './found-pets.service';
import type { FoundPetCDto } from 'src/core/interfaces/found-pet.interfaces';

@Controller('found-pets')
export class FoundPetsController {

    constructor(private readonly FoundPetsService: FoundPetsService){}

    @Post()
    async createFoundPet(@Body() found : FoundPetCDto) {
        const result = await this.FoundPetsService.createFoundPet(found);
        return "se creo una Mascota encontrada" + result;
    }

}
