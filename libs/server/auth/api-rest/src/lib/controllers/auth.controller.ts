import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthFacade } from '@webhook-analyzer/server/auth/core/application-services';
import { AuthResponse } from '@webhook-analyzer/shared/domain';
import { AccessTokenBodyDto } from '../dto/access-token-body.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authFacade: AuthFacade) {}

  @Post('access-token')
  getJwtToken(@Body() body: AccessTokenBodyDto): Promise<AuthResponse> {
    return this.authFacade.getAccessToken(body.username, body.password);
  }
}
