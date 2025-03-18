import { NavigateFunction } from 'react-router-dom';

export const goToExec = (
  navigate: NavigateFunction,
  numberExec: number = 1,
): void => {
  navigate(`/exe${numberExec}`);
};
