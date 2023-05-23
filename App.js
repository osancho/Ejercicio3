import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFetchTeams } from './src/hooks/useFetchTeams';
import { Classification } from './src/pages/Classification';

export default function App() {
  const { teams, loading, error } = useFetchTeams()
  console.log(teams)
  return (
    <View style={styles.container}>
      <Classification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
