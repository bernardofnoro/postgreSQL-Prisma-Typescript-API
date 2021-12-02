import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService]
})
export class FilmesModule {}
