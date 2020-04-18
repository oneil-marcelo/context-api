import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  // Propriedades
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  // Métodos
  const getUsers = async () => {
    setLoading(true);
    const storage = await AsyncStorage.getItem('users');

    if (storage) setUsers(JSON.parse(storage));

    setLoading(false);
  };

  const getUserByLogin = async (login) => {
    const user = await users.find((u) => u.login === login);
    return user;
  };

  const addUser = async (login) => {
    setLoading(true);
    const hasUser = await getUserByLogin(login);

    if (hasUser) {
      setMessage('Usuário já cadastrado.');
      setLoading(false);
      return;
    }

    try {
      const {data} = await api.get(`users/${login}`);

      data.latitude = Math.random() * (37.79999 - 37.74825 + 0.01) + 37.74825;
      data.longitude =
        Math.random() * (-122.4124 - -122.4594 + 0.01) + -122.4594;

      const storage = [...users, data];

      await AsyncStorage.setItem('users', JSON.stringify(storage));

      //   if (users != null) {
      //     setUsers([...users, data]);
      //   } else {
      //     setUsers([data]);
      //   }

      setUsers(storage);
      setMessage('');
    } catch (e) {
      setMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (id) => {
    const storage = await AsyncStorage.getItem('users');

    const userArray = JSON.parse(storage);

    const filter = userArray.filter((user) => user.id !== id);

    await AsyncStorage.setItem('users', JSON.stringify(filter));

    setUsers(filter);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        users,
        message,
        getUsers,
        getUserByLogin,
        addUser,
        removeUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
