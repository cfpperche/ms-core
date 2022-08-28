import { Transform, Type } from "class-transformer";
import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { Sort } from "./sort";

export class QueryArgs {
  @IsOptional()
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return [...value.map((item) => item.split(":"))];
    }
    return [value.split(":")];
  })
  sort?: Sort[];

  @IsOptional()
  @IsString({ each: true })
  @Type(() => String)
  @Transform(({ value }) => {
    return value.split(",");
  })
  filter?: string[];

  @IsOptional()
  @IsString()
  @Type(() => String)
  search?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.limit;
  }
}
