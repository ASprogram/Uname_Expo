import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function UserScreen() {
  const nearbyPeople = [
    { emoji: '🌉', name: 'たかはし' },
    { emoji: '🦵', name: 'あしざわ' },
    { emoji: '🍅', name: 'かわかみ' },
    { emoji: '✌️', name: 'やべ' },
    { emoji: '🍑', name: 'たべ' },
    { emoji: '🌳', name: 'もり' },
    { emoji: '💪', name: 'いせ' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 大見出し */}
      <Text style={styles.title}>U name</Text>

      {/* 説明テキスト */}
      <Text style={styles.subtitle}>
        目の前のアノヒトの名前を{'\n'}こっそり確認できます
      </Text>

      {/* セクションタイトル */}
      <Text style={styles.sectionTitle}>近くにいる人の名前</Text>

      {/* 名前リスト */}
      <View style={styles.peopleList}>
        {nearbyPeople.map((person, index) => (
          <View key={index} style={styles.personItem}>
            <Text style={styles.personEmoji}>{person.emoji}</Text>
            <Text style={styles.personName}>{person.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    marginTop: 40
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40, // 説明テキストの下に空白を追加
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  peopleList: {
    width: '80%',
    alignItems: 'center',
  },
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    width: '100%',
  },
  personEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  personName: {
    fontSize: 18,
    color: '#333333',
  },
});
