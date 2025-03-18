import { useContext } from 'react';
import { PageActiveContext } from '../contexts/pageActiveContext';

export function usePageActive() {
  return useContext(PageActiveContext);
}
