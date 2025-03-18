import { createContext } from 'react';
import { PageActive } from '../interfaces/contextInterface';

export const PageActiveContext = createContext<PageActive>({
  pageActive: 1,
  setPageActive: () => {},
});
