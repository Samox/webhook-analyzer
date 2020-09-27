import { Module } from '@nestjs/common';

import { ServerSharedCoreModule } from '@webhook-analyzer/server/shared/core'
import { ServerSharedCoreApiRestModule } from '@webhook-analyzer/server/shared/core-api-rest'

@Module({
  imports: [ServerSharedCoreModule, ServerSharedCoreApiRestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
