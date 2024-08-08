import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class job_details {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text", nullable: false })
  title!: string;

  @Column({ type: "text", nullable: false })
  description!: string;

  @Column({ type: "text", nullable: false })
  location!: string;

  @Column({ type: "text", nullable: false })
  salary!: string;

  @Column({ type: "text", nullable: false })
  skills!: string;

  @Column({ type: "text", nullable: false })
  category!: string;

  @Column({ type: "date", nullable: false })
  dateOfPost!: string;

  @Column({ type: "date", nullable: false })
  lastDate!: string;
}
