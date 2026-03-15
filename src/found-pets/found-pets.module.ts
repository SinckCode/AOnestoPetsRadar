import { Module } from '@nestjs/common';
import { FoundPetsService } from './found-pets.service';
import { FoundPetsController } from './found-pets.controller';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundPet } from 'src/core/db/entities/foundpets.entity';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature([FoundPet])
   ],
  providers: [FoundPetsService],
  controllers: [FoundPetsController]
})
export class FoundPetsModule {}
