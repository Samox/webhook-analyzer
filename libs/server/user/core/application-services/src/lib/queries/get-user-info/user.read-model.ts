import { User } from '@webhook-analyzer/shared/domain';
import { ApiProperty } from '@nestjs/swagger';

export class UserReadModel implements User {
  @ApiProperty()
  username: string;
  @ApiProperty()
  avatarUrl: string;


  constructor(username: string, avatarUrl: string) {
    this.username = username;
    this.avatarUrl = avatarUrl;
  }
}
