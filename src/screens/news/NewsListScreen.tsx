import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Screen } from '@src/navigation/appNavigation.type';

export const NewsListScreen = () => {
  const navigation = useNavigation();

  const dummyNews = [
    { id: '1', title: 'News 1' },
    { id: '2', title: 'News 2' },
    // Add more dummy news items
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        data={dummyNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.newsItem}
            // onPress={() => navigation.navigate(Screen.NEWS_DETAIL, { id: item.id })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  newsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
}); 