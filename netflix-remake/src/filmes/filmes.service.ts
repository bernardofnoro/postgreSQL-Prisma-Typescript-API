import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { data } from 'cheerio/lib/api/attributes';

const lista = [];

@Injectable()
export class FilmesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: {
        genero: createFilmeDto.genero,
        data_lancamento: createFilmeDto.data_lancamento,
        nome: createFilmeDto.nome,
        participante: createFilmeDto.partipante,
        tempo_duracao: createFilmeDto.tempo_duracao,
        imagem: createFilmeDto.imagem,
      },
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
