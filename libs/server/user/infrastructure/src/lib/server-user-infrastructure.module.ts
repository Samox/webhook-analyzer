import { Module } from '@nestjs/common';
import { UserRepositoryAdapter } from './repositories/user-repository.adapter';

const providers = [
  UserRepositoryAdapter,
];

@Module({
  imports: [],
  providers: providers,
  exports: [...providers]
})
export class ServerUserInfrastructureModule {}
