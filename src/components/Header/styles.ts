import { breakpoints } from '../../style/breakpoints';
import { colors } from './../../style/colors';
import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  background-color: ${colors.white};
  height: 128px;
  border-bottom: 1px solid ${colors.ligthPurple};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  h1 {
    color: ${colors.darkPurple};
  }

  @media (max-width: ${breakpoints.md}) {
    height: 48px;

    img {
      width: 50px;
    }
  }
`;

export const Name = styled.h3`
  font-weight: 300;
  opacity: 0.5;

  @media (max-width: ${breakpoints.md}) {
    font-weight: 500;
    font-size: 0.8rem;
    opacity: 0.5;
    align-self: flex-start;
  }
`;
