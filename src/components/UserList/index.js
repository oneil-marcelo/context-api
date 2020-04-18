import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {userContext, themeContext} from '../../contexts';

import {List, User, Info, Avatar, Name, Bio, SubmitButton} from './styles';

const UserList = ({navigation}) => {
  const {users, removeUser} = useContext(userContext);
  const {theme} = useContext(themeContext);

  const getRenderContent = (id) => {
    return (
      <SubmitButton onPress={() => removeUser(id)}>
        <Icon name="delete" size={20} color="#FFF" />
      </SubmitButton>
    );
  };

  const handleNavigate = (item) => {
    navigation.navigate('user', {item});
  };
  return (
    <List
      data={users}
      keyExtractor={(user) => user.login}
      renderItem={({item}) => (
        <Swipeable renderRightActions={() => getRenderContent(item.id)}>
          <User onPress={() => handleNavigate(item)}>
            <Avatar source={{uri: item.avatar_url}} />
            <Info>
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
            </Info>
            <Icon name="navigate-next" color={theme.button} size={36} />
          </User>
        </Swipeable>
      )}
    />
  );
};

UserList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setParams: PropTypes.func,
  }).isRequired,
};

export default UserList;
