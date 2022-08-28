import { CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

export abstract class AuditEntity extends CoreEntity {
  @CreateDateColumn({ type: "timestamptz" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt!: Date;

  @VersionColumn()
  version!: number;
}
