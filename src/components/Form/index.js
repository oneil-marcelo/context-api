import React, {useState, useEffect, useContext} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {userContext, themeContext} from '../../contexts';

import {Container, Input, SubmitButton} from './styles';

const Form = () => {
  const [newUser, setNewUser] = useState('');
  const {loading, message, users, addUser} = useContext(userContext);
  const {theme} = useContext(themeContext);

  useEffect(() => {
    setNewUser('');
  }, [users]);

  return (
    <>
      <Container>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={(text) => setNewUser(text)}
          onSubmitEditing={() => addUser(newUser)}
        />
        <SubmitButton onPress={() => addUser(newUser)}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Container>
      <Text style={{color: theme.text, marginTop: 15}}>{message}</Text>
    </>
  );
};

export default Form;
