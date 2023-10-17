import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { connectionOptions } from "./data-source";

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions)],
})
export class DatabaseModule {}
