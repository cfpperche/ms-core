import { DeleteDateColumn } from "typeorm";
import { AuditEntity } from "./audit.entity";

export abstract class SoftDeleteEntity extends AuditEntity {
  @DeleteDateColumn({ type: "timestamptz" })
  deletedAt!: Date;
}
