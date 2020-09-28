import { Module } from '@nestjs/common';

import { ServerAuthApiRestModule } from '@webhook-analyzer/server/auth/api-rest';
import { ServerSharedCoreModule } from '@webhook-analyzer/server/shared/core'
import { ServerSharedCoreApiRestModule } from '@webhook-analyzer/server/shared/core-api-rest'

@Module({
  imports: [ServerSharedCoreModule, ServerSharedCoreApiRestModule, ServerAuthApiRestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
