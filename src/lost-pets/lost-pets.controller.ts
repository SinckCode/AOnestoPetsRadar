import { Controller, Post } from '@nestjs/common';
import { LostPetsService } from './lost-pets.service';

@Controller('lost-pets')
export class LostPetsController {

    constructor(private readonly LostPetsService: LostPetsService){}

    @Post()
    async createLostPet() {
        const result = await this.LostPetsService.createLostPet();
        return "se creo una Mascota perdida" + result;
    }

}
