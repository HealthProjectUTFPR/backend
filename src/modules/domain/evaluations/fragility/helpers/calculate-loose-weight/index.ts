interface ICalculateLooseWeight {
  weight: number;
}

const calculateLooseWeight = ({ weight }: ICalculateLooseWeight) => {
  return weight >= 4.5 ? 1 : 0;
};

export default calculateLooseWeight;
