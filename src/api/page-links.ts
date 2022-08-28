import { ApiProperty } from "@nestjs/swagger";

export abstract class PageLinks {
  /**
   * a link to the "first" page
   */
  @ApiProperty()
  first?: string;
  /**
   * a link to the "previous" page
   */
  @ApiProperty()
  previous?: string;
  /**
   * a link to the "current" page
   */
  @ApiProperty()
  current?: string;
  /**
   * a link to the "next" page
   */
  @ApiProperty()
  next?: string;
  /**
   * a link to the "last" page
   */
  @ApiProperty()
  last?: string;
}
