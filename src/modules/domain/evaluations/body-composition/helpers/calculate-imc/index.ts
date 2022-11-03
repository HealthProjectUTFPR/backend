export const calculateImc = ({
  weight,
  height,
}: {
  weight: number;
  height: number;
}): number => weight / (height / 100) ** 2;
