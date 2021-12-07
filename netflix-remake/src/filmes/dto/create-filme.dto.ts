import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_lancamento: string;

  @IsString()
  @IsNotEmpty()
  tempo_duracao: string;

  @IsNotEmpty()
  @IsString()
  generoid: number;

  @IsNotEmpty()
  @IsString()
  participanteid: number;
}
