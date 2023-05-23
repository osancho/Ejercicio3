import React, {useContext} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useFetchTeams } from '../hooks/useFetchTeams';
import { TeamListItem } from '../components/TeamListItem';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { ThemeContext } from '../context/ThemeContext';

export const Classification = () => {
  const { teams, loading, error } = useFetchTeams();

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <DarkModeSwitch />
      {loading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {error ? (
        <Text>Ups, algo fue mal</Text>
      ) : (
        <>
          {teams.map((team, index) => (
            <TeamListItem key={index} team={team} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
