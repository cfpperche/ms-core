import { ApiProperty } from "@nestjs/swagger";
import { PageLinks } from "./page-links";
import { PageMeta } from "./page-meta";

export abstract class Paginated<T> {
  @ApiProperty({ isArray: true })
  content: T[];

  @ApiProperty({ type: PageMeta })
  meta: PageMeta;

  @ApiProperty({ type: PageLinks })
  links: PageLinks;
}
