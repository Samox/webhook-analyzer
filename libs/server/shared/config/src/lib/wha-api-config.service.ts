import { Injectable } from '@nestjs/common';
import { ConfigService, registerAs } from '@nestjs/config';

const CONFIG_NAMESPACE = 'wha-api-service';

export const whaApiConfigService = registerAs(CONFIG_NAMESPACE, () => ({
  auth: {
    jwtSecret: process.env.AUTH_JWT_SECRET,
    remoteTokenCryptoKey: process.env.AUTH_REMOTE_TOKEN_CRYPTO_KEY
  },
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER
  },
  jwtSecret: process.env.WHA_SERVER_JWT_SECRET
}));

@Injectable()
export class WhaApiConfigService {
  constructor(private configService: ConfigService) {}

  getDbConfig(): { host: string; name: string; password: string; port: number; user: string } {
    return this.configService.get(CONFIG_NAMESPACE + '.db');
  }

  getJwtSecret(): string {
    return this.configService.get<string>(CONFIG_NAMESPACE + '.auth.jwtSecret');
  }

  getRemoteTokenCryptoKey(): string {
    return this.configService.get<string>(CONFIG_NAMESPACE + '.auth.remoteTokenCryptoKey');
  }
}
