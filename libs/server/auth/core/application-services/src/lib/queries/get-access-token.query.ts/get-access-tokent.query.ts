import { IQuery } from '@nestjs/cqrs';

export class GetAccessTokenQuery implements IQuery {
  constructor(public username: string, public password: string) {}
}
