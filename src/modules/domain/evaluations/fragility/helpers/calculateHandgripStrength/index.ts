interface ICalculateHandgripStrength {
  handgripStrength: number;
  imc: number;
  sex: string;
}

const calculateHandgripStrength = ({
  handgripStrength,
  imc,
  sex,
}: ICalculateHandgripStrength) => {
  let result = 0;

  if (sex === 'Homem') {
    if (handgripStrength <= 29 && imc <= 24) {
      result = 1;
    } else if (handgripStrength <= 30) {
      if (imc >= 24.1 && imc <= 26) {
        result = 1;
      } else if (imc >= 26.1 && imc <= 28) {
        result = 1;
      }
    } else if (handgripStrength <= 32 && imc >= 29) {
      result = 1;
    }
  } else if (sex === 'Mulher') {
    if (handgripStrength <= 17 && imc <= 23) {
      result = 1;
    } else if (handgripStrength <= 17.3) {
      if (imc >= 25.1 && imc <= 26) {
        result = 1;
      }
    }
    if (handgripStrength <= 18) {
      if (imc >= 26.1 && imc <= 29) {
        result = 1;
      }
    } else if (handgripStrength <= 21 && imc >= 29) {
      result = 1;
    }
  }

  return result;
};

export default calculateHandgripStrength;
