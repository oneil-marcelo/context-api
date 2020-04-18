import React, {useState, useEffect, useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';
import {themeContext} from '../../contexts';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  List,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

const User = ({navigation}) => {
  const user = navigation.getParam('item');
  const [stars, setStar] = useState([]);
  const [loading, setLoading] = useState([]);

  const {theme} = useContext(themeContext);

  const handleStars = async () => {
    setLoading(true);
    const {data} = await api.get(`users/${user.login}/starred`);
    setStar(data);
    setLoading(false);
  };

  useEffect(() => {
    handleStars();
  }, []);

  useEffect(() => {
    navigation.setParams({
      title: navigation.getParam('item').name,
      headerTintColor: theme.navText,
      backgroundColor: theme.nav,
    });
  }, [theme]);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar_url}} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      {loading ? (
        <ActivityIndicator color={theme.button} />
      ) : (
        <List
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({item}) => (
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      )}
    </Container>
  );
};

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }).isRequired,
};

// User.navigationOptions = (screenProps) => ({
//   title: screenProps.navigation.getParam('item').name,
//   headerBackTitleVisible: false,
// });

export default User;
