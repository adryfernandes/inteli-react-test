import { PropsWithChildren, useState } from 'react';
import { PageActive } from '../interfaces/contextInterface';
import { PageActiveContext } from '../contexts/PageActiveContext';

export function PageActiveProvider({ children }: PropsWithChildren) {
  const [pageActive, setPageActive] = useState<number>(1);

  const providerValue: PageActive = {
    pageActive,
    setPageActive,
  };

  return (
    <PageActiveContext.Provider value={providerValue}>
      {children}
    </PageActiveContext.Provider>
  );
}
