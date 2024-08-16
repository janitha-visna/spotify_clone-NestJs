import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private DevConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: {
      port: string;
    },
  ) {}
  getHello(): string {
    return `Hello World! ${this.DevConfigService.getDBHOST()} PORT = ${this.config.port}`;
  }
}
