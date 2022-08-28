import { AuditEntity } from "./audit.entity";
export declare abstract class SoftDeleteEntity extends AuditEntity {
    deletedAt: Date;
}
