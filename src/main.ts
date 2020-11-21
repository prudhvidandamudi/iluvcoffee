import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /* Throw errors when whitelisted properties are found */
      forbidNonWhitelisted: true,

      whitelist: true,
      // Enabling auto transform feature of ValidationPipe
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
