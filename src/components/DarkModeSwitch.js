import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.darkmodecontainer}>
      <TouchableOpacity onPress={toggleTheme} style={[styles.darkmode, { backgroundColor: isDarkMode ? '#1c1c1c' : '#f5f5f5' }]}>
        <Text style={styles.icon}>{isDarkMode ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  darkmodecontainer: {
    justifyContent: 'center',
    padding: 20,
  },
  darkmode: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
});
