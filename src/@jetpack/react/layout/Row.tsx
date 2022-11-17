import styled from 'styled-components';

interface IProps {
  gap?: number;
}
const Row = styled.div<IProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: ${({ gap }) => gap || 0}px;
`;

export default Row;
