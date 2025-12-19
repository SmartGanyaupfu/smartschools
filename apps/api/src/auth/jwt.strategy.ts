import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'dev-secret',
    });
  }

  async validate(payload: {
    sub: string;
    role: string;
    email: string;
    schoolId: string;
  }) {
    return {
      userId: payload.sub,
      role: payload.role,
      email:payload.email,
      schoolId:payload.schoolId,
    };
  }
}
