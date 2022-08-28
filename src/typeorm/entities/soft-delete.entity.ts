import { DeleteDateColumn } from 'typeorm';
import { CoreEntity } from './core.entity';

export abstract class SoftDeleteEntity extends CoreEntity {
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt!: Date;
}
