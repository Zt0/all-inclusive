import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const connectionOptions: TypeOrmModuleOptions = {
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
