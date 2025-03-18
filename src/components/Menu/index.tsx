import { Container, ItemsWrapper } from './styles';
import logo from '../../assets/logo-branca.png';
import useIsMobile from '../../hooks/useIsMobile';
import { useCallback, useMemo } from 'react';
import { goToExec } from '../../router/coordinators';
import { NavigateFunction } from 'react-router-dom';
import { ButtonMenu } from './ButtonMenu';
import { generateArray, padNumber } from '../../utils';
import { usePageActive } from '../../hooks/usePageActive';

interface ComponentProps {
  navigate: NavigateFunction;
}

export function Menu({ navigate }: ComponentProps) {
  const isMobile = useIsMobile();
  const { pageActive, setPageActive } = usePageActive();

  const goToPage = useCallback(
    (exerciceNumber: number) => {
      setPageActive(exerciceNumber);
      goToExec(navigate, exerciceNumber);
    },
    [navigate, setPageActive],
  );

  const menuItems = useMemo(() => {
    const exerciceQuantity = generateArray();

    return exerciceQuantity.map((exerciceNumber) => (
      <ButtonMenu
        key={exerciceNumber}
        onClick={() => goToPage(exerciceNumber)}
        active={pageActive === exerciceNumber}
      >
        Exercício {padNumber(exerciceNumber)}
      </ButtonMenu>
    ));
  }, [goToPage, pageActive]);

  return (
    <Container>
      {!isMobile && <img src={logo} alt="Logo" />}
      <ItemsWrapper>{menuItems}</ItemsWrapper>
    </Container>
  );
}
