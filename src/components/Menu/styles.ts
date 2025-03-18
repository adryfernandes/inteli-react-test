import styled from 'styled-components';
import { colors } from '../../style/colors';
import { breakpoints } from '../../style/breakpoints';

export const Container = styled.aside`
  grid-area: menu;
  background-image: linear-gradient(${colors.purple}, ${colors.darkPurple});
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  img {
    width: 150px;
    height: 82px;

    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.md}) {
    background-color: ${colors.ligthGray};
    background-image: none;
    padding: 0;
  }
`;

export const ItemsWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: ${breakpoints.md}) {
    color: black;
    flex-direction: row;
    width: 100%;
  }
`;
