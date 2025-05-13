import { StyleSheet, FlatList, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem, { TodoItemType } from '../../components/TodoItem';
import TodoInput from '../../components/TodoInput';

export default function TabOneScreen() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  // 앱이 로드될 때 저장된 할 일 목록 불러오기
  useEffect(() => {
    loadTodos();
  }, []);

  // 할 일 목록 변경 시 저장하기
  useEffect(() => {
    saveTodos();
  }, [todos]);

  // AsyncStorage에서 할 일 목록 불러오기
  const loadTodos = async () => {
    try {
      const todosString = await AsyncStorage.getItem('@todos');
      if (todosString !== null) {
        setTodos(JSON.parse(todosString));
      }
    } catch (e) {
      console.error('할 일 목록을 불러오는데 실패했습니다:', e);
    }
  };

  // AsyncStorage에 할 일 목록 저장하기
  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('@todos', JSON.stringify(todos));
    } catch (e) {
      console.error('할 일 목록을 저장하는데 실패했습니다:', e);
    }
  };

  // 새로운 할 일 추가
  const handleAddTodo = (text: string) => {
    const newTodo: TodoItemType = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // 할 일 완료 상태 토글
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 삭제
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.title}>할 일 목록</Text>
            <TodoInput onAddTodo={handleAddTodo} />
            
            {todos.length > 0 ? (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                  />
                )}
                keyExtractor={item => item.id}
                style={styles.list}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>할 일이 없습니다</Text>
                <Text style={styles.emptySubText}>새로운 할 일을 추가해보세요!</Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  inner: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#adb5bd',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#ced4da',
  },
});
