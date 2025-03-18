import { PropsWithChildren } from 'react';
import { Container } from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { TitlePage } from '../TitlePage';
import { usePageActive } from '../../hooks/usePageActive';

export function Content({ children }: PropsWithChildren) {
  const isMobile = useIsMobile();
  const { pageActive } = usePageActive();

  return (
    <Container>
      <TitlePage hidden={!isMobile}>Exercício {pageActive}</TitlePage>
      {children}
    </Container>
  );
}
