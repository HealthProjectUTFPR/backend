interface IWalkingTest {
  time: number;
  stature: number;
  sex: string;
}

const calculateWalkingTest = ({ time, stature, sex }: IWalkingTest) => {
  let result = 0;

  if (sex === 'M') {
    if (time > 7 && stature <= 1.73) {
      result = 1;
    }

    if (time > 6 && stature > 1.73) {
      result = 1;
    }
  }

  return result;
};

export default calculateWalkingTest;
