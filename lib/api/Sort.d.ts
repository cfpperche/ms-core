export declare enum SortEnum {
    ASC = "ASC",
    DESC = "DESC"
}
export declare abstract class Sort {
    column: string;
    order: SortEnum;
}
