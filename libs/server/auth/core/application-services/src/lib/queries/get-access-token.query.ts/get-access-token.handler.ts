import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { AddUserCommand, UserPublicFacade, UserRepository } from '@webhook-analyzer/server/user/public';
import { AuthTokenReadModel } from '../../read-models/auth-token/auth-token.read-model';
import { GetAccessTokenQuery } from './get-access-tokent.query';

@QueryHandler(GetAccessTokenQuery)
export class GetAccessTokenHandler
  implements IQueryHandler<GetAccessTokenQuery, AuthTokenReadModel> {

  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
    private userFacade: UserPublicFacade
  ) {}

  async execute(query: GetAccessTokenQuery): Promise<AuthTokenReadModel> {
    const { username, password } = query;

    let user = await this.userRepository.findById(username);
    if (!user) {
      await this.userFacade.add(new AddUserCommand(username, password));
      user = await this.userRepository.getById(username);
    }

    const jwtPayload = {
      user
    };

    const jwtToken = await this.jwtService.signAsync(jwtPayload);

    return { token: jwtToken };
  }
}
