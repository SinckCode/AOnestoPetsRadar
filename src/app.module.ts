import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { FoundPetsModule } from './found-pets/found-pets.module';
import { LostPetsModule } from './lost-pets/lost-pets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';
import { dataSourceOptions } from './core/db/data.source';

@Module({
  imports: [
    EmailModule,
    FoundPetsModule,
    LostPetsModule,
    TypeOrmModule.forRoot(dataSourceOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
