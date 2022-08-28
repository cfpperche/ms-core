import { CoreEntity } from './core.entity';
export declare abstract class SoftDeleteEntity extends CoreEntity {
    deletedAt: Date;
}
