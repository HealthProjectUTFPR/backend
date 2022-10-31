import {
  ISarcopenia,
  ISarcopeniaResult,
} from '../../interfaces/sarcopenia.interface';

const verifySarcopeniaOfMan = ({
  usualWalkingSpeed,
  handGripStrength,
  muscleMassIndex,
}: Partial<ISarcopenia>) => {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (usualWalkingSpeed > 0.8 && handGripStrength > 30) {
    hasSarcopenia = false;
  } else if (
    usualWalkingSpeed > 0.8 &&
    handGripStrength <= 30 &&
    muscleMassIndex > 8.9
  ) {
    hasSarcopenia = false;
  } else if (usualWalkingSpeed <= 0.8 && muscleMassIndex > 8.9) {
    hasSarcopenia = false;
  } else {
    hasSarcopenia = true;

    title = 'Com sarcopenia';
    type = 'error';
    description =
      'De acordo com os dados informados, o paciente possui Sarcopenia.';
  }

  return { title, description, type, hasSarcopenia };
};

const verifySarcopeniaOfWoman = ({
  usualWalkingSpeed,
  handGripStrength,
  muscleMassIndex,
}: Partial<ISarcopenia>) => {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (usualWalkingSpeed > 0.8 && handGripStrength > 20) {
    hasSarcopenia = false;
  } else if (
    usualWalkingSpeed > 0.8 &&
    handGripStrength <= 20 &&
    muscleMassIndex > 6.37
  ) {
    hasSarcopenia = false;
  } else if (usualWalkingSpeed <= 0.8 && muscleMassIndex > 6.37) {
    hasSarcopenia = false;
  } else {
    hasSarcopenia = true;

    title = 'Com sarcopenia';
    type = 'error';
    description =
      'De acordo com os dados informados, o paciente possui Sarcopenia.';
  }

  return { title, description, type, hasSarcopenia };
};

const classifyResult = ({
  usualWalkingSpeed,
  handGripStrength,
  muscleMassIndex,
  sex,
}: Partial<ISarcopenia>): boolean => {
  let result;
  if (sex === 'Homem') {
    result = verifySarcopeniaOfMan({
      usualWalkingSpeed,
      handGripStrength,
      muscleMassIndex,
    });
  } else {
    result = verifySarcopeniaOfWoman({
      usualWalkingSpeed,
      handGripStrength,
      muscleMassIndex,
    });
  }

  const { hasSarcopenia } = result;

  return hasSarcopenia;
};

export default classifyResult;
