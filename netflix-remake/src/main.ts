import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf'; // importando o CSURF - CROSS SITE REQUEST FORGERY PROTECTION

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(csurf()); //ADICIONANDO NOVA CAMADA DE PROTEÇÃO - Cross-site request forgery -
  await app.listen(3000);
}
bootstrap();
