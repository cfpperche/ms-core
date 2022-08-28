import { Sort } from "./sort";
export declare class QueryArgs {
    sort?: Sort[];
    filter?: string[];
    search?: string;
    page?: number;
    limit?: number;
    get skip(): number;
}
