import { Filme } from '.prisma/client';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  filme: Filme[];
}
