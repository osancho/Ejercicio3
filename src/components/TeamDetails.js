import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Players } from './Players';
import { ThemeContext } from '../context/ThemeContext';
import { DarkModeSwitch } from './DarkModeSwitch';

export const TeamDetails = () => {
  const route = useRoute();
  const { team } = route.params;

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.teaminfo, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <DarkModeSwitch />
      <Text style={styles.teamName}>{team.team_name}</Text>
      <Image source={{ uri: team.team_badge }} style={styles.teamBadge} />
      <Players players={team.players} isDarkMode={isDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  teaminfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 24,
    textAlign: 'center',
  },
  teamBadge: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
