import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated("uuid")
  @Column({ type: "varchar", nullable: false, unique: true })
  uuid: string;

  @Column({ type: "varchar" })
  title: string;
}
