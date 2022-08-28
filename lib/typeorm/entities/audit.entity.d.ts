import { CoreEntity } from "./core.entity";
export declare abstract class AuditEntity extends CoreEntity {
    createdAt: Date;
    updatedAt: Date;
    version: number;
}
