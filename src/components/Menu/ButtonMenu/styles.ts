import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { breakpoints } from '../../../style/breakpoints';

export const Button = styled.button<{ active: boolean }>`
  padding: 0.8rem 0.3rem;
  text-align: left;
  color: ${({ active }) => (active ? colors.rose : 'white')};
  border-bottom: ${({ active }) =>
    active ? `1px solid ${colors.rose}` : 'none'};

  &:hover {
    cursor: pointer;
    color: ${colors.rose};
    border-bottom: 1px solid ${colors.rose};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0.8rem 1rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: 500;
    color: ${({ active }) => (active ? colors.rose : '#000')};
    border-bottom: ${({ active }) =>
      active ? `2px solid ${colors.rose}` : 'none'};
    opacity: ${({ active }) => (active ? 1 : 0.7)};

    &:hover {
      border-bottom: 2px solid ${colors.rose};
    }
  }
`;
