import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Book } from "libs/entities/book.entity";

@Injectable()
export class BookRepository extends Repository<Book> {
  @InjectRepository(Book) private readonly bookRepository: Repository<Book>;

  constructor(public dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }
}
