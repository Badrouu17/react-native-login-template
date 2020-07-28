import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

import { useDispatch } from 'react-redux';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  // redux store
  const dispatch = useDispatch();

  const _onLogoutPressed = () => {
    // dispatch to the redux global store
    dispatch({ type: 'LOGOUT' });
    // navigate to Dashboard
    navigation.navigate('HomeScreen');
  };

  return (
    <Background>
      <Header>logged successfully</Header>
      <Paragraph>app starts here.</Paragraph>
      <Button mode="outlined" onPress={_onLogoutPressed}>
        Logout
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
