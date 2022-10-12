<<<<<<< HEAD
interface IFieldSarcopenia {
  value: number | string | boolean | Date;
}

export interface ISarcopenia {
  name: string;

  result: boolean;

  fields: IFieldSarcopenia[];
=======
import { Evaluation } from '../../base/entities/evaluation.entity';

export class Sarcopenia extends Evaluation {
  constructor() {
    super();
  }
>>>>>>> 98469a6f2041d79fe842b49cb9ab3d6e650c23ea
}
