import { PropsWithChildren } from 'react';
import { Button } from './styles';

interface ComponentProps extends PropsWithChildren {
  onClick: () => void;
  active: boolean;
}

export function ButtonMenu({ children, onClick, active }: ComponentProps) {
  return (
    <Button onClick={onClick} active={active}>
      {children}
    </Button>
  );
}
