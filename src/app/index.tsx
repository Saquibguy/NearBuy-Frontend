import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>NearBuy</Text>

        <Text style={styles.title}>
          Your Need.{'\n'}Local Shops Compete.
        </Text>

        <Text style={styles.subtitle}>
          Post what you need and get offers from nearby local stores.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/role')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Shop local. Compare better.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    justifyContent: 'space-between',
    padding: 24,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    fontSize: 38,
    fontWeight: '800',
    color: '#2563EB',
    marginBottom: 45,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 42,
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 26,
    color: '#6B7280',
    maxWidth: 340,
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
    paddingBottom: 10,
  },
});