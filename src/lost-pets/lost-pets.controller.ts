import { Body, Controller, Post } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';
import type { LostPetCDto } from 'src/core/interfaces/lost-pet.interfaces';

@Controller('lostPets')
export class LostPetsController {

    constructor(private readonly LostPetsService: LostPetsService){}

    @Post()
    async createLostPet(@Body() lostPet: LostPetCDto) {
        const result = await this.LostPetsService.createLostPet(lostPet);
        return "se creo una Mascota perdida" + result;
    }

}
