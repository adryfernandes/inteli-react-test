import { PropsWithChildren } from 'react';
import { Container } from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { TitlePage } from '../TitlePage';

export function Content({ children }: PropsWithChildren) {
  const isMobile = useIsMobile();

  return (
    <Container>
      <TitlePage hidden={!isMobile}>Exercício 1</TitlePage>
      {children}
    </Container>
  );
}
