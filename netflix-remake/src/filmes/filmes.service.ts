import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      // eslint-disable-next-line prettier/prettier
      data: {...createFilmeDto},
    });
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    UpdateFilmeDto: UpdateFilmeDto,
  ): Promise<Filme> {
    return await this.prisma.filme.update({
      data: { ...UpdateFilmeDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: { id } });
  }
}
