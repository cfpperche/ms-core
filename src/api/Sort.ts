export enum SortEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export abstract class Sort {
  column: string;
  order: SortEnum;
}
