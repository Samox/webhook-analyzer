import { Module } from '@nestjs/common';
import { ServerUserShellModule } from '@webhook-analyzer/server/user/shell';
import { UserPublicFacade } from './user-public.facade';

@Module({
  imports: [ServerUserShellModule],
  providers: [UserPublicFacade],
  exports: [UserPublicFacade]
})
export class ServerUserPublicModule {}
