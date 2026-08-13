import { useState } from 'react';

import {
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Main({
  onSectionLayout,
}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    image: null,
    url: '',
  });

  const openModal = ({
    title,
    description,
    image = null,
    url = '',
  }) => {
    setModalData({
      title,
      description,
      image,
      url,
    });

    setModalVisible(true);
  };

  const registerSection =
    (sectionName) => (event) => {
      const { y } = event.nativeEvent.layout;

      if (onSectionLayout) {
        onSectionLayout(sectionName, y);
      }
    };

  // Función helper para saber si un elemento debe mostrarse según la búsqueda
  const shouldShow = (title = '', description = '') => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      title.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query)
    );
  };

  return (
    <View style={styles.container}>

      {/* BARRA DE BÚSQUEDA */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* OVERVIEW */}

      <View
        style={styles.section}
        onLayout={registerSection('Overview')}
      >
        <Text style={styles.sectionTitle}>
          Overview
        </Text>

        <View style={styles.cardRow}>

          {shouldShow('Location', 'Belgium is located in Western Europe between France, Germany, Luxembourg and the Netherlands.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Location',
                  description:
                    'Belgium is located in Western Europe between France, Germany, Luxembourg and the Netherlands.',
                  url: 'https://www.google.com/maps/place/Belgium',
                })
              }
            >
              <Text style={styles.cardIcon}>📍</Text>
              <Text style={styles.cardTitle}>
                Location
              </Text>
            </Pressable>
          )}

          {shouldShow('Capital', 'The capital of Belgium is Brussels, which also serves as the de facto capital of the European Union and the headquarters of NATO') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Capital',
                  description:
                    'The capital of Belgium is Brussels, which also serves as the de facto capital of the European Union and the headquarters of NATO',
                  url: 'https://www.google.com/maps/place/Brussels',
                })
              }
            >
              <Text style={styles.cardIcon}>🏛</Text>
              <Text style={styles.cardTitle}>
                Capital
              </Text>
            </Pressable>
          )}

          {shouldShow('Population', 'You can see the actual population on the next website.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Population',
                  description:
                    'You can see the actual population on the next website.',
                  url: 'https://www.worldometers.info/world-population/belgium-population/',
                })
              }
            >
              <Text style={styles.cardIcon}>👥</Text>
              <Text style={styles.cardTitle}>
                Population
              </Text>
            </Pressable>
          )}

        </View>
      </View>

      {/* CITIES */}

      <View
        style={styles.section}
        onLayout={registerSection('Cities')}
      >
        <Text style={styles.sectionTitle}>
          Cities
        </Text>

        <View style={styles.grid}>

          {shouldShow('Brussels', 'Capital of Belgium and headquarters of the European Union.') && (
            <Pressable
              style={styles.cityCard}
              onPress={() =>
                openModal({
                  title: 'Brussels',
                  description:
                    'Capital of Belgium and headquarters of the European Union.',
                  url: 'https://www.google.com/maps/place/Brussels',
                })
              }
            >
              <Image
                source={require('../assets/brussels.webp')}
                style={styles.cityImage}
              />
              <Text style={styles.cityName}>
                Brussels
              </Text>
            </Pressable>
          )}

          {shouldShow('Bruges', 'A beautiful medieval city famous for its canals, cobblestone streets and historic architecture.') && (
            <Pressable
              style={styles.cityCard}
              onPress={() =>
                openModal({
                  title: 'Bruges',
                  description:
                    'A beautiful medieval city famous for its canals, cobblestone streets and historic architecture.',
                  url: 'https://www.google.com/maps/place/Bruges',
                })
              }
            >
              <Image
                source={require('../assets/bruges.jfif')}
                style={styles.cityImage}
              />
              <Text style={styles.cityName}>
                Bruges
              </Text>
            </Pressable>
          )}

          {shouldShow('Ghent', 'A vibrant university city known for its castle, culture and nightlife.') && (
            <Pressable
              style={styles.cityCard}
              onPress={() =>
                openModal({
                  title: 'Ghent',
                  description:
                    'A vibrant university city known for its castle, culture and nightlife.',
                  url: 'https://www.google.com/maps/place/Ghent',
                })
              }
            >
              <Image
                source={require('../assets/ghent.webp')}
                style={styles.cityImage}
              />
              <Text style={styles.cityName}>
                Ghent
              </Text>
            </Pressable>
          )}

          {shouldShow('Antwerp', 'Belgium’s largest port city and one of the world’s most important diamond trading centers.') && (
            <Pressable
              style={styles.cityCard}
              onPress={() =>
                openModal({
                  title: 'Antwerp',
                  description:
                    'Belgium’s largest port city and one of the world’s most important diamond trading centers.',
                  url: 'https://www.google.com/maps/place/Antwerp',
                })
              }
            >
              <Image
                source={require('../assets/antwerp.jfif')}
                style={styles.cityImage}
              />
              <Text style={styles.cityName}>
                Antwerp
              </Text>
            </Pressable>
          )}

        </View>
      </View>

      {/* FOOD */}

      <View
        style={styles.section}
        onLayout={registerSection('Food')}
      >
        <Text style={styles.sectionTitle}>
          Food
        </Text>

        <View style={styles.cardRow}>

          {shouldShow('Fries', 'Belgian fries (frites) are twice-fried for a crispy outside and soft inside, traditionally served in a paper cone with mayonnaise or other sauces.') && (
            <Pressable
              style={styles.foodCard}
              onPress={() =>
                openModal({
                  title: 'Fries',
                  description:
                    'Belgian fries (frites) are twice-fried for a crispy outside and soft inside, traditionally served in a paper cone with mayonnaise or other sauces.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yx3NQzQAXByFtzin582hOBEZvG1T9niyHq2-M-T7zw&s=10',
                })
              }
            >
              <Text style={styles.foodEmoji}>
                🍟
              </Text>

              <Text style={styles.cardTitle}>
                Fries
              </Text>
            </Pressable>
          )}

          {shouldShow('Waffles', 'Belgium is famous for two waffle styles: the light, crispy Brussels waffle and the denser, sweeter Liège waffle with pearl sugar.') && (
            <Pressable
              style={styles.foodCard}
              onPress={() =>
                openModal({
                  title: 'Waffles',
                  description:
                    'Belgium is famous for two waffle styles: the light, crispy Brussels waffle and the denser, sweeter Liège waffle with pearl sugar.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_b3jXFF4u3Dcf3jp6zTz6mq5jpLtL-jmRY3h0oHZznA&s=10',
                })
              }
            >
              <Text style={styles.foodEmoji}>
                🧇
              </Text>

              <Text style={styles.cardTitle}>
                Waffles
              </Text>
            </Pressable>
          )}

          {shouldShow('Chocolate', 'Belgian chocolate is world-renowned for its quality, with traditions dating back centuries and famous pralines invented in Brussels.') && (
            <Pressable
              style={styles.foodCard}
              onPress={() =>
                openModal({
                  title: 'Chocolate',
                  description:
                    'Belgian chocolate is world-renowned for its quality, with traditions dating back centuries and famous pralines invented in Brussels.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yyx3QBLgpI6o80e6yGd6nizqa-GqGO5GsXKop2AmIPY6-8sqs1GcBGad&s=10',
                })
              }
            >
              <Text style={styles.foodEmoji}>
                🍫
              </Text>

              <Text style={styles.cardTitle}>
                Chocolate
              </Text>
            </Pressable>
          )}

        </View>
      </View>

      {/* CULTURE */}

      <View
        style={styles.section}
        onLayout={registerSection('Culture')}
      >
        <Text style={styles.sectionTitle}>
          Culture
        </Text>

        <View style={styles.cardRow}>

          {shouldShow('Festivals', 'Belgium hosts colorful festivals year-round, from the Carnival of Binche to Tomorrowland, one of the largest electronic music festivals in the world.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Festivals',
                  description:
                    'Belgium hosts colorful festivals year-round, from the Carnival of Binche to Tomorrowland, one of the largest electronic music festivals in the world.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_50g4jYFHhhvP13ckktayFPBYr0W5tUdUY7iDINZHw&s=10',
                })
              }
            >
              <Text style={styles.cardIcon}>
                🎭
              </Text>

              <Text style={styles.cardTitle}>
                Festivals
              </Text>
            </Pressable>
          )}

          {shouldShow('Football', 'Football is hugely popular in Belgium, with the national team, nicknamed the Red Devils, consistently ranked among the world’s best.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Football',
                  description:
                    'Football is hugely popular in Belgium, with the national team, nicknamed the Red Devils, consistently ranked among the world’s best.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDT9ZyvMg4_4LWDfp9fwGJPiBV0VFuOYQc3nsDQGW8wOWpKXLXPWDiWyw&s=10',
                  url: 'https://www.google.com/search?q=belgium+national+football+team'
                })
              }
            >
              <Text style={styles.cardIcon}>
                ⚽
              </Text>

              <Text style={styles.cardTitle}>
                Football
              </Text>
            </Pressable>
          )}

          {shouldShow('Art', 'Belgium has a rich artistic heritage, home to masters like Rubens, Bruegel, and the surrealist painter René Magritte.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Art',
                  description:
                    'Belgium has a rich artistic heritage, home to masters like Rubens, Bruegel, and the surrealist painter René Magritte.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYh0An4bYl8rJ-l7D-53TMHdtrYNokNIJE6B3wL2yZ06wHfvmnEQ1VVMxv&s=10',
                  url: 'https://en.wikipedia.org/wiki/Art_of_Belgium'
                })
              }
            >
              <Text style={styles.cardIcon}>
                🎨
              </Text>

              <Text style={styles.cardTitle}>
                Art
              </Text>
            </Pressable>
          )}

          {shouldShow('Music', 'From classical composers to modern electronic acts, Belgium has a diverse music scene and hosts major festivals like Tomorrowland and Rock Werchter.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Music',
                  description:
                    'From classical composers to modern electronic acts, Belgium has a diverse music scene and hosts major festivals like Tomorrowland and Rock Werchter.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd91i7QT77Rx0KQSXbyb-G_iW-Lr1zUJ5a6HIW0--am4CrSQrtQ7pK4pk&s=10',
                  url: 'https://www.youtube.com/watch?v=oiKj0Z_Xnjc&list=PLupMqH7FBHXGES5wShZ_IGbCrIEsapm0N0'
                })
              }
            >
              <Text style={styles.cardIcon}>
                🎵
              </Text>

              <Text style={styles.cardTitle}>
                Music
              </Text>
            </Pressable>
          )}

        </View>
      </View>

      {/* TIPS */}

      <View
        style={styles.section}
        onLayout={registerSection('Tips')}
      >
        <Text style={styles.sectionTitle}>
          Travel Tips
        </Text>

        <View style={styles.cardRow}>

          {shouldShow('Transport', 'Belgium has an extensive and efficient train network connecting all major cities, making it easy to travel without a car.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Transport',
                  description:
                    'Belgium has an extensive and efficient train network connecting all major cities, making it easy to travel without a car.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7RIZktXCaFMr4_SvGubslI6cCUBC9UWts3r4MK_wvYapc3oNy3MkDwVP&s=10',
                })
              }
            >
              <Text style={styles.cardIcon}>
                🚆
              </Text>

              <Text style={styles.cardTitle}>
                Transport
              </Text>
            </Pressable>
          )}

          {shouldShow('Currency', 'Belgium uses the Euro (€). Cards are widely accepted, though it’s useful to carry some cash for smaller shops and markets.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Currency',
                  description:
                    'Belgium uses the Euro (€). Cards are widely accepted, though it’s useful to carry some cash for smaller shops and markets.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JRj3MJbJBFuxf85Tr8xiq2tOh_rKhJsrwmVXZWOvHw&s=10',
                })
              }
            >
              <Text style={styles.cardIcon}>
                💶
              </Text>

              <Text style={styles.cardTitle}>
                Currency
              </Text>
            </Pressable>
          )}

          {shouldShow('Weather', 'Belgium has a temperate maritime climate with mild summers, cool winters and frequent rain, so it’s wise to pack an umbrella.') && (
            <Pressable
              style={styles.infoCard}
              onPress={() =>
                openModal({
                  title: 'Weather',
                  description:
                    'Belgium has a temperate maritime climate with mild summers, cool winters and frequent rain, so it’s wise to pack an umbrella.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbbTd9JDl3AX01c74_23IwBU4UGY8eQ_LTCLG8zNB4w&s=10',
                })
              }
            >
              <Text style={styles.cardIcon}>
                🌦
              </Text>

              <Text style={styles.cardTitle}>
                Weather
              </Text>
            </Pressable>
          )}

        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>

            {modalData.image ? (
              <Image
                source={{ uri: modalData.image }}
                style={styles.modalImage}
                resizeMode="cover"
              />
            ) : null}

            <Text style={styles.modalTitle}>
              {modalData.title}
            </Text>

            <Text style={styles.modalDescription}>
              {modalData.description}
            </Text>

            {modalData.url ? (
              <Pressable
                style={styles.mapButton}
                onPress={() =>
                  Linking.openURL(modalData.url)
                }
              >
                <Text style={styles.mapButtonText}>
                  Open in Web
                </Text>
              </Pressable>
            ) : null}

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                Close
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 24,
  },

  searchContainer: {
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
  },

  section: {
    marginBottom: 42,
  },

  sectionTitle: {
    fontFamily: 'IMPACT',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    color: '#D40202',
  },

  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  infoCard: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 2,
  },

  cardIcon: {
    fontSize: 28,
    marginBottom: 8,
  },

  cardTitle: {
    fontWeight: '600',
    textAlign: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  cityCard: {
    width: '48%',
    marginBottom: 14,
    backgroundColor: '#FFF',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 2,
  },

  cityImage: {
    width: '100%',
    height: 120,
  },

  cityName: {
    padding: 12,
    fontWeight: '700',
    textAlign: 'center',
  },

  foodCard: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 2,
  },

  foodEmoji: {
    fontSize: 34,
    marginBottom: 8,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContainer: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 24,
  },

  modalImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 16,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1A2B4A',
  },

  modalDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: '#1A2B4A',
    paddingVertical: 12,
    borderRadius: 10,
  },

  closeButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '700',
  },

  mapButton: {
    marginTop: 16,
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 10,
  },

  mapButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '700',
  },
});