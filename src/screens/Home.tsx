import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
  const [followRequest, setFollowRequest] = useState<Array<string>>(
    ['John', 'Jane', 'Ram', 'Janice']);
  const [following, setFollowing] = useState('Hitesh');

  const follow = () => {
    const followNew = followRequest.splice(index, 1);
  };

  return (
    <View style={styles.container}>
        <Text>MyNavigation!</Text>
        <Button
          title='Go to follow'
          onPress={() => navigation.navigate("Follow")}
        />
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
