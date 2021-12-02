import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartipanteService } from './partipante.service';
import { CreatePartipanteDto } from './dto/create-partipante.dto';
import { UpdatePartipanteDto } from './dto/update-partipante.dto';

@Controller('partipante')
export class PartipanteController {
  constructor(private readonly partipanteService: PartipanteService) {}

  @Post()
  create(@Body() createPartipanteDto: CreatePartipanteDto) {
    return this.partipanteService.create(createPartipanteDto);
  }

  @Get()
  findAll() {
    return this.partipanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partipanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartipanteDto: UpdatePartipanteDto) {
    return this.partipanteService.update(+id, updatePartipanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partipanteService.remove(+id);
  }
}
