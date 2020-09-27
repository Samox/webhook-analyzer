import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhaApiConfigService } from '@webhook-analyzer/server/shared/config';

const typeOrmModule = TypeOrmModule.forRootAsync({
  useFactory: async (configService: WhaApiConfigService) => {
    const { host, name, password, port, user } = configService.getDbConfig();
    return {
      type: 'postgres' as 'postgres',
      host,
      port,
      username: user,
      password,
      database: name,
      autoLoadEntities: true,
      synchronize: true
    };
  },
  inject: [WhaApiConfigService]
});

@Module({
  imports: [typeOrmModule],
  exports: [typeOrmModule]
})
export class TypeOrmRootModule {}
