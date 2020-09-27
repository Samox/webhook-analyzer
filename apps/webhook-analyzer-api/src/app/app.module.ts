import { Module } from '@nestjs/common';

import { ServerSharedCoreModule } from '@webhook-analyzer/server/shared/core'

@Module({
  imports: [ServerSharedCoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
