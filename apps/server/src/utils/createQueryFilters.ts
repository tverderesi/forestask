type EqualityType = "gte" | "lte" | "gt" | "lt" | "eq" | "ne";

export type QueryFilterType<T> = {
  filters: { [key in keyof T]?: string };
  sort?: { field?: keyof T; order?: "asc" | "desc" };
  equalityType?: { [key in keyof T]?: EqualityType };
  first?: number;
  last?: number;
  before?: string;
  after?: string;
};

export function createQueryFilters(fieldTypes, filters, equalityType): QueryFilterType<any> {
  const queryFilters = {} as any;
  Object.keys(filters).forEach((key) => {
    switch (fieldTypes[key]) {
      case "regex":
        queryFilters[key] = { $regex: new RegExp(filters[key], "i") };
        break;
      case "date":
        queryFilters[key] = { [`$${equalityType[key]}`]: filters[key] };
        break;
      case "number":
        queryFilters[key] = { [`$${equalityType[key]}`]: parseInt(filters[key]) };
        break;
      case "boolean":
        queryFilters[key] = filters[key];
        break;
      default:
        queryFilters[key] = filters[key];
        break;
    }
  });

  return queryFilters;
}
