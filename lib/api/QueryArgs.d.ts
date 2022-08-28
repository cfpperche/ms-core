import { Sort } from "./Sort";
export declare class QueryArgs {
    sort?: Sort[];
    filter?: string[];
    search?: string;
    page?: number;
    limit?: number;
    get skip(): number;
}
