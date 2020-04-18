import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: ${(props) => props.theme.current.background};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: rgba(106, 106, 106, 0.35);
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
  padding: 10px 5px;
  background: rgba(106, 106, 106, 0.1);
`;

export const OwnerAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.current.tabTextActive};
`;

export const Author = styled.Text`
  margin-top: 2px;
  font-size: 13px;
  color: #666;
`;
