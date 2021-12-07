import { Genero } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      // eslint-disable-next-line prettier/prettier
      data: {...createGeneroDto},
    });
  }

  async findAllPrisma(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  async findOnePrisma(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    UpdateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return await this.prisma.genero.update({
      data: { ...UpdateGeneroDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.genero.delete({ where: { id } });
  }
}
