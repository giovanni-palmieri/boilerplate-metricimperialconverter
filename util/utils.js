export function splitParam(param) {
  let unitIndex = 0;

  for (let i = 0; i < param.length; i++) {
    const char = param[i];

    if (isNaN(Number(char))) {
      unitIndex = i;
      break;
    }
  }

  return [
    param.substring(0, unitIndex),
    param.substring(unitIndex, param.length),
  ];
}
