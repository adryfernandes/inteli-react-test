import { PropsWithChildren } from 'react';
import { Title } from './styles';

interface ComponentProps extends PropsWithChildren {
  hidden?: boolean;
}

export function TitlePage({ hidden = false, children }: ComponentProps) {
  return !hidden && <Title>{children}</Title>;
}
