import styled from 'styled-components/native';

export const Container = styled.View`
  /* display: flex; */
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  background: ${(props) => props.theme.current.background};
`;

export const MenuList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  padding: 0 10px;
`;

export const MenuItem = styled.View`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.current.text};
`;
