import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3200;
  await app.listen(port);
  console.log(`Server started at http://localhost:${port}`);
}
bootstrap();
