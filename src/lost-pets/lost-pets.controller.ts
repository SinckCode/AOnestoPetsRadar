import { Body, Controller, Post } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';
import type { LostPetCDto } from 'src/core/interfaces/lost-pet.interfaces';

@Controller('lost-pets')
export class LostPetsController {

    constructor(private readonly LostPetsService: LostPetsService){}

    @Post()
    async createLostPet(@Body() lost: LostPetCDto) {
        const result = await this.LostPetsService.createLostPet(lost);
        return "se creo una Mascota perdida" + result;
    }

}
