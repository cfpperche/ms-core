export * from "./domain";
export * from "./typeorm";

export function mapper<Target, Source>(target: Target, source: Source): Target {
  const targetKeys = Object.keys(target);

  const result = Object.keys(source).reduce((acc, sourceKey) => {
    if (targetKeys.some((targetKey) => targetKey === sourceKey)) {
      (acc as any)[sourceKey] = (source as any)[sourceKey];
    }
    return acc;
  }, target);

  return result;
}
