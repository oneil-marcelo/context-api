import styled from 'styled-components/native';

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${(props) => props.theme.current.button};
`;
