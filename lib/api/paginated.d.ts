import { PageLinks } from "./page-links";
import { PageMeta } from "./page-meta";
export declare abstract class Paginated<T> {
    content: T[];
    meta: PageMeta;
    links: PageLinks;
}
