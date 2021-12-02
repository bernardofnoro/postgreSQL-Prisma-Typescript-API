import { Module } from '@nestjs/common';
import { PartipanteService } from './partipante.service';
import { PartipanteController } from './partipante.controller';

@Module({
  controllers: [PartipanteController],
  providers: [PartipanteService]
})
export class PartipanteModule {}
