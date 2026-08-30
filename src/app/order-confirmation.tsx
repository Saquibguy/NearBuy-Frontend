import { router } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function OrderConfirmationScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.successCircle}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.title}>Offer Accepted!</Text>

      <Text style={styles.subtitle}>
        Your purchase has been confirmed with the local shop.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>PURCHASE DETAILS</Text>

        <Text style={styles.product}>
          🎧 Bluetooth Headphones
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Shop</Text>
          <Text style={styles.value}>
            City Tech Store
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.price}>
            ₹1,650
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.value}>1</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Condition</Text>
          <Text style={styles.value}>New</Text>
        </View>
      </View>

      <View style={styles.shopCard}>
        <Text style={styles.sectionTitle}>SHOP DETAILS</Text>

        <Text style={styles.shopName}>
          City Tech Store
        </Text>

        <Text style={styles.shopInfo}>
          📍 1.8 km away
        </Text>

        <Text style={styles.shopInfo}>
          ★ 4.5 rating
        </Text>

        <Text style={styles.address}>
          Andheri West, Mumbai
        </Text>
      </View>

      <View style={styles.pickupCard}>
        <Text style={styles.pickupTitle}>
          Pickup Information
        </Text>

        <Text style={styles.pickupText}>
          Your product is available for pickup today.
        </Text>

        <Text style={styles.pickupText}>
          Show your order details at the shop.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.replace('/customer-home')}
      >
        <Text style={styles.homeButtonText}>
          Back to Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.requestsButton}
        onPress={() => router.push('/my-requests')}
      >
        <Text style={styles.requestsButtonText}>
          View My Requests
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },

  content: {
    padding: 24,
    paddingTop: 50,
    paddingBottom: 50,
  },

  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  check: {
    fontSize: 42,
    color: '#16A34A',
    fontWeight: '700',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
    marginBottom: 12,
  },

  product: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#16A34A',
  },

  shopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },

  shopName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },

  shopInfo: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 7,
  },

  address: {
    fontSize: 14,
    color: '#374151',
    marginTop: 12,
  },

  pickupCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },

  pickupTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },

  pickupText: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20,
    marginTop: 7,
  },

  homeButton: {
    height: 54,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  requestsButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  requestsButtonText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
});