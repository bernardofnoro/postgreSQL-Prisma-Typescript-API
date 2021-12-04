import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  async create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmesService.createPrisma(createFilmeDto);
  }

  @Get()
  findAll() {
    return this.filmesService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.updatePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.removePrisma(+id);
  }
}
