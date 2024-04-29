import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UdateTaskDto {
  @IsString() //@IsString() es Funcionalidad de Class Validator , para la validacion del Dto (date transfer object)... Es decir validacion de datos que envia el cliente , es decir , recibe el back.
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
