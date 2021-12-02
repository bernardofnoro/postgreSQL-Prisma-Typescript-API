import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { GeneroModule } from './genero/genero.module';
import { PartipanteModule } from './partipante/partipante.module';

@Module({
  imports: [FilmesModule, GeneroModule, PartipanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}