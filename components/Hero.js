
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default function Hero() {
  return (
    <ImageBackground
      source={require('../assets/hero.jfif')}
      style={styles.hero}
      imageStyle={styles.heroImage}
    >
      <View style={styles.overlay}>

        <Text style={styles.country}>
          BELGIUM
        </Text>

        <Text style={styles.subtitle}>
          The Heart of Europe
        </Text>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 280,
    justifyContent: 'flex-end',
  },

  heroImage: {
    resizeMode: 'cover',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  country: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 6,
    opacity: 0.95,
  },
});