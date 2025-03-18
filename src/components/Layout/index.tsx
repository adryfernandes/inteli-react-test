import { PropsWithChildren } from 'react';
import { Grid } from './styles';

export function Layout({ children }: PropsWithChildren) {
  return <Grid>{children}</Grid>;
}
