/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/book/book.module.ts":
/*!**********************************!*\
  !*** ./apps/book/book.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const book_controller_1 = __webpack_require__(/*! ./src/book.controller */ "./apps/book/src/book.controller.ts");
const book_service_1 = __webpack_require__(/*! ./src/book.service */ "./apps/book/src/book.service.ts");
const book_repository_1 = __webpack_require__(/*! ./src/book.repository */ "./apps/book/src/book.repository.ts");
const db_module_1 = __webpack_require__(/*! ./db-module */ "./apps/book/db-module.ts");
const book_entity_1 = __webpack_require__(/*! libs/entities/book.entity */ "./libs/entities/book.entity.ts");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DatabaseModule, typeorm_1.TypeOrmModule.forFeature([book_entity_1.Book])],
        controllers: [book_controller_1.BookController],
        providers: [book_service_1.BookService, book_repository_1.BookRepository],
    })
], BookModule);


/***/ }),

/***/ "./apps/book/data-source.ts":
/*!**********************************!*\
  !*** ./apps/book/data-source.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectionOptions = void 0;
exports.connectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "all_inclusive",
    entities: [__dirname + "../**/*.entity.ts"],
    autoLoadEntities: true,
    synchronize: true,
};


/***/ }),

/***/ "./apps/book/db-module.ts":
/*!********************************!*\
  !*** ./apps/book/db-module.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const data_source_1 = __webpack_require__(/*! ./data-source */ "./apps/book/data-source.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(data_source_1.connectionOptions)],
    })
], DatabaseModule);


/***/ }),

/***/ "./apps/book/src/book.controller.ts":
/*!******************************************!*\
  !*** ./apps/book/src/book.controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const book_service_1 = __webpack_require__(/*! ./book.service */ "./apps/book/src/book.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const book_interface_1 = __webpack_require__(/*! libs/interfaces/book.interface */ "./libs/interfaces/book.interface.ts");
let BookController = class BookController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    newBook(book) {
        const result = this.appService.newBook(book);
        if (!result)
            return "Book already exists";
        return result;
    }
    getBook(bookID) {
        return this.appService.getBookByID(bookID);
    }
    getBooks() {
        return this.appService.getAllBooks();
    }
    async findBook(book) {
        return await this.appService.findBook(book);
    }
};
exports.BookController = BookController;
__decorate([
    (0, microservices_1.EventPattern)({ cmd: "new_book" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof book_interface_1.BookDTO !== "undefined" && book_interface_1.BookDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", String)
], BookController.prototype, "newBook", null);
__decorate([
    (0, microservices_1.EventPattern)({ cmd: "get_book" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof book_interface_1.BookDTO !== "undefined" && book_interface_1.BookDTO) === "function" ? _c : Object)
], BookController.prototype, "getBook", null);
__decorate([
    (0, microservices_1.EventPattern)({ cmd: "get_books" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BookController.prototype, "getBooks", null);
__decorate([
    (0, microservices_1.EventPattern)({ cmd: "find_book" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof book_interface_1.FindBookDTO !== "undefined" && book_interface_1.FindBookDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], BookController.prototype, "findBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof book_service_1.BookService !== "undefined" && book_service_1.BookService) === "function" ? _a : Object])
], BookController);


/***/ }),

/***/ "./apps/book/src/book.repository.ts":
/*!******************************************!*\
  !*** ./apps/book/src/book.repository.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const book_entity_1 = __webpack_require__(/*! libs/entities/book.entity */ "./libs/entities/book.entity.ts");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
let BookRepository = class BookRepository extends typeorm_2.Repository {
    dataSource;
    bookRepository;
    constructor(dataSource) {
        super(book_entity_1.Book, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async findAll() {
        return this.bookRepository.find();
    }
};
exports.BookRepository = BookRepository;
__decorate([
    (0, typeorm_1.InjectRepository)(book_entity_1.Book),
    __metadata("design:type", typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object)
], BookRepository.prototype, "bookRepository", void 0);
exports.BookRepository = BookRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _a : Object])
], BookRepository);


/***/ }),

/***/ "./apps/book/src/book.service.ts":
/*!***************************************!*\
  !*** ./apps/book/src/book.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const book_repository_1 = __webpack_require__(/*! ./book.repository */ "./apps/book/src/book.repository.ts");
let bookStore = [];
let BookService = class BookService {
    bookRepository;
    getBookByID(bookID) {
        return bookStore.find((b) => b.id == bookID);
    }
    getAllBooks() {
        return bookStore;
    }
    newBook(book) {
        const exists = bookStore.find((b) => {
            return (b.title == book.title &&
                b.author == book.author &&
                b.release_date == book.release_date);
        });
        if (exists)
            return false;
        book.id = "Book_" + (bookStore.length + 1);
        bookStore.push(book);
        return book.id;
    }
    async findBook(book) {
        return this.bookRepository.findAll();
    }
};
exports.BookService = BookService;
__decorate([
    (0, common_1.Inject)(book_repository_1.BookRepository),
    __metadata("design:type", typeof (_a = typeof book_repository_1.BookRepository !== "undefined" && book_repository_1.BookRepository) === "function" ? _a : Object)
], BookService.prototype, "bookRepository", void 0);
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);


/***/ }),

/***/ "./libs/entities/book.entity.ts":
/*!**************************************!*\
  !*** ./libs/entities/book.entity.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Book = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Book = class Book {
    id;
    uuid;
    title;
};
exports.Book = Book;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Generated)("uuid"),
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, unique: true }),
    __metadata("design:type", String)
], Book.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);


/***/ }),

/***/ "./libs/interfaces/book.interface.ts":
/*!*******************************************!*\
  !*** ./libs/interfaces/book.interface.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./apps/book/main.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const book_module_1 = __webpack_require__(/*! ./book.module */ "./apps/book/book.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(book_module_1.BookModule, { transport: microservices_1.Transport.TCP, options: { port: 5032 } });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;