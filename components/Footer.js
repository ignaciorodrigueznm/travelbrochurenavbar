import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>

      <Text style={styles.title}>
        Belgium Travel Guide
      </Text>

      <Text style={styles.text}>
        Discover cities, culture, food and traditions.
      </Text>

      <Text style={styles.copyright}>
        School Project • 2026
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1A2B4A',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  text: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },

  copyright: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
});