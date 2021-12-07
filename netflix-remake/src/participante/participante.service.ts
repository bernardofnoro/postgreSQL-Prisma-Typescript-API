import { Participante } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipanteService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.create({
      // eslint-disable-next-line prettier/prettier
      data: {...createParticipanteDto},
    });
  }

  async findAllPrisma(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOnePrisma(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    UpdateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participante.update({
      data: { ...UpdateParticipanteDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.participante.delete({ where: { id } });
  }
}
