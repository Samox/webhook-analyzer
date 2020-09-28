export class User {
  constructor(id: string, name: string, avatarUrl: string) {
    this.username = id;
    this.password = name;
    this.avatarUrl = avatarUrl;
  }

  username: string;
  
  password: string;

  avatarUrl: string | null;
}
