import React, {useContext} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import {themeContext, userContext} from '../../contexts';

import {Avatar} from './styles';

MapboxGL.setAccessToken('insira seu token');

const Map = () => {
  const {users} = useContext(userContext);
  const {theme} = useContext(themeContext);
  return (
    <MapboxGL.MapView style={{flex: 1}} styleURL={theme.map}>
      <MapboxGL.Camera
        centerCoordinate={[-122.4324, 37.78825]}
        zoomLevel={12}
      />
      {users.map((user) => (
        <MapboxGL.PointAnnotation
          key={user.login}
          id={user.login}
          coordinate={[user.longitude, user.latitude]}>
          <Avatar source={{uri: user.avatar_url}} />
        </MapboxGL.PointAnnotation>
      ))}
    </MapboxGL.MapView>
  );
};

export default Map;
