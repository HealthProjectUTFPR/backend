const calculateIndexOfEstimatedMuscleMassPerStature = ({
  estimatedMuscleMass,
  height,
}) => {
  if (!height) return 0;

  return estimatedMuscleMass / height ** 2;
};

export default calculateIndexOfEstimatedMuscleMassPerStature;
