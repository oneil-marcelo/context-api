import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';

import {userContext, themeContext} from '../../contexts';
import Form from '../../components/Form';
import UserList from '../../components/UserList';

import {Container} from './styles';

const Main = ({navigation}) => {
  const {getUsers} = useContext(userContext);
  const {theme} = useContext(themeContext);

  useEffect(() => {
    navigation.setParams({
      title: 'MAC one',
      headerTintColor: theme.navText,
      backgroundColor: theme.nav,
    });
  }, [theme]);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container>
      <Form />
      <UserList navigation={navigation} />
    </Container>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func,
  }).isRequired,
};

export default Main;
