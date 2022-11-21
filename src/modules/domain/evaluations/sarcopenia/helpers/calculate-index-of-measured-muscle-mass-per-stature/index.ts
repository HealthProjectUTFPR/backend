import { ISarcopenia } from '../../interfaces/sarcopenia.interface';

const calculateIndexOfMeasuredMuscleMassPerStature = ({
  measuredMuscleMass,
  height,
}: Partial<ISarcopenia>) => {
  if (!height) return 0;
  const heightInMeters = height/100;
    
  return measuredMuscleMass / (heightInMeters ** 2);
};

export default calculateIndexOfMeasuredMuscleMassPerStature;
