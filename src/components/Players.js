import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PlayerImage } from './PlayerImage';

export const Players = ({ players, isDarkMode }) => {
  const playersShort = players.sort((a, b) => a.player_age - b.player_age);
  return (
    <View style={[styles.container, { color: isDarkMode ? 'white' : 'black' }]}>
      <Text style={styles.title}>Jugadores</Text>
      <FlatList
        data={playersShort}
        renderItem={({ item: player, index }) => (
          <View style={styles.team}>
            <PlayerImage player={player} />
            <Text style={[styles.playerName, { color: isDarkMode ? 'white' : 'black' }]}>{player.player_name}</Text>
            <Text style={[styles.playerAge, { color: isDarkMode ? 'white' : 'black' }]}>{player.player_age} años</Text>
            <Text style={[styles.playerType, { color: isDarkMode ? 'white' : 'black' }]}>{player.player_type}</Text>
            <Text style={[styles.playerMatchs, { color: isDarkMode ? 'white' : 'black' }]}>{player.player_match_played} partidos jugados</Text>
          </View>
        )}
        keyExtractor={player => player.player_id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  team: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#333',
    width: 250,
    margin: 10,
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  playerName: {
    flex: 1,
    textAlign: 'center',
  },
  playerAge: {
    flex: 1,
    textAlign: 'center',
  },
  playerType: {
    flex: 1,
    textAlign: 'center',
  },
  playerMatchs: {
    flex: 1,
    textAlign: 'center',
  },
});
