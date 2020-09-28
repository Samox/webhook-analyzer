import { Injectable } from '@nestjs/common';
import { AddUserCommand, UserFacade } from '@webhook-analyzer/server/user/core/application-services';

@Injectable()
export class UserPublicFacade {
  constructor(private userFacade: UserFacade) {}

  add(command: AddUserCommand): Promise<void> {
    return this.userFacade.addUser(command);
  }
}
