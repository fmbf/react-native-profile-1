import { BlurView } from 'expo-blur';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

const user1 = {
  id: 1,
  name: 'Tomas Xi Hue',
  skill: 'Photography',
  rate: 80,
  avatar: require('./assets/profile_pictures/user1.jpeg'),
  bg: require('./assets/hero_pictures/user1.jpeg'),
}

const user2 = {
  id: 2,
  name: 'Juana Smith',
  skill: 'Painting',
  rate: 220,
  avatar: require('./assets/profile_pictures/user2.jpeg'),
  bg: require('./assets/hero_pictures/user2.jpeg'),
}

const user3 = {
  id: 3,
  name: 'Jon Creûxe',
  skill: 'Interior Design',
  rate: 140,
  avatar: require('./assets/profile_pictures/user3.jpeg'),
  bg: require('./assets/hero_pictures/user3.jpeg'),
}

const users = [user1, user2, user3];

function Profile(props) {
  const [count, setCount] = useState(0);
  const activeUser = users[count % 3];

  return (
    <SafeAreaView>
      <Image style={styles.backgroundImage} source={activeUser.bg} resizeMode="cover" />

      <ScrollView style={{ height: '100%' }}>

        <Image style={styles.profileImage} source={activeUser.avatar} resizeMode="cover" />

        <View style={[styles.blurContainer]}>
          <BlurView tint="default" intensity={95} style={styles.blurredContent}>
            <View>

              <Text style={styles.headerText}>{activeUser.name}</Text>
              <Text style={styles.textTest}>{activeUser.skill}</Text>

              <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginVertical: 16, opacity: 0.5 }} />

              <View style={styles.buttonRowContainer}>
                <TouchableOpacity style={[styles.buttonContainer, styles.buttonContainerInverse]}>
                  <Text style={styles.buttonTextInverse}>portfolio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>follow</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => setCount(count + 1)}>
                  <Text style={styles.buttonText}>→</Text>
                </TouchableOpacity>
              </View>

            </View>

          </BlurView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({

  backgroundImage: {
    opacity: 0.8,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    // transform: [{ scaleX: -1 }],
  },

  profileImage: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: Math.floor(Dimensions.get('window').height / 2.5) - 30,
    right: 0,
    bottom: 0,
    left: Math.floor(Dimensions.get('window').width - 122),
    zIndex: 1,
    borderRadius: 80,
  },

  blurContainer: {
    overflow: 'hidden',
    marginTop: Math.floor(Dimensions.get('window').height / 2.5),
    marginLeft: Math.floor(Dimensions.get('window').width / 4.5),
    marginRight: -1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  blurredContent: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  headerText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16,
    marginBottom: 8,
    width: '60%',
    fontSize: 32,
  },

  textTest: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    fontSize: 12,
  },

  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonContainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  buttonContainerInverse: {
    backgroundColor: 'white',
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  buttonTextInverse: {
    fontWeight: 'bold',
    color: '#061708',
  },
});
