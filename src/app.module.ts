import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './database/prisma.service';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
