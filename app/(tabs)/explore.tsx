import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Todo 앱 소개</Text>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="info" size={24} color="#4dabf7" />
            <Text style={styles.cardTitle}>앱 소개</Text>
          </View>
          <Text style={styles.cardText}>
            이 앱은 할 일을 관리할 수 있는 간단한 Todo 리스트 앱입니다. React Native와 Expo를 사용하여 개발되었습니다.
          </Text>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="check-circle" size={24} color="#4dabf7" />
            <Text style={styles.cardTitle}>주요 기능</Text>
          </View>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <MaterialIcons name="add-circle-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>새로운 할 일 추가</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="check" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>할 일 완료 표시</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="delete-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>할 일 삭제</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="save" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>자동 저장 기능</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <MaterialIcons name="code" size={24} color="#4dabf7" />
            <Text style={styles.cardTitle}>사용 기술</Text>
          </View>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <MaterialIcons name="check-circle-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>React Native</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="check-circle-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>Expo</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="check-circle-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>TypeScript</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="check-circle-outline" size={20} color="#4dabf7" />
              <Text style={styles.featureText}>AsyncStorage</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#343a40',
  },
  cardText: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#495057',
    marginLeft: 8,
  },
});
