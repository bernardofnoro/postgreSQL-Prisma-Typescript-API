import { Module } from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { ParticipanteController } from './participante.controller';

@Module({
  controllers: [ParticipanteController],
  providers: [ParticipanteService],
})
export class ParticipanteModule {}
