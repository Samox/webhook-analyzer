import { Injectable } from '@nestjs/common';
import { User } from '@webhook-analyzer/server/user/core/domain';
import { UserRepository } from '@webhook-analyzer/server/user/core/domain-services';

const user = new User("Sammy", "croute", null)

@Injectable()
export class UserRepositoryAdapter extends UserRepository {
  constructor(
  ) {
    super();
  }

  async findById(id: string): Promise<User | undefined> {
    return await user
  }

  async getByUserName(username: string): Promise<User> {
    return await user

  }

  async loadCurrentUser(token: string): Promise<User> {
    return await user
  }

  async save(user: User): Promise<User> {
    return await user
  }
}
