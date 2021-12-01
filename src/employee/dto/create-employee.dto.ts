import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: boolean;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  gender: string;
}
