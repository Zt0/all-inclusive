import { Inject, Injectable } from "@nestjs/common";
import { BookRepository } from "./book.repository";
import { BookDTO, FindBookDTO } from "libs/interfaces/book.interface";

let bookStore: BookDTO[] = [];

@Injectable()
export class BookService {
  @Inject(BookRepository)
  bookRepository: BookRepository;

  getBookByID(bookID: string) {
    return bookStore.find((b: BookDTO) => b.id == bookID);
  }

  getAllBooks() {
    return bookStore;
  }

  newBook(book: BookDTO) {
    const exists = bookStore.find((b: BookDTO) => {
      return (
        b.title == book.title &&
        b.author == book.author &&
        b.release_date == book.release_date
      );
    });
    if (exists) return false;
    book.id = "Book_" + (bookStore.length + 1);
    bookStore.push(book);
    return book.id;
  }

  async findBook(book: FindBookDTO) {
    return this.bookRepository.findAll();
  }
}
