import React, { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  const listRef = useRef(null);

  const [sections, setSections] = useState({});

  const handleSectionLayout = (sectionName, y) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: y,
    }));
  };

  const scrollToSection = (sectionName) => {
    const position = sections[sectionName];

    if (position !== undefined && listRef.current) {
      listRef.current.scrollToOffset({
        offset: position,
        animated: true,
      });
    }
  };

  const data = [
    { id: 'hero' },
    { id: 'main' },
    { id: 'footer' },
  ];

  const renderItem = ({ item }) => {
    switch (item.id) {
      case 'hero':
        return <Hero />;

      case 'main':
        return (
          <Main
            onSectionLayout={handleSectionLayout}
          />
        );

      case 'footer':
        return <Footer />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1A2B4A"
      />

      <Nav onNavigate={scrollToSection} />

      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        style={styles.container}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EE',
  },

  content: {
    paddingBottom: 40,
  },
});