import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookController } from "./src/book.controller";
import { BookService } from "./src/book.service";
import { BookRepository } from "./src/book.repository";
import { DatabaseModule } from "./db-module";
import { Book } from "libs/entities/book.entity";

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
