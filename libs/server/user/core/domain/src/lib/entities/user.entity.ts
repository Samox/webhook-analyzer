export class User {
  constructor(username: string, password: string, avatarUrl: string) {
    this.username = username;
    this.password = password;
    this.avatarUrl = avatarUrl;
  }

  username: string;
  
  password: string;

  avatarUrl: string | null;
}
