import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
  const [followRequest, setFollowRequest] = useState<Array<string>>(
    ['John', 'Jane', 'Ram', 'Janice']);
  const [following, setFollowing] = useState<Array<string>>(
    ['Hitesh']);

  const follow = (index: number) => {
    const followNew = followRequest.splice(index, 1);
    following.push(...followNew);

    //setFollowing(following);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>You are following {following.length} friend</Text>
        <Button
          title='Go to follow'
          onPress={() => navigation.navigate("Follow", {
            followRequest_: followRequest,
            follow_: following,
            followFunction: follow
          })}
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
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
