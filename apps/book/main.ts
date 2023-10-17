import { NestFactory } from "@nestjs/core";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { BookModule } from "./book.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookModule,
    { transport: Transport.TCP, options: { port: 5032 } }
  );

  await app.listen();
}
bootstrap();
