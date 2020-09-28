import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { User } from '@webhook-analyzer/shared/domain';
import { UserRepository } from '@webhook-analyzer/server/user/core/domain-services';
import { GetUserInfoQuery } from './get-user-info.query';

@QueryHandler(GetUserInfoQuery)
export class GetUserInfoHandler implements IQueryHandler<GetUserInfoQuery> {
  constructor(private userRepository: UserRepository) {}

  async execute(query: GetUserInfoQuery): Promise<User> {
    return this.userRepository.getByUserName(query.currentUsername);
  }
}
