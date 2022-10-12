interface IFieldSarcopenia {
  value: number | string | boolean | Date;
}

export interface ISarcopenia {
  name: string;

  result: boolean;

  fields: IFieldSarcopenia[];
}
