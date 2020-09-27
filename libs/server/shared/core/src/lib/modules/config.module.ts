import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { whaApiConfigService, WhaApiConfigService } from '@webhook-analyzer/server/shared/config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [whaApiConfigService],
      isGlobal: true
    })
  ],
  exports: [WhaApiConfigService],
  providers: [WhaApiConfigService]
})
export class ConfigModule {}
