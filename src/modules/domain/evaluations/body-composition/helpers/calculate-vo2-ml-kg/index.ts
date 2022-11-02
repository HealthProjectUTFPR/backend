import { IBodyComposition } from '../../inte../../interface/body-composition.interface';

export const calculateVO2MlKg = ({
  weight,
  vo2Lmin,
}: Partial<IBodyComposition>) => {
  if (!weight) {
    return 0;
  }

  const result = (vo2Lmin * 1000) / weight;

  return +result;
};
