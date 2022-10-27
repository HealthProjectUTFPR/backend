const verifySarcopeniaOfMan = ({
  walkingSpeed,
  handgripStrength,
  muscleMassIndex,
}) => {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (walkingSpeed > 0.8 && handgripStrength > 30) {
    hasSarcopenia = false;
  } else if (
    walkingSpeed > 0.8 &&
    handgripStrength <= 30 &&
    muscleMassIndex > 8.9
  ) {
    hasSarcopenia = false;
  } else if (walkingSpeed <= 0.8 && muscleMassIndex > 8.9) {
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
  walkingSpeed,
  handgripStrength,
  muscleMassIndex,
}) => {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (walkingSpeed > 0.8 && handgripStrength > 20) {
    hasSarcopenia = false;
  } else if (
    walkingSpeed > 0.8 &&
    handgripStrength <= 20 &&
    muscleMassIndex > 6.37
  ) {
    hasSarcopenia = false;
  } else if (walkingSpeed <= 0.8 && muscleMassIndex > 6.37) {
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
  walkingSpeed,
  handgripStrength,
  muscleMassIndex,
  sex,
}) => {
  let result;
  if (sex === 'Homem') {
    result = verifySarcopeniaOfMan({
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
      sex,
    });
  } else {
    result = verifySarcopeniaOfWoman({
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
      sex,
    });
  }

  const { title, description, type, hasSarcopenia } = result;

  return { title, description, type, hasSarcopenia };
};

export default classifyResult;
