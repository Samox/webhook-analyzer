import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServerAuthCoreApplicationServicesModule } from '@webhook-analyzer/server/auth/core/application-services';
import { WhaApiConfigService } from '@webhook-analyzer/server/shared/config';
import { ServerUserShellModule } from '@webhook-analyzer/server/user/public';



@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [WhaApiConfigService],
      useFactory: (configService: WhaApiConfigService) => ({
        secret: configService.getJwtSecret()
      })
    }),
    ServerAuthCoreApplicationServicesModule,
    ServerUserShellModule
  ],
  providers: [],
  exports: [
    ServerUserShellModule,
    ServerAuthCoreApplicationServicesModule,
    JwtModule
  ]
})
export class ServerAuthShellModule {}
