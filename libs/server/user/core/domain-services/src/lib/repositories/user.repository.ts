import { User } from '@webhook-analyzer/server/user/core/domain';

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | undefined>;

  abstract getByUserName(username: string): Promise<User>;

  abstract loadCurrentUser(token: string): Promise<User>;

  abstract save(user: User): Promise<User>;
}
