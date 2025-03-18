import useIsMobile from '../../hooks/useIsMobile';
import { Container, Name } from './styles';
import { TitlePage } from '../TitlePage';
import logo from '../../assets/logo-preta.png';
import { usePageActive } from '../../hooks/usePageActive';
import { useMemo } from 'react';

export function Header() {
  const isMobile = useIsMobile();
  const { pageActive } = usePageActive();

  const TitleContent = useMemo(() => {
    if (isMobile) {
      return <img src={logo} alt="Logo" />;
    }

    return <TitlePage>Exercício {pageActive}</TitlePage>;
  }, [isMobile, pageActive]);

  return (
    <Container>
      <h1>{TitleContent}</h1>
      <Name>Adryane Fernandes</Name>
    </Container>
  );
}
