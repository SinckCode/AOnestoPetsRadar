import { Injectable } from '@nestjs/common';
import { FoundPetCDto } from 'src/core/interfaces/found-pet.interfaces';
import { EmailOptions } from 'src/core/interfaces/mail-options.interfaces';
import { EmailService } from 'src/email/email.service';
import { generateFoundPetEmailTemplate } from './templates/found-pets-email.template';
import { FoundPet } from 'src/core/db/entities/foundpets.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FoundPetsService {

    constructor(
        @InjectRepository(FoundPet)
        private readonly foundPetRepository: Repository<FoundPet>,
        private readonly emailService: EmailService
    ) {}

    async createFoundPet(foundPet : FoundPetCDto): Promise<Boolean>{

        const newFoundPet = this.foundPetRepository.create({
          species: foundPet.species,
          breed: foundPet.breed,
          color: foundPet.color,
          size: foundPet.size,
          description: foundPet.description,
          photo_url: foundPet.photo_url,
          finder_name: foundPet.finder_name,
          finder_email: foundPet.finder_email,
          finder_phone: foundPet.finder_phone,
          address: foundPet.address,
          found_date: foundPet.found_date,
          location: {
              type: 'Point',
              coordinates: [foundPet.lon, foundPet.lat]
          }
        });

        await this.foundPetRepository.save(newFoundPet);

        const options : EmailOptions = {
            to: 'soyangeldavid1@gmail.com',
            subject: `Se encontró un ${foundPet.species}`,
            html: generateFoundPetEmailTemplate(foundPet)
        };
        const result = await this.emailService.sendEmail(options);
        return result;
    }

}
