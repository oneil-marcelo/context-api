import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  background: #ff0000;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom-color: rgba(106, 106, 106, 0.35);
  border-bottom-width: 1px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Info = styled.View`
  padding-left: 10px;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: left;
`;
