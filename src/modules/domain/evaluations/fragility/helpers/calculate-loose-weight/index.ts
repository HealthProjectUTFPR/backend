interface ICalculateLooseWeight {
  looseWeight: number;
}

const calculateLooseWeight = ({ looseWeight }: ICalculateLooseWeight) => {
  console.log('LOOSE WEIGHT', looseWeight);
  return looseWeight >= 4.5 ? 1 : 0;
};

export default calculateLooseWeight;
