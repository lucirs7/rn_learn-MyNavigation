import { StyleSheet, Text, View } from 'react-native';

interface FollowParams {
    followRequest_: String[];
    follow_: String[];
    followFunction: () => {};
};

export default function Follow<FollowParams> ({
    followRequest_,
    follow_,
    followFunction,
}) {
  
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
