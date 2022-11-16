import styled from 'styled-components';

type RowProps = {
  gap?: number;
};
const Row = styled.div<RowProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: ${({ gap }) => gap || 0}px;
`;

export default Row;
