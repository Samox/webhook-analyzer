import { Global, Module } from '@nestjs/common';
import { ServerUserCoreApplicationServicesModule } from '@webhook-analyzer/server/user/core/application-services';
import { UserRepository } from '@webhook-analyzer/server/user/core/domain-services';
import {
  ServerUserInfrastructureModule,
  UserRepositoryAdapter
} from '@webhook-analyzer/server/user/infrastructure';

const providers = [
  { provide: UserRepository, useExisting: UserRepositoryAdapter },
];

@Global()
@Module({
  imports: [ServerUserCoreApplicationServicesModule, ServerUserInfrastructureModule],
  providers,
  exports: [...providers, ServerUserCoreApplicationServicesModule]
})
export class ServerUserShellModule {}
