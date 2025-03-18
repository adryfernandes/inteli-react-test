import styled from 'styled-components';
import { colors } from '../../style/colors';

export const Container = styled.main`
  grid-area: content;
  padding: 2rem;
  background-color: ${colors.ligthGray};
  overflow-y: auto;
`;
