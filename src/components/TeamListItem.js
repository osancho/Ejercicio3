import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const TeamListItem = ({ team }) => {
//   const navigation = useNavigation();

  const handleOnClick = () => {
    // navigation.navigate('Team', { team });
  };

  return (
    <TouchableOpacity onPress={handleOnClick} style={styles.teamCard}>
      <Image source={{ uri: team.team_badge }} style={styles.teamImage} />
      <Text style={styles.teamName}>{team.team_name}</Text>
      {team.coaches.length > 0 && (
        <Text style={styles.coachName}>{team.coaches[0].coach_name}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  teamCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    cursor: 'pointer',
    width: 250,
  },
  teamImage: {
    width: 100,
    height: 100,
  },
  teamName: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  coachName: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
  },
});
