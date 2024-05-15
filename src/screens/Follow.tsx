import { StyleSheet, Text, View } from 'react-native';

export default function Follow() {
  return (
    <View style={styles.container}>
        <Text>FOLLOW SCREEN</Text>
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
