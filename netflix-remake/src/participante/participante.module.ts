import { Module } from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { ParticipanteController } from './participante.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ParticipanteController],
  providers: [ParticipanteService],
})
export class ParticipanteModule {}
