import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { AuthTokenReadModel } from './read-models/auth-token/auth-token.read-model';
import { GetAccessTokenQuery } from './queries/get-access-token.query.ts/get-access-tokent.query';

@Injectable()
export class AuthFacade {
  constructor(private queryBus: QueryBus) {}
  getAccessToken(username: string, password: string): Promise<AuthTokenReadModel> {
    return this.queryBus.execute(new GetAccessTokenQuery(username, password));
  }
}
