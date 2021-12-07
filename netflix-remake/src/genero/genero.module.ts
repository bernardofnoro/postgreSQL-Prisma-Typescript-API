import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GeneroController],
  providers: [GeneroService],
})
export class GeneroModule {}
