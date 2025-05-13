import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  item: TodoItemType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ item, onToggle, onDelete }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.itemLeft}>
        <View style={[styles.checkbox, item.completed && styles.completed]}>
          {item.completed && <MaterialIcons name="check" size={16} color="white" />}
        </View>
        <Text style={[styles.itemText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <MaterialIcons name="delete-outline" size={24} color="#ff6b6b" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#4dabf7',
    borderColor: '#4dabf7',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
}); 