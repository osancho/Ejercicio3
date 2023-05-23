import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Players } from './Players';

export const TeamDetails = () => {
  const route = useRoute();
  const { team } = route.params;

  return (
    <View style={styles.teaminfo}>
      <Text style={styles.teamName}>{team.team_name}</Text>
      <Image source={{ uri: team.team_badge }} style={styles.teamBadge} />
      <Players players={team.players} />
    </View>
  );
};

const styles = StyleSheet.create({
  teaminfo: {
    flex: 1,
    padding: 50,
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
