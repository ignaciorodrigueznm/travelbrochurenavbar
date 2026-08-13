import React, { useState } from 'react';
import {  
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

const NAV_ITEMS = [
  'Overview',
  'Cities',
  'Food',
  'Culture',
  'Tips',
];

export default function Nav({
  onNavigate,
}) {
  const [active, setActive] =
    useState('Overview');

  const handlePress = (item) => {
    setActive(item);

    if (onNavigate) {
      onNavigate(item);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.logo}>
          BELGIUM
        </Text>

        <Text style={styles.subtitle}>
          Travel Guide
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.navContent
        }
      >
        {NAV_ITEMS.map((item) => (
          <Pressable
            key={item}
            onPress={() =>
              handlePress(item)
            }
            style={[
              styles.navButton,

              active === item &&
                styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.navText,

                active === item &&
                  styles.activeText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A2B4A',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#FFCD00',
  },

  topBar: {
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#FFCD00',
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 2,
  },

  navContent: {
    paddingHorizontal: 12,
    gap: 8,
  },

  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor:
      'rgba(255,255,255,0.08)',
  },

  activeButton: {
    backgroundColor: '#FFCD00',
  },

  navText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },

  activeText: {
    color: '#1A2B4A',
    fontWeight: '700',
  },
});