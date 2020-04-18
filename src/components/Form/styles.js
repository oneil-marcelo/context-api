import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: rgba(206, 206, 206, 0.35);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  color: ${(props) => props.theme.current.text};
  background: rgba(206, 206, 206, 0.35);
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid rgba(206, 206, 206, 0.35);
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  background: ${(props) => props.theme.current.button};
`;
