import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.createPrisma(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.updatePrisma(+id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.removePrisma(+id);
  }
}
