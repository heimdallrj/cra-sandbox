import styled from 'styled-components';

interface IProps {
  gap?: number;
}
const Col = styled.div<IProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${({ gap }) => gap || 0}px;
`;

export default Col;
