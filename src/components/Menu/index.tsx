import { Container, ItemsWrapper } from './styles';
import logo from '../../assets/logo-branca.png';
import useIsMobile from '../../hooks/useIsMobile';
import { useMemo } from 'react';
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
  console.log(pageActive);

  const menuItems = useMemo(() => {
    const exerciceQuantity = generateArray();

    const goToPage = (navigate: NavigateFunction, exerciceNumber: number) => {
      setPageActive(exerciceNumber);
      goToExec(navigate, exerciceNumber);
    };

    return exerciceQuantity.map((exerciceNumber) => (
      <ButtonMenu
        key={exerciceNumber}
        onClick={() => goToPage(navigate, exerciceNumber)}
        active={pageActive === exerciceNumber}
      >
        Exercício {padNumber(exerciceNumber)}
      </ButtonMenu>
    ));
  }, [navigate, pageActive, setPageActive]);

  const Image = () => {
    return !isMobile && <img src={logo} alt="Logo" />;
  };

  return (
    <Container>
      <Image />
      <ItemsWrapper>{menuItems}</ItemsWrapper>
    </Container>
  );
}
