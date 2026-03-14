import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { FoundPetsModule } from './found-pets/found-pets.module';
import { LostPetsModule } from './lost-pets/lost-pets.module';

@Module({
  imports: [EmailModule, FoundPetsModule, LostPetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
