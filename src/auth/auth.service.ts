import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME');
  }

  async signIn(email: string, password: string): Promise<AuthResponseDto> {
    // Encontrar o usuário no banco de dados
    const foundUser = await this.usersService.findByEmail(email);

    // Verificar se o usuário existe e se a senha está correta
    if (!foundUser || !bcrypt.compareSync(password, foundUser.password_hash)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: foundUser.id, email: foundUser.email };

    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: this.jwtExpirationTimeInSeconds
    }
  }
}
