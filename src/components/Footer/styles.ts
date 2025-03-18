import styled from 'styled-components';
import { colors } from '../../style/colors';
import { breakpoints } from '../../style/breakpoints';

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${colors.white};
  color: ${colors.ligthPurple};
  padding: 1rem;
  text-align: center;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.md}) {
    font-size: 0.8rem;
  }
`;
