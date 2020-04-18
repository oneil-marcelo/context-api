import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
  background: ${(props) => props.theme.current.background};
`;
