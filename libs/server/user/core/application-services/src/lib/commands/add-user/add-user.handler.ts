import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '@webhook-analyzer/server/user/core/domain';
import { UserRepository } from '@webhook-analyzer/server/user/core/domain-services';
import { AddUserCommand } from './add-user.command';

@CommandHandler(AddUserCommand)
export class AddUserHandler implements ICommandHandler<AddUserCommand> {
  constructor(private userRepository: UserRepository) {}

  async execute(command: AddUserCommand): Promise<void> {
    const { username, password, avatarUrl } = command;

    const user = new User(username, password, avatarUrl);

    await this.userRepository.save(user);
  }
}
