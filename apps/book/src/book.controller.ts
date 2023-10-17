import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { BookService } from "./book.service";
import { BookDTO, FindBookDTO } from "libs/interfaces/book.interface";
import { Book } from "libs/entities/book.entity";

@Controller()
export class BookController {
  constructor(private readonly appService: BookService) {}

  @EventPattern({ cmd: "new_book" })
  newBook(book: BookDTO): string {
    const result = this.appService.newBook(book);
    if (!result) return "Book already exists";
    return result;
  }

  @EventPattern({ cmd: "get_book" })
  getBook(bookID: string): BookDTO {
    return this.appService.getBookByID(bookID);
  }

  @EventPattern({ cmd: "get_books" })
  getBooks(): BookDTO[] {
    return this.appService.getAllBooks();
  }

  @EventPattern({ cmd: "find_book" })
  async findBook(book: FindBookDTO): Promise<Book[]> {
    return await this.appService.findBook(book);
  }
}
