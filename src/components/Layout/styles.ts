import styled from 'styled-components';
import { breakpoints } from '../../style/breakpoints';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'menu header'
    'menu content'
    'menu footer';
  height: 100vh;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      'header'
      'menu'
      'content'
      'footer';
  }
`;
