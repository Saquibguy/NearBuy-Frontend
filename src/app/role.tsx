import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RoleScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>NearBuy</Text>

        <Text style={styles.title}>Welcome to NearBuy</Text>

        <Text style={styles.subtitle}>
          How would you like to use NearBuy?
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/customer-login')}
        >
          <Text style={styles.icon}>🛍️</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Customer</Text>
            <Text style={styles.cardSubtitle}>
              I want to buy products
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push('/seller-login')}
        >
          <Text style={styles.icon}>🏪</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Local Shop</Text>
            <Text style={styles.cardSubtitle}>
              I want to sell products
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Supporting local businesses
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    padding: 24,
    justifyContent: 'space-between',
  },

  logo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
    marginTop: 20,
    marginBottom: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 35,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  icon: {
    fontSize: 32,
    marginRight: 18,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 5,
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },

  arrow: {
    fontSize: 30,
    color: '#9CA3AF',
  },

  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
    paddingBottom: 10,
  },
});